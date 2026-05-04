import type { MetadataRoute } from 'next';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getAllPublishedSlugs, getAllCategories } from '@/lib/db';

export const dynamic = 'force-dynamic';

const SITE_URL = 'https://fixchef.com';

const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/`,               lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
  { url: `${SITE_URL}/about`,          lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.6 },
  { url: `${SITE_URL}/contact`,        lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.5 },
  { url: `${SITE_URL}/disclaimer`,     lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.4 },
  { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.3 },
  { url: `${SITE_URL}/terms`,          lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.3 },
];

// All available categories
const CATEGORY_SLUGS = [
  'sweets', 'healthy', 'spicy', 'mexican', 'fast-foods', 'gym-fitness',
  'diet', 'sour', 'pasta', 'asian', 'soups', 'breakfast', 'meal-prep',
  'snacks', 'drinks', 'baking'
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { env } = await getCloudflareContext({ async: true });
  const slugs = await getAllPublishedSlugs(env.DB);

  const recipePages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/recipes/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Add category pages to sitemap
  const categoryPages: MetadataRoute.Sitemap = CATEGORY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  return [...STATIC_PAGES, ...categoryPages, ...recipePages];
}
