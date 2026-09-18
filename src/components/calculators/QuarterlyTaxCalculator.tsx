'use client';

import React, { useState } from 'react';
import { Calendar, DollarSign, ShieldAlert, FileText, CheckCircle2, Info } from 'lucide-react';
import { calculateQuarterlyTax, FilingStatus } from '@/lib/engines/tax-quarterly-ir35';

interface QuarterlyTaxProps {
  initialGross?: number;
  initialExpenses?: number;
  currencySymbol?: string;
  embedded?: boolean;
}

export function QuarterlyTaxCalculator({
  initialGross = 120000,
  initialExpenses = 20000,
  currencySymbol = '$',
  embedded = false,
}: QuarterlyTaxProps) {
  const [gross, setGross] = useState(initialGross);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [w2Withholding, setW2Withholding] = useState(0);

  const result = calculateQuarterlyTax({
    annualGrossIncome: gross,
    annualBusinessExpenses: expenses,
    filingStatus,
    w2Withholding,
  });

  return (
    <div className="space-y-6">
      {/* Inputs Header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            1099 Gross Revenue
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={gross}
              onChange={(e) => setGross(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Total client billings & freelance turnover</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Business Deductions
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={expenses}
              onChange={(e) => setExpenses(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Home office, gear, software, travel</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Filing Status
          </label>
          <select
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3 text-xs font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
          >
            <option value="single">Single ($14,600 Std Ded)</option>
            <option value="married_joint">Married Filing Jointly ($29,200 Std Ded)</option>
            <option value="head_of_household">Head of Household ($21,900 Std Ded)</option>
          </select>
          <span className="text-[11px] text-slate-400">IRS standard deduction benchmark</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            W-2 Tax Withheld (if any)
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={w2Withholding}
              onChange={(e) => setW2Withholding(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Taxes already paid via side employer</span>
        </div>
      </div>

      {/* Hero Quarterly Estimated Voucher Box */}
      <div className="rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/30 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
              <Calendar className="h-3.5 w-3.5" />
              <span>IRS Form 1040-ES Statutory Payment</span>
            </div>
            <div className="text-3xl sm:text-5xl font-black font-mono text-slate-900">
              {currencySymbol}{result.quarterlyPayment.toLocaleString()}{' '}
              <span className="text-base sm:text-lg font-bold text-slate-500">/ quarter</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Total estimated annual tax liability: <strong>{currencySymbol}{result.totalAnnualTax.toLocaleString()}</strong> ({result.effectiveTaxRate.toFixed(1)}% effective rate).
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-xs space-y-1 shrink-0 w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Self-Employment Tax (SE)
            </span>
            <div className="text-xl sm:text-2xl font-black font-mono text-amber-700">
              {currencySymbol}{result.selfEmploymentTax.toLocaleString()}
            </div>
            <span className="text-[11px] text-slate-400 block">
              15.3% Social Security & Medicare
            </span>
          </div>
        </div>

        {/* 4 Quarterly Vouchers Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-amber-200/80">
          {result.vouchers.map((v) => (
            <div
              key={v.quarter}
              className="rounded-xl border border-slate-200 bg-white p-4 space-y-1 shadow-2xs"
            >
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-blue-700">{v.quarter} Voucher</span>
                <span className="text-slate-500">{v.dueDate}</span>
              </div>
              <div className="text-xl font-mono font-black text-slate-900">
                {currencySymbol}{v.amount.toLocaleString()}
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold block">
                Direct EFTPS / IRS Direct Pay
              </span>
            </div>
          ))}
        </div>

        {/* 2026 Social Security Wage Cap Clarification Note */}
        <div className="flex items-start gap-2 rounded-xl bg-amber-100/70 border border-amber-300 p-3 text-xs text-amber-950">
          <Info className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>2026 Social Security Wage Cap Note:</strong> The 12.4% Social Security portion of self-employment tax (SECA) applies only up to the 2026 statutory wage cap of <strong>$176,100</strong>. Net business profit above $176,100 is exempt from the 12.4% OASDI portion and only incurs the 2.9% Medicare tax (plus 0.9% Additional Medicare tax if Adjusted Gross Income exceeds $200k single / $250k married).
          </p>
        </div>
      </div>
    </div>
  );
}
