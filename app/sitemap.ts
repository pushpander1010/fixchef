export const runtime = 'edge';

import type { MetadataRoute } from 'next';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { getAllPublishedSlugs } from '@/lib/db';

const SITE_URL = 'https://fixchef.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { env } = getRequestContext();
  const slugs = await getAllPublishedSlugs(env.DB);

  return slugs.map((slug) => ({
    url: `${SITE_URL}/recipes/${slug}`,
    lastModified: new Date(),
  }));
}
