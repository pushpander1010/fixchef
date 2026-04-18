import { Ingredient } from '@/lib/types';

interface IngredientsListProps {
  ingredients: Ingredient[];
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  return (
    <section aria-labelledby="ingredients-heading">
      <h2 id="ingredients-heading" className="text-2xl font-bold text-gray-900 mb-4">
        Ingredients
      </h2>
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
            <span className="mt-1 w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" aria-hidden="true" />
            <span className="text-gray-800">
              <span className="font-medium">
                {ingredient.quantity}
                {ingredient.unit ? ` ${ingredient.unit}` : ''}
              </span>{' '}
              {ingredient.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
