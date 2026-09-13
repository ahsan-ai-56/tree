// Vision models in priority order — if one fails, next is tried automatically
const VISION_MODELS = [
  'meta-llama/llama-4-maverick-17b-128e-instruct',
  'meta-llama/llama-4-scout-17b-16e-instruct',
  'llama-3.2-90b-vision-preview',
  'llama-3.2-11b-vision-preview',
];

async function callGroq(apiKey, model, mimeType, image, signal) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    signal,
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature: 0.1,
      max_tokens: 1500,
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content:
            'You are an expert botanist specializing in leaf identification. ' +
            'Always respond with valid JSON only. No markdown, no backticks, no extra text.',
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
              text:
                'Analyze this leaf image carefully. Examine shape, margin, venation, texture, and color ' +
                'to identify the tree species. ' +
                'Return ONLY this JSON (no extra text):\n' +
                '{"commonName":"","scientificName":"","family":"","nativeRegion":"",' +
                '"treeType":"","height":"","leafType":"","leafShape":"",' +
                '"leafMargin":"","venation":"","conservationStatus":"",' +
                '"confidence":85,"description":"","careTips":"","uses":""}',
            },
          ],
        },
      ],
    }),
  });

  return response;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, mimeType } = req.body;
  if (!image) {
    return res.status(400).json({ error: 'No image provided' });
  }

  // Guard oversized images
  const approxSizeMB = (image.length * 0.75) / (1024 * 1024);
  if (approxSizeMB > 8) {
    return res.status(413).json({
      error: `Image too large (${approxSizeMB.toFixed(1)}MB). Please use a smaller photo under 8MB.`,
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'API key not configured. Please set GROQ_API_KEY in environment variables.',
    });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 28000);

  let lastError = '';

  try {
    // Try each model in order — first success wins
    for (const model of VISION_MODELS) {
      try {
        console.log(`[leaf-identify] Trying model: ${model}`);
        const response = await callGroq(apiKey, model, mimeType, image, controller.signal);

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          const errMsg = errData?.error?.message || `HTTP ${response.status}`;
          console.warn(`[leaf-identify] Model ${model} failed: ${errMsg}`);
          lastError = errMsg;

          if ([400, 429, 503, 502].includes(response.status)) continue;
          break;
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
          else {
            console.warn(`[leaf-identify] Could not parse from ${model}:`, cleaned.slice(0, 200));
            lastError = 'Could not parse AI response';
            continue;
          }
        }

        clearTimeout(timeoutId);
        console.log(`[leaf-identify] Success with model: ${model}`);
        return res.status(200).json(result);

      } catch (modelErr) {
        if (modelErr.name === 'AbortError') throw modelErr;
        console.warn(`[leaf-identify] Exception with model ${model}:`, modelErr.message);
        lastError = modelErr.message;
      }
    }

    // All models failed
    clearTimeout(timeoutId);
    console.error('[leaf-identify] All models failed. Last error:', lastError);
    return res.status(502).json({
      error: 'AI service is temporarily unavailable. Please try again in a moment.',
    });

  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'Request timed out. Please try again.' });
    }
    console.error('[leaf-identify] Unexpected error:', err.message);
    return res.status(500).json({ error: 'Failed to identify leaf. Please try again.' });
  }
}

export const config = {
  api: { bodyParser: { sizeLimit: '15mb' } },
};
