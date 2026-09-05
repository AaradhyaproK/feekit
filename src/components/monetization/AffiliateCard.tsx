'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils/formatters';

export type AffiliateKey = 'wise' | 'deel' | 'shopify' | 'helium10' | 'taxjar';

interface AffiliateCardProps {
  affiliateKey?: AffiliateKey;
  customTitle?: string;
  customDescription?: string;
  customCta?: string;
  customLink?: string;
  className?: string;
}

const AFFILIATES = {
  wise: {
    badge: 'Save ~2.8% on Invoices',
    name: 'Wise Business',
    headline: 'Stop losing money to Stripe foreign card & fx fees',
    benefit: 'Get domestic US routing, UK sort code, and EUR IBAN to receive client payouts without 3% conversion deductions.',
    perk: 'Fee-free transfer up to $1,000 for new B2B accounts',
    cta: 'Open Wise Business Account',
    link: 'https://wise.com/business',
  },
  deel: {
    badge: '1-Click Invoicing & Tax',
    name: 'Deel Contractor',
    headline: 'Automate global freelance contracts & W-8BEN/W-9',
    benefit: 'Withdraw in 15+ currencies or direct local bank wire with automated IRS Form 1099 compliance.',
    perk: 'Free invoicing & tax documentation generator',
    cta: 'Get Started on Deel',
    link: 'https://www.deel.com',
  },
  shopify: {
    badge: '$1/Month DTC Store',
    name: 'Shopify DTC',
    headline: 'Build a high-converting ecommerce storefront',
    benefit: 'Built-in Shopify Payments, checkout conversion optimization, and omnichannel inventory.',
    perk: '$1/month promotional trial for 3 months',
    cta: 'Claim $1/mo Shopify Deal',
    link: 'https://www.shopify.com',
  },
  helium10: {
    badge: 'Amazon FBA Suite',
    name: 'Helium 10',
    headline: 'Reverse-ASIN profit tracking & product research',
    benefit: 'Accurately estimate FBA fee tier dimensions and track keyword velocity before manufacturing.',
    perk: 'Exclusive 20% off lifetime coupon',
    cta: 'Access FBA Research Tool',
    link: 'https://www.helium10.com',
  },
  taxjar: {
    badge: 'Automated Nexus',
    name: 'TaxJar / Stripe Tax',
    headline: 'Automated 50-state sales tax filing & compliance',
    benefit: 'Monitor economic nexus thresholds across California, Texas, New York, and Florida automatically.',
    perk: '30-day automated nexus audit trial',
    cta: 'Automate Sales Tax Filing',
    link: 'https://www.taxjar.com',
  },
};

export function AffiliateCard({
  affiliateKey = 'wise',
  customTitle,
  customDescription,
  customCta,
  customLink,
  className,
}: AffiliateCardProps) {
  const data = AFFILIATES[affiliateKey] || AFFILIATES.wise;
  const title = customTitle || data.headline;
  const description = customDescription || data.benefit;
  const cta = customCta || data.cta;
  const link = customLink || data.link;

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-md',
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700 border border-blue-200">
          <TrendingUp className="h-3 w-3" />
          {data.badge}
        </span>
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
          {data.name}
        </span>
      </div>

      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-relaxed text-slate-600">
        {description}
      </p>

      <div className="mt-3.5 flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 text-xs text-slate-700 border border-slate-200">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
        <span className="font-medium text-slate-800">{data.perk}</span>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-blue-700"
      >
        <span>{cta}</span>
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
