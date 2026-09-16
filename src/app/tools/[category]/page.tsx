import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import geoMatrix from '@/data/geo-matrix.json';
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Globe,
  Sparkles,
} from 'lucide-react';
import { LeaderboardAd, RectangleAd } from '@/components/ads/AdSlots';
import type { Metadata } from 'next';
import { getCustomSeoMetadata } from '@/lib/seo/meta-overrides';
import { CategoryJsonLd } from '@/components/seo/JsonLd';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

type Props = {
  params: Promise<{ category: string }>;
};

const CATEGORY_NAMES: Record<string, { title: string; desc: string; defaultSlug: string }> = {
  'stripe-fee-calculator': {
    title: 'Stripe Fee Calculators by Region',
    desc: 'Calculate domestic, cross-border, and payout deductions for Stripe merchants across the US, UK, Europe, Canada, and Australia.',
    defaultSlug: 'usa',
  },
  'vat-calculator': {
    title: 'UK & EU VAT Compliance Calculators',
    desc: 'Instant VAT additions and extractions for UK HMRC MTD quarterly returns and EU cross-border B2B reverse charge invoices.',
    defaultSlug: 'united-kingdom',
  },
  'sales-tax-calculator': {
    title: 'US 50-State Sales Tax Calculators',
    desc: 'State statutory bases, county/district discretionary surtaxes, and economic nexus threshold monitoring for remote multichannel sellers.',
    defaultSlug: 'california',
  },
  'paypal-fee-calculator': {
    title: 'PayPal Merchant Fee Calculators',
    desc: 'Standard commercial transaction rates, micropayments, QR codes, and international cross-border surcharges.',
    defaultSlug: 'usa',
  },
  'freelance-rate-calculator': {
    title: '1099 Tax Estimator & Freelance Rate Calculators',
    desc: 'Estimate quarterly self-employment taxes with the 15.3% SE tax rate. Know exactly how much to set aside from every invoice and avoid IRS penalty fees.',
    defaultSlug: 'software-engineer',
  },
  'ecommerce-profit-calculator': {
    title: 'Amazon FBA & E-Commerce Profit Calculators',
    desc: 'Calculate 2026 Amazon FBA fulfillment and 15% referral fees. See your exact net profit per unit and break-even ROAS to protect your e-commerce margins.',
    defaultSlug: 'shopify-dropshipping',
  },
  'square-fee-calculator': {
    title: 'Square Payment Processing Calculators',
    desc: 'In-person POS tap, keyed-in virtual terminal, and online eCommerce checkout fee calculations.',
    defaultSlug: 'usa',
  },
  'wise-vs-stripe': {
    title: 'Wise vs Stripe International Transfer Calculators',
    desc: 'Compare mid-market exchange rates and hidden FX spreads for cross-border contractor payouts and B2B invoices.',
    defaultSlug: 'usd-to-eur',
  },
  'authorize-net-calculator': {
    title: 'Authorize.Net Processing Calculators',
    desc: 'Gateway monthly fees, per-transaction surcharges, and merchant account interchange-plus calculations.',
    defaultSlug: 'standard-merchant',
  },
  'canada-sales-tax': {
    title: 'Canadian Provincial Sales Tax Calculators (GST/HST/PST)',
    desc: 'Calculate GST, PST, QST, and HST across all 10 Canadian provinces with CRA small-supplier threshold tracking.',
    defaultSlug: 'ontario',
  },
  'venmo-fee-calculator': {
    title: 'Venmo for Business Fee Calculators',
    desc: 'Calculate 1.9% + $0.10 contactless QR and 2.29% + $0.10 app checkout deductions for commercial Venmo profiles.',
    defaultSlug: 'standard',
  },
  'gumroad-fee-calculator': {
    title: 'Gumroad Creator Fee Calculators',
    desc: 'Calculate net payouts after Gumroad 10% platform fee and credit card processing charges for digital products.',
    defaultSlug: 'standard',
  },
  'lemon-squeezy-calculator': {
    title: 'Lemon Squeezy & MoR Fee Calculators',
    desc: 'Calculate 5% + $0.50 Merchant of Record fees for SaaS, software subscriptions, and digital assets.',
    defaultSlug: 'standard',
  },
  'shopify-fee-calculator': {
    title: 'Shopify Payments Fee Calculators',
    desc: 'Compare Basic (2.9% + $0.30), Shopify (2.6% + $0.30), and third-party gateway penalty fees.',
    defaultSlug: 'standard',
  },
  'profit-margin-calculator': {
    title: 'Profit Margin & Markup Calculators',
    desc: 'Calculate Gross Margin %, Net Profit, and Cost-of-Goods-Sold markups with interactive waterfall charts.',
    defaultSlug: 'standard',
  },
  'break-even-calculator': {
    title: 'Break-Even Point & Contribution Margin Calculators',
    desc: 'Determine minimum sales units and gross revenue required to cover fixed overhead costs.',
    defaultSlug: 'standard',
  },
  'roi-calculator': {
    title: 'Return on Investment (ROI) Calculators',
    desc: 'Calculate absolute capital return %, annualized CAGR, and net gain multiples for investments.',
    defaultSlug: 'standard',
  },
  'quarterly-tax-calculator': {
    title: 'IRS 1040-ES Quarterly Estimated Tax Calculators',
    desc: 'Calculate Schedule SE self-employment taxes (15.3%) and 4 quarterly IRS payment vouchers.',
    defaultSlug: '1040-es',
  },
  'uk-ir35-calculator': {
    title: 'UK IR35 Contractor Calculators',
    desc: 'Compare Inside IR35 (umbrella deemed contract) vs Outside IR35 (limited company PSC) net take-home pay.',
    defaultSlug: 'contractor',
  },
  'gateway-comparator': {
    title: 'Stripe vs PayPal vs Square 3-Way Fee Comparator',
    desc: 'Side-by-side merchant fee analysis to find the lowest fee processor for your transaction volume.',
    defaultSlug: 'stripe-paypal-square',
  },
};

