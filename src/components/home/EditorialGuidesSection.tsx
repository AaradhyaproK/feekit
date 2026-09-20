'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';

export function EditorialGuidesSection() {
  const articles = [
    {
      slug: 'stripe-vs-paypal-fees-2026',
      title: 'Stripe vs PayPal: 2026 Merchant Processing Fee Breakdown',
      category: 'Payment Fees',
      readTime: '8 min read',
      description:
        'Line-by-line comparison of US 2.9% + $0.30 vs PayPal 3.49% + $0.49, international surcharges, dispute fees, and payout timing.',
      badgeColor: 'border-blue-200 bg-blue-50 text-blue-700',
    },
    {
      slug: 'square-vs-stripe-fees-2026',
      title: 'Square vs Stripe: 2026 In-Person POS & Online Merchant Fee Comparison',
      category: 'Payment Fees',
      readTime: '8 min read',
      description:
        'Compare Square 2.6% + $0.10 tap-and-pay POS against Stripe Terminal 2.7% + $0.05 and online checkout pricing for omnichannel businesses.',
      badgeColor: 'border-blue-200 bg-blue-50 text-blue-700',
    },
    {
      slug: 'shopify-vs-amazon-fba-fees-2026',
      title: 'Shopify vs Amazon FBA Fees: 2026 Profit Margin & True Cost Breakdown',
      category: 'Ecommerce',
      readTime: '9 min read',
      description:
        'Landed unit economics, Amazon 8-15% referral plus storage & fulfillment surcharges vs Shopify DTC ad spend and app subscription costs.',
      badgeColor: 'border-amber-200 bg-amber-50 text-amber-700',
    },
    {
      slug: 'us-sales-tax-economic-nexus-guide',
      title: 'US Sales Tax Economic Nexus: 50-State Threshold Guide (2026)',
      category: 'US Sales Tax',
      readTime: '7 min read',
      description:
        'State-by-state dollar thresholds ($100k vs $500k), 200-transaction rules, marketplace facilitator laws, and notice and reporting requirements.',
      badgeColor: 'border-indigo-200 bg-indigo-50 text-indigo-700',
    },
    {
      slug: 'uk-vat-guide-freelancers-merchants',
      title: 'UK HMRC VAT Compliance & MTD Rules: 2026 Edition',
      category: 'UK VAT',
      readTime: '6 min read',
      description:
        'The £90,000 statutory VAT threshold, standard 20% vs reduced 5% rate bands, Making Tax Digital (MTD) digital ledger penalties, and reverse charge.',
      badgeColor: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    },
    {
      slug: '1099-vs-w2-tax-rate-freelance-guide',
      title: '1099 vs W-2 Tax Rate Breakdown: Freelance Self-Employment Tax Guide (2026)',
      category: '1099 & Freelance',
      readTime: '8 min read',
      description:
        'How 15.3% SECA self-employment tax, uncompensated PTO, healthcare expenses, and business overhead affect real contractor take-home pay.',
      badgeColor: 'border-purple-200 bg-purple-50 text-purple-700',
    },
  ];

  return (
    <section aria-label="Featured Financial & Tax Editorial Research" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-blue-600" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
              Deep-Dive Editorial Research
            </h2>
          </div>
          <p className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            Independent Guides & Industry Benchmark Studies
          </p>
        </div>
        <Link
          href="/blog"
          className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 group"
        >
          <span>View all research articles</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {articles.map((art) => (
          <Link
            key={art.slug}
            href={`/blog/${art.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 transition-all duration-200 shadow-2xs hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold ${art.badgeColor}`}>
                  <Tag className="h-3 w-3" />
                  <span>{art.category}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <Clock className="h-3 w-3" />
                  <span>{art.readTime}</span>
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {art.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {art.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
              <span>Read complete breakdown</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
