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
import { getSquareChannel } from './gateway-channel-data';

interface SquareGuideProps {
  sectionClass: string;
  /** The matrix slug for the channel (usa, in-person, online-store, invoice, ...). */
  countrySlug?: string;
  inArticleSlot?: React.ReactNode;
}

export function SquareGuide({ sectionClass, countrySlug, inArticleSlot }: SquareGuideProps) {
  const currentYear = new Date().getFullYear();
  const channel = getSquareChannel(countrySlug || '');

  // Worked example at three ticket sizes, computed from the channel's own rate.
  const amounts = [5, 25, 100];
  const rows = amounts.map((amount) => {
    const fee = (amount * channel.percent) / 100 + channel.fixed;
    return {
      amount,
      fee,
      effective: (fee / amount) * 100,
      net: amount - fee,
    };
  });

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>{channel.name} Point of Sale &amp; Processing Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          {channel.name} Fees Explained: {channel.headline} ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A transparent analysis of the {channel.name} rate card, the net payout at three ticket
          sizes, and how the acceptance method changes what you actually keep.
        </p>
      </div>

      <div className="rounded-xl border border-slate-300 bg-slate-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-slate-800 shrink-0" />
          <span>The Immediate Answer: {channel.name} Fee Schedule</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>{channel.answer}</strong>
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">{channel.detail}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          What the {channel.name} Rate Means for Your Net Payout
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Square splits every deduction into a percentage and a fixed fee, and the fixed fee is
          what decides whether the rate works at your ticket size. On a {channel.symbol}
          {rows[0].amount.toFixed(2)} sale the total deduction is{' '}
          <strong>
            {channel.symbol}
            {rows[0].fee.toFixed(2)}
          </strong>{' '}
          - an effective rate of {rows[0].effective.toFixed(1)}% rather than the headline{' '}
          {channel.percent}%. At {channel.symbol}
          {rows[2].amount.toFixed(2)} the same schedule costs{' '}
          <strong>
            {channel.symbol}
            {rows[2].fee.toFixed(2)}
          </strong>
          , an effective {rows[2].effective.toFixed(2)}%.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">{channel.note}</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-slate-800 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: {channel.name} Deductions at Three Ticket Sizes
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Transaction Amount</th>
                <th className="py-3 px-4 text-blue-700">Rate</th>
                <th className="py-3 px-4 text-slate-900">Fee</th>
                <th className="py-3 px-4 text-rose-700">Effective Rate</th>
                <th className="py-3 px-4 text-emerald-700">Net Payout</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              {rows.map((row) => (
                <tr key={row.amount}>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">
                    {channel.symbol}
                    {row.amount.toFixed(2)}
                  </td>
                  <td className="py-2.5 px-4">{channel.headline}</td>
                  <td className="py-2.5 px-4 text-rose-600">
                    {channel.symbol}
                    {row.fee.toFixed(2)}
                  </td>
                  <td className="py-2.5 px-4">{row.effective.toFixed(2)}%</td>
                  <td className="py-2.5 px-4 text-emerald-700 font-bold">
                    {channel.symbol}
                    {row.net.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            {channel.name} Compliance &amp; Dispute Framework
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{channel.regulatory}</p>
      </div>

      {inArticleSlot}
    </section>
  );
}
