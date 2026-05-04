import { notFound } from 'next/navigation';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import type { Metadata } from 'next';

import {
  getRecipesByCategory,
  getRecipeCountByCategory,
} from '@/lib/db';
import { generateCategoryMetadata } from '@/lib/seo';

import Breadcrumb from '@/components/Breadcrumb';
import RecipeCard from '@/components/RecipeCard';
import Pagination from '@/components/Pagination';
import AdSlot from '@/components/AdSlot';

export const dynamic = 'force-dynamic';

const PAGE_SIZE = 24;

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Convert slug back to category name for metadata
  const { slug } = await params;
  const category = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return generateCategoryMetadata(category);
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { env } = await getCloudflareContext({ async: true });

  const { slug } = await params;
  const { page: pageParam } = await searchParams;

  // Reconstruct display name from slug (e.g. "gym-fitness" → "Gym Fitness")
  const categoryDisplay = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const page = Math.max(1, parseInt(pageParam ?? '1', 10) || 1);

  const [recipes, totalCount] = await Promise.all([
    getRecipesByCategory(env.DB, categoryDisplay, page),
    getRecipeCountByCategory(env.DB, categoryDisplay),
  ]);

  if (totalCount === 0 && page === 1) {
    notFound();
  }

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const basePath = `/category/${slug}`;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: categoryDisplay, href: basePath },
          ]}
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {categoryDisplay} Recipes
      </h1>

      {/* Ad — top of category listing */}
      <div className="mb-8">
        <AdSlot slot="category-top" />
      </div>

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-16">
          No recipes found in this category.
        </p>
      )}

      {/* Ad — below recipe grid, above pagination */}
      <div className="mt-10 mb-4">
        <AdSlot slot="category-bottom" />
      </div>

      <Pagination page={page} totalPages={totalPages} basePath={basePath} />

      {/* Helpful Tips Section for SEO */}
      <section className="mt-12 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          💡 Tips for {categoryDisplay} Cooking
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <p className="mb-3">
              Explore our collection of {categoryDisplay.toLowerCase()} recipes with detailed instructions, 
              nutrition information, and cooking tips. Each recipe includes step-by-step guidance to help 
              you create delicious meals at home.
            </p>
            <p>
              <a 
                href="https://www.seriouseats.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 underline font-medium"
              >
                Learn advanced cooking techniques →
              </a>
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-orange-200">
            <h3 className="font-medium text-gray-800 mb-2">Helpful Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.nutrition.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  Nutrition Guidelines
                </a>
              </li>
              <li>
                <a 
                  href="https://www.foodsafety.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  Food Safety Tips
                </a>
              </li>
              <li>
                <a 
                  href="https://www.bbcgoodfood.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors underline"
                >
                  BBC Good Food
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
