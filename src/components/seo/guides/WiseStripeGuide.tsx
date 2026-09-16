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

interface WiseStripeGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function WiseStripeGuide({ sectionClass, inArticleSlot }: WiseStripeGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Cross-Border Foreign Exchange & Contractor Payout Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Wise vs. Stripe Fee Comparison: FX Spreads & International Payouts ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Comparing real mid-market foreign exchange rates, Stripe&apos;s 1% to 2% currency conversion markup, cross-border card fees, and international B2B wire costs.
        </p>
      </div>

      <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-teal-950 font-bold text-sm">
          <Scale className="h-4 w-4 text-teal-600 shrink-0" />
          <span>The Immediate Answer: Wise Mid-Market vs. Stripe FX Markup</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          When sending cross-border payments or receiving foreign currencies, <strong>Stripe adds a 1.0% to 2.0% currency conversion fee</strong> on top of a 1.50% international card surcharge. In contrast, <strong>Wise operates on the pure mid-market exchange rate</strong> (the zero-markup rate seen on Google or Reuters) and charges an upfront, transparent variable fee between <strong>0.35% and 0.55%</strong>. On a $10,000 international transfer, Wise saves businesses between $150 and $250 in hidden foreign exchange spreads.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          The Hidden Cost of Payment Gateway FX Spreads
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Traditional credit card processors advertise low transaction rates but quietly recoup profits on cross-border conversion. When a US company invoices a European client in Euros or pounds, Stripe converts the funds to USD at an internal retail rate padded with a 1%–2% spread. For high-volume international contractor payouts or remote agency payroll, using Wise Business multi-currency accounts eliminates currency conversion entirely by holding foreign currency until needed.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-teal-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: $5,000 USD to EUR International Transfer Comparison
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Transfer Platform</th>
                <th className="py-3 px-4 text-slate-700">Exchange Rate Used</th>
                <th className="py-3 px-4 text-rose-600">Upfront Fee</th>
                <th className="py-3 px-4 text-rose-600">Hidden FX Markup</th>
                <th className="py-3 px-4 text-emerald-700">Recipient Receives</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold text-teal-700">Wise Business</td>
                <td className="py-2.5 px-4 font-sans font-semibold text-emerald-600">Mid-Market (1.0850)</td>
                <td className="py-2.5 px-4 text-slate-700">$21.50 (0.43%)</td>
                <td className="py-2.5 px-4 text-emerald-600 font-sans font-bold">$0.00 (0.0%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">€4,608.20</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold text-blue-700">Stripe International Payout</td>
                <td className="py-2.5 px-4 font-sans text-rose-600">Retail Markup (1.0633)</td>
                <td className="py-2.5 px-4 text-slate-700">$15.00</td>
                <td className="py-2.5 px-4 text-rose-600 font-sans font-bold">~$100.00 (2.0%)</td>
                <td className="py-2.5 px-4 text-slate-900">€4,510.40</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold text-slate-700">Traditional Bank Wire</td>
                <td className="py-2.5 px-4 font-sans text-rose-600">Bank Retail (1.0524)</td>
                <td className="py-2.5 px-4 text-rose-600">$45.00 wire fee</td>
                <td className="py-2.5 px-4 text-rose-600 font-sans font-bold">~$150.00 (3.0%)</td>
                <td className="py-2.5 px-4 text-rose-600">€4,440.10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {inArticleSlot}
    </section>
  );
}
