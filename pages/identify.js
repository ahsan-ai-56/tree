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

  const prompt = `You are an expert botanist and arborist with decades of experience identifying tree species worldwide.

Analyze this tree image carefully and provide a detailed species identification. Look for: leaf shape and margin, bark texture and color, branching pattern, fruit or cones if visible, overall tree form, and any other distinctive botanical features.

Respond ONLY with a valid JSON object (no markdown, no backticks, no explanation) in exactly this format:
{
  "commonName": "Common name of the tree",
  "scientificName": "Genus species",
  "family": "Plant family name",
  "nativeRegion": "Geographic origin",
  "treeType": "Deciduous/Evergreen/Coniferous/etc",
  "height": "Typical height range",
  "leafType": "Leaf description",
  "conservationStatus": "IUCN status",
  "confidence": 95,
  "description": "2-3 sentence description of this tree species including key identifying features and ecological significance.",
  "careTips": "2-3 sentences about growing conditions, soil, sunlight, and maintenance requirements.",
  "uses": "2-3 sentences about traditional, commercial, or ecological uses of this tree."
}

If you cannot identify the tree with reasonable confidence, set confidence below 60 and use "Unknown Species" as commonName.`;

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

    // Clean and parse JSON
    const cleaned = text.replace(/```json|```/g, '').trim();
    let result;
    try {
      result = JSON.parse(cleaned);
    } catch {
      // Try to extract JSON from response
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (match) {
        result = JSON.parse(match[0]);
      } else {
        throw new Error('Could not parse AI response');
      }
    }

    return res.status(200).json(result);
  } catch (err) {
    console.error('Identification error:', err);
    return res.status(500).json({ error: 'Failed to identify tree. Please try again with a clearer photo.' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb',
    },
  },
};
