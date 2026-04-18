'use client';

import { useEffect, useRef } from 'react';
import type { AdSlotId } from '@/lib/types';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSlotProps {
  slot: AdSlotId;
  className?: string;
}

const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? '';

// Load the AdSense script once per page
function loadAdSenseScript(publisherId: string) {
  if (typeof document === 'undefined') return;
  const scriptId = 'adsense-script';
  if (document.getElementById(scriptId)) return;
  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}

export default function AdSlot({ slot, className = '' }: AdSlotProps) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!PUBLISHER_ID) return;
    loadAdSenseScript(PUBLISHER_ID);

    // Push only once per mount
    if (!pushed.current) {
      pushed.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // Script not yet ready; will auto-push when it loads
      }
    }
  }, []);

  // Show a visible placeholder when no publisher ID is configured (dev / staging)
  if (!PUBLISHER_ID) {
    return (
      <div
        className={`ad-placeholder flex items-center justify-center w-full min-h-[90px] rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 text-gray-400 text-xs font-medium select-none ${className}`}
        aria-hidden="true"
        data-slot={slot}
      >
        Ad · {slot}
      </div>
    );
  }

  return (
    <div
      className={`ad-slot overflow-hidden ${className}`}
      aria-label="Advertisement"
      data-slot={slot}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
