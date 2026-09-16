'use client';

import React, { useState } from 'react';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, TrendingDown } from 'lucide-react';
import { calculateMerchantFee } from '@/lib/engines/merchant-fee';

interface GatewayComparatorProps {
  initialAmount?: number;
  currencySymbol?: string;
  embedded?: boolean;
}

export function GatewayComparator({
  initialAmount = 500,
  currencySymbol = '$',
  embedded = false,
}: GatewayComparatorProps) {
  const [amount, setAmount] = useState(initialAmount);
  const [isInternational, setIsInternational] = useState(false);

  // Compute for Stripe, PayPal, Square
  const stripeResult = calculateMerchantFee({
    amount,
    gatewayId: 'stripe',
    isInternational,
  });

  const paypalResult = calculateMerchantFee({
    amount,
    gatewayId: 'paypal',
    isInternational,
  });

  const squareResult = calculateMerchantFee({
    amount,
    gatewayId: 'square',
    isInternational,
  });

  const comparison = [
    {
      id: 'stripe',
      name: 'Stripe',
      tagline: '2.9% + $0.30 online',
      totalFee: stripeResult.totalFee,
      netAmount: stripeResult.netAmount,
      effectiveRate: stripeResult.effectiveFeeRate,
      color: 'blue',
      badge: 'Best for Developers & Subscriptions',
    },
    {
      id: 'paypal',
      name: 'PayPal Commerce',
      tagline: '3.49% + $0.49 standard',
      totalFee: paypalResult.totalFee,
      netAmount: paypalResult.netAmount,
      effectiveRate: paypalResult.effectiveFeeRate,
      color: 'indigo',
      badge: 'Highest Buyer Trust & Global Reach',
    },
    {
      id: 'square',
      name: 'Square Online',
      tagline: '2.9% + $0.30 online',
      totalFee: squareResult.totalFee,
      netAmount: squareResult.netAmount,
      effectiveRate: squareResult.effectiveFeeRate,
      color: 'slate',
      badge: 'Omnichannel POS & In-Person',
    },
  ];

  // Find lowest fee
  const minFee = Math.min(...comparison.map((c) => c.totalFee));
  const maxFee = Math.max(...comparison.map((c) => c.totalFee));
  const maxSavings = maxFee - minFee;

  return (
    <div className="space-y-6">
      {/* Input Controls */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-80 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Gross Transaction Amount
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              {currencySymbol}
            </span>
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isInternational}
              onChange={(e) => setIsInternational(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-xs font-semibold text-slate-700">
              Cross-Border / International Card (+1.0% - 1.5%)
            </span>
          </label>
        </div>
      </div>

      {/* Savings Highlight Banner */}
      {maxSavings > 0 && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 sm:p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
              <TrendingDown className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-900 block">
                Gateway Fee Spread Analysis
              </span>
              <p className="text-xs text-emerald-700">
                You save <strong>{currencySymbol}{maxSavings.toFixed(2)}</strong> per {currencySymbol}{amount} transaction by choosing the lowest-fee processor over the most expensive option.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3-Column Side-by-Side Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comparison.map((item) => {
          const isWinner = item.totalFee === minFee && amount > 0;
          return (
            <div
              key={item.id}
              className={`relative rounded-3xl border-2 p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-all ${
                isWinner
                  ? 'border-emerald-500 bg-white ring-4 ring-emerald-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {isWinner && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3.5 py-0.5 text-xs font-black text-white shadow-xs">
                  <Award className="h-3.5 w-3.5" />
                  <span>LOWEST FEE WINNER</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
                  <span className="text-xs text-slate-500">{item.tagline}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Total Processing Fee
                  </span>
                  <div className="text-3xl font-black font-mono text-slate-900">
                    {currencySymbol}{item.totalFee.toFixed(2)}
                  </div>
                  <span className="text-xs font-bold text-slate-500">
                    {item.effectiveRate.toFixed(2)}% effective fee
                  </span>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 space-y-1 border border-slate-100">
                  <span className="text-xs text-slate-500 font-medium block">
                    You Receive (Net Payout):
                  </span>
                  <div className="text-2xl font-black font-mono text-blue-700">
                    {currencySymbol}{item.netAmount.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block">
                  {item.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
