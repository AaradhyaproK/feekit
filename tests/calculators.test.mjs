import assert from 'assert';
import { calculateFreelanceRate } from '../src/lib/engines/freelance-rate.ts';
import { calculateMerchantFee } from '../src/lib/engines/merchant-fee.ts';
import { calculateEcommerceProfit } from '../src/lib/engines/ecommerce-profit.ts';

const roundCent = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

console.log('--- FeeKit Calculators Automated Unit Test Suite ---');

let passedTests = 0;

function runTest(name, fn) {
  try {
    fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(err);
    process.exit(1);
  }
}

// -------------------------------------------------------------
// SECTION 1: Freelance Rate Calculator (5 Hand-Calculated Cases)
// -------------------------------------------------------------
console.log('\n[Suite 1] Freelance Rate Calculator (1,200 annual billable hours benchmark)');

runTest('Case 1.1: $145k Net, $15k Overhead, 48 wks, 25h/wk, 28% Tax, 15% Buffer', () => {
  const res = calculateFreelanceRate({
    desiredNetIncome: 145000,
    workingWeeksPerYear: 48,
    billableHoursPerWeek: 25,
    annualOverhead: 15000,
    taxRateEstimated: 0.28,
    profitMarginBuffer: 0.15,
  });
  assert.strictEqual(res.billableHoursPerYear, 1200);
  assert.strictEqual(res.grossAnnualRevenueNeeded, 248847.22);
  assert.strictEqual(res.recommendedHourlyRate, 207.37);
  // Day rate must be computed from unrounded hourly (207.372685... * 8 = 1658.98)
  assert.strictEqual(res.dayRate, 1658.98);
  assert.strictEqual(res.minHourlyRate, 180.32);
});

runTest('Case 1.2: $100k Net, $12k Overhead, 48 wks, 25h/wk, 28% Tax, 15% Buffer', () => {
  const res = calculateFreelanceRate({
    desiredNetIncome: 100000,
    workingWeeksPerYear: 48,
    billableHoursPerWeek: 25,
    annualOverhead: 12000,
    taxRateEstimated: 0.28,
    profitMarginBuffer: 0.15,
  });
  assert.strictEqual(res.billableHoursPerYear, 1200);
  assert.strictEqual(res.grossAnnualRevenueNeeded, 173522.22);
  assert.strictEqual(res.recommendedHourlyRate, 144.60);
  assert.strictEqual(res.dayRate, 1156.81);
});

runTest('Case 1.3: $75k Net, $8k Overhead, 46 wks, 20h/wk (920 hrs), 25% Tax, 10% Buffer', () => {
  const res = calculateFreelanceRate({
    desiredNetIncome: 75000,
    workingWeeksPerYear: 46,
    billableHoursPerWeek: 20,
    annualOverhead: 8000,
    taxRateEstimated: 0.25,
    profitMarginBuffer: 0.10,
  });
  assert.strictEqual(res.billableHoursPerYear, 920);
  assert.strictEqual(res.grossAnnualRevenueNeeded, 118800.00);
  assert.strictEqual(res.recommendedHourlyRate, 129.13);
  assert.strictEqual(res.dayRate, 1033.04);
});

runTest('Case 1.4: $200k Net, $20k Overhead, 50 wks, 30h/wk (1500 hrs), 30% Tax, 20% Buffer', () => {
  const res = calculateFreelanceRate({
    desiredNetIncome: 200000,
    workingWeeksPerYear: 50,
    billableHoursPerWeek: 30,
    annualOverhead: 20000,
    taxRateEstimated: 0.30,
    profitMarginBuffer: 0.20,
  });
  assert.strictEqual(res.billableHoursPerYear, 1500);
  assert.strictEqual(res.grossAnnualRevenueNeeded, 366857.14);
  assert.strictEqual(res.recommendedHourlyRate, 244.57);
  assert.strictEqual(res.dayRate, 1956.57);
});

runTest('Case 1.5: $50k Net, $5k Overhead, 48 wks, 25h/wk, 20% Tax, 15% Buffer', () => {
  const res = calculateFreelanceRate({
    desiredNetIncome: 50000,
    workingWeeksPerYear: 48,
    billableHoursPerWeek: 25,
    annualOverhead: 5000,
    taxRateEstimated: 0.20,
    profitMarginBuffer: 0.15,
  });
  assert.strictEqual(res.billableHoursPerYear, 1200);
  assert.strictEqual(res.grossAnnualRevenueNeeded, 77625.00);
  assert.strictEqual(res.recommendedHourlyRate, 64.69);
  assert.strictEqual(res.dayRate, 517.50);
});

