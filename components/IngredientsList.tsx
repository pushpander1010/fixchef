import { Ingredient } from '@/lib/types';

interface IngredientsListProps {
  ingredients: Ingredient[];
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  return (
    <section aria-labelledby="ingredients-heading" className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
      <h2 id="ingredients-heading" className="font-display text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
        <span className="text-2xl">🛒</span> Ingredients
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-orange-50 hover:border-orange-200 transition-colors">
            <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
              {index + 1}
            </span>
            <span className="text-gray-800 text-sm">
              <span className="font-semibold text-orange-700">
                {ingredient.quantity}
                {ingredient.unit ? ` ${ingredient.unit}` : ''}
              </span>{' '}
              <span className="text-gray-700">{ingredient.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
