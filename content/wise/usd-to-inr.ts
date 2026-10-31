import type { PageContent } from '../types.ts';

export const usdToInrContent: PageContent = {
  slug: 'usd-to-inr',
  family: 'wise',
  title: 'Wise vs Stripe Fee Calculator (USD to INR Cross-Border) | FeeKit',
  metaDescription:
    'Calculate real USD to INR transfer fees, Wise 0.65% + $1.20 pricing, Stripe 5.4% card fees, RBI Purpose Codes (P0802), FIRA certificates, and IMPS/NEFT bank settlement in India.',
  h1: 'Wise vs Stripe Fee Comparison: USD to INR Cross-Border Transfers',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Wise & Stripe India Cross-Border Guidelines',
    url: 'https://wise.com/pricing',
    citation: 'Wise Route Pricing (USD to INR) and Reserve Bank of India (RBI) Foreign Exchange Management Act (FEMA) Export Guidelines.',
  },
  overview:
    'The US Dollar (USD) to Indian Rupee (INR) corridor is among the largest technical services and freelance export channels in the world. When US clients pay Indian developers, IT consultants, and agencies via Stripe, transactions incur steep deductions: standard 2.9% + $0.30 domestic processing plus a 1.5% international card fee and a 2.0% currency conversion fee (totaling 6.4% + $0.30). Furthermore, Stripe India accounts face complex compliance requirements, rolling payout reserves, and separate billing for Foreign Inward Remittance Advice (FIRA). Conversely, Wise converts USD to INR at the mid-market rate with a transparent 0.65% variable fee and $1.20 fixed surcharge, settling funds directly into Indian bank accounts via IMPS/NEFT with automated, complimentary digital FIRA certificates.',
  sections: [
    {
      id: 'usd-to-inr-rail-mechanics',
      title: 'Fee Mechanics: Wise Mid-Market vs Stripe Cross-Border Processing in India',
      body: `Indian IT service exporters face vastly different economics depending on their payment collection rail:

- **Stripe US-to-India Cross-Border Card Processing**:
  - Base Card Processing: **2.90% + $0.30**
  - International Card Fee: **+1.50%**
  - Currency Conversion Surcharge: **+2.00%**
  - **Combined Gateway Deductions**: **6.40% + $0.30**. On a $5,000 engineering invoice, Stripe fees consume over $320.00.
  - In addition, Indian GST (18%) applies to Stripe processing fees unless an LUT (Letter of Undertaking) is registered.
- **Wise Treasury Clearing Rail**:
  - Funding: Direct US ACH electronic transfer from the client ($1.20 flat fixed fee).
  - Exchange Rate: Real mid-market interbank rate with zero FX markup or hidden spread.
  - Conversion Surcharge: **0.65%** variable fee.
  - Outbound Delivery: Directly into any Indian bank account via IMPS or NEFT.
  - **Total Cost on $5,000.00**: Only **$33.70** ($32.50 variable + $1.20 fixed). Wise delivers **$4,966.30** converted directly into INR, saving nearly $290.00 per invoice.`,
    },
    {
      id: 'rbi-compliance-purpose-codes-fira',
      title: 'RBI FEMA Compliance: Purpose Codes and FIRA Certification',
      body: `All inward remittances into India are strictly regulated by the Reserve Bank of India (RBI) under the Foreign Exchange Management Act (FEMA):

1. **Mandatory RBI Purpose Codes**: Senders or recipients must designate a valid RBI Purpose Code corresponding to the nature of the transaction:
   - **P0802**: Software implementation, IT development, coding, and SaaS engineering.
   - **P1006**: Business management, consulting, and public relations services.
   - **P0803**: Data processing, database services, and cloud server administration.
   - **P0801**: Hardware consultancy services.
   Selecting an inaccurate purpose code can cause funds to be frozen by recipient Indian authorized dealer banks (AD Category I banks).
2. **Foreign Inward Remittance Advice (FIRA / FIRC)**: A digital FIRA is a mandatory legal document issued by an authorized dealer bank certifying that foreign currency arrived from abroad. Indian exporters need FIRA documentation for:
   - Zero-rated export compliance under Indian GST (claiming refunds or operating under a Letter of Undertaking / LUT).
   - Establishing foreign income for Indian Income Tax audits.
   Wise automatically generates and provides downloadable digital FIRA certificates within your dashboard at no extra charge, whereas traditional Indian banks often charge ₹200 to ₹500 plus GST per paper FIRC.`,
    },
    {
      id: 'indian-banking-settlement-timing',
      title: 'Settlement Infrastructure: IMPS, NEFT, and RTGS Clearance',
      body: `Indian banking infrastructure is among the fastest real-time payment ecosystems globally:

- **Immediate Payment Service (IMPS)**: Wise routes transfers under ₹5,00,000 via IMPS, clearing into accounts at HDFC, ICICI, SBI, Axis, or Kotak Mahindra Bank within minutes, even on weekends and bank holidays.
- **NEFT & RTGS Clearance**: Higher-value institutional transfers (above ₹5,00,000) route via National Electronic Funds Transfer (NEFT) or Real Time Gross Settlement (RTGS), typically settling within 2 to 4 business hours.
- **Avoiding SWIFT Intermediary Deductions**: Traditional international wires from US banks route through correspondent banks (e.g. JPMorgan Chase or Standard Chartered), deducting $20 to $35 intermediary wire fees before reaching India. Wise uses local Indian banking rails, guaranteeing zero incoming deductions.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $5,000 USD to INR Transfer (Illustrative FX 83.50)',
    scenario:
      'A US startup pays an Indian full-stack software development agency $5,000.00 USD for backend architecture, comparing Wise direct transfer versus receiving international payment on Stripe.',
    inputs: {
      transferAmountUSD: '$5,000.00',
      illustrativeExchangeRate: '1 USD = 83.50 INR (Illustrative Benchmark)',
      wiseVariableRate: '0.65%',
      wiseFixedFee: '$1.20',
      stripeCombinedRate: '6.40% + $0.30',
    },
    steps: [
      {
        label: 'Wise Variable Percentage Fee',
        formula: '$5,000.00 × 0.65%',
        amount: '$32.50',
        note: '0.65% conversion fee',
      },
      {
        label: 'Wise Fixed Surcharge',
        formula: 'Flat ACH/regulatory clearing cost',
        amount: '$1.20',
        note: 'Covers ACH inbound and FIRA generation',
      },
      {
        label: 'Total Wise Deduction',
        formula: '$32.50 + $1.20',
        amount: '$33.70',
        note: 'Effective fee is 0.674%',
      },
      {
        label: 'Wise Net USD Converted',
        formula: '$5,000.00 - $33.70',
        amount: '$4,966.30',
        note: 'Converted at interbank mid-market rate',
      },
      {
        label: 'Rupees Delivered via IMPS/NEFT',
        formula: '$4,966.30 × 83.50',
        amount: '₹4,14,686.05',
        note: 'Arrives in Indian bank account with digital FIRA',
      },
      {
        label: 'Stripe Total Fee Comparison',
        formula: '($5,000.00 × 6.40%) + $0.30',
        amount: '$320.30',
        note: '2.9% base + 1.5% intl + 2.0% currency conversion',
      },
      {
        label: 'Stripe Rupee Equivalent Delivered',
        formula: '($5,000.00 - $320.30) × 83.50',
        amount: '₹3,90,754.95',
        note: 'Stripe delivers ₹23,931.10 less to recipient',
      },
    ],
    takeaway:
      'On a $5,000 USD to INR payment, routing via Wise saves $286.60 (approx. ₹23,931.10) compared to international card processing on Stripe, while automatically generating a compliant digital FIRA.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Delivering Exactly ₹5,00,000 INR to an Indian Developer',
    scenario:
      'A US client needs to ensure their senior Indian contract engineer receives an exact ₹5,00,000.00 INR into their ICICI Bank account at an illustrative rate of 83.50 INR/USD.',
    inputs: {
      targetRupeePayout: '₹5,00,000.00',
      illustrativeExchangeRate: '83.50 INR per USD',
      wiseVariableRate: '0.65%',
      wiseFixedFee: '$1.20',
    },
    steps: [
      {
        label: 'Required USD Principal After Fees',
        formula: '₹5,00,000.00 ÷ 83.50',
        amount: '$5,988.02',
        note: 'Net dollar value needed for conversion',
      },
      {
        label: 'Gross USD Deposit Required',
        formula: '($5,988.02 + $1.20) ÷ (1 - 0.0065)',
        amount: '$6,028.40',
        note: 'Wise reverse calculation formula',
      },
      {
        label: 'Wise Fee Assessed',
        formula: '($6,028.40 × 0.65%) + $1.20',
        amount: '$40.38',
        note: 'Transparent total cost',
      },
      {
        label: 'Net USD Converted',
        formula: '$6,028.40 - $40.38',
        amount: '$5,988.02',
        note: 'Converts precisely to ₹5,00,000.00 INR',
      },
    ],
    takeaway:
      'To deliver an exact ₹5,00,000.00 INR payout via Wise, the client initiates $6,028.40 USD. In contrast, fulfilling this invoice via Stripe card processing would require initiating $6,400.98 due to compounding cross-border fees.',
  },
  faqs: [
    {
      question: 'What is the Wise fee for sending USD to INR in 2026?',
      answer:
        'Wise charges a 0.65% variable fee plus a flat $1.20 fixed transfer surcharge for converting USD to INR via ACH direct debit. Wise uses the mid-market exchange rate without hidden foreign exchange margins.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'What RBI Purpose Code should I use for software development services?',
      answer:
        'For software engineering, programming, app development, and technical consulting, use RBI Purpose Code P0802 (Software Implementation Services). Using the correct code ensures fast clearance and hassle-free FIRA issuance.',
      sourceUrl: 'https://www.rbi.org.in/',
    },
    {
      question: 'Does Wise provide a FIRA certificate for inward remittances to India?',
      answer:
        'Yes. Wise automatically generates a digital Foreign Inward Remittance Advice (FIRA) for business and freelancing transfers to India. You can download this document directly from your Wise account within 1-2 business days for GST and income tax compliance.',
      sourceUrl: 'https://wise.com/help/articles/2932688/firc-advice-for-inr-transfers',
    },
    {
      question: 'How fast do USD to INR transfers settle in Indian bank accounts?',
      answer:
        'Most transfers sent to verified Indian bank accounts settle within minutes to a few hours via the Immediate Payment Service (IMPS) or National Electronic Funds Transfer (NEFT), 24 hours a day, 7 days a week.',
      sourceUrl: 'https://wise.com/pricing',
    },
    {
      question: 'Can Indian freelancers receive payments in USD and hold them in a Wise account?',
      answer:
        'Under RBI regulations, Indian residents cannot hold foreign currency balances indefinitely in personal multi-currency digital wallets. Funds sent to an Indian resident’s Wise account are automatically converted and auto-withdrawn to their linked Indian bank account within statutory time limits.',
      sourceUrl: 'https://www.rbi.org.in/',
    },
  ],
};

export default usdToInrContent;

