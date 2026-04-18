export const runtime = 'edge';

import { getRequestContext } from '@cloudflare/next-on-pages';
import { revalidatePath } from 'next/cache';
import { RecipeSchema } from '@/lib/validate';
import { insertRecipe } from '@/lib/db';
import type { RecipeRecord } from '@/lib/types';

interface PublishRequest {
  recipe: RecipeRecord;
}

async function fetchYouTubeVideoId(query: string, apiKey: string): Promise<string | null> {
  const params = new URLSearchParams({
    part: 'snippet',
    q: query,
    type: 'video',
    maxResults: '1',
    order: 'relevance',
    key: apiKey,
  });

  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`);
    if (!response.ok) return null;
    const data = await response.json() as { items?: { id: { videoId: string } }[] };
    return data.items?.[0]?.id?.videoId ?? null;
  } catch {
    return null;
  }
}

export async function POST(request: Request): Promise<Response> {
  let body: PublishRequest;
  try {
    body = await request.json() as PublishRequest;
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const result = RecipeSchema.safeParse(body.recipe);
  if (!result.success) {
    return Response.json(
      { error: 'Validation failed', details: result.error.issues },
      { status: 422 }
    );
  }

  const recipe = result.data as RecipeRecord;
  const { env } = getRequestContext();

  // Fetch YouTube video ID if not already set
  if (!recipe.youtube_video_id && recipe.youtube_query) {
    const videoId = await fetchYouTubeVideoId(recipe.youtube_query, env.YOUTUBE_API_KEY);
    if (videoId) {
      recipe.youtube_video_id = videoId;
    }
  }

  try {
    await insertRecipe(env.DB, recipe);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: `Failed to save recipe: ${message}` }, { status: 500 });
  }

  revalidatePath(`/recipes/${recipe.slug}`);
  revalidatePath('/sitemap.xml');

  return Response.json({ slug: recipe.slug });
}
