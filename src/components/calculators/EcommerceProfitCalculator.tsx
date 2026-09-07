'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  calculateEcommerceProfit,
  EcommercePlatform,
  ECOMMERCE_PLATFORMS,
} from '@/lib/engines/ecommerce-profit';
import { MetricCard } from '@/components/ui/MetricCard';
import { PlatformLogo } from '@/components/ui/PlatformLogos';
import { formatCurrency, formatPercent, cleanNumberInput, parseNumericValue } from '@/lib/utils/formatters';
import { decodeHashData } from '@/lib/utils/hash-sync';
import {
  Check,
  Copy,
  X,
  TrendingUp,
  Package,
  Truck,
  Megaphone,
  ShoppingBag,
  DollarSign,
  ArrowRight,
  Sparkles,
  Info,
} from 'lucide-react';

interface EcommerceProfitCalculatorProps {
  initialPlatform?: EcommercePlatform;
  initialPrice?: number;
  initialCogs?: number;
  initialFreight?: number;
  initialPrep?: number;
  initialAdSpend?: number;
  currencySymbol?: string;
  embedded?: boolean;
}

export function EcommerceProfitCalculator({
  initialPlatform = 'shopify',
  initialPrice = 49.99,
  initialCogs = 14.0,
  initialFreight = 2.5,
  initialPrep = 1.0,
  initialAdSpend = 10.0,
  currencySymbol = '$',
  embedded = false,
}: EcommerceProfitCalculatorProps) {
  const [platform, setPlatform] = useState<EcommercePlatform>(initialPlatform);
  const [price, setPrice] = useState<string>(initialPrice !== undefined ? String(initialPrice) : '49.99');
  const [cogs, setCogs] = useState<string>(initialCogs !== undefined ? String(initialCogs) : '14.00');
  const [freight, setFreight] = useState<string>(initialFreight !== undefined ? String(initialFreight) : '2.50');
  const [prep, setPrep] = useState<string>(initialPrep !== undefined ? String(initialPrep) : '1.00');
  const [adSpend, setAdSpend] = useState<string>(initialAdSpend !== undefined ? String(initialAdSpend) : '10.00');
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
      if (typeof saved.price === 'number') setPrice(String(saved.price));
      if (typeof saved.cogs === 'number') setCogs(String(saved.cogs));
      if (typeof saved.freight === 'number') setFreight(String(saved.freight));
      if (typeof saved.prep === 'number') setPrep(String(saved.prep));
      if (typeof saved.ad === 'number') setAdSpend(String(saved.ad));
    }
  }, []);

  const numPrice = parseNumericValue(price, 0);
  const numCogs = parseNumericValue(cogs, 0);
  const numFreight = parseNumericValue(freight, 0);
  const numPrep = parseNumericValue(prep, 0);
  const numAdSpend = parseNumericValue(adSpend, 0);

  const result = calculateEcommerceProfit({
    sellingPrice: numPrice,
    productCost: numCogs,
    shippingToWarehouse: numFreight,
    packagingPrepCost: numPrep,
    adSpendPerUnit: numAdSpend,
    platform,
    currencySymbol,
  });

  const landedCost = numCogs + numFreight + numPrep;
  const platformConfig = ECOMMERCE_PLATFORMS[platform] || ECOMMERCE_PLATFORMS.shopify;

  // Cross-channel comparison calculation
  const platformComparisons = useMemo(() => {
    return (Object.keys(ECOMMERCE_PLATFORMS) as EcommercePlatform[]).map((pId) => {
      const res = calculateEcommerceProfit({
        sellingPrice: numPrice,
        productCost: numCogs,
        shippingToWarehouse: numFreight,
        packagingPrepCost: numPrep,
        adSpendPerUnit: numAdSpend,
        platform: pId,
        currencySymbol,
      });
      const diffVsCurrent = res.netProfitPerUnit - result.netProfitPerUnit;
      return {
        platformId: pId,
        config: ECOMMERCE_PLATFORMS[pId],
        netProfit: res.netProfitPerUnit,
        netMargin: res.netMarginPercentage,
        totalFees: res.platformFees + res.fulfillmentFees,
        isCurrent: pId === platform,
        diffVsCurrent,
      };
    });
  }, [numPrice, numCogs, numFreight, numPrep, numAdSpend, platform, currencySymbol, result.netProfitPerUnit]);

  // Waterfall breakdown percentages
  const waterfallPercentages = useMemo(() => {
    if (numPrice <= 0) return { profit: 0, cogs: 0, shipping: 0, ad: 0, fees: 0 };
    const profitPct = Math.max(0, (result.netProfitPerUnit / numPrice) * 100);
    const cogsPct = Math.max(0, (numCogs / numPrice) * 100);
    const freightPrepPct = Math.max(0, ((numFreight + numPrep) / numPrice) * 100);
    const adPct = Math.max(0, (numAdSpend / numPrice) * 100);
    const feesPct = Math.max(0, ((result.platformFees + result.fulfillmentFees) / numPrice) * 100);
    return {
      profit: Number(profitPct.toFixed(1)),
      cogs: Number(cogsPct.toFixed(1)),
      shipping: Number(freightPrepPct.toFixed(1)),
      ad: Number(adPct.toFixed(1)),
      fees: Number(feesPct.toFixed(1)),
    };
  }, [numPrice, result.netProfitPerUnit, numCogs, numFreight, numPrep, numAdSpend, result.platformFees, result.fulfillmentFees]);

  const handleCopyBreakdown = () => {
    const text = `FeeKit E-Commerce Unit Economics (${platformConfig.name}):
Retail Price: ${currencySymbol}${result.sellingPrice.toFixed(2)}
Landed Cost (COGS + Freight + Prep): ${currencySymbol}${result.landedCost.toFixed(2)}
Platform & Fulfillment Fees: -${currencySymbol}${(result.platformFees + result.fulfillmentFees).toFixed(2)}
Target CAC / Ad Spend: -${currencySymbol}${numAdSpend.toFixed(2)}
---------------------------------------------
Net Profit / Unit: ${currencySymbol}${result.netProfitPerUnit.toFixed(2)} (${result.netMarginPercentage.toFixed(2)}% margin)
Markup on Total Cost: ${result.markupPercentage.toFixed(1)}%
Break-Even ROAS: ${result.breakEvenRoas.toFixed(2)}x
Scale @ 1,000 Units/mo: ${currencySymbol}${(result.netProfitPerUnit * 1000).toLocaleString(undefined, { minimumFractionDigits: 2 })}
Calculated with FeeKit: https://usefeekit.com/tools/ecommerce-profit-calculator`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platformsList = Object.keys(ECOMMERCE_PLATFORMS) as EcommercePlatform[];

  return (
    <div className={embedded ? "space-y-6" : "rounded-2xl border border-slate-200 bg-white p-4 sm:p-7 shadow-sm space-y-6"}>
      {/* Platform Selector Bar with Official Brand Logos */}
      <div>
        <div className="flex items-center justify-between mb-3 px-0.5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              E-Commerce Selling Channel
            </span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline-block">
            Select marketplace or platform model
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {platformsList.map((p) => {
            const isSelected = platform === p;
            const cfg = ECOMMERCE_PLATFORMS[p];
            return (
              <button
                key={p}
                type="button"
                onClick={() => setPlatform(p)}
                className={`relative flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/20 ring-2 ring-blue-600/20 shadow-sm'
                    : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/50 hover:shadow-2xs'
                }`}
              >
                <PlatformLogo platform={p} size={28} className="shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`text-xs font-bold truncate ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                      {cfg.name}
                    </span>
                    {isSelected && (
                      <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-600 text-white leading-none">
                        Active
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-500 truncate block mt-0.5">
                    {p === 'amazon_fba'
                      ? '15% + FBA Pick'
                      : p === 'shopify'
                      ? '2.9% + $0.30'
                      : p === 'etsy'
                      ? '6.5% + 3%'
                      : p === 'ebay'
                      ? '13.25% + 30¢'
                      : '2.9% + 30¢'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Parameters Grid */}
      <div className="rounded-xl border border-slate-200/90 bg-slate-50/40 p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Unit Economics & Landed Cost Breakdown
          </h3>
          <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
            Landed Cost: <strong className="text-slate-900 font-mono">{formatCurrency(landedCost, currencySymbol)}</strong>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Retail Price */}
          <div className="col-span-1">
            <label htmlFor="ecom-selling-price" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
              <span>Retail Price</span>
              <span className="text-[10px] text-blue-600 font-normal">Customer price</span>
            </label>
            <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 shadow-xs transition-all">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono select-none">
                {currencySymbol}
              </span>
              <input
                id="ecom-selling-price"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={price}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setPrice(cleanNumberInput(e.target.value))}
                placeholder="0.00"
                className="w-full bg-transparent py-2.5 pl-7 pr-7 font-mono text-base font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              {price !== '' && (
                <button
                  type="button"
                  onClick={() => setPrice('')}
                  aria-label="Clear retail price"
                  className="absolute inset-y-0 right-0 flex items-center pr-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Product COGS */}
          <div className="col-span-1">
            <label htmlFor="ecom-cogs" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
              <span>Product COGS</span>
              <span className="text-[10px] text-slate-400 font-normal">Factory cost</span>
            </label>
            <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 shadow-xs transition-all">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono select-none">
                {currencySymbol}
              </span>
              <input
                id="ecom-cogs"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={cogs}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setCogs(cleanNumberInput(e.target.value))}
                placeholder="0.00"
                className="w-full bg-transparent py-2.5 pl-7 pr-7 font-mono text-base font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              {cogs !== '' && (
                <button
                  type="button"
                  onClick={() => setCogs('')}
                  aria-label="Clear product cost"
                  className="absolute inset-y-0 right-0 flex items-center pr-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Landed Freight */}
          <div className="col-span-1">
            <label htmlFor="ecom-freight-cost" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
              <span>Landed Freight</span>
              <span className="text-[10px] text-slate-400 font-normal">Sea/Air / unit</span>
            </label>
            <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 shadow-xs transition-all">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono select-none">
                {currencySymbol}
              </span>
              <input
                id="ecom-freight-cost"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={freight}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setFreight(cleanNumberInput(e.target.value))}
                placeholder="0.00"
                className="w-full bg-transparent py-2.5 pl-7 pr-7 font-mono text-base font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              {freight !== '' && (
                <button
                  type="button"
                  onClick={() => setFreight('')}
                  aria-label="Clear freight cost"
                  className="absolute inset-y-0 right-0 flex items-center pr-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Prep & Packaging */}
          <div className="col-span-1">
            <label htmlFor="ecom-packaging-cost" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
              <span>Prep & Packaging</span>
              <span className="text-[10px] text-slate-400 font-normal">Boxes, inserts</span>
            </label>
            <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 shadow-xs transition-all">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono select-none">
                {currencySymbol}
              </span>
              <input
                id="ecom-packaging-cost"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={prep}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setPrep(cleanNumberInput(e.target.value))}
                placeholder="0.00"
                className="w-full bg-transparent py-2.5 pl-7 pr-7 font-mono text-base font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              {prep !== '' && (
                <button
                  type="button"
                  onClick={() => setPrep('')}
                  aria-label="Clear packaging cost"
                  className="absolute inset-y-0 right-0 flex items-center pr-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Target CAC / Ad Spend */}
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="ecom-ad-spend" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
              <span>Target CAC / Ads</span>
              <span className="text-[10px] text-amber-600 font-semibold">Ad spend / unit</span>
            </label>
            <div className="relative rounded-xl border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 shadow-xs transition-all">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-slate-400 font-mono select-none">
                {currencySymbol}
              </span>
              <input
                id="ecom-ad-spend"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={adSpend}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setAdSpend(cleanNumberInput(e.target.value))}
                placeholder="0.00"
                className="w-full bg-transparent py-2.5 pl-7 pr-7 font-mono text-base font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              {adSpend !== '' && (
                <button
                  type="button"
                  onClick={() => setAdSpend('')}
                  aria-label="Clear ad spend"
                  className="absolute inset-y-0 right-0 flex items-center pr-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Price Preset Chips */}
        <div className="mt-3.5 pt-3 border-t border-slate-200/70 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
            Retail Price Presets:
          </span>
          {[29.99, 39.99, 49.99, 79.99, 99.99].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setPrice(String(preset))}
              className={`tap-spring rounded-lg px-2.5 py-1 text-xs font-mono font-semibold transition-colors ${
                numPrice === preset
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              {currencySymbol}{preset.toFixed(2)}
            </button>
          ))}
        </div>
      </div>

      {/* Key Output Metrics (4 Stat Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Net Profit / Unit */}
        <div className={`rounded-xl border p-4 sm:p-5 transition-all shadow-xs ${
          result.isProfitable
            ? 'border-emerald-200 bg-emerald-50/30'
            : 'border-rose-200 bg-rose-50/30'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">
              Net Profit / Unit
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              result.isProfitable
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                : 'bg-rose-100 text-rose-800 border border-rose-200'
            }`}>
              {result.isProfitable ? 'Profitable' : 'Loss'}
            </span>
          </div>
          <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${
            result.isProfitable ? 'text-emerald-600' : 'text-rose-600'
          }`}>
            {formatCurrency(result.netProfitPerUnit, currencySymbol)}
          </div>
          <div className="mt-1 text-xs text-slate-500 font-medium">
            Landed: <span className="font-mono text-slate-700">{formatCurrency(result.landedCost, currencySymbol)}</span>
          </div>
        </div>

        {/* Net Margin % */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/30 p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">
              Net Margin %
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
              Target
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-blue-600">
            {result.netMarginPercentage.toFixed(2)}%
          </div>
          <div className="mt-1 text-xs text-slate-500 font-medium">
            Markup: <span className="font-mono text-slate-700">{result.markupPercentage.toFixed(1)}%</span>
          </div>
        </div>

        {/* Break-Even ROAS */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">
              Break-Even ROAS
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
              Min Target
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-amber-600">
            {result.breakEvenRoas > 100 ? 'N/A' : `${result.breakEvenRoas.toFixed(2)}x`}
          </div>
          <div className="mt-1 text-xs text-slate-500 font-medium">
            Target multiplier
          </div>
        </div>

        {/* Platform & Pick Fees */}
        <div className="rounded-xl border border-rose-200 bg-rose-50/30 p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">
              Platform / Pick
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
              Fee
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-rose-600">
            -{formatCurrency(result.platformFees + result.fulfillmentFees, currencySymbol)}
          </div>
          <div className="mt-1 text-xs text-slate-500 font-medium truncate">
            {platformConfig.name}
          </div>
        </div>
      </div>

      {/* Unit Economics Waterfall / Cost Breakdown Bar */}
      {numPrice > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Unit Economics Waterfall ({currencySymbol}{numPrice.toFixed(2)} Retail)
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Distribution of gross customer payment across costs, advertising, platform fees, and net profit
              </p>
            </div>
            <span className="text-xs font-bold font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
              {waterfallPercentages.profit}% Net Take-Home
            </span>
          </div>

          {/* Progress Stack Bar */}
          <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden flex shadow-inner">
            {waterfallPercentages.profit > 0 && (
              <div
                style={{ width: `${Math.min(100, waterfallPercentages.profit)}%` }}
                className="bg-emerald-500 h-full transition-all duration-300"
                title={`Net Profit: ${currencySymbol}${result.netProfitPerUnit.toFixed(2)} (${waterfallPercentages.profit}%)`}
              />
            )}
            {waterfallPercentages.cogs > 0 && (
              <div
                style={{ width: `${Math.min(100, waterfallPercentages.cogs)}%` }}
                className="bg-slate-700 h-full transition-all duration-300"
                title={`Product COGS: ${currencySymbol}${numCogs.toFixed(2)} (${waterfallPercentages.cogs}%)`}
              />
            )}
            {waterfallPercentages.shipping > 0 && (
              <div
                style={{ width: `${Math.min(100, waterfallPercentages.shipping)}%` }}
                className="bg-indigo-500 h-full transition-all duration-300"
                title={`Freight & Prep: ${currencySymbol}${(numFreight + numPrep).toFixed(2)} (${waterfallPercentages.shipping}%)`}
              />
            )}
            {waterfallPercentages.ad > 0 && (
              <div
                style={{ width: `${Math.min(100, waterfallPercentages.ad)}%` }}
                className="bg-amber-500 h-full transition-all duration-300"
                title={`Ad CAC: ${currencySymbol}${numAdSpend.toFixed(2)} (${waterfallPercentages.ad}%)`}
              />
            )}
            {waterfallPercentages.fees > 0 && (
              <div
                style={{ width: `${Math.min(100, waterfallPercentages.fees)}%` }}
                className="bg-rose-500 h-full transition-all duration-300"
                title={`Platform Fees: ${currencySymbol}${(result.platformFees + result.fulfillmentFees).toFixed(2)} (${waterfallPercentages.fees}%)`}
              />
            )}
          </div>

          {/* Legend Badges */}
          <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="font-semibold">Profit:</span>
              <span className="font-mono text-emerald-700 font-bold">{currencySymbol}{result.netProfitPerUnit.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-700 shrink-0" />
              <span className="font-semibold">COGS:</span>
              <span className="font-mono text-slate-900 font-bold">{currencySymbol}{numCogs.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 shrink-0" />
              <span className="font-semibold">Freight/Prep:</span>
              <span className="font-mono text-slate-900 font-bold">{currencySymbol}{(numFreight + numPrep).toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shrink-0" />
              <span className="font-semibold">Ad Spend:</span>
              <span className="font-mono text-amber-700 font-bold">{currencySymbol}{numAdSpend.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0" />
              <span className="font-semibold">Platform:</span>
              <span className="font-mono text-rose-700 font-bold">{currencySymbol}{(result.platformFees + result.fulfillmentFees).toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Cross-Platform Marketplace Fee & Profit Comparison */}
      <div>
        <div className="flex items-center justify-between mb-3 px-0.5">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Cross-Channel Profit Comparison (at {currencySymbol}{numPrice.toFixed(2)} volume)
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Exact difference in take-home cash when selling this exact product on other channels (click any to switch)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {platformComparisons.map((comp) => {
            const isSelected = comp.isCurrent;
            const isMoreProfitable = comp.diffVsCurrent > 0.005;
            const isLessProfitable = comp.diffVsCurrent < -0.005;
            return (
              <button
                key={comp.platformId}
                type="button"
                onClick={() => setPlatform(comp.platformId)}
                className={`group relative rounded-xl border p-3.5 text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-blue-600 bg-white ring-2 ring-blue-600/20 shadow-md -translate-y-0.5'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <PlatformLogo platform={comp.platformId} size={24} />
                    <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {comp.config.name}
                    </span>
                  </div>
                  {isSelected ? (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-600 text-white">
                      SELECTED
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-600">
                      Switch →
                    </span>
                  )}
                </div>

                <div className="space-y-1 mt-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] text-slate-500">Net / Unit:</span>
                    <span className={`text-sm font-mono font-extrabold ${
                      comp.netProfit > 0 ? 'text-slate-900' : 'text-rose-600'
                    }`}>
                      {formatCurrency(comp.netProfit, currencySymbol)}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between text-[11px]">
                    <span className="text-slate-500">Platform Fee:</span>
                    <span className="text-rose-600 font-mono font-semibold">
                      -{formatCurrency(comp.totalFees, currencySymbol)}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between text-[11px]">
                    <span className="text-slate-500">Margin:</span>
                    <span className="font-mono text-slate-700 font-bold">
                      {comp.netMargin.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Relative Difference Pill */}
                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  {isSelected ? (
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded block text-center">
                      Current Platform Active
                    </span>
                  ) : isMoreProfitable ? (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded block text-center">
                      +{formatCurrency(comp.diffVsCurrent, currencySymbol)} more profit
                    </span>
                  ) : isLessProfitable ? (
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded block text-center">
                      {formatCurrency(Math.abs(comp.diffVsCurrent), currencySymbol)} less profit
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded block text-center">
                      Identical net margin
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Monthly Scale Projections Table */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Monthly Scale Projections ({platformConfig.name})
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Projected net earnings based on your current unit economics
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopyBreakdown}
            className="tap-spring inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-2xs self-start sm:self-auto cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied Details!' : 'Copy Unit Economics'}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {result.volumeProjections.map((vol) => (
            <div
              key={vol.units}
              className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-500 font-mono">
                <span>{vol.units.toLocaleString()} Units / mo</span>
              </div>
              <div className={`mt-2 text-base sm:text-lg font-extrabold font-mono tracking-tight ${
                vol.totalProfit > 0 ? 'text-emerald-600' : 'text-rose-600'
              }`}>
                {formatCurrency(vol.totalProfit, currencySymbol)}
              </div>
              <div className="mt-1 text-[11px] text-slate-500 font-medium">
                Gross: <span className="font-mono text-slate-700">{formatCurrency(vol.totalRevenue, currencySymbol)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
