interface TipsSectionProps {
  tips: string[];
}

export default function TipsSection({ tips }: TipsSectionProps) {
  if (!tips.length) return null;

  return (
    <section aria-labelledby="tips-heading" className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
      <h2 id="tips-heading" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span aria-hidden="true">💡</span> Tips &amp; Notes
      </h2>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700">
            <span className="flex-shrink-0 text-yellow-500 font-bold mt-0.5">•</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
