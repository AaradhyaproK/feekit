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

interface AuthorizeNetGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function AuthorizeNetGuide({ sectionClass, inArticleSlot }: AuthorizeNetGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Payment Gateway & Merchant Account Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Authorize.Net Fees: Gateway Only vs. All-in-One Pricing ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A fee comparison between Authorize.Net&apos;s $25/month gateway-only plan (10¢ per transaction) and the all-in-one payment processing plan (2.9% + $0.30).
        </p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-blue-800 shrink-0" />
          <span>The Immediate Answer: Authorize.Net Pricing Tiers</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Authorize.Net offers two distinct setups: <strong>Payment Gateway Only</strong> (if you already have a merchant bank account) costs <strong>$25/month plus $0.10 per transaction</strong> and a $0.10 daily batch fee; and <strong>All-in-One Payment Processing</strong> costs <strong>$25/month plus 2.9% plus $0.30</strong> per transaction. Businesses with monthly volume over $50,000 can achieve massive savings by pairing the gateway-only plan with wholesale interchange-plus merchant accounts.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          When Does Authorize.Net Beat Stripe or Square?
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          On flat-rate processors like Stripe (2.9% + $0.30), processing $100,000 in monthly sales costs $2,900+ in fees. With Authorize.Net Gateway Only paired with an interchange-plus merchant account (averaging Interchange + 0.20%), total fees on $100,000 often drop to under $1,900—saving over <strong>$1,000 every month</strong>.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-blue-800 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Gateway Only vs. All-in-One Cost Comparison
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Monthly Card Volume</th>
                <th className="py-3 px-4 text-slate-700">All-in-One ($25 + 2.9% + 30¢)</th>
                <th className="py-3 px-4 text-blue-700">Gateway Only ($25 + 10¢)</th>
                <th className="py-3 px-4 text-emerald-700">High-Volume Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$10,000 (100 orders)</td>
                <td className="py-2.5 px-4">$345.00</td>
                <td className="py-2.5 px-4">$38.00 + Interchange</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">Break-Even Range</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$50,000 (500 orders)</td>
                <td className="py-2.5 px-4">$1,625.00</td>
                <td className="py-2.5 px-4 text-blue-600 font-bold">$78.00 + Interchange</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold font-sans">Save ~$500/mo</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$100,000 (1,000 orders)</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$3,225.00</td>
                <td className="py-2.5 px-4 text-blue-600 font-bold">$128.00 + Interchange</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold font-sans">Save ~$1,100/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {inArticleSlot}
    </section>
  );
}
