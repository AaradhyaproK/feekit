'use client';

import React, { useState } from 'react';
import { MetricCard } from '@/components/ui/MetricCard';
import { formatCurrency } from '@/lib/utils/formatters';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { FaqSchema } from '@/components/seo/FaqSchema';
import {
  Check,
  Copy,
  Info,
  Building2,
  ShieldCheck,
  Scale,
  FileCheck2,
  FileSpreadsheet,
  AlertTriangle,
} from 'lucide-react';

export interface VatCalculatorProps {
  initialAmount?: number;
  initialDirection?: 'add_tax' | 'remove_tax';
  currencySymbol?: string;
  countryCode?: string;
  className?: string;
}

const QUICK_AMOUNTS = [50, 100, 250, 500, 1000, 5000];

// Test schema validity at: https://search.google.com/test/rich-results
export const UK_VAT_FAQS = [
  {
    question: 'What is the UK VAT registration threshold and when is it mandatory?',
    answer:
      'As of 2024–2026, the compulsory HMRC VAT registration threshold is £90,000 in taxable turnover over any rolling 12-month period (increased from £85,000). If your cumulative taxable turnover exceeds £90,000 at the end of any month, or you anticipate exceeding £90,000 in the next 30 days alone, you must register with HMRC within 30 days. Businesses earning below £90,000 may register voluntarily to reclaim input VAT on commercial purchases, equipment, and operating costs.',
  },
  {
    question: 'How does the UK Domestic Reverse Charge (DRC) work for B2B transactions?',
    answer:
      'The Domestic Reverse Charge is an anti-fraud VAT mechanism primarily enforced in the UK construction industry (under the Construction Industry Scheme / CIS) and cross-border B2B digital services. When the reverse charge applies, the supplier issues an invoice with 0% VAT charged and explicitly cites Section 55A of the VATA 1994. The buyer then accounts for both the output VAT and input VAT simultaneously on their own HMRC VAT return, eliminating cash exchange of VAT between contractors.',
  },
  {
    question: 'What are the Making Tax Digital (MTD) requirements for UK businesses?',
    answer:
      'Under HMRC Making Tax Digital (MTD) legislation, all VAT-registered UK entities—regardless of turnover level—must maintain functional digital records and submit their quarterly VAT returns directly through MTD-compatible software (such as Xero, QuickBooks, FreeAgent, or authorized API bridging spreadsheets). HMRC has permanently closed the legacy web portal for VAT filing, and non-compliant manual filings trigger points-based financial penalty regimes.',
  },
  {
    question: 'What is the VAT Flat Rate Scheme and how is it calculated?',
    answer:
      'The HMRC Flat Rate Scheme is an optional simplified accounting regime available to small businesses with expected taxable turnover of up to £150,000 (excluding VAT). Instead of calculating exact input and output VAT on every invoice, you charge customers the standard 20% VAT but pay HMRC a fixed lower percentage of your gross turnover (typically between 4% and 16.5% depending on your industry sector). However, if your spending on relevant goods is less than 2% of your turnover or £1,000 per year, you are classified as a "limited cost business" and must pay the maximum 16.5% flat rate.',
  },
  {
    question: 'What is the difference between zero-rated and exempt goods under UK VAT?',
    answer:
      'Zero-rated supplies (such as most standard groceries, books, printed newspapers, children\'s clothes and shoes, and exported goods) are taxable at 0% VAT. Crucially, businesses selling zero-rated goods can still register for VAT and reclaim 100% of input VAT incurred on their business expenses. In contrast, VAT-exempt supplies (such as financial services, insurance, physical postal services, healthcare, and education) have no VAT charged, but the seller cannot register for VAT or reclaim any input tax incurred on costs associated with those exempt activities.',
  },
];

