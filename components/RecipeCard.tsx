import Image from 'next/image';
import Link from 'next/link';
import { RecipeCardData } from '@/lib/types';

interface RecipeCardProps {
  recipe: RecipeCardData;
}

const DIFFICULTY_COLOR: Record<string, string> = {
  easy:   'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  hard:   'bg-red-100 text-red-700',
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const diffClass = DIFFICULTY_COLOR[recipe.difficulty?.toLowerCase() ?? ''] ?? 'bg-gray-100 text-gray-600';

  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group block rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 bg-white hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={recipe.hero_image_url}
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-108 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {recipe.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display font-bold text-gray-900 text-base leading-snug line-clamp-2 mb-3 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          {recipe.total_time && (
            <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
              <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {recipe.total_time}
            </span>
          )}
          {recipe.difficulty && (
            <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${diffClass}`}>
              {recipe.difficulty}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