export function generateStaticParams() {
  const matrixList = Array.isArray(geoMatrix)
    ? (geoMatrix as Array<{ category: string }>)
    : ((((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<{ category: string }>));
  const categories = Array.from(new Set(matrixList.map((x) => x.category)));
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const customSeo = getCustomSeoMetadata(category);
  const meta = CATEGORY_NAMES[category];
  const title = customSeo ? customSeo.title : (meta ? `${meta.title} — FeeKit` : `${category.replace(/-/g, ' ')} Calculators — FeeKit`);
  const description = customSeo ? customSeo.description : (meta ? meta.desc : `Free, instant client-side calculators for ${category.replace(/-/g, ' ')}.`);

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.usefeekit.com/tools/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.usefeekit.com/tools/${category}`,
      siteName: 'FeeKit',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const matrixList = Array.isArray(geoMatrix)
    ? (geoMatrix as Array<any>)
    : ((((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<any>));
  const tools = matrixList.filter((x) => x.category === category);

  if (tools.length === 0) {
    notFound();
  }

  const categoryMeta = CATEGORY_NAMES[category];
  const title = categoryMeta?.title || `${category.replace(/-/g, ' ').toUpperCase()} CALCULATORS`;
  const desc = categoryMeta?.desc || `Explore all ${tools.length} dedicated calculators and regional utilities in this suite.`;
  
  // Find flagship tool
  const defaultSlug = categoryMeta?.defaultSlug;
  const primaryTool = (defaultSlug && tools.find((t) => t.slug === defaultSlug)) || tools[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Schema.org CollectionPage + ItemList + BreadcrumbList */}
      <CategoryJsonLd
        category={category}
        title={title}
        description={desc}
        tools={tools.map((t) => ({ title: t.shortTitle || t.title, slug: t.slug }))}
      />

      {/* Top Hub Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 sm:px-0">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      {/* Unified Master Container: Edge-to-Edge on Mobile, Contained on Desktop */}
      <article className="w-full rounded-none sm:rounded-3xl border-y sm:border border-slate-200 bg-white px-3.5 py-6 sm:p-10 lg:p-12 shadow-xs space-y-10">
        {/* Header */}
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>E-E-A-T Certified</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-blue-700 border border-blue-200">
              <span>{tools.length} Regional Utilities</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-slate-700 border border-slate-200 font-mono">
              <span>Verified 2026</span>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {desc}
            </p>
          </div>
        </header>

        {/* AdSense Leaderboard Unit */}
        <LeaderboardAd />

        {/* Primary Flagship Launcher Banner */}
        {primaryTool && (
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  <span>Recommended Flagship Tool</span>
                </div>
                <h2 className="text-xl font-black text-slate-900">
                  {primaryTool.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  {primaryTool.subtitle}
                </p>
              </div>
              <Link
                href={`/tools/${category}/${primaryTool.slug}`}
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
              >
                <span>Launch Calculator</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Grid of All Tools in this Category */}
        <div className="pt-8 sm:pt-10 border-t border-slate-200/80 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">
              All Available Regional Tools & Benchmarks ({tools.length})
            </h3>
            <span className="text-xs text-slate-500 font-medium">Click any card to calculate</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${category}/${tool.slug}`}
                className="group rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 shadow-2xs hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tool.shortTitle || tool.title}
                    </span>
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-600 shrink-0">
                      {tool.currencySymbol || '$'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {tool.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-blue-600 font-semibold">
                  <span>Open Calculator</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* AdSense Rectangle Unit */}
        <div className="flex justify-center my-6">
          <RectangleAd />
        </div>
      </article>
    </div>
  );
}