export function VatRateComparisonTable({
  rate,
  currencySymbol = '£',
}: {
  rate: number;
  currencySymbol?: string;
}) {
  const amounts = [50, 100, 250, 500, 1000, 5000];

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-left text-xs font-sans">
        <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
          <tr>
            <th className="py-3 px-4">Net Subtotal (Ex. VAT)</th>
            <th className="py-3 px-4">VAT Amount ({rate.toFixed(1)}%)</th>
            <th className="py-3 px-4">Gross Total (Inc. VAT)</th>
            <th className="py-3 px-4">Effective Rate</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 font-mono">
          {amounts.map((amount) => {
            const vat = amount * (rate / 100);
            const gross = amount + vat;
            return (
              <tr key={amount} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">
                  {currencySymbol}{amount.toFixed(2)}
                </td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">
                  +{currencySymbol}{vat.toFixed(2)}
                </td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">
                  {currencySymbol}{gross.toFixed(2)}
                </td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">
                  {rate.toFixed(1)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function VatCalculator({
  initialAmount = 500,
  initialDirection = 'add_tax',
  currencySymbol = '£',
  className = '',
}: VatCalculatorProps) {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [direction, setDirection] = useState<'add_tax' | 'remove_tax'>(initialDirection);
  const [ratePreset, setRatePreset] = useState<'standard' | 'reduced' | 'zero' | 'custom'>('standard');
  const [customRate, setCustomRate] = useState<number>(20);
  const [isReverseCharge, setIsReverseCharge] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Determine active rate percentage
  let activeRate = 20;
  if (ratePreset === 'reduced') activeRate = 5;
  else if (ratePreset === 'zero') activeRate = 0;
  else if (ratePreset === 'custom') activeRate = customRate;

  if (isReverseCharge) {
    activeRate = 0;
  }

  const numAmount = Number(amount) || 0;

  // Compute tax amounts
  let netAmount = 0;
  let vatAmount = 0;
  let grossAmount = 0;

  if (direction === 'add_tax') {
    netAmount = numAmount;
    vatAmount = isReverseCharge ? 0 : netAmount * (activeRate / 100);
    grossAmount = netAmount + vatAmount;
  } else {
    grossAmount = numAmount;
    netAmount = isReverseCharge || activeRate === 0 ? grossAmount : grossAmount / (1 + activeRate / 100);
    vatAmount = grossAmount - netAmount;
  }

  const handleCopyBreakdown = () => {
    const text = `FeeKit UK VAT Breakdown:
Calculation: ${direction === 'add_tax' ? 'Add VAT (Net → Gross)' : 'Remove VAT (Gross → Net)'}
VAT Rate: ${isReverseCharge ? '0% (Domestic Reverse Charge Applied)' : `${activeRate.toFixed(1)}%`}
Net Amount (Ex. VAT): ${currencySymbol}${netAmount.toFixed(2)}
VAT Amount: ${isReverseCharge ? '£0.00 (Buyer Accounts for VAT)' : `+${currencySymbol}${vatAmount.toFixed(2)}`}
Gross Amount (Inc. VAT): ${currencySymbol}${grossAmount.toFixed(2)}
Compliance: HMRC Making Tax Digital (MTD) Compliant
Calculated via: https://usefeekit.com/tools/vat-calculator/united-kingdom`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`space-y-8 ${className}`.trim()}>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-7 shadow-sm">
        {/* Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500">Operation:</span>
            <span className="font-bold text-slate-900">
              {direction === 'add_tax'
                ? `Add VAT (Net → Gross at ${activeRate.toFixed(1)}%)`
                : `Extract VAT (Gross → Net at ${activeRate.toFixed(1)}%)`}
            </span>
          </div>

          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              type="button"
              onClick={() => setDirection('add_tax')}
              className={`tap-spring rounded-lg px-3 py-1.5 text-xs font-bold transition-all text-center ${
                direction === 'add_tax'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Add VAT (Net → Gross)
            </button>
            <button
              type="button"
              onClick={() => setDirection('remove_tax')}
              className={`tap-spring rounded-lg px-3 py-1.5 text-xs font-bold transition-all text-center ${
                direction === 'remove_tax'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Remove VAT (Gross → Net)
            </button>
          </div>
        </div>

        {/* Amount Input and Rate Selectors */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Amount Input */}
          <div className="md:col-span-6">
            <label htmlFor="vat-amount-input" className="block text-xs font-semibold text-slate-700 mb-2">
              {direction === 'add_tax' ? 'Net Amount (Excluding VAT)' : 'Gross Amount (Including VAT)'}
            </label>
            <div className="relative rounded-xl shadow-xs">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 font-semibold text-base">
                {currencySymbol}
              </span>
              <input
                id="vat-amount-input"
                type="number"
                min="0"
                step="any"
                value={amount || ''}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                placeholder="500.00"
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-9 pr-4 text-base font-bold text-slate-900 placeholder:text-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Quick Amount Pills */}
            <div className="mt-2.5 flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] text-slate-400 font-medium mr-1">Quick:</span>
              {QUICK_AMOUNTS.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`tap-spring rounded-md border px-2 py-0.5 text-xs font-medium transition-all ${
                    amount === val
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {currencySymbol}{val}
                </button>
              ))}
            </div>
          </div>

          {/* Rate Preset Selector */}
          <div className="md:col-span-6">
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              UK HMRC VAT Rate Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => {
                  setRatePreset('standard');
                  setIsReverseCharge(false);
                }}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  ratePreset === 'standard' && !isReverseCharge
                    ? 'border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-100 font-bold'
                    : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-extrabold">20.0%</div>
                <div className="text-[10px] text-slate-500">Standard</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setRatePreset('reduced');
                  setIsReverseCharge(false);
                }}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  ratePreset === 'reduced' && !isReverseCharge
                    ? 'border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-100 font-bold'
                    : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-extrabold">5.0%</div>
                <div className="text-[10px] text-slate-500">Reduced</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setRatePreset('zero');
                  setIsReverseCharge(false);
                }}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  ratePreset === 'zero' && !isReverseCharge
                    ? 'border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-100 font-bold'
                    : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-extrabold">0.0%</div>
                <div className="text-[10px] text-slate-500">Zero-Rated</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setRatePreset('custom');
                  setIsReverseCharge(false);
                }}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  ratePreset === 'custom' && !isReverseCharge
                    ? 'border-blue-600 bg-blue-50/70 text-blue-900 ring-2 ring-blue-100 font-bold'
                    : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-extrabold">{customRate}%</div>
                <div className="text-[10px] text-slate-500">Flat / Custom</div>
              </button>
            </div>

            {ratePreset === 'custom' && (
              <div className="mt-3 flex items-center gap-2">
                <label htmlFor="custom-rate-input" className="text-xs text-slate-600 font-medium">
                  Custom Percentage:
                </label>
                <input
                  id="custom-rate-input"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={customRate}
                  onChange={(e) => setCustomRate(parseFloat(e.target.value) || 0)}
                  className="w-24 rounded-lg border border-slate-300 px-2 py-1 text-xs font-bold text-slate-900 focus:border-blue-600 focus:outline-none"
                />
                <span className="text-xs text-slate-500">%</span>
              </div>
            )}
          </div>
        </div>

        {/* Domestic Reverse Charge Toggle */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-slate-900 font-medium">
            <input
              type="checkbox"
              checked={isReverseCharge}
              onChange={(e) => setIsReverseCharge(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>
              Apply <strong>UK Domestic Reverse Charge (DRC)</strong> (Section 55A VATA 1994 for B2B / CIS)
            </span>
          </label>

          <span className="text-[11px] font-semibold text-slate-500">
            Effective Applied Rate:{' '}
            <span className="font-bold text-blue-600">
              {isReverseCharge ? '0.0% (DRC)' : `${activeRate.toFixed(1)}%`}
            </span>
          </span>
        </div>

        {isReverseCharge && (
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-900 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Reverse Charge Activated:</strong> 0% VAT is billed on the invoice. The recipient commercial contractor is legally obligated to account for both output and input VAT on their HMRC VAT return.
            </div>
          </div>
        )}

        {/* Metric Results Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <MetricCard
            label="Net Amount (Ex. VAT)"
            value={formatCurrency(netAmount, currencySymbol)}
            subtext="Pre-tax invoice total"
            accent="blue"
          />

          <MetricCard
            label="HMRC VAT to Remit"
            value={isReverseCharge ? '£0.00' : `+${formatCurrency(vatAmount, currencySymbol)}`}
            subtext={isReverseCharge ? 'Reverse charge applies' : `At ${activeRate.toFixed(1)}% VAT`}
            accent="amber"
          />

          <MetricCard
            label="Gross Amount (Inc. VAT)"
            value={formatCurrency(grossAmount, currencySymbol)}
            subtext="Total payable by client"
            accent="emerald"
          />

          <MetricCard
            label="HMRC Standard Rate"
            value="20.0%"
            subtext="Threshold: £90,000"
            accent="cyan"
          />
        </div>

        {/* HMRC Reference Box & Copy Button */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wide">
              <Building2 className="h-4 w-4 text-blue-600 shrink-0" />
              <span>UK HMRC VAT Regulatory Summary (2024–2026)</span>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100/70 text-blue-800 border border-blue-200">
              Agency: HMRC (UK)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-xs">
              <span className="text-slate-500 block text-[11px]">Compulsory Registration</span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5 block">£90,000</span>
              <span className="text-[10px] text-slate-400">Rolling 12-month turnover</span>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-xs">
              <span className="text-slate-500 block text-[11px]">Flat Rate Turnover Cap</span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5 block">£150,000</span>
              <span className="text-[10px] text-slate-400">Excluding VAT annually</span>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-xs">
              <span className="text-slate-500 block text-[11px]">Digital Submission</span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5 block">MTD Mandatory</span>
              <span className="text-[10px] text-slate-400">Direct API filing required</span>
            </div>
          </div>

          <div className="flex items-start gap-2 pt-1 text-xs text-slate-600 leading-relaxed">
            <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              <strong>Filing Deadline:</strong> Returns and electronic payments are due 1 calendar month and 7 days after the end of your designated VAT accounting quarter.
            </span>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={handleCopyBreakdown}
              className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-xs"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-slate-400" />}
              <span>{copied ? 'Copied Breakdown!' : 'Copy VAT Breakdown'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Authoritative UK Educational & Rate Benchmark Content */}
      <article className="space-y-8 text-slate-700 leading-relaxed text-xs sm:text-sm">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg sm:text-xl">
              <Scale className="h-5 w-5 text-blue-600 shrink-0" />
              <h2>UK Value Added Tax (VAT) Calculation Matrix & Formula</h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Standard commercial invoice volume tiers at the statutory 20% standard rate
            </p>
          </div>

          <div className="space-y-4">
            <p>
              In the United Kingdom, Value Added Tax (VAT) is administered by HM Revenue and Customs (HMRC). The statutory standard rate is <strong>20.0%</strong>, applicable to the vast majority of commercial goods and business services. When preparing invoices or quoting prospective clients, understanding whether figures are quoted net of VAT or gross inclusive of VAT is essential to preventing cash flow deficits.
            </p>

            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Standard UK Transaction Rate Comparison Table (20.0% VAT)
              </h3>
              <VatRateComparisonTable rate={20} currencySymbol={currencySymbol} />
            </div>
          </div>
        </section>

        {/* MTD & DRC Compliance Guide */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg sm:text-xl">
              <FileSpreadsheet className="h-5 w-5 text-purple-600 shrink-0" />
              <h2>Making Tax Digital (MTD) & Compliance Protocols</h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Digital record-keeping mandates, API transmission rules, and quarterly filing deadlines
            </p>
          </div>

          <div className="space-y-4">
            <p>
              All VAT-registered businesses in the UK are mandated by law to comply with HMRC&apos;s Making Tax Digital (MTD) framework. This requires maintaining unbroken digital audit trails from the point of invoice issuance through to digital return submission via HMRC-approved software APIs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
                <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  MTD Digital Links Requirement
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Data transferred between accounting software, spreadsheets, and reporting databases must use automated digital links (such as formulas, automated imports, or API connectors). Manual copy-and-pasting of financial figures is explicitly prohibited under MTD audit regulations.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
                <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <FileCheck2 className="h-4 w-4 text-indigo-600" />
                  HMRC Default Surcharge System
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  HMRC operates a points-based penalty system for late VAT returns. Accumulating penalty points through missed deadlines triggers automatic financial fines of £200 per late submission, alongside escalating interest on outstanding tax liabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Authoritative UK FAQ Items with Schema & Details/Summary */}
        {/* Test schema validity at: https://search.google.com/test/rich-results */}
        <FaqSchema items={UK_VAT_FAQS} />
        <FaqAccordion
          items={UK_VAT_FAQS}
          title="Frequently Asked Questions: UK VAT Compliance & Regulations"
        />
      </article>
    </div>
  );
}

export default VatCalculator;
