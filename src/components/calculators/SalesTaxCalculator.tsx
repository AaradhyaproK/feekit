'use client';

import React, { useState } from 'react';
import geoMatrix from '@/data/geo-matrix.json';
import { MetricCard } from '@/components/ui/MetricCard';
import { formatCurrency } from '@/lib/utils/formatters';
import {
  Check,
  Copy,
  Info,
  Building2,
  ShieldCheck,
  Scale,
  DollarSign,
  TrendingUp,
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

      {/* SEO Content Section */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg">
            <Scale className="h-5 w-5 text-blue-600 shrink-0" />
            <h2>{currentState.name} Sales Tax Rate & Compliance Details</h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            CPA-audited statutory guidelines for retail businesses, remote merchants, and marketplace sellers
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {currentState.slug === 'california' ? (
            <p>
              <strong>The California state base sales tax rate is 7.25%</strong>. Under regulations administered by the California Department of Tax and Fee Administration (CDTFA), counties, municipalities, and regional transportation districts impose supplementary district sales and use taxes (ranging from 0.10% to 3.00%), which can bring the maximum combined sales tax rate up to 10.25%.
            </p>
          ) : (
            <p>
              <strong>The {currentState.name} state base sales tax rate is {currentState.rate.toFixed(2)}%</strong>. Depending on the purchaser’s delivery jurisdiction, local municipalities and counties levy supplementary local option taxes up to a maximum combined rate of {currentState.maxLocal.toFixed(2)}%.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>Economic Nexus & Remote Sellers</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Following <em>South Dakota v. Wayfair</em>, out-of-state remote merchants who generate over <strong>${Number(currentState.nexusThreshold).toLocaleString()}</strong> in gross retail sales into {currentState.name} establish economic nexus and must register to collect and remit destination sales tax.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>State Tax Authority & Filing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All registered merchants remit collected sales and use taxes directly to <strong>{currentState.filingAgency}</strong>. Timely electronic filing is required according to your designated monthly, quarterly, or annual remittance schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SalesTaxCalculator;
