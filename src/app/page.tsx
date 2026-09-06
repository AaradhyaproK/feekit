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
} from 'lucide-react';
import { MerchantFeeCalculator } from '@/components/calculators/MerchantFeeCalculator';
import { TaxCalculator } from '@/components/calculators/TaxCalculator';
import { FreelanceRateCalculator } from '@/components/calculators/FreelanceRateCalculator';
import { EcommerceProfitCalculator } from '@/components/calculators/EcommerceProfitCalculator';
import { LeaderboardAd, RectangleAd, InArticleAd } from '@/components/ads/AdSlots';
import { ToolGuide } from '@/components/seo/ToolGuide';
import geoMatrix from '@/data/geo-matrix.json';

type ActiveSuite = 'merchant' | 'tax' | 'freelance' | 'ecommerce';

export default function FeeKitHome() {
  const [activeSuite, setActiveSuite] = useState<ActiveSuite>('merchant');
  const [directoryFilter, setDirectoryFilter] = useState('');

  const suites = [
    {
      id: 'merchant' as ActiveSuite,
      name: 'Stripe & Merchant Fees',
      icon: CreditCard,
      description: 'Stripe USA 2.9% + $0.30 & UK 1.5% + 20p, PayPal, Square, and Wise reverse invoice calculations',
      badge: '40+ Gateways',
    },
    {
      id: 'tax' as ActiveSuite,
      name: 'US & UK Tax Compliance',
      icon: Receipt,
      description: '50 US States Sales Tax + UK HMRC VAT 20% Standard & 5% Reduced with reverse charge logic',
      badge: '50 States + UK',
    },
    {
      id: 'freelance' as ActiveSuite,
      name: '1099 & Contractor Rates',
      icon: Briefcase,
      description: 'Minimum hourly rate, 8h day rates, 1099 SECA tax, and instant client invoice proposal formatter',
      badge: '25 Roles',
    },
    {
      id: 'ecommerce' as ActiveSuite,
      name: 'E-Commerce & ROAS Hub',
      icon: ShoppingBag,
      description: 'Amazon FBA, Shopify DTC, Etsy, eBay unit economics, landed COGS, and break-even ROAS targets',
      badge: '20 Niches',
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
    <div className="space-y-6 sm:space-y-7 animate-in fade-in duration-200">
      {/* Hero Header Section */}
      <div className="text-center sm:text-left space-y-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Financial Calculation Utilities <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
            for US & UK Businesses
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Accurate, instant payment processing fees, 50-state sales tax, HMRC VAT compliance, and 1099 contractor rate models. Fully updated for 2026 fiscal regulations.
        </p>
      </div>

      {/* AdSense Leaderboard Unit: below hero section */}
      <LeaderboardAd />

      {/* Main Suite Switcher Bar (Responsive 2x2 on Mobile, 4x1 on Desktop) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-2 sm:p-2.5 shadow-xs">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {suites.map((s) => {
            const Icon = s.icon;
            const isSelected = activeSuite === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSuite(s.id)}
                className={`tap-spring flex flex-col sm:flex-row items-start gap-2 sm:gap-3 rounded-xl p-2.5 sm:p-3.5 text-left transition-all ${
                  isSelected
                    ? 'border-2 border-blue-600 bg-blue-50/70 text-slate-900 shadow-xs ring-2 ring-blue-500/20'
                    : 'border border-slate-200 bg-slate-50/70 text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900'
                }`}
              >
                <div
                  className={`flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                    isSelected
                      ? 'border-blue-400 bg-blue-600 text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-500'
                  }`}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {s.name}
                    </span>
                  </div>
                  <span className="inline-block text-[10px] sm:text-[11px] text-blue-700 font-mono font-bold mt-0.5">
                    {s.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Universal Live Tool Canvas with Smooth Fade-Slide */}
      <section aria-label="Interactive Universal Calculator" className="animate-fade-slide key={activeSuite}">
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

      {/* AdSense Rectangle Unit */}
      <div className="flex justify-center my-6">
        <RectangleAd />
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
                US & UK Utility Matrix (162 Dedicated Pages)
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
              placeholder="Filter 162 tools..."
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
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      <span>{cat.label}</span>
                    </div>
                    <span className="font-mono text-slate-500">{catItems.length} Calculators</span>
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
    </div>
  );
}
