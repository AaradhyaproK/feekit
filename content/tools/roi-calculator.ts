import type { PageContent } from '../types.ts';

export const roiCalculatorContent: PageContent = {
  slug: 'roi-calculator',
  family: 'tools',
  title: 'ROI Calculator (Return on Investment & Annualized CAGR %) | FeeKit',
  metaDescription:
    'Calculate exact Return on Investment (ROI), annualized return (CAGR), and net financial profit. Master the mathematics of capital allocation, marketing payback periods, and hurdle rates.',
  h1: 'ROI Calculator: Capital Allocation & Annualized Return Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Corporate Finance Institute & SEC Financial Guidelines',
    url: 'https://www.sec.gov/investor/tools/calculators.htm',
    citation: 'Securities and Exchange Commission Financial Metrics, GAAP Capital Budgeting Standards.',
  },
  overview:
    'Return on Investment (ROI) is the universal profitability metric used to evaluate the efficiency of a financial investment or compare relative returns across multiple commercial initiatives. While simple ROI evaluates nominal percentage gain over the entire duration of an investment, multi-year business investments require Annualized ROI (Compound Annual Growth Rate, or CAGR) to normalize performance against the time value of money. A 50% simple return achieved over one year is extraordinary, whereas the same 50% nominal return spread across ten years represents a modest 4.14% annualized yield.',
  sections: [
    {
      id: 'roi-mathematical-formulas',
      title: 'Simple ROI vs Annualized ROI (CAGR) Mathematical Formulas',
      body: `ROI calculations must distinguish between cumulative returns and time-weighted annualized performance:

- **Simple Return on Investment (ROI) Formula**:
  $$\\text{ROI (\\%)} = \\left( \\frac{\\text{Final Value} - \\text{Initial Investment}}{\\text{Initial Investment}} \\right) \\times 100 = \\left( \\frac{\\text{Net Profit}}{\\text{Initial Cost}} \\right) \\times 100$$
- **Annualized ROI (Compound Annual Growth Rate, CAGR)**:
  When an investment spans multiple years ($n$ years), compounding requires the geometric mean formula:
  $$\\text{CAGR} = \\left( \\frac{\\text{Final Value}}{\\text{Initial Investment}} \\right)^{\\frac{1}{n}} - 1$$
  - A $10,000 investment growing to $20,000 in **2 years** achieves a **41.42% CAGR**.
  - A $10,000 investment growing to $20,000 in **5 years** achieves a **14.87% CAGR**.
  - A $10,000 investment growing to $20,000 in **10 years** achieves a **7.18% CAGR**.`,
    },
    {
      id: 'marketing-roi-vs-capital-investments',
      title: 'Marketing ROI (ROAS) vs Capital Expenditure (CapEx) ROI',
      body: `ROI is interpreted differently across business domains:

1. **Marketing ROI & Return on Ad Spend (ROAS)**:
   - Evaluates short-term cash velocity. If $5,000 in paid digital advertising produces $20,000 in gross revenue with $8,000 in COGS, the marketing contribution profit is $7,000 ($20,000 - $8,000 COGS - $5,000 Ad Spend).
   - Marketing ROI equals **140%** ($7,000 net profit ÷ $5,000 ad cost).
2. **Capital Expenditure (CapEx) ROI**:
   - Evaluates long-lived physical or technological assets (e.g. purchasing an automated warehouse packaging machine for $100,000 to reduce manual labor costs by $35,000 annually).
   - Involves calculating the **Payback Period** ($100,000 ÷ $35,000 = 2.86 years) and comparing the internal rate of return against the company's cost of capital (WACC).`,
    },
    {
      id: 'hurdle-rates-and-opportunity-cost',
      title: 'Hurdle Rates and Opportunity Cost in Business Decisions',
      body: `Evaluating an investment's absolute ROI is incomplete without benchmarking opportunity cost:

- **The Corporate Hurdle Rate**: The minimum rate of return a project must achieve to be approved by management. If an enterprise can invest excess treasury capital in risk-free US Treasury Bills earning 4.5%, any internal project with commercial risk must clear a hurdle rate of 12% to 15% to justify execution.
- **Inflation-Adjusted Real ROI**:
  $$\\text{Real ROI} \\approx \\text{Nominal ROI} - \\text{Inflation Rate}$$
  If a project yields an 8% nominal annual return during a period with 3% inflation, the real purchasing power increase of the investment is 5.0%.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $25,000 Equipment Automation Investment Over 3 Years',
    scenario:
      'A digital print shop invests $25,000.00 into a high-speed UV printer. Over 3 years, the printer generates $45,000.00 in total net cash inflows after all operating costs. What is the Simple ROI and Annualized ROI (CAGR)?',
    inputs: {
      initialInvestment: '$25,000.00',
      totalCashInflows: '$45,000.00',
      investmentDuration: '3.0 Years',
    },
    steps: [
      {
        label: 'Net Financial Profit',
        formula: '$45,000.00 - $25,000.00',
        amount: '$20,000.00 net profit',
        note: 'Cash returned above principal',
      },
      {
        label: 'Simple Return on Investment (ROI)',
        formula: '($20,000.00 ÷ $25,000.00) × 100',
        amount: '80.00%',
        note: 'Cumulative return across 3 years',
      },
      {
        label: 'Growth Multiple',
        formula: '$45,000.00 ÷ $25,000.00',
        amount: '1.80x multiple',
        note: 'Total multiple on invested capital (MOIC)',
      },
      {
        label: 'Annualized ROI (CAGR)',
        formula: '(1.80)^(1 ÷ 3) - 1 = (1.80)^(0.3333) - 1',
        amount: '21.64% per year',
        note: 'Compounded annual growth rate',
      },
      {
        label: 'Payback Period',
        formula: '$25,000 ÷ ($45,000 ÷ 3)',
        amount: '1.67 years (20 months)',
        note: 'Time required to recover principal',
      },
    ],
    takeaway:
      'The $25,000 investment delivers an 80.00% simple return and a 21.64% annualized CAGR, recovering its full acquisition cost within 20 months.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Required Final Value to Hit a 15% Hurdle Rate in 4 Years',
    scenario:
      'A founder invests $50,000 into a new product line and requires a 15.0% annualized return (CAGR) over 4 years to justify the capital allocation. What minimum total cumulative cash flow must the project return?',
    inputs: {
      initialCapital: '$50,000.00',
      targetCagr: '15.0% per year',
      holdingPeriod: '4 Years',
    },
    steps: [
      {
        label: 'Compound Growth Factor',
        formula: '(1 + 0.15)^4 = (1.15)^4',
        amount: '1.7490x multiple',
        note: 'Compounding factor over 4 years',
      },
      {
        label: 'Required Cumulative Cash Return',
        formula: '$50,000.00 × 1.7490',
        amount: '$87,450.31',
        note: 'Minimum gross cash needed',
      },
      {
        label: 'Required Net Profit',
        formula: '$87,450.31 - $50,000.00',
        amount: '$37,450.31 net profit',
        note: 'Profit needed to satisfy hurdle',
      },
      {
        label: 'Equivalent Simple ROI',
        formula: '($37,450.31 ÷ $50,000.00) × 100',
        amount: '74.90% simple return',
        note: 'Cumulative return across 4 years',
      },
    ],
    takeaway:
      'To achieve a 15% annualized hurdle rate, the $50,000 investment must return at least $87,450.31 within 4 years ($37,450.31 in pure net profit).',
  },
  faqs: [
    {
      question: 'What is the formula for calculating Return on Investment (ROI)?',
      answer:
        'The formula for Simple ROI is: ROI = [(Final Value - Initial Cost) ÷ Initial Cost] × 100. It measures the net financial gain or loss as a percentage of initial capital.',
      sourceUrl: 'https://www.sec.gov/investor/tools/calculators.htm',
    },
    {
      question: 'Why is Annualized ROI (CAGR) better than Simple ROI for multi-year projects?',
      answer:
        'Simple ROI ignores time. A 50% return in 1 year is exceptional, whereas a 50% return over 10 years is only 4.14% per year. Annualized ROI (CAGR) adjusts for the time value of money, enabling fair comparisons across investments with different durations.',
      sourceUrl: 'https://www.sec.gov/investor/tools/calculators.htm',
    },
    {
      question: 'What is a good ROI for a business investment?',
      answer:
        'A good ROI depends on the risk profile and prevailing cost of capital. For low-risk investments, returns above 7% to 10% are solid. For speculative or startup ventures, investors typically target annualized returns exceeding 25% to 35% to compensate for high failure rates.',
      sourceUrl: 'https://www.sec.gov/investor/tools/calculators.htm',
    },
    {
      question: 'How do you calculate the Payback Period?',
      answer:
        'Payback Period is calculated as Initial Investment ÷ Annual Cash Inflows. For example, a $30,000 software investment generating $10,000 in annual labor savings has a payback period of exactly 3.0 years.',
      sourceUrl: 'https://www.sec.gov/investor/tools/calculators.htm',
    },
    {
      question: 'Can ROI be negative?',
      answer:
        'Yes. If an investment returns less money than was originally contributed, Net Profit is negative, resulting in a negative ROI. For example, investing $10,000 and recovering only $7,000 results in a -30% ROI.',
      sourceUrl: 'https://www.sec.gov/investor/tools/calculators.htm',
    },
  ],
};

export default roiCalculatorContent;

