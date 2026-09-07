'use client';

import React, { useState, useEffect } from 'react';
import { calculateTax, ALL_TAX_JURISDICTIONS, TaxDirection } from '@/lib/engines/tax-compliance';
import { MetricCard } from '@/components/ui/MetricCard';
import { formatCurrency, formatPercent, cleanNumberInput, parseNumericValue } from '@/lib/utils/formatters';
import { decodeHashData } from '@/lib/utils/hash-sync';
import { Check, Copy, Info, X } from 'lucide-react';

interface TaxCalculatorProps {
  initialJurisdictionCode?: string;
  initialAmount?: number;
  initialDirection?: TaxDirection;
  currencySymbol?: string;
  embedded?: boolean;
}

export function TaxCalculator({
  initialJurisdictionCode = 'CA',
  initialAmount = 250,
  initialDirection = 'add_tax',
  currencySymbol = '$',
  embedded = false,
}: TaxCalculatorProps) {
  const [jurisdictionCode, setJurisdictionCode] = useState<string>(initialJurisdictionCode);
  const [amount, setAmount] = useState<string>(initialAmount !== undefined ? String(initialAmount) : '250');
  const [direction, setDirection] = useState<TaxDirection>(initialDirection);
  const [includeLocal, setIncludeLocal] = useState<boolean>(true);
  const [rateType, setRateType] = useState<'standard' | 'reduced'>('standard');
  const [isB2BReverse, setIsB2BReverse] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const saved = decodeHashData<{
      amount?: number;
      jurisdiction?: string;
      direction?: TaxDirection;
      local?: boolean;
      reverse?: boolean;
    }>();
    if (saved) {
      if (saved.amount !== undefined && saved.amount !== null) setAmount(String(saved.amount));
      if (saved.jurisdiction) setJurisdictionCode(saved.jurisdiction);
      if (saved.direction) setDirection(saved.direction);
      if (typeof saved.local === 'boolean') setIncludeLocal(saved.local);
      if (typeof saved.reverse === 'boolean') setIsB2BReverse(saved.reverse);
    }
  }, []);

  const jurisdiction = ALL_TAX_JURISDICTIONS[jurisdictionCode] || ALL_TAX_JURISDICTIONS.CA;
  const activeCurrency = jurisdiction.currencySymbol || currencySymbol;

  const result = calculateTax({
    amount: parseNumericValue(amount, 0),
    direction,
    jurisdictionCode,
    includeLocalTax: includeLocal,
    rateType,
    isB2BReverseCharge: isB2BReverse,
  });

  const handleCopyBreakdown = () => {
    const text = `FeeKit Tax & Compliance Breakdown:
Jurisdiction: ${result.jurisdictionName}
Calculation: ${direction === 'add_tax' ? 'Net-to-Gross (Add Tax)' : 'Gross-to-Net (Extract Tax)'}
Net Subtotal: ${activeCurrency}${result.netAmount.toFixed(2)}
Tax Amount (${result.taxRatePercentage.toFixed(2)}%): +${activeCurrency}${result.taxAmount.toFixed(2)}
Total Gross Amount: ${activeCurrency}${result.grossAmount.toFixed(2)}
Compliance: ${result.complianceNotice}
Calculated via: https://usefeekit.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const usKeys = Object.keys(ALL_TAX_JURISDICTIONS).filter(k => ALL_TAX_JURISDICTIONS[k].region === 'US');
  const ukKeys = Object.keys(ALL_TAX_JURISDICTIONS).filter(k => ALL_TAX_JURISDICTIONS[k].region === 'UK');
  const euKeys = Object.keys(ALL_TAX_JURISDICTIONS).filter(k => ALL_TAX_JURISDICTIONS[k].region === 'EU');

  return (
    <div className={embedded ? "space-y-6" : "rounded-2xl border border-slate-200 bg-white p-4 sm:p-7 shadow-sm"}>
      {/* Direction & Calculation Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-3 sm:pb-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-slate-500">Mode:</span>
          <span className="font-bold text-slate-900 truncate">
            {direction === 'add_tax' ? 'Net → Gross (Add Tax)' : 'Gross → Net (Extract Tax)'}
          </span>
        </div>

        {/* Direction Switcher */}
        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
          <button
            type="button"
            onClick={() => setDirection('add_tax')}
            className={`tap-spring rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-bold transition-all text-center ${
              direction === 'add_tax'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Add Tax (Net → Gross)
          </button>
          <button
            type="button"
            onClick={() => setDirection('remove_tax')}
            className={`tap-spring rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-bold transition-all text-center ${
              direction === 'remove_tax'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Extract Tax (Gross → Net)
          </button>
        </div>
      </div>

      {/* Jurisdiction Dropdown & Amount Input */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-6">
          <label htmlFor="tax-jurisdiction-select" className="block text-xs font-semibold text-slate-700 mb-2">
            Select US State or UK/EU Jurisdiction
          </label>
          <select
            id="tax-jurisdiction-select"
            value={jurisdictionCode}
            onChange={(e) => setJurisdictionCode(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-sm font-semibold text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-xs"
          >
            <optgroup label="United States (50 States + DC)">
              {usKeys.map((k) => (
                <option key={k} value={k}>
                  {ALL_TAX_JURISDICTIONS[k].name} (State: {(ALL_TAX_JURISDICTIONS[k].standardRate * 100).toFixed(2)}%)
                </option>
              ))}
            </optgroup>
            <optgroup label="United Kingdom (HMRC)">
              {ukKeys.map((k) => (
                <option key={k} value={k}>
                  {ALL_TAX_JURISDICTIONS[k].name} (Standard VAT: {(ALL_TAX_JURISDICTIONS[k].standardRate * 100).toFixed(0)}%)
                </option>
              ))}
            </optgroup>
            <optgroup label="European Union">
              {euKeys.map((k) => (
                <option key={k} value={k}>
                  {ALL_TAX_JURISDICTIONS[k].name} (VAT: {(ALL_TAX_JURISDICTIONS[k].standardRate * 100).toFixed(0)}%)
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="md:col-span-6">
          <label htmlFor="tax-amount-input" className="block text-xs font-semibold text-slate-700 mb-2">
            {direction === 'add_tax' ? 'Net Subtotal (Before Tax)' : 'Gross Invoice Total (Tax-Inclusive)'}
          </label>
          <div className="flex items-center rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-xs overflow-hidden px-3.5">
            <span className="shrink-0 font-mono text-base sm:text-lg font-bold text-slate-400 select-none pr-3 border-r border-slate-200">
              {activeCurrency}
            </span>
            <input
              id="tax-amount-input"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={amount}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setAmount(cleanNumberInput(e.target.value))}
              placeholder="0.00"
              className="w-full bg-transparent py-3 pl-3 pr-2 font-mono text-xl sm:text-2xl font-extrabold text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {amount !== '' && (
              <button
                type="button"
                onClick={() => setAmount('')}
                aria-label="Clear amount"
                className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tax Toggles */}
      <div className="mt-5 flex flex-wrap gap-4 pt-4 border-t border-slate-200 text-xs">
        {jurisdiction.region === 'US' && (
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-slate-900 font-medium">
            <input
              type="checkbox"
              checked={includeLocal}
              onChange={(e) => setIncludeLocal(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>
              Include Average County Surtax (+{formatPercent((jurisdiction.localAverageRate || 0) * 100)})
            </span>
          </label>
        )}

        {jurisdiction.reducedRate !== undefined && (
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Rate Tier:</span>
            <button
              type="button"
              onClick={() => setRateType('standard')}
              className={`px-2.5 py-1 rounded text-xs font-bold ${
                rateType === 'standard' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              Standard ({(jurisdiction.standardRate * 100).toFixed(0)}%)
            </button>
            <button
              type="button"
              onClick={() => setRateType('reduced')}
              className={`px-2.5 py-1 rounded text-xs font-bold ${
                rateType === 'reduced' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              Reduced ({(jurisdiction.reducedRate * 100).toFixed(0)}%)
            </button>
          </div>
        )}

        {jurisdiction.region === 'EU' && (
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-slate-900 font-medium">
            <input
              type="checkbox"
              checked={isB2BReverse}
              onChange={(e) => setIsB2BReverse(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>B2B Cross-Border Reverse Charge (0% VAT with valid VIES ID)</span>
          </label>
        )}
      </div>

      {/* Dynamic Results Grid (2x2 on Mobile, 4x1 on Desktop) */}
      <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <MetricCard
          label="Net Pre-Tax Amount"
          value={formatCurrency(result.netAmount, activeCurrency)}
          subtext="Base merchandise value"
          accent="blue"
        />

        <MetricCard
          label="Tax Collected / Remitted"
          value={`+${formatCurrency(result.taxAmount, activeCurrency)}`}
          subtext={`Rate applied: ${result.taxRatePercentage.toFixed(2)}%`}
          accent="amber"
        />

        <MetricCard
          label="Gross Customer Total"
          value={formatCurrency(result.grossAmount, activeCurrency)}
          subtext="Total receipt invoice price"
          accent="emerald"
        />

        <MetricCard
          label="Combined Tax Rate"
          value={`${result.taxRatePercentage.toFixed(2)}%`}
          subtext={jurisdiction.region === 'US' ? 'State + Local Avg' : 'HMRC Standard VAT'}
          accent="cyan"
        />
      </div>

      {/* Compliance Callout & Copy Button */}
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Filing & Nexus Compliance Notice
            </span>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              {result.complianceNotice}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopyBreakdown}
          className="tap-spring shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-xs w-full sm:w-auto justify-center"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? 'Copied Details!' : 'Copy Tax Breakdown'}</span>
        </button>
      </div>
    </div>
  );
}

export { SalesTaxCalculator } from './SalesTaxCalculator';

