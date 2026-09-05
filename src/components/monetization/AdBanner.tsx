'use client';

import React from 'react';
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils/formatters';

export type AdSlotType = 'leaderboard' | 'post_calc' | 'in_feed' | 'sidebar' | 'rectangle';

interface AdBannerProps {
  slot: AdSlotType;
  context?: 'merchant' | 'tax' | 'freelance' | 'ecommerce' | 'general';
  title?: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
  sponsorName?: string;
  badgeText?: string;
  className?: string;
}

const DEFAULT_SLOT_DATA: Record<string, {
  sponsorName: string;
  title: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
  perk: string;
}> = {
  merchant: {
    sponsorName: 'Wise Business',
    title: 'Stop Losing 3% on International Stripe & PayPal Payouts',
    tagline: 'Receive US/UK client payments via local routing numbers and convert at true mid-market exchange rates.',
    ctaText: 'Claim $0 Fee Transfer',
    ctaLink: 'https://wise.com/business',
    badge: 'Save ~2.8% on Invoices',
    perk: 'Fee-Free First $1,000 Transfer',
  },
  tax: {
    sponsorName: 'TaxJar / Stripe Tax',
    title: 'Automate 50-State Sales Tax Nexus & Form 1040 Schedule C',
    tagline: 'Track economic nexus thresholds across California, Texas, New York, and Florida with certified 1-click filing.',
    ctaText: 'Start Free Tax Audit',
    ctaLink: 'https://www.taxjar.com',
    badge: 'Certified Automated Nexus',
    perk: '30-Day Free Multi-State Audit',
  },
  freelance: {
    sponsorName: 'Deel Contractor',
    title: 'Automate Global Client Invoicing, W-8BEN & IRS Form 1099',
    tagline: 'Create legally compliant US & international contracts and withdraw in 15+ currencies with zero wire deductions.',
    ctaText: 'Get Started on Deel',
    ctaLink: 'https://www.deel.com',
    badge: '1-Click Invoicing & Tax',
    perk: 'Free Contractor Invoicing Suite',
  },
  ecommerce: {
    sponsorName: 'Shopify DTC',
    title: 'Launch an E-Commerce Store with the World’s Highest Converting Checkout',
    tagline: 'Built-in Shopify Payments, automated inventory sync, and multi-channel TikTok/Instagram integration.',
    ctaText: 'Claim $1/Mo Shopify Deal',
    ctaLink: 'https://www.shopify.com',
    badge: '$1/Month Promo Offer',
    perk: '3 Months for $1/Month',
  },
  general: {
    sponsorName: 'Wise Business',
    title: 'Tired of 3% Cross-Border Fees? Switch to Wise Business',
    tagline: 'Send invoices, receive US/UK client transfers, and pay vendors at true mid-market exchange rates with zero hidden markup.',
    ctaText: 'Claim $0 Fee Transfer',
    ctaLink: 'https://wise.com/business',
    badge: 'Featured B2B Partner',
    perk: 'Fee-Free First $1,000 Transfer',
  },
};

export function AdBanner({
  slot,
  context = 'general',
  title,
  tagline,
  ctaText,
  ctaLink,
  sponsorName,
  badgeText,
  className,
}: AdBannerProps) {
  const fallback = DEFAULT_SLOT_DATA[context] || DEFAULT_SLOT_DATA.general;

  const finalTitle = title || fallback.title;
  const finalTagline = tagline || fallback.tagline;
  const finalCtaText = ctaText || fallback.ctaText;
  const finalCtaLink = ctaLink || fallback.ctaLink;
  const finalSponsor = sponsorName || fallback.sponsorName;
  const finalBadge = badgeText || fallback.badge;
  const finalPerk = fallback.perk;

  // 1. Top Billboard / Leaderboard Banner (Compact, space-efficient, professional)
  if (slot === 'leaderboard') {
    return (
      <div className={cn('w-full my-1.5 sm:my-2', className)}>
        <div className="w-full rounded-xl border border-blue-200/70 bg-gradient-to-r from-blue-50/50 via-white to-sky-50/40 px-3 py-2 sm:px-4 sm:py-2.5 text-slate-800 shadow-xs transition-all hover:border-blue-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100/90 px-1.5 py-0.5 rounded border border-slate-200">
                AD
              </span>
              <span className="shrink-0 hidden md:inline-flex text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                {finalBadge}
              </span>
              <span className="shrink-0 text-xs font-bold text-slate-900">{finalSponsor}</span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <p className="text-xs font-semibold text-slate-700 truncate">
                {finalTitle}
              </p>
            </div>

            <a
              href={finalCtaLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-xs whitespace-nowrap"
            >
              <span>{finalCtaText}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 2. High-Intent Post-Calculation Action Box (Directly below calculator results)
  if (slot === 'post_calc') {
    return (
      <div
        className={cn(
          'my-6 rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40 p-5 sm:p-6 shadow-xs transition-all hover:border-blue-300',
          className
        )}
      >
        <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-2">
          <span className="font-semibold">ADVERTISEMENT • RECOMMENDED OPTIMIZATION</span>
          <span className="text-blue-600 font-bold flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" />
            Verified Solution
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-900">{finalSponsor}</span>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800 border border-emerald-200">
                {finalPerk}
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
              {finalTitle}
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {finalTagline}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href={finalCtaLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-all hover:bg-blue-700 active:scale-95"
            >
              <span>{finalCtaText}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 3. Standard Medium Rectangle Box (300x250 format)
  if (slot === 'rectangle') {
    return (
      <div
        className={cn(
          'w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-blue-300 hover:shadow-md flex flex-col justify-between min-h-[250px]',
          className
        )}
      >
        <div>
          <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-2">
            <span>ADVERTISEMENT</span>
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {finalSponsor}
            </span>
            <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 border border-blue-200">
              {finalBadge}
            </span>
          </div>

          <h4 className="text-sm font-bold text-slate-900 leading-snug">
            {finalTitle}
          </h4>

          <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
            {finalTagline}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100">
          <a
            href={finalCtaLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-blue-700"
          >
            <span>{finalCtaText}</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    );
  }

  // 4. Sidebar Box
  if (slot === 'sidebar') {
    return (
      <div className={cn('rounded-xl border border-slate-200 bg-white p-4 text-slate-800 shadow-xs', className)}>
        <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-2">
          <span>ADVERTISEMENT</span>
          <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
        </div>
        <div className="w-full rounded-lg bg-gradient-to-br from-slate-50 to-blue-50/50 border border-blue-100 p-3.5 flex flex-col justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
              {finalSponsor}
            </span>
            <p className="text-xs font-bold text-slate-900 leading-snug mt-0.5">{finalTitle}</p>
          </div>
          <a
            href={finalCtaLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="w-full text-center py-2 px-3 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
          >
            {finalCtaText}
          </a>
        </div>
      </div>
    );
  }

  // 5. In-Feed Unit
  return (
    <div className={cn('my-6 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50/30 p-5 shadow-xs', className)}>
      <div className="text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-1">
        ADVERTISEMENT • VERIFIED UTILITY
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
              {finalBadge}
            </span>
            <span className="text-xs font-semibold text-slate-500">{finalSponsor}</span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900">{finalTitle}</h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">{finalTagline}</p>
        </div>
        <a
          href={finalCtaLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-xs"
        >
          <span>{finalCtaText}</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
