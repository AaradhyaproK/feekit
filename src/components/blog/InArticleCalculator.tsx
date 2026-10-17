'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Check, Copy, ShieldCheck, Sparkles, Percent } from 'lucide-react';

interface Preset {
  id: string;
  name: string;
  badge: string;
  percent: number;
  fixed: number;
  description: string;
}

const PRESETS: Preset[] = [
  {
    id: 'surcharge-3',
    name: 'Compliant Surcharge',
    badge: '3.00% Cap',
    percent: 0.03,
    fixed: 0,
    description: 'Visa & Mastercard legal maximum cap (or actual cost)',
  },
  {
    id: 'stripe-us',
    name: 'Stripe USA',
    badge: '2.9% + 30¢',
    percent: 0.029,
    fixed: 0.3,
    description: 'Standard domestic card checkout',
  },
  {
    id: 'paypal-gs',
    name: 'PayPal Goods & Services',
    badge: '2.99% + 49¢',
    percent: 0.0299,
    fixed: 0.49,
    description: 'Standard commercial buyer/seller protection rate',
  },
  {
    id: 'square-inperson',
    name: 'Square In-Person POS',
    badge: '2.6% + 10¢',
    percent: 0.026,
    fixed: 0.1,
    description: 'Tapped, dipped, or swiped physical card reader',
  },
];

const QUICK_AMOUNTS = [250, 500, 1000, 2500, 5000];

export function InArticleCalculator({
  defaultPreset = 'surcharge-3',
  title = 'Interactive Reverse Fee & Surcharge Calculator',
}: {
  defaultPreset?: string;
  title?: string;
}) {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(defaultPreset);
  const [amount, setAmount] = useState<number>(1000);
  const [mode, setMode] = useState<'pass' | 'eat'>('pass');
  const [copied, setCopied] = useState<boolean>(false);

  const activePreset = useMemo(
    () => PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0],
    [selectedPresetId]
  );

  const calculations = useMemo(() => {
    const rawAmt = Math.max(1, amount);

    if (mode === 'pass') {
      // Gross up: Invoice = (Net + Fixed) / (1 - Rate)
      const gross = (rawAmt + activePreset.fixed) / (1 - activePreset.percent);
      const fee = gross - rawAmt;
      return {
        grossInvoice: gross,
        feeDeducted: fee,
        netPayout: rawAmt,
        effectiveRate: (fee / gross) * 100,
        moneySaved: fee,
      };
    } else {
      // Eat fee: Fee = (Gross * Rate) + Fixed
      const fee = rawAmt * activePreset.percent + activePreset.fixed;
      const net = Math.max(0, rawAmt - fee);
      return {
        grossInvoice: rawAmt,
        feeDeducted: fee,
        netPayout: net,
        effectiveRate: (fee / rawAmt) * 100,
        moneySaved: 0,
      };
    }
  }, [amount, activePreset, mode]);

  const handleCopySummary = () => {
    const text =
      mode === 'pass'
        ? `Invoice Amount: $${calculations.grossInvoice.toFixed(2)} | Processing Fee (${activePreset.badge}): $${calculations.feeDeducted.toFixed(2)} | Net Take-Home: $${calculations.netPayout.toFixed(2)} (Calculated on FeeKit)`
        : `Gross Payment: $${calculations.grossInvoice.toFixed(2)} | Processor Deducts: $${calculations.feeDeducted.toFixed(2)} | Net Received: $${calculations.netPayout.toFixed(2)} (Calculated on FeeKit)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="my-8 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/80 via-white to-blue-50/30 p-5 sm:p-7 shadow-xs not-prose">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{title}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                <Sparkles className="h-3 w-3" /> Live Tool
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              Calculate exact gross-up totals and avoid losing 3% to card processors
            </p>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center rounded-xl bg-slate-200/80 p-1 text-xs font-semibold self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setMode('pass')}
            className={`rounded-lg px-3 py-1.5 transition-all ${
              mode === 'pass'
                ? 'bg-white text-blue-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pass Fee to Client
          </button>
          <button
            type="button"
            onClick={() => setMode('eat')}
            className={`rounded-lg px-3 py-1.5 transition-all ${
              mode === 'eat'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Eat the Fee
          </button>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="mt-5 space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Select Fee Rate or Gateway Rule
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => setSelectedPresetId(preset.id)}
              className={`flex flex-col text-left p-2.5 rounded-xl border text-xs transition-all ${
                selectedPresetId === preset.id
                  ? 'border-blue-500 bg-blue-50/70 text-blue-900 ring-2 ring-blue-500/20 font-semibold'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="font-bold truncate">{preset.name}</span>
              <span className="text-[11px] font-mono text-blue-600">{preset.badge}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Amount Slider and Quick Pills */}
      <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {mode === 'pass' ? 'Desired Net Amount to Keep' : 'Gross Invoice / Charge Amount'}
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 font-bold text-sm">
              $
            </span>
            <input
              type="number"
              min={1}
              max={100000}
              step={10}
              value={amount || ''}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              className="w-32 sm:w-36 rounded-xl border border-slate-300 bg-white pl-7 pr-3 py-1.5 text-right font-mono text-base font-bold text-slate-900 shadow-2xs focus:border-blue-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Quick Amount Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-slate-400 mr-1">Quick Set:</span>
          {QUICK_AMOUNTS.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => setAmount(amt)}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                amount === amt
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ${amt.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Range Slider */}
        <input
          type="range"
          min={50}
          max={10000}
          step={50}
          value={amount > 10000 ? 10000 : amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          aria-label="Invoice Amount Slider"
        />
      </div>

      {/* Live Result Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Card 1: What to Invoice */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4 shadow-2xs">
          <span className="text-xs font-semibold text-blue-700 block">
            {mode === 'pass' ? 'Amount to Invoice Client' : 'Gross Client Payment'}
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-mono tracking-tight mt-1 block">
            ${calculations.grossInvoice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-[11px] text-blue-600/80 mt-1 block">
            {mode === 'pass' ? 'Includes reverse gross-up fee' : 'Base amount charged'}
          </span>
        </div>

        {/* Card 2: Processing Cut */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs">
          <span className="text-xs font-semibold text-slate-600 block">
            Processor Fee Cut ({activePreset.badge})
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-rose-600 font-mono tracking-tight mt-1 block">
            -${calculations.feeDeducted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-[11px] text-slate-500 mt-1 block">
            Effective take rate: {calculations.effectiveRate.toFixed(2)}%
          </span>
        </div>

        {/* Card 3: Exact Net Take-Home */}
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 shadow-2xs">
          <span className="text-xs font-semibold text-emerald-700 block flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Net Money In Your Bank
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-900 font-mono tracking-tight mt-1 block">
            ${calculations.netPayout.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-[11px] text-emerald-700/80 mt-1 block">
            {mode === 'pass' ? '100% of your target earnings' : 'Net after card deductions'}
          </span>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleCopySummary}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors w-full sm:w-auto justify-center"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-emerald-700 font-bold">Summary Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-slate-400" />
              <span>Copy Breakdown Summary</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <Link
            href="/invoice-generator"
            className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Create PDF Invoice →
          </Link>
          <Link
            href="/tools/stripe-fee-calculator/usa"
            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
          >
            <span>Full Fee Suite</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
