import React from 'react';
import {
  BookOpen,
  DollarSign,
  FileSpreadsheet,
  TrendingUp,
  Scale,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface GatewayComparatorGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function GatewayComparatorGuide({ sectionClass, inArticleSlot }: GatewayComparatorGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Payment Gateway Comparison & Financial Feasibility</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Stripe vs. PayPal vs. Square: 3-Way Merchant Processor Comparison ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A side-by-side fee audit comparing online checkouts, in-person POS tap rates, micropayments, international card surcharges, and payout speeds.
        </p>
      </div>

      <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm">
          <Scale className="h-4 w-4 text-indigo-600 shrink-0" />
          <span>The Immediate Answer: Which Processor is Cheapest?</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          For standard domestic online credit card checkouts, <strong>Stripe and Square tie at 2.9% plus $0.30</strong>, while <strong>PayPal Commerce is higher at 3.49% plus $0.49</strong>. For in-person point-of-sale retail, <strong>Square is the undisputed winner at 2.6% plus $0.10</strong>. For low-ticket digital micropayments under $10, <strong>PayPal Micropayments (5% plus $0.05)</strong> is the most cost-effective solution on the market.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Core Feature & Surcharge Comparison Across the Big Three
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 shadow-2xs">
            <div className="font-bold text-sm text-blue-700">Stripe</div>
            <ul className="space-y-1 text-slate-600">
              <li>• Best for: SaaS, developers, custom checkouts</li>
              <li>• Online: 2.9% + $0.30</li>
              <li>• In-Person: 2.7% + $0.05</li>
              <li>• ACH Bank Debit: 0.8% capped at $5.00</li>
              <li>• Payout: 2 business days (rolling)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 shadow-2xs">
            <div className="font-bold text-sm text-blue-900">PayPal</div>
            <ul className="space-y-1 text-slate-600">
              <li>• Best for: Global brand trust, buyer recognition</li>
              <li>• Online: 2.99%–3.49% + $0.49</li>
              <li>• Micropayments: 5.0% + $0.05 (Under $10)</li>
              <li>• Cross-Border: +1.5% + 3–4% FX spread</li>
              <li>• Payout: 1–3 business days or instant</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 shadow-2xs">
            <div className="font-bold text-sm text-slate-800">Square</div>
            <ul className="space-y-1 text-slate-600">
              <li>• Best for: Retail POS, food & beverage, pop-ups</li>
              <li>• In-Person: 2.6% + $0.10</li>
              <li>• Online: 2.9% + $0.30</li>
              <li>• Keyed-in: 3.5% + $0.15</li>
              <li>• Payout: Free next-business-day</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-indigo-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: 3-Way Net Payout Benchmark on a $100 Transaction
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Processor & Rail</th>
                <th className="py-3 px-4 text-slate-700">Gross Sale</th>
                <th className="py-3 px-4 text-rose-600">Fee Deducted</th>
                <th className="py-3 px-4 text-emerald-700">Net Deposited</th>
                <th className="py-3 px-4 text-slate-500">Effective %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold text-blue-700">Stripe Online Card</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-rose-600">$3.20</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$96.80</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">3.20%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold text-slate-800">Square In-Person Tap</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-rose-600">$2.70</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$97.30</td>
                <td className="py-2.5 px-4 font-sans text-emerald-600 font-bold">2.70% (Cheapest)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold text-blue-900">PayPal Online Checkout</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-rose-600">$3.48</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$96.52</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">3.48%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold text-blue-900">PayPal Invoicing API</td>
                <td className="py-2.5 px-4">$100.00</td>
                <td className="py-2.5 px-4 text-rose-600">$3.98</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$96.02</td>
                <td className="py-2.5 px-4 font-sans text-rose-600">3.98%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {inArticleSlot}
    </section>
  );
}
