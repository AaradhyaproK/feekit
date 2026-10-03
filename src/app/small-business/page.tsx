import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  FileText,
  Calculator,
  TrendingUp,
  CreditCard,
  Receipt,
  Scale,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Building2,
  DollarSign,
  ShieldCheck,
  Compass,
  HelpCircle,
} from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';
import { ProfitMarginCalculator } from '@/components/calculators/ProfitMarginCalculator';
import { FaqSchema } from '@/components/seo/FaqSchema';

export const metadata: Metadata = {
  title: 'Tools & Resources for Small Businesses — UseFeeKit',
  description:
    'Free financial calculators, invoicing templates, tax estimation models, and practical guides built for freelancers, consultants, agencies, service businesses, and online merchants.',
  keywords: [
    'small business financial tools',
    'freelance invoice generator',
    'service business profit margin calculator',
    'small business bookkeeping guide',
    'freelance hourly rate calculator',
    'payment processing fee comparison',
    'accounting software for freelancers',
    '1099 contractor tax calculator',
  ],
  alternates: {
    canonical: 'https://www.usefeekit.com/small-business',
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
    title: 'Tools & Resources for Small Businesses — UseFeeKit',
    description:
      'Explore free calculators and educational guides for small businesses, freelancers, and service providers. 100% free, private, and client-side.',
    url: 'https://www.usefeekit.com/small-business',
    siteName: 'FeeKit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools & Resources for Small Businesses — UseFeeKit',
    description:
      'Free financial calculators, invoicing utilities, tax models, and guides for freelancers, agencies, and small businesses.',
    site: '@usefeekit',
  },
};

