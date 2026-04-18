import Image from 'next/image';
import { Step } from '@/lib/types';

interface StepGuideProps {
  steps: Step[];
}

export default function StepGuide({ steps }: StepGuideProps) {
  const sorted = [...steps].sort((a, b) => a.order - b.order);

  return (
    <section aria-labelledby="steps-heading">
      <h2 id="steps-heading" className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span className="text-2xl">👨‍🍳</span> Instructions
      </h2>
      <ol className="space-y-6">
        {sorted.map((step) => (
          <li key={step.order} className="flex gap-4 group">
            {/* Step number */}
            <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
              {step.order}
            </div>
            <div className="flex-1 pt-1.5 pb-4 border-b border-dashed border-orange-100 last:border-0">
              <p className="text-gray-800 leading-relaxed text-base">{step.instruction}</p>
              {step.image_url && (
                <div className="mt-4 relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={step.image_url}
                    alt={`Step ${step.order}`}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
