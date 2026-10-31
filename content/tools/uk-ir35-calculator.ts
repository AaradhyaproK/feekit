import type { PageContent } from '../types.ts';

export const ukIr35CalculatorContent: PageContent = {
  slug: 'uk-ir35-calculator',
  family: 'tools',
  title: 'UK IR35 Calculator 2026 (Inside vs Outside IR35 Take-Home Pay) | FeeKit',
  metaDescription:
    'Calculate exact take-home pay differences between Inside IR35 and Outside IR35 contracts in the UK. Detailed breakdown of deemed PAYE employment taxes, Employer NI (15.0%), Corporation Tax (19-25%), and dividend taxes.',
  h1: 'UK IR35 Calculator: Inside vs Outside IR35 Take-Home Pay Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'HM Revenue & Customs (HMRC) Off-Payroll Working Rules',
    url: 'https://www.gov.uk/guidance/understanding-off-payroll-working-ir35',
    citation: 'Income Tax (Earnings and Pensions) Act 2003 (ITEPA) Chapter 8 & Chapter 10, HMRC Employment Status Manual (ESM).',
  },
  overview:
    'The UK Off-Payroll Working rules (commonly known as IR35), codified under Chapters 8 and 10 of the Income Tax (Earnings and Pensions) Act 2003 (ITEPA), govern whether a contractor providing services through an intermediary (such as a Personal Services Company, or PSC) is treated as a genuine business-to-business supplier or as a "deemed employee" for tax purposes. An "Inside IR35" determination strips away the small business tax advantages of a limited company, subjecting the contractor’s gross assignment revenue to PAYE income tax, Employee National Insurance, Employer National Insurance, and the Apprenticeship Levy. Across a standard £500 to £600 daily rate, falling Inside IR35 reduces annual take-home pay by £15,000 to £25,000.',
  sections: [
    {
      id: 'inside-vs-outside-tax-mechanics',
      title: 'Tax Mechanics: Inside IR35 (PAYE) vs Outside IR35 (PSC Structure)',
      body: `The financial divergence between the two operating statuses is substantial:

- **Inside IR35 (Deemed Employment / Umbrella Model)**:
  - If a contractor is deemed Inside IR35, the fee-payer (or umbrella company) must deduct statutory employment taxes from the assignment rate:
    - **Employer National Insurance (NICs)**: **15.0%** assessed on earnings above the secondary threshold (£5,000/year starting April 2025). When working through an umbrella, this cost is typically deducted directly from the contractor's gross contract rate.
    - **Apprenticeship Levy**: **0.50%** assessed on gross payroll.
    - **Employee Class 1 National Insurance**: **8.0%** on earnings between £12,570 and £50,270, and **2.0%** on earnings above £50,270.
    - **PAYE Income Tax**: Progressive UK tax brackets of **20%** (Basic rate), **40%** (Higher rate above £50,270), and **45%** (Additional rate above £125,140).
  - *Result*: Inside IR35 contractors retain only **54% to 58%** of the headline contract billing rate.
- **Outside IR35 (Legitimate Personal Services Company)**:
  - The client pays the full gross invoice to the contractor's UK limited company without tax deductions.
  - The limited company deducts legitimate business operating expenses (equipment, accountancy fees, professional indemnity insurance, travel).
  - The company pays **Corporation Tax** on net profits (19% small profits rate up to £50,000; tapered up to 25% main rate above £250,000).
  - The contractor draws a tax-efficient director's salary (typically equal to the National Insurance Primary Threshold of £12,570) and takes remaining post-tax profits as **dividends** (taxed at 8.75% basic rate, 33.75% higher rate, and 39.35% additional rate, with a £500 tax-free dividend allowance).
  - *Result*: Outside IR35 contractors typically retain **74% to 80%** of gross billing.`,
    },
    {
      id: 'key-ir35-status-tests',
      title: 'HMRC Status Determination Tests: How Outside Status is Proven',
      body: `HMRC and UK Tax Tribunals evaluate IR35 status based on three foundational legal tests established in common law:

1. **Right of Substitution (Personal Service)**: Does the contractor have the genuine contractual and operational right to send a qualified substitute to perform the work? If the end client insists only you personally can perform the services, this strongly points Inside IR35.
2. **Control (Supervision, Direction, and Control)**: Does the client dictate *how*, *when*, and *where* the work is done? A genuine contractor is retained to deliver an agreed specification or outcome, exercising independent professional discretion over execution.
3. **Mutuality of Obligation (MOO)**: Is the client contractually obligated to offer continuous work, and is the contractor obligated to accept it? A genuine B2B engagement terminates upon project completion without ongoing mutual obligation.
4. **Financial Risk & In Business on Own Account**: Genuine contractors purchase their own equipment, maintain commercial insurance, provide warranties or rectification of defective work at their own expense, and invoice per milestone or deliverable.`,
    },
    {
      id: 'client-status-determination-statement',
      title: 'Status Determination Statements (SDS) and Medium/Large Entity Rules',
      body: `Under the Chapter 10 reform:

- **Medium and Large Private Sector Clients**: The legal obligation to assess IR35 status rests with the end-client organization, not the contractor. The client must take "reasonable care" and issue a formal **Status Determination Statement (SDS)** detailing the decision and legal rationale.
- **Small Business Exemption**: If the end client qualifies as a "small business" under Companies Act 2006 criteria (satisfying two of: turnover $\\le$ £10.2m, balance sheet $\\le$ £5.1m, employees $\\le$ 50), the responsibility remains with the contractor's PSC under Chapter 8.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: £550 Daily Rate Inside vs Outside IR35 (220 Working Days)',
    scenario:
      'A senior IT architect contracts at £550.00/day for 220 billable days (£121,000.00 gross annual billing). Compare their annual net take-home pay operating Outside IR35 via a limited company versus Inside IR35 via an umbrella company.',
    inputs: {
      dailyContractRate: '£550.00',
      annualBillableDays: '220 Days',
      grossAnnualBilling: '£121,000.00',
      pscOperatingExpenses: '£3,000.00 (Accountancy, Insurance, Tech)',
    },
    steps: [
      {
        label: 'Gross Annual Contract Revenue',
        formula: '220 days × £550.00',
        amount: '£121,000.00',
        note: 'Total client billing',
      },
      {
        label: 'Inside IR35: Employer NI & Levy Deductions',
        formula: 'Employer NI (15%) + Levy (0.5%)',
        amount: '£18,250.00',
        note: 'Deducted from assignment rate by umbrella',
      },
      {
        label: 'Inside IR35: Gross Taxable Pay',
        formula: '£121,000.00 - £18,250.00',
        amount: '£102,750.00',
        note: 'PAYE salary subject to tax',
      },
      {
        label: 'Inside IR35: Employee NI + PAYE Income Tax',
        formula: 'Standard progressive PAYE rates',
        amount: '£33,950.00',
        note: 'Personal tax deductions',
      },
      {
        label: 'Inside IR35: Net Take-Home Pay',
        formula: '£102,750.00 - £33,950.00',
        amount: '£68,800.00 net (56.9% retention)',
        note: 'Net in contractor’s bank account',
      },
      {
        label: 'Outside IR35: Corporation Tax',
        formula: '19% to 25% on taxable profit',
        amount: '£22,450.00',
        note: 'Limited company tax liability',
      },
      {
        label: 'Outside IR35: Dividend & Income Tax',
        formula: 'Personal tax on salary + dividends',
        amount: '£12,350.00',
        note: 'Self-assessment personal tax',
      },
      {
        label: 'Outside IR35: Net Take-Home Pay',
        formula: '£121,000 - £3,000 - £22,450 - £12,350',
        amount: '£86,200.00 net (71.2% retention)',
        note: 'Net disposable cash',
      },
      {
        label: 'Annual Financial Penalty of Inside IR35',
        formula: '£86,200.00 - £68,800.00',
        amount: '£17,400.00 net annual loss',
        note: 'Cost of falling inside IR35',
      },
    ],
    takeaway:
      'On a £550/day contract, falling Inside IR35 reduces the contractor’s net take-home pay by £17,400.00 per year (from £86,200 down to £68,800). To achieve the same take-home pay Inside IR35, the contractor must negotiate a daily rate of approximately £690/day.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Required Inside IR35 Day Rate to Match an Outside Rate of £500/Day',
    scenario:
      'A contractor currently earns £500/day Outside IR35 (retaining approx. £78,000 net annually on 220 days). A client offers them an Inside IR35 contract. What day rate must they demand to match their current net take-home pay?',
    inputs: {
      currentOutsideTakeHome: '£78,000.00 net',
      typicalInsideRetentionRate: '56.5% of gross invoice value',
      workingDays: '220 Days',
    },
    steps: [
      {
        label: 'Required Gross Annual Assignment Billing',
        formula: '£78,000.00 ÷ 0.565',
        amount: '£138,053.10',
        note: 'Gross billing needed to clear £78k net',
      },
      {
        label: 'Required Inside IR35 Daily Rate',
        formula: '£138,053.10 ÷ 220 days',
        amount: '£627.51/day',
        note: 'Minimum contract rate to break even',
      },
      {
        label: 'Required Day Rate Premium Percentage',
        formula: '[ (£627.51 - £500.00) ÷ £500.00 ] × 100',
        amount: '+25.50% rate uplift',
        note: 'Uplift needed to offset deemed PAYE taxes',
      },
    ],
    takeaway:
      'To accept an Inside IR35 role without suffering a reduction in net income, a contractor at £500/day Outside must demand at least £627.50/day Inside IR35 (a 25.5% uplift).',
  },
  faqs: [
    {
      question: 'What is the main difference between Inside and Outside IR35?',
      answer:
        'Outside IR35 means you are operating as a genuine business; your limited company receives payment gross, and you can optimize taxes via salary and dividends. Inside IR35 means you are treated as a deemed employee; your fee-payer deducts PAYE income tax and National Insurance before you receive payment.',
      sourceUrl: 'https://www.gov.uk/guidance/understanding-off-payroll-working-ir35',
    },
    {
      question: 'Who decides whether a contract is Inside or Outside IR35?',
      answer:
        'For medium and large private sector businesses and all public sector bodies, the end client is legally required to make the status determination and issue a Status Determination Statement (SDS). If the client is a small business, the responsibility remains with the contractor.',
      sourceUrl: 'https://www.gov.uk/guidance/fee-payer-responsibilities-under-the-off-payroll-working-rules',
    },
    {
      question: 'What is HMRC’s CEST tool and is it legally binding?',
      answer:
        'CEST (Check Employment Status for Tax) is HMRC’s online tool. HMRC states it will stand by CEST results provided the information entered is accurate, but the tool is widely criticized for failing to assess Mutuality of Obligation (MOO) and has been overruled in numerous tax tribunals.',
      sourceUrl: 'https://www.gov.uk/guidance/check-employment-status-for-tax',
    },
    {
      question: 'Why do umbrella companies deduct Employer National Insurance from my contract rate?',
      answer:
        'When an agency or client advertises an "umbrella assignment rate", that gross rate includes employment overheads. The umbrella company uses that rate to fund Employer NI (15.0%) and the Apprenticeship Levy (0.5%) before paying the contractor their gross PAYE salary.',
      sourceUrl: 'https://www.gov.uk/guidance/working-through-an-umbrella-company',
    },
    {
      question: 'How much higher must an Inside IR35 rate be to match an Outside IR35 take-home?',
      answer:
        'Typically, a contractor needs a 25% to 30% higher daily rate Inside IR35 to achieve the same annual take-home pay as an Outside IR35 limited company contract.',
      sourceUrl: 'https://www.gov.uk/guidance/understanding-off-payroll-working-ir35',
    },
  ],
};

export default ukIr35CalculatorContent;

