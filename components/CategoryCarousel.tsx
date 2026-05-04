'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const CATEGORIES = [
  { label: '🍰 Sweets',       slug: 'sweets',      color: 'bg-pink-100 text-pink-700 hover:bg-pink-200' },
  { label: '🥗 Healthy',      slug: 'healthy',     color: 'bg-green-100 text-green-700 hover:bg-green-200' },
  { label: '🌶️ Spicy',        slug: 'spicy',       color: 'bg-red-100 text-red-700 hover:bg-red-200' },
  { label: '🌮 Mexican',      slug: 'mexican',     color: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' },
  { label: '🍔 Fast Foods',   slug: 'fast-foods',  color: 'bg-orange-100 text-orange-700 hover:bg-orange-200' },
  { label: '💪 Gym & Fitness',slug: 'gym-fitness', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
  { label: '🥑 Diet',         slug: 'diet',        color: 'bg-lime-100 text-lime-700 hover:bg-lime-200' },
  { label: '🍋 Sour',         slug: 'sour',        color: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100' },
  { label: '🍝 Pasta',        slug: 'pasta',       color: 'bg-amber-100 text-amber-700 hover:bg-amber-200' },
  { label: '🍜 Asian',        slug: 'asian',       color: 'bg-rose-100 text-rose-700 hover:bg-rose-200' },
  { label: '🥘 Soups',        slug: 'soups',       color: 'bg-teal-100 text-teal-700 hover:bg-teal-200' },
  { label: '🥞 Breakfast',    slug: 'breakfast',   color: 'bg-orange-50 text-orange-600 hover:bg-orange-100' },
  { label: '🍱 Meal Prep',    slug: 'meal-prep',   color: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' },
  { label: '🫙 Snacks',       slug: 'snacks',      color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
  { label: '🍹 Drinks',       slug: 'drinks',      color: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200' },
  { label: '🎂 Baking',       slug: 'baking',      color: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200' },
  { label: '🇮🇳 Indian',      slug: 'indian',      color: 'bg-orange-100 text-orange-800 hover:bg-orange-200' },
];

// Duplicate for seamless infinite loop
const ITEMS = [...CATEGORIES, ...CATEGORIES];

export default function CategoryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5; // px per frame

    function step() {
      if (!pausedRef.current && track) {
        posRef.current += speed;
        // Reset when we've scrolled exactly half (one full set)
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    }

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />

      <div ref={trackRef} className="flex gap-2 w-max py-1">
        {ITEMS.map((cat, i) => (
          <Link
            key={`${cat.slug}-${i}`}
            href={`/category/${cat.slug}`}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${cat.color}`}
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
