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
import { getWisePair } from './wise-pair-data';

interface WiseStripeGuideProps {
  sectionClass: string;
  /** The matrix slug for the currency corridor (usd-to-eur, gbp-to-eur, ...). */
  countrySlug?: string;
  inArticleSlot?: React.ReactNode;
}

export function WiseStripeGuide({ sectionClass, countrySlug, inArticleSlot }: WiseStripeGuideProps) {
  const currentYear = new Date().getFullYear();
  const pair = getWisePair(countrySlug || '');

  const transferAmount = 5000;

  // Wise: variable fee + fixed fee, converted at the mid-market rate.
  const wiseFee = (transferAmount * pair.wisePercent) / 100 + pair.wiseFixed;
  const wiseReceived = ((transferAmount - wiseFee) * pair.midMarket);

  // Gateway: fixed fee plus a currency conversion markup on the mid-market rate.
  const gatewayFee = pair.gatewayFixed + (transferAmount * pair.gatewayMarkup) / 100;
  const gatewayReceived = (transferAmount - pair.gatewayFixed) * pair.retailRate;

  // Traditional bank wire: a flat wire fee plus a wider bank spread.
  const bankWireFee = 45;
  const bankReceived = (transferAmount - bankWireFee) * (pair.retailRate - 0.011);

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>{pair.name} Cross-Border FX &amp; Contractor Payout Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Wise vs. Stripe on {pair.name}: FX Spread &amp; International Payouts ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Comparing real mid-market foreign exchange rates against the currency conversion markup a
          payment gateway adds on the {pair.name} corridor.
        </p>
      </div>

      <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-teal-950 font-bold text-sm">
          <Scale className="h-4 w-4 text-teal-600 shrink-0" />
          <span>The Immediate Answer: Wise Mid-Market vs. Gateway FX Markup</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          On the {pair.name} corridor, a payment gateway converts at a retail rate padded with a{' '}
          <strong>{pair.gatewayMarkup.toFixed(1)}% currency conversion markup</strong>, while{' '}
          <strong>Wise operates on the mid-market exchange rate</strong> and charges a transparent{' '}
          {pair.wisePercent.toFixed(2)}% variable fee plus {pair.fromSymbol}
          {pair.wiseFixed.toFixed(2)}. On a {pair.fromSymbol}
          {transferAmount.toLocaleString()} transfer the two approaches differ by{' '}
          <strong>
            {pair.toSymbol}
            {Math.abs(wiseReceived - gatewayReceived).toFixed(2)}
          </strong>{' '}
            in what actually lands in the recipient account.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          The Hidden Cost of Payment Gateway FX Spreads
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Traditional credit card processors advertise low transaction rates but quietly recoup
          profits on cross-border conversion. When a business invoices an international client in a
          foreign currency, the gateway converts the funds at an internal retail rate padded with a
          1% to 2% spread. For high-volume international contractor payouts or remote agency
          payroll, using a multi-currency account eliminates currency conversion entirely by holding
          foreign currency until it is needed.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          On the {pair.name} corridor, the settlement rail is <strong>{pair.rail}</strong>.{' '}
          {pair.regulatory}
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-teal-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: {pair.fromSymbol}
            {transferAmount.toLocaleString()} {pair.name} Transfer Comparison
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
                <td className="py-2.5 px-4 font-sans font-semibold text-emerald-600">
                  Mid-Market ({pair.midMarket})
                </td>
                <td className="py-2.5 px-4 text-slate-700">
                  {pair.fromSymbol}
                  {wiseFee.toFixed(2)} ({pair.wisePercent.toFixed(2)}%)
                </td>
                <td className="py-2.5 px-4 text-emerald-600 font-sans font-bold">
                  {pair.fromSymbol}0.00 (0.0%)
                </td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">
                  {pair.toSymbol}
                  {wiseReceived.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold text-blue-700">
                  Payment Gateway Payout
                </td>
                <td className="py-2.5 px-4 font-sans text-rose-600">
                  Retail Markup ({pair.retailRate})
                </td>
                <td className="py-2.5 px-4 text-slate-700">
                  {pair.fromSymbol}
                  {pair.gatewayFixed.toFixed(2)}
                </td>
                <td className="py-2.5 px-4 text-rose-600 font-sans font-bold">
                  ~
                  {pair.fromSymbol}
                  {((transferAmount * pair.gatewayMarkup) / 100).toFixed(2)} ({pair.gatewayMarkup.toFixed(1)}%)
                </td>
                <td className="py-2.5 px-4 text-slate-900">
                  {pair.toSymbol}
                  {gatewayReceived.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans font-semibold text-slate-700">
                  Traditional Bank Wire
                </td>
                <td className="py-2.5 px-4 font-sans text-rose-600">
                  Bank Retail ({(pair.retailRate - 0.011).toFixed(4)})
                </td>
                <td className="py-2.5 px-4 text-rose-600">
                  {pair.fromSymbol}
                  {bankWireFee.toFixed(2)} wire fee
                </td>
                <td className="py-2.5 px-4 text-rose-600 font-sans font-bold">
                  ~
                  {pair.fromSymbol}
                  {(((transferAmount * pair.gatewayMarkup) / 100) * 1.5).toFixed(2)} (3.0%)
                </td>
                <td className="py-2.5 px-4 text-rose-600">
                  {pair.toSymbol}
                  {bankReceived.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {inArticleSlot}
    </section>
  );
}
