import { notFound } from 'next/navigation';
import { getRequestContext } from '@cloudflare/next-on-pages';
import type { Metadata } from 'next';

import {
  getRecipesByCategory,
  getRecipeCountByCategory,
  getAllCategories,
} from '@/lib/db';
import { generateCategoryMetadata } from '@/lib/seo';

import Breadcrumb from '@/components/Breadcrumb';
import RecipeCard from '@/components/RecipeCard';
import Pagination from '@/components/Pagination';

export const revalidate = 3600;

const PAGE_SIZE = 24;

interface PageProps {
  params: { slug: string };
  searchParams: { page?: string };
}

export async function generateStaticParams() {
  const { env } = getRequestContext();
  const categories = await getAllCategories(env.DB);
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Convert slug back to category name for metadata
  const category = params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return generateCategoryMetadata(category);
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { env } = getRequestContext();

  // Reconstruct display name from slug (e.g. "gym-fitness" → "Gym Fitness")
  const categoryDisplay = params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const page = Math.max(1, parseInt(searchParams.page ?? '1', 10) || 1);

  const [recipes, totalCount] = await Promise.all([
    getRecipesByCategory(env.DB, categoryDisplay, page),
    getRecipeCountByCategory(env.DB, categoryDisplay),
  ]);

  if (totalCount === 0 && page === 1) {
    notFound();
  }

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const basePath = `/category/${params.slug}`;

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

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {categoryDisplay} Recipes
      </h1>

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

      <Pagination page={page} totalPages={totalPages} basePath={basePath} />
    </main>
  );
}
