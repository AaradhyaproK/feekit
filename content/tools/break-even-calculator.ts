import type { PageContent } from '../types.ts';

export const breakEvenCalculatorContent: PageContent = {
  slug: 'break-even-calculator',
  family: 'tools',
  title: 'Break-Even Point Calculator (Units, Sales Revenue & Margin) | FeeKit',
  metaDescription:
    'Calculate exact break-even units, break-even sales revenue, contribution margin per unit, and safety margin. Understand cost-volume-profit (CVP) analysis for startups and small businesses.',
  h1: 'Break-Even Point Calculator: Cost-Volume-Profit (CVP) Mathematical Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'SBA & Corporate Finance Institute (CVP Analysis)',
    url: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances',
    citation: 'U.S. Small Business Administration Financial Management Guide, Cost-Volume-Profit Mathematical Standards.',
  },
  overview:
    'Break-even analysis is the fundamental financial benchmark used to determine the exact sales volume at which total business revenue perfectly equals total operating expenses, producing exactly zero economic profit or loss. Every unit sold past the break-even threshold contributes directly to operating net profit, while any volume falling short generates cash drain. Using rigorous Cost-Volume-Profit (CVP) formulas, this tool calculates both unit sales volume and dollar revenue requirements based on fixed overhead, variable production costs, and unit contribution margins.',
  sections: [
    {
      id: 'break-even-mathematical-formulas',
      title: 'Cost-Volume-Profit (CVP) Formulas & Definitions',
      body: `Cost-Volume-Profit analysis splits all enterprise costs into two distinct operational categories:

- **Fixed Overhead Costs (FC)**: Expenses that do not fluctuate with production volume in the short term. Examples include commercial lease rent, SaaS subscriptions, base executive salaries, insurance premiums, equipment depreciation, and business licenses.
- **Variable Costs per Unit (VC)**: Costs directly incurred each time a single additional unit is produced or sold. Examples include raw materials, supplier wholesale costs, packaging, shipping freight, marketplace commissions, and credit card gateway fees (2.9% + $0.30).
- **Unit Contribution Margin (CM)**:
  $$\\text{Contribution Margin} = \\text{Unit Selling Price} (P) - \\text{Unit Variable Cost} (VC)$$
  This represents the dollar amount each unit sale contributes toward paying off fixed overhead.
- **Contribution Margin Ratio (CMR)**:
  $$\\text{Contribution Margin Ratio} = \\frac{\\text{Unit Price} - \\text{Variable Cost}}{\\text{Unit Price}}$$
- **Break-Even Volume in Units ($Q_{BE}$)**:
  $$Q_{BE} = \\frac{\\text{Total Fixed Costs}}{\\text{Unit Selling Price} - \\text{Unit Variable Cost}} = \\frac{FC}{CM}$$
- **Break-Even Revenue in Dollars ($R_{BE}$)**:
  $$R_{BE} = \\frac{\\text{Total Fixed Costs}}{\\text{Contribution Margin Ratio}} = \\frac{FC}{CMR}$$`,
    },
    {
      id: 'margin-of-safety-analysis',
      title: 'Margin of Safety: Evaluating Downside Risk',
      body: `Calculating the break-even point is only half of risk management; determining how close you are to unprofitability is governed by the Margin of Safety:

- **Margin of Safety Formula**:
  $$\\text{Margin of Safety (\\%)} = \\left( \\frac{\\text{Actual (or Projected) Sales} - \\text{Break-Even Sales}}{\\text{Actual (or Projected) Sales}} \\right) \\times 100$$
- **Interpreting the Margin of Safety**:
  - A Margin of Safety of **40%** indicates sales can drop by up to 40% before the company begins losing money.
  - A Margin of Safety under **10%** indicates extreme operational fragility, where minor marketing downturns or supplier price hikes will immediately cause net losses.
  - Venture capitalists and commercial lenders examine the margin of safety when evaluating business loan applications and working capital lines of credit.`,
    },
    {
      id: 'operating-leverage-and-scalability',
      title: 'Operating Leverage: High Fixed Costs vs High Variable Costs',
      body: `How business cost structures dictate financial risk and scalability:

- **High Operating Leverage (Software, Manufacturing)**: High fixed costs (engineering, factories) but near-zero variable costs. High contribution margin ratio (80%+). The break-even hurdle is high, but once crossed, almost every dollar of revenue flows straight to bottom-line profit.
- **Low Operating Leverage (Consulting, Retail, Drop-shipping)**: Low fixed costs, but high variable costs (contractor labor, wholesale goods). The break-even hurdle is easy to reach, but margins scale linearly without explosive profit expansion.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Boutique Coffee Roaster Break-Even Analysis',
    scenario:
      'A specialty coffee roaster incurs $6,000.00/month in fixed overhead (rent, commercial roaster lease, utilities). They sell 12oz bags of coffee for $18.00 each, with variable costs of $6.00 per bag (green beans, roasting gas, packaging, label, credit card processing). How many bags must they sell monthly to break even?',
    inputs: {
      monthlyFixedCosts: '$6,000.00',
      sellingPricePerBag: '$18.00',
      variableCostPerBag: '$6.00',
    },
    steps: [
      {
        label: 'Unit Contribution Margin',
        formula: '$18.00 - $6.00',
        amount: '$12.00 per bag',
        note: 'Profit per bag toward fixed costs',
      },
      {
        label: 'Contribution Margin Ratio',
        formula: '$12.00 ÷ $18.00',
        amount: '66.67%',
        note: 'Two-thirds of price is contribution',
      },
      {
        label: 'Break-Even Sales Volume in Units',
        formula: '$6,000.00 ÷ $12.00',
        amount: '500 bags/month',
        note: 'Target unit sales volume',
      },
      {
        label: 'Break-Even Monthly Revenue',
        formula: '500 bags × $18.00 (or $6,000 ÷ 0.6667)',
        amount: '$9,000.00/month',
        note: 'Minimum monthly gross revenue',
      },
      {
        label: 'Profit at 750 Bags Sold',
        formula: '(750 - 500) × $12.00',
        amount: '$3,000.00 profit',
        note: 'All excess volume contributes pure profit',
      },
    ],
    takeaway:
      'The coffee roaster must sell exactly 500 bags ($9,000 in monthly sales) to break even. Selling 750 bags generates $3,000 in monthly net profit, representing a 33.3% Margin of Safety.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Required Price to Break Even at a Capped 400 Unit Capacity',
    scenario:
      'A microbrewery has maximum tank capacity of 400 kegs per month. Fixed costs are $10,000/month and variable ingredients/can costs are $25.00/keg. What minimum price must they charge per keg to break even at full capacity?',
    inputs: {
      maximumProductionCapacity: '400 units/month',
      fixedOverhead: '$10,000.00',
      unitVariableCost: '$25.00',
    },
    steps: [
      {
        label: 'Required Contribution Margin Per Unit',
        formula: '$10,000.00 ÷ 400 units',
        amount: '$25.00/unit',
        note: 'Fixed cost allocation per unit',
      },
      {
        label: 'Minimum Break-Even Price',
        formula: 'Variable Cost ($25.00) + Required CM ($25.00)',
        amount: '$50.00/keg',
        note: 'Zero-profit price floor',
      },
      {
        label: 'Total Revenue at Break-Even Price',
        formula: '400 units × $50.00',
        amount: '$20,000.00',
        note: 'Total revenue',
      },
      {
        label: 'Total Costs Verification',
        formula: '$10,000 fixed + (400 × $25 variable)',
        amount: '$20,000.00',
        note: 'Revenue perfectly offsets all costs',
      },
    ],
    takeaway:
      'At 400 units of capacity, pricing at $50.00 per keg breaks even. To earn a target $5,000 monthly profit, the price must increase by $12.50 ($5,000 ÷ 400) to $62.50 per keg.',
  },
  faqs: [
    {
      question: 'What is the formula for calculating break-even point in units?',
      answer:
        'The formula is: Break-Even Units = Total Fixed Costs ÷ (Unit Selling Price - Unit Variable Cost). The denominator is also known as the Unit Contribution Margin.',
      sourceUrl: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances',
    },
    {
      question: 'What is the difference between fixed and variable costs?',
      answer:
        'Fixed costs remain constant regardless of sales volume (such as rent, software subscriptions, insurance, and executive salaries). Variable costs fluctuate in direct proportion to production and sales (such as raw materials, packaging, shipping, and credit card processing fees).',
      sourceUrl: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances',
    },
    {
      question: 'What is the Contribution Margin Ratio?',
      answer:
        'Contribution Margin Ratio is calculated as (Price - Variable Cost) ÷ Price. It indicates the percentage of each sales dollar that remains to cover fixed costs and contribute to net profit.',
      sourceUrl: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances',
    },
    {
      question: 'How does lowering my price affect my break-even volume?',
      answer:
        'Lowering your selling price reduces the contribution margin per unit, meaning you must sell significantly more units to cover the same fixed overhead. For example, a 10% price cut can easily require a 50% increase in sales volume just to break even.',
      sourceUrl: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances',
    },
    {
      question: 'What is a healthy Margin of Safety in business?',
      answer:
        'A Margin of Safety of 25% or higher is generally considered healthy. This indicates your business can survive a 25% drop in sales volume or an unexpected rise in expenses without slipping into net operating losses.',
      sourceUrl: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances',
    },
  ],
};

export default breakEvenCalculatorContent;

