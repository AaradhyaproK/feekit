'use client';

import React, { useEffect, useRef, useState } from 'react';

export type AdFormat = 'auto' | 'rectangle' | 'in-article';

export interface AdUnitProps {
  slot: string;
  format: AdFormat;
  className?: string;
}

const PUBLISHER_ID = 'ca-pub-1291898061670715';

export function AdUnit({ slot, format, className = '' }: AdUnitProps) {
  const [isMounted, setIsMounted] = useState(false);
  const adRef = useRef<HTMLModElement | null>(null);
  const isPushedRef = useRef(false);

  // Mark mounted after initial client hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Safely trigger adsbygoogle push after mounting
  useEffect(() => {
    if (!isMounted) return;
    if (typeof window === 'undefined') return;
    if (isPushedRef.current) return;

    try {
      if (adRef.current && !adRef.current.getAttribute('data-adsbygoogle-status')) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isPushedRef.current = true;
      }
    } catch (err) {
      console.error('AdSense ad push failed:', err);
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

  // Show placeholder div during SSR and initial hydration so layout does not shift
  if (!isMounted) {
    return (
      <div
        className={`adsense-placeholder ${containerDimensions} ${placeholderHeight} flex items-center justify-center rounded-xl bg-slate-50/70 border border-dashed border-slate-200/80 p-2 text-center transition-all ${className}`.trim()}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center justify-center gap-1 text-slate-400 select-none">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Advertisement
          </span>
          <span className="text-[9px] text-slate-300">Google Ad Space</span>
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
