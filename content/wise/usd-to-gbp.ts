import type { PageContent } from '../types.ts';

export const usdToGbpContent: PageContent = {
  slug: 'usd-to-gbp',
  family: 'wise',
  title: 'Wise vs Stripe Fee Calculator (USD to GBP Cross-Border) | FeeKit',
  metaDescription:
    'Calculate exact cross-border transfer fees from US Dollars (USD) to British Pounds (GBP). Compare Wise 0.43% + $0.45 pricing against Stripe 5.4% + $0.30 international card rates and UK Faster Payments.',
  h1: 'Wise vs Stripe Fee Comparison: USD to GBP Cross-Border Transfers',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Wise & Stripe UK Cross-Border Fee Schedules',
    url: 'https://wise.com/pricing',
    citation: 'Wise Route Pricing (USD to GBP) and Stripe International Processing Documentation.',
  },
  overview:
    'Transfers from USD to GBP represent one of the highest-volume currency corridors in transatlantic commerce. Stripe charges standard US domestic processing fees (2.9% + $0.30) plus a 1.5% international card fee and a 1.0% currency conversion fee when British customers pay US merchants in GBP or when funds require foreign exchange settlement. In contrast, Wise connects US domestic ACH clearing to the UK Faster Payments Service (FPS), charging a transparent 0.43% variable fee and a $0.45 fixed transfer cost at mid-market exchange rates. Choosing between Stripe’s card acceptance rails and Wise’s direct B2B settlement infrastructure significantly impacts transatlantic profit margins.',
  sections: [
    {
      id: 'usd-to-gbp-rail-mechanics',
      title: 'Transatlantic Fee Architecture: Card Schemes vs UK Faster Payments',
      body: `Moving capital between the United States and the United Kingdom follows two completely different operational models:

- **Stripe Cross-Border Processing Rail**: If a UK customer pays via credit or debit card through Stripe Checkout:
  - Standard Domestic Processing: **2.90% + $0.30**
  - Cross-Border International Card Fee: **+1.50%**
  - Currency Conversion Markup: **+1.00%**
  - **Total Effective Fee**: **5.40% + $0.30**. For a £2,000 transaction, credit card rails deduct over £108.00 in merchant fees.
- **Wise Peer-to-Peer Treasury Model**:
  - Funding: Inbound ACH debit from any US checking account ($0.45 flat).
  - Exchange Rate: Real mid-market interbank rate with zero hidden spread or pips.
  - Conversion Surcharge: **0.43%** variable rate on converted principal.
  - Delivery: Transferred instantly via the UK **Faster Payments Service (FPS)** directly into any UK sorting code and account number.
  - **Total Cost on $2,000.00**: Only **$9.05** ($8.60 variable + $0.45 fixed), saving over $98.00 compared to merchant card processing.`,
    },
    {
      id: 'uk-banking-fps-settlement',
      title: 'UK Faster Payments: Settlement Speed & Regulatory Compliance',
      body: `Operational and regulatory aspects of the USD to GBP corridor include:

1. **Faster Payments Service (FPS) Clearance**: Unlike standard SWIFT international telegraphic transfers that take 3 to 5 banking days, Wise payouts into UK bank accounts clear through the UK Faster Payments system. Funds typically reflect in the British recipient’s bank account within seconds or at most 2 hours, 24 hours a day, 365 days a year.
2. **Regulatory Oversight**: Wise Payments Ltd is authorized as an Electronic Money Institution by the Financial Conduct Authority (FCA) under the Electronic Money Regulations 2011 (Firm Reference 900507). In the United States, Wise is registered with the Financial Crimes Enforcement Network (FinCEN).
3. **No Intermediary Correspondent Bank Fees**: Traditional international bank wires route through intermediate correspondent clearing institutions (such as Citibank New York or Barclays London), which deduct unpredictable £12 to £25 lifting fees from the principal. Wise local payouts avoid intermediary deductions entirely.`,
    },
    {
      id: 'transatlantic-business-practices',
      title: 'Practical Application for US Agencies & UK Contractors',
      body: `How transatlantic businesses structure their billing to minimize processing friction:

- **US Digital Agencies Hiring UK Contractors**: Sending $50,000 annually to British software developers or copywriters via traditional bank wires costs upwards of $1,800 in FX markups and wire fees. Utilizing Wise ACH-to-FPS routing caps the total annual transfer cost at approximately $220.
- **UK SaaS Companies Selling to US Customers**: UK SaaS businesses can create a virtual US Routing and Account Number inside Wise Business to collect ACH direct debits from US clients without paying 2.0% Stripe conversion fees back into Sterling.
- **HMRC Invoicing Documentation**: Both Wise and Stripe supply HMRC-compliant transaction summaries detailing the gross receipt, exact foreign exchange rate applied, and transparent fee deduction for Schedule C or Corporation Tax filings.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $10,000 USD to GBP Transfer (Illustrative FX 0.7900)',
    scenario:
      'A US marketing agency pays a UK design agency $10,000.00 USD for branding deliverables, evaluating Wise transfer vs receiving payment via Stripe international checkout.',
    inputs: {
      transferAmountUSD: '$10,000.00',
      illustrativeExchangeRate: '1 USD = 0.7900 GBP (Illustrative Benchmark)',
      wiseVariableRate: '0.43%',
      wiseFixedFee: '$0.45',
      stripeCrossBorderRate: '5.40% + $0.30',
    },
    steps: [
      {
        label: 'Wise Variable Percentage Fee',
        formula: '$10,000.00 × 0.43%',
        amount: '$43.00',
        note: 'Calculated on gross volume',
      },
      {
        label: 'Wise Fixed Transfer Fee',
        formula: 'Flat ACH processing cost',
        amount: '$0.45',
        note: 'ACH network direct debit fee',
      },
      {
        label: 'Total Wise Deduction',
        formula: '$43.00 + $0.45',
        amount: '$43.45',
        note: 'Effective fee is 0.4345%',
      },
      {
        label: 'Wise Net USD Converted',
        formula: '$10,000.00 - $43.45',
        amount: '$9,956.55',
        note: 'Converted at interbank rate',
      },
      {
        label: 'Wise GBP Delivered via FPS',
        formula: '$9,956.55 × 0.7900',
        amount: '£7,865.67',
        note: 'Settles within minutes in UK bank',
      },
      {
        label: 'Stripe Total Fee Comparison',
        formula: '($10,000.00 × 5.40%) + $0.30',
        amount: '$540.30',
        note: 'Combines 2.9% + 1.5% intl + 1.0% FX',
      },
      {
        label: 'Stripe GBP Equivalent Delivered',
        formula: '($10,000.00 - $540.30) × 0.7900',
        amount: '£7,473.16',
        note: 'Stripe delivers £392.51 less to the recipient',
      },
    ],
    takeaway:
      'For a $10,000 USD to GBP transaction, routing via Wise saves $496.85 (equivalent to £392.51) in financial processing charges compared to international credit card processing.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Delivering Exactly £5,000 GBP to a UK Contractor',
    scenario:
      'A US client needs to ensure their London contractor receives an exact £5,000.00 GBP payment into their Barclays account at an illustrative exchange rate of 0.7900 GBP/USD.',
    inputs: {
      targetSterlingPayout: '£5,000.00',
      illustrativeExchangeRate: '0.7900 GBP per USD',
      wiseVariableRate: '0.43%',
      wiseFixedFee: '$0.45',
    },
    steps: [
      {
        label: 'Required USD Principal After Fees',
        formula: '£5,000.00 ÷ 0.7900',
        amount: '$6,329.11',
        note: 'Net dollar amount to be converted',
      },
      {
        label: 'Gross USD Deposit Required',
        formula: '($6,329.11 + $0.45) ÷ (1 - 0.0043)',
        amount: '$6,356.89',
        note: 'Reverse calculation formula for Wise',
      },
      {
        label: 'Total Fee Assessed by Wise',
        formula: '($6,356.89 × 0.43%) + $0.45',
        amount: '$27.78',
        note: 'Total transparent deduction',
      },
      {
        label: 'Net Converted USD',
        formula: '$6,356.89 - $27.78',
        amount: '$6,329.11',
        note: 'Yields precisely £5,000.00 GBP',
      },
    ],
    takeaway:
      'To deliver an exact £5,000.00 payment to the UK, the sender initiates $6,356.89 via Wise. Fulfilling the same net invoice via Stripe would require initiating $6,690.71.',
  },
  faqs: [
    {
      question: 'How fast do USD to GBP transfers settle through Wise?',
      answer:
        'Once Wise receives your USD payment (instantly via debit card or in 1-2 business days via ACH), the conversion and payout to the recipient’s UK account is executed through the Faster Payments Service (FPS), typically arriving in seconds or within 2 hours.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Does Stripe support direct GBP payouts to UK bank accounts from a US account?',
      answer:
        'Yes, Stripe supports multi-currency payouts, but assesses an additional 1.0% to 2.0% currency conversion fee when paying out non-domestic currencies to international bank accounts, in addition to standard card fees.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'What information is needed to send a Wise transfer to the UK?',
      answer:
        'To send GBP to a UK recipient, you need their full legal name, 6-digit UK bank Sort Code, and 8-digit Account Number. Alternatively, you can send to their registered email address if they have a Wise account.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Are Wise transfers to the UK subject to VAT?',
      answer:
        'No. Financial services and currency exchange transactions are exempt from UK VAT under Item 1, Group 5, Schedule 9 of the Value Added Tax Act 1994. No VAT is added to Wise transfer fees.',
      sourceUrl: 'https://www.gov.uk/guidance/vat-on-financial-services',
    },
    {
      question: 'Can I lock the USD to GBP exchange rate before sending money?',
      answer:
        'Yes. When you initiate a transfer on Wise, the mid-market exchange rate is locked for between 24 and 48 hours, ensuring you know the exact Sterling amount that will arrive in the UK.',
      sourceUrl: 'https://wise.com/pricing',
    },
  ],
};

export default usdToGbpContent;

