'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CreditCard,
  Building2,
  Globe2,
  Briefcase,
  ShoppingBag,
  ArrowRight,
  Search,
  ShieldCheck,
  Zap,
  Sparkles,
  Flame,
  CheckCircle2,
  Check,
  Layers,
  FileText,
  TrendingUp,
  Receipt,
  BookOpen,
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
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { FastSearchBar } from '@/components/search/FastSearchBar';
import { SuiteShowcaseHub } from '@/components/home/SuiteShowcaseHub';
import { ComparisonMatricesSection } from '@/components/home/ComparisonMatricesSection';
import { EditorialGuidesSection } from '@/components/home/EditorialGuidesSection';
import { UniversalGuideHub } from '@/components/seo/UniversalGuideHub';
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
  {
    title: 'Texas Sales Tax',
    href: '/tools/sales-tax-calculator/texas',
    badge: '6.25% - 8.25%',
  },
  {
    title: 'Square POS Fee',
    href: '/tools/square-fee-calculator/standard',
    badge: '2.6% + $0.10',
  },
];

const QUICK_SUITE_CHIPS = [
  { label: 'Payment Gateways', count: '40+', icon: CreditCard, suiteId: 'merchant' as ActiveSuite },
  { label: '50 US States Sales Tax', count: '51 States', icon: Building2, suiteId: 'tax' as ActiveSuite },
  { label: 'UK & Global VAT', count: '28 Countries', icon: Globe2, suiteId: 'tax' as ActiveSuite },
  { label: '1099 Freelance Rates', count: '37 Roles', icon: Briefcase, suiteId: 'freelance' as ActiveSuite },
  { label: 'E-Commerce & ROAS', count: '21 Niches', icon: ShoppingBag, suiteId: 'ecommerce' as ActiveSuite },
];

const HOME_FAQS = [
  {
    question: 'What is FeeKit and what calculators does it provide?',
    answer:
      'FeeKit is a free, high-precision financial utility suite built for US, UK, and Canadian businesses, online merchants, and freelancers. It offers 199+ dedicated calculators across 10 core domains: 50-state sales tax with local district surtaxes, 10 Canadian provincial tax rates, UK HMRC VAT compliance (20% standard and 5% reduced), payment gateway deductions (Stripe, PayPal, Square, Venmo, Gumroad, Lemon Squeezy, Shopify Payments, Wise, Authorize.Net), 1099 freelance hourly and day rates (accounting for 15.3% SECA tax), quarterly estimated tax vouchers, and business metrics (profit margin, break-even, ROI).',
  },
  {
    question: 'Are FeeKit fee and tax calculations completely free and private?',
    answer:
      'Yes, all FeeKit calculators are 100% free to use with no accounts, sign-ups, or credit cards required. Furthermore, calculations run entirely client-side in your web browser—your sensitive invoice totals, merchant revenue numbers, and customer charges are never uploaded or stored on any remote server.',
  },
  {
    question: 'How accurate and up-to-date are the 2026 sales tax and VAT rates?',
    answer:
      'FeeKit tax matrices are continuously updated to reflect 2026 statutory changes. This includes statutory statewide base sales tax and local municipal surtax caps across all 50 US states, economic nexus thresholds post-Wayfair ($100k / $500k thresholds), and the UK HMRC £90,000 VAT registration threshold and Making Tax Digital (MTD) digital filing standards.',
  },
  {
    question: 'Which payment processors and merchant gateways are supported?',
    answer:
      'FeeKit supports domestic and international fee models for major commercial payment processors including Stripe (card processing, ACH direct debit, international surcharge), PayPal (standard commercial 3.49% + $0.49, micropayments, QR code), Square (POS in-person tap, keyed-in virtual terminal, online eCommerce), Wise Business mid-market FX rates, and Authorize.Net gateway rates.',
  },
  {
    question: 'Can I reverse-calculate invoices to pass processing fees or tax to clients?',
    answer:
      'Yes. Every calculator on FeeKit features bidirectional computation. You can toggle between "Net to Gross" (adding fees or taxes onto your price) and "Gross to Net" (extracting fees or taxes from a total received). For freelance contractors and merchants, our reverse payout formula calculates the exact invoice figure needed to take home 100% of your target earnings without cash shortfalls.',
  },
  {
    question: 'How does the 1099 Freelance Rate Calculator account for Self-Employment Tax?',
    answer:
      'Our freelance engine factors in the full 15.3% SECA tax (12.4% Social Security up to statutory wage caps and 2.9% Medicare) that W-2 employers normally pay half of. It also incorporates annual business overhead expenses, health insurance allowances, and realistic billable efficiency (1,000 to 1,200 annual billable hours) to derive minimum hourly and 8-hour day rates across 37 specialized tech and creative roles.',
  },
  {
    question: 'How does the E-Commerce Profit & ROAS Calculator compute break-even points?',
    answer:
      'The e-commerce engine breaks down unit economics starting from Landed COGS (manufacturing, freight, customs, and prep), platform fulfillment fees (Amazon FBA tiers or Shopify transaction fees), and merchant processing costs. It calculates your true gross margin percentage and computes Break-Even ROAS using the formula: 1 / (Gross Margin %). Any advertising return higher than this threshold yields net profit.',
  },
];

