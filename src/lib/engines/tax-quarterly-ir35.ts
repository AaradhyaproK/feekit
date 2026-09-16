/**
 * FeeKit Tax Compliance Engine: US Form 1040-ES Quarterly Tax & UK IR35 Comparison
 * Accurate mathematical models for IRS and HMRC statutory compliance.
 */

// ============================================================================
// 1. US IRS 1040-ES Quarterly Estimated Tax Engine
// ============================================================================

export type FilingStatus = 'single' | 'married_joint' | 'head_of_household';

export interface QuarterlyTaxInput {
  annualGrossIncome: number;
  annualBusinessExpenses: number;
  filingStatus?: FilingStatus;
  otherIncome?: number;
  w2Withholding?: number;
}

export interface QuarterlyVoucher {
  quarter: string;
  dueDate: string;
  amount: number;
}

export interface QuarterlyTaxResult {
  netProfit: number;
  seTaxableIncome: number;
  selfEmploymentTax: number;
  seTaxDeduction: number; // 50% of SE tax
  adjustedGrossIncome: number;
  standardDeduction: number;
  taxableIncome: number;
  estimatedFederalIncomeTax: number;
  totalAnnualTax: number;
  netAnnualTaxDue: number; // after W-2 withholding
  quarterlyPayment: number;
  vouchers: QuarterlyVoucher[];
  effectiveTaxRate: number;
}

