import { notFound } from 'next/navigation';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import type { Metadata } from 'next';

import { getRecipeBySlug } from '@/lib/db';
import { generateRecipeMetadata, generateRecipeJsonLd } from '@/lib/seo';

import Breadcrumb from '@/components/Breadcrumb';
import RecipeHero from '@/components/RecipeHero';
import IngredientsList from '@/components/IngredientsList';
import StepGuide from '@/components/StepGuide';
import NutritionBlock from '@/components/NutritionBlock';
import TipsSection from '@/components/TipsSection';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import AdSlot from '@/components/AdSlot';
import RecipeChatbot from '@/components/RecipeChatbot';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { env } = await getCloudflareContext({ async: true });
  const { slug } = await params;
  const recipe = await getRecipeBySlug(env.DB, slug);
  if (!recipe) return {};
  return generateRecipeMetadata(recipe);
}

export default async function RecipePage({ params }: PageProps) {
  const { env } = await getCloudflareContext({ async: true });
  const { slug } = await params;
  const recipe = await getRecipeBySlug(env.DB, slug);

  if (!recipe) {
    notFound();
  }

  const jsonLd = generateRecipeJsonLd(recipe);

  // Build category slug for breadcrumb link (e.g. "Healthy" → "healthy")
  const categorySlug = recipe.category.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: recipe.category, href: `/category/${categorySlug}` },
            { label: recipe.title, href: `/recipes/${recipe.slug}` },
          ]}
        />

        <RecipeHero recipe={recipe} />

        <AdSlot slot="above-ingredients" />

        <IngredientsList ingredients={recipe.ingredients} />

        <StepGuide steps={recipe.steps} />

        <AdSlot slot="between-steps-tips" />

        <NutritionBlock nutrition={recipe.nutrition} />

        <TipsSection tips={recipe.tips} />

        <YouTubeEmbed videoId={recipe.youtube_video_id} />

        <AdSlot slot="sidebar-below-video" />

        <RecipeChatbot recipe={recipe} />

        {/* Related Resources Section for SEO */}
        <section className="mt-12 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            📚 Learn More About This Recipe
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Cooking Techniques</h3>
              <ul className="space-y-1.5 text-gray-600">
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
                    BBC Good Food Technique Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Nutrition & Safety</h3>
              <ul className="space-y-1.5 text-gray-600">
                <li>
                  <a 
                    href="https://www.nutrition.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-orange-600 transition-colors underline"
                  >
                    Nutrition Information
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.foodsafety.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-orange-600 transition-colors underline"
                  >
                    Food Safety Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
