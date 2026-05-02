import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the FixChef team — for recipe suggestions, partnerships, or general enquiries.',
  alternates: { canonical: 'https://fixchef.com/contact' },
  openGraph: {
    title: 'Contact FixChef',
    description: 'Get in touch with the FixChef team for recipe suggestions, partnerships, bug reports, or general enquiries.',
    url: 'https://fixchef.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]} />

      <h1 className="text-4xl font-display font-bold text-gray-900 mb-3">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-10">
        We&apos;d love to hear from you. Whether it&apos;s a recipe suggestion, a bug report, or a
        partnership enquiry — drop us a line.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: '📧',
            title: 'General Enquiries',
            detail: 'hello@fixchef.com',
            href: 'mailto:hello@fixchef.com',
            desc: 'Recipe suggestions, feedback, or anything else.',
          },
          {
            icon: '🤝',
            title: 'Partnerships & Advertising',
            detail: 'ads@fixchef.com',
            href: 'mailto:ads@fixchef.com',
            desc: 'Sponsorships, brand collaborations, and media kits.',
          },
          {
            icon: '🔒',
            title: 'Privacy & Legal',
            detail: 'privacy@fixchef.com',
            href: 'mailto:privacy@fixchef.com',
            desc: 'Data requests, GDPR/CCPA enquiries, and legal matters.',
          },
          {
            icon: '🐛',
            title: 'Bug Reports',
            detail: 'bugs@fixchef.com',
            href: 'mailto:bugs@fixchef.com',
            desc: 'Found something broken? Tell us and we\'ll fix it fast.',
          },
        ].map(({ icon, title, detail, href, desc }) => (
          <a
            key={title}
            href={href}
            className="group bg-white rounded-xl p-6 border border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <h2 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
              {title}
            </h2>
            <p className="text-orange-500 text-sm font-medium mb-2">{detail}</p>
            <p className="text-sm text-gray-500">{desc}</p>
          </a>
        ))}
      </div>

      {/* Response time note */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-gray-900 mb-2">⏱ Response Times</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          We aim to respond to all enquiries within <strong>2 business days</strong>. For urgent
          matters, please include &ldquo;URGENT&rdquo; in your subject line. We&apos;re a small team,
          so we appreciate your patience.
        </p>
      </div>

      {/* FAQ nudge */}
      <div className="text-center text-gray-500 text-sm">
        <p>
          Looking for cooking help?{' '}
          <Link href="/" className="text-orange-500 hover:underline">
            Browse our recipes
          </Link>{' '}
          — each one has a built-in AI assistant that can answer your questions instantly.
        </p>
      </div>
    </main>
  );
}
