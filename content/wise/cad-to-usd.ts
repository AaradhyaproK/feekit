import type { PageContent } from '../types.ts';

export const cadToUsdContent: PageContent = {
  slug: 'cad-to-usd',
  family: 'wise',
  title: 'Wise vs Stripe Fee Calculator (CAD to USD Cross-Border) | FeeKit',
  metaDescription:
    'Calculate real payment fees for Canadian Dollar (CAD) to US Dollar (USD) transfers. Compare Wise 0.45% + C$0.60 EFT/ACH pricing vs Stripe 1.5% cross-border + 2.0% FX markup for Canadian businesses.',
  h1: 'Wise vs Stripe Fee Comparison: CAD to USD Cross-Border Transfers',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Wise & Stripe Canada/US Pricing Schedules',
    url: 'https://wise.com/pricing',
    citation: 'Wise Route Pricing (CAD to USD) and Stripe Canada Official Pricing Schedule.',
  },
  overview:
    'Cross-border commerce between Canada and the United States represents one of the most integrated bilateral trading relationships in the world. However, financial rails between Canadian Dollars (CAD) and US Dollars (USD) are burdened by substantial bank spreads and payment gateway fees. Under Stripe Canada pricing, processing US credit cards incurs the standard Canadian domestic rate (2.9% + $0.30 CAD) plus a 1.5% international card fee and an additional 2.0% currency conversion markup, totaling 6.4% + $0.30. In contrast, Wise bridges the Canadian Electronic Funds Transfer (EFT / Interac) network directly to the US ACH system, converting at the mid-market rate for a transparent 0.45% variable fee and a modest C$0.60 fixed transfer charge.',
  sections: [
    {
      id: 'cad-to-usd-rail-mechanics',
      title: 'Fee Mechanics: Canadian Banking EFT vs Stripe Cross-Border Processing',
      body: `Moving money from Canada to the United States incurs different costs depending on the rail:

- **Stripe Canada Merchant Processing**:
  - Canadian Domestic Baseline: **2.90% + $0.30 CAD**
  - Cross-Border International Card Fee: **+1.50%**
  - Currency Conversion Surcharge: **+2.00%** (when converting USD card proceeds to CAD)
  - **Combined Gateway Deductions**: **6.40% + $0.30 CAD**. On a $10,000 corporate transaction, credit card rails deduct over $640.00 in processing charges.
- **Wise North American Corridor Model**:
  - Inbound Funding: Electronic Funds Transfer (EFT) or Interac e-Transfer from any Canadian chartered bank (C$0.60 fixed fee).
  - Exchange Rate: Real mid-market interbank exchange rate with zero hidden spread or pips.
  - Conversion Surcharge: **0.45%** variable fee.
  - Outbound Delivery: Settles directly into any US bank account via domestic ACH.
  - **Total Cost on C$10,000.00**: Only **C$45.60** (C$45.00 variable + C$0.60 fixed), delivering significant savings over traditional bank wire fees.`,
    },
    {
      id: 'canadian-banking-fintrac-compliance',
      title: 'FINTRAC Regulatory Compliance and North American Clearing',
      body: `Cross-border financial transactions between Canada and the US operate under strict bilateral regulatory oversight:

1. **FINTRAC & FinCEN Registration**: Wise Payments Canada Inc. is registered as a Money Services Business (MSB) with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) and with FinCEN in the US.
2. **Avoiding Bank Cross-Border Wire Fees**: Major Canadian chartered banks (RBC, TD, Scotiabank, BMO, CIBC) routinely charge C$20.00 to C$45.00 for outgoing international wire transfers, accompanied by a 2.5% to 3.5% foreign exchange retail markup. Furthermore, receiving US banks deduct an additional $15.00 to $25.00 incoming wire fee. Wise circumvents SWIFT wires by using domestic clearing in both nations.
3. **CUSMA / USMCA Trade Documentation**: Canadian businesses exporting goods or services to the United States operate under the Canada-United States-Mexico Agreement (CUSMA). FeeKit worked calculations provide itemized proof of transaction fees and mid-market valuations for Canada Revenue Agency (CRA) corporate tax records.`,
    },
    {
      id: 'practical-business-use-cases',
      title: 'Strategic Architecture for Canadian Exporters and Agencies',
      body: `How Canadian businesses structure their financial infrastructure to eliminate cross-border leakage:

- **Canadian Agencies Servicing US Clients**: Many Canadian consultancies open a Wise Business USD account to receive US domestic ACH payments without forcing US clients to send expensive international wires. Proceeds can be held in USD to pay US SaaS subscriptions or converted to CAD at 0.45% when exchange rates are favorable.
- **Shopify Merchants Operating in Canada**: Canadian Shopify merchants selling in USD can connect a Wise USD account to receive direct payouts without incurring Shopify’s 2.0% currency conversion fee when paying out to a domestic Canadian bank.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: C$10,000 CAD to USD Transfer (Illustrative FX 0.7400)',
    scenario:
      'A Toronto-based digital product studio transfers C$10,000.00 CAD to an American software vendor in San Francisco, comparing Wise direct bank transfer with receiving payment via Stripe.',
    inputs: {
      transferAmountCAD: 'C$10,000.00',
      illustrativeExchangeRate: '1 CAD = 0.7400 USD (Illustrative Benchmark)',
      wiseVariableRate: '0.45%',
      wiseFixedFee: 'C$0.60',
      stripeCombinedRate: '6.40% + C$0.30',
    },
    steps: [
      {
        label: 'Wise Variable Percentage Fee',
        formula: 'C$10,000.00 × 0.45%',
        amount: 'C$45.00',
        note: '0.45% conversion fee',
      },
      {
        label: 'Wise Fixed Surcharge',
        formula: 'Flat EFT network processing cost',
        amount: 'C$0.60',
        note: 'EFT network direct clearing fee',
      },
      {
        label: 'Total Wise Deduction',
        formula: 'C$45.00 + C$0.60',
        amount: 'C$45.60',
        note: 'Effective fee is 0.456%',
      },
      {
        label: 'Net CAD Converted',
        formula: 'C$10,000.00 - C$45.60',
        amount: 'C$9,954.40',
        note: 'Converted at interbank mid-market rate',
      },
      {
        label: 'US Dollars Delivered via ACH',
        formula: 'C$9,954.40 × 0.7400',
        amount: '$7,366.26',
        note: 'Arrives directly in US checking account',
      },
      {
        label: 'Stripe Total Fee Comparison',
        formula: '(C$10,000.00 × 6.40%) + C$0.30',
        amount: 'C$640.30',
        note: '2.9% base + 1.5% intl + 2.0% currency conversion',
      },
      {
        label: 'Stripe USD Equivalent Delivered',
        formula: '(C$10,000.00 - C$640.30) × 0.7400',
        amount: '$6,926.18',
        note: 'Stripe delivers $440.08 less to recipient',
      },
    ],
    takeaway:
      'On a C$10,000 CAD to USD transfer, routing via Wise saves C$594.70 (approx. $440.08 USD) compared to international card processing on Stripe.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Delivering Exactly $5,000 USD to a US Contractor from Canada',
    scenario:
      'A Canadian company needs to ensure an American technical contractor receives an exact $5,000.00 USD net payout into their Silicon Valley Bank account at an illustrative rate of 0.7400 USD/CAD.',
    inputs: {
      targetUsdPayout: '$5,000.00',
      illustrativeExchangeRate: '0.7400 USD per CAD',
      wiseVariableRate: '0.45%',
      wiseFixedFee: 'C$0.60',
    },
    steps: [
      {
        label: 'Required CAD Principal After Fees',
        formula: '$5,000.00 ÷ 0.7400',
        amount: 'C$6,756.76',
        note: 'Net Canadian Dollar value needed',
      },
      {
        label: 'Gross CAD Deposit Required',
        formula: '(C$6,756.76 + C$0.60) ÷ (1 - 0.0045)',
        amount: 'C$6,787.91',
        note: 'Wise reverse calculation formula',
      },
      {
        label: 'Wise Total Fee Assessed',
        formula: '(C$6,787.91 × 0.45%) + C$0.60',
        amount: 'C$31.15',
        note: 'Transparent total cost',
      },
      {
        label: 'Net CAD Converted',
        formula: 'C$6,787.91 - C$31.15',
        amount: 'C$6,756.76',
        note: 'Yields precisely $5,000.00 USD',
      },
    ],
    takeaway:
      'To deliver an exact $5,000.00 USD payout, initiate C$6,787.91 via Wise. Fulfilling this invoice through traditional Canadian commercial banks charging typical 3% FX markups would require sending over C$6,970.00.',
  },
  faqs: [
    {
      question: 'What is the fee for converting CAD to USD with Wise?',
      answer:
        'Wise charges a 0.45% variable conversion fee plus a flat C$0.60 fixed fee when funding the transfer via Canadian Electronic Funds Transfer (EFT) or direct debit. Funding via Interac e-Transfer carries a slight additional banking surcharge.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Can Canadian businesses hold US Dollars in a Wise account?',
      answer:
        'Yes. With a Wise Business account, Canadian companies can open a dedicated USD balance with local US routing and account numbers, allowing them to collect ACH payments from US clients and pay US vendors directly without converting currencies.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Why do Canadian banks charge so much for US Dollar wires?',
      answer:
        'Major Canadian banks charge a flat outgoing wire fee (typically C$20 to C$45) and add a foreign exchange margin between 2.5% and 3.5% above the interbank rate. Additionally, correspondent banks frequently deduct intermediary fees before delivery.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'How fast do CAD to USD transfers settle in the US?',
      answer:
        'Transfers funded by Canadian direct debit or EFT typically take 1 to 2 business days to clear into the US ACH network. Transfers funded by credit/debit card or Interac e-Transfer can settle on the same business day.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Is GST/HST charged on Wise transfer fees in Canada?',
      answer:
        'Financial services and cross-border currency exchange in Canada are exempt from GST/HST under Part VII of the Excise Tax Act. No sales tax is added to Wise transfer fees.',
      sourceUrl: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/financial-services.html',
    },
  ],
};

export default cadToUsdContent;

