'use client';

import React, { useState } from 'react';
import { ShieldCheck, PoundSterling, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { calculateIr35Comparison } from '@/lib/engines/tax-quarterly-ir35';

interface UkIr35Props {
  initialDayRate?: number;
  initialWorkingDays?: number;
  embedded?: boolean;
}

export function UkIr35Calculator({
  initialDayRate = 550,
  initialWorkingDays = 220,
  embedded = false,
}: UkIr35Props) {
  const [dayRate, setDayRate] = useState(initialDayRate);
  const [workingDays, setWorkingDays] = useState(initialWorkingDays);
  const [expenses, setExpenses] = useState(2500);

  const result = calculateIr35Comparison({
    dayRate,
    workingDaysPerYear: workingDays,
    annualBusinessExpenses: expenses,
  });

  return (
    <div className="space-y-6">
      {/* 3 Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Contract Daily Rate (£)
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              £
            </span>
            <input
              type="number"
              min="100"
              step="25"
              value={dayRate}
              onChange={(e) => setDayRate(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Assignment daily fee charged to client</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Billable Days Per Year
          </label>
          <div className="relative">
            <input
              type="number"
              min="50"
              max="260"
              value={workingDays}
              onChange={(e) => setWorkingDays(parseInt(e.target.value) || 1)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Standard contract year is ~220 working days</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            PSC Expenses (£/yr)
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              £
            </span>
            <input
              type="number"
              min="0"
              value={expenses}
              onChange={(e) => setExpenses(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Accountancy, tech equipment, travel</span>
        </div>
      </div>

      {/* Hero Advantage Banner */}
      <div className="rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-teal-50/30 to-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Outside IR35 Financial Advantage</span>
            </div>
            <div className="text-3xl sm:text-5xl font-black font-mono text-emerald-800 tracking-tight">
              +£{result.takeHomeDifferenceAnnual.toLocaleString()}{' '}
              <span className="text-lg sm:text-2xl font-bold text-emerald-600">/ year</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Operating Outside IR35 yields <strong>+£{result.takeHomeDifferenceMonthly.toLocaleString()}/month</strong> ({result.outsideAdvantagePercent}% more take-home pay) compared to an umbrella company deemed contract.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-xs w-full sm:w-auto shrink-0 space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Gross Turnover
            </span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">
              £{result.grossContractRevenue.toLocaleString()}
            </div>
            <span className="text-[11px] text-slate-400 font-medium block">
              {result.workingDays} billable days @ £{dayRate}/day
            </span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inside IR35 Card */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-700">
                <span>Inside IR35</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Umbrella Deemed Contract</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Effective Tax</span>
              <span className="text-base font-black font-mono text-rose-600">
                {result.inside.effectiveTaxRate}%
              </span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Employer NI (13.8%):</span>
              <span className="font-mono font-medium text-slate-900">-£{result.inside.employerNi.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Apprenticeship Levy (0.5%):</span>
              <span className="font-mono font-medium text-slate-900">-£{result.inside.apprenticeshipLevy.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Umbrella Fee Margin:</span>
              <span className="font-mono font-medium text-slate-900">-£{result.inside.umbrellaMargin.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Employee NI:</span>
              <span className="font-mono font-medium text-slate-900">-£{result.inside.employeeNi.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>PAYE Income Tax:</span>
              <span className="font-mono font-medium text-slate-900">-£{result.inside.incomeTaxPaye.toLocaleString()}</span>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 bg-slate-50 -mx-6 -mb-6 p-6 rounded-b-3xl space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-700">Annual Net Take-Home:</span>
              <span className="text-2xl font-black font-mono text-slate-900">
                £{result.inside.netTakeHome.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>Monthly Payout:</span>
              <span className="font-mono font-semibold text-slate-700">£{result.inside.monthlyTakeHome.toLocaleString()}/mo</span>
            </div>
          </div>
        </div>

        {/* Outside IR35 Card */}
        <div className="rounded-3xl border-2 border-blue-200 bg-white p-6 sm:p-7 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-800">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Outside IR35</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Limited Company (PSC)</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Effective Tax</span>
              <span className="text-base font-black font-mono text-blue-700">
                {result.outside.effectiveTaxRate}%
              </span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Director Salary (Tax-Free):</span>
              <span className="font-mono font-medium text-emerald-700">+£{result.outside.directorSalary.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Allowable Expenses:</span>
              <span className="font-mono font-medium text-slate-900">-£{result.outside.businessExpenses.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Corporation Tax (19-25%):</span>
              <span className="font-mono font-medium text-slate-900">-£{result.outside.corporationTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Gross Dividends Distributed:</span>
              <span className="font-mono font-medium text-slate-900">£{result.outside.grossDividends.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Personal Dividend Tax:</span>
              <span className="font-mono font-medium text-slate-900">-£{result.outside.dividendTax.toLocaleString()}</span>
            </div>
          </div>

          <div className="border-t border-blue-100 pt-4 bg-blue-50/50 -mx-6 -mb-6 p-6 rounded-b-3xl space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-blue-900">Annual Net Take-Home:</span>
              <span className="text-2xl font-black font-mono text-blue-800">
                £{result.outside.netTakeHome.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-xs text-blue-600">
              <span>Monthly Payout:</span>
              <span className="font-mono font-semibold text-blue-800">£{result.outside.monthlyTakeHome.toLocaleString()}/mo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
