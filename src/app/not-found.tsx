'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  ArrowRight,
  Home,
  CreditCard,
  Building2,
  FileText,
  HelpCircle,
  ShieldAlert,
} from 'lucide-react';
import { FastSearchBar } from '@/components/search/FastSearchBar';
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

const POPULAR_TOOLS = [
  {
    title: 'Stripe Fee Calculator USA',
    desc: '2.9% + $0.30 standard domestic online credit card deductions & reverse invoicing.',
    href: '/tools/stripe-fee-calculator/usa',
    icon: CreditCard,
    badge: 'Popular',
  },
  {
    title: 'PayPal Fee Calculator USA',
    desc: '3.49% + $0.49 commercial checkout vs. 2.99% + $0.49 standard goods & services.',
    href: '/tools/paypal-fee-calculator/usa',
    icon: CreditCard,
    badge: 'Popular',
  },
  {
    title: '50-State US Sales Tax Suite',
    desc: 'State base rates, local district surtaxes, and economic nexus thresholds.',
    href: '/tools/sales-tax-calculator',
    icon: Building2,
    badge: '51 States',
  },
  {
    title: 'Free PDF Invoice Generator',
    desc: 'Generate, calculate fees, and download client-ready invoices 100% private in-browser.',
    href: '/invoice-generator',
    icon: FileText,
    badge: 'Free Tool',
  },
];

export default function NotFound() {
  useEffect(() => {
    // Update document title for SEO & Google Analytics
    if (typeof document !== 'undefined') {
      document.title = 'Page Not Found — FeeKit';
    }
    // Track 404 URL in Google Analytics
    if (typeof window !== 'undefined') {
      trackEvent('page_not_found', {
        page_path: window.location.pathname,
        referrer: document.referrer || 'direct',
      });
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 sm:py-16 space-y-10">
      {/* 404 Hero Banner */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200 shadow-2xs">
          <ShieldAlert className="h-4 w-4 text-amber-600" />
          <span>404 — Page Not Found</span>
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            We Couldn&apos;t Find That Calculator or Page
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The page you are looking for may have been renamed, moved, or mistyped.
            Use the search bar below to jump directly to any of our <strong>199+ financial tools</strong>.
          </p>
        </div>

        {/* Integrated Quick Search */}
        <div className="w-full max-w-lg mx-auto pt-2">
          <FastSearchBar placeholder="Search 199+ tools (e.g., California, Stripe, VAT, 1099)..." />
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Return to FeeKit Home</span>
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-white hover:border-slate-300 transition-colors"
          >
            <span>Browse All 199+ Calculators</span>
            <ArrowRight className="h-4 w-4 text-slate-400" />
          </Link>
        </div>
      </div>

      {/* Suggested Popular Tools Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900">
            Popular Flagship Calculators
          </h2>
          <span className="text-xs text-slate-500 font-medium">Updated for 2026</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {POPULAR_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                        {tool.title}
                      </span>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-200/60">
                      {tool.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-semibold">
                  <span>Launch Tool</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Need Help Footer Link */}
      <div className="text-center pt-4 text-xs text-slate-500">
        Looking for a specific calculation formula or institutional partner?{' '}
        <Link href="/contact" className="text-blue-600 font-bold hover:underline">
          Contact Support
        </Link>{' '}
        or explore our{' '}
        <Link href="/blog" className="text-blue-600 font-bold hover:underline">
          Financial Blog Guides
        </Link>.
      </div>
    </div>
  );
}
