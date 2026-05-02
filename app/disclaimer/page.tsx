import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimers about FixChef recipes, nutrition information, AI-generated content, and advertising.',
  alternates: { canonical: 'https://fixchef.com/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Disclaimer', href: '/disclaimer' }]} />

      <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">Disclaimer</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: April 2026</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section aria-labelledby="general-heading">
          <h2 id="general-heading" className="text-xl font-semibold text-gray-900 mb-3">1. General Information Only</h2>
          <p>
            The content published on FixChef — including recipes, cooking instructions, ingredient
            lists, and related articles — is provided for informational and entertainment purposes
            only. Nothing on this site constitutes professional culinary, dietary, medical, or
            nutritional advice.
          </p>
          <p className="mt-3">
            Always use your own judgement when preparing food. If you have specific dietary
            requirements, food allergies, or health conditions, consult a qualified professional
            before following any recipe or dietary guidance found on this site.
          </p>
        </section>

        <section aria-labelledby="nutrition-heading">
          <h2 id="nutrition-heading" className="text-xl font-semibold text-gray-900 mb-3">2. Nutritional Information</h2>
          <p>
            Nutritional values displayed on recipe pages (calories, protein, carbohydrates, fat,
            and other macronutrients) are <strong>estimates only</strong>. They are calculated using
            standard ingredient databases and may not reflect the exact nutritional content of the
            dish as prepared in your kitchen.
          </p>
          <p className="mt-3">Actual values may vary due to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Specific brands or varieties of ingredients used</li>
            <li>Preparation and cooking methods</li>
            <li>Portion sizes and serving variations</li>
            <li>Substitutions or modifications to the recipe</li>
          </ul>
          <p className="mt-3">
            FixChef nutritional data should not be used as the sole basis for managing a medical
            condition, diet plan, or calorie-controlled programme. Consult a registered dietitian
            or nutritionist for personalised dietary advice.
          </p>
        </section>

        <section aria-labelledby="ai-heading">
          <h2 id="ai-heading" className="text-xl font-semibold text-gray-900 mb-3">3. AI Cooking Assistant</h2>
          <p>
            Each recipe page on FixChef includes an AI-powered cooking assistant (chatbot). This
            assistant is powered by a large language model and generates responses automatically.
          </p>
          <p className="mt-3">
            While the assistant is scoped to the specific recipe and designed to be helpful, it
            may occasionally produce inaccurate, incomplete, or misleading responses. AI-generated
            content is not reviewed by a human before being displayed.
          </p>
          <p className="mt-3">
            <strong>Do not rely on the AI assistant for:</strong>
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Allergy or food intolerance advice</li>
            <li>Medical or dietary guidance</li>
            <li>Food safety decisions (e.g. safe internal temperatures, storage times)</li>
            <li>Advice for individuals with serious health conditions</li>
          </ul>
          <p className="mt-3">
            Always verify critical cooking information — especially food safety temperatures and
            allergy-related substitutions — from authoritative sources.
          </p>
        </section>

        <section aria-labelledby="food-safety-heading">
          <h2 id="food-safety-heading" className="text-xl font-semibold text-gray-900 mb-3">4. Food Safety</h2>
          <p>
            Recipes on FixChef are written for general home cooking. Food safety practices such as
            safe internal cooking temperatures, proper storage, and cross-contamination prevention
            are the responsibility of the cook. FixChef is not liable for any illness, injury, or
            damage resulting from the preparation or consumption of recipes found on this site.
          </p>
          <p className="mt-3">
            For authoritative food safety guidance, refer to your local food safety authority (e.g.
            the FDA in the US, the FSA in the UK, or FSSAI in India).
          </p>
        </section>

        <section aria-labelledby="advertising-heading">
          <h2 id="advertising-heading" className="text-xl font-semibold text-gray-900 mb-3">5. Advertising</h2>
          <p>
            FixChef displays advertisements served by Google AdSense. These ads are clearly
            distinguished from editorial content. FixChef does not endorse any products or services
            advertised on this site. Clicking on advertisements is entirely at your own discretion.
          </p>
          <p className="mt-3">
            Google may use cookies to serve personalised ads based on your browsing history. You
            can manage your ad preferences via{' '}
            <a
              href="https://adssettings.google.com"
              className="text-orange-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ad Settings
            </a>.
          </p>
        </section>

        <section aria-labelledby="external-heading">
          <h2 id="external-heading" className="text-xl font-semibold text-gray-900 mb-3">6. External Links and Embeds</h2>
          <p>
            FixChef embeds videos from YouTube and uses images from Unsplash. These are third-party
            services and their content is subject to their own terms and policies. FixChef is not
            responsible for the accuracy, availability, or content of third-party material.
          </p>
        </section>

        <section aria-labelledby="accuracy-heading">
          <h2 id="accuracy-heading" className="text-xl font-semibold text-gray-900 mb-3">7. Accuracy of Recipes</h2>
          <p>
            While we strive to ensure all recipes are accurate and well-tested, cooking results can
            vary based on equipment, ingredient quality, altitude, and individual technique. FixChef
            makes no guarantee that following a recipe will produce a specific result.
          </p>
        </section>

        <section aria-labelledby="changes-heading">
          <h2 id="changes-heading" className="text-xl font-semibold text-gray-900 mb-3">8. Changes to This Disclaimer</h2>
          <p>
            We may update this disclaimer from time to time. Changes will be posted on this page
            with an updated date. Continued use of the site after changes constitutes acceptance.
          </p>
        </section>

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-xl font-semibold text-gray-900 mb-3">9. Contact</h2>
          <p>
            Questions about this disclaimer? Contact us at{' '}
            <a href="mailto:hello@fixchef.com" className="text-orange-500 hover:underline">
              hello@fixchef.com
            </a>{' '}
            or visit our{' '}
            <Link href="/contact" className="text-orange-500 hover:underline">
              Contact page
            </Link>.
          </p>
        </section>

      </div>

      {/* Footer links */}
      <div className="mt-12 pt-6 border-t border-gray-100 text-sm text-gray-400 flex flex-wrap gap-4">
        <Link href="/" className="text-orange-500 hover:underline">Home</Link>
        <Link href="/about" className="text-orange-500 hover:underline">About</Link>
        <Link href="/privacy-policy" className="text-orange-500 hover:underline">Privacy Policy</Link>
        <Link href="/terms" className="text-orange-500 hover:underline">Terms of Use</Link>
      </div>
    </main>
  );
}
