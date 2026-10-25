import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ExternalLink, Calendar, RefreshCw, FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Statutory & Gateway Rate Changelog | FeeKit',
  description: 'Public ledger of verified statutory sales tax updates, payment gateway fee revisions, and statutory threshold changes with primary source citations.',
  alternates: {
    canonical: 'https://www.usefeekit.com/changelog',
  },
};

interface ChangelogEntry {
  date: string;
  category: 'Payment Gateways' | 'Sales Tax' | 'Statutory Tax';
  title: string;
  previousValue: string;
  newValue: string;
  notes: string;
  sourceUrl: string;
  sourceName: string;
}

const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    date: 'October 24, 2026',
    category: 'Payment Gateways',
    title: 'PayPal US In-Person QR Code Transaction Rate',
    previousValue: '1.90% + $0.10',
    newValue: '2.29% + $0.09',
    notes: 'Corrected rate to match PayPal US Merchant Fee schedule. The 1.90% + $0.10 rate applies specifically to Venmo Business QR profiles.',
    sourceUrl: 'https://www.paypal.com/us/business/paypal-business-fees',
    sourceName: 'PayPal US Merchant Fee Schedule',
  },
  {
    date: 'October 24, 2026',
    category: 'Payment Gateways',
    title: 'Square Plan-Based Fee Schedule Differentiation',
    previousValue: '2.6% + 10¢ in-person / 2.9% + 30¢ online',
    newValue: 'Free: 2.6% + 15¢ POS / 3.3% + 30¢ Online; Plus/API: 2.9% + 30¢',
    notes: 'Updated to reflect Square’s plan tiers. The Free plan is 2.6% + 15¢ in-person and 3.3% + 30¢ online. 2.9% + 30¢ is reserved for Square Plus ($29/mo) and custom developer APIs.',
    sourceUrl: 'https://squareup.com/us/en/pricing',
    sourceName: 'Square Official Pricing Page',
  },
  {
    date: 'October 24, 2026',
    category: 'Payment Gateways',
    title: 'Stripe UK Domestic Premium Card Pricing',
    previousValue: '2.5% + 20p',
    newValue: '1.9% + 20p',
    notes: 'Corrected domestic premium UK cards from 2.5% (which is the cross-border EEA card rate) to the confirmed 1.9% + 20p UK domestic tier.',
    sourceUrl: 'https://stripe.com/gb/pricing',
    sourceName: 'Stripe UK Pricing Page',
  },
  {
    date: 'October 24, 2026',
    category: 'Payment Gateways',
    title: 'Gumroad Creator Fee Breakdown Disclosure',
    previousValue: '10% + 50¢ flat',
    newValue: '10% + 50¢ + Card Processing (~2.9% + 30¢)',
    notes: 'Clarified that Gumroad charges payment processing fees on direct creator sales in addition to its 10% platform cut. Discover sales remain a flat 30%.',
    sourceUrl: 'https://help.gumroad.com/article/66-gumroads-fees',
    sourceName: 'Gumroad Help Center Fee Article',
  },
  {
    date: 'January 1, 2025',
    category: 'Sales Tax',
    title: 'Louisiana Statutory State Sales Tax Temporary Increase',
    previousValue: '4.45% base (max combined 11.45%)',
    newValue: '5.00% base (max combined 12.00%)',
    notes: 'Enacted by Act 1 of the 2024 Third Extraordinary Session. The 5.00% rate runs through December 31, 2029 (drops to 4.75% on January 1, 2030). Combined parish rates reach up to 12.00%.',
    sourceUrl: 'https://revenue.louisiana.gov/',
    sourceName: 'Louisiana Department of Revenue (Act 1 of 2024)',
  },
  {
    date: 'January 1, 2026',
    category: 'Statutory Tax',
    title: 'SSA Social Security Maximum Wage Contribution Cap',
    previousValue: '$168,600 (2024) / $176,100 (2025)',
    newValue: '$184,500',
    notes: 'Social Security Administration COLA update establishes the 2026 taxable maximum at $184,500 for the 12.4% OASDI portion of SECA and FICA.',
    sourceUrl: 'https://www.ssa.gov/oact/cola/cbb.html',
    sourceName: 'Social Security Administration Contribution & Benefit Base',
  },
  {
    date: 'January 1, 2026',
    category: 'Statutory Tax',
    title: 'IRS Form 1099-K Statutory Reporting Threshold',
    previousValue: 'Proposed $600 / $5,000 phase-in',
    newValue: '$20,000 gross payments and 200 transactions',
    notes: 'Per IRS Notice and 26 U.S.C. § 6050W, the statutory reporting standard remains $20,000 and 200 transactions for commercial third-party settlement organizations.',
    sourceUrl: 'https://www.irs.gov/businesses/understanding-your-form-1099-k',
    sourceName: 'IRS Form 1099-K Guidance',
  },
  {
    date: 'April 1, 2024',
    category: 'Statutory Tax',
    title: 'UK HMRC VAT Compulsory Registration Threshold',
    previousValue: '£85,000',
    newValue: '£90,000',
    notes: 'HM Revenue & Customs raised the mandatory 12-month rolling turnover threshold for VAT registration to £90,000 (deregistration at £88,000).',
    sourceUrl: 'https://www.gov.uk/vat-registration-thresholds',
    sourceName: 'HMRC VAT Registration Thresholds',
  },
];

export default function ChangelogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Top Breadcrumb */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Calculators</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-200/80 px-2.5 py-1 text-xs font-bold text-blue-700">
          <RefreshCw className="h-3.5 w-3.5 text-blue-600 animate-spin-reverse" />
          <span>Public Ledger</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Statutory &amp; Gateway Rate Changelog
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          A transparent, date-stamped audit log documenting every change made to statutory tax rates, government thresholds, and merchant processing fee schedules across FeeKit calculators.
        </p>
      </header>

      {/* Audit Log Entries */}
      <div className="space-y-6">
        {CHANGELOG_ENTRIES.map((entry, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-3.5 hover:border-slate-300 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-slate-500 flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {entry.date}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  {entry.category}
                </span>
              </div>

              <a
                href={entry.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>{entry.sourceName}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {entry.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs font-mono">
              <div>
                <span className="text-slate-400 font-sans text-[11px] block uppercase font-semibold">Previous Value</span>
                <span className="text-rose-700 font-bold line-through">{entry.previousValue}</span>
              </div>
              <div>
                <span className="text-slate-400 font-sans text-[11px] block uppercase font-semibold">Verified New Value</span>
                <span className="text-emerald-700 font-bold">{entry.newValue}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              {entry.notes}
            </p>
          </article>
        ))}
      </div>

      {/* Editorial Provenance Notice */}
      <footer className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-xs text-slate-600 space-y-2">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>Editorial Integrity &amp; Verification Methodology</span>
        </div>
        <p className="leading-relaxed">
          Every figure in FeeKit is managed through our single source of truth rate registry (<code>src/data/rates/index.ts</code>) and tested continuously via automated build-time validation. We never guess or estimate numbers; every rate is linked directly to published regulatory statutes or official gateway documentation.
        </p>
        <p className="text-slate-500 pt-1">
          Written and reviewed by Aaradhya Pathak, software developer. Not a CPA or tax advisor. For questions or corrections, please contact <a href="mailto:support@usefeekit.com" className="text-blue-600 underline">support@usefeekit.com</a>.
        </p>
      </footer>
    </div>
  );
}
