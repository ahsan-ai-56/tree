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
    return res.status(500).json({ error: 'API key not configured' });
  }

  const prompt = `You are an expert botanist. Analyze this tree image and respond ONLY with a valid JSON object, no markdown, no extra text:
{
  "commonName": "Common name",
  "scientificName": "Genus species",
  "family": "Plant family",
  "nativeRegion": "Geographic origin",
  "treeType": "Deciduous/Evergreen/Coniferous",
  "height": "Typical height range",
  "leafType": "Leaf description",
  "conservationStatus": "IUCN status",
  "confidence": 90,
  "description": "2-3 sentence description",
  "careTips": "2-3 sentences about care",
  "uses": "2-3 sentences about uses"
}`;

  body: JSON.stringify({
  model: 'qwen/qwen3.6-27b',
  temperature: 1,
  max_tokens: 1000,
  response_format: { type: "json_object" },
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

    const data = await response.json();

    if (!response.ok) {
      console.error('Groq API error:', JSON.stringify(data));
      return res.status(502).json({ error: `Groq error: ${data?.error?.message || 'Unknown error'}` });
    }

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
        console.error('Parse error, raw response:', cleaned);
        return res.status(500).json({ error: 'Could not parse AI response' });
      }
    }

    return res.status(200).json(result);

  } catch (err) {
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