export function calculateQuarterlyTax(input: QuarterlyTaxInput): QuarterlyTaxResult {
  const gross = Math.max(0, input.annualGrossIncome);
  const expenses = Math.max(0, input.annualBusinessExpenses);
  const status = input.filingStatus || 'single';
  const otherIncome = Math.max(0, input.otherIncome || 0);
  const w2Withholding = Math.max(0, input.w2Withholding || 0);

  const netProfit = Math.max(0, gross - expenses);

  // 1. Self-Employment Tax (Schedule SE)
  // 92.35% of net earnings are subject to 15.3% SE tax (12.4% SS + 2.9% Medicare)
  const seTaxableIncome = netProfit * 0.9235;
  const ssWageCap = 168600;
  const ssTax = Math.min(seTaxableIncome, ssWageCap) * 0.124;
  const medicareTax = seTaxableIncome * 0.029;
  const selfEmploymentTax = ssTax + medicareTax;

  // 2. Adjustments & Standard Deduction
  const seTaxDeduction = selfEmploymentTax * 0.5;
  const adjustedGrossIncome = Math.max(0, netProfit + otherIncome - seTaxDeduction);

  const standardDeductionMap: Record<FilingStatus, number> = {
    single: 14600,
    married_joint: 29200,
    head_of_household: 21900,
  };
  const standardDeduction = standardDeductionMap[status];
  const taxableIncome = Math.max(0, adjustedGrossIncome - standardDeduction);

  // 3. Federal Income Tax Brackets (2026 projection)
  let federalTax = 0;
  if (status === 'married_joint') {
    federalTax = calculateBrackets(taxableIncome, [
      { limit: 23200, rate: 0.10 },
      { limit: 94300, rate: 0.12 },
      { limit: 201050, rate: 0.22 },
      { limit: 383900, rate: 0.24 },
      { limit: 487450, rate: 0.32 },
      { limit: 731200, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ]);
  } else {
    federalTax = calculateBrackets(taxableIncome, [
      { limit: 11600, rate: 0.10 },
      { limit: 47150, rate: 0.12 },
      { limit: 100525, rate: 0.22 },
      { limit: 191950, rate: 0.24 },
      { limit: 243725, rate: 0.32 },
      { limit: 609350, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ]);
  }

  const totalAnnualTax = selfEmploymentTax + federalTax;
  const netAnnualTaxDue = Math.max(0, totalAnnualTax - w2Withholding);
  const quarterlyPayment = Number((netAnnualTaxDue / 4).toFixed(2));

  const vouchers: QuarterlyVoucher[] = [
    { quarter: 'Q1', dueDate: 'April 15, 2026', amount: quarterlyPayment },
    { quarter: 'Q2', dueDate: 'June 15, 2026', amount: quarterlyPayment },
    { quarter: 'Q3', dueDate: 'September 15, 2026', amount: quarterlyPayment },
    { quarter: 'Q4', dueDate: 'January 15, 2027', amount: quarterlyPayment },
  ];

  const effectiveTaxRate = gross > 0 ? (totalAnnualTax / gross) * 100 : 0;

  return {
    netProfit: Number(netProfit.toFixed(2)),
    seTaxableIncome: Number(seTaxableIncome.toFixed(2)),
    selfEmploymentTax: Number(selfEmploymentTax.toFixed(2)),
    seTaxDeduction: Number(seTaxDeduction.toFixed(2)),
    adjustedGrossIncome: Number(adjustedGrossIncome.toFixed(2)),
    standardDeduction,
    taxableIncome: Number(taxableIncome.toFixed(2)),
    estimatedFederalIncomeTax: Number(federalTax.toFixed(2)),
    totalAnnualTax: Number(totalAnnualTax.toFixed(2)),
    netAnnualTaxDue: Number(netAnnualTaxDue.toFixed(2)),
    quarterlyPayment,
    vouchers,
    effectiveTaxRate: Number(effectiveTaxRate.toFixed(2)),
  };
}

function calculateBrackets(income: number, brackets: Array<{ limit: number; rate: number }>): number {
  let tax = 0;
  let prevLimit = 0;
  for (const b of brackets) {
    if (income > prevLimit) {
      const taxableInBracket = Math.min(income - prevLimit, b.limit - prevLimit);
      tax += taxableInBracket * b.rate;
      prevLimit = b.limit;
    } else {
      break;
    }
  }
  return tax;
}

// ============================================================================
// 2. UK IR35 Contractor Engine (Inside vs Outside IR35)
// ============================================================================

export interface Ir35Input {
  dayRate: number;
  workingDaysPerYear?: number;
  annualBusinessExpenses?: number;
  umbrellaWeeklyMargin?: number;
}

export interface Ir35ComparisonResult {
  dayRate: number;
  workingDays: number;
  grossContractRevenue: number;
  inside: {
    employerNi: number;
    apprenticeshipLevy: number;
    umbrellaMargin: number;
    taxableDeemedSalary: number;
    employeeNi: number;
    incomeTaxPaye: number;
    totalDeductions: number;
    netTakeHome: number;
    monthlyTakeHome: number;
    effectiveTaxRate: number;
  };
  outside: {
    businessExpenses: number;
    directorSalary: number;
    corporationTax: number;
    grossDividends: number;
    dividendTax: number;
    totalDeductions: number;
    netTakeHome: number;
    monthlyTakeHome: number;
    effectiveTaxRate: number;
  };
  takeHomeDifferenceAnnual: number;
  takeHomeDifferenceMonthly: number;
  outsideAdvantagePercent: number;
}

export function calculateIr35Comparison(input: Ir35Input): Ir35ComparisonResult {
  const dayRate = Math.max(0, input.dayRate);
  const workingDays = Math.max(1, input.workingDaysPerYear || 220); // 220 billable days typical
  const grossContractRevenue = dayRate * workingDays;
  const annualExpenses = Math.max(0, input.annualBusinessExpenses || 2500);
  const umbrellaWeeklyMargin = Math.max(0, input.umbrellaWeeklyMargin || 25);
  const umbrellaMarginAnnual = umbrellaWeeklyMargin * (workingDays / 5);

  // --- INSIDE IR35 CALCULATION (Umbrella Deemed Employment) ---
  // In an umbrella, Employer NI (13.8%) and Apprenticeship Levy (0.5%) are deducted from the assignment rate.
  // Employer NI secondary threshold: £9,100/yr (£175/wk)
  const employerThreshold = 9100;
  const grossForEmploymentTaxes = Math.max(0, grossContractRevenue - umbrellaMarginAnnual);
  
  // Employer NI approx 13.8% above threshold + 0.5% levy
  const employerNi = Math.max(0, (grossForEmploymentTaxes - employerThreshold) * 0.138);
  const apprenticeshipLevy = grossForEmploymentTaxes * 0.005;

  const grossSalary = Math.max(0, grossForEmploymentTaxes - employerNi - apprenticeshipLevy);

  // Employee NI: 8% on earnings between £12,570 and £50,270, 2% above £50,270
  let employeeNi = 0;
  if (grossSalary > 12570) {
    const niBand1 = Math.min(grossSalary, 50270) - 12570;
    employeeNi += niBand1 * 0.08;
    if (grossSalary > 50270) {
      employeeNi += (grossSalary - 50270) * 0.02;
    }
  }

  // PAYE Income Tax (UK standard: £12,570 personal allowance, 20% to £50,270, 40% to £125,140, 45% above)
  let incomeTaxPaye = 0;
  if (grossSalary > 12570) {
    const basicBand = Math.min(grossSalary, 50270) - 12570;
    incomeTaxPaye += basicBand * 0.20;
    if (grossSalary > 50270) {
      const higherBand = Math.min(grossSalary, 125140) - 50270;
      incomeTaxPaye += higherBand * 0.40;
      if (grossSalary > 125140) {
        incomeTaxPaye += (grossSalary - 125140) * 0.45;
      }
    }
  }

  const insideTotalDeductions = employerNi + apprenticeshipLevy + umbrellaMarginAnnual + employeeNi + incomeTaxPaye;
  const insideNetTakeHome = Math.max(0, grossContractRevenue - insideTotalDeductions);
  const insideEffectiveRate = grossContractRevenue > 0 ? (insideTotalDeductions / grossContractRevenue) * 100 : 0;

  // --- OUTSIDE IR35 CALCULATION (Limited Company PSC) ---
  // Optimum salary: £12,570 (tax & employee NI free, covered by personal allowance)
  const directorSalary = Math.min(12570, grossContractRevenue);
  const preTaxProfit = Math.max(0, grossContractRevenue - directorSalary - annualExpenses);

  // UK Corporation Tax: 19% small profit rate up to £50,000, 25% above £250,000, marginal relief between
  let corporationTax = 0;
  if (preTaxProfit <= 50000) {
    corporationTax = preTaxProfit * 0.19;
  } else if (preTaxProfit >= 250000) {
    corporationTax = preTaxProfit * 0.25;
  } else {
    // Marginal relief formula
    corporationTax = preTaxProfit * 0.25 - (250000 - preTaxProfit) * (3 / 200);
  }

  const distributableProfit = Math.max(0, preTaxProfit - corporationTax);
  const grossDividends = distributableProfit;

  // Dividend Tax: £500 tax-free allowance, then 8.75% basic, 33.75% higher, 39.35% additional
  let dividendTax = 0;
  const taxableDividends = Math.max(0, grossDividends - 500);
  const basicBandRoom = Math.max(0, 50270 - directorSalary);
  
  if (taxableDividends > 0) {
    const divInBasic = Math.min(taxableDividends, basicBandRoom);
    dividendTax += divInBasic * 0.0875;
    const remainingDiv = taxableDividends - divInBasic;
    if (remainingDiv > 0) {
      const higherBandRoom = Math.max(0, 125140 - 50270);
      const divInHigher = Math.min(remainingDiv, higherBandRoom);
      dividendTax += divInHigher * 0.3375;
      const divInAdditional = remainingDiv - divInHigher;
      if (divInAdditional > 0) {
        dividendTax += divInAdditional * 0.3935;
      }
    }
  }

  const outsideTotalDeductions = annualExpenses + corporationTax + dividendTax;
  const outsideNetTakeHome = directorSalary + grossDividends - dividendTax;
  const outsideEffectiveRate = grossContractRevenue > 0 ? ((grossContractRevenue - outsideNetTakeHome) / grossContractRevenue) * 100 : 0;

  const takeHomeDiff = outsideNetTakeHome - insideNetTakeHome;
  const advantagePercent = insideNetTakeHome > 0 ? (takeHomeDiff / insideNetTakeHome) * 100 : 0;

  return {
    dayRate,
    workingDays,
    grossContractRevenue: Number(grossContractRevenue.toFixed(2)),
    inside: {
      employerNi: Number(employerNi.toFixed(2)),
      apprenticeshipLevy: Number(apprenticeshipLevy.toFixed(2)),
      umbrellaMargin: Number(umbrellaMarginAnnual.toFixed(2)),
      taxableDeemedSalary: Number(grossSalary.toFixed(2)),
      employeeNi: Number(employeeNi.toFixed(2)),
      incomeTaxPaye: Number(incomeTaxPaye.toFixed(2)),
      totalDeductions: Number(insideTotalDeductions.toFixed(2)),
      netTakeHome: Number(insideNetTakeHome.toFixed(2)),
      monthlyTakeHome: Number((insideNetTakeHome / 12).toFixed(2)),
      effectiveTaxRate: Number(insideEffectiveRate.toFixed(1)),
    },
    outside: {
      businessExpenses: Number(annualExpenses.toFixed(2)),
      directorSalary: Number(directorSalary.toFixed(2)),
      corporationTax: Number(corporationTax.toFixed(2)),
      grossDividends: Number(grossDividends.toFixed(2)),
      dividendTax: Number(dividendTax.toFixed(2)),
      totalDeductions: Number(outsideTotalDeductions.toFixed(2)),
      netTakeHome: Number(outsideNetTakeHome.toFixed(2)),
      monthlyTakeHome: Number((outsideNetTakeHome / 12).toFixed(2)),
      effectiveTaxRate: Number(outsideEffectiveRate.toFixed(1)),
    },
    takeHomeDifferenceAnnual: Number(takeHomeDiff.toFixed(2)),
    takeHomeDifferenceMonthly: Number((takeHomeDiff / 12).toFixed(2)),
    outsideAdvantagePercent: Number(advantagePercent.toFixed(1)),
  };
}
