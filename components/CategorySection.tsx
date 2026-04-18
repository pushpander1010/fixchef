import Link from 'next/link';
import RecipeCard from './RecipeCard';
import { RecipeCardData } from '@/lib/types';

interface CategorySectionProps {
  category: string;
  recipes: RecipeCardData[];
}

export default function CategorySection({ category, recipes }: CategorySectionProps) {
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');

  return (
    <section aria-labelledby={`category-${categorySlug}`} className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 id={`category-${categorySlug}`} className="text-2xl font-bold text-gray-900">
          {category}
        </h2>
        <Link
          href={`/category/${categorySlug}`}
          className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
