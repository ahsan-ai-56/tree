// TEMPORARY TEST FILE — pages/api/test-groq.js
// Visit: https://yoursite.com/api/test-groq
// Delete this file after debugging!

export default async function handler(req, res) {
  const apiKey = process.env.GROQ_API_KEY;

  // Step 1: Check if API key exists
  if (!apiKey) {
    return res.status(200).json({
      status: '❌ FAIL',
      problem: 'GROQ_API_KEY is NOT set in Vercel environment variables',
      fix: 'Go to Vercel → Project → Settings → Environment Variables → Add GROQ_API_KEY',
    });
  }

  // Step 2: Test Groq API with a simple text request (no image)
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-maverick-17b-128e-instruct',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Say hi' }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(200).json({
        status: '❌ FAIL',
        problem: 'Groq API key is invalid or expired',
        groqError: data?.error?.message || data,
        fix: 'Get a new API key from https://console.groq.com/keys',
        keyPreview: `${apiKey.slice(0, 8)}...${apiKey.slice(-4)}`,
      });
    }

    return res.status(200).json({
      status: '✅ SUCCESS',
      message: 'Groq API key is working!',
      model: 'meta-llama/llama-4-maverick-17b-128e-instruct',
      keyPreview: `${apiKey.slice(0, 8)}...${apiKey.slice(-4)}`,
      groqResponse: data.choices?.[0]?.message?.content,
    });

  } catch (err) {
    return res.status(200).json({
      status: '❌ FAIL',
      problem: 'Network error connecting to Groq',
      error: err.message,
    });
  }
}
