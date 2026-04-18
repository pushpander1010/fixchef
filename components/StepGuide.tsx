import Image from 'next/image';
import { Step } from '@/lib/types';

interface StepGuideProps {
  steps: Step[];
}

export default function StepGuide({ steps }: StepGuideProps) {
  const sorted = [...steps].sort((a, b) => a.order - b.order);

  return (
    <section aria-labelledby="steps-heading">
      <h2 id="steps-heading" className="text-2xl font-bold text-gray-900 mb-6">
        Instructions
      </h2>
      <ol className="space-y-8">
        {sorted.map((step) => (
          <li key={step.order} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
              {step.order}
            </div>
            <div className="flex-1 pt-1">
              <p className="text-gray-800 leading-relaxed">{step.instruction}</p>
              {step.image_url && (
                <div className="mt-4 relative w-full aspect-video rounded-lg overflow-hidden">
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
