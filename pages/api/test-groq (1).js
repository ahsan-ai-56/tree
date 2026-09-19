// TEMP TEST — pages/api/test-groq.js
// Visit: https://treeidentifier.online/api/test-groq

export default async function handler(req, res) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(200).json({ status: '❌ GROQ_API_KEY not set in Vercel' });
  }

  // Get all available models on this account
  const modelsRes = await fetch('https://api.groq.com/openai/v1/models', {
    headers: { 'Authorization': `Bearer ${apiKey}` },
  });

  const modelsData = await modelsRes.json();

  if (!modelsRes.ok) {
    return res.status(200).json({
      status: '❌ Could not fetch models',
      error: modelsData?.error?.message,
    });
  }

  // Filter only vision-capable models
  const allModels = modelsData.data?.map(m => m.id) || [];
  const visionModels = allModels.filter(id =>
    id.includes('vision') ||
    id.includes('llava') ||
    id.includes('llama-4') ||
    id.includes('qwen') ||
    id.includes('deepseek') ||
    id.includes('gemma')
  );

  return res.status(200).json({
    status: '✅ Key works',
    keyPreview: `${apiKey.slice(0, 10)}...`,
    totalModels: allModels.length,
    allModels: allModels,
    possibleVisionModels: visionModels,
  });
}
