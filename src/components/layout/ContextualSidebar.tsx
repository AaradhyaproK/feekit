'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { AffiliateCard, AffiliateKey } from '@/components/monetization/AffiliateCard';
import { AdBanner } from '@/components/monetization/AdBanner';
import { ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function ContextualSidebar() {
  const pathname = usePathname();

  let affiliateKey: AffiliateKey = 'wise';
  if (pathname.includes('freelance')) {
    affiliateKey = 'deel';
  } else if (pathname.includes('ecommerce') || pathname.includes('shopify')) {
    affiliateKey = 'shopify';
  } else if (pathname.includes('tax')) {
    affiliateKey = 'taxjar';
  } else if (pathname.includes('amazon')) {
    affiliateKey = 'helium10';
  }

  return (
    <aside className="sticky top-14 hidden xl:flex h-[calc(100vh-3.5rem)] w-80 shrink-0 flex-col gap-5 overflow-y-auto border-l border-slate-200 bg-[#F8FAFC]/50 p-5">
      {/* Monetization Slot 1: Contextual High-Converting CPA Affiliate */}
      <div>
        <div className="flex items-center justify-between text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-2">
          <span>Recommended Solution</span>
          <span className="flex items-center gap-1 text-blue-600 font-semibold">
            <Zap className="h-3 w-3 fill-blue-600" />
            Verified
          </span>
        </div>
        <AffiliateCard affiliateKey={affiliateKey} />
      </div>

      {/* Monetization Slot 2: Sponsored B2B Solution Ad */}
      <AdBanner slot="sidebar" />

      {/* Regional Quick Jumps */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
          Top US & UK Benchmarks
        </h4>
        <div className="space-y-2.5 text-xs">
          <Link
            href="/tools/sales-tax-calculator/california"
            className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>California (8.82% Avg Tax)</span>
            <ArrowRight className="h-3 w-3 text-slate-400" />
          </Link>
          <Link
            href="/tools/sales-tax-calculator/texas"
            className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>Texas (8.20% Max Tax)</span>
            <ArrowRight className="h-3 w-3 text-slate-400" />
          </Link>
          <Link
            href="/tools/vat-calculator/united-kingdom"
            className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>UK HMRC VAT (20% Standard)</span>
            <ArrowRight className="h-3 w-3 text-slate-400" />
          </Link>
          <Link
            href="/tools/stripe-fee-calculator/usa"
            className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>Stripe USA (2.9% + $0.30)</span>
            <ArrowRight className="h-3 w-3 text-slate-400" />
          </Link>
          <Link
            href="/tools/stripe-fee-calculator/uk"
            className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>Stripe UK (1.5% + 20p)</span>
            <ArrowRight className="h-3 w-3 text-slate-400" />
          </Link>
        </div>
      </div>

      {/* Zero Latency & Privacy Guarantee */}
      <div className="mt-auto rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-center">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>100% Client-Side Private</span>
        </div>
        <p className="mt-1 text-[11px] text-emerald-700 leading-normal">
          Calculations are processed entirely in your browser. Zero tracking of invoice amounts or tax records.
        </p>
      </div>
    </aside>
  );
}
