export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, mimeType } = req.body;
  if (!image) {
    return res.status(400).json({ error: 'No image provided' });
  }

  const approxSizeMB = (image.length * 0.75) / (1024 * 1024);
  if (approxSizeMB > 3.8) {
    return res.status(413).json({
      error: `Image too large (${approxSizeMB.toFixed(1)}MB). Please use a photo under 4MB.`,
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured.' });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 28000);

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.6-27b',
        temperature: 0.1,
        max_tokens: 1500,
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content: 'You are an expert botanist specializing in leaf identification. Respond with valid JSON only. No markdown, no backticks, no extra text.',
          },
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: `data:${mimeType};base64,${image}` },
              },
              {
                type: 'text',
                text: 'Identify this leaf. Examine shape, margin, venation, texture, color. Return ONLY this JSON:\n{"commonName":"","scientificName":"","family":"","nativeRegion":"","treeType":"","height":"","leafType":"","leafShape":"","leafMargin":"","venation":"","conservationStatus":"","confidence":85,"description":"","careTips":"","uses":""}',
              },
            ],
          },
        ],
      }),
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('Groq error:', response.status, errData);
      return res.status(502).json({ error: 'AI service error. Please try again.' });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || '';
    const cleaned = text.replace(/```json|```/g, '').trim();

    let result;
    try {
      result = JSON.parse(cleaned);
    } catch {
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (match) result = JSON.parse(match[0]);
      else return res.status(500).json({ error: 'Could not parse AI response. Please try again.' });
    }

    return res.status(200).json(result);

  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'Request timed out. Please try again.' });
    }
    console.error('Error:', err.message);
    return res.status(500).json({ error: 'Failed to identify leaf. Please try again.' });
  }
}

export const config = {
  api: { bodyParser: { sizeLimit: '10mb' } },
};
