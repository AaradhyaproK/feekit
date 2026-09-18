'use client';

import React, { useState, useEffect } from 'react';
import { calculateFreelanceRate } from '@/lib/engines/freelance-rate';
import { MetricCard } from '@/components/ui/MetricCard';
import { formatCurrency, cleanNumberInput, parseNumericValue } from '@/lib/utils/formatters';
import { decodeHashData } from '@/lib/utils/hash-sync';
import { Check, Copy, FileCheck, X, Info } from 'lucide-react';

interface FreelanceRateCalculatorProps {
  initialRole?: string;
  initialNet?: number;
  initialOverhead?: number;
  currencySymbol?: string;
  embedded?: boolean;
}

export function FreelanceRateCalculator({
  initialRole = 'Fullstack Developer',
  initialNet = 95000,
  initialOverhead = 10000,
  currencySymbol = '$',
  embedded = false,
}: FreelanceRateCalculatorProps) {
  const [role, setRole] = useState<string>(initialRole);
  const [netIncome, setNetIncome] = useState<string>(initialNet !== undefined ? String(initialNet) : '95000');
  const [billableHours, setBillableHours] = useState<number>(25);
  const [workingWeeks, setWorkingWeeks] = useState<string>('48');
  const [overhead, setOverhead] = useState<string>(initialOverhead !== undefined ? String(initialOverhead) : '10000');
  const [taxRate, setTaxRate] = useState<string>('28');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const saved = decodeHashData<{
      role?: string;
      net?: number;
      hours?: number;
      weeks?: number;
      overhead?: number;
      tax?: number;
    }>();
    if (saved) {
      if (saved.role) setRole(saved.role);
      if (typeof saved.net === 'number') setNetIncome(String(saved.net));
      if (typeof saved.hours === 'number') setBillableHours(saved.hours);
      if (typeof saved.weeks === 'number') setWorkingWeeks(String(saved.weeks));
      if (typeof saved.overhead === 'number') setOverhead(String(saved.overhead));
      if (typeof saved.tax === 'number') setTaxRate(String(Math.round(saved.tax * 100)));
    }
  }, []);

  const result = calculateFreelanceRate({
    desiredNetIncome: parseNumericValue(netIncome, 0),
    workingWeeksPerYear: parseNumericValue(workingWeeks, 48),
    billableHoursPerWeek: billableHours,
    annualOverhead: parseNumericValue(overhead, 0),
    taxRateEstimated: parseNumericValue(taxRate, 28) / 100,
    currencySymbol,
    roleTitle: role,
  });

  const handleCopyProposal = () => {
    navigator.clipboard.writeText(result.invoiceProposalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={embedded ? "space-y-5 sm:space-y-6" : "rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-7 shadow-sm space-y-5"}>
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-slate-500">Benchmark Role:</span>
          <span className="font-bold text-slate-900">{role}</span>
        </div>
        <span className="text-xs text-slate-500 font-medium hidden sm:inline">Compensation & Overhead Model</span>
      </div>

      {/* Inputs Grid */}
      <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        <div>
          <label htmlFor="freelance-target-net-income" className="block text-xs font-semibold text-slate-700 mb-2">
            Desired Annual Net Take-Home
          </label>
          <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 shadow-xs transition-all">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-mono text-base font-bold text-slate-400 select-none">
              {currencySymbol}
            </span>
            <input
              id="freelance-target-net-income"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={netIncome}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setNetIncome(cleanNumberInput(e.target.value))}
              placeholder="0.00"
              className="w-full bg-transparent py-3 pl-9 pr-10 font-mono text-lg font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {netIncome !== '' && (
              <button
                type="button"
                onClick={() => setNetIncome('')}
                aria-label="Clear net income"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">What hits your personal checking</span>
        </div>

        <div>
          <label htmlFor="freelance-annual-overhead" className="block text-xs font-semibold text-slate-700 mb-2">
            Annual Business Overhead & Tech
          </label>
          <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 shadow-xs transition-all">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-mono text-base font-bold text-slate-400 select-none">
              {currencySymbol}
            </span>
            <input
              id="freelance-annual-overhead"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={overhead}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setOverhead(cleanNumberInput(e.target.value))}
              placeholder="0.00"
              className="w-full bg-transparent py-3 pl-9 pr-10 font-mono text-lg font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {overhead !== '' && (
              <button
                type="button"
                onClick={() => setOverhead('')}
                aria-label="Clear overhead"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">SaaS, hardware, health insurance</span>
        </div>

        <div>
          <label htmlFor="freelance-billable-hours" className="block text-xs font-semibold text-slate-700 mb-2">
            Billable Hours Target ({billableHours} hrs/week)
          </label>
          <input
            id="freelance-billable-hours"
            type="range"
            min="10"
            max="45"
            value={billableHours}
            onChange={(e) => setBillableHours(Number(e.target.value))}
            className="w-full accent-blue-600 mt-2 h-2 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono font-medium">
            <span>15h (Heavy Admin)</span>
            <span className="text-blue-600 font-bold">{billableHours}h / wk</span>
            <span>40h (Maxed)</span>
          </div>
        </div>
      </div>

      {/* Secondary Parameters */}
      <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-slate-200 text-xs">
        <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
          <label htmlFor="freelance-working-weeks" className="text-slate-700 font-medium">Working Weeks / Year (PTO):</label>
          <div className="flex items-center gap-2 font-mono font-bold text-slate-900">
            <input
              id="freelance-working-weeks"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={workingWeeks}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setWorkingWeeks(cleanNumberInput(e.target.value))}
              className="w-14 rounded bg-white px-2 py-1 text-center text-base sm:text-xs font-bold border border-slate-300 shadow-xs focus:border-blue-600 focus:outline-none"
            />
            <span>wks</span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
          <label htmlFor="freelance-tax-rate" className="text-slate-700 font-medium">Est. Tax (SECA + Income):</label>
          <div className="flex items-center gap-2 font-mono font-bold text-slate-900">
            <input
              id="freelance-tax-rate"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={taxRate}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setTaxRate(cleanNumberInput(e.target.value))}
              className="w-14 rounded bg-white px-2 py-1 text-center text-base sm:text-xs font-bold border border-slate-300 shadow-xs focus:border-blue-600 focus:outline-none"
            />
            <span>%</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid (2x2 on Mobile, 4x1 on Desktop) */}
      <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        <MetricCard
          label="Hourly Target"
          value={`${currencySymbol}${result.recommendedHourlyRate.toFixed(2)}/hr`}
          subtext="Includes 15% buffer"
          accent="blue"
        />

        <MetricCard
          label="Day Rate (8h)"
          value={formatCurrency(result.dayRate, currencySymbol)}
          subtext="Standard 8-hour contract"
          accent="emerald"
        />

        <MetricCard
          label="Monthly Retainer"
          value={`${formatCurrency(result.monthlyRetainer, currencySymbol)}/mo`}
          subtext="Half-allocation retainer"
          accent="purple"
        />

        <MetricCard
          label="Annual Gross Goal"
          value={formatCurrency(result.grossAnnualRevenueNeeded, currencySymbol)}
          subtext={`Taxes: ~${formatCurrency(result.totalTaxesEstimated, currencySymbol)}`}
          accent="amber"
        />
      </div>

      {/* 2026 Social Security Wage Cap Clarification Note */}
      <div className="flex items-start gap-2 rounded-xl bg-blue-50/70 border border-blue-200 p-3 text-xs text-blue-950">
        <Info className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>2026 Social Security Wage Cap Note:</strong> The 12.4% Social Security portion of self-employment tax (SECA) applies only up to the 2026 statutory wage cap of <strong>$176,100</strong>. Net freelance earnings above $176,100 are exempt from the 12.4% Social Security tax and only incur the 2.9% Medicare tax (plus 0.9% Additional Medicare tax for single filers over $200,000 / married over $250,000). High earners pay a significantly lower effective SECA tax rate.
        </p>
      </div>

      {/* Ready-to-Copy Proposal Block */}
      <div className="mt-5 sm:mt-6 rounded-xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-2 text-slate-900">
            <FileCheck className="h-4 w-4 text-blue-600 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Client Proposal & Invoice Copy Block
            </h4>
          </div>
          <button
            type="button"
            onClick={handleCopyProposal}
            className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 sm:py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-xs w-full sm:w-auto justify-center min-h-[38px] sm:min-h-0"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> : <Copy className="h-3.5 w-3.5 text-slate-400 shrink-0" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Proposal Text'}</span>
          </button>
        </div>

        <pre className="rounded-lg bg-slate-50 p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-slate-800 whitespace-pre-wrap border border-slate-200 leading-relaxed overflow-x-auto shadow-inner">
          {result.invoiceProposalText}
        </pre>
      </div>
    </div>
  );
}
