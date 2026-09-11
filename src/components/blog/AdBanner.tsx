'use client';

import React from 'react';
import { InArticleAd } from '@/components/ads/AdSlots';

const IN_ARTICLE_SLOT = process.env.NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT || '';

export function AdBanner({ label = 'Advertisement' }: { label?: string }) {
  // If no ad slot is configured (e.g. before AdSense approval), reserve zero space
  if (!IN_ARTICLE_SLOT) {
    return null;
  }

  return (
    <div className="adsense-banner-container my-7 pt-2 pb-1 border-y border-slate-100/80 not-prose">
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1 text-center">
        {label}
      </div>
      <InArticleAd className="w-full" />
    </div>
  );
}

