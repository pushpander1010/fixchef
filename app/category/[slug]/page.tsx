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
    </main>
  );
}
