import { getCloudflareContext } from '@opennextjs/cloudflare';

const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query || query.trim() === '') {
    return Response.json({ error: 'Missing query parameter: q' }, { status: 400 });
  }

  const { env } = await getCloudflareContext({ async: true });
  const apiKey = env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'YouTube API key not configured' }, { status: 500 });
  }

  const params = new URLSearchParams({
    part: 'snippet',
    q: query.trim(),
    type: 'video',
    maxResults: '1',
    order: 'relevance',
    key: apiKey,
  });

  try {
    const response = await fetch(`${YOUTUBE_SEARCH_URL}?${params.toString()}`);
    if (!response.ok) {
      return Response.json({ error: `YouTube API error: ${response.status}` }, { status: 502 });
    }

    const data = await response.json() as { items?: { id: { videoId: string } }[] };
    const items = data.items ?? [];

    if (items.length === 0) {
      return Response.json({ error: 'No videos found' }, { status: 404 });
    }

    const videoId = items[0].id.videoId;
    return Response.json({ videoId });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: `Failed to fetch YouTube results: ${message}` }, { status: 502 });
  }
}
