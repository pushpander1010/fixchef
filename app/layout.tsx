import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import CategoryCarousel from "@/components/CategoryCarousel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FixChef — Easy Recipes for Every Kitchen",
    template: "%s | FixChef",
  },
  description: "Discover thousands of easy, delicious recipes with step-by-step guides, nutrition info, and an AI cooking assistant.",
  metadataBase: new URL("https://fixchef.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  openGraph: { siteName: "FixChef", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased bg-cream text-foreground min-h-screen flex flex-col`}>

        {/* ── Header ── */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-orange-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white text-lg leading-none">🍳</span>
              </div>
              <span className="text-xl font-display font-bold text-gray-900">
                Fix<span className="text-orange-500">Chef</span>
              </span>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-md hidden sm:block">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-300 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search recipes…"
                  className="w-full pl-9 pr-4 py-2 text-sm border-2 border-orange-100 rounded-full bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-white focus:border-orange-300 transition placeholder:text-orange-300"
                />
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/category/healthy"
              className="shrink-0 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all px-5 py-2 rounded-full shadow-md hover:shadow-lg"
            >
              🔥 Explore
            </Link>
          </div>

          {/* Category carousel */}
          <div className="border-t border-orange-50 bg-orange-50/60 px-4 py-1.5">
            <CategoryCarousel />
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        {/* ── Footer ── */}
        <footer className="bg-gradient-to-br from-orange-900 to-red-900 text-orange-100 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Top row: logo + columns */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 mb-10">

              {/* Brand */}
              <div className="col-span-2 sm:col-span-1">
                <Link href="/" className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-base">🍳</span>
                  </div>
                  <span className="font-display font-bold text-white text-lg">FixChef</span>
                </Link>
                <p className="text-sm text-orange-300 leading-relaxed">
                  Easy, delicious recipes for every kitchen — with step-by-step guides and an AI cooking assistant.
                </p>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/category/healthy" className="hover:text-white transition-colors">🥗 Healthy</Link></li>
                  <li><Link href="/category/sweets"  className="hover:text-white transition-colors">🍰 Sweets</Link></li>
                  <li><Link href="/category/spicy"   className="hover:text-white transition-colors">🌶️ Spicy</Link></li>
                  <li><Link href="/category/pasta"   className="hover:text-white transition-colors">🍝 Pasta</Link></li>
                  <li><Link href="/category/baking"  className="hover:text-white transition-colors">🧁 Baking</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about"   className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms"          className="hover:text-white transition-colors">Terms of Use</Link></li>
                  <li><Link href="/disclaimer"     className="hover:text-white transition-colors">Disclaimer</Link></li>
                </ul>
              </div>

              {/* Resources - External Links for SEO */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.nutrition.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Nutrition Info</a></li>
                  <li><a href="https://www.foodsafety.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Food Safety</a></li>
                  <li><a href="https://www.eatright.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Healthy Eating</a></li>
                  <li><a href="https://www.bbcgoodfood.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">BBC Good Food</a></li>
                  <li><a href="https://www.seriouseats.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Serious Eats</a></li>
                </ul>
              </div>

            </div>

            {/* Bottom row */}
            <div className="border-t border-white/10 pt-6 text-center text-sm text-orange-300">
              © {new Date().getFullYear()} FixChef. Cook something amazing today.
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
