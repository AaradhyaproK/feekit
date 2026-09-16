'use client';

import React, { useState } from 'react';
import { DollarSign, TrendingUp, Percent, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { calculateProfitMargin } from '@/lib/engines/business-metrics';

interface ProfitMarginProps {
  initialRevenue?: number;
  initialCogs?: number;
  initialExpenses?: number;
  currencySymbol?: string;
  embedded?: boolean;
}

export function ProfitMarginCalculator({
  initialRevenue = 10000,
  initialCogs = 4000,
  initialExpenses = 2500,
  currencySymbol = '$',
  embedded = false,
}: ProfitMarginProps) {
  const [revenue, setRevenue] = useState(initialRevenue);
  const [cogs, setCogs] = useState(initialCogs);
  const [expenses, setExpenses] = useState(initialExpenses);

  const result = calculateProfitMargin({
    revenue,
    cogs,
    operatingExpenses: expenses,
  });

  return (
    <div className="space-y-6">
      {/* Interactive Controls & Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Total Sales Revenue
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={revenue}
              onChange={(e) => setRevenue(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Gross selling price or invoice sum</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Cost of Goods (COGS)
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={cogs}
              onChange={(e) => setCogs(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Direct labor, raw materials, or supplier price</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Operating Expenses
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
          <span className="text-[11px] text-slate-400">Marketing, SaaS, hosting, rent, utilities</span>
        </div>
      </div>

      {/* Primary KPI Results Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50/40 p-4 sm:p-5 space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
            Gross Margin
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-700">
            {result.grossMarginPct.toFixed(1)}%
          </div>
          <span className="text-[11px] text-emerald-600 block">
            {currencySymbol}{result.grossProfit.toLocaleString()} gross profit
          </span>
        </div>

        <div className="rounded-2xl border-2 border-blue-100 bg-blue-50/40 p-4 sm:p-5 space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-800">
            Markup Percentage
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-blue-700">
            {result.markupPct.toFixed(1)}%
          </div>
          <span className="text-[11px] text-blue-600 block">
            Added above cost of goods
          </span>
        </div>

        <div className="rounded-2xl border-2 border-indigo-100 bg-indigo-50/40 p-4 sm:p-5 space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-800">
            Net Profit
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-700">
            {currencySymbol}{result.netProfit.toLocaleString()}
          </div>
          <span className="text-[11px] text-indigo-600 block">
            After all overhead expenses
          </span>
        </div>

        <div className="rounded-2xl border-2 border-purple-100 bg-purple-50/40 p-4 sm:p-5 space-y-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-800">
            Net Profit Margin
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-purple-700">
            {result.netMarginPct.toFixed(1)}%
          </div>
          <span className="text-[11px] text-purple-600 block">
            Pure bottom-line retention
          </span>
        </div>
      </div>

      {/* Visual Revenue Waterfall Distribution */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex justify-between items-center text-xs font-bold text-slate-800">
          <span>Revenue Allocation Breakdown</span>
          <span>100% of {currencySymbol}{result.revenue.toLocaleString()}</span>
        </div>

        {/* Stacked Bar */}
        <div className="h-5 w-full rounded-full bg-slate-100 overflow-hidden flex">
          <div
            style={{ width: `${Math.min(100, (result.cogs / (result.revenue || 1)) * 100)}%` }}
            className="bg-rose-500 transition-all duration-300"
            title={`COGS: ${currencySymbol}${result.cogs}`}
          />
          <div
            style={{ width: `${Math.min(100, (result.operatingExpenses / (result.revenue || 1)) * 100)}%` }}
            className="bg-amber-500 transition-all duration-300"
            title={`Expenses: ${currencySymbol}${result.operatingExpenses}`}
          />
          <div
            style={{ width: `${Math.max(0, Math.min(100, (result.netProfit / (result.revenue || 1)) * 100))}%` }}
            className="bg-emerald-500 transition-all duration-300"
            title={`Net Profit: ${currencySymbol}${result.netProfit}`}
          />
        </div>

        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500"></span>
            <span className="text-slate-600">COGS ({((result.cogs / (result.revenue || 1)) * 100).toFixed(1)}%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-amber-500"></span>
            <span className="text-slate-600">OpEx ({((result.operatingExpenses / (result.revenue || 1)) * 100).toFixed(1)}%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
            <span className="font-bold text-slate-900">Net Profit ({result.netMarginPct.toFixed(1)}%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
