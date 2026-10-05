'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  ArrowUp,
  ShieldCheck,
  Lock,
  Mail,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface FooterProps {
  onOpenCommandPalette: () => void;
}

export function Footer({ onOpenCommandPalette }: FooterProps) {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="border-t border-slate-200 bg-white text-slate-600 text-xs mt-auto"
    >
      {/* 1. Quick Access Search & Value Proposition Banner */}
      <div className="border-b border-slate-100 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 border border-slate-200">
                  <Sparkles className="h-3 w-3 text-slate-500" />
                  199+ Financial Tools
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 border border-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  2026 Statutory Rates Live
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                High-precision financial calculators for US & UK operators
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero server tracking, 100% client-side precision formulas for state sales taxes, HMRC VAT compliance, merchant gateway interchange fees, and 1099 freelance rates.
              </p>
            </div>

            {/* Quick-Search Interactive Button & Product Hunt Featured Badge */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="https://www.producthunt.com/products/feekit?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-feekit"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1269126&theme=light&t=1791213076508"
                  alt="FeeKit - Instant payment fee & reverse payout calculator for makers | Product Hunt"
                  width={250}
                  height={54}
                  className="h-10 w-auto"
                />
              </a>

              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="tap-spring inline-flex items-center justify-between sm:justify-start gap-3 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs text-slate-600 hover:border-blue-500 hover:text-slate-900 hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all cursor-pointer shadow-2xs"
                aria-label="Open search palette to search 199+ calculators"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="h-4 w-4 text-slate-500 shrink-0" />
                  <span className="font-medium text-slate-700">Search 199+ calculators...</span>
                </div>
                <kbd className="hidden sm:inline-block rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-500 border border-slate-200">
                  ⌘K
                </kbd>
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="tap-spring inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all cursor-pointer shadow-2xs"
                aria-label="Scroll back to top of page"
              >
                <ArrowUp className="h-3.5 w-3.5 text-slate-500" />
                <span>Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Structured Link Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <nav aria-label="Footer navigation">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Column 1: Tax & VAT Engines */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Tax & VAT Engines
              </h3>
              <ul role="list" className="space-y-2">
                <li>
                  <Link
                    href="/tools/sales-tax-calculator"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    US Sales Tax Hub (50 States)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/sales-tax-calculator/california"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    California Sales Tax (7.25% - 10.25%)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/sales-tax-calculator/texas"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Texas Sales Tax (6.25% - 8.25%)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/sales-tax-calculator/new-york"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    New York Sales Tax (4.00% - 8.875%)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/sales-tax-calculator/florida"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Florida Sales Tax (6.00% - 7.50%)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/vat-calculator"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    UK HMRC VAT Hub (MTD 2026)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/vat-calculator/united-kingdom"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    UK VAT Standard (20%) & Reduced (5%)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/canada-sales-tax"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Canada GST/HST Hub (10 Provinces)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/canada-sales-tax/ontario"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Ontario HST Calculator (13%)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Merchant & Gateways */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Merchant Gateways
              </h3>
              <ul role="list" className="space-y-2">
                <li>
                  <Link
                    href="/tools/gateway-comparator/stripe-paypal-square"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Stripe vs PayPal vs Square
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/stripe-fee-calculator"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Stripe Processing Fee Hub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/stripe-fee-calculator/usa"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Stripe USA (2.9% + 30¢ Standard)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/paypal-fee-calculator"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    PayPal Commercial Fee Hub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/square-fee-calculator"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Square POS & Online Checkout (2.6% + 10¢)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/venmo-fee-calculator/standard"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Venmo Business Profile Fees (1.9% - 2.29%)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/shopify-fee-calculator/standard"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Shopify Payments & External Surcharges
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/gumroad-fee-calculator/standard"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Gumroad Creator Fees (10% + 50¢ Flat)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/lemon-squeezy-calculator/standard"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Lemon Squeezy SaaS MoR (5% + 50¢)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Business & Freelance */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Business & Freelance
              </h3>
              <ul role="list" className="space-y-2">
                <li>
                  <Link
                    href="/small-business"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Small Business Hub (Tools & Guides)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/invoice-generator"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Free PDF Invoice Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/freelance-rate-calculator"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    1099 Freelance Rate & Tax Hub (37 Roles)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/profit-margin-calculator/standard"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Profit Margin & Markup Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/break-even-calculator/standard"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Break-Even Point & Target Revenue
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/quarterly-tax-calculator/1040-es"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    IRS 1040-ES Quarterly Tax Vouchers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/ecommerce-profit-calculator"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    E-Commerce Profit & Landed COGS Suite
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/freshbooks-for-freelancers"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    FreshBooks for Freelancers Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Business Finance Knowledge Base (25+ Guides)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Trust, Policy & Company */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Trust & Company
              </h3>
              <ul role="list" className="space-y-2">
                <li>
                  <Link
                    href="/editorial-policy"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Editorial Policy & Standards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/methodology"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Calculation Methodology & Formulas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliate-disclosure"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Affiliate Disclosure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    About FeeKit & Snab Innovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Contact & Engineering Inquiries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Privacy Policy (Zero Data Storage)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="inline-block py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    Cookie Policy & Consent Settings
                  </Link>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-0.5 text-xs text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
                  >
                    <span>XML Sitemap (270+ Pages)</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" aria-hidden="true" />
                    <span className="sr-only">(opens in new window)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* 3. Privacy, Architecture & Security Assurance Badges */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5">
              <div className="rounded-lg bg-slate-100 p-2 text-slate-700 shrink-0 border border-slate-200">
                <Lock className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">100% Client-Side Computation</div>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                  Financial calculations run entirely in your web browser memory. Your sensitive invoices, revenue figures, and margins are never sent to external servers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5">
              <div className="rounded-lg bg-slate-100 p-2 text-slate-700 shrink-0 border border-slate-200">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Zero Server Tracking</div>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                  No accounts, passwords, or credit card requirements. Instant access to all 199+ precision financial utilities with complete anonymity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5">
              <div className="rounded-lg bg-slate-100 p-2 text-slate-700 shrink-0 border border-slate-200">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">2026 Fiscal Accuracy</div>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                  Benchmarked against published IRS circulars, UK HMRC Making Tax Digital (MTD) notices, and 50 state department of revenue tax schedules.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Legal, Copyright & Contact Row */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1">
            <Link href="/" className="hover:opacity-85 transition-opacity inline-flex items-center">
              <Image
                src="/feekit-logo.png"
                alt="FeeKit"
                width={84}
                height={28}
                className="h-5 w-auto object-contain"
                unoptimized
              />
            </Link>
            <span>•</span>
            <span>© {new Date().getFullYear()} Snab Innovations. All rights reserved.</span>
            <span>•</span>
            <a
              href="mailto:hello@snab.co.in"
              className="inline-flex items-center gap-1 text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded transition-colors"
            >
              <Mail className="h-3 w-3 text-slate-400" />
              <span>hello@snab.co.in</span>
            </a>
          </div>

          <div className="text-slate-400 text-center md:text-right max-w-lg leading-normal">
            Independent mathematical calculation utilities. FeeKit is for educational & planning purposes only and does not constitute certified tax, legal, or accounting advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
