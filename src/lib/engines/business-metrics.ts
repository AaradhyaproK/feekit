/**
 * FeeKit Business Metrics Calculation Engine
 * High-precision algorithms for Profit Margins, Markups, Break-Even, and ROI.
 */

export interface ProfitMarginInput {
  revenue: number;
  cogs: number;
  operatingExpenses?: number;
}

export interface ProfitMarginResult {
  revenue: number;
  cogs: number;
  operatingExpenses: number;
  grossProfit: number;
  grossMarginPct: number;
  markupPct: number;
  netProfit: number;
  netMarginPct: number;
}

export function calculateProfitMargin(input: ProfitMarginInput): ProfitMarginResult {
  const revenue = Math.max(0, input.revenue);
  const cogs = Math.max(0, input.cogs);
  const operatingExpenses = Math.max(0, input.operatingExpenses || 0);

  const grossProfit = revenue - cogs;
  const grossMarginPct = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
  const markupPct = cogs > 0 ? (grossProfit / cogs) * 100 : 0;
  const netProfit = grossProfit - operatingExpenses;
  const netMarginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0;

  return {
    revenue: Number(revenue.toFixed(2)),
    cogs: Number(cogs.toFixed(2)),
    operatingExpenses: Number(operatingExpenses.toFixed(2)),
    grossProfit: Number(grossProfit.toFixed(2)),
    grossMarginPct: Number(grossMarginPct.toFixed(2)),
    markupPct: Number(markupPct.toFixed(2)),
    netProfit: Number(netProfit.toFixed(2)),
    netMarginPct: Number(netMarginPct.toFixed(2)),
  };
}

export interface BreakEvenInput {
  fixedCosts: number;
  salePricePerUnit: number;
  variableCostPerUnit: number;
}

export interface BreakEvenResult {
  fixedCosts: number;
  salePricePerUnit: number;
  variableCostPerUnit: number;
  contributionMargin: number;
  contributionMarginRatio: number;
  breakEvenUnits: number;
  breakEvenRevenue: number;
}

export function calculateBreakEven(input: BreakEvenInput): BreakEvenResult {
  const fixedCosts = Math.max(0, input.fixedCosts);
  const salePrice = Math.max(0, input.salePricePerUnit);
  const variableCost = Math.max(0, input.variableCostPerUnit);

  const contributionMargin = Math.max(0, salePrice - variableCost);
  const contributionMarginRatio = salePrice > 0 ? (contributionMargin / salePrice) * 100 : 0;
  const breakEvenUnits = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : 0;
  const breakEvenRevenue = breakEvenUnits * salePrice;

  return {
    fixedCosts: Number(fixedCosts.toFixed(2)),
    salePricePerUnit: Number(salePrice.toFixed(2)),
    variableCostPerUnit: Number(variableCost.toFixed(2)),
    contributionMargin: Number(contributionMargin.toFixed(2)),
    contributionMarginRatio: Number(contributionMarginRatio.toFixed(2)),
    breakEvenUnits,
    breakEvenRevenue: Number(breakEvenRevenue.toFixed(2)),
  };
}

export interface RoiInput {
  initialInvestment: number;
  finalValue: number;
  durationYears?: number;
}

export interface RoiResult {
  initialInvestment: number;
  finalValue: number;
  netReturn: number;
  roiPct: number;
  annualizedRoiPct: number;
  durationYears: number;
}

export function calculateRoi(input: RoiInput): RoiResult {
  const initial = Math.max(0, input.initialInvestment);
  const finalVal = Math.max(0, input.finalValue);
  const years = Math.max(0.01, input.durationYears || 1);

  const netReturn = finalVal - initial;
  const roiPct = initial > 0 ? (netReturn / initial) * 100 : 0;

  // CAGR = (Final / Initial) ^ (1 / years) - 1
  let annualizedRoiPct = 0;
  if (initial > 0 && finalVal > 0) {
    annualizedRoiPct = (Math.pow(finalVal / initial, 1 / years) - 1) * 100;
  } else if (initial > 0 && finalVal <= 0) {
    annualizedRoiPct = -100;
  }

  return {
    initialInvestment: Number(initial.toFixed(2)),
    finalValue: Number(finalVal.toFixed(2)),
    netReturn: Number(netReturn.toFixed(2)),
    roiPct: Number(roiPct.toFixed(2)),
    annualizedRoiPct: Number(annualizedRoiPct.toFixed(2)),
    durationYears: Number(years.toFixed(2)),
  };
}
