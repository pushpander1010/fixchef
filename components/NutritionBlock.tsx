import { Nutrition } from '@/lib/types';

interface NutritionBlockProps {
  nutrition: Nutrition;
}

interface MacroRingProps {
  value: number;
  max: number;
  color: string;
  trackColor: string;
  label: string;
  unit: string;
}

function MacroRing({ value, max, color, trackColor, label, unit }: MacroRingProps) {
  const size = 88;
  const stroke = 7;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const dash = pct * circ;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Track */}
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
          {/* Progress */}
          <circle
            cx={size / 2} cy={size / 2} r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
            style={{ transition: 'stroke-dasharray 0.6s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-base font-bold text-gray-800 leading-none">{value}</span>
          <span className="text-[10px] text-gray-400">{unit}</span>
        </div>
      </div>
      <span className="text-xs font-medium text-gray-600">{label}</span>
    </div>
  );
}

export default function NutritionBlock({ nutrition }: NutritionBlockProps) {
  const totalMacros = nutrition.protein_g + nutrition.carbs_g + nutrition.fat_g;
  const proteinPct = totalMacros > 0 ? Math.round((nutrition.protein_g / totalMacros) * 100) : 0;
  const carbsPct   = totalMacros > 0 ? Math.round((nutrition.carbs_g   / totalMacros) * 100) : 0;
  const fatPct     = totalMacros > 0 ? Math.round((nutrition.fat_g     / totalMacros) * 100) : 0;

  return (
    <section aria-labelledby="nutrition-heading" className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-4 flex items-center justify-between">
        <div>
          <h2 id="nutrition-heading" className="text-white font-bold text-lg leading-tight">Nutrition Facts</h2>
          <p className="text-orange-100 text-xs mt-0.5">Per serving · {nutrition.serving_size}</p>
        </div>
        <div className="text-right">
          <p className="text-white text-3xl font-extrabold leading-none">{nutrition.calories}</p>
          <p className="text-orange-100 text-xs">kcal</p>
        </div>
      </div>

      <div className="bg-white px-6 py-5">
        {/* Macro rings */}
        <div className="flex justify-around mb-6">
          <MacroRing value={nutrition.protein_g} max={100} color="#3b82f6" trackColor="#dbeafe" label="Protein" unit="g" />
          <MacroRing value={nutrition.carbs_g}   max={300} color="#f97316" trackColor="#ffedd5" label="Carbs"   unit="g" />
          <MacroRing value={nutrition.fat_g}     max={100} color="#a855f7" trackColor="#f3e8ff" label="Fat"     unit="g" />
        </div>

        {/* Macro split bar */}
        <div className="mb-3">
          <div className="flex text-xs text-gray-500 justify-between mb-1">
            <span>Macro split</span>
            <span className="text-gray-400">{totalMacros}g total</span>
          </div>
          <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
            <div className="bg-blue-400 transition-all" style={{ width: `${proteinPct}%` }} title={`Protein ${proteinPct}%`} />
            <div className="bg-orange-400 transition-all" style={{ width: `${carbsPct}%` }} title={`Carbs ${carbsPct}%`} />
            <div className="bg-purple-400 transition-all" style={{ width: `${fatPct}%` }} title={`Fat ${fatPct}%`} />
          </div>
          <div className="flex gap-4 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />Protein {proteinPct}%</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />Carbs {carbsPct}%</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />Fat {fatPct}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