export default function SmallBusinessHubPage() {
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
        name: 'Small Business Hub',
        item: 'https://www.usefeekit.com/small-business',
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Tools & Resources for Small Businesses',
    url: 'https://www.usefeekit.com/small-business',
    description:
      'Curated financial calculation suites, invoicing utilities, tax models, and business finance guides.',
    publisher: {
      '@type': 'Organization',
      name: 'FeeKit',
      url: 'https://www.usefeekit.com',
    },
  };

  const smallBusinessFaqs = [
    {
      question: 'What free financial tools does FeeKit provide for small businesses?',
      answer:
        'FeeKit provides 199+ dedicated, free financial calculators across payment processing fee modeling (Stripe, PayPal, Square, Wise), US state sales tax, UK VAT, freelance hourly and day rates, landed cost e-commerce profit margins, and a client-side PDF invoice generator.',
    },
    {
      question: 'How does FeeKit protect sensitive business financial data?',
      answer:
        'All calculations on FeeKit execute 100% client-side directly in your browser. FeeKit does not collect, transmit, or store your private client details, invoicing figures, or financial balances on external servers.',
    },
    {
      question: 'What is a healthy profit margin for a service-based small business?',
      answer:
        'Healthy service businesses typically target a gross margin between 50% and 70% and a net profit margin between 15% and 30%, depending on employee headcount, billable utilization rates, and overhead costs.',
    },
    {
      question: 'When should a growing small business switch from spreadsheets to accounting software?',
      answer:
        'Businesses should typically transition when they issue more than 5 to 10 invoices per month, hire staff or subcontractors, carry inventory, or spend more than 4 hours each month manually reconciling bank transactions.',
    },
  ];

  return (
    <div className="space-y-8 pb-14 animate-in fade-in duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <FaqSchema items={smallBusinessFaqs} />

      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 sm:px-0">
        <BackButton fallbackHref="/" label="Back to home" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search business tools..." />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative rounded-none sm:rounded-3xl border-y sm:border border-slate-200 bg-white px-4 py-8 sm:p-10 shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-bold text-blue-700">
          <Briefcase className="h-3.5 w-3.5 text-blue-600" />
          <span>Small Business & Freelancer Resource Hub</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Tools & Resources for Small Businesses
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          UseFeeKit provides free mathematical calculators, downloadable invoicing utilities, and educational financial guides designed specifically for:
        </p>

        {/* Audience Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {[
            'Freelancers',
            'Consultants',
            'Digital Agencies',
            'Service Businesses',
            'Online Sellers',
            'Small-Business Owners',
          ].map((audience) => (
            <span
              key={audience}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
            >
              <CheckCircle2 className="h-3 w-3 text-blue-600" />
              <span>{audience}</span>
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 1: Core Business Tools */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
          <Calculator className="h-4 w-4" />
          <span>Section 1</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              1. Essential Business Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Core mathematical engines for pricing, operational volume, and investment efficiency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <Link
            href="/tools/profit-margin-calculator/standard"
            className="group rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <TrendingUp className="h-4 w-4" />
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
              Profit Margin & Markup Calculator
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Calculate gross margin percentage, net margin, and markup multipliers to prevent selling services at a loss.
            </p>
          </Link>

          <Link
            href="/tools/break-even-calculator/standard"
            className="group rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Scale className="h-4 w-4" />
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
              Break-Even Point Calculator
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Determine the exact monthly unit volume and billable contract revenue required to cover fixed operating overhead.
            </p>
          </Link>

          <Link
            href="/tools/roi-calculator/standard"
            className="group rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <DollarSign className="h-4 w-4" />
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
              ROI & Annualized Growth Calculator
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Evaluate capital expenditures, marketing campaign yields, and business software equipment ROI.
            </p>
          </Link>
        </div>
      </section>

      {/* SECTION 2: Invoicing Tools & Resources */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
          <FileText className="h-4 w-4" />
          <span>Section 2</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              2. Invoicing Tools & Client Billing Resources
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Professional client billing utilities and educational guides on payment terms.
            </p>
          </div>
          <Link
            href="/invoice-generator"
            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors shadow-xs shrink-0 self-start sm:self-auto"
          >
            <span>Launch Invoice Generator</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-5 space-y-3">
            <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-600" />
              <span>Interactive PDF Invoice Generator</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Create clean, professional PDF invoices directly in your web browser. Includes customizable sales tax and VAT rate fields, line-item discounts, payment term clauses, and zero watermarks or account signups.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>100% Client-Side Private • No Client Data Saved on Remote Servers</span>
            </div>
          </div>

          <div className="space-y-2">
            <Link
              href="/blog/how-to-create-an-invoice-for-freelance-work"
              className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 transition-all text-xs"
            >
              <div>
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  How to Create an Invoice for Freelance Work
                </div>
                <div className="text-slate-500 text-[11px]">
                  Step-by-step checklist of mandatory billing fields and payment terms.
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </Link>

            <Link
              href="/blog/invoice-vs-receipt"
              className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 transition-all text-xs"
            >
              <div>
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Invoice vs Receipt: What&apos;s the Difference?
                </div>
                <div className="text-slate-500 text-[11px]">
                  Legal distinctions, tax audit requirements, and proper timing.
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </Link>

            <Link
              href="/blog/net-30-vs-net-15"
              className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 transition-all text-xs"
            >
              <div>
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Net 30 vs Net 15 Payment Terms
                </div>
                <div className="text-slate-500 text-[11px]">
                  Cash flow trade-offs, early payment discounts, and client expectations.
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: Freelancing & Contractor Hub */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
          <Briefcase className="h-4 w-4" />
          <span>Section 3</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              3. Freelancing & Independent Contractor Hub
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Tools to calculate billable hourly rates, factor in 15.3% SECA taxes, and plan take-home pay.
            </p>
          </div>
          <Link
            href="/tools/freelance-rate-calculator"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors self-start sm:self-auto"
          >
            Launch Rate Calculator →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
          <Link
            href="/tools/freelance-rate-calculator"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-1.5"
          >
            <div className="font-bold text-sm text-slate-900">1099 Freelance Rate Calculator</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Derive minimum hourly and day rates across 27 tech and creative professions factoring in SECA and overhead.
            </p>
          </Link>

          <Link
            href="/tools/quarterly-tax-calculator/1040-es"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-1.5"
          >
            <div className="font-bold text-sm text-slate-900">IRS Form 1040-ES Quarterly Tax Vouchers</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Estimate quarterly tax voucher liabilities to avoid IRS underpayment penalties at year-end.
            </p>
          </Link>

          <Link
            href="/blog/how-to-calculate-freelance-hourly-rate"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-1.5"
          >
            <div className="font-bold text-sm text-slate-900">The 1.3x Billable Multiplier Guide</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              How to transition from a corporate W-2 salary to an independent 1099 hourly rate without losing money.
            </p>
          </Link>
        </div>
      </section>

      {/* SECTION 4: Payment Processing & Gateways */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
          <CreditCard className="h-4 w-4" />
          <span>Section 4</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              4. Payment Processing & Gateway Fees
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Bidirectional calculators to pass processing cuts to clients or protect gross margins.
            </p>
          </div>
          <Link
            href="/tools/gateway-comparator/stripe-paypal-square"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors self-start sm:self-auto"
          >
            3-Way Comparator →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          {[
            { title: 'Stripe Fee Calculator', href: '/tools/stripe-fee-calculator/usa', tag: '2.9% + $0.30' },
            { title: 'PayPal Merchant Fees', href: '/tools/paypal-fee-calculator/usa', tag: 'Standard & QR' },
            { title: 'Square POS & Online', href: '/tools/square-fee-calculator/standard', tag: '2.6% + $0.10' },
            { title: 'Venmo Business Fees', href: '/tools/venmo-fee-calculator/standard', tag: '1.9% - 2.29%' },
            { title: 'Gumroad Creator Fees', href: '/tools/gumroad-fee-calculator/standard', tag: '10% + $0.50' },
            { title: 'Lemon Squeezy SaaS Fees', href: '/tools/lemon-squeezy-calculator/standard', tag: '5% + $0.50' },
            { title: 'Shopify Payments Fees', href: '/tools/shopify-fee-calculator/standard', tag: 'Tiered Plans' },
            { title: 'Wise vs Stripe FX Spread', href: '/tools/wise-vs-stripe', tag: 'Mid-Market Rates' },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-xl border border-slate-200 bg-slate-50/50 p-3 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="font-bold text-xs text-slate-900 group-hover:text-blue-600 transition-colors">
                {tool.title}
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>{tool.tag}</span>
                <ArrowRight className="h-3 w-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 5: Taxes & Compliance */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
          <Receipt className="h-4 w-4" />
          <span>Section 5</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              5. Taxes & Sales Tax Compliance
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              50-state sales tax nexus calculators, UK HMRC VAT compliance, and contractor tax models.
            </p>
          </div>
          <Link
            href="/tools/sales-tax-calculator"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors self-start sm:self-auto"
          >
            All 50 US States →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
          <Link
            href="/tools/sales-tax-calculator"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-1.5"
          >
            <div className="font-bold text-sm text-slate-900">US 50-State Sales Tax Hub</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Base state statutory rates, municipal district surtax caps, and economic nexus threshold monitoring.
            </p>
          </Link>

          <Link
            href="/tools/vat-calculator"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-1.5"
          >
            <div className="font-bold text-sm text-slate-900">UK HMRC VAT Calculator (MTD)</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              20% standard and 5% reduced rate calculations for Making Tax Digital compliance and B2B invoices.
            </p>
          </Link>

          <Link
            href="/tools/uk-ir35-calculator/contractor"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-1.5"
          >
            <div className="font-bold text-sm text-slate-900">UK IR35 Inside vs Outside Take-Home</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Calculate deemed employment deductions versus limited company dividend distributions.
            </p>
          </Link>
        </div>
      </section>

      {/* SECTION 6: Profit & Margins */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
          <TrendingUp className="h-4 w-4" />
          <span>Section 6</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              6. Profit & Margins for Service Businesses
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Understand unit economics, billable margins, and commercial pricing models.
            </p>
          </div>
          <Link
            href="/blog/service-business-profit-margin"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors self-start sm:self-auto"
          >
            Read Margin Guide →
          </Link>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Live Profit Margin Model</h3>
            <p className="text-xs text-slate-500">
              Test your revenue numbers below. Calculates gross profit, profit margin %, and markup multiplier:
            </p>
          </div>
          <ProfitMarginCalculator initialCogs={150} initialRevenue={300} />
        </div>
      </section>

      {/* SECTION 7: Business Finance Guides */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
          <BookOpen className="h-4 w-4" />
          <span>Section 7</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              7. Business Finance Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Practical, actionable guides to bookkeeping, cash flow, and tax deductions.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors self-start sm:self-auto"
          >
            View all guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 pt-1">
          <Link
            href="/blog/small-business-bookkeeping-basics"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-1.5"
          >
            <div className="font-bold text-sm text-slate-900">Small Business Bookkeeping Basics</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              A beginner&apos;s manual on chart of accounts, single vs double entry, and month-end reconciliation.
            </p>
          </Link>

          <Link
            href="/blog/how-to-track-business-expenses-freelancer"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-1.5"
          >
            <div className="font-bold text-sm text-slate-900">How to Track Expenses as a Freelancer</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              IRS Schedule C deductions, receipt preservation, mileage logs, and home office write-offs.
            </p>
          </Link>

          <Link
            href="/blog/llc-vs-scorp-freelance-tax-guide"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-1.5"
          >
            <div className="font-bold text-sm text-slate-900">LLC vs S-Corp Tax Strategy</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              The $80,000 net profit threshold where electing S-Corporation tax status saves real money.
            </p>
          </Link>
        </div>
      </section>

      {/* SECTION 8: Accounting & Software Resources */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
          <Compass className="h-4 w-4" />
          <span>Section 8</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              8. Accounting & Software Resources
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Independent, factual evaluations of business bookkeeping and invoicing software.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <Link
            href="/blog/accounting-software-vs-spreadsheet"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-2"
          >
            <div className="font-bold text-sm text-slate-900">
              Accounting Software vs Spreadsheets: What Should a Small Business Use?
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              When spreadsheets work well, when they expose you to tax audit risk, and the exact volume threshold when dedicated software pays for itself.
            </p>
            <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1">
              Read software comparison →
            </span>
          </Link>

          <Link
            href="/guides/freshbooks-for-freelancers"
            className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all space-y-2"
          >
            <div className="font-bold text-sm text-slate-900">
              FreshBooks for Freelancers: Invoicing & Accounting Guide
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              A neutral breakdown of FreshBooks workflows, client billing features, evaluation questions, and alternative accounting tools.
            </p>
            <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1">
              Read FreshBooks guide →
            </span>
          </Link>
        </div>

        {/* Head-to-Head Comparisons Bar */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Accounting Software Comparisons:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              {
                slug: 'freshbooks-vs-quickbooks',
                label: 'FreshBooks vs QuickBooks',
              },
              {
                slug: 'freshbooks-vs-wave',
                label: 'FreshBooks vs Wave',
              },
              {
                slug: 'freshbooks-vs-zoho-books',
                label: 'FreshBooks vs Zoho Books',
              },
              {
                slug: 'freshbooks-vs-xero',
                label: 'FreshBooks vs Xero',
              },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <span>{c.label}</span>
                <ArrowRight className="h-3 w-3 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Frequently Asked Questions */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600">
          <HelpCircle className="h-4 w-4" />
          <span>Section 9</span>
        </div>
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            9. Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Answers to common questions about small business finance, fee calculations, and operational tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {smallBusinessFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-5 space-y-2"
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
    </div>
  );
}
