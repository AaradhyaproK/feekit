import type { PageContent } from '../types.ts';

export const quarterlyTaxCalculatorContent: PageContent = {
  slug: 'quarterly-tax-calculator',
  family: 'tools',
  title: 'Quarterly Estimated Tax Calculator 2026 (IRS Form 1040-ES) | FeeKit',
  metaDescription:
    'Calculate exact quarterly estimated tax payments for 2026 under IRS Form 1040-ES. Step-by-step statutory self-employment tax (15.3%), 2026 Social Security wage cap ($184,500), and safe harbor rules.',
  h1: 'Quarterly Estimated Tax Calculator 2026 (IRS Form 1040-ES)',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'IRS Publication 505 & Form 1040-ES (2026)',
    url: 'https://www.irs.gov/forms-pubs/about-form-1040-es',
    citation: 'Internal Revenue Service Publication 505 (Tax Withholding and Estimated Tax) and Form 1040-ES Instructions.',
  },
  overview:
    'The United States tax system operates on a statutory pay-as-you-go principle. Unlike W-2 employees whose federal and state income taxes are automatically withheld each pay period, independent contractors, freelancers, LLC owners, and sole proprietors must calculate and remit quarterly estimated tax payments using IRS Form 1040-ES. Under Internal Revenue Code § 6654, taxpayers who fail to remit at least 90% of their current year tax liability (or 100%/110% of their prior year liability under statutory safe harbor rules) face non-deductible underpayment penalties calculated at the prevailing federal short-term interest rate plus 3%.',
  sections: [
    {
      id: 'statutory-quarterly-deadlines-2026',
      title: 'Official 2026 IRS Quarterly Estimated Tax Deadlines',
      body: `Estimated tax payments must be remitted across four statutory payment windows throughout the tax year:

- **Quarter 1 (Income earned Jan 1 – Mar 31)**: Due **April 15, 2026**.
- **Quarter 2 (Income earned Apr 1 – May 31)**: Due **June 15, 2026** (note that Q2 spans only two months).
- **Quarter 3 (Income earned Jun 1 – Aug 31)**: Due **September 15, 2026** (spans three months).
- **Quarter 4 (Income earned Sep 1 – Dec 31)**: Due **January 15, 2027** (spans four months).
*Weekend/Holiday Rule*: Under IRC § 7503, if a quarterly due date falls on a Saturday, Sunday, or legal holiday (such as Emancipation Day in Washington, D.C.), the filing deadline automatically moves to the next business day.`,
    },
    {
      id: 'self-employment-tax-seca-mechanics',
      title: 'Self-Employment Tax (SECA) Mechanics & The 2026 Wage Cap ($184,500)',
      body: `Self-employed individuals must pay both the employer and employee shares of FICA taxes, codified under the Self-Employment Contributions Act (SECA):

1. **The 92.35% Net Earnings Multiplier**: Under IRS Schedule SE (Line 4a), self-employment tax is not assessed on 100% of your gross profit. Instead, it applies to **92.35%** of your net self-employment earnings ($100\\% - 7.65\\%$ employer equivalent deduction).
2. **Social Security Tax (12.4%) & 2026 Wage Cap ($184,500)**:
   - For 2026, the statutory Social Security maximum taxable earnings base is **$184,500** (indexed by the Social Security Administration from $176,100 in 2025).
   - Once your combined W-2 wages and 92.35% net self-employment earnings cross $184,500, the 12.4% Social Security tax terminates completely for the remainder of the tax year.
3. **Medicare Tax (2.9%) & Additional Medicare (0.9%)**:
   - Medicare tax (2.9%) applies to all net earnings with **no wage cap**.
   - An Additional Medicare Tax of **0.9%** applies to self-employment income exceeding **$200,000** for single filers ($250,000 for married couples filing jointly).
4. **Above-the-Line Tax Deduction**: Taxpayers deduct exactly **50% of their total SECA tax** on IRS Schedule 1 (Form 1040 Line 15), reducing their Adjusted Gross Income (AGI) before federal income tax brackets are computed.`,
    },
    {
      id: 'safe-harbor-rules-penalty-avoidance',
      title: 'IRS Safe Harbor Rules: How to Legally Avoid Underpayment Penalties',
      body: `You can eliminate all IRS underpayment penalties under IRC § 6654 by satisfying any one of three statutory safe harbor rules:

- **The 90% Current Year Rule**: Pay at least **90%** of your total tax liability for the 2026 tax year through quarterly payments and withholding.
- **The 100% Prior Year Rule**: Pay at least **100%** of the total tax shown on your 2025 federal tax return (Line 24 of Form 1040), divided into four equal quarterly installments.
- **The 110% High-Income Safe Harbor Rule**: If your 2025 Adjusted Gross Income (AGI) exceeded **$150,000** ($75,000 if married filing separately), you must pay **110%** of your 2025 tax liability to qualify for safe harbor protection.
- *Strategic Recommendation*: For freelancers with volatile or growing revenue, utilizing the prior year 100%/110% safe harbor rule is the safest approach, as it locks in a fixed, known quarterly payment regardless of how high your current year income climbs.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $120,000 Net Freelance Profit Quarterly Tax Calculation',
    scenario:
      'A solo consultant projects $120,000.00 in net 1099 profit for 2026 (single filer, taking standard deduction). Calculate their statutory self-employment tax, federal income tax estimate, and quarterly installment amount.',
    inputs: {
      netSelfEmploymentProfit: '$120,000.00',
      statutorySecaMultiplier: '92.35% (IRS Schedule SE Line 4a)',
      socialSecurityWageCap2026: '$184,500.00',
      standardDeduction2026: '$15,000.00 (Single Filer Estimate)',
    },
    steps: [
      {
        label: 'Statutory Net Taxable Earnings for SECA',
        formula: '$120,000.00 × 92.35%',
        amount: '$110,820.00',
        note: 'Schedule SE Line 4a base',
      },
      {
        label: 'Social Security Tax (12.4% under cap)',
        formula: '$110,820.00 × 12.4%',
        amount: '$13,741.68',
        note: 'Well below $184,500 wage cap',
      },
      {
        label: 'Medicare Tax (2.9% uncapped)',
        formula: '$110,820.00 × 2.9%',
        amount: '$3,213.78',
        note: 'Applies to full net earnings',
      },
      {
        label: 'Total Self-Employment Tax (SECA)',
        formula: '$13,741.68 + $3,213.78',
        amount: '$16,955.46',
        note: 'Combined FICA equivalent',
      },
      {
        label: 'Half-SECA Deduction (Schedule 1)',
        formula: '$16,955.46 ÷ 2',
        amount: '$8,477.73',
        note: 'Deduction from total income',
      },
      {
        label: 'Adjusted Gross Income (AGI)',
        formula: '$120,000.00 - $8,477.73',
        amount: '$111,522.27',
        note: 'Baseline for income tax',
      },
      {
        label: 'Taxable Income (after $15k Std Deduction)',
        formula: '$111,522.27 - $15,000.00',
        amount: '$96,522.27',
        note: 'Subject to 2026 tax brackets',
      },
      {
        label: 'Estimated Federal Income Tax',
        formula: 'Progressive bracket calculation',
        amount: '$16,210.00',
        note: 'Effective income tax rate ~13.5%',
      },
      {
        label: 'Total Annual Federal Tax Liability',
        formula: '$16,955.46 (SECA) + $16,210.00 (Income Tax)',
        amount: '$33,165.46',
        note: 'Total annual obligation',
      },
      {
        label: 'Quarterly Estimated Payment (Form 1040-ES)',
        formula: '$33,165.46 ÷ 4',
        amount: '$8,291.37 per quarter',
        note: 'Due April 15, June 15, Sept 15, Jan 15',
      },
    ],
    takeaway:
      'On $120,000 of net freelance profit, the taxpayer owes $16,955.46 in self-employment tax and $16,210.00 in federal income tax, requiring a quarterly payment of exactly $8,291.37 to remain fully compliant.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Safe Harbor Quarterly Payment from Prior Year Tax Return',
    scenario:
      'A freelancer’s business is booming in 2026, but their 2025 Form 1040 showed a total tax liability of $24,000.00 (Line 24) on an AGI of $110,000. How much must they remit quarterly to be 100% safe from IRS penalties, regardless of 2026 earnings?',
    inputs: {
      priorYearTotalTax2025: '$24,000.00',
      priorYearAgi2025: '$110,000.00 (Below $150k Threshold)',
      safeHarborTier: '100% of Prior Year',
    },
    steps: [
      {
        label: 'Applicable Safe Harbor Percentage',
        formula: 'AGI < $150k implies 100% rule',
        amount: '100% Safe Harbor Tier',
        note: 'No 110% high-income penalty',
      },
      {
        label: 'Total Required Safe Harbor Remittance',
        formula: '$24,000.00 × 100%',
        amount: '$24,000.00',
        note: 'Protects against all penalties',
      },
      {
        label: 'Required Quarterly Payment',
        formula: '$24,000.00 ÷ 4',
        amount: '$6,000.00 per quarter',
        note: 'Due on each statutory deadline',
      },
    ],
    takeaway:
      'By paying exactly $6,000.00 each quarter ($24,000 total), the freelancer is completely shielded from IRS underpayment penalties under IRC § 6654, even if their 2026 profit doubles to $250,000.',
  },
  faqs: [
    {
      question: 'Who is required to pay quarterly estimated taxes?',
      answer:
        'You must pay estimated taxes if you expect to owe at least $1,000 in federal tax for the year after subtracting withholding and refundable credits, and your withholding and credits will be less than the smaller of 90% of your current tax or 100% of your prior year tax.',
      sourceUrl: 'https://www.irs.gov/forms-pubs/about-form-1040-es',
    },
    {
      question: 'What is the 2026 Social Security wage cap for self-employment tax?',
      answer:
        'The statutory Social Security wage base for 2026 is $184,500. Self-employment net earnings (multiplied by 92.35%) up to $184,500 are subject to the 12.4% Social Security tax; earnings above this threshold are exempt from Social Security tax.',
      sourceUrl: 'https://www.ssa.gov/oact/cola/cbb.html',
    },
    {
      question: 'What is the 110% safe harbor rule?',
      answer:
        'If your Adjusted Gross Income (AGI) on your prior year tax return was greater than $150,000 ($75,000 if married filing separately), you must pay 110% of your prior year tax liability across four quarterly payments to avoid underpayment penalties.',
      sourceUrl: 'https://www.irs.gov/publications/p505',
    },
    {
      question: 'What happens if I miss a quarterly tax payment deadline?',
      answer:
        'If you miss a quarterly deadline or underpay, the IRS assesses a failure-to-pay estimated tax penalty under IRC § 6654. The penalty is calculated for each day the payment is late based on the federal statutory interest rate (currently 7-8% annualized).',
      sourceUrl: 'https://www.irs.gov/payments/underpayment-of-estimated-tax-by-individuals-penalty',
    },
    {
      question: 'Can I pay my quarterly estimated taxes online?',
      answer:
        'Yes. You can pay electronically via IRS Direct Pay (free direct transfer from your bank account), the Electronic Federal Tax Payment System (EFTPS), or debit/credit card (subject to a ~1.85% third-party card processing fee).',
      sourceUrl: 'https://www.irs.gov/payments',
    },
  ],
};

export default quarterlyTaxCalculatorContent;

