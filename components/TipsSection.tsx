interface TipsSectionProps {
  tips: string[];
}

export default function TipsSection({ tips }: TipsSectionProps) {
  if (!tips.length) return null;

  return (
    <section aria-labelledby="tips-heading" className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl p-6">
      <h2 id="tips-heading" className="font-display text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-2xl">💡</span> Chef&apos;s Tips
      </h2>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 text-white flex items-center justify-center text-xs font-bold mt-0.5">
              {index + 1}
            </span>
            <span className="text-gray-700 leading-relaxed">{tip}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
