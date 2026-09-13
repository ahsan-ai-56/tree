// TEMPORARY TEST — pages/api/test-groq.js
// Visit: https://treeidentifier.online/api/test-groq
// Delete after debugging!

export default async function handler(req, res) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(200).json({
      status: '❌ GROQ_API_KEY not set in Vercel',
    });
  }

  // Test qwen model with simple text (no image)
  const textTest = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'qwen/qwen3.6-27b',
      max_tokens: 20,
      messages: [{ role: 'user', content: 'Say hi' }],
    }),
  });

  const textData = await textTest.json();

  if (!textTest.ok) {
    return res.status(200).json({
      status: '❌ qwen/qwen3.6-27b text FAILED',
      error: textData?.error?.message || textData,
      keyPreview: `${apiKey.slice(0, 10)}...`,
    });
  }

  // Test qwen model WITH image (small test image)
  const testImageBase64 = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACQQAAIBAwMEAwAAAAAAAAAAAAECAwQREiExBRNBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aq9O0ue7jeW3t3kjiOHYDOPyKraLot3eSRw29u8kkhwqKMk0UBa6VoE9vNHJLbukiHDKwyDS2WlW1lGI4IgijsBRRQH//2Q==';

  const imageTest = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'qwen/qwen3.6-27b',
      max_tokens: 50,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: `data:image/jpeg;base64,${testImageBase64}` },
            },
            { type: 'text', text: 'What do you see?' },
          ],
        },
      ],
    }),
  });

  const imageData = await imageTest.json();

  return res.status(200).json({
    textTest: textTest.ok ? '✅ qwen text works' : '❌ qwen text failed',
    imageTest: imageTest.ok ? '✅ qwen vision works' : '❌ qwen vision FAILED',
    imageError: imageTest.ok ? null : (imageData?.error?.message || imageData),
    keyPreview: `${apiKey.slice(0, 10)}...`,
  });
}
