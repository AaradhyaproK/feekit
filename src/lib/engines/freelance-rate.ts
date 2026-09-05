export interface FreelanceRateInput {
  desiredNetIncome: number;     // e.g. $100,000
  workingWeeksPerYear?: number; // e.g. 48 (52 - 4 weeks vacation/sick)
  billableHoursPerWeek?: number;// e.g. 25 (remainder is marketing, admin, client comms)
  annualOverhead?: number;      // e.g. $12,000 (SaaS, laptop, health insurance, legal)
  taxRateEstimated?: number;    // e.g. 0.28 (28% combined self-employment + income tax)
  profitMarginBuffer?: number;  // e.g. 0.15 (15% for business reserve/rainy day)
  currencySymbol?: string;
  roleTitle?: string;
}

export interface FreelanceRateResult {
  minHourlyRate: number;
  recommendedHourlyRate: number;
  dayRate: number;              // 8-hour billable day
  monthlyRetainer: number;      // based on 20h/month or 1/4 allocation
  grossAnnualRevenueNeeded: number;
  totalTaxesEstimated: number;
  totalExpenses: number;
  netTakeHome: number;
  billableHoursPerYear: number;
  effectiveOverheadPerHour: number;
  effectiveTaxPerHour: number;
  invoiceProposalText: string;
}

export function calculateFreelanceRate(input: FreelanceRateInput): FreelanceRateResult {
  const {
    desiredNetIncome = 90000,
    workingWeeksPerYear = 48,
    billableHoursPerWeek = 25,
    annualOverhead = 12000,
    taxRateEstimated = 0.28,
    profitMarginBuffer = 0.15,
    currencySymbol = '$',
    roleTitle = 'Specialist Consultant',
  } = input;

  const validNet = Math.max(1000, desiredNetIncome);
  const validWeeks = Math.max(1, Math.min(52, workingWeeksPerYear));
  const validHours = Math.max(1, Math.min(60, billableHoursPerWeek));
  const totalBillableHoursPerYear = validWeeks * validHours;

  // Revenue needed before tax = Net Income / (1 - TaxRate)
  const preTaxIncomeNeeded = validNet / Math.max(0.1, 1 - taxRateEstimated);
  const totalTaxes = preTaxIncomeNeeded - validNet;

  // Gross Revenue Needed = Pre-tax income + Overhead + Profit Margin Buffer
  const baseRevenue = preTaxIncomeNeeded + Math.max(0, annualOverhead);
  const grossAnnualRevenue = baseRevenue * (1 + profitMarginBuffer);

  const minHourly = baseRevenue / totalBillableHoursPerYear;
  const recommendedHourly = grossAnnualRevenue / totalBillableHoursPerYear;
  const dayRate = recommendedHourly * 8;
  const monthlyRetainer = recommendedHourly * (validHours * 4 * 0.5); // half allocation monthly retainer

  const overheadPerHour = annualOverhead / totalBillableHoursPerYear;
  const taxPerHour = totalTaxes / totalBillableHoursPerYear;

  const invoiceProposalText = `
--- CLIENT PROPOSAL / INVOICE BREAKDOWN ---
Role: ${roleTitle}
Professional Hourly Rate: ${currencySymbol}${recommendedHourly.toFixed(2)}/hr
Standard Day Rate (8h): ${currencySymbol}${dayRate.toFixed(2)}
Monthly Advisory Retainer (approx. ${Math.round(validHours * 2)} hrs): ${currencySymbol}${monthlyRetainer.toFixed(2)}/mo

Notes:
- Standard payment terms: Net 14 / Net 30.
- Work covers technical scoping, execution, quality assurance, and direct async communication.
- Expenses incurred outside standard tooling will be pre-approved.
--------------------------------------------
`.trim();

  return {
    minHourlyRate: Number(minHourly.toFixed(2)),
    recommendedHourlyRate: Number(recommendedHourly.toFixed(2)),
    dayRate: Number(dayRate.toFixed(2)),
    monthlyRetainer: Number(monthlyRetainer.toFixed(2)),
    grossAnnualRevenueNeeded: Number(grossAnnualRevenue.toFixed(2)),
    totalTaxesEstimated: Number(totalTaxes.toFixed(2)),
    totalExpenses: Number(annualOverhead.toFixed(2)),
    netTakeHome: Number(validNet.toFixed(2)),
    billableHoursPerYear: totalBillableHoursPerYear,
    effectiveOverheadPerHour: Number(overheadPerHour.toFixed(2)),
    effectiveTaxPerHour: Number(taxPerHour.toFixed(2)),
    invoiceProposalText,
  };
}
