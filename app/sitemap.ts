import type { MetadataRoute } from 'next';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getAllPublishedSlugs } from '@/lib/db';

export const dynamic = 'force-dynamic';

const SITE_URL = 'https://fixchef.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { env } = await getCloudflareContext({ async: true });
  const slugs = await getAllPublishedSlugs(env.DB);

  return slugs.map((slug) => ({
    url: `${SITE_URL}/recipes/${slug}`,
    lastModified: new Date(),
  }));
}
