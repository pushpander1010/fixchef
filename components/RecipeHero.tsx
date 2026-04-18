import Image from 'next/image';
import { RecipeRecord } from '@/lib/types';

interface RecipeHeroProps {
  recipe: RecipeRecord;
}

const DIFFICULTY_BADGE: Record<string, string> = {
  easy:   'bg-green-500',
  medium: 'bg-yellow-500',
  hard:   'bg-red-500',
};

export default function RecipeHero({ recipe }: RecipeHeroProps) {
  const diffColor = DIFFICULTY_BADGE[recipe.difficulty?.toLowerCase() ?? ''] ?? 'bg-gray-500';

  return (
    <div className="w-full">
      {/* Hero image with overlay */}
      <div className="relative w-full aspect-[16/7] overflow-hidden rounded-2xl shadow-xl">
        <Image
          src={recipe.hero_image_url}
          alt={recipe.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay" />

        {/* Overlaid title block */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 shadow">
            {recipe.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            {recipe.title}
          </h1>
        </div>
      </div>

      {/* Meta strip */}
      <div className="mt-5 flex flex-wrap gap-3">
        {recipe.prep_time && (
          <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 text-sm">
            <span className="text-base">⏱️</span>
            <span className="text-gray-500">Prep</span>
            <span className="font-semibold text-gray-800">{recipe.prep_time}</span>
          </div>
        )}
        {recipe.cook_time && (
          <div className="flex items-center gap-1.5 bg-red-50 border border-red-100 rounded-full px-4 py-2 text-sm">
            <span className="text-base">🔥</span>
            <span className="text-gray-500">Cook</span>
            <span className="font-semibold text-gray-800">{recipe.cook_time}</span>
          </div>
        )}
        {recipe.total_time && (
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 rounded-full px-4 py-2 text-sm">
            <span className="text-base">⏰</span>
            <span className="text-gray-500">Total</span>
            <span className="font-semibold text-gray-800">{recipe.total_time}</span>
          </div>
        )}
        {recipe.servings && (
          <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-full px-4 py-2 text-sm">
            <span className="text-base">🍽️</span>
            <span className="font-semibold text-gray-800">{recipe.servings}</span>
          </div>
        )}
        {recipe.difficulty && (
          <div className={`flex items-center gap-1.5 ${diffColor} rounded-full px-4 py-2 text-sm`}>
            <span className="font-semibold text-white capitalize">{recipe.difficulty}</span>
          </div>
        )}
      </div>

      {/* Description */}
      {recipe.description && (
        <p className="mt-5 text-gray-600 text-lg leading-relaxed border-l-4 border-orange-300 pl-4 italic">
          {recipe.description}
        </p>
      )}
    </div>
  );
}
