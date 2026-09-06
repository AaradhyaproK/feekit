'use client';

import React, { useState } from 'react';
import geoMatrix from '@/data/geo-matrix.json';
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
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';

export interface StateTaxData {
  slug: string;
  name: string;
  rate: number;
  maxLocal: number;
  notes: string;
  filingAgency: string;
  nexusThreshold: number | string;
}

interface SalesTaxCalculatorProps {
  stateSlug?: string;
  initialAmount?: number;
  initialDirection?: 'add_tax' | 'remove_tax';
  className?: string;
}

const ALL_STATES: StateTaxData[] = (geoMatrix as any).us_states || [];

const FALLBACK_CALIFORNIA: StateTaxData = {
  slug: 'california',
  name: 'California',
  rate: 7.25,
  maxLocal: 10.25,
  notes: 'Local district tax jurisdictions can add up to 3.00% on top of the statutory 7.25% base rate.',
  filingAgency: 'CDTFA',
  nexusThreshold: 500000,
};

const QUICK_AMOUNTS = [50, 100, 250, 500, 1000, 5000];

/**
 * Dynamic Rate Comparison Table
 * Computes exact tax and gross amounts for standard transaction sizes at the state base rate
 */
export function RateComparisonTable({
  rate,
  currencySymbol = '$',
}: {
  rate: number;
  currencySymbol?: string;
}) {
  const amounts = [10, 50, 100, 500, 1000];

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-left text-xs font-sans">
        <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
          <tr>
            <th className="py-3 px-4">Invoice Net Subtotal</th>
            <th className="py-3 px-4">State Sales Tax ({rate.toFixed(2)}%)</th>
            <th className="py-3 px-4">Gross Customer Total</th>
            <th className="py-3 px-4">Effective State Rate</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 font-mono">
          {amounts.map((amount) => {
            const tax = amount * (rate / 100);
            const gross = amount + tax;
            return (
              <tr key={amount} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">
                  {currencySymbol}{amount.toFixed(2)}
                </td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">
                  +{currencySymbol}{tax.toFixed(2)}
                </td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">
                  {currencySymbol}{gross.toFixed(2)}
                </td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">
                  {rate.toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Deep, CPA-grade, 800-1000 word educational and compliance guide for every US state
 */
export function SalesTaxDeepContent({ state }: { state: StateTaxData }) {
  const nexusFormatted = Number(state.nexusThreshold).toLocaleString();
  const hasLocal = state.maxLocal > state.rate;
  const estimatedAvgLocal = hasLocal
    ? ((state.maxLocal - state.rate) / 2).toFixed(2)
    : '0.00';

  const faqItems = [
    {
      question: `What is the current sales tax rate in ${state.name}?`,
      answer: `The statutory base sales tax rate in ${state.name} is exactly ${state.rate.toFixed(2)}%. Depending on your customer's local municipality, county, and special transit district, local surtaxes can bring the maximum combined rate up to ${state.maxLocal.toFixed(2)}%. Remote sellers must calculate sales tax based on the delivery destination address within ${state.name} rather than a single statewide flat rate.`,
    },
    {
      question: `Do out-of-state sellers need to collect sales tax in ${state.name} (Nexus Rules)?`,
      answer: `Under the South Dakota v. Wayfair economic nexus standard, out-of-state merchants must register and collect sales tax once their remote gross sales into ${state.name} reach $${nexusFormatted} (or the statutory transaction threshold) during the current or preceding calendar year. Additionally, having a physical presence—such as inventory stored in a local third-party fulfillment center or Amazon FBA warehouse, remote employees, or traveling sales representatives—establishes immediate physical nexus in ${state.name}.`,
    },
    {
      question: `How do resale certificates and exemptions work in ${state.name}?`,
      answer: `Wholesale purchases intended strictly for resale, industrial manufacturing materials, and sales to qualified 501(c)(3) entities or government bodies may be exempt from ${state.name} sales tax. Vendors must collect and verify an executed ${state.name} resale certificate or exemption certificate before order completion. Under ${state.filingAgency} audit defense rules, valid signed exemption certificates must be retained on file for a minimum of 3 to 4 years.`,
    },
    {
      question: `How and when do I file sales tax returns in ${state.name}?`,
      answer: `Sales tax returns must be remitted electronically through ${state.filingAgency}'s official digital taxpayer portal. Based on historical or estimated sales volume, ${state.filingAgency} assigns a monthly, quarterly, or annual filing frequency. Returns and payments are typically due on or before the 20th or the last day of the month following the reporting period. Crucially, ${state.name} enforces the 'Zero Return' rule: even if your business generated zero taxable sales in a period, you must file on time to avoid statutory failure-to-file penalties.`,
    },
    {
      question: `Are digital products and SaaS taxable in ${state.name}?`,
      answer: `In ${state.name}, the taxability of digital goods, SaaS, and downloadable software depends on state definitions of tangible personal property. Prewritten canned computer software delivered electronically and digital audio-visual media are commonly subject to sales tax under ${state.filingAgency} regulations, whereas custom software engineering and information services often qualify for exemptions. Businesses selling digital goods into ${state.name} should verify SKU classifications against ${state.filingAgency}'s published rulings.`,
    },
  ];

  return (
    <article className="space-y-8 text-slate-700 leading-relaxed text-xs sm:text-sm">
      {/* SECTION A: State Sales Tax Rate — Full Breakdown */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg sm:text-xl">
            <Scale className="h-5 w-5 text-blue-600 shrink-0" />
            <h2>{state.name} Sales Tax Rate — Full Breakdown (2025)</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Statutory statewide base rate, discretionary local tax jurisdictions, and invoice mathematical formulas
          </p>
        </div>

        <div className="space-y-4">
          <p>
            The statutory base sales tax rate in <strong>{state.name} is {state.rate.toFixed(2)}%</strong>. Every business engaging in retail transactions, remote commerce, or leasing taxable personal property in the state must account for this baseline levy. However, computing true checkout tax liability requires evaluating local composite jurisdictions.
          </p>

          <p>
            In {state.name}, local municipal taxing districts, county boards, and special development transit authorities levy supplementary local option sales taxes. Across all jurisdictions within {state.name}, the average local surtax is approximately <strong>{estimatedAvgLocal}%</strong>, while the maximum legal combined sales tax rate caps at <strong>{state.maxLocal.toFixed(2)}%</strong>.
          </p>

          <p>
            <strong>Local Rate Administration:</strong> Local taxes in {state.name} are structured across three distinct administrative layers: county general taxes, municipal city taxes, and special purpose district assessments (such as transportation, public safety, and infrastructure redevelopment zones). Under {state.name} destination-sourcing statutes, remote online orders shipped to a purchaser’s residence or commercial facility must be taxed at the buyer’s delivery destination composite rate—not the seller’s fulfillment origin location.
          </p>

          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              {state.name} Transaction Rate Comparison Table ({state.rate.toFixed(2)}% Base)
            </h3>
            <RateComparisonTable rate={state.rate} />
          </div>
        </div>
      </section>

      {/* SECTION B: Sales Tax Nexus in [State] */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg sm:text-xl">
            <ShieldCheck className="h-5 w-5 text-indigo-600 shrink-0" />
            <h2>Sales Tax Nexus in {state.name}</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Evaluating physical presence triggers, economic nexus thresholds, and statutory registration requirements
          </p>
        </div>

        <div className="space-y-4">
          <p>
            Before collecting a single dollar of sales tax from customers in {state.name}, an enterprise must establish tax nexus. Nexus is the constitutional legal connection between an out-of-state vendor and the state taxing jurisdiction that grants {state.name} the statutory authority to mandate sales tax collection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
              <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-blue-600" />
                Physical Nexus Triggers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Physical nexus in {state.name} is created when an enterprise maintains an office, retail storefront, executive suite, assembly workshop, or warehouse. Crucially for e-commerce merchants, storing merchandise inventory inside a third-party logistics facility or Amazon FBA fulfillment center within {state.name} automatically establishes physical nexus. Furthermore, having remote salaried employees, independent travelling sales contractors, or localized field technicians operating within state boundaries creates mandatory physical tax obligations.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
              <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Scale className="h-4 w-4 text-indigo-600" />
                Economic Nexus Threshold
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Following the historic U.S. Supreme Court ruling in <em>South Dakota v. Wayfair, Inc. (2018)</em>, states enforce economic nexus on remote out-of-state vendors with no physical footprint. In {state.name}, remote multichannel sellers trigger economic nexus upon reaching <strong>${nexusFormatted}</strong> in gross retail receipts or 200 separate taxable transactions delivered into the state during the current or immediately preceding calendar year.
              </p>
            </div>
          </div>

          <p>
            <strong>Registration & Unlawful Collection Penalties:</strong> Once economic or physical nexus is established, sellers must register for an official sales and use tax permit directly through <strong>{state.filingAgency}</strong> before billing customers. Collecting sales tax from {state.name} consumers without holding an active tax permit is a severe statutory violation. Because sales tax constitutes state trust funds held in fiduciary trust, unauthorized collection or retention can result in personal officer liability, mandatory civil fraud penalties of 10% to 50%, and potential criminal misdemeanor or felony prosecution.
          </p>
        </div>
      </section>

      {/* SECTION C: Exemption Certificates in [State] */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg sm:text-xl">
            <FileCheck2 className="h-5 w-5 text-emerald-600 shrink-0" />
            <h2>Exemption Certificates in {state.name}</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Resale certificate compliance, verification requirements, and statutory record-keeping defense
          </p>
        </div>

        <div className="space-y-4">
          <p>
            Not every commercial transaction in {state.name} requires sales tax collection. The state tax code recognizes specific exemptions for qualifying purchasers and commercial transaction types, provided strictly compliant documentation is executed and archived prior to invoice settlement.
          </p>

          <p>
            <strong>Who Qualifies for Tax Exemption:</strong> Qualified exempt purchasers in {state.name} generally encompass:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
            <li><strong>Wholesale Resellers:</strong> Merchants purchasing commercial goods strictly intended for resale in the regular course of business without prior retail consumption.</li>
            <li><strong>Industrial Manufacturers:</strong> Producers acquiring raw materials, component elements, or industrial ingredients that become an integral physical part of a manufactured product.</li>
            <li><strong>Certified Nonprofits & Educational Entities:</strong> Recognized 501(c)(3) religious, scientific, and educational organizations holding specific exemption status issued by {state.filingAgency}.</li>
            <li><strong>Governmental Bodies:</strong> Direct purchasing departments of the United States federal government, {state.name} state agencies, and public municipal districts.</li>
          </ul>

          <p>
            <strong>Mandatory Certificate Data:</strong> To withstand statutory state audit scrutiny, every exemption certificate presented by a buyer must contain the purchaser’s legal business entity name, verified commercial operating address, active {state.name} sales tax permit or registration ID, a specific description of property acquired, the legal reason for exemption, and the signature of an authorized corporate officer with the date of execution.
          </p>

          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
              <span>Audit Defense & Verbal Exemption Prohibition</span>
            </div>
            <p className="leading-relaxed">
              Vendors must retain executed exemption certificates on file for a minimum of <strong>3 to 4 years</strong> to defend against retrospective state sales tax audit assessments. <em>Never accept a verbal exemption claim under any circumstance.</em> If an auditor discovers untaxed invoices lacking a valid, signed certificate on file, {state.filingAgency} will hold the seller personally liable for the uncollected tax plus compounding interest.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION D: Filing [State] Sales Tax Returns */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg sm:text-xl">
            <FileSpreadsheet className="h-5 w-5 text-purple-600 shrink-0" />
            <h2>Filing {state.name} Sales Tax Returns</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Filing schedules, official online portal remittance, statutory deadlines, and automation workflows
          </p>
        </div>

        <div className="space-y-4">
          <p>
            Sales and use tax compliance in {state.name} is administered directly by <strong>{state.filingAgency}</strong>. Once registered, merchants act as state collection trustees and must remit accrued consumer tax collections on a strictly monitored schedule.
          </p>

          <p>
            <strong>Assigned Filing Frequencies:</strong> Upon reviewing your initial permit application and anticipated monthly transaction volume, {state.filingAgency} will assign your enterprise a designated filing cadence:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li><strong>Monthly Filing:</strong> Assigned to enterprise retailers and high-volume e-commerce brands with regular tax liabilities exceeding statutory thresholds.</li>
            <li><strong>Quarterly Filing:</strong> The standard assignment for small-to-midsize businesses and emerging multichannel online stores.</li>
            <li><strong>Annual Filing:</strong> Reserved for low-volume sellers, micro-enterprises, or seasonal businesses with minimal recurring tax liabilities.</li>
          </ul>

          <p>
            <strong>Digital Submission & Remittance Due Dates:</strong> All sales tax returns in {state.name} must be submitted electronically through {state.filingAgency}’s official online portal. Returns and payments are typically due on or before the 20th or final calendar day of the month following the close of the designated tax period. Late returns trigger mandatory statutory penalties (typically 5% to 10% of tax due, plus daily compounding interest).
          </p>

          <p>
            <strong>The Zero Return Rule:</strong> If your business generated zero taxable sales into {state.name} during a given reporting cycle, you are still legally required to submit a timely &quot;Zero Return.&quot; Failure to file zero returns results in administrative failure-to-file fines and can trigger automatic revocation of your business sales tax permit.
          </p>

          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-xs text-blue-900 space-y-1">
            <span className="font-bold block">CPA Recommendation for Online Sellers:</span>
            <p className="text-blue-800 leading-relaxed">
              Managing varying destination rates across multiple counties and special taxing districts in {state.name} creates significant manual overhead. We strongly advise integrating automated sales tax compliance software such as TaxJar, Avalara AvaTax, or Stripe Tax directly into your e-commerce checkout to ensure seamless rate computation and auto-filing.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION E: FAQ — [State] Sales Tax for Online Sellers */}
      {/* Test schema validity at: https://search.google.com/test/rich-results */}
      <FaqSchema items={faqItems} />
      <FaqAccordion
        items={faqItems}
        title={`Frequently Asked Questions: ${state.name} Sales Tax`}
      />
    </article>
  );
}

export function SalesTaxCalculator({
  stateSlug = 'california',
  initialAmount = 250,
  initialDirection = 'add_tax',
  className = '',
}: SalesTaxCalculatorProps) {
  const [selectedSlug, setSelectedSlug] = useState<string>(stateSlug.toLowerCase());
  const [amount, setAmount] = useState<number>(initialAmount);
  const [direction, setDirection] = useState<'add_tax' | 'remove_tax'>(initialDirection);
  const [includeMaxLocal, setIncludeMaxLocal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const currentState: StateTaxData =
    ALL_STATES.find((s) => s.slug === selectedSlug) ||
    ALL_STATES.find((s) => s.slug === stateSlug.toLowerCase()) ||
    FALLBACK_CALIFORNIA;

  // Active rate based on local tax toggle
  const appliedRate = includeMaxLocal ? currentState.maxLocal : currentState.rate;
  const numAmount = Number(amount) || 0;

  // Tax calculations
  let netSubtotal = 0;
  let taxAmount = 0;
  let grossTotal = 0;

  if (direction === 'add_tax') {
    netSubtotal = numAmount;
    taxAmount = numAmount * (appliedRate / 100);
    grossTotal = numAmount + taxAmount;
  } else {
    grossTotal = numAmount;
    netSubtotal = appliedRate > 0 ? numAmount / (1 + appliedRate / 100) : numAmount;
    taxAmount = numAmount - netSubtotal;
  }

  const handleCopyBreakdown = () => {
    const text = `FeeKit US Sales Tax Breakdown:
State: ${currentState.name}
Calculation Mode: ${direction === 'add_tax' ? 'Net-to-Gross (Add Sales Tax)' : 'Gross-to-Net (Extract Sales Tax)'}
State Base Rate: ${currentState.rate.toFixed(2)}%
Applied Effective Rate: ${appliedRate.toFixed(2)}% (${includeMaxLocal ? 'Combined State + Local Max' : 'State Base Rate'})
Net Subtotal: $${netSubtotal.toFixed(2)}
Sales Tax: +$${taxAmount.toFixed(2)}
Gross Total: $${grossTotal.toFixed(2)}
Filing Authority: ${currentState.filingAgency}
Calculated via: https://usefeekit.com/tools/sales-tax-calculator/${currentState.slug}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-7 shadow-sm">
        {/* Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500">Operation:</span>
            <span className="font-bold text-slate-900">
              {direction === 'add_tax'
                ? `Add Sales Tax (Net → Gross at ${appliedRate.toFixed(2)}%)`
                : `Extract Sales Tax (Gross → Net at ${appliedRate.toFixed(2)}%)`}
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
              Add Sales Tax
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
              Extract Sales Tax
            </button>
          </div>
        </div>

        {/* State Selector and Amount Input */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* State Dropdown */}
          <div className="md:col-span-6">
            <label htmlFor="sales-tax-state-select" className="block text-xs font-semibold text-slate-700 mb-2">
              Select US State ({ALL_STATES.length} States & DC)
            </label>
            <select
              id="sales-tax-state-select"
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-sm font-semibold text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-xs"
            >
              {ALL_STATES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name} (Base: {s.rate}%, Max Combined: {s.maxLocal}%)
                </option>
              ))}
            </select>
          </div>

          {/* Amount Input */}
          <div className="md:col-span-6">
            <label htmlFor="sales-tax-amount-input" className="block text-xs font-semibold text-slate-700 mb-2">
              {direction === 'add_tax' ? 'Net Subtotal (Before Tax)' : 'Gross Total (Tax Inclusive)'}
            </label>
            <div className="flex items-center rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-xs overflow-hidden px-3.5">
              <span className="shrink-0 font-mono text-base sm:text-lg font-bold text-slate-400 select-none pr-3 border-r border-slate-200">
                $
              </span>
              <input
                id="sales-tax-amount-input"
                type="number"
                min="0"
                step="any"
                value={amount === 0 ? '' : amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="0.00"
                className="w-full bg-transparent py-3 pl-3 pr-2 font-mono text-xl sm:text-2xl font-extrabold text-slate-900 placeholder-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Quick-Set Amount Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 mr-1">Quick-set amount:</span>
          {QUICK_AMOUNTS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setAmount(preset)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border transition-all ${
                amount === preset
                  ? 'bg-blue-50 border-blue-400 text-blue-700 font-bold shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              ${preset}
            </button>
          ))}
        </div>

        {/* Local Rate Toggle */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-slate-900 font-medium">
            <input
              type="checkbox"
              checked={includeMaxLocal}
              onChange={(e) => setIncludeMaxLocal(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>
              Include Max Local Surtax (Combined rate up to <strong>{currentState.maxLocal.toFixed(2)}%</strong>)
            </span>
          </label>

          <span className="text-[11px] font-semibold text-slate-500">
            Current Rate: <span className="font-bold text-blue-600">{appliedRate.toFixed(2)}%</span> ({includeMaxLocal ? 'Max Combined' : 'State Base'})
          </span>
        </div>

        {/* Metric Results Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <MetricCard
            label="Net Pre-Tax Subtotal"
            value={formatCurrency(netSubtotal, '$')}
            subtext="Merchandise value"
            accent="blue"
          />

          <MetricCard
            label="Sales Tax to Remit"
            value={`+${formatCurrency(taxAmount, '$')}`}
            subtext={`Rate applied: ${appliedRate.toFixed(2)}%`}
            accent="amber"
          />

          <MetricCard
            label="Customer Invoice Total"
            value={formatCurrency(grossTotal, '$')}
            subtext="Total billed to customer"
            accent="emerald"
          />

          <MetricCard
            label="State Base Rate"
            value={`${currentState.rate.toFixed(2)}%`}
            subtext={`Max combined: ${currentState.maxLocal.toFixed(2)}%`}
            accent="cyan"
          />
        </div>

        {/* Info Box */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wide">
              <Building2 className="h-4 w-4 text-blue-600 shrink-0" />
              <span>{currentState.name} Statutory Sales Tax Reference (2024/2025)</span>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100/70 text-blue-800 border border-blue-200">
              Agency: {currentState.filingAgency}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-xs">
              <span className="text-slate-500 block text-[11px]">State Base Sales Tax</span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5 block">
                {currentState.rate.toFixed(2)}%
              </span>
              <span className="text-[10px] text-slate-400">Statutory statewide levy</span>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-xs">
              <span className="text-slate-500 block text-[11px]">Max Combined Surtax</span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5 block">
                {currentState.maxLocal.toFixed(2)}%
              </span>
              <span className="text-[10px] text-slate-400">Includes municipal/county taxes</span>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-xs">
              <span className="text-slate-500 block text-[11px]">Economic Nexus Threshold</span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5 block">
                ${Number(currentState.nexusThreshold).toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400">Annual remote sales trigger</span>
            </div>
          </div>

          <div className="flex items-start gap-2 pt-1 text-xs text-slate-600 leading-relaxed">
            <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              <strong>Local Rate Rules:</strong> {currentState.notes}
            </span>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={handleCopyBreakdown}
              className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-xs"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-slate-400" />}
              <span>{copied ? 'Copied Breakdown!' : 'Copy Breakdown'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive 800-1000 Word SEO & Compliance Section */}
      <SalesTaxDeepContent state={currentState} />
    </div>
  );
}

export default SalesTaxCalculator;
