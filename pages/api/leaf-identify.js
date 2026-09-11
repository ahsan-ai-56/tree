export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, mimeType } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'No image provided' });
  }

  // --- NEW: guard against oversized images causing memory/payload issues ---
  const approxSizeMB = (image.length * 0.75) / (1024 * 1024); // base64 -> bytes estimate
  if (approxSizeMB > 8) {
    return res.status(413).json({
      error: `Image too large (${approxSizeMB.toFixed(1)}MB). Please use a smaller photo (under 8MB).`,
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured. Please set GROQ_API_KEY in your environment variables.' });
  }

  const prompt = `You are an expert botanist specializing in leaf identification. Analyze this leaf image (shape, margin, venation, texture, color) and identify the tree species. Return JSON: {"commonName":"","scientificName":"","family":"","nativeRegion":"","treeType":"","height":"","leafType":"","leafShape":"","leafMargin":"","venation":"","conservationStatus":"","confidence":90,"description":"","careTips":"","uses":""}`;

  // --- NEW: abort the Groq call if it takes too long, instead of letting the
  // serverless function hang until the platform kills it (which shows up as a 502) ---
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000); // 25s budget

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'qwen/qwen3.6-27b',
        temperature: 1,
        max_tokens: 2000,
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content: 'You are an expert botanist. Always respond with valid JSON only. No markdown, no backticks.',
          },
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:${mimeType};base64,${image}`,
                },
              },
              {
                type: 'text',
                text: prompt,
              },
            ],
          },
        ],
      }),
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('Groq API error:', response.status, errData);

      // --- CHANGED: surface the real reason instead of a generic message.
      // Remove/redact this in production once you've diagnosed the issue. ---
      return res.status(502).json({
        error: 'AI service error. Please try again.',
        debug: {
          version: 'v3-debug-marker',
          groqStatus: response.status,
          groqMessage: errData?.error?.message || errData,
        },
      });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || '';

    const cleaned = text.replace(/```json|```/g, '').trim();
    let result;
    try {
      result = JSON.parse(cleaned);
    } catch {
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (match) {
        result = JSON.parse(match[0]);
      } else {
        throw new Error('Could not parse AI response');
      }
    }

    return res.status(200).json(result);
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      console.error('Leaf identification timed out');
      return res.status(504).json({ error: 'AI service took too long to respond. Please try again.' });
    }
    console.error('Leaf identification error:', err);
    return res.status(500).json({ error: 'Failed to identify leaf. Please try again with a clearer photo.' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb',
    },
  },
};
