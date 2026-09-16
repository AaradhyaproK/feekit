'use client';

import React, { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Sparkles, Award } from 'lucide-react';
import { calculateRoi } from '@/lib/engines/business-metrics';

interface RoiProps {
  initialInvestment?: number;
  initialFinalValue?: number;
  initialYears?: number;
  currencySymbol?: string;
  embedded?: boolean;
}

export function RoiCalculator({
  initialInvestment = 25000,
  initialFinalValue = 65000,
  initialYears = 3,
  currencySymbol = '$',
  embedded = false,
}: RoiProps) {
  const [investment, setInvestment] = useState(initialInvestment);
  const [finalValue, setFinalValue] = useState(initialFinalValue);
  const [years, setYears] = useState(initialYears);

  const result = calculateRoi({
    initialInvestment: investment,
    finalValue,
    durationYears: years,
  });

  const multiple = investment > 0 ? (finalValue / investment).toFixed(2) : '0';

  return (
    <div className="space-y-6">
      {/* 3 Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Initial Capital Invested
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={investment}
              onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Principal outlay or acquisition cost</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Final Value / Payout
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={finalValue}
              onChange={(e) => setFinalValue(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Current portfolio value or total sale return</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Holding Period (Years)
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              <Calendar className="h-4 w-4" />
            </span>
            <input
              type="number"
              min="0.1"
              step="0.5"
              value={years}
              onChange={(e) => setYears(parseFloat(e.target.value) || 0.1)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Investment horizon to annualize return</span>
        </div>
      </div>

      {/* Hero Result Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50/40 p-5 space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
            Total Return (ROI)
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-700">
            {result.roiPct >= 0 ? `+${result.roiPct.toFixed(1)}%` : `${result.roiPct.toFixed(1)}%`}
          </div>
          <span className="text-[11px] text-emerald-600 block">
            Over {result.durationYears} {result.durationYears === 1 ? 'year' : 'years'}
          </span>
        </div>

        <div className="rounded-2xl border-2 border-blue-100 bg-blue-50/40 p-5 space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-800">
            Annualized (CAGR)
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-blue-700">
            {result.annualizedRoiPct >= 0 ? `+${result.annualizedRoiPct.toFixed(1)}%` : `${result.annualizedRoiPct.toFixed(1)}%`}
          </div>
          <span className="text-[11px] text-blue-600 block">
            Compound annual growth rate
          </span>
        </div>

        <div className="rounded-2xl border-2 border-indigo-100 bg-indigo-50/40 p-5 space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-800">
            Net Capital Gain
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-700">
            {result.netReturn >= 0 ? `+${currencySymbol}${result.netReturn.toLocaleString()}` : `-${currencySymbol}${Math.abs(result.netReturn).toLocaleString()}`}
          </div>
          <span className="text-[11px] text-indigo-600 block">
            Absolute profit earned
          </span>
        </div>

        <div className="rounded-2xl border-2 border-purple-100 bg-purple-50/40 p-5 space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-800">
            Investment Multiple
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-purple-700">
            {multiple}x
          </div>
          <span className="text-[11px] text-purple-600 block">
            Money-on-money multiple
          </span>
        </div>
      </div>
    </div>
  );
}
