import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  RefreshCw,
  HelpCircle,
  Building2,
  Mail,
  AlertTriangle,
} from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

export const metadata: Metadata = {
  title: 'Editorial Policy & Research Standards — FeeKit',
  description:
    'Discover FeeKit’s editorial policy: our research methodology, source verification standards, calculation testing, error corrections, and editorial independence.',
  keywords: [
    'FeeKit editorial policy',
    'financial research standards',
    'source verification guidelines',
    'editorial independence',
    'correction policy',
  ],
  alternates: {
    canonical: 'https://www.usefeekit.com/editorial-policy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Editorial Policy & Research Standards — FeeKit',
    description:
      'How FeeKit researches, verifies, tests, and updates financial calculations and small business guides.',
    url: 'https://www.usefeekit.com/editorial-policy',
    siteName: 'FeeKit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Policy & Research Standards — FeeKit',
    description:
      'Research standards, calculation testing, and editorial integrity protocols at FeeKit.',
    site: '@usefeekit',
  },
};

export default function EditorialPolicyPage() {
  const lastUpdated = 'January 2026';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.usefeekit.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Editorial Policy',
        item: 'https://www.usefeekit.com/editorial-policy',
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Editorial Policy & Research Standards — FeeKit',
    url: 'https://www.usefeekit.com/editorial-policy',
    description:
      'Official documentation of FeeKit editorial standards, source verification rules, and calculation validation protocols.',
    publisher: {
      '@type': 'Organization',
      name: 'FeeKit',
      url: 'https://www.usefeekit.com',
    },
  };

  return (
    <div className="space-y-6 sm:space-y-7 animate-in fade-in duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200">
          <BookOpen className="h-3.5 w-3.5 text-blue-600" />
          <span>Editorial Standards</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Editorial Policy & Research Standards
        </h1>
        <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-xs text-slate-700 text-sm leading-relaxed">
        {/* Mission & Standards Statement */}
        <div className="space-y-3">
          <h2 className="text-xl font-black text-slate-900">1. Editorial Philosophy: Accurate, Independent, Practical</h2>
          <p>
            FeeKit is an independent digital resource dedicated to providing practical calculation utilities and educational business finance resources for freelancers, consultants, digital agencies, service businesses, online sellers, and small-business owners.
          </p>
          <p>
            Because our users make operational, pricing, and budgeting decisions based on our tools, we treat mathematical accuracy, clear sourcing, and editorial independence as foundational requirements. We do not publish generic content, synthetic marketing fluff, or unverified claims.
          </p>
        </div>

        {/* 2. Research Process & Primary Sources */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Sourcing Standards & Primary Documentation</h2>
          <p>
            Every formula, statutory tax bracket, and merchant rate published on FeeKit is referenced directly against primary official sources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <FileCheck className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Government & Tax Agencies</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                IRS publications (Form 1040-ES, Schedule C, SECA guidelines), UK HM Revenue & Customs (HMRC Notice 700, MTD schedules), and US state Departments of Revenue (e.g., California CDTFA, Texas Comptroller, New York DTF).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <FileCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Provider Developer Docs</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Official merchant service pricing schedules and developer documentation from Stripe, PayPal, Square, Wise, Authorize.Net, and e-commerce platforms (Shopify, Amazon FBA fee tables).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <FileCheck className="h-4 w-4 text-purple-600 shrink-0" />
                <span>Documented Formulas</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Standard corporate finance formulas (contribution margin, break-even unit volume, CAGR, landed cost accounting) derived from established management accounting standards.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Mathematical Testing & Calculation Verification */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Mathematical Verification & Calculation Testing</h2>
          <p>
            Prior to deploying any calculation model or rate update, our engineering team executes automated unit test scripts and manual edge-case evaluations:
          </p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Automated Validation:</strong> Automated rate checks (`npm run validate:rates`) run against current state tax databases and payment gateway fee schedules to confirm that no calculation regressions exist.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Two-Way Precision:</strong> We verify bidirectional models (forward charge calculations and reverse payout formulas) to confirm that rounding to two decimal places produces exact cents without compounding precision loss.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Client-Side Execution:</strong> All mathematical computation runs client-side in the user&apos;s browser, ensuring that testing matches the exact environment encountered by visitors.</span>
            </li>
          </ul>
        </section>

        {/* 4. How Outdated Information Is Handled */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Currency, Updates & Revision Protocol</h2>
          <p>
            Fiscal statutes and digital payment pricing change over time. We maintain a routine update protocol:
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
              <RefreshCw className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Annual & Semi-Annual Fiscal Reviews:</strong> Statutory tax brackets, standard deductions, and IRS mileage rates are updated annually when federal guidelines are released.
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
              <RefreshCw className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Payment Processor Monitoring:</strong> Gateway fee changes announced by Stripe, PayPal, Square, and other payment networks are audited upon announcement and updated in our datasets.
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
              <RefreshCw className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Transparent Timestamps:</strong> Our articles and calculators clearly indicate publication and latest revision dates so users can evaluate the currency of the information.
              </div>
            </div>
          </div>
        </section>

        {/* 5. Editorial Independence & Affiliate Disclosures */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Editorial Independence & Affiliate Standards</h2>
          <p>
            FeeKit maintains complete separation between editorial evaluation and commercial partnerships:
          </p>
          <p>
            We may participate in affiliate programs where we earn a referral commission if a user signs up for a recommended product or service. However, affiliate relationships never dictate inclusion or create artificial editorial bias. We do not accept sponsored placements that restrict honest evaluations, and we do not rank software based on commission compensation.
          </p>
          <p>
            For more details on our commercial policies, please review our{' '}
            <Link href="/affiliate-disclosure" className="text-sky-600 font-semibold underline">
              Affiliate Disclosure
            </Link>.
          </p>
        </section>

        {/* 6. Professional Advice Disclaimer */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">6. Clear Boundaries on Professional Advice</h2>
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 space-y-1.5 text-xs text-amber-950">
            <div className="font-bold flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
              <span>Calculators Are Educational & Operational Estimates</span>
            </div>
            <p className="leading-relaxed">
              FeeKit is not a CPA firm, accounting practice, legal firm, or investment advisory service. Our tools provide mathematical estimates based on published guidelines. We do not claim certified professional credentials, and our calculations do not constitute personalized legal, tax, or financial counsel. Users must verify their specific tax filings and contracts with a licensed professional.
            </p>
          </div>
        </section>

        {/* 7. Error Reporting & Feedback */}
        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">7. How to Report Errors or Request Corrections</h2>
          <p>
            We welcome scrutiny from accountants, freelancers, and operators. If you notice an outdated statutory tax bracket, a changed payment processing rate, or an ambiguity in any guide, please contact our editorial desk immediately:
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-xs space-y-1.5 text-slate-700">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-sky-600" />
              <span>
                <strong>Direct Editorial Contact:</strong>{' '}
                <a href="mailto:hello@snab.co.in" className="text-sky-600 underline font-semibold">
                  hello@snab.co.in
                </a>
              </span>
            </div>
            <div><strong>Publisher:</strong> Snab Innovations (Nashik, Maharashtra, India 422005)</div>
            <p className="text-slate-500 pt-1">
              Corrections are reviewed by our engineering desk within 24–48 business hours and deployed upon factual verification.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
