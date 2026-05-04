import { getCloudflareContext } from '@opennextjs/cloudflare';
import type { Metadata } from 'next';
import { getAllCategories, getRecipesByCategory } from '@/lib/db';
import CategorySection from '@/components/CategorySection';
import AdSlot from '@/components/AdSlot';

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

      {/* Helpful Resources Section for SEO */}
      <section className="mt-16 mb-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-100">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
          🔥 Cooking Resources & Tips
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
            <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
              📚 Learn More
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a 
                  href="https://www.seriouseats.com/food-lab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  The Food Lab - Cooking Science
                </a>
              </li>
              <li>
                <a 
                  href="https://www.bbcgoodfood.com/howto/guide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  BBC Good Food Guides
                </a>
              </li>
              <li>
                <a 
                  href="https://www.bonappetit.com/test-kitchen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  Bon Appétit Test Kitchen
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
            <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
              🥗 Nutrition & Health
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a 
                  href="https://www.nutrition.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  Nutrition.gov - Official Guide
                </a>
              </li>
              <li>
                <a 
                  href="https://www.eatright.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  Academy of Nutrition
                </a>
              </li>
              <li>
                <a 
                  href="https://www.myplate.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  MyPlate - Healthy Eating
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
            <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
              🛡️ Food Safety
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a 
                  href="https://www.foodsafety.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  FoodSafety.gov
                </a>
              </li>
              <li>
                <a 
                  href="https://www.fda.gov/food" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  FDA Food Information
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cdc.gov/foodsafety/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  CDC Food Safety
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center">
          These trusted resources help you cook safely, eat healthily, and master new techniques.
        </p>
      </section>
    </main>
  );
}
