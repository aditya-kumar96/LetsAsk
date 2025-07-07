// src/features/chat/chatAPI.ts

export const fetchOpenAIResponse = async (message: string): Promise<string> => {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer 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`, // <-- replace securely in env later
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        store:true,
        messages: [{ role: 'user', content: message }],
      }),
    });
  
    if (!res.ok) {
      const error = await res.text();
      throw new Error(`OpenAI API error: ${res.status} - ${error}`);
    }
  
    const data = await res.json();
    console.log('Update message',data)
    return data.choices[0].message.content.trim();
  };
  