export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, mimeType } = req.body;
  if (!image) {
    return res.status(400).json({ error: 'No image provided' });
  }

  // Guard against oversized images
  const approxSizeMB = (image.length * 0.75) / (1024 * 1024);
  if (approxSizeMB > 8) {
    return res.status(413).json({
      error: `Image too large (${approxSizeMB.toFixed(1)}MB). Please use a smaller photo (under 8MB).`,
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  // Abort if Groq takes too long (Vercel serverless limit is 10s on hobby, 25s on pro)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // FIX: switched to a stable Groq vision model
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        temperature: 0.2,
        max_tokens: 1000,
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content:
              'You are an expert botanist and tree identification specialist. ' +
              'Always respond with valid JSON only. No markdown, no backticks, no extra text.',
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
                text:
                  'Analyze this tree image carefully. Identify the species based on visible features ' +
                  '(bark, leaves, shape, fruit, flowers if visible). ' +
                  'Return ONLY this JSON object with no extra text:\n' +
                  '{"commonName":"","scientificName":"","family":"","nativeRegion":"",' +
                  '"treeType":"","height":"","leafType":"","conservationStatus":"",' +
                  '"confidence":85,"description":"","careTips":"","uses":""}',
              },
            ],
          },
        ],
      }),
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('Groq API error:', response.status, JSON.stringify(errData));
      return res.status(502).json({
        error: 'AI service error. Please try again in a moment.',
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
        console.error('Could not parse AI response:', cleaned);
        return res.status(500).json({ error: 'Could not parse AI response. Please try again.' });
      }
    }

    return res.status(200).json(result);

  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      console.error('Tree identification timed out');
      return res.status(504).json({ error: 'AI service took too long. Please try again.' });
    }
    console.error('Identification error:', err.message);
    return res.status(500).json({ error: 'Failed to identify tree. Please try again.' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb',
    },
  },
};
