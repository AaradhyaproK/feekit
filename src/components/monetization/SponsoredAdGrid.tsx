'use client';

import React from 'react';
import {
  ExternalLink,
  ShieldCheck,
  Star,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils/formatters';

export type AdCategoryContext = 'merchant' | 'tax' | 'freelance' | 'ecommerce' | 'general';

interface SponsoredAdGridProps {
  context?: AdCategoryContext;
  className?: string;
  title?: string;
  subtitle?: string;
}

interface SponsoredPartner {
  id: string;
  name: string;
  badge: string;
  rating: string;
  reviewCount: string;
  headline: string;
  description: string;
  perk: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  accentColor: string;
}

const ALL_PARTNERS: Record<string, SponsoredPartner> = {
  wise: {
    id: 'wise',
    name: 'Wise Business',
    badge: 'Save ~2.8% on Invoices',
    rating: '4.9',
    reviewCount: '190k+',
    headline: 'Eliminate Stripe 3% Cross-Border Fees',
    description: 'Get local US routing, UK sort code, and EUR IBAN. Receive client payments like a local business with true mid-market rates.',
    perk: '$0 Fee Transfer on First $1,000',
    features: [
      'Multi-currency account (40+ currencies)',
      'Direct batch contractor payouts',
      'Integrates with QuickBooks & Xero',
    ],
    ctaText: 'Claim $0 Fee Transfer',
    ctaLink: 'https://wise.com/business',
    accentColor: 'blue',
  },
  deel: {
    id: 'deel',
    name: 'Deel Contractor',
    badge: '1-Click Invoicing & Tax',
    rating: '4.8',
    reviewCount: '15k+',
    headline: 'Automate 1099, W-8BEN & Global Contracts',
    description: 'Create compliant US & international contractor agreements. Withdraw funds in 15+ currencies with automatic expense tracking.',
    perk: 'Free Contractor Invoicing Suite',
    features: [
      'IRS Form 1099-NEC automation',
      'Instant card or bank withdrawals',
      'Cryptocurrency & local transfer payouts',
    ],
    ctaText: 'Get Started on Deel',
    ctaLink: 'https://www.deel.com',
    accentColor: 'indigo',
  },
  taxjar: {
    id: 'taxjar',
    name: 'TaxJar / Stripe Tax',
    badge: '50-State Sales Tax Filing',
    rating: '4.8',
    reviewCount: '25k+',
    headline: 'Automate Multi-State Economic Nexus',
    description: 'Track sales tax liability across California, Texas, New York, and all 50 states with automated return filing and certified accuracy.',
    perk: '30-Day Free Nexus Audit',
    features: [
      'Real-time address-level tax rates',
      'Automated AutoFile returns to states',
      'Exemption certificate management',
    ],
    ctaText: 'Start Free Tax Audit',
    ctaLink: 'https://www.taxjar.com',
    accentColor: 'emerald',
  },
  shopify: {
    id: 'shopify',
    name: 'Shopify DTC',
    badge: '$1/Month Promo Offer',
    rating: '4.9',
    reviewCount: '500k+',
    headline: 'Launch High-Converting E-Commerce Stores',
    description: 'The world\'s highest-converting checkout. Built-in payments, abandoned cart recovery, and global multi-channel inventory sync.',
    perk: '3 Months for $1/Month',
    features: [
      'Industry-leading 4-second mobile checkout',
      'Built-in Shopify Payments (zero extra fee)',
      'Direct TikTok & Instagram sales sync',
    ],
    ctaText: 'Claim $1/Mo Shopify Deal',
    ctaLink: 'https://www.shopify.com',
    accentColor: 'sky',
  },
  mercury: {
    id: 'mercury',
    name: 'Mercury B2B Banking',
    badge: 'Zero Wire Fees',
    rating: '4.9',
    reviewCount: '100k+',
    headline: 'Precision Banking Built for Modern Startups',
    description: 'FDIC-insured accounts up to $5M through partner banks. Free domestic & international wires, corporate cards, and API access.',
    perk: 'Up to $5M FDIC Insurance',
    features: [
      'Zero monthly account minimums',
      'Free USD domestic and USD wires',
      'Custom employee card spend limits',
    ],
    ctaText: 'Open Mercury Account',
    ctaLink: 'https://mercury.com',
    accentColor: 'slate',
  },
};

export function SponsoredAdGrid({
  context = 'general',
  className,
  title = 'Featured B2B Solutions & Partner Offers',
  subtitle = 'Curated business utilities verified for US & UK operations, payment optimization, and tax compliance.',
}: SponsoredAdGridProps) {
  // Select 3 high-converting partner boxes contextually
  let selectedKeys: string[] = ['wise', 'deel', 'taxjar'];

  if (context === 'merchant') {
    selectedKeys = ['wise', 'mercury', 'deel'];
  } else if (context === 'tax') {
    selectedKeys = ['taxjar', 'wise', 'mercury'];
  } else if (context === 'freelance') {
    selectedKeys = ['deel', 'wise', 'mercury'];
  } else if (context === 'ecommerce') {
    selectedKeys = ['shopify', 'wise', 'taxjar'];
  }

  const partners = selectedKeys.map((key) => ALL_PARTNERS[key]).filter(Boolean);

  return (
    <section
      aria-label="Sponsored Business Utilities"
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs',
        className
      )}
    >
      {/* Top Section Header & FTC Micro-Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              ADVERTISEMENT
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/80">
              <ShieldCheck className="h-3 w-3 text-blue-600" />
              Verified B2B Partner Network
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5 max-w-2xl">
            {subtitle}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-slate-400">
          <span>Sponsored placements</span>
        </div>
      </div>

      {/* 3-Box Standard Medium Rectangle Format Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-all duration-200 hover:border-blue-400 hover:bg-white hover:shadow-md"
          >
            {/* Box Header */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700 border border-blue-200">
                  <TrendingUp className="h-2.5 w-2.5" />
                  {partner.badge}
                </span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span>{partner.rating}</span>
                  <span className="text-slate-400 font-normal">({partner.reviewCount})</span>
                </div>
              </div>

              {/* Partner Name & Headline */}
              <div className="mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {partner.name}
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mt-0.5">
                  {partner.headline}
                </h4>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-1.5 line-clamp-2">
                {partner.description}
              </p>

              {/* Highlighted Perk Box */}
              <div className="mt-3 rounded-lg bg-emerald-50/80 border border-emerald-200 px-2.5 py-1.5 text-[11px] font-bold text-emerald-800 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-emerald-600 shrink-0" />
                <span className="truncate">{partner.perk}</span>
              </div>

              {/* Feature Bullets */}
              <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
                {partner.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-blue-600 shrink-0" />
                    <span className="truncate">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box CTA Button */}
            <div className="mt-4 pt-3 border-t border-slate-200/70">
              <a
                href={partner.ctaLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white shadow-xs transition-all duration-150 hover:bg-blue-700 active:scale-[0.98]"
              >
                <span>{partner.ctaText}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* FTC Compliant Footnote */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
        <p className="text-center sm:text-left">
          <span className="font-semibold text-slate-500">Editorial Independence:</span> FeeKit may receive compensation from partner links at no additional cost to you. All mathematical calculations remain 100% client-side and uninfluenced.
        </p>
        <span className="shrink-0 font-mono text-[10px] text-slate-400">
          SPONSORED • FTC COMPLIANT
        </span>
      </div>
    </section>
  );
}
