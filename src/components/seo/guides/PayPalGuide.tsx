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
import { getPayPalChannel } from './paypal-channel-data';

interface PayPalGuideProps {
  sectionClass: string;
  /** The matrix slug for the channel (usa, uk, eu, international, qr-code, ...). */
  countrySlug?: string;
  inArticleSlot?: React.ReactNode;
}

export function PayPalGuide({ sectionClass, countrySlug, inArticleSlot }: PayPalGuideProps) {
  const currentYear = new Date().getFullYear();
  const channel = getPayPalChannel(countrySlug || '');

  // Worked example at three ticket sizes, computed from the channel's own
  // rate so the table is different on every channel page.
  const amounts = [5, 50, 100];
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
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>{channel.name} Fee &amp; Commerce Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          {channel.name} Fees Explained: {channel.headline} ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A transparent analysis of the {channel.name} rate card, the net payout at three ticket
          sizes, and the practical trade-offs between this channel and the alternatives.
        </p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-blue-600 shrink-0" />
          <span>The Immediate Answer: {channel.name} Rates</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>{channel.answer}</strong>
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">{channel.detail}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          What This Rate Means for Your Net Payout
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          A percentage-only reading of a fee card hides the fixed component, and the fixed
          component is what decides whether a processor works at your ticket size. On a{' '}
          {channel.symbol}
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
          , an effective {rows[2].effective.toFixed(2)}%. That gap between headline and effective
          rate is the entire reason the same fee card can be the cheapest option for one merchant
          and the most expensive for another.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">{channel.note}</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-blue-700 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: {channel.name} Deductions at Three Ticket Sizes
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Amount</th>
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
          <ShieldCheck className="h-4 w-4 text-blue-700 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Cross-Border Currency Conversion & International Surcharges
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Accepting international buyers on PayPal carries two distinct friction points: an added
          1.50% cross-border fee, and PayPal&apos;s internal retail currency exchange spread of
          3.0% to 4.0% above mid-market interbank rates. To protect margins when selling globally,
          consider routing foreign currency receivables into multi-currency balances or utilizing
          dedicated cross-border processors.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
