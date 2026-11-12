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
import { getAuthorizeNetChannel } from './gateway-channel-data';

interface AuthorizeNetGuideProps {
  sectionClass: string;
  /** The matrix slug (standard-merchant, gateway-only, echeck, international). */
  countrySlug?: string;
  inArticleSlot?: React.ReactNode;
}

export function AuthorizeNetGuide({ sectionClass, countrySlug, inArticleSlot }: AuthorizeNetGuideProps) {
  const currentYear = new Date().getFullYear();
  const channel = getAuthorizeNetChannel(countrySlug || '');

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>{channel.name} &amp; Merchant Account Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          {channel.name} Fees Explained: {channel.headline} ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A transparent analysis of the {channel.name} rate card and how it compares with
          interchange-plus pricing on flat-rate processors.
        </p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-blue-800 shrink-0" />
          <span>The Immediate Answer: {channel.name} Pricing</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>{channel.answer}</strong>
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">{channel.detail}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          When Does Authorize.Net Beat Stripe or Square?
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          On flat-rate processors like Stripe (2.9% + $0.30), processing $100,000 in monthly sales
          costs $2,900+ in fees. With Authorize.Net Gateway Only paired with an interchange-plus
          merchant account (averaging Interchange + 0.20%), total fees on $100,000 often drop to
          under $1,900 - saving over <strong>$1,000 every month</strong>.
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
                <th className="py-3 px-4 text-slate-700">All-in-One (2.9% + 30¢)</th>
                <th className="py-3 px-4 text-blue-700">Gateway Only ($25 + 10¢)</th>
                <th className="py-3 px-4 text-emerald-700">High-Volume Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$10,000 (100 orders)</td>
                <td className="py-2.5 px-4">$320.00</td>
                <td className="py-2.5 px-4">$35.00 + Interchange</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">Break-Even Range</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$50,000 (500 orders)</td>
                <td className="py-2.5 px-4">$1,600.00</td>
                <td className="py-2.5 px-4 text-blue-600 font-bold">$75.00 + Interchange</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold font-sans">Save ~$500/mo</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold">$100,000 (1,000 orders)</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$3,200.00</td>
                <td className="py-2.5 px-4 text-blue-600 font-bold">$125.00 + Interchange</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold font-sans">Save ~$1,100/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <ShieldCheck className="h-4 w-4 text-blue-800 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            {channel.name} Liability, Compliance and Settlement
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{channel.regulatory}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{channel.note}</p>
      </div>

      {inArticleSlot}
    </section>
  );
}
