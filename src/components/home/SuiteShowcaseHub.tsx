'use client';

import React from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Building2,
  Globe2,
  Briefcase,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface SuiteShowcaseHubProps {
  onSelectSuite: (suiteId: 'merchant' | 'tax' | 'freelance' | 'ecommerce') => void;
  activeSuite: 'merchant' | 'tax' | 'freelance' | 'ecommerce';
}

export function SuiteShowcaseHub({ onSelectSuite, activeSuite }: SuiteShowcaseHubProps) {
  const suites = [
    {
      id: 'merchant' as const,
      name: 'Payment Processing & Merchant Fees',
      categorySlug: 'stripe-fee-calculator',
      icon: CreditCard,
      badge: '40+ Gateways',
      badgeColor: 'border-blue-200 bg-blue-50 text-blue-700',
      tagline: 'Stripe, PayPal, Square, Wise & Authorize.Net',
      description:
        'Compute precise credit card processing deductions, international surcharges (1.5%), currency conversion spreads, and reverse payout gross-ups for US and UK merchants.',
      highlights: [
        'US 2.9% + $0.30 & UK 1.5% + 20p',
        'Forward & Reverse invoice payout gross-up',
        'ACH direct debit (0.8% $5 cap) vs Card rates',
      ],
      popularLink: '/tools/stripe-fee-calculator/usa',
      popularLabel: 'Stripe USA Calculator',
    },
    {
      id: 'tax' as const,
      name: '50 US States Sales Tax & Nexus',
      categorySlug: 'sales-tax-calculator',
      icon: Building2,
      badge: '51 Jurisdictions',
      badgeColor: 'border-indigo-200 bg-indigo-50 text-indigo-700',
      tagline: 'State statutory bases + local district surtaxes',
      description:
        'CPA-calibrated 2026 sales tax calculations across all 50 US States and DC, including county, municipal, and special taxing district surtax caps and post-Wayfair nexus thresholds.',
      highlights: [
        'Destination-based street-level tax calculations',
        '$100k / 200 tx economic nexus monitoring',
        'Bidirectional: Add tax or reverse-extract from total',
      ],
      popularLink: '/tools/sales-tax-calculator/california',
      popularLabel: 'California Sales Tax',
    },
    {
      id: 'tax' as const,
      name: 'UK HMRC & Global 28-Country VAT',
      categorySlug: 'vat-calculator',
      icon: Globe2,
      badge: '28 Countries',
      badgeColor: 'border-emerald-200 bg-emerald-50 text-emerald-700',
      tagline: 'HMRC 20% / 5% MTD + EU & International VAT',
      description:
        'Full VAT compliance calculations featuring UK HMRC 20% standard and 5% reduced rates, the £90,000 registration threshold, EU Reverse Charge Article 196, and Canadian GST/HST.',
      highlights: [
        'UK HMRC £90,000 mandatory registration threshold',
        '1/6 VAT fraction formula & MTD filing rules',
        'EU Cross-Border VIES reverse charge support',
      ],
      popularLink: '/tools/vat-calculator/united-kingdom',
      popularLabel: 'UK VAT Calculator',
    },
    {
      id: 'freelance' as const,
      name: '1099 Freelance & Contractor Rates',
      categorySlug: 'freelance-rate-calculator',
      icon: Briefcase,
      badge: '27 Tech Roles',
      badgeColor: 'border-purple-200 bg-purple-50 text-purple-700',
      tagline: '15.3% SECA self-employment tax & day rates',
      description:
        'Convert desired net take-home pay into accurate hourly and 8-hour day rates. Factors in 15.3% SECA (Social Security + Medicare), health insurance, unpaid admin, and paid time off.',
      highlights: [
        '15.3% SECA self-employment tax calculator',
        'Billable efficiency factor (25-30h realistic weekly)',
        'Pre-configured benchmarks for 27 modern roles',
      ],
      popularLink: '/tools/freelance-rate-calculator/software-engineer',
      popularLabel: 'Software Engineer Rate',
    },
    {
      id: 'ecommerce' as const,
      name: 'E-Commerce Unit Economics & ROAS',
      categorySlug: 'ecommerce-profit-calculator',
      icon: ShoppingBag,
      badge: '21 Niches',
      badgeColor: 'border-amber-200 bg-amber-50 text-amber-700',
      tagline: 'Amazon FBA, Shopify DTC & Break-Even ROAS',
      description:
        'Model complete unit economics from landed COGS to net profit margin. Computes Amazon FBA referral & fulfillment fees, Shopify processing, and exact break-even ROAS targets.',
      highlights: [
        'Break-even ROAS formula: 1 / Net Profit Margin',
        'Amazon FBA size-tier fulfillment + 8-15% referral',
        'Shopify DTC, TikTok Shop & dropshipping models',
      ],
      popularLink: '/tools/ecommerce-profit-calculator/shopify-dropshipping',
      popularLabel: 'Shopify Dropshipping Hub',
    },
  ];

  return (
    <section aria-label="FeeKit Financial Suites Overview" className="space-y-4 sm:space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 px-1">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
              Complete Financial Suite Ecosystem
            </h2>
          </div>
          <p className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            5 Dedicated Engines. 164 Precision Calculators.
          </p>
        </div>
        <p className="text-xs text-slate-500 max-w-md hidden md:block">
          Every tool is 100% free, updated for 2026 fiscal guidelines, and executes purely client-side in your browser for absolute data privacy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {suites.map((item, idx) => {
          const Icon = item.icon;
          const isEngineActive = activeSuite === item.id;
          return (
            <div
              key={idx}
              className={`group flex flex-col justify-between rounded-2xl border bg-white p-4 sm:p-5 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 ${
                isEngineActive
                  ? 'border-blue-300 ring-1 ring-blue-500/20'
                  : 'border-slate-200/90 hover:border-blue-200'
              }`}
            >
              <div className="space-y-3">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 group-hover:border-blue-200 group-hover:bg-blue-50/60 transition-colors">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-tight shadow-2xs ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {item.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-1">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onSelectSuite(item.id);
                    const calcEl = document.getElementById('interactive-calculator-section');
                    if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="tap-spring inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Launch Live Engine</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <Link
                  href={item.popularLink}
                  className="text-[11px] font-medium text-slate-500 hover:text-slate-900 underline underline-offset-2 truncate max-w-[140px]"
                >
                  {item.popularLabel}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
