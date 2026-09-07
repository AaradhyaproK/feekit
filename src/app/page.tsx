'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Receipt,
  Briefcase,
  ShoppingBag,
  ArrowRight,
  Search,
  Globe2,
  ShieldCheck,
  Zap,
  Sparkles,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { MerchantFeeCalculator } from '@/components/calculators/MerchantFeeCalculator';
import { TaxCalculator } from '@/components/calculators/TaxCalculator';
import { FreelanceRateCalculator } from '@/components/calculators/FreelanceRateCalculator';
import { EcommerceProfitCalculator } from '@/components/calculators/EcommerceProfitCalculator';
import {
  MerchantFeeIcon,
  TaxComplianceIcon,
  FreelanceRateIcon,
  EcommerceRoasIcon,
} from '@/components/ui/SuiteIcons';
import { LeaderboardAd, RectangleAd, InArticleAd } from '@/components/ads/AdSlots';
import { ToolGuide } from '@/components/seo/ToolGuide';
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { FaqSchema } from '@/components/seo/FaqSchema';
import geoMatrix from '@/data/geo-matrix.json';

type ActiveSuite = 'merchant' | 'tax' | 'freelance' | 'ecommerce';

const POPULAR_TOOLS = [
  {
    title: 'California Sales Tax',
    href: '/tools/sales-tax-calculator/california',
    badge: '7.25% - 10.25%',
  },
  {
    title: 'UK VAT Calculator',
    href: '/tools/vat-calculator/united-kingdom',
    badge: '20% & 5% MTD',
  },
  {
    title: 'Stripe Fee (USA)',
    href: '/tools/stripe-fee-calculator/usa',
    badge: '2.9% + $0.30',
  },
  {
    title: 'PayPal Merchant Fee',
    href: '/tools/paypal-fee-calculator/usa',
    badge: 'Standard & QR',
  },
  {
    title: '1099 Freelance Rate',
    href: '/tools/freelance-rate-calculator/software-engineer',
    badge: '15.3% SECA',
  },
  {
    title: 'Amazon FBA & Dropship',
    href: '/tools/ecommerce-profit-calculator/shopify-dropshipping',
    badge: 'ROAS & COGS',
  },
];

const HOME_FAQS = [
  {
    question: 'What is FeeKit and what calculators does it provide?',
    answer:
      'FeeKit is a free, high-precision financial utility suite built for US and UK businesses, online merchants, and freelancers. It offers over 160 dedicated calculators including 50-state sales tax with local district surtaxes, UK HMRC VAT compliance (20% standard and 5% reduced), payment gateway deductions (Stripe, PayPal, Square, Wise), 1099 freelance hourly and day rates, and e-commerce margin and ROAS benchmarks.',
  },
  {
    question: 'Are FeeKit fee and tax calculations completely free and private?',
    answer:
      'Yes, all FeeKit calculators are 100% free to use with no accounts, sign-ups, or credit cards required. Furthermore, calculations run entirely client-side in your web browser—your sensitive invoice totals, merchant revenue numbers, and customer charges are never uploaded or stored on any remote server.',
  },
  {
    question: 'How accurate and up-to-date are the 2026 sales tax and VAT rates?',
    answer:
      'FeeKit tax matrices are continuously updated to reflect 2026 statutory changes. This includes statutory statewide base sales tax and local municipal surtax caps across all 50 US states, economic nexus thresholds post-Wayfair, and the UK HMRC £90,000 VAT registration threshold and Making Tax Digital (MTD) digital filing standards.',
  },
  {
    question: 'Which payment processors and merchant gateways are supported?',
    answer:
      'FeeKit supports domestic and international fee models for major commercial payment processors including Stripe (card processing, ACH direct debit, international surcharge), PayPal (standard commercial, micropayments, QR code), Square (POS in-person tap, keyed-in virtual terminal, online eCommerce), and Wise vs Stripe cross-border FX comparisons.',
  },
  {
    question: 'Can I reverse-calculate invoices to pass processing fees or tax to clients?',
    answer:
      'Yes. Every calculator on FeeKit features bidirectional computation. You can toggle between "Net to Gross" (adding fees or taxes onto your price) and "Gross to Net" (extracting fees or taxes from a total received). For freelance contractors and merchants, our reverse payout formula calculates the exact invoice figure needed to take home 100% of your target earnings.',
  },
];

