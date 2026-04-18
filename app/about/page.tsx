import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about FixChef — our mission to make home cooking easy, delicious, and accessible for everyone.',
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-orange-400 mb-6">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <span className="mx-2 text-orange-200">/</span>
        <span className="text-gray-500">About Us</span>
      </nav>

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
      <section className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-10 border border-orange-100">
        <div className="text-3xl mb-3">🍳</div>
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To put a delicious, home-cooked meal on every table — with clear step-by-step instructions,
          honest nutrition information, and an AI assistant that answers your cooking questions in
          real time. No fluff, no life stories before the recipe. Just great food.
        </p>
      </section>

      {/* What makes us different */}
      <section className="mb-10">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Makes FixChef Different</h2>
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
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our recipes */}
      <section className="mb-10">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Recipes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          FixChef covers everything from quick weeknight dinners to weekend baking projects. Our
          library spans global cuisines — Italian pasta, Indian curries, Thai street food, Mexican
          tacos, French classics, and much more.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Every recipe is tested for accuracy, written with home kitchen equipment in mind, and
          includes practical tips from real cooking experience — not just theory.
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
