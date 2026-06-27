export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, mimeType } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'No image provided' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured. Please set GROQ_API_KEY in your environment variables.' });
  }

  const prompt = `You are an expert botanist specializing in dendrology (the study of trees) with particular expertise in leaf morphology and identification.

Analyze this leaf image carefully. Examine: overall leaf shape (ovate, lanceolate, palmate, etc.), leaf margin (entire, serrated, lobed, crenate), venation pattern (pinnate, palmate, parallel), leaf texture (glossy, hairy, waxy, rough), color, and any other distinctive leaf features visible.

Respond ONLY with a valid JSON object (no markdown, no backticks, no explanation) in exactly this format:
{
  "commonName": "Common name of the tree this leaf belongs to",
  "scientificName": "Genus species",
  "family": "Plant family name",
  "nativeRegion": "Geographic origin",
  "treeType": "Deciduous/Evergreen/Coniferous/etc",
  "height": "Typical height range of the tree",
  "leafType": "Detailed leaf type description",
  "leafShape": "Technical leaf shape term",
  "leafMargin": "Margin type (e.g. serrated, entire, lobed)",
  "venation": "Venation pattern type",
  "conservationStatus": "IUCN status",
  "confidence": 94,
  "description": "2-3 sentences about the tree species and key identification features, mentioning distinctive leaf characteristics.",
  "careTips": "2-3 sentences about the tree's growing requirements and care.",
  "uses": "2-3 sentences about ecological and practical uses of this tree species."
}

Focus especially on leaf-specific identification markers. If the leaf image is unclear, note it in the description and set confidence accordingly.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        max_tokens: 1000,
        messages: [
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

    if (!response.ok) {
      const errData = await response.json();
      console.error('Groq API error:', errData);
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
      if (match) {
        result = JSON.parse(match[0]);
      } else {
        throw new Error('Could not parse AI response');
      }
    }

    return res.status(200).json(result);
  } catch (err) {
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
