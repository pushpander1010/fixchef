import { Nutrition } from '@/lib/types';

interface NutritionBlockProps {
  nutrition: Nutrition;
}

export default function NutritionBlock({ nutrition }: NutritionBlockProps) {
  const items = [
    { label: 'Calories', value: nutrition.calories, unit: 'kcal' },
    { label: 'Protein', value: nutrition.protein_g, unit: 'g' },
    { label: 'Carbs', value: nutrition.carbs_g, unit: 'g' },
    { label: 'Fat', value: nutrition.fat_g, unit: 'g' },
  ];

  return (
    <section aria-labelledby="nutrition-heading" className="bg-orange-50 rounded-xl p-6">
      <h2 id="nutrition-heading" className="text-xl font-bold text-gray-900 mb-1">
        Nutrition Facts
      </h2>
      <p className="text-sm text-gray-500 mb-4">Per serving: {nutrition.serving_size}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map(({ label, value, unit }) => (
          <div key={label} className="text-center bg-white rounded-lg p-3 shadow-sm">
            <p className="text-2xl font-bold text-orange-500">
              {value}
              <span className="text-sm font-normal text-gray-500 ml-0.5">{unit}</span>
            </p>
            <p className="text-xs text-gray-600 mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
