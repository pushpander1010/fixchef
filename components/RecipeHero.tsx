import Image from 'next/image';
import { RecipeRecord } from '@/lib/types';

interface RecipeHeroProps {
  recipe: RecipeRecord;
}

export default function RecipeHero({ recipe }: RecipeHeroProps) {
  return (
    <div className="w-full">
      <div className="relative w-full aspect-[16/7] overflow-hidden rounded-xl">
        <Image
          src={recipe.hero_image_url}
          alt={recipe.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="mt-6">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wide mb-2">
          {recipe.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {recipe.title}
        </h1>
        {recipe.description && (
          <p className="mt-3 text-gray-600 text-lg leading-relaxed">
            {recipe.description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          {recipe.prep_time && (
            <div>
              <span className="font-medium text-gray-800">Prep:</span> {recipe.prep_time}
            </div>
          )}
          {recipe.cook_time && (
            <div>
              <span className="font-medium text-gray-800">Cook:</span> {recipe.cook_time}
            </div>
          )}
          {recipe.total_time && (
            <div>
              <span className="font-medium text-gray-800">Total:</span> {recipe.total_time}
            </div>
          )}
          {recipe.difficulty && (
            <div>
              <span className="font-medium text-gray-800">Difficulty:</span>{' '}
              <span className="capitalize">{recipe.difficulty}</span>
            </div>
          )}
          {recipe.servings && (
            <div>
              <span className="font-medium text-gray-800">Servings:</span> {recipe.servings}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
