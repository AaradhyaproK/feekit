import React from 'react';
import {
  BookOpen,
  DollarSign,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface LemonSqueezyGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function LemonSqueezyGuide({ sectionClass, inArticleSlot }: LemonSqueezyGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>SaaS & Merchant of Record Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Lemon Squeezy Fee Breakdown: 5% + $0.50 SaaS & MoR Rates ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A full guide to Lemon Squeezy&apos;s 5% + $0.50 Merchant of Record pricing, global sales tax handling, EU VAT compliance, PayPal surcharges, and subscription billing.
        </p>
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-amber-600 shrink-0" />
          <span>The Immediate Answer: Standard Lemon Squeezy Fee</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Lemon Squeezy charges a standard all-inclusive fee of <strong>5% plus $0.50</strong> per successful transaction. Unlike raw Stripe (2.9% + $0.30), this 5% rate includes full Merchant of Record (MoR) status: Lemon Squeezy becomes the legal reseller of your software or digital assets, automatically calculating, collecting, and remitting sales taxes across all 50 US states, Canada, and EU VAT without exposing your company to international audit liabilities.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Payment Method Surcharges: Credit Cards vs. PayPal vs. International
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          While domestic credit card transactions in your primary currency process at the flat 5% + $0.50 rate, secondary payment methods incur standardized surcharges:
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Standard Domestic Cards:</strong> 5.0% + $0.50 (no additional fees).</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>PayPal Surcharge (+1.5%):</strong> If the customer chooses PayPal at checkout, Lemon Squeezy applies an additional 1.5% fee (total 6.5% + $0.50).</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>International / Cross-Border (+1.5%):</strong> Transactions made with cards issued outside your primary operating region incur a 1.5% cross-border fee.</span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-amber-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: SaaS Subscription Net Payouts on Lemon Squeezy
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Subscription Plan</th>
                <th className="py-3 px-4 text-amber-700">Card Fee (5% + $0.50)</th>
                <th className="py-3 px-4 text-slate-900">Net Founder Payout</th>
                <th className="py-3 px-4 text-slate-500">Effective Rate</th>
                <th className="py-3 px-4 text-rose-600">PayPal Fee (6.5% + $0.50)</th>
                <th className="py-3 px-4 text-slate-900">PayPal Net Payout</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$9.00 / mo</td>
                <td className="py-2.5 px-4 text-rose-600">$0.95</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$8.05</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">10.56%</td>
                <td className="py-2.5 px-4 text-rose-600">$1.09</td>
                <td className="py-2.5 px-4 text-slate-900">$7.91</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$29.00 / mo</td>
                <td className="py-2.5 px-4 text-rose-600">$1.95</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$27.05</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">6.72%</td>
                <td className="py-2.5 px-4 text-rose-600">$2.39</td>
                <td className="py-2.5 px-4 text-slate-900">$26.61</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$49.00 / mo</td>
                <td className="py-2.5 px-4 text-rose-600">$2.95</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$46.05</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">6.02%</td>
                <td className="py-2.5 px-4 text-rose-600">$3.69</td>
                <td className="py-2.5 px-4 text-slate-900">$45.31</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$99.00 / mo</td>
                <td className="py-2.5 px-4 text-rose-600">$5.45</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$93.55</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">5.51%</td>
                <td className="py-2.5 px-4 text-rose-600">$6.94</td>
                <td className="py-2.5 px-4 text-slate-900">$92.06</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$299.00 / yr</td>
                <td className="py-2.5 px-4 text-rose-600">$15.45</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$283.55</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">5.17%</td>
                <td className="py-2.5 px-4 text-rose-600">$19.94</td>
                <td className="py-2.5 px-4 text-slate-900">$279.06</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            How MoR Shielding Protects SaaS Founders
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          When an EU customer in Germany buys software with 19% VAT, Lemon Squeezy generates the VAT invoice, collects the tax, and remits it directly to the German Federal Central Tax Office (BZSt). You receive clean net software royalties, completely sidestepping European tax registrations, accountant filings, and state economic nexus audits.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
