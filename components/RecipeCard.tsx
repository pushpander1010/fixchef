import Image from 'next/image';
import Link from 'next/link';
import { RecipeCardData } from '@/lib/types';

interface RecipeCardProps {
  recipe: RecipeCardData;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={recipe.hero_image_url}
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-base leading-snug line-clamp-2 mb-2">
          {recipe.title}
        </h3>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          {recipe.total_time && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {recipe.total_time}
            </span>
          )}
          {recipe.difficulty && (
            <span className="capitalize">{recipe.difficulty}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