export default function FeeKitHome() {
  const [activeSuite, setActiveSuite] = useState<ActiveSuite>('merchant');
  const [directoryFilter, setDirectoryFilter] = useState('');

  const suites = [
    {
      id: 'merchant' as ActiveSuite,
      name: 'Stripe & Merchant Fees',
      icon: MerchantFeeIcon,
      subtitle: 'Stripe, PayPal, Wise & Square',
      description: 'USA 2.9% + $0.30, UK 1.5% + 20p, micropayments & reverse invoice payout calculations',
      badge: '40+ Gateways',
      gradient: 'from-indigo-500 via-blue-600 to-violet-600',
      activeBorder: 'border-indigo-600 ring-4 ring-indigo-500/10 shadow-lg shadow-indigo-500/5',
      activeBg: 'bg-gradient-to-b from-indigo-50/50 via-white to-white',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      badgeDot: 'bg-indigo-500',
      indicatorText: 'Live Gateway Engine',
    },
    {
      id: 'tax' as ActiveSuite,
      name: 'US & UK Tax Compliance',
      icon: TaxComplianceIcon,
      subtitle: '50 States Sales Tax & HMRC VAT',
      description: '50 US States Sales Tax with district surtax caps + UK HMRC VAT 20% Standard & 5% Reduced',
      badge: '50 States + UK',
      gradient: 'from-emerald-500 via-teal-600 to-emerald-700',
      activeBorder: 'border-emerald-600 ring-4 ring-emerald-500/10 shadow-lg shadow-emerald-500/5',
      activeBg: 'bg-gradient-to-b from-emerald-50/50 via-white to-white',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      badgeDot: 'bg-emerald-500',
      indicatorText: 'Live Tax Engine',
    },
    {
      id: 'freelance' as ActiveSuite,
      name: '1099 & Contractor Rates',
      icon: FreelanceRateIcon,
      subtitle: 'Hourly, Day Rate & SECA Tax',
      badge: '25 Roles',
      description: 'Minimum hourly rate, 8h day rates, 15.3% SECA self-employment tax & client invoice proposal formatter',
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      activeBorder: 'border-amber-600 ring-4 ring-amber-500/10 shadow-lg shadow-amber-500/5',
      activeBg: 'bg-gradient-to-b from-amber-50/50 via-white to-white',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/80',
      badgeDot: 'bg-amber-500',
      indicatorText: 'Live 1099 Engine',
    },
    {
      id: 'ecommerce' as ActiveSuite,
      name: 'E-Commerce & ROAS Hub',
      icon: EcommerceRoasIcon,
      subtitle: 'Amazon FBA, Shopify & ROAS',
      badge: '20 Niches',
      description: 'Amazon FBA, Shopify DTC, Etsy unit economics, landed COGS, and break-even ROAS targets',
      gradient: 'from-blue-500 via-cyan-500 to-blue-700',
      activeBorder: 'border-blue-600 ring-4 ring-blue-500/10 shadow-lg shadow-blue-500/5',
      activeBg: 'bg-gradient-to-b from-blue-50/50 via-white to-white',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200/80',
      badgeDot: 'bg-blue-500',
      indicatorText: 'Live ROAS Engine',
    },
  ];

  const categories = [
    { key: 'sales-tax-calculator', label: '50 US States Sales Tax Calculators', count: 51 },
    { key: 'vat-calculator', label: 'UK HMRC VAT & European Compliance', count: 28 },
    { key: 'stripe-fee-calculator', label: 'Stripe Merchant Fee Calculators (US & UK)', count: 11 },
    { key: 'paypal-fee-calculator', label: 'PayPal Processing Fee Calculators (US & UK)', count: 9 },
    { key: 'wise-vs-stripe', label: 'Wise vs Stripe Currency & Invoice Comparisons', count: 8 },
    { key: 'square-fee-calculator', label: 'Square Online & In-Person POS Calculators', count: 7 },
    { key: 'authorize-net-calculator', label: 'Authorize.Net Gateway Calculators', count: 4 },
    { key: 'freelance-rate-calculator', label: 'Freelance 1099 & Contractor Rates by Role', count: 26 },
    { key: 'ecommerce-profit-calculator', label: 'E-Commerce & Dropshipping Profit Hubs', count: 20 },
  ];

  const allMatrixItems = React.useMemo(() => {
    return Array.isArray(geoMatrix)
      ? (geoMatrix as Array<any>)
      : (((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<any>);
  }, []);

  const filteredItems = React.useMemo(() => {
    if (!directoryFilter.trim()) return allMatrixItems;
    const q = directoryFilter.toLowerCase();
    return allMatrixItems.filter(
      (x) =>
        x.title.toLowerCase().includes(q) ||
        x.category.toLowerCase().includes(q) ||
        x.slug.toLowerCase().includes(q)
    );
  }, [directoryFilter, allMatrixItems]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* Schema.org WebSite, Organization, and SoftwareApplication Structured Data */}
      <HomeJsonLd />

      {/* Hero Header Section */}
      <div className="text-center sm:text-left space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1 text-xs font-semibold text-blue-700">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          <span>Updated for 2026 US & UK Tax & Gateway Regulations</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Financial Calculation Utilities <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
            for US & UK Businesses
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Accurate, instant payment processing fees, 50-state sales tax, HMRC VAT compliance, and 1099 contractor rate models. 100% client-side private, with zero sign-up required.
        </p>

        {/* Popular Tools Quick Pills */}
        <div className="pt-2 flex flex-wrap items-center gap-2 justify-center sm:justify-start">
          <div className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wide mr-1">
            <Flame className="h-3.5 w-3.5 text-amber-500" />
            <span>Popular:</span>
          </div>
          {POPULAR_TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/30 transition-all shadow-2xs"
            >
              <span>{tool.title}</span>
              <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                {tool.badge}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Primary Financial Suite Selector (Responsive 1-col on mobile, 2-col on tablet, 4-col on desktop) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
              Interactive Financial Engine Suites
            </h2>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline-block">
            Select a suite to launch live calculation model
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {suites.map((s) => {
            const Icon = s.icon;
            const isSelected = activeSuite === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSuite(s.id)}
                className={`group relative flex flex-col justify-between rounded-2xl border p-4 sm:p-5 text-left transition-all duration-200 cursor-pointer overflow-hidden ${
                  isSelected
                    ? `${s.activeBorder} ${s.activeBg} -translate-y-0.5`
                    : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Glowing Top Accent Line for Active State */}
                {isSelected && (
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${s.gradient}`} />
                )}

                {/* Top Row: Creative Icon & Dynamic Status Badge */}
                <div className="flex items-start justify-between gap-2.5 mb-3.5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? `${s.badgeClass} shadow-xs ring-2 ring-current/20 scale-105`
                        : 'border-slate-200/80 bg-slate-50/70 group-hover:border-slate-300 group-hover:bg-white group-hover:shadow-2xs group-hover:scale-105'
                    }`}
                  >
                    <Icon className="h-8 w-8 transition-transform duration-200" isActive={isSelected} />
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold tracking-tight transition-colors shadow-2xs ${
                      isSelected
                        ? `${s.badgeClass} ring-1 ring-inset ring-current/10`
                        : 'border-slate-200 bg-slate-50 text-slate-600 group-hover:border-slate-300 group-hover:bg-white group-hover:text-slate-900'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isSelected ? `${s.badgeDot} animate-pulse` : 'bg-slate-400'
                      }`}
                    />
                    <span>{s.badge}</span>
                  </span>
                </div>

                {/* Middle: Title & Subtitle */}
                <div className="space-y-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 group-hover:text-slate-700 transition-colors">
                    {s.subtitle}
                  </p>
                  <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 pt-1">
                    {s.description}
                  </p>
                </div>

                {/* Bottom Row: Active Indicator / Quick Switch Cue */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1.5 font-bold text-slate-900">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      <span className="text-[11px] sm:text-xs text-slate-800">{s.indicatorText}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-semibold text-slate-400 group-hover:text-blue-600 transition-colors text-[11px] sm:text-xs">
                      <span>Launch calculator</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    2026 Live
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Universal Live Tool Canvas with Smooth Fade-Slide */}
      <section aria-label="Interactive Universal Calculator" className="animate-fade-slide">
        {activeSuite === 'merchant' && (
          <MerchantFeeCalculator initialGateway="stripe" initialAmount={1000} />
        )}
        {activeSuite === 'tax' && (
          <TaxCalculator initialJurisdictionCode="CA" initialAmount={250} />
        )}
        {activeSuite === 'freelance' && (
          <FreelanceRateCalculator initialRole="Fullstack Developer" initialNet={110000} />
        )}
        {activeSuite === 'ecommerce' && (
          <EcommerceProfitCalculator initialPlatform="shopify" initialPrice={49.99} initialCogs={14.0} />
        )}
      </section>

      {/* AdSense Unit placed below interactive tool results (Compliant with AdSense Value of Inventory guidelines) */}
      <div className="flex justify-center my-4">
        <LeaderboardAd />
      </div>

      {/* Trust & Value Proposition Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">100% Client-Side</div>
            <div className="text-[11px] text-slate-500">Zero data leaves your browser</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">2026 Fiscal Rules</div>
            <div className="text-[11px] text-slate-500">IRS, CDTFA & HMRC compliant</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Globe2 className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">160+ Dedicated Tools</div>
            <div className="text-[11px] text-slate-500">50 US States, UK & Gateways</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Always Free</div>
            <div className="text-[11px] text-slate-500">No login or card required</div>
          </div>
        </div>
      </div>

      {/* Goldmine Business Strategy & Legal Guide */}
      <ToolGuide
        suiteType={activeSuite}
        title={suites.find((s) => s.id === activeSuite)?.name || 'Fintech Utility'}
        currencySymbol="$"
        geoRegion="US"
        inArticleSlot={<InArticleAd />}
      />

      {/* Programmatic SEO Directory Section */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                US & UK Utility Matrix ({allMatrixItems.length} Dedicated Tools)
              </h2>
              <span className="rounded bg-blue-50 px-2 py-0.5 font-mono text-xs font-bold text-blue-700 border border-blue-200">
                Geo-Targeted
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Browse dedicated calculators configured with statutory IRS and HMRC rates, mathematical formulas, and schema
            </p>
          </div>

          {/* Quick Filter Box */}
          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={directoryFilter}
              onChange={(e) => setDirectoryFilter(e.target.value)}
              placeholder={`Filter ${allMatrixItems.length} tools...`}
              className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none shadow-xs"
            />
          </div>
        </div>

        {/* Directory Groups */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const catItems = filteredItems.filter((x) => x.category === cat.key);
            if (catItems.length === 0) return null;

            return (
              <React.Fragment key={cat.key}>
                <div className="space-y-3">
                  {/* Category Header with Pillar Hub Internal Link */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <Link
                      href={`/tools/${cat.key}`}
                      className="group inline-flex items-center gap-2 font-bold uppercase tracking-wider text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                      <span className="group-hover:underline underline-offset-4">{cat.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                    <Link
                      href={`/tools/${cat.key}`}
                      className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 transition-colors self-start sm:self-auto"
                    >
                      View all {catItems.length} calculators →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                    {catItems.map((tool) => (
                      <Link
                        key={`${tool.category}-${tool.slug}`}
                        href={`/tools/${tool.category}/${tool.slug}`}
                        className="group flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-xs transition-all hover:border-blue-400 hover:bg-white hover:shadow-xs"
                      >
                        <span className="font-medium text-slate-700 group-hover:text-blue-700 truncate pr-2">
                          {tool.shortTitle || tool.title}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 shrink-0 group-hover:translate-x-0.5 group-hover:text-blue-600 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* AdSense Rectangle Unit: between US states grid and UK tools section */}
                {cat.key === 'sales-tax-calculator' && (
                  <div className="flex justify-center py-4 my-2 border-y border-slate-100">
                    <RectangleAd />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* Homepage FAQ Section with FAQPage Schema.org Structured Data */}
      {/* Test schema validity at: https://search.google.com/test/rich-results */}
      <FaqSchema items={HOME_FAQS} />
      <FaqAccordion
        items={HOME_FAQS}
        title="Frequently Asked Questions About FeeKit"
      />
    </div>
  );
}