export default function FeeKitHome() {
  const [activeSuite, setActiveSuite] = useState<ActiveSuite>('merchant');
  const [directoryFilter, setDirectoryFilter] = useState('');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');

  const suites = [
    {
      id: 'merchant' as ActiveSuite,
      name: 'Payment & Merchant Fees',
      icon: MerchantFeeIcon,
      subtitle: 'Stripe, PayPal, Wise & Square',
      description: 'USA 2.9% + $0.30, UK 1.5% + 20p, micropayments & reverse invoice payout calculations',
      badge: '40+ Gateways',
      indicatorText: 'Live Gateway Engine',
    },
    {
      id: 'tax' as ActiveSuite,
      name: 'US & UK Tax Compliance',
      icon: TaxComplianceIcon,
      subtitle: '50 States Sales Tax & HMRC VAT',
      description: '50 US States Sales Tax with district surtax caps + UK HMRC VAT 20% Standard & 5% Reduced',
      badge: '50 States + UK',
      indicatorText: 'Live Tax Engine',
    },
    {
      id: 'freelance' as ActiveSuite,
      name: '1099 & Contractor Rates',
      icon: FreelanceRateIcon,
      subtitle: 'Hourly, Day Rate & SECA Tax',
      badge: '37 Roles',
      description: 'Minimum hourly rate, 8h day rates, 15.3% SECA self-employment tax & client invoice proposal formatter',
      indicatorText: 'Live 1099 Engine',
    },
    {
      id: 'ecommerce' as ActiveSuite,
      name: 'E-Commerce & ROAS Hub',
      icon: EcommerceRoasIcon,
      subtitle: 'Amazon FBA, Shopify & ROAS',
      badge: '21 Niches',
      description: 'Amazon FBA, Shopify DTC, Etsy unit economics, landed COGS, and break-even ROAS targets',
      indicatorText: 'Live ROAS Engine',
    },
  ];

  const categories = [
    { key: 'sales-tax-calculator', label: '50 US States Sales Tax Calculators', count: 51, group: 'tax' },
    { key: 'vat-calculator', label: 'UK HMRC VAT & European Compliance', count: 30, group: 'vat' },
    { key: 'stripe-fee-calculator', label: 'Stripe Merchant Fee Calculators (US & UK)', count: 13, group: 'gateway' },
    { key: 'paypal-fee-calculator', label: 'PayPal Processing Fee Calculators (US & UK)', count: 8, group: 'gateway' },
    { key: 'square-fee-calculator', label: 'Square Online & In-Person POS Calculators', count: 7, group: 'gateway' },
    { key: 'wise-vs-stripe', label: 'Wise vs Stripe Currency & Invoice Comparisons', count: 8, group: 'gateway' },
    { key: 'authorize-net-calculator', label: 'Authorize.Net Gateway Calculators', count: 4, group: 'gateway' },
    { key: 'freelance-rate-calculator', label: 'Freelance 1099 & Contractor Rates by Role', count: 37, group: 'freelance' },
    { key: 'ecommerce-profit-calculator', label: 'E-Commerce & Dropshipping Profit Hubs', count: 21, group: 'ecommerce' },
  ];

  const allMatrixItems = useMemo(() => {
    return Array.isArray(geoMatrix)
      ? (geoMatrix as Array<any>)
      : (((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<any>);
  }, []);

  const filteredItems = useMemo(() => {
    let list = allMatrixItems;
    if (selectedCategoryTab !== 'all') {
      if (selectedCategoryTab === 'gateways') {
        list = list.filter((x) =>
          ['stripe-fee-calculator', 'paypal-fee-calculator', 'square-fee-calculator', 'wise-vs-stripe', 'authorize-net-calculator'].includes(x.category)
        );
      } else {
        list = list.filter((x) => x.category === selectedCategoryTab);
      }
    }

    if (!directoryFilter.trim()) return list;
    const q = directoryFilter.toLowerCase();
    return list.filter(
      (x) =>
        x.title.toLowerCase().includes(q) ||
        x.category.toLowerCase().includes(q) ||
        x.slug.toLowerCase().includes(q)
    );
  }, [directoryFilter, selectedCategoryTab, allMatrixItems]);

  const handleSuiteSelect = (suiteId: ActiveSuite) => {
    setActiveSuite(suiteId);
    const element = document.getElementById('interactive-calculator-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full animate-in fade-in duration-200">
      {/* Schema.org WebSite, Organization, and SoftwareApplication Structured Data */}
      <HomeJsonLd />

      {/* Hero Banner: Full-Bleed touching top and both sides */}
      <div className="w-full overflow-hidden bg-white border-b border-slate-200/90 shadow-2xs">
        <Image
          src="/bgimage-homepage.webp"
          alt="FeeKit — Comprehensive Financial Calculation Utilities: Payment processing fees, 50-state sales tax, HMRC VAT compliance, 1099 contractor rate models, and e-commerce ROAS unit economics"
          width={2172}
          height={724}
          priority
          sizes="100vw"
          className="w-full h-auto object-cover block rounded-none"
        />
      </div>

      {/* Semantic SEO Text & Heading Structure */}
      <div className="sr-only">
        <h1>FeeKit — Financial Calculators & Business Tools for Freelancers, Small Businesses & Merchants</h1>
        <p>
          Practical financial calculation tools and educational resources built for freelancers, consultants, digital agencies, service businesses, and online merchants. Instant payment processing fees for Stripe, PayPal, Square, 50-state sales tax, HMRC VAT compliance, 1099 contractor rate models, and profit margin analysis. 100% free, private, and client-side.
        </p>
      </div>

      {/* Main Responsive Canvas for Inner Content */}
      <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 space-y-6 sm:space-y-10">
        {/* Search Bar & Quick Suite Navigation Chips */}
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="w-full max-w-xl">
              <FastSearchBar placeholder="Search 199+ tools (e.g., California, Stripe, VAT, 1099, Amazon FBA)..." />
            </div>

            {/* Quick-Jump Suite Badges */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 no-scrollbar">
              {QUICK_SUITE_CHIPS.map((chip, i) => {
                const Icon = chip.icon;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSuiteSelect(chip.suiteId)}
                    className="tap-spring shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50/30 transition-all shadow-2xs cursor-pointer"
                  >
                    <Icon className="h-3.5 w-3.5 text-blue-600" />
                    <span>{chip.label}</span>
                    <span className="text-[10px] font-bold text-slate-400 font-mono">
                      {chip.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Swipeable Popular Tools on Mobile, Wrapped on Desktop */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
            <div className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wide mr-1 shrink-0">
              <Flame className="h-3.5 w-3.5 text-amber-500" />
              <span>Trending:</span>
            </div>
            {POPULAR_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="tap-spring shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/20 transition-all shadow-2xs"
              >
                <span>{tool.title}</span>
                <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                  {tool.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Primary Interactive Financial Suite Selector */}
        <div id="interactive-calculator-section" className="space-y-2.5 sm:space-y-3 pt-1">
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

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {suites.map((s) => {
              const Icon = s.icon;
              const isSelected = activeSuite === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSuite(s.id)}
                  className={`group tap-spring relative flex flex-col justify-between rounded-xl sm:rounded-2xl border p-3 sm:p-5 text-left transition-all duration-200 cursor-pointer min-h-[140px] sm:min-h-0 ${
                    isSelected
                      ? 'border-blue-600 bg-white ring-2 ring-blue-600/20 shadow-md -translate-y-0.5'
                      : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Row: Icon & Status Badge */}
                  <div className="flex items-start justify-between gap-1.5 sm:gap-2.5 mb-2 sm:mb-3.5">
                    <div
                      className={`flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'border-blue-200 bg-blue-50/80 shadow-xs ring-2 ring-blue-500/15'
                          : 'border-slate-200/80 bg-slate-50/70 group-hover:border-slate-300 group-hover:bg-white group-hover:shadow-2xs'
                      }`}
                    >
                      <Icon className="h-5 w-5 sm:h-8 sm:w-8 transition-transform duration-200" isActive={isSelected} />
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 sm:gap-1.5 rounded-full border px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-bold tracking-tight transition-colors shadow-2xs ${
                        isSelected
                          ? 'border-blue-200 bg-blue-50 text-blue-700'
                          : 'border-slate-200 bg-slate-50 text-slate-600 group-hover:border-slate-300 group-hover:bg-white group-hover:text-slate-900'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isSelected ? 'bg-blue-600 animate-pulse' : 'bg-slate-400'
                        }`}
                      />
                      <span>{s.badge}</span>
                    </span>
                  </div>

                  {/* Middle: Title & Subtitle */}
                  <div className="space-y-0.5 sm:space-y-1 min-w-0">
                    <h3
                      className={`text-xs sm:text-base font-extrabold tracking-tight leading-tight transition-colors line-clamp-1 sm:line-clamp-none ${
                        isSelected ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
                      }`}
                    >
                      {s.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-500 group-hover:text-slate-700 transition-colors line-clamp-1">
                      {s.subtitle}
                    </p>
                    <p className="hidden sm:block text-[11px] text-slate-400 leading-relaxed line-clamp-2 pt-1">
                      {s.description}
                    </p>
                  </div>

                  {/* Bottom Row */}
                  <div className="mt-2.5 pt-2 sm:mt-4 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 font-bold text-blue-700">
                        <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600 shrink-0" />
                        <span className="text-[10px] sm:text-xs truncate">{s.indicatorText}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-semibold text-slate-400 group-hover:text-blue-600 transition-colors text-[10px] sm:text-xs">
                        <span className="hidden sm:inline">Launch calculator</span>
                        <span className="sm:hidden">Select</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    )}
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider hidden xs:inline-block ${
                        isSelected ? 'text-blue-500' : 'text-slate-400'
                      }`}
                    >
                      2026 Live
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Universal Live Tool Canvas */}
        <section aria-label="Interactive Universal Calculator" className="animate-fade-slide space-y-3">
          {/* Active Engine Indicator Banner */}
          <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-blue-200/80 bg-blue-50/50 text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
              <span className="font-bold text-slate-900 truncate">
                {suites.find((s) => s.id === activeSuite)?.name}
              </span>
              <span className="text-slate-400 hidden md:inline">•</span>
              <span className="text-slate-600 hidden md:inline truncate">
                {suites.find((s) => s.id === activeSuite)?.description}
              </span>
            </div>
            <span className="shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-white border border-blue-200 px-2 py-0.5 rounded-md shadow-2xs">
              Live Engine
            </span>
          </div>

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

        {/* AdSense Unit placed below interactive tool results */}
        <div className="flex justify-center my-3 sm:my-4">
          <LeaderboardAd />
        </div>

        {/* Trust & Value Proposition Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3.5 shadow-xs">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900 truncate">100% Client-Side</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight truncate">
                Zero data leaves browser
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3.5 shadow-xs">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900 truncate">2026 Fiscal Rules</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight truncate">
                Published IRS & HMRC guidance
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3.5 shadow-xs">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Globe2 className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900 truncate">199+ Calculators</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight truncate">
                US, Canada, UK & Global
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3.5 shadow-xs">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-900 truncate">Always Free</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight truncate">
                No login or card needed
              </div>
            </div>
          </div>
        </div>

        {/* Built for Freelancers & Small Businesses Positioning Hub */}
        <section aria-label="Built for Freelancers and Small Businesses" className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tailored Workflows
                </h2>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                Built for Freelancers & Small Businesses
              </h3>
            </div>
            <Link
              href="/small-business"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 group self-start sm:self-auto"
            >
              <span>Explore Small Business Hub</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            Practical financial calculation tools and educational resources engineered for independent operators, service businesses, consultants, digital agencies, and online merchants.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 pt-1">
            <Link
              href="/invoice-generator"
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Invoice Generator
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  Free PDF invoices with tax & payment terms
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-blue-600 inline-flex items-center gap-0.5">
                <span>Create invoice</span>
                <ArrowRight className="h-2.5 w-2.5" />
              </div>
            </Link>

            <Link
              href="/tools/profit-margin-calculator/standard"
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Profit Margin
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  Gross margin, markup & service economics
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-emerald-600 inline-flex items-center gap-0.5">
                <span>Calculate margin</span>
                <ArrowRight className="h-2.5 w-2.5" />
              </div>
            </Link>

            <Link
              href="/tools/stripe-fee-calculator"
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <CreditCard className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Payment Fees
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  Stripe, PayPal & Square reverse payouts
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-indigo-600 inline-flex items-center gap-0.5">
                <span>Check gateway fees</span>
                <ArrowRight className="h-2.5 w-2.5" />
              </div>
            </Link>

            <Link
              href="/tools/sales-tax-calculator"
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Receipt className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Tax Tools
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  50-state sales tax & UK HMRC VAT
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-amber-600 inline-flex items-center gap-0.5">
                <span>Explore taxes</span>
                <ArrowRight className="h-2.5 w-2.5" />
              </div>
            </Link>

            <Link
              href="/tools/freelance-rate-calculator"
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Freelancer Tools
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  1099 hourly rates, day rates & SECA tax
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-purple-600 inline-flex items-center gap-0.5">
                <span>Model rates</span>
                <ArrowRight className="h-2.5 w-2.5" />
              </div>
            </Link>

            <Link
              href="/blog"
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-3 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Business Guides
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  Bookkeeping, invoicing & tax breakdowns
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold text-sky-600 inline-flex items-center gap-0.5">
                <span>Read guides</span>
                <ArrowRight className="h-2.5 w-2.5" />
              </div>
            </Link>
          </div>
        </section>

        {/* 1. All Tool Suites Ecosystem Overview Hub */}
        <SuiteShowcaseHub
          onSelectSuite={handleSuiteSelect}
          activeSuite={activeSuite}
        />

        {/* 2. Cross-Platform Comparison Matrices & Cheat Sheets */}
        <ComparisonMatricesSection />

        {/* 3. Deep-Dive Editorial Research & Blog Guides */}
        <EditorialGuidesSection />

        {/* 4. Universal Multi-Suite Knowledge & Compliance Guide */}
        <UniversalGuideHub inArticleSlot={<InArticleAd />} />

        {/* 5. Programmatic 199-Tool Master Directory Section */}
        <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-200 pb-4 sm:pb-5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
                  US & UK Utility Matrix ({allMatrixItems.length}+ Dedicated Tools)
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
                placeholder={`Filter ${allMatrixItems.length}+ tools...`}
                className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none shadow-xs"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedCategoryTab('all')}
              className={`tap-spring shrink-0 rounded-lg px-3 py-1 text-xs font-bold border transition-colors cursor-pointer ${
                selectedCategoryTab === 'all'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              All Tools ({allMatrixItems.length}+)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategoryTab('sales-tax-calculator')}
              className={`tap-spring shrink-0 rounded-lg px-3 py-1 text-xs font-bold border transition-colors cursor-pointer ${
                selectedCategoryTab === 'sales-tax-calculator'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              50 States Sales Tax (51)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategoryTab('vat-calculator')}
              className={`tap-spring shrink-0 rounded-lg px-3 py-1 text-xs font-bold border transition-colors cursor-pointer ${
                selectedCategoryTab === 'vat-calculator'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              UK & Global VAT (28)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategoryTab('gateways')}
              className={`tap-spring shrink-0 rounded-lg px-3 py-1 text-xs font-bold border transition-colors cursor-pointer ${
                selectedCategoryTab === 'gateways'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              Payment Gateways (29)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategoryTab('freelance-rate-calculator')}
              className={`tap-spring shrink-0 rounded-lg px-3 py-1 text-xs font-bold border transition-colors cursor-pointer ${
                selectedCategoryTab === 'freelance-rate-calculator'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              1099 Freelance Roles (37)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategoryTab('ecommerce-profit-calculator')}
              className={`tap-spring shrink-0 rounded-lg px-3 py-1 text-xs font-bold border transition-colors cursor-pointer ${
                selectedCategoryTab === 'ecommerce-profit-calculator'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              E-Commerce & ROAS (21)
            </button>
          </div>

          {/* Directory Groups */}
          <div className="space-y-6 sm:space-y-8">
            {categories.map((cat) => {
              const catItems = filteredItems.filter((x) => x.category === cat.key);
              if (catItems.length === 0) return null;

              return (
                <React.Fragment key={cat.key}>
                  <div className="space-y-2.5 sm:space-y-3">
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

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
                      {catItems.map((tool) => (
                        <Link
                          key={`${tool.category}-${tool.slug}`}
                          href={`/tools/${tool.category}/${tool.slug}`}
                          className="group flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/60 px-2.5 py-2 text-[11px] sm:text-xs transition-all hover:border-blue-400 hover:bg-white hover:shadow-xs"
                        >
                          <span className="font-medium text-slate-700 group-hover:text-blue-700 truncate pr-1">
                            {tool.shortTitle || tool.title}
                          </span>
                          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400 shrink-0 group-hover:translate-x-0.5 group-hover:text-blue-600 transition-all" />
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
        <FaqSchema items={HOME_FAQS} />
        <FaqAccordion
          items={HOME_FAQS}
          title="Frequently Asked Questions About FeeKit"
        />
      </div>
    </div>
  );
}
