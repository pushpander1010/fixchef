export const runtime = 'edge';

import { getRequestContext } from '@cloudflare/next-on-pages';
import { getRecipeBySlug } from '@/lib/db';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  recipeSlug: string;
  messages: ChatMessage[];
}

export async function POST(request: Request): Promise<Response> {
  let body: ChatRequest;
  try {
    body = await request.json() as ChatRequest;
  } catch {
    return Response.json({ reply: "Sorry, I couldn't process that. Please try again." }, { status: 400 });
  }

  const { recipeSlug, messages } = body;
  if (!recipeSlug || !Array.isArray(messages)) {
    return Response.json({ reply: "Sorry, I couldn't process that. Please try again." }, { status: 400 });
  }

  const { env } = getRequestContext();
  const recipe = await getRecipeBySlug(env.DB, recipeSlug);
  if (!recipe) {
    return Response.json({ reply: "Sorry, I couldn't find that recipe." }, { status: 404 });
  }

  const systemPrompt = `You are a cooking assistant for the recipe "${recipe.title}".
You have access ONLY to the following recipe data and must answer questions exclusively based on this information.
If a question is not related to this specific recipe (its ingredients, steps, substitutions, storage, nutrition, tips, or cooking techniques),
you MUST refuse to answer and respond with: "I can only answer questions about this specific recipe."

Recipe data:
${JSON.stringify(recipe, null, 2)}`;

  const apiKey = env.TOGETHER_API_KEY;
  if (!apiKey) {
    return Response.json({ reply: "Sorry, I couldn't process that. Please try again." });
  }

  try {
    const response = await fetch('https://api.together.xyz/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemma-3n-E4B-it',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      return Response.json({ reply: "Sorry, I couldn't process that. Please try again." });
    }

    const data = await response.json() as { choices: { message: { content: string } }[] };
    const reply = data.choices[0]?.message?.content ?? "Sorry, I couldn't process that. Please try again.";
    return Response.json({ reply });
  } catch {
    return Response.json({ reply: "Sorry, I couldn't process that. Please try again." });
  }
}
