import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  CheckCircle2,
  Cpu,
  FileCheck,
  AlertCircle,
  TrendingUp,
  CreditCard,
  Briefcase,
  Receipt,
  Scale,
  ExternalLink,
} from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';
import { FaqSchema } from '@/components/seo/FaqSchema';

export const metadata: Metadata = {
  title: 'Calculation Methodology & Mathematical Formulas — FeeKit',
  description:
    'Detailed mathematical methodology behind FeeKit’s financial calculators: payment processing fee formulas, 50-state US sales tax, UK VAT, 1099 freelance rates, and profit margin equations.',
  keywords: [
    'financial calculation methodology',
    'payment processing fee formula',
    'sales tax calculation engine',
    'freelance rate mathematical model',
    'VAT rounding standard',
    'FeeKit calculation accuracy',
  ],
  alternates: {
    canonical: 'https://www.usefeekit.com/methodology',
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
    title: 'Calculation Methodology & Mathematical Formulas — FeeKit',
    description:
      'Transparent documentation of the mathematical formulas, data sources, and estimation models powering FeeKit calculators.',
    url: 'https://www.usefeekit.com/methodology',
    siteName: 'FeeKit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculation Methodology & Mathematical Formulas — FeeKit',
    description:
      'Detailed mathematical formulas and rounding models powering FeeKit financial calculators.',
    site: '@usefeekit',
  },
};

