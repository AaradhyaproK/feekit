'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CommandRail } from '@/components/layout/CommandRail';
import { Header } from '@/components/layout/Header';
import { CommandPalette } from '@/components/search/CommandPalette';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { clearUrlHash } from '@/lib/utils/hash-sync';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    // Keep URL 100% clean and canonical for SEO
    clearUrlHash();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      {/* Sticky Left Rail for Large Screens */}
      <CommandRail onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Area: Offset by Left Rail (lg:pl-56), Expansive Canvas */}
      <div className="lg:pl-56 flex min-h-screen flex-col flex-1">
        <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        {/* Spacious Central Canvas (Full Bleed on Mobile and Homepage) */}
        <main
          className={
            isHomePage
              ? 'flex-1 w-full flex flex-col'
              : 'flex-1 w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-3 sm:py-7'
          }
        >
          {children}
        </main>

        {/* Global Daylight Footer */}
        <footer className="border-t border-slate-200 bg-white pt-10 pb-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Top Row: Brand & Mission */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Link href="/" className="hover:opacity-85 transition-opacity">
                  <Image
                    src="/feekit-logo.png"
                    alt="FeeKit"
                    width={130}
                    height={48}
                    className="h-7 w-auto object-contain"
                    unoptimized
                  />
                </Link>
                <span className="text-slate-300">|</span>
                <span className="font-semibold text-slate-700">Financial Calculation Utilities for US & UK Operators</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>100% Client-Side Computation • Zero Server Tracking</span>
              </div>
            </div>

            {/* Categorical Link Directory */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Col 1: US & UK Tax */}
              <div className="space-y-3">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Tax & VAT Engines
                </div>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/tools/sales-tax-calculator" className="hover:text-blue-600 transition-colors font-medium text-slate-700">
                      US Sales Tax Hub (50 States)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/sales-tax-calculator/california" className="hover:text-blue-600 transition-colors">
                      California Sales Tax (7.25% - 10.25%)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/sales-tax-calculator/texas" className="hover:text-blue-600 transition-colors">
                      Texas Sales Tax (6.25% - 8.25%)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/sales-tax-calculator/new-york" className="hover:text-blue-600 transition-colors">
                      New York Sales Tax (4% - 8.875%)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/sales-tax-calculator/florida" className="hover:text-blue-600 transition-colors">
                      Florida Sales Tax (6.00% - 7.50%)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/vat-calculator" className="hover:text-blue-600 transition-colors font-medium text-slate-700">
                      UK HMRC VAT Hub (MTD 2026)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/vat-calculator/united-kingdom" className="hover:text-blue-600 transition-colors">
                      UK VAT Standard (20%) & Reduced (5%)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/canada-sales-tax" className="hover:text-blue-600 transition-colors font-medium text-slate-700">
                      Canada GST/HST Hub (10 Provinces)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/canada-sales-tax/ontario" className="hover:text-blue-600 transition-colors">
                      Ontario HST (13%)
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 2: Merchant & Gateways */}
              <div className="space-y-3">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Merchant Gateways
                </div>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/tools/gateway-comparator/stripe-paypal-square" className="hover:text-blue-600 transition-colors font-bold text-blue-600">
                      Stripe vs PayPal vs Square Comparator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/stripe-fee-calculator" className="hover:text-blue-600 transition-colors font-medium text-slate-700">
                      Stripe Processing Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/venmo-fee-calculator/standard" className="hover:text-blue-600 transition-colors">
                      Venmo Business Fees (1.9% - 2.29%)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/gumroad-fee-calculator/standard" className="hover:text-blue-600 transition-colors">
                      Gumroad Creator Fees (10% + $0.50)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/lemon-squeezy-calculator/standard" className="hover:text-blue-600 transition-colors">
                      Lemon Squeezy SaaS Fees (5%)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/shopify-fee-calculator/standard" className="hover:text-blue-600 transition-colors">
                      Shopify Payments Fee Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/paypal-fee-calculator" className="hover:text-blue-600 transition-colors font-medium text-slate-700">
                      PayPal Commercial Fee Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/square-fee-calculator" className="hover:text-blue-600 transition-colors">
                      Square POS & Online Checkout
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 3: Freelance & Commerce */}
              <div className="space-y-3">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Business & Freelance
                </div>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/invoice-generator" className="hover:text-blue-600 transition-colors font-bold text-blue-600">
                      Free Invoice Generator (PDF)
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/profit-margin-calculator/standard" className="hover:text-blue-600 transition-colors">
                      Profit Margin & Markup Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/break-even-calculator/standard" className="hover:text-blue-600 transition-colors">
                      Break-Even Point Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/roi-calculator/standard" className="hover:text-blue-600 transition-colors">
                      ROI & Annualized CAGR Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/quarterly-tax-calculator/1040-es" className="hover:text-blue-600 transition-colors">
                      IRS 1040-ES Quarterly Tax Vouchers
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/uk-ir35-calculator/contractor" className="hover:text-blue-600 transition-colors">
                      UK IR35 Inside vs Outside Take-Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/freelance-rate-calculator" className="hover:text-blue-600 transition-colors font-medium text-slate-700">
                      1099 SECA Tax & Rate Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/ecommerce-profit-calculator" className="hover:text-blue-600 transition-colors">
                      Amazon FBA & Dropshipping Margin
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 4: Trust & Company */}
              <div className="space-y-3">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Company & Trust
                </div>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/blog" className="hover:text-blue-600 transition-colors font-medium text-slate-700">
                      FeeKit Blog & Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-blue-600 transition-colors">
                      About FeeKit
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                      Privacy Policy (Zero Storage)
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="hover:text-blue-600 transition-colors">
                      Cookie Policy & Opt-Out
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-blue-600 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-blue-600 transition-colors">
                      Contact & Software Inquiries
                    </Link>
                  </li>
                  <li>
                    <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                      XML Sitemap (186 Pages)
                    </a>
                  </li>
                  <li>
                    <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                      LLM Agent Specification (llms.txt)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
              <div className="flex flex-wrap items-center gap-2">
                <span>© {new Date().getFullYear()} FeeKit (usefeekit.com)</span>
                <span>•</span>
                <span>IRS & HMRC 2026 Compliant</span>
                <span>•</span>
                <span>Encrypted Client Session</span>
              </div>
              <div className="text-slate-400">
                Independent financial calculation utilities. Rates verified weekly.
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Global Cmd+K Search Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* GDPR / Google AdSense Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
