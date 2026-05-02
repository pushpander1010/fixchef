import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About FixChef — Our Mission & Story',
  description: 'Learn about FixChef — our mission to make home cooking easy, delicious, and accessible for everyone with step-by-step recipes, nutrition info, and an AI cooking assistant.',
  alternates: { canonical: 'https://fixchef.com/about' },
  openGraph: {
    title: 'About FixChef — Our Mission & Story',
    description: 'FixChef makes home cooking approachable with clear step-by-step recipes, real nutrition data, video guides, and an AI assistant on every recipe page.',
    url: 'https://fixchef.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }]} />

      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
          About <span className="text-orange-500">FixChef</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We believe great cooking shouldn&apos;t be complicated. FixChef exists to make every
          recipe approachable — whether you&apos;re a first-time cook or a seasoned home chef.
        </p>
      </div>

      {/* Mission */}
      <section aria-labelledby="mission-heading" className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-10 border border-orange-100">
        <div className="text-3xl mb-3" aria-hidden="true">🍳</div>
        <h2 id="mission-heading" className="text-2xl font-display font-bold text-gray-900 mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To put a delicious, home-cooked meal on every table — with clear step-by-step instructions,
          honest nutrition information, and an AI assistant that answers your cooking questions in
          real time. No fluff, no life stories before the recipe. Just great food.
        </p>
      </section>

      {/* What makes us different */}
      <section aria-labelledby="different-heading" className="mb-10">
        <h2 id="different-heading" className="text-2xl font-display font-bold text-gray-900 mb-6">What Makes FixChef Different</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              icon: '📋',
              title: 'Step-by-Step Clarity',
              desc: 'Every recipe is broken into clear, numbered steps with timing and technique tips so nothing gets lost in translation.',
            },
            {
              icon: '🤖',
              title: 'AI Cooking Assistant',
              desc: 'Each recipe page has a built-in chatbot scoped to that dish. Ask about substitutions, scaling, or technique — it knows the recipe inside out.',
            },
            {
              icon: '🥗',
              title: 'Real Nutrition Data',
              desc: 'Calories, protein, carbs, and fat are shown visually on every recipe so you can make informed choices without leaving the page.',
            },
            {
              icon: '🎬',
              title: 'Video Guides',
              desc: 'Curated YouTube videos accompany most recipes so you can watch the technique before you try it.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-5 border border-orange-100 shadow-sm">
              <div className="text-2xl mb-2" aria-hidden="true">{icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our recipes */}
      <section aria-labelledby="recipes-heading" className="mb-10">
        <h2 id="recipes-heading" className="text-2xl font-display font-bold text-gray-900 mb-4">Our Recipes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          FixChef covers everything from quick weeknight dinners to weekend baking projects. Our
          library spans global cuisines — Italian pasta, Indian curries, Thai street food, Mexican
          tacos, French classics, and much more.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every recipe is tested for accuracy, written with home kitchen equipment in mind, and
          includes practical tips from real cooking experience — not just theory.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Nutrition information is provided as an estimate per serving and is calculated using
          standard ingredient databases. Values may vary based on specific brands, preparation
          methods, and portion sizes. Always consult a qualified nutritionist for personalised
          dietary advice.
        </p>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-heading" className="mb-10">
        <h2 id="how-heading" className="text-2xl font-display font-bold text-gray-900 mb-6">How FixChef Works</h2>
        <ol className="space-y-5">
          {[
            { n: 1, title: 'Browse or search recipes', body: 'Use the category carousel at the top of every page to explore by cuisine or dish type. Or search for a specific ingredient or recipe name.' },
            { n: 2, title: 'Follow the step-by-step guide', body: 'Each recipe is broken into numbered steps with clear instructions, timing, and technique notes. No experience required.' },
            { n: 3, title: 'Ask the AI assistant', body: 'Stuck on a step? Click the "Doubts?" button on any recipe page to open the AI cooking assistant. It\'s scoped to that specific recipe and can answer substitution, scaling, and technique questions instantly.' },
            { n: 4, title: 'Check the nutrition panel', body: 'Every recipe shows calories, protein, carbs, and fat in a visual ring chart so you can make informed choices at a glance.' },
            { n: 5, title: 'Watch the video guide', body: 'Most recipes include a curated YouTube video so you can see the technique in action before you start cooking.' },
          ].map((step) => (
            <li key={step.n} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                {step.n}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Disclaimer */}
      <section aria-labelledby="disclaimer-heading" className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
        <h2 id="disclaimer-heading" className="font-semibold text-gray-900 mb-2">⚠️ Important Disclaimer</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Recipes and nutrition information on FixChef are provided for informational and
          entertainment purposes only. Nutrition values are estimates and may vary. The AI cooking
          assistant generates responses automatically and may occasionally be inaccurate — always
          use your own judgement. FixChef is not a substitute for professional dietary, medical, or
          culinary advice.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-display font-bold mb-3">Ready to Cook Something Amazing?</h2>
        <p className="text-orange-100 mb-6">Browse hundreds of recipes across every category.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="bg-white text-orange-600 font-semibold px-6 py-2.5 rounded-full hover:bg-orange-50 transition-colors"
          >
            Browse Recipes
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/60 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
