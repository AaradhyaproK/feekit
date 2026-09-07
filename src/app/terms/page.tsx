import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, AlertCircle, Scale, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — FeeKit',
  description:
    'FeeKit Terms of Service and Financial Disclaimer: Learn about our mathematical models, accuracy standards, and terms of use.',
  alternates: {
    canonical: 'https://www.usefeekit.com/terms',
  },
};

import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

export default function TermsPage() {
  const lastUpdated = 'January 2026';

  return (
    <div className="space-y-6 sm:space-y-7 animate-in fade-in duration-200">
      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-xs text-slate-700 text-sm leading-relaxed">
        {/* Important Financial Disclaimer Box */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-5 space-y-2">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
            <span>Important Financial & Tax Advice Disclaimer</span>
          </div>
          <p className="text-xs text-amber-900 leading-relaxed">
            FeeKit is a mathematical calculation utility designed for educational, operational benchmarking, and estimating purposes. <strong>FeeKit is not a registered Certified Public Accounting (CPA) firm, law firm, or chartered tax advisor.</strong> Calculations produced by our software do not constitute formal legal, accounting, tax, or investment advice. Always verify specific tax returns with a licensed CPA, attorney, or your local revenue authority (e.g. IRS, HMRC, CDTFA) before submitting statutory filings.
          </p>
        </div>

        {/* 1. Acceptance of Terms */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or utilizing FeeKit (usefeekit.com), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, you should discontinue use of the site immediately.
          </p>
        </section>

        {/* 2. Mathematical Precision & Updates */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Mathematical Accuracy & Rate Currency</h2>
          <p>
            We strive to maintain complete accuracy across all computational models, incorporating updated 2026 tax rate schedules, county surtaxes, and payment processor published schedules (Stripe, PayPal, Square, Wise, Authorize.Net). However, tax legislation, merchant interchange rates, and local discretionary surtaxes are subject to periodic governmental and corporate revision. FeeKit provides all calculations on an &quot;as is&quot; basis without warranties of merchantability or specific statutory fitness.
          </p>
        </section>

        {/* 3. Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Limitation of Liability</h2>
          <p>
            Under no circumstances shall FeeKit, its creators, operators, or contributors be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of, or inability to use, our calculation tools—including but not limited to business interruption, invoice undercharging, or tax penalties resulting from user configuration errors.
          </p>
        </section>

        {/* 4. Acceptable Use */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Acceptable Use & Automated Scraping</h2>
          <p>
            You agree to use FeeKit solely for legitimate business, educational, and computational activities. You agree not to attempt to disrupt server availability, execute denial-of-service attempts, or reverse-engineer proprietary front-end source code outside standard web browser usage.
          </p>
        </section>

        {/* 5. Governing Entity & Legal Inquiries */}
        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">5. Governing Entity & Legal Inquiries</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            FeeKit is a proprietary digital utility and web property operated by <strong>Snab Innovations</strong>.
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-xs space-y-1.5 text-slate-700">
            <div>
              <strong>Operating Entity:</strong>{' '}
              <a
                href="https://snab.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline font-semibold"
              >
                Snab Innovations
              </a>
            </div>
            <div>
              <strong>Registered Address:</strong> Nashik, Maharashtra, India 422005{' '}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nashik%2C%20Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline text-[11px] font-medium"
              >
                [Get directions ↗]
              </a>
            </div>
            <div>
              <strong>Official Inquiries:</strong>{' '}
              <a href="mailto:hello@snab.co.in" className="text-sky-600 underline font-semibold">
                hello@snab.co.in
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
