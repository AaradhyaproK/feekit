'use client';

import React, { useState, useEffect } from 'react';
import {
  calculateEcommerceProfit,
  EcommercePlatform,
  ECOMMERCE_PLATFORMS,
} from '@/lib/engines/ecommerce-profit';
import { MetricCard } from '@/components/ui/MetricCard';
import { formatCurrency, formatPercent } from '@/lib/utils/formatters';
import { decodeHashData } from '@/lib/utils/hash-sync';
import { Check, Copy } from 'lucide-react';

interface EcommerceProfitCalculatorProps {
  initialPlatform?: EcommercePlatform;
  initialPrice?: number;
  initialCogs?: number;
  initialFreight?: number;
  initialPrep?: number;
  initialAdSpend?: number;
  currencySymbol?: string;
}

export function EcommerceProfitCalculator({
  initialPlatform = 'amazon_fba',
  initialPrice = 49.99,
  initialCogs = 12.0,
  initialFreight = 2.5,
  initialPrep = 1.0,
  initialAdSpend = 10.0,
  currencySymbol = '$',
}: EcommerceProfitCalculatorProps) {
  const [platform, setPlatform] = useState<EcommercePlatform>(initialPlatform);
  const [price, setPrice] = useState<number>(initialPrice);
  const [cogs, setCogs] = useState<number>(initialCogs);
  const [freight, setFreight] = useState<number>(initialFreight);
  const [prep, setPrep] = useState<number>(initialPrep);
  const [adSpend, setAdSpend] = useState<number>(initialAdSpend);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const saved = decodeHashData<{
      platform?: EcommercePlatform;
      price?: number;
      cogs?: number;
      freight?: number;
      prep?: number;
      ad?: number;
    }>();
    if (saved) {
      if (saved.platform) setPlatform(saved.platform);
      if (typeof saved.price === 'number') setPrice(saved.price);
      if (typeof saved.cogs === 'number') setCogs(saved.cogs);
      if (typeof saved.freight === 'number') setFreight(saved.freight);
      if (typeof saved.prep === 'number') setPrep(saved.prep);
      if (typeof saved.ad === 'number') setAdSpend(saved.ad);
    }
  }, []);

  const result = calculateEcommerceProfit({
    sellingPrice: price,
    productCost: cogs,
    shippingToWarehouse: freight,
    packagingPrepCost: prep,
    adSpendPerUnit: adSpend,
    platform,
    currencySymbol,
  });

  const handleCopyBreakdown = () => {
    const text = `FeeKit E-Commerce Unit Economics (${ECOMMERCE_PLATFORMS[platform].name}):
Retail Price: ${currencySymbol}${result.sellingPrice.toFixed(2)}
Landed Cost (COGS + Freight + Prep): ${currencySymbol}${result.landedCost.toFixed(2)}
Platform Fees: -${currencySymbol}${result.platformFees.toFixed(2)}
Fulfillment: -${currencySymbol}${result.fulfillmentFees.toFixed(2)}
Ad Spend (CAC): -${currencySymbol}${adSpend.toFixed(2)}
Net Profit / Unit: ${currencySymbol}${result.netProfitPerUnit.toFixed(2)} (${result.netMarginPercentage.toFixed(2)}% margin)
Break-Even ROAS Target: ${result.breakEvenRoas.toFixed(2)}x
Calculated via: https://usefeekit.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-3 sm:pb-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-slate-500">Platform Channel:</span>
          <span className="font-bold text-slate-900">{ECOMMERCE_PLATFORMS[platform].name}</span>
        </div>

        {/* Platform Selector Buttons with Smooth Touch Scroll */}
        <div className="w-full sm:w-auto min-w-0 max-w-full overflow-x-auto py-1 scrollbar-none flex gap-1.5 no-scrollbar smooth-scroll-x">
          {(Object.keys(ECOMMERCE_PLATFORMS) as EcommercePlatform[]).map((p) => {
            const isSelected = platform === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => setPlatform(p)}
                className={`tap-spring shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {ECOMMERCE_PLATFORMS[p].name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Parameters Grid (2 columns on mobile for compact efficiency) */}
      <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        <div className="col-span-1">
          <label htmlFor="ecom-selling-price" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Retail Price
          </label>
          <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 shadow-xs">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono">
              {currencySymbol}
            </span>
            <input
              id="ecom-selling-price"
              type="number"
              min="0"
              step="any"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full bg-transparent py-2.5 pl-8 pr-2 font-mono text-base font-bold text-slate-900 focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-1">
          <label htmlFor="ecom-cogs" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Product COGS
          </label>
          <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 shadow-xs">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono">
              {currencySymbol}
            </span>
            <input
              id="ecom-cogs"
              type="number"
              min="0"
              step="any"
              value={cogs}
              onChange={(e) => setCogs(Number(e.target.value))}
              className="w-full bg-transparent py-2.5 pl-8 pr-2 font-mono text-base font-bold text-slate-900 focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-1">
          <label htmlFor="ecom-freight-cost" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Landed Freight
          </label>
          <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 shadow-xs">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono">
              {currencySymbol}
            </span>
            <input
              id="ecom-freight-cost"
              type="number"
              min="0"
              step="any"
              value={freight}
              onChange={(e) => setFreight(Number(e.target.value))}
              className="w-full bg-transparent py-2.5 pl-8 pr-2 font-mono text-base font-bold text-slate-900 focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-1">
          <label htmlFor="ecom-packaging-cost" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Prep & Packaging
          </label>
          <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 shadow-xs">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono">
              {currencySymbol}
            </span>
            <input
              id="ecom-packaging-cost"
              type="number"
              min="0"
              step="any"
              value={prep}
              onChange={(e) => setPrep(Number(e.target.value))}
              className="w-full bg-transparent py-2.5 pl-8 pr-2 font-mono text-base font-bold text-slate-900 focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="ecom-ad-spend" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Target CAC / Ad Spend
          </label>
          <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 shadow-xs">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono">
              {currencySymbol}
            </span>
            <input
              id="ecom-ad-spend"
              type="number"
              min="0"
              step="any"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full bg-transparent py-2.5 pl-8 pr-3 font-mono text-base font-bold text-slate-900 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Metrics Cards (2x2 on mobile, 4x1 on desktop) */}
      <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <MetricCard
          label="Net Profit / Unit"
          value={formatCurrency(result.netProfitPerUnit, currencySymbol)}
          subtext={`Landed: ${formatCurrency(result.landedCost, currencySymbol)}`}
          badge={result.isProfitable ? 'Profitable' : 'Loss'}
          accent={result.isProfitable ? 'emerald' : 'rose'}
        />

        <MetricCard
          label="Net Margin %"
          value={`${result.netMarginPercentage.toFixed(2)}%`}
          subtext={`Markup: ${result.markupPercentage.toFixed(1)}%`}
          accent="blue"
        />

        <MetricCard
          label="Break-Even ROAS"
          value={result.breakEvenRoas > 100 ? 'N/A' : `${result.breakEvenRoas.toFixed(2)}x`}
          subtext="Target multiplier"
          accent="amber"
        />

        <MetricCard
          label="Platform / Pick"
          value={`-${formatCurrency(result.platformFees + result.fulfillmentFees, currencySymbol)}`}
          subtext={ECOMMERCE_PLATFORMS[platform].name}
          accent="cyan"
        />
      </div>

      {/* Monthly Projections Table */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/70 p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-wide">
              Monthly Scale Projections
            </h3>
            <p className="text-xs text-slate-500">
              Projected net earnings based on your current unit economics
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopyBreakdown}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-xs"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied Details!' : 'Copy Unit Economics'}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {result.volumeProjections.map((vol) => (
            <div
              key={vol.units}
              className="rounded-lg border border-slate-200 bg-white p-3.5 shadow-xs"
            >
              <span className="text-xs font-semibold uppercase text-slate-500 font-mono">
                {vol.units.toLocaleString()} Units / mo
              </span>
              <div className="mt-2 text-base font-extrabold text-slate-900 font-mono">
                {formatCurrency(vol.totalProfit, currencySymbol)}
              </div>
              <div className="mt-0.5 text-[11px] text-slate-500">
                Gross: {formatCurrency(vol.totalRevenue, currencySymbol)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