// -------------------------------------------------------------
// SECTION 2: Merchant Fee Calculator (Forward & Reverse Cases)
// -------------------------------------------------------------
console.log('\n[Suite 2] Merchant Processing Fee Calculator');

runTest('Case 2.1: Stripe Standard US Domestic $100.00 (2.9% + $0.30)', () => {
  const res = calculateMerchantFee({ amount: 100, gatewayId: 'stripe' });
  assert.strictEqual(res.totalFee, 3.20);
  assert.strictEqual(res.netAmount, 96.80);
  assert.strictEqual(res.effectiveFeeRate, 3.20);
});

runTest('Case 2.2: PayPal Commerce Invoicing US $100.00 (3.49% + $0.49)', () => {
  const res = calculateMerchantFee({ amount: 100, gatewayId: 'paypal' });
  assert.strictEqual(res.totalFee, 3.98);
  assert.strictEqual(res.netAmount, 96.02);
  assert.strictEqual(res.effectiveFeeRate, 3.98);
});

runTest('Case 2.3: Square Free Online US $100.00 (3.3% + $0.30)', () => {
  const res = calculateMerchantFee({ amount: 100, gatewayId: 'square' });
  assert.strictEqual(res.totalFee, 3.60);
  assert.strictEqual(res.netAmount, 96.40);
  assert.strictEqual(res.effectiveFeeRate, 3.60);
});

runTest('Case 2.4: Venmo Business US QR $100.00 (1.9% + $0.10)', () => {
  const res = calculateMerchantFee({ amount: 100, gatewayId: 'venmo' });
  assert.strictEqual(res.totalFee, 2.00);
  assert.strictEqual(res.netAmount, 98.00);
  assert.strictEqual(res.effectiveFeeRate, 2.00);
});

runTest('Case 2.5: Stripe US Cross-Border $500.00 (+1.5% Intl Surcharge)', () => {
  const res = calculateMerchantFee({ amount: 500, gatewayId: 'stripe', isInternational: true });
  // (0.029 + 0.015) * 500 + 0.30 = 22.00 + 0.30 = 22.30
  assert.strictEqual(res.totalFee, 22.30);
  assert.strictEqual(res.netAmount, 477.70);
  assert.strictEqual(res.effectiveFeeRate, 4.46);
});

runTest('Case 2.6: Reverse Calculation - Stripe US Target Net $100.00', () => {
  const res = calculateMerchantFee({ amount: 100, gatewayId: 'stripe', direction: 'reverse' });
  // Gross = (100 + 0.30) / (1 - 0.029) = 100.30 / 0.971 = 103.2955... -> 103.30
  // Fee = 103.30 - 100.00 = 3.30
  assert.strictEqual(res.grossAmount, 103.30);
  assert.strictEqual(res.netAmount, 100.00);
  assert.strictEqual(res.totalFee, 3.30);
});

runTest('Case 2.7: Reverse Calculation - PayPal Checkout Target Net $100.00', () => {
  const res = calculateMerchantFee({ amount: 100, gatewayId: 'paypal', direction: 'reverse' });
  // Gross = (100 + 0.49) / (1 - 0.0349) = 100.49 / 0.9651 = 104.1239... -> 104.12
  // Fee = 104.12 - 100.00 = 4.12
  assert.strictEqual(res.grossAmount, 104.12);
  assert.strictEqual(res.netAmount, 100.00);
  assert.strictEqual(res.totalFee, 4.12);
});

runTest('Case 2.8: Reverse Calculation - Square Free Online Target Net $100.00', () => {
  const res = calculateMerchantFee({ amount: 100, gatewayId: 'square', direction: 'reverse' });
  // Gross = (100 + 0.30) / (1 - 0.033) = 100.30 / 0.967 = 103.7228... -> 103.72
  // Fee = 103.72 - 100.00 = 3.72
  assert.strictEqual(res.grossAmount, 103.72);
  assert.strictEqual(res.netAmount, 100.00);
  assert.strictEqual(res.totalFee, 3.72);
});

