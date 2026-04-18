import Link from 'next/link';
import RecipeCard from './RecipeCard';
import { RecipeCardData } from '@/lib/types';

interface CategorySectionProps {
  category: string;
  recipes: RecipeCardData[];
}

const CATEGORY_EMOJI: Record<string, string> = {
  sweets: '🍰', healthy: '🥗', spicy: '🌶️', mexican: '🌮',
  'fast foods': '🍔', 'gym/fitness': '💪', diet: '🥑', sour: '🍋',
  pasta: '🍝', asian: '🍜', soups: '🥘', breakfast: '🥞',
  'meal prep': '🍱', snacks: '🫙', drinks: '🍹', baking: '🎂',
};

export default function CategorySection({ category, recipes }: CategorySectionProps) {
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
  const emoji = CATEGORY_EMOJI[category.toLowerCase()] ?? '🍽️';

  return (
    <section aria-labelledby={`category-${categorySlug}`} className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 id={`category-${categorySlug}`} className="font-display text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          {category}
        </h2>
        <Link
          href={`/category/${categorySlug}`}
          className="text-sm font-semibold text-orange-500 hover:text-orange-600 bg-orange-50 hover:bg-orange-100 px-4 py-1.5 rounded-full transition-colors"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
