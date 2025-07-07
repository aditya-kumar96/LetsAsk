// src/features/chat/chatAPI.ts


export const fetchOpenAIResponse = async (message: string): Promise<string> => {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer `, // <-- replace securely in env later
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
  