export default function MethodologyPage() {
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
        name: 'Calculation Methodology',
        item: 'https://www.usefeekit.com/methodology',
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'FeeKit Calculation Methodology & Mathematical Formulas',
    url: 'https://www.usefeekit.com/methodology',
    description:
      'Official documentation of the formulas, regulatory references, and computational rules used across FeeKit tools.',
    publisher: {
      '@type': 'Organization',
      name: 'FeeKit',
      url: 'https://www.usefeekit.com',
    },
  };

  const methodologyFaqs = [
    {
      question: 'Why can payment processing fee calculations vary by 1 cent between platforms?',
      answer:
        'Small 1-cent variances occur across software platforms due to intermediate rounding differences in IEEE 754 floating-point arithmetic. FeeKit uses standard half-up rounding with an epsilon compensation formula (Math.round((amount + Number.EPSILON) * 100) / 100) to match the exact settlement figures produced by banking and card network processors.',
    },
    {
      question: 'How often are tax rates and payment processor fees audited on FeeKit?',
      answer:
        'FeeKit runs automated test suites (such as npm run validate:rates) and continuous monitoring of official US state Departments of Revenue, UK HMRC bulletins, and payment processor developer schedules to keep published reference data updated.',
    },
    {
      question: 'Are calculations processed on FeeKit servers or in the client browser?',
      answer:
        'All computations run 100% client-side in the user\'s web browser. No proprietary financial figures, turnover, invoice items, or personal numbers are ever sent across a network or stored in external databases.',
    },
  ];

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
      <FaqSchema items={methodologyFaqs} />

      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200">
          <Calculator className="h-3.5 w-3.5 text-blue-600" />
          <span>Documentation & Formulas</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Calculation Methodology & Data Sources
        </h1>
        <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-xs text-slate-700 text-sm leading-relaxed">
        {/* Core Principles */}
        <div className="space-y-3">
          <h2 className="text-xl font-black text-slate-900">1. Architectural Foundation: Client-Side Precision</h2>
          <p>
            FeeKit is engineered around pure TypeScript computational models executed entirely client-side in the user&apos;s browser. We do not transmit transaction values, invoice sums, or client revenue numbers to external APIs.
          </p>
          <p>
            Every formula in our codebase is designed with exact floating-point rounding controls (`Math.round((value + Number.EPSILON) * 100) / 100`) to eliminate IEEE-754 floating-point inaccuracies that frequently plague online calculators.
          </p>
        </div>

        {/* 2. Payment Processing Fee Methodology */}
        <section className="space-y-4 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <CreditCard className="h-5 w-5 text-blue-600" />
            <h2>2. Payment Processing Fee Methodology</h2>
          </div>
          <p>
            Payment gateway processing fees combine a percentage-based variable interchange cut with a fixed per-transaction fee. FeeKit models both domestic and cross-border commercial rates across Stripe, PayPal, Square, Venmo, Gumroad, Lemon Squeezy, and Authorize.Net:
          </p>

          <div className="space-y-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2 text-xs font-mono">
              <div className="font-bold text-slate-900 font-sans">Forward Deductions (Gross to Net):</div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
                Fee = (Gross Amount × Percentage Rate) + Fixed Fee<br />
                Net Payout = Gross Amount - Fee
              </div>
              <p className="font-sans text-slate-600">
                <em>Example:</em> A $1,000 credit card transaction on Stripe US (2.9% + $0.30) incurs a fee of ($1,000 × 0.029) + $0.30 = $29.30, yielding a net payout of $970.70.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2 text-xs font-mono">
              <div className="font-bold text-slate-900 font-sans">Bidirectional Invoicing Reverse Payout (Net to Gross):</div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
                Invoice Gross Amount = (Target Net + Fixed Fee) / (1 - Percentage Rate)
              </div>
              <p className="font-sans text-slate-600">
                <em>Why this matters:</em> If you need exactly $1,000 in your bank account, adding 2.9% + $0.30 ($29.30) to make the invoice $1,029.30 leaves you short, because the processor deducts 2.9% from the new higher total ($1,029.30 × 0.029 + $0.30 = $30.15). Our reverse formula solves for the exact gross amount ($1,030.18) so your net take-home is exactly $1,000.00.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Sales Tax & VAT Methodology */}
        <section className="space-y-4 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Receipt className="h-5 w-5 text-emerald-600" />
            <h2>3. US State Sales Tax & UK VAT Methodology</h2>
          </div>
          <p>
            Tax computation models differ fundamentally between the destination-based sales tax framework of the United States and the value-added tax (VAT) regime of the UK and Europe:
          </p>

          <div className="space-y-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2 text-xs">
              <div className="font-bold text-slate-900 text-sm">US 50-State Sales Tax Models:</div>
              <p className="text-slate-600 leading-relaxed">
                In the US, 45 states plus DC levy statewide sales taxes, while 5 states (Alaska, Delaware, Montana, New Hampshire, Oregon) levy 0% statewide. However, 38 states permit local city, county, transit, or special taxing districts to impose local piggyback surtaxes.
              </p>
              <div className="bg-white p-3 rounded-lg border border-slate-200 font-mono text-slate-800">
                Total Tax Rate = State Base Statutory Rate + Local Discretionary Surtax<br />
                Sales Tax Owed = Taxable Sale Amount × Total Tax Rate
              </div>
              <p className="text-slate-500">
                <em>Data Source:</em> State Department of Revenue rate publications (e.g., California CDTFA, Texas Comptroller Rule 3.334, New York DTF Publication 718).
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2 text-xs">
              <div className="font-bold text-slate-900 text-sm">UK HMRC VAT (Making Tax Digital):</div>
              <p className="text-slate-600 leading-relaxed">
                Under UK HMRC guidelines, businesses whose taxable turnover exceeds the statutory registration threshold (£90,000) must collect VAT. Standard items are taxed at 20%, reduced items (e.g., domestic energy) at 5%, and zero-rated items (e.g., books, children&apos;s clothing) at 0%.
              </p>
              <div className="bg-white p-3 rounded-lg border border-slate-200 font-mono text-slate-800">
                Adding VAT (Exclusive): Gross = Net × (1 + VAT Rate)<br />
                Extracting VAT (Inclusive): Net = Gross / (1 + VAT Rate) ; VAT Amount = Gross - Net
              </div>
              <p className="text-slate-500">
                <em>Data Source:</em> UK HMRC Notice 700 (The VAT Guide) and published Making Tax Digital schedules.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 1099 Freelance Rate & Self-Employment Tax */}
        <section className="space-y-4 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <Briefcase className="h-5 w-5 text-indigo-600" />
            <h2>4. Freelancer 1099 Hourly Rate & Tax Formula</h2>
          </div>
          <p>
            Freelancers who bill as independent 1099 contractors must absorb self-employment taxes, health insurance, software tools, unpaid sick days, and non-billable client acquisition hours. Our Freelance Rate Calculator derives minimum hourly and day rates through the following verified model:
          </p>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-3 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-slate-900 block">Step 1: Statutory SECA Tax Buffer</span>
              <p className="text-slate-600">
                Under the Self-Employment Contributions Act (SECA), independent contractors pay 15.3% (12.4% Social Security + 2.9% Medicare) on 92.35% of net business profit:
              </p>
              <div className="bg-white p-2.5 rounded border border-slate-200 font-mono text-slate-800">
                Net Taxable SE = Net Earnings × 0.9235<br />
                Self-Employment Tax = Net Taxable SE × 0.153
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 block">Step 2: Annual Economic Gross-Up</span>
              <div className="bg-white p-2.5 rounded border border-slate-200 font-mono text-slate-800">
                Gross Target Revenue = Target Take-Home + Taxes (Income + SECA) + Business Overhead + Health/PTO Reserve
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 block">Step 3: Realistic Billable Efficiency</span>
              <p className="text-slate-600">
                Full-time employees work 2,080 hours per year, but independent consultants typically spend 40%–50% of time on marketing, proposal drafting, invoicing, and professional development:
              </p>
              <div className="bg-white p-2.5 rounded border border-slate-200 font-mono text-slate-800">
                Billable Hours = (52 Weeks - Vacation Weeks) × Weekly Hours × Billable Utilization (typically 60%–70%)<br />
                Minimum Hourly Rate = Gross Target Revenue / Billable Hours<br />
                Standard Day Rate = Minimum Hourly Rate × 8 Hours
              </div>
            </div>
          </div>
        </section>

        {/* 5. Profit Margin, Break-Even & ROI */}
        <section className="space-y-4 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <h2>5. Corporate Finance & Margin Equations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
              <div className="font-bold text-slate-900">Markup vs Margin:</div>
              <div className="bg-white p-2.5 rounded border border-slate-200 font-mono text-slate-800">
                Gross Margin % = (Revenue - COGS) / Revenue × 100<br />
                Markup % = (Revenue - COGS) / COGS × 100
              </div>
              <p className="text-slate-600">
                A product costing $50 sold for $100 has a 100% markup, but only a 50% profit margin.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
              <div className="font-bold text-slate-900">Break-Even & E-Commerce ROAS:</div>
              <div className="bg-white p-2.5 rounded border border-slate-200 font-mono text-slate-800">
                Break-Even Units = Fixed Costs / (Unit Price - Variable Unit Cost)<br />
                Break-Even ROAS = 1 / Gross Margin %
              </div>
              <p className="text-slate-600">
                If gross margin is 40% (0.40), the minimum advertising return on ad spend (ROAS) required to avoid a loss is 1 / 0.40 = 2.50x.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Limitations & Disclaimer */}
        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">6. Model Limitations & Operational Disclaimers</h2>
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 space-y-2 text-xs text-amber-950">
            <div className="flex items-center gap-2 font-bold">
              <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
              <span>Important Limitations:</span>
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-amber-900 leading-relaxed">
              <li><strong>Local District Surtaxes:</strong> In US states with local discretionary sales tax options, exact municipal rates depend on street-level destination addresses. FeeKit provides statutory maximum caps and county benchmarks, but users must consult local address locator systems for specific tax remittances.</li>
              <li><strong>Tiered Gateway Interchange:</strong> Calculations reflect standard published commercial tiers. Custom enterprise interchange-plus volume discounts negotiated privately with processors are not accounted for automatically.</li>
              <li><strong>Tax Advice:</strong> All outputs are operational estimates for budgeting and invoicing. They do not constitute certified tax filings or professional accounting opinions.</li>
            </ul>
          </div>
        </section>

        {/* Frequently Asked Questions (Matching FAQ Schema) */}
        <section className="space-y-4 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">7. Frequently Asked Calculation Questions</h2>
          <div className="space-y-3">
            {methodologyFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-4 space-y-1.5"
              >
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {faq.question}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Update Process & Corrections */}
        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">8. Data Updates & Reporting Inaccuracies</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our datasets are audited weekly against regulatory and corporate publications. If you detect an update or formula discrepancy, please notify our engineering team at{' '}
            <a href="mailto:hello@snab.co.in" className="text-sky-600 underline font-semibold">
              hello@snab.co.in
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
