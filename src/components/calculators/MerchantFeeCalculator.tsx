'use client';

import React, { useState, useEffect } from 'react';
import { calculateMerchantFee, PaymentGatewayId, CalculationDirection, GATEWAYS } from '@/lib/engines/merchant-fee';
import { MetricCard } from '@/components/ui/MetricCard';
import { formatCurrency, formatPercent, cleanNumberInput, parseNumericValue } from '@/lib/utils/formatters';
import { decodeHashData } from '@/lib/utils/hash-sync';
import { GatewayLogo } from '@/components/ui/GatewayLogos';
import {
  Check,
  Copy,
  X,
  Globe2,
  ArrowRightLeft,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  TrendingDown,
  Info,
} from 'lucide-react';

interface MerchantFeeCalculatorProps {
  initialGateway?: PaymentGatewayId;
  initialAmount?: number;
  initialDirection?: CalculationDirection;
  initialInternational?: boolean;
  currencySymbol?: string;
  embedded?: boolean;
}

const PRESET_AMOUNTS = [100, 500, 1000, 5000];

export function MerchantFeeCalculator({
  initialGateway = 'stripe',
  initialAmount = 1000,
  initialDirection = 'forward',
  initialInternational = false,
  currencySymbol = '$',
  embedded = false,
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

  const activeGatewayConfig = GATEWAYS[gateway];

  const handleCopyBreakdown = () => {
    const text = `FeeKit Calculation (${activeGatewayConfig.name}):
Calculation Mode: ${direction === 'forward' ? 'Forward (Charge $X → Net)' : 'Reverse (Need $X → Charge)'}
You Invoice Client: ${currencySymbol}${result.grossAmount.toFixed(2)}
Processing Fee: -${currencySymbol}${result.totalFee.toFixed(2)} (${result.effectiveFeeRate.toFixed(2)}% effective)
Net In-Bank Payout: ${currencySymbol}${result.netAmount.toFixed(2)}
Parameters: ${isInternational ? 'International Card (+1.5%)' : 'Domestic'}, ${applyFx ? 'FX Conversion Included' : 'No FX'}
Calculated via: https://usefeekit.com/tools/stripe-fee-calculator`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={embedded ? 'space-y-5 sm:space-y-6' : 'rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-7 shadow-sm space-y-5'}>
      {/* 1. Mode Switcher (Forward vs Reverse) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-slate-200 pb-3 sm:pb-4">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs">
          <span className="font-semibold text-slate-500">Mode:</span>
          <span className="font-bold text-slate-900 truncate">
            {direction === 'forward'
              ? 'Forward (Charge $X → Net Received in Bank)'
              : 'Reverse (Target Net $X → Client Invoice)'}
          </span>
        </div>

        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
          <button
            type="button"
            onClick={() => setDirection('forward')}
            className={`tap-spring rounded-lg px-2.5 sm:px-3.5 py-2 sm:py-1.5 text-[11px] sm:text-xs font-bold transition-all text-center min-h-[36px] flex items-center justify-center ${
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
            className={`tap-spring rounded-lg px-2.5 sm:px-3.5 py-2 sm:py-1.5 text-[11px] sm:text-xs font-bold transition-all text-center min-h-[36px] flex items-center justify-center ${
              direction === 'reverse'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Reverse (Need $X)
          </button>
        </div>
      </div>

      {/* 2. Gateway Selector Cards with Authentic Brand Logos */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
          <span>Select Payment Gateway</span>
          <span className="text-[11px] text-slate-400 font-normal">Compare domestic & cross-border schedules</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
          {(Object.keys(GATEWAYS) as PaymentGatewayId[]).map((id) => {
            const g = GATEWAYS[id];
            const isSelected = gateway === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setGateway(id)}
                className={`tap-spring relative flex items-center gap-2.5 rounded-xl border p-2.5 sm:p-3 text-left transition-all ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 ring-2 ring-blue-100 shadow-xs font-bold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/70'
                }`}
              >
                <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <GatewayLogo gatewayId={id} size={24} className="h-6 w-6 rounded-md shadow-2xs" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-bold text-slate-900 leading-tight">
                    {g.name}
                  </div>
                  {g.badge ? (
                    <span
                      className={`inline-block mt-0.5 rounded px-1.5 py-0.2 text-[9px] font-extrabold uppercase tracking-wide ${
                        g.badge === 'Lowest Fee'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {g.badge}
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-normal truncate block">
                      {formatPercent(g.percentageRate * 100)} + {formatCurrency(g.fixedFee, currencySymbol)}
                    </span>
                  )}
                </div>
                {isSelected && (
                  <span className="absolute top-1.5 right-1.5 flex h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Transaction Amount Input & Quick Selectors */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-end">
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

        {/* Quick Amount Pills */}
        <div className="md:col-span-6">
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Standard Volume Benchmarks
          </label>
          <div className="grid grid-cols-4 gap-2">
            {PRESET_AMOUNTS.map((preset) => {
              const isSelected = numericAmount === preset;
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(String(preset))}
                  className={`tap-spring rounded-xl border py-2.5 text-xs font-mono font-bold transition-all text-center ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-xs ring-2 ring-blue-100'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {currencySymbol}{preset.toLocaleString()}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Cross-Border & Foreign Exchange Options */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap gap-4 sm:gap-6 text-xs">
        <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-slate-900 font-medium">
          <input
            type="checkbox"
            checked={isInternational}
            onChange={(e) => setIsInternational(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="flex items-center gap-1.5">
            <Globe2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>
              International / Foreign Card (+{formatPercent(activeGatewayConfig.intlExtraPercentage * 100)})
            </span>
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-slate-900 font-medium">
          <input
            type="checkbox"
            checked={applyFx}
            onChange={(e) => setApplyFx(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="flex items-center gap-1.5">
            <ArrowRightLeft className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>
              Currency Conversion Spread (+{formatPercent(activeGatewayConfig.currencyConversionRate * 100)})
            </span>
          </span>
        </label>
      </div>

      {/* 5. Results Stat Cards (2x2 on Mobile, 4x1 on Desktop) */}
      <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        <MetricCard
          label={direction === 'forward' ? 'You Invoice Client' : 'Total Amount to Charge'}
          value={formatCurrency(result.grossAmount, currencySymbol)}
          subtext={direction === 'forward' ? 'Base customer charge' : `Marked up to absorb ${result.effectiveFeeRate.toFixed(2)}% fee`}
          accent="blue"
        />

        <MetricCard
          label="Total Processing Deductions"
          value={`-${formatCurrency(result.totalFee, currencySymbol)}`}
          subtext={`${formatPercent((activeGatewayConfig.percentageRate + (isInternational ? activeGatewayConfig.intlExtraPercentage : 0) + (applyFx ? activeGatewayConfig.currencyConversionRate : 0)) * 100)} + ${formatCurrency(activeGatewayConfig.fixedFee, currencySymbol)} fixed`}
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

      {/* 6. Visual Waterfall Progress Bar */}
      {result.grossAmount > 0 && (
        <div className="mt-5 sm:mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Payout Breakdown Waterfall</span>
            </span>
            <span className="font-mono text-xs font-semibold text-slate-600">
              {result.netAmount > 0 ? ((result.netAmount / result.grossAmount) * 100).toFixed(1) : 0}% Net vs {result.effectiveFeeRate.toFixed(1)}% Fee
            </span>
          </div>

          <div className="h-3.5 w-full rounded-full bg-slate-200 overflow-hidden flex shadow-inner">
            <div
              style={{ width: `${Math.max(2, (result.netAmount / (result.grossAmount || 1)) * 100)}%` }}
              className="bg-emerald-500 transition-all duration-300"
              title={`Net Payout: ${formatCurrency(result.netAmount, currencySymbol)}`}
            />
            <div
              style={{ width: `${Math.min(98, (result.totalFee / (result.grossAmount || 1)) * 100)}%` }}
              className="bg-rose-500 transition-all duration-300"
              title={`Gateway Fee: ${formatCurrency(result.totalFee, currencySymbol)}`}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 pt-0.5">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block shadow-xs shrink-0" />
              <span>Net Received:</span>
              <strong className="text-slate-900 font-mono">{formatCurrency(result.netAmount, currencySymbol)}</strong>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block shadow-xs shrink-0" />
              <span>Gateway Fee:</span>
              <strong className="text-slate-900 font-mono">-{formatCurrency(result.totalFee, currencySymbol)}</strong>
            </span>
          </div>
        </div>
      )}

      {/* 7. Competitor Comparison Matrix with Brand Logos & Instant Switching */}
      {result.competitorComparison.length > 0 && (
        <div className="mt-5 sm:mt-6 rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-6 shadow-xs space-y-3.5 sm:space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-slate-200 pb-3 sm:pb-4">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <span>Competitor Fee Comparison</span>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  at {formatCurrency(result.grossAmount, currencySymbol)}
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Exact net payout differences across major merchant networks. Click any card to switch.
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyBreakdown}
              className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 sm:py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-xs w-full sm:w-auto justify-center min-h-[38px] sm:min-h-0"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> : <Copy className="h-3.5 w-3.5 text-slate-400 shrink-0" />}
              <span>{copied ? 'Copied Breakdown!' : 'Copy Breakdown'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {result.competitorComparison.map((comp) => {
              const isCurrent = comp.gatewayId === gateway;
              return (
                <div
                  key={comp.gatewayId}
                  onClick={() => setGateway(comp.gatewayId)}
                  className={`tap-spring cursor-pointer rounded-xl border p-3.5 transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'border-blue-600 bg-blue-50/60 shadow-xs ring-2 ring-blue-100'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60 hover:shadow-2xs'
                  }`}
                >
                  <div>
                    {/* Brand Logo & Name */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <GatewayLogo gatewayId={comp.gatewayId} size={22} className="h-5.5 w-5.5 shrink-0 rounded" />
                        <span className={`text-xs font-bold truncate ${isCurrent ? 'text-blue-950' : 'text-slate-900'}`}>
                          {comp.name}
                        </span>
                      </div>
                      {isCurrent ? (
                        <span className="shrink-0 text-[9px] font-extrabold font-mono px-1.5 py-0.5 rounded bg-blue-600 text-white shadow-2xs">
                          SELECTED
                        </span>
                      ) : (
                        <span className="shrink-0 text-[9px] text-slate-400 group-hover:text-blue-600 transition-colors">
                          Switch
                        </span>
                      )}
                    </div>

                    {/* Net Payout Amount */}
                    <div className="text-base sm:text-lg font-extrabold text-slate-900 font-mono tracking-tight">
                      {formatCurrency(comp.netAmount, currencySymbol)}
                    </div>

                    {/* Fee & Effective % */}
                    <div className="mt-1 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>Fee: -{formatCurrency(comp.totalFee, currencySymbol)}</span>
                      <span className="font-mono text-[11px]">{comp.effectiveRate.toFixed(2)}%</span>
                    </div>
                  </div>

                  {/* Savings / Cost Pill */}
                  <div className="mt-3 pt-2 border-t border-slate-100/80">
                    {isCurrent ? (
                      <div className="text-[10px] font-bold text-blue-700 font-mono">
                        Active Calculation Baseline
                      </div>
                    ) : comp.differenceVsSelected !== 0 ? (
                      <div
                        className={`text-[11px] font-bold flex items-center gap-1 ${
                          comp.differenceVsSelected > 0 ? 'text-emerald-700' : 'text-slate-500'
                        }`}
                      >
                        {comp.differenceVsSelected > 0 ? (
                          <>
                            <TrendingUp className="h-3 w-3 text-emerald-600 shrink-0" />
                            <span>Save {formatCurrency(comp.differenceVsSelected, currencySymbol)}</span>
                          </>
                        ) : (
                          <>
                            <span>Costs {formatCurrency(Math.abs(comp.differenceVsSelected), currencySymbol)} more</span>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="text-[10px] text-slate-400 font-medium">
                        Identical schedule
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MerchantFeeCalculator;