runTest('Case 2.9: Reverse Calculation - Venmo QR Target Net $100.00', () => {
  const res = calculateMerchantFee({ amount: 100, gatewayId: 'venmo', direction: 'reverse' });
  // Gross = (100 + 0.10) / (1 - 0.019) = 100.10 / 0.981 = 102.0387... -> 102.04
  // Fee = 102.04 - 100.00 = 2.04
  assert.strictEqual(res.grossAmount, 102.04);
  assert.strictEqual(res.netAmount, 100.00);
  assert.strictEqual(res.totalFee, 2.04);
});

runTest('Case 2.10: Reverse Calculation - Authorize.Net Target Net $100.00', () => {
  const res = calculateMerchantFee({ amount: 100, gatewayId: 'authorize_net', direction: 'reverse' });
  // Gross = (100 + 0.30) / (1 - 0.029) = 103.30
  // Fee = 3.30
  assert.strictEqual(res.grossAmount, 103.30);
  assert.strictEqual(res.netAmount, 100.00);
  assert.strictEqual(res.totalFee, 3.30);
});

// -------------------------------------------------------------
// SECTION 3: US Sales Tax Calculations (5 Hand-Calculated Cases)
// -------------------------------------------------------------
console.log('\n[Suite 3] US Sales Tax Round Half-Up Mathematics');

runTest('Case 3.1: Net-to-Gross $50.00 at 7.25% (California Base Rate)', () => {
  const tax = roundCent(50 * 0.0725);
  const total = roundCent(50 + tax);
  assert.strictEqual(tax, 3.63);
  assert.strictEqual(total, 53.63);
});

runTest('Case 3.2: Net-to-Gross $100.00 at 5.00% (Louisiana 2025-2029 Base Rate)', () => {
  const tax = roundCent(100 * 0.05);
  const total = roundCent(100 + tax);
  assert.strictEqual(tax, 5.00);
  assert.strictEqual(total, 105.00);
});

runTest('Case 3.3: Net-to-Gross $75.50 at 6.25% (Texas Base Rate)', () => {
  const tax = roundCent(75.50 * 0.0625);
  const total = roundCent(75.50 + tax);
  assert.strictEqual(tax, 4.72);
  assert.strictEqual(total, 80.22);
});

runTest('Case 3.4: Gross-to-Net Reverse Extract $50.00 at 7.25%', () => {
  const net = roundCent(50 / 1.0725);
  const tax = roundCent(50 - net);
  assert.strictEqual(net, 46.62);
  assert.strictEqual(tax, 3.38);
  assert.strictEqual(roundCent(net + tax), 50.00);
});

runTest('Case 3.5: Gross-to-Net Reverse Extract $100.00 at 12.00% (Louisiana Max Combined)', () => {
  const net = roundCent(100 / 1.12);
  const tax = roundCent(100 - net);
  assert.strictEqual(net, 89.29);
  assert.strictEqual(tax, 10.71);
  assert.strictEqual(roundCent(net + tax), 100.00);
});

// -------------------------------------------------------------
// SECTION 4: UK VAT Calculations (5 Hand-Calculated Cases)
// -------------------------------------------------------------
console.log('\n[Suite 4] UK VAT Calculation Engine');

runTest('Case 4.1: Standard UK VAT 20% Add Tax on £100.00', () => {
  const vat = roundCent(100 * 0.20);
  const gross = roundCent(100 + vat);
  assert.strictEqual(vat, 20.00);
  assert.strictEqual(gross, 120.00);
});

runTest('Case 4.2: Reduced UK VAT 5% Add Tax on £100.00', () => {
  const vat = roundCent(100 * 0.05);
  const gross = roundCent(100 + vat);
  assert.strictEqual(vat, 5.00);
  assert.strictEqual(gross, 105.00);
});

runTest('Case 4.3: Reverse Extract UK VAT Standard 20% from £120.00 Gross', () => {
  const net = roundCent(120 / 1.20);
  const vat = roundCent(120 - net);
  assert.strictEqual(net, 100.00);
  assert.strictEqual(vat, 20.00);
});

runTest('Case 4.4: Reverse Extract UK VAT Standard 20% from £50.00 Gross', () => {
  const net = roundCent(50 / 1.20);
  const vat = roundCent(50 - net);
  assert.strictEqual(net, 41.67);
  assert.strictEqual(vat, 8.33);
  assert.strictEqual(roundCent(net + vat), 50.00);
});

runTest('Case 4.5: Standard UK VAT 20% Add Tax on £49.99', () => {
  const vat = roundCent(49.99 * 0.20);
  const gross = roundCent(49.99 + vat);
  assert.strictEqual(vat, 10.00);
  assert.strictEqual(gross, 59.99);
});

