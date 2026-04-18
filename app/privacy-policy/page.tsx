import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how FixChef collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-orange-400 mb-6">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <span className="mx-2 text-orange-200">/</span>
        <span className="text-gray-500">Privacy Policy</span>
      </nav>

      <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: April 2026</p>

      <div className="prose prose-orange max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
          <p>
            FixChef is a recipe discovery site. We do not require you to create an account or provide
            personal information to browse recipes. We may collect the following data automatically:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Browser type, device type, and operating system</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring URL and general geographic region (country/city level)</li>
            <li>Search queries entered on the site</li>
          </ul>
          <p className="mt-3">
            If you use the AI cooking assistant (chatbot) on a recipe page, the messages you send are
            processed by our AI provider to generate a response. We do not store chat history beyond
            your current session.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies for the following purposes:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li><strong>Analytics:</strong> To understand how visitors use the site and improve our content.</li>
            <li><strong>Advertising:</strong> We display ads via Google AdSense. Google may use cookies to serve personalised ads based on your browsing history. You can opt out via <a href="https://adssettings.google.com" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</li>
            <li><strong>Functional:</strong> To remember your preferences (e.g. dark mode, if applicable).</li>
          </ul>
          <p className="mt-3">
            You can control cookies through your browser settings. Disabling cookies may affect some
            site functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <p>We use the data we collect to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Improve recipe content and site performance</li>
            <li>Understand which recipes and categories are most popular</li>
            <li>Diagnose technical issues</li>
            <li>Display relevant advertisements</li>
          </ul>
          <p className="mt-3">We do not sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
          <p>FixChef uses the following third-party services that may collect data independently:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li><strong>Google AdSense</strong> — advertising</li>
            <li><strong>YouTube (youtube-nocookie.com)</strong> — embedded recipe videos</li>
            <li><strong>Unsplash</strong> — recipe photography</li>
            <li><strong>Together AI</strong> — AI chatbot responses</li>
          </ul>
          <p className="mt-3">
            Each of these services has its own privacy policy. We encourage you to review them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Retention</h2>
          <p>
            We retain anonymised analytics data for up to 26 months. Chat messages are not stored
            after your session ends. We do not retain any personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
          <p>
            Depending on your location, you may have rights under GDPR, CCPA, or other privacy laws,
            including the right to access, correct, or delete data we hold about you. Since we collect
            minimal personal data, most requests can be addressed by clearing your browser cookies.
          </p>
          <p className="mt-3">
            For any privacy-related requests, contact us at{' '}
            <a href="mailto:privacy@fixchef.com" className="text-orange-500 hover:underline">
              privacy@fixchef.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Children&apos;s Privacy</h2>
          <p>
            FixChef is not directed at children under 13. We do not knowingly collect personal
            information from children. If you believe a child has provided us with personal data,
            please contact us and we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page with an
            updated date. Continued use of the site after changes constitutes acceptance of the
            updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact</h2>
          <p>
            Questions about this policy? Reach us at{' '}
            <a href="mailto:privacy@fixchef.com" className="text-orange-500 hover:underline">
              privacy@fixchef.com
            </a>{' '}
            or visit our <Link href="/contact" className="text-orange-500 hover:underline">Contact page</Link>.
          </p>
        </section>

      </div>
    </main>
  );
}
