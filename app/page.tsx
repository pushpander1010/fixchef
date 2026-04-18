import { getCloudflareContext } from '@opennextjs/cloudflare';
import type { Metadata } from 'next';
import { getAllCategories, getRecipesByCategory } from '@/lib/db';
import CategorySection from '@/components/CategorySection';
import AdSlot from '@/components/AdSlot';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Easy Recipes for Every Kitchen',
  description: 'Discover thousands of easy, delicious recipes with step-by-step guides, nutrition info, and an AI cooking assistant.',
};

export default async function HomePage() {
  const { env } = await getCloudflareContext({ async: true });
  const categories = await getAllCategories(env.DB);

  const categoriesWithRecipes = await Promise.all(
    categories.map(async (category) => ({
      category,
      recipes: await getRecipesByCategory(env.DB, category, 1),
    }))
  );

  return (
    <main className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {categoriesWithRecipes.map(({ category, recipes }, index) => (
        <div key={category}>
          <CategorySection category={category} recipes={recipes} />
          {index === 0 && (
            <div className="my-6">
              <AdSlot slot="homepage-below-first-category" />
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
