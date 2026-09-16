'use client';

import React, { useState } from 'react';
import { Target, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { calculateBreakEven } from '@/lib/engines/business-metrics';

interface BreakEvenProps {
  initialFixedCosts?: number;
  initialSalePrice?: number;
  initialVariableCost?: number;
  currencySymbol?: string;
  embedded?: boolean;
}

export function BreakEvenCalculator({
  initialFixedCosts = 15000,
  initialSalePrice = 120,
  initialVariableCost = 45,
  currencySymbol = '$',
  embedded = false,
}: BreakEvenProps) {
  const [fixedCosts, setFixedCosts] = useState(initialFixedCosts);
  const [salePrice, setSalePrice] = useState(initialSalePrice);
  const [variableCost, setVariableCost] = useState(initialVariableCost);

  const result = calculateBreakEven({
    fixedCosts,
    salePricePerUnit: salePrice,
    variableCostPerUnit: variableCost,
  });

  return (
    <div className="space-y-6">
      {/* 3 Main Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Total Fixed Costs
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={fixedCosts}
              onChange={(e) => setFixedCosts(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Rent, salaries, software subscriptions</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Unit Selling Price
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={salePrice}
              onChange={(e) => setSalePrice(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Retail price charged to customer</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Variable Cost Per Unit
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="0"
              value={variableCost}
              onChange={(e) => setVariableCost(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <span className="text-[11px] text-slate-400">Direct unit materials, packaging & shipping</span>
        </div>
      </div>

      {/* Hero Break-Even Target Box */}
      <div className="rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
              <Target className="h-3.5 w-3.5" />
              <span>Zero-Profit Threshold</span>
            </div>
            <div className="text-3xl sm:text-5xl font-black font-mono text-blue-900 tracking-tight">
              {result.breakEvenUnits.toLocaleString()} <span className="text-2xl sm:text-3xl font-bold text-blue-700">Units</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              You must sell at least <strong>{result.breakEvenUnits.toLocaleString()} units</strong> to cover all fixed costs. Every unit sold past this threshold generates pure net profit.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200/80 bg-white p-5 shadow-xs w-full sm:w-auto shrink-0 space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Break-Even Sales Volume
            </span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">
              {currencySymbol}{result.breakEvenRevenue.toLocaleString()}
            </div>
            <span className="text-[11px] text-emerald-600 font-semibold block">
              Required gross turnover
            </span>
          </div>
        </div>
      </div>

      {/* Contribution Margin Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Unit Contribution Margin
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">
            {currencySymbol}{result.contributionMargin.toFixed(2)}
          </div>
          <p className="text-xs text-slate-500">
            Amount remaining from each unit sold ({currencySymbol}{salePrice} - {currencySymbol}{variableCost}) that contributes toward paying fixed overhead.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            Contribution Margin Ratio
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900">
            {result.contributionMarginRatio.toFixed(1)}%
          </div>
          <p className="text-xs text-slate-500">
            Percentage of each sales dollar that contributes directly to recovering overhead and generating profit.
          </p>
        </div>
      </div>
    </div>
  );
}