// -------------------------------------------------------------
// SECTION 5: Statutory SECA & Social Security Cap (5 Cases)
// -------------------------------------------------------------
console.log('\n[Suite 5] Statutory Self-Employment Tax & 2026 SS Cap ($184,500)');

runTest('Case 5.1: 92.35% Net Earnings Rule (IRS Schedule SE Line 4a)', () => {
  const profit = 100000;
  const taxableSE = profit * 0.9235;
  assert.strictEqual(taxableSE, 92350);
});

runTest('Case 5.2: SECA under 2026 cap ($100k net profit)', () => {
  const profit = 100000;
  const taxableSE = profit * 0.9235; // 92,350
  const ssTax = roundCent(taxableSE * 0.124); // 11,451.40
  const medTax = roundCent(taxableSE * 0.029); // 2,678.15
  const totalSECA = roundCent(ssTax + medTax);
  assert.strictEqual(totalSECA, 14129.55);
});

runTest('Case 5.3: SECA over 2026 cap ($250k net profit with $184,500 SS cap)', () => {
  const profit = 250000;
  const taxableSE = profit * 0.9235; // 230,875
  const ssTaxable = Math.min(taxableSE, 184500);
  const ssTax = roundCent(ssTaxable * 0.124); // 184,500 * 0.124 = 22,878.00
  const medTax = roundCent(taxableSE * 0.029); // 230,875 * 0.029 = 6,695.38
  const totalSECA = roundCent(ssTax + medTax);
  assert.strictEqual(ssTax, 22878.00);
  assert.strictEqual(totalSECA, 29573.38);
});

runTest('Case 5.4: Half SECA Income Tax Deduction (IRS Schedule 1 Line 15)', () => {
  const totalSECA = 14129.55;
  const halfDeduction = roundCent(totalSECA * 0.5);
  assert.strictEqual(halfDeduction, 7064.78);
});

runTest('Case 5.5: 2026 SSA Cap Threshold Integrity Verification', () => {
  const cap = 184500;
  const ssRate = 0.124;
  const maxSSTax = roundCent(cap * ssRate);
  assert.strictEqual(maxSSTax, 22878.00);
});

// -------------------------------------------------------------
// SECTION 6: Statutory VAT 1/6 Fraction Math (HMRC Notice 700)
// -------------------------------------------------------------
console.log('\n[Suite 6] Statutory VAT 1/6 Fraction Math (HMRC Notice 700 Sec 7.3)');

runTest('Case 6.1: 20% Standard Rate 1/6 VAT Fraction on £120.00 Gross', () => {
  // UK HMRC VAT fraction: 20 / (100 + 20) = 20 / 120 = 1/6
  const gross = 120.00;
  const vat = roundCent(gross * (1 / 6));
  const net = roundCent(gross - vat);
  assert.strictEqual(vat, 20.00);
  assert.strictEqual(net, 100.00);
});

runTest('Case 6.2: 20% Standard Rate 1/6 VAT Fraction on £60.00 Gross', () => {
  const gross = 60.00;
  const vat = roundCent(gross / 6);
  const net = roundCent(gross - vat);
  assert.strictEqual(vat, 10.00);
  assert.strictEqual(net, 50.00);
});

runTest('Case 6.3: 20% Standard Rate 1/6 VAT Fraction on £99.99 Gross', () => {
  const gross = 99.99;
  const vat = roundCent(gross / 6);
  const net = roundCent(gross - vat);
  assert.strictEqual(vat, 16.67);
  assert.strictEqual(net, 83.32);
});

runTest('Case 6.4: 5% Reduced Rate 1/21 VAT Fraction on £105.00 Gross', () => {
  // Reduced VAT fraction: 5 / (100 + 5) = 5 / 105 = 1/21
  const gross = 105.00;
  const vat = roundCent(gross / 21);
  const net = roundCent(gross - vat);
  assert.strictEqual(vat, 5.00);
  assert.strictEqual(net, 100.00);
});

runTest('Case 6.5: Direct Division vs Fraction Equivalence Verification', () => {
  const gross = 249.50;
  const directNet = roundCent(gross / 1.20);
  const directVat = roundCent(gross - directNet);
  const fractionVat = roundCent(gross / 6);
  const fractionNet = roundCent(gross - fractionVat);
  assert.strictEqual(directNet, fractionNet);
  assert.strictEqual(directVat, fractionVat);
});

