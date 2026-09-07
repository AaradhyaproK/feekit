'use client';

import React, { useEffect, useRef, useSyncExternalStore } from 'react';

export type AdFormat = 'auto' | 'rectangle' | 'in-article';

export interface AdUnitProps {
  slot: string;
  format: AdFormat;
  className?: string;
}

const PUBLISHER_ID = 'ca-pub-1291898061670715';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

const emptySubscribe = () => () => {};

export function AdUnit({ slot, format, className = '' }: AdUnitProps) {
  // Official React 18/19 hydration detection (zero cascading renders)
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const adRef = useRef<HTMLModElement | null>(null);
  const isPushedRef = useRef(false);

  // Safely trigger adsbygoogle push after mounting and layout calculation
  useEffect(() => {
    if (!isMounted) return;
    if (typeof window === 'undefined') return;
    if (isPushedRef.current) return;

    // Prevent AdSense TagError on localhost / local development where ads cannot serve
    const isLocalhost =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';

    if (isLocalhost) {
      return;
    }

    const checkAndPushAd = () => {
      if (isPushedRef.current) return;
      const el = adRef.current;
      if (!el) return;

      const availableWidth = el.offsetWidth || el.parentElement?.offsetWidth || 0;
      // Do not push if width has not yet computed (prevents "No slot size for availableWidth=0")
      if (availableWidth <= 0) {
        return;
      }

      if (!el.getAttribute('data-adsbygoogle-status')) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isPushedRef.current = true;
        } catch (err) {
          console.warn('AdSense push safe catch:', err);
        }
      }
    };

    const el = adRef.current;
    if (!el) return;

    // Check if width is already available
    const currentWidth = el.offsetWidth || el.parentElement?.offsetWidth || 0;
    if (currentWidth > 0) {
      checkAndPushAd();
    } else if (typeof ResizeObserver !== 'undefined') {
      // Wait for layout to compute positive width before pushing to AdSense
      const target = el.parentElement || el;
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect.width > 0) {
            checkAndPushAd();
            observer.disconnect();
            break;
          }
        }
      });
      observer.observe(target);
      return () => observer.disconnect();
    }
  }, [isMounted, slot]);

  // Format-specific styles, dimensions, and attributes
  let containerDimensions = '';
  let adStyle: React.CSSProperties = { display: 'block' };
  let placeholderHeight = '';
  let extraAttributes: Record<string, string> = {};

  if (format === 'auto') {
    containerDimensions = 'w-full my-4';
    placeholderHeight = 'min-h-[90px] sm:min-h-[100px]';
    adStyle = { display: 'block', width: '100%' };
    extraAttributes = {
      'data-ad-format': 'auto',
      'data-full-width-responsive': 'true',
    };
  } else if (format === 'rectangle') {
    containerDimensions = 'w-full max-w-[336px] my-6 mx-auto';
    placeholderHeight = 'min-h-[250px] sm:min-h-[280px]';
    adStyle = { display: 'inline-block', width: '300px', height: '250px' };
    extraAttributes = {
      'data-ad-format': 'rectangle',
    };
  } else if (format === 'in-article') {
    containerDimensions = 'w-full my-6';
    placeholderHeight = 'min-h-[120px] sm:min-h-[250px]';
    adStyle = { display: 'block', textAlign: 'center' };
    extraAttributes = {
      'data-ad-layout': 'in-article',
      'data-ad-format': 'fluid',
    };
  }

  // Show styled placeholder during SSR, initial hydration, or in local development
  const isLocalDev =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  if (!isMounted || isLocalDev) {
    return (
      <div
        className={`adsense-placeholder ${containerDimensions} ${placeholderHeight} flex items-center justify-center rounded-2xl bg-slate-50/70 border border-dashed border-slate-200 p-4 text-center transition-all ${className}`.trim()}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center justify-center gap-1 text-slate-400 select-none">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Advertisement Slot
          </span>
          <span className="text-[11px] text-slate-400">Google AdSense • {format}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`adsense-wrapper relative w-full flex items-center justify-center overflow-hidden transition-all ${containerDimensions} ${placeholderHeight} ${className}`.trim()}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        {...extraAttributes}
      />
    </div>
  );
}
