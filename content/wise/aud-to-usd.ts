import type { PageContent } from '../types.ts';

export const audToUsdContent: PageContent = {
  slug: 'aud-to-usd',
  family: 'wise',
  title: 'Wise vs Stripe Fee Calculator (AUD to USD Cross-Border) | FeeKit',
  metaDescription:
    'Calculate real payment fees for Australian Dollar (AUD) to US Dollar (USD) transfers. Compare Wise 0.45% + A$0.70 PayID/NPP pricing vs Stripe 1.5% cross-border + 2.0% FX markup for Australian businesses.',
  h1: 'Wise vs Stripe Fee Comparison: AUD to USD Cross-Border Transfers',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Wise & Stripe Australia Pricing Schedules',
    url: 'https://wise.com/pricing',
    citation: 'Wise Australia Route Pricing (AUD to USD) and Stripe Australia Official Pricing Schedule.',
  },
  overview:
    'Australian companies, digital agencies, and exporters sending funds or collecting international revenue between Australian Dollars (AUD) and US Dollars (USD) face substantial fee friction across legacy banking corridors. Stripe Australia charges a standard domestic rate (1.75% + A$0.30 for domestic cards, or 2.9% + A$0.30 for international cards) plus a 2.0% currency conversion fee when settling across currencies. In contrast, Wise operates local clearing in Australia through the New Payments Platform (NPP / PayID) and direct domestic deposit in the US via the Automated Clearing House (ACH) network, charging an ultra-transparent 0.45% variable fee and a flat A$0.70 fixed network surcharge at pure mid-market rates.',
  sections: [
    {
      id: 'aud-to-usd-rail-mechanics',
      title: 'Trans-Pacific Fee Mechanics: Card Gateway vs Peer-to-Peer Settlement',
      body: `Moving capital from Australia to the United States operates under two distinct paradigms:

- **Stripe Australia International Card Processing**:
  - International Card Base Rate: **2.90% + A$0.30**
  - Currency Conversion Markup: **+2.00%**
  - **Total Transaction Cost**: **4.90% + A$0.30**. On an A$10,000 corporate transaction, credit card rails deduct nearly A$500.00 in processing charges.
- **Wise Trans-Pacific Treasury Rail**:
  - Inbound Funding: Instant PayID / Osko transfer via the Australian New Payments Platform (NPP) with zero deposit fee.
  - Exchange Rate: Real mid-market interbank rate with zero hidden margin or retail bank markup.
  - Conversion Surcharge: **0.45%** variable fee.
  - Outbound Delivery: Settles directly into any US bank account via domestic ACH.
  - **Total Cost on A$10,000.00**: Only **A$45.70** (A$45.00 variable + A$0.70 fixed), preserving capital and delivering funds without intermediary wire deductions.`,
    },
    {
      id: 'australian-regulatory-compliance-asic-austrac',
      title: 'ASIC, AUSTRAC Regulatory Compliance & Banking Settlement',
      body: `Key compliance and technical factors governing AUD-to-USD transfers:

1. **ASIC & AUSTRAC Oversight**: Wise Australia Pty Ltd holds an Australian Financial Services Licence (AFSL No. 513764) issued by the Australian Securities and Investments Commission (ASIC) and is registered as an independent remittance provider with AUSTRAC.
2. **Eliminating Intermediary SWIFT Wire Fees**: International bank telegraphic transfers sent via major Australian banks (Commonwealth Bank, ANZ, Westpac, NAB) typically incur an upfront A$20 to A$30 international wire fee and a 3.0% to 4.0% foreign exchange retail spread. Furthermore, US correspondent clearing banks deduct $15 to $25 in incoming wire fees. Wise avoids SWIFT corridors entirely by executing domestic transfers at both endpoints.
3. **Australian GST Exemption**: Financial supplies, including currency conversion and money remittance, are input-taxed financial supplies under A New Tax System (Goods and Services Tax) Act 1999 (Division 40-5). Transfer fees are exempt from Australian GST.`,
    },
    {
      id: 'practical-business-use-cases',
      title: 'Strategic Routing for Australian SaaS & Global Exporters',
      body: `How Australian companies optimize their trans-Pacific finances:

- **Australian Companies Paying US Tech Vendors**: Sponsoring US enterprise software (Salesforce, AWS, Snowflake) via standard Australian corporate credit cards incurs an automatic 3.0% international transaction fee from Australian banks. Paying vendors directly in USD via a Wise Business multi-currency account eliminates these recurring markups.
- **Australian Agencies Servicing US Enterprise Clients**: Rather than asking US clients to execute expensive international wire transfers, Australian agencies provide a virtual US routing and account number via Wise Business, enabling US clients to pay seamlessly via domestic ACH.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: A$10,000 AUD to USD Transfer (Illustrative FX 0.6550)',
    scenario:
      'A Sydney-based animation studio transfers A$10,000.00 AUD to a sound engineering contractor in Los Angeles, comparing Wise direct transfer versus processing international card payment via Stripe.',
    inputs: {
      transferAmountAUD: 'A$10,000.00',
      illustrativeExchangeRate: '1 AUD = 0.6550 USD (Illustrative Benchmark)',
      wiseVariableRate: '0.45%',
      wiseFixedFee: 'A$0.70',
      stripeCombinedRate: '4.90% + A$0.30',
    },
    steps: [
      {
        label: 'Wise Variable Percentage Fee',
        formula: 'A$10,000.00 × 0.45%',
        amount: 'A$45.00',
        note: '0.45% conversion fee',
      },
      {
        label: 'Wise Fixed Surcharge',
        formula: 'Flat PayID/NPP network cost',
        amount: 'A$0.70',
        note: 'NPP real-time processing fee',
      },
      {
        label: 'Total Wise Deduction',
        formula: 'A$45.00 + A$0.70',
        amount: 'A$45.70',
        note: 'Effective fee is 0.457%',
      },
      {
        label: 'Net AUD Converted',
        formula: 'A$10,000.00 - A$45.70',
        amount: 'A$9,954.30',
        note: 'Converted at interbank mid-market rate',
      },
      {
        label: 'US Dollars Delivered via ACH',
        formula: 'A$9,954.30 × 0.6550',
        amount: '$6,520.07',
        note: 'Arrives in US checking account with no wire fee',
      },
      {
        label: 'Stripe Total Fee Comparison',
        formula: '(A$10,000.00 × 4.90%) + A$0.30',
        amount: 'A$490.30',
        note: '2.9% international card + 2.0% currency conversion',
      },
      {
        label: 'Stripe USD Equivalent Delivered',
        formula: '(A$10,000.00 - A$490.30) × 0.6550',
        amount: '$6,228.85',
        note: 'Stripe delivers $291.22 less to recipient',
      },
    ],
    takeaway:
      'On an A$10,000 AUD to USD transfer, routing via Wise saves A$444.60 (approx. $291.22 USD) compared to international card processing on Stripe.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Delivering Exactly $5,000 USD to a US Contractor from Australia',
    scenario:
      'An Australian company needs to ensure an American technical consultant receives an exact $5,000.00 USD net payout into their US bank account at an illustrative rate of 0.6550 USD/AUD.',
    inputs: {
      targetUsdPayout: '$5,000.00',
      illustrativeExchangeRate: '0.6550 USD per AUD',
      wiseVariableRate: '0.45%',
      wiseFixedFee: 'A$0.70',
    },
    steps: [
      {
        label: 'Required AUD Principal After Fees',
        formula: '$5,000.00 ÷ 0.6550',
        amount: 'A$7,633.59',
        note: 'Net Australian Dollar value needed',
      },
      {
        label: 'Gross AUD Deposit Required',
        formula: '(A$7,633.59 + A$0.70) ÷ (1 - 0.0045)',
        amount: 'A$7,668.80',
        note: 'Wise reverse calculation formula',
      },
      {
        label: 'Wise Total Fee Assessed',
        formula: '(A$7,668.80 × 0.45%) + A$0.70',
        amount: 'A$35.21',
        note: 'Transparent total cost',
      },
      {
        label: 'Net AUD Converted',
        formula: 'A$7,668.80 - A$35.21',
        amount: 'A$7,633.59',
        note: 'Yields precisely $5,000.00 USD',
      },
    ],
    takeaway:
      'To deliver an exact $5,000.00 USD payout, initiate A$7,668.80 via Wise. Fulfilling this invoice via major Australian banks charging typical 3.5% FX markups would require sending over A$7,900.00.',
  },
  faqs: [
    {
      question: 'What is the fee for converting AUD to USD with Wise?',
      answer:
        'Wise charges a 0.45% variable conversion fee plus a flat A$0.70 fixed fee when funding the transfer via PayID or bank transfer. The conversion executes at the live mid-market rate with zero exchange markups.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Can Australian businesses open a US Dollar bank account with Wise?',
      answer:
        'Yes. Australian businesses can obtain local US bank details (ACH routing number and account number) via Wise Business, allowing them to receive USD client payments and pay US suppliers directly.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'How fast do AUD to USD transfers take to arrive in the United States?',
      answer:
        'Transfers funded by PayID or Osko clear instantly into Wise’s Australian account. Conversion and US ACH delivery typically settle within 1 business day directly into the US recipient’s account.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Do Australian banks charge fees when sending money to Wise via PayID?',
      answer:
        'No. Sending an instant payment via PayID or standard bank transfer to Wise’s domestic Australian bank account is free of charge across all Australian banks.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Is GST applicable to international money transfer fees in Australia?',
      answer:
        'No. Under Australian tax law, financial services and cross-border currency exchange are input-taxed financial supplies, meaning no 10% GST is levied on the transfer fee.',
      sourceUrl: 'https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/financial-supplies',
    },
  ],
};

export default audToUsdContent;