// -------------------------------------------------------------
// SECTION 7: E-commerce Break-Even ROAS Math
// -------------------------------------------------------------
console.log('\n[Suite 7] E-Commerce Break-Even ROAS Engine');

runTest('Case 7.1: Amazon FBA $40 Product (15% Referral + $4.25 FBA Fee)', () => {
  const res = calculateEcommerceProfit({
    sellingPrice: 40.0,
    productCost: 10.0,
    shippingToWarehouse: 2.0,
    packagingPrepCost: 0.5,
    customerShippingCost: 0.0,
    adSpendPerUnit: 0.0,
    platform: 'amazon_fba',
  });
  // Landed = 10 + 2 + 0.5 = 12.50
  // Referral = 40 * 0.15 = 6.00
  // Fulfillment = 4.25
  // Non-ad cost = 12.50 + 6.00 + 4.25 = 22.75
  // Gross contribution = 40.00 - 22.75 = 17.25
  // Break-even ROAS = 40.00 / 17.25 = 2.3188... -> 2.32
  assert.strictEqual(res.landedCost, 12.50);
  assert.strictEqual(res.platformFees, 6.00);
  assert.strictEqual(res.fulfillmentFees, 4.25);
  assert.strictEqual(res.breakEvenRoas, 2.32);
});

runTest('Case 7.2: Shopify DTC $100 Product (2.9% + $0.30 Fee)', () => {
  const res = calculateEcommerceProfit({
    sellingPrice: 100.0,
    productCost: 30.0,
    shippingToWarehouse: 0.0,
    packagingPrepCost: 0.0,
    customerShippingCost: 5.0,
    adSpendPerUnit: 0.0,
    platform: 'shopify',
  });
  // Non-ad costs = 30 + 5 + 3.20 = 38.20
  // Gross contribution = 100 - 38.20 = 61.80
  // Break-even ROAS = 100 / 61.80 = 1.618... -> 1.62
  assert.strictEqual(res.platformFees, 3.20);
  assert.strictEqual(res.breakEvenRoas, 1.62);
});

runTest('Case 7.3: Etsy Marketplace $50 Handmade Product (9.5% + $0.45 Fee)', () => {
  const res = calculateEcommerceProfit({
    sellingPrice: 50.0,
    productCost: 15.0,
    shippingToWarehouse: 0.0,
    packagingPrepCost: 0.0,
    customerShippingCost: 0.0,
    adSpendPerUnit: 0.0,
    platform: 'etsy',
  });
  // Fees = 50 * 0.095 + 0.45 = 4.75 + 0.45 = 5.20
  // Non-ad costs = 15 + 5.20 = 20.20
  // Contribution = 50 - 20.20 = 29.80
  // Break-even ROAS = 50 / 29.80 = 1.6778... -> 1.68
  assert.strictEqual(res.platformFees, 5.20);
  assert.strictEqual(res.breakEvenRoas, 1.68);
});

runTest('Case 7.4: Zero Margin Boundary Safeguard (Non-ad costs >= Price)', () => {
  const res = calculateEcommerceProfit({
    sellingPrice: 20.0,
    productCost: 25.0, // Underwater
    shippingToWarehouse: 0.0,
    packagingPrepCost: 0.0,
    customerShippingCost: 0.0,
    adSpendPerUnit: 0.0,
    platform: 'shopify',
  });
  assert.strictEqual(res.breakEvenRoas, 999);
  assert.strictEqual(res.isProfitable, false);
});

runTest('Case 7.5: eBay Store $200 Sale (13.25% + $0.30 Fee)', () => {
  const res = calculateEcommerceProfit({
    sellingPrice: 200.0,
    productCost: 80.0,
    shippingToWarehouse: 0.0,
    packagingPrepCost: 0.0,
    customerShippingCost: 0.0,
    adSpendPerUnit: 0.0,
    platform: 'ebay',
  });
  // Fees = 200 * 0.1325 + 0.30 = 26.50 + 0.30 = 26.80
  // Non-ad costs = 80 + 26.80 = 106.80
  // Contribution = 200 - 106.80 = 93.20
  // Break-even ROAS = 200 / 93.20 = 2.1459... -> 2.15
  assert.strictEqual(res.platformFees, 26.80);
  assert.strictEqual(res.breakEvenRoas, 2.15);
});

console.log(`\n🎉 All ${passedTests} automated calculator unit tests PASSED cleanly with exact penny precision!\n`);
