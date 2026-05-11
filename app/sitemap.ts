import type { MetadataRoute } from 'next';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getAllPublishedSlugs, getAllCategories } from '@/lib/db';

export const dynamic = 'force-dynamic';

const SITE_URL = 'https://www.fixchef.com';

/**
 * FixChef Sitemap Structure (22+ pages)
 * 
 * Static Pages (6):
 *   1. / (homepage)
 *   2. /about
 *   3. /contact
 *   4. /disclaimer
 *   5. /privacy-policy
 *   6. /terms
 * 
 * Category Pages (16):
 *   7. /category/sweets
 *   8. /category/healthy
 *   9. /category/spicy
 *   10. /category/mexican
 *   11. /category/fast-foods
 *   12. /category/gym-fitness
 *   13. /category/diet
 *   14. /category/sour
 *   15. /category/pasta
 *   16. /category/asian
 *   17. /category/soups
 *   18. /category/breakfast
 *   19. /category/meal-prep
 *   20. /category/snacks
 *   21. /category/drinks
 *   22. /category/baking
 * 
 * Recipe Pages (dynamic):
 *   /recipes/[slug] - All published recipes from D1
 */

const STATIC_PAGES: MetadataRoute.Sitemap = [
  // Main pages
  { url: `${SITE_URL}/`,               lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
  
  // Information pages
  { url: `${SITE_URL}/about`,          lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.6 },
  { url: `${SITE_URL}/contact`,        lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.5 },
  
  // Legal pages
  { url: `${SITE_URL}/disclaimer`,     lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.4 },
  { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.3 },
  { url: `${SITE_URL}/terms`,          lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.3 },
];

// All available categories
// Total: 16 category pages
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
