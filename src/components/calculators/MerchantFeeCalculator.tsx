'use client';

import React, { useState, useEffect } from 'react';
import { calculateMerchantFee, PaymentGatewayId, CalculationDirection, GATEWAYS } from '@/lib/engines/merchant-fee';
import { MetricCard } from '@/components/ui/MetricCard';
import { formatCurrency, formatPercent, cleanNumberInput, parseNumericValue } from '@/lib/utils/formatters';
import { decodeHashData } from '@/lib/utils/hash-sync';
import { Check, Copy, X } from 'lucide-react';

interface MerchantFeeCalculatorProps {
  initialGateway?: PaymentGatewayId;
  initialAmount?: number;
  initialDirection?: CalculationDirection;
  initialInternational?: boolean;
  currencySymbol?: string;
}

export function MerchantFeeCalculator({
  initialGateway = 'stripe',
  initialAmount = 1000,
  initialDirection = 'forward',
  initialInternational = false,
  currencySymbol = '$',
}: MerchantFeeCalculatorProps) {
  const [gateway, setGateway] = useState<PaymentGatewayId>(initialGateway);
  const [amount, setAmount] = useState<string>(initialAmount !== undefined ? String(initialAmount) : '1000');
  const [direction, setDirection] = useState<CalculationDirection>(initialDirection);
  const [isInternational, setIsInternational] = useState<boolean>(initialInternational);
  const [applyFx, setApplyFx] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const saved = decodeHashData<{
      amount?: number;
      gateway?: PaymentGatewayId;
      direction?: CalculationDirection;
      intl?: boolean;
      fx?: boolean;
    }>();
    if (saved) {
      if (saved.amount !== undefined && saved.amount !== null) setAmount(String(saved.amount));
      if (saved.gateway) setGateway(saved.gateway);
      if (saved.direction) setDirection(saved.direction);
      if (typeof saved.intl === 'boolean') setIsInternational(saved.intl);
      if (typeof saved.fx === 'boolean') setApplyFx(saved.fx);
    }
  }, []);

  const numericAmount = parseNumericValue(amount, 0);

  const result = calculateMerchantFee({
    amount: numericAmount,
    gatewayId: gateway,
    direction,
    isInternational,
    applyCurrencyConversion: applyFx,
  });

  const handleCopyBreakdown = () => {
    const text = `FeeKit Calculation (${GATEWAYS[gateway].name}):
Gross Invoice: ${currencySymbol}${result.grossAmount.toFixed(2)}
Processing Fee: -${currencySymbol}${result.totalFee.toFixed(2)} (${result.effectiveFeeRate.toFixed(2)}%)
Net In-Bank Payout: ${currencySymbol}${result.netAmount.toFixed(2)}
Mode: ${direction === 'forward' ? 'Forward (Charge X, get Y)' : 'Reverse (To get X, charge Y)'}
Calculated on: https://usefeekit.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-7 shadow-sm">
      {/* Direction & Calculation Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-3 sm:pb-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-slate-500">Mode:</span>
          <span className="font-bold text-slate-900 truncate">
            {direction === 'forward' ? 'Forward (Charge $X → Net)' : 'Reverse (Need $X → Charge)'}
          </span>
        </div>

        {/* Direction Switcher Pill */}
        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
          <button
            type="button"
            onClick={() => setDirection('forward')}
            className={`tap-spring rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-bold transition-all text-center ${
              direction === 'forward'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Forward (Charge $X)
          </button>
          <button
            type="button"
            onClick={() => setDirection('reverse')}
            className={`tap-spring rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-bold transition-all text-center ${
              direction === 'reverse'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Reverse (Need $X)
          </button>
        </div>
      </div>

      {/* Gateway Selector Tabs with Smooth Touch Scroll */}
      <div className="mt-4 sm:mt-5 w-full min-w-0 max-w-full overflow-x-auto py-1 scrollbar-none flex gap-2 no-scrollbar smooth-scroll-x">
        {(Object.keys(GATEWAYS) as PaymentGatewayId[]).map((id) => {
          const g = GATEWAYS[id];
          const isSelected = gateway === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setGateway(id)}
              className={`tap-spring shrink-0 whitespace-nowrap group flex items-center gap-2 rounded-xl border px-3 sm:px-3.5 py-2 text-xs font-bold transition-all ${
                isSelected
                  ? 'border-blue-500 bg-blue-50/70 text-blue-700 shadow-xs'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <span>{g.name}</span>
              {g.badge && (
                <span className={`rounded px-1.5 py-0.5 text-[9px] font-extrabold uppercase ${
                  g.badge === 'Lowest Fee' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {g.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Input Form Fields */}
      <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-end">
        <div className="md:col-span-6">
          <label htmlFor="transaction-amount-input" className="block text-xs font-semibold text-slate-700 mb-2">
            {direction === 'forward' ? 'Invoice / Transaction Amount' : 'Target Net Payout Needed in Bank'}
          </label>
          <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 shadow-xs transition-all">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-mono text-base font-bold text-slate-400 select-none">
              {currencySymbol}
            </span>
            <input
              id="transaction-amount-input"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={amount}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setAmount(cleanNumberInput(e.target.value))}
              className="w-full bg-transparent py-3 pl-9 pr-10 font-mono text-lg font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
              placeholder="0.00"
            />
            {amount !== '' && (
              <button
                type="button"
                onClick={() => setAmount('')}
                aria-label="Clear amount"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="md:col-span-6 flex gap-2">
          {[100, 500, 1000, 5000].map((preset) => {
            const isSelected = numericAmount === preset;
            return (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(String(preset))}
                className={`tap-spring flex-1 rounded-xl border py-2.5 text-xs font-mono font-bold transition-colors ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50/70 text-blue-700 shadow-xs'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {currencySymbol}{preset.toLocaleString()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Checkbox Options */}
      <div className="mt-5 flex flex-wrap gap-4 pt-4 border-t border-slate-200 text-xs">
        <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-slate-900 font-medium">
          <input
            type="checkbox"
            checked={isInternational}
            onChange={(e) => setIsInternational(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span>International / Foreign Card (+{formatPercent(GATEWAYS[gateway].intlExtraPercentage * 100)})</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-slate-900 font-medium">
          <input
            type="checkbox"
            checked={applyFx}
            onChange={(e) => setApplyFx(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span>Currency Conversion Markup (+{formatPercent(GATEWAYS[gateway].currencyConversionRate * 100)})</span>
        </label>
      </div>

      {/* Dynamic Results Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label={direction === 'forward' ? 'You Invoice Client' : 'Total Amount to Charge'}
          value={formatCurrency(result.grossAmount, currencySymbol)}
          subtext={direction === 'forward' ? 'Base customer charge' : `Marked up to absorb ${result.effectiveFeeRate.toFixed(2)}% fee`}
          accent="blue"
        />

        <MetricCard
          label="Total Processing Deductions"
          value={`-${formatCurrency(result.totalFee, currencySymbol)}`}
          subtext={`${formatPercent((GATEWAYS[gateway].percentageRate + (isInternational ? GATEWAYS[gateway].intlExtraPercentage : 0) + (applyFx ? GATEWAYS[gateway].currencyConversionRate : 0)) * 100)} + ${formatCurrency(GATEWAYS[gateway].fixedFee, currencySymbol)} fixed`}
          accent="rose"
        />

        <MetricCard
          label="Net Payout in Bank"
          value={formatCurrency(result.netAmount, currencySymbol)}
          subtext="Actual received funds"
          accent="emerald"
        />

        <MetricCard
          label="Effective Fee Rate"
          value={`${result.effectiveFeeRate.toFixed(2)}%`}
          subtext="Total % lost to gateway"
          accent="amber"
        />
      </div>

      {/* Visual Fee Deduction Bar */}
      {result.grossAmount > 0 && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
            <span>Payout Breakdown Waterfall</span>
            <span className="font-mono">{result.netAmount > 0 ? ((result.netAmount / result.grossAmount) * 100).toFixed(1) : 0}% Net Payout vs {result.effectiveFeeRate.toFixed(1)}% Fee</span>
          </div>
          <div className="h-3.5 w-full rounded-full bg-slate-200 overflow-hidden flex">
            <div
              style={{ width: `${Math.max(2, (result.netAmount / (result.grossAmount || 1)) * 100)}%` }}
              className="bg-emerald-500 transition-all duration-300"
              title={`Net: ${formatCurrency(result.netAmount, currencySymbol)}`}
            />
            <div
              style={{ width: `${Math.min(98, (result.totalFee / (result.grossAmount || 1)) * 100)}%` }}
              className="bg-rose-500 transition-all duration-300"
              title={`Fee: ${formatCurrency(result.totalFee, currencySymbol)}`}
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
              Net Received: <strong className="text-slate-900 font-mono">{formatCurrency(result.netAmount, currencySymbol)}</strong>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-2 w-2 rounded-full bg-rose-500 inline-block" />
              Gateway Fee: <strong className="text-slate-900 font-mono">-{formatCurrency(result.totalFee, currencySymbol)}</strong>
            </span>
          </div>
        </div>
      )}

      {/* Competitor Comparison Matrix */}
      {result.competitorComparison.length > 0 && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-wide">
                Competitor Fee Comparison (at {formatCurrency(result.grossAmount, currencySymbol)} volume)
              </h3>
              <p className="text-xs text-slate-500">
                See exact difference in net cash received across major merchant networks
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyBreakdown}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-xs"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied Breakdown!' : 'Copy Breakdown'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {result.competitorComparison.map((comp) => {
              const isCurrent = comp.gatewayId === gateway;
              return (
                <div
                  key={comp.gatewayId}
                  className={`rounded-lg border p-3.5 transition-all ${
                    isCurrent
                      ? 'border-blue-500 bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className={isCurrent ? 'text-blue-700' : 'text-slate-700'}>{comp.name}</span>
                    {isCurrent && (
                      <span className="text-[10px] text-blue-700 font-mono font-extrabold">SELECTED</span>
                    )}
                  </div>
                  <div className="mt-2 text-base font-extrabold text-slate-900 font-mono">
                    {formatCurrency(comp.netAmount, currencySymbol)}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                    <span>Fee: -{formatCurrency(comp.totalFee, currencySymbol)}</span>
                    <span className="font-mono text-[11px] font-semibold">{comp.effectiveRate.toFixed(2)}%</span>
                  </div>
                  {comp.differenceVsSelected !== 0 && !isCurrent && (
                    <div className={`mt-2 text-[11px] font-semibold ${
                      comp.differenceVsSelected > 0 ? 'text-emerald-700 font-bold' : 'text-slate-500'
                    }`}>
                      {comp.differenceVsSelected > 0
                        ? `Save ${formatCurrency(comp.differenceVsSelected, currencySymbol)} with ${comp.name}`
                        : `Costs ${formatCurrency(Math.abs(comp.differenceVsSelected), currencySymbol)} more`}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
