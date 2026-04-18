import { getCloudflareContext } from '@opennextjs/cloudflare';
import { RecipeSchema } from '@/lib/validate';

export const runtime = 'edge';

interface GenerateRequest {
  keyword: string;
}

const GENERATE_PROMPT = (keyword: string) => `Generate a complete recipe for "${keyword}" as a JSON object.

The JSON must conform exactly to this TypeScript interface:
{
  version: number (use 1),
  slug: string (kebab-case, lowercase, only a-z 0-9 and hyphens),
  title: string,
  category: string (one of: Sweets, Sour, Spicy, Mexican, Gym/Fitness, Healthy, Diet, Fast Foods),
  description: string,
  hero_image_url: string (a valid https:// URL to a food image, use https://images.unsplash.com/...),
  meta_title: string (MUST be 60 characters or fewer),
  meta_description: string (MUST be 160 characters or fewer),
  keywords: string[] (at least 3 relevant keywords),
  ingredients: Array<{ name: string, quantity: string, unit: string }> (at least 3),
  steps: Array<{ order: number, instruction: string }> (at least 3),
  nutrition: { calories: number, protein_g: number, carbs_g: number, fat_g: number, serving_size: string },
  tips: string[] (at least 2 tips),
  youtube_query: string (optimized search query to find a relevant cooking video),
  prep_time: string (e.g. "15 minutes"),
  cook_time: string (e.g. "30 minutes"),
  total_time: string (e.g. "45 minutes"),
  difficulty: string (one of: Easy, Medium, Hard),
  servings: string (e.g. "4 servings"),
  related_recipes: string[] (MUST contain at least 3 kebab-case slugs of semantically related recipes),
  published: boolean (use false)
}

CRITICAL CONSTRAINTS:
- meta_title MUST be 60 characters or fewer
- meta_description MUST be 160 characters or fewer
- related_recipes MUST have at least 3 entries
- slug MUST match /^[a-z0-9-]+$/
- hero_image_url MUST be a valid https:// URL

Respond with ONLY the raw JSON object, no markdown, no code fences, no explanation.`;

export async function POST(request: Request): Promise<Response> {
  let body: GenerateRequest;
  try {
    body = await request.json() as GenerateRequest;
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { keyword } = body;
  if (!keyword || keyword.trim() === '') {
    return Response.json({ error: 'Missing required field: keyword' }, { status: 400 });
  }

  const { env } = await getCloudflareContext({ async: true });
  const apiKey = env.TOGETHER_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Together AI API key not configured' }, { status: 500 });
  }

  let rawJson: string;
  try {
    const response = await fetch('https://api.together.xyz/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemma-3n-E4B-it',
        messages: [{ role: 'user', content: GENERATE_PROMPT(keyword.trim()) }],
        max_tokens: 2048,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return Response.json({ error: `Generation failed: ${errText}` }, { status: 500 });
    }

    const data = await response.json() as { choices: { message: { content: string } }[] };
    rawJson = data.choices[0]?.message?.content ?? '';
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: `Generation failed: ${message}` }, { status: 500 });
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawJson);
  } catch {
    return Response.json({ error: 'Generation failed: model returned invalid JSON' }, { status: 500 });
  }

  const result = RecipeSchema.safeParse(parsed);
  if (!result.success) {
    return Response.json(
      { error: 'Generation failed: schema validation error', details: result.error.issues },
      { status: 500 }
    );
  }

  return Response.json({ recipe: result.data });
}
