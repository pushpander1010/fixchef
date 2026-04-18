import { getCloudflareContext } from '@opennextjs/cloudflare';
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

  const { env } = await getCloudflareContext({ async: true });
  const recipe = await getRecipeBySlug(env.DB, recipeSlug);
  if (!recipe) {
    return Response.json({ reply: "Sorry, I couldn't find that recipe." }, { status: 404 });
  }

  const systemPrompt = `You are Chef AI, a friendly and knowledgeable cooking assistant embedded on a recipe page.
You are here to help the user cook "${recipe.title}" successfully.
Answer questions about ingredients, steps, substitutions, storage, nutrition, tips, and cooking techniques for this recipe.
If a question is completely unrelated to cooking or this recipe, gently redirect: "I'm here to help you cook this dish — ask me anything about the recipe!"

RESPONSE FORMAT — always follow these rules:
- Use short bullet points (•) for every answer, even for a single fact.
- Each bullet must be one concise sentence — no padding, no filler.
- Aim for 2–5 bullets per answer; never more than 6.
- Do NOT write long paragraphs or introductory sentences before the bullets.
- If the answer is a single fact, still format it as one bullet.

Use the recipe data below as your source of truth.

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
        max_tokens: 300,
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
