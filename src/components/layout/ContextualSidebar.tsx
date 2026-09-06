'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { RectangleAd } from '@/components/ads/AdSlots';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ContextualSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-14 hidden xl:flex h-[calc(100vh-3.5rem)] w-80 shrink-0 flex-col gap-5 overflow-y-auto border-l border-slate-200 bg-[#F8FAFC]/50 p-5">
      {/* Google AdSense Display Placement */}
      <div className="flex flex-col items-center justify-center w-full">
        <RectangleAd />
      </div>

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
