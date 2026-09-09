'use client';

import React from 'react';
import { AdUnit } from './AdUnit';

export interface AdSlotProps {
  slot?: string;
  className?: string;
}

// Configurable slot IDs via environment variables (only active once approved and set)
const DEFAULT_LEADERBOARD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_LEADERBOARD_SLOT || '';
const DEFAULT_RECTANGLE_SLOT = process.env.NEXT_PUBLIC_ADSENSE_RECTANGLE_SLOT || '';
const DEFAULT_IN_ARTICLE_SLOT = process.env.NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT || '';

/**
 * Top of page, format="auto", full width responsive ad unit
 */
export function LeaderboardAd({ slot = DEFAULT_LEADERBOARD_SLOT, className }: AdSlotProps) {
  if (!slot) return null;
  return (
    <AdUnit
      slot={slot}
      format="auto"
      className={className}
    />
  );
}

/**
 * Below calculator results, format="rectangle" (300x250) ad unit
 */
export function RectangleAd({ slot = DEFAULT_RECTANGLE_SLOT, className }: AdSlotProps) {
  if (!slot) return null;
  return (
    <AdUnit
      slot={slot}
      format="rectangle"
      className={className}
    />
  );
}

/**
 * Inside SEO written content section, format="in-article" fluid native ad unit
 */
export function InArticleAd({ slot = DEFAULT_IN_ARTICLE_SLOT, className }: AdSlotProps) {
  if (!slot) return null;
  return (
    <AdUnit
      slot={slot}
      format="in-article"
      className={className}
    />
  );
}

