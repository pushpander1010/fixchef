import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import CategoryCarousel from "@/components/CategoryCarousel";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
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
  openGraph: {
    siteName: "FixChef",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}>
        <header className="border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
          {/* Top bar: logo + search placeholder */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white"/>
                  <path d="M8 6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1H8V6z" fill="white" opacity="0.7"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Fix<span className="text-orange-500">Chef</span>
              </span>
            </Link>

            <div className="flex-1 max-w-md hidden sm:block">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search recipes…"
                  className="w-full pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-white transition"
                />
              </div>
            </div>

            <Link
              href="/category/healthy"
              className="shrink-0 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-1.5 rounded-full"
            >
              Explore
            </Link>
          </div>

          {/* Category carousel strip */}
          <div className="border-t border-gray-50 px-4 py-2">
            <CategoryCarousel />
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-100 bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M8 6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1H8V6z" fill="white"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white"/>
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">FixChef</span>
              </Link>
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} FixChef. All rights reserved.</p>
              <div className="flex gap-4 text-sm text-gray-400">
                <Link href="/category/healthy" className="hover:text-orange-500 transition-colors">Healthy</Link>
                <Link href="/category/sweets" className="hover:text-orange-500 transition-colors">Sweets</Link>
                <Link href="/category/spicy" className="hover:text-orange-500 transition-colors">Spicy</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
