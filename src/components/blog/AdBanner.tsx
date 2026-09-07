import React from 'react';
import { InArticleAd } from '@/components/ads/AdSlots';

export function AdBanner({ label = 'Advertisement' }: { label?: string }) {
  return (
    <div className="my-7 pt-2 pb-1 border-y border-slate-100/80 not-prose">
      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1 text-center">
        {label}
      </div>
      <InArticleAd className="w-full" />
    </div>
  );
}
