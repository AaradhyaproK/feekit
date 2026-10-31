import type { PageContent } from '../types.ts';

export const authorizeNetStandardMerchantContent: PageContent = {
  slug: 'authorize-net-standard-merchant',
  family: 'gateways',
  title: 'Authorize.Net Fee Calculator ($25/mo + 2.9% + 30¢) | FeeKit',
  metaDescription:
    'Calculate exact Authorize.Net merchant processing fees: $25 monthly gateway fee, 2.9% + $0.30 All-in-One plan vs Gateway-Only (10¢/tx + 10¢ batch), eCheck (0.80%), and chargeback costs.',
  h1: 'Authorize.Net Fee Calculator & Merchant Account Pricing Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Authorize.Net Official Pricing & Payment Gateway Fees',
    url: 'https://www.authorize.net/pricing.html',
    citation: 'Authorize.Net (A Visa Solution) US Merchant Pricing Schedule & eCheck Guidelines.',
  },
  overview:
    'Authorize.Net (a Visa solution) is one of the foundational payment gateways in digital commerce, securing over $1 billion in daily volume. Unlike consumer-facing aggregators such as Square and PayPal, Authorize.Net operates under two enterprise models: the All-in-One Plan (providing both the gateway and merchant processing account for $25/month + 2.9% + $0.30 per transaction) and the Payment Gateway Only Plan (for businesses that hold their own direct merchant processing account through an acquiring bank, charging $25/month + $0.10 per transaction + $0.10 daily batch fee).',
  sections: [
    {
      id: 'all-in-one-vs-gateway-only',
      title: 'Authorize.Net Pricing Plans: All-in-One vs Gateway Only',
      body: `Authorize.Net separates gateway routing from merchant underwriting:

- **All-in-One Plan (Payment Gateway + Merchant Account)**:
  - Monthly Gateway Access Fee: **$25.00 / month**.
  - Per-Transaction Processing Fee: **2.9% + $0.30** per transaction.
  - Setup Fee: **$0.00**.
  - Best for: Emerging e-commerce businesses needing a reliable Visa-backed merchant account without underwriting separate bank acquiring contracts.
- **Payment Gateway Only Plan (Bring Your Own Merchant Account)**:
  - Monthly Gateway Access Fee: **$25.00 / month**.
  - Per-Transaction Routing Fee: **$0.10** per transaction.
  - Daily Batch Fee: **$0.10** per day when transactions are settled.
  - Best for: High-volume enterprise businesses ($50k+ monthly) that negotiate custom interchange-plus rates (e.g., Interchange + 0.20%) with acquiring banks like Chase Paymentech, Fiserv/First Data, or Elavon.
- **eCheck Processing (Direct ACH)**:
  - **0.80%** per transaction (minimum $0.10 fee).
  - Setup Fee: **$0.00**; Monthly Fee: **$0.00** (when added to an active gateway account).
- **Dispute / Chargeback Assessment**: **$25.00** per disputed transaction.`,
    },
    {
      id: 'gateway-only-breakeven',
      title: 'When Does the "Gateway Only" Plan Save Money? (The Interchange-Plus Advantage)',
      body: `On Authorize.Net's All-in-One Plan, processing $100,000 across 1,000 transactions costs $2,900 (2.9%) + $300 (30¢ × 1,000) + $25 monthly = **$3,225.00 total fees (3.225% effective rate)**.

However, an established business using the Gateway Only plan with an Interchange-Plus contract through an acquiring bank (averaging 1.80% wholesale interchange + 0.25% processor markup + 10¢) experiences dramatic savings:
- Acquiring Card Processing: $100,000 × 2.05% + $100 = $2,150.00.
- Authorize.Net Gateway Fee: 1,000 transactions × $0.10 = $100.00.
- Authorize.Net Monthly + Daily Batch: $25 + (30 days × $0.10) = $28.00.
- **Total Combined Monthly Fees**: **$2,278.00**.
- **Net Monthly Savings**: **$947.00 / month ($11,364 / year)** compared to the All-in-One plan.

Any merchant processing over **$20,000 to $30,000 monthly** should migrate from aggregator pricing (All-in-One / Stripe) to Authorize.Net Gateway-Only with dedicated interchange-plus underwriting.`,
    },
    {
      id: 'security-and-fraud-suite',
      title: 'Advanced Fraud Detection Suite (AFDS) & Customer Profiles (CIM)',
      body: `Authorize.Net includes enterprise security tools natively at zero additional charge:

1. **Advanced Fraud Detection Suite (AFDS)**: Includes 13 configurable fraud filters (IP velocity inspection, suspicious transaction filters, shipping-billing mismatch thresholds, and geofencing limits) to prevent card-testing attacks.
2. **Customer Information Manager (CIM)**: Secure tokenized vaulting of customer payment methods for recurring billing and one-click repeat checkouts, drastically reducing PCI DSS compliance liability.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Monthly Processing Comparison ($30,000 Volume / 300 Orders)',
    scenario:
      'A specialty machinery e-commerce store processes $30,000 in monthly sales across 300 orders ($100 average ticket) comparing Authorize.Net All-in-One vs Stripe.',
    inputs: {
      monthlyVolume: '$30,000.00',
      totalOrders: 300,
      authNetRate: '$25/mo + 2.9% + $0.30',
      stripeRate: '$0/mo + 2.9% + $0.30',
    },
    steps: [
      {
        label: 'Compute Authorize.Net All-in-One Monthly Cost',
        formula: '$25.00 + ($30,000 × 0.029) + (300 × $0.30)',
        amount: '$985.00 / month',
        note: '$25 subscription + $870 variable fee + $90 fixed transaction fees.',
      },
      {
        label: 'Compute Stripe Standard Monthly Cost',
        formula: '($30,000 × 0.029) + (300 × $0.30)',
        amount: '$960.00 / month',
        note: '$870 variable fee + $90 fixed fees ($0 monthly fee).',
      },
      {
        label: 'Cost Differential Analysis',
        formula: '$985.00 − $960.00',
        amount: '$25.00 difference',
        note: 'Authorize.Net costs exactly $25/mo more due to the monthly gateway fee.',
      },
    ],
    takeaway:
      'At standard 2.9% + 30¢ rates, Stripe is $25/mo cheaper due to having no monthly fee. However, if the business moves Authorize.Net to a Gateway-Only interchange-plus account (2.1% total), Authorize.Net drops to ~$750/mo, saving $210/month ($2,520/year) over Stripe.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Invoicing to Net an Exact $1,000.00 on All-in-One Plan',
    scenario:
      'A merchant needs to receive exactly $1,000.00 net on a specific transaction via Authorize.Net All-in-One (2.9% + $0.30).',
    inputs: {
      targetNetPayout: '$1,000.00',
      percentageRate: '2.9%',
      fixedFee: '$0.30',
    },
    steps: [
      {
        label: 'Add Fixed Fee to Target Net',
        formula: '$1,000.00 + $0.30',
        amount: '$1,000.30',
        note: 'Numerator component.',
      },
      {
        label: 'Compute Net Divisor',
        formula: '1.0 − 0.029',
        amount: '0.971',
        note: 'Rate complement.',
      },
      {
        label: 'Calculate Required Gross Charge',
        formula: '$1,000.30 ÷ 0.971',
        amount: '$1,030.18',
        note: '$1,000.30 ÷ 0.971 = $1,030.175, rounded to $1,030.18.',
      },
      {
        label: 'Verification Check (Forward Fee)',
        formula: '($1,030.18 × 0.029) + $0.30',
        amount: '$30.18 Fee',
        note: '$29.875 percentage fee + $0.30 fixed fee = $30.18.',
      },
      {
        label: 'Final Net Bank Deposit',
        formula: '$1,030.18 − $30.18',
        amount: '$1,000.00',
        note: 'Deposits exactly $1,000.00 into merchant checking account.',
      },
    ],
    takeaway:
      'Invoice the customer for $1,030.18 to net exactly $1,000.00. The transaction fee mirrors Stripe standard card processing, but the merchant also carries the baseline $25/mo account access fee.',
  },
  faqs: [
    {
      question: 'What is Authorize.Net’s monthly fee and processing rate?',
      answer:
        'Authorize.Net charges a $25.00 monthly gateway fee. For the All-in-One plan (gateway + merchant account), processing costs 2.9% + $0.30 per transaction. For the Gateway Only plan (bring your own merchant account), routing costs $0.10 per transaction plus a $0.10 daily batch fee.',
      sourceUrl: 'https://www.authorize.net/pricing.html',
    },
    {
      question: 'What is the difference between Authorize.Net All-in-One and Gateway Only?',
      answer:
        'All-in-One provides both the gateway software and the underlying merchant underwriting account from Visa. Gateway Only is designed for established businesses that already hold a merchant processing account with an acquiring bank and only need Authorize.Net to securely route transactions.',
      sourceUrl: 'https://www.authorize.net/pricing.html',
    },
    {
      question: 'How much does Authorize.Net charge for eCheck (ACH) processing?',
      answer:
        'Authorize.Net charges 0.80% per transaction for eCheck processing (minimum $0.10 fee). There is no setup fee and no additional monthly fee when added to an active gateway account.',
      sourceUrl: 'https://www.authorize.net/pricing.html',
    },
    {
      question: 'What is Authorize.Net’s chargeback dispute fee?',
      answer:
        'Authorize.Net assesses a $25.00 fee per chargeback dispute. This fee is non-refundable regardless of the dispute resolution outcome.',
      sourceUrl: 'https://www.authorize.net/pricing.html',
    },
    {
      question: 'Does Authorize.Net charge an annual contract fee or cancellation penalty?',
      answer:
        'No. Authorize.Net operates on a month-to-month service agreement with zero early termination penalties, zero annual account fees, and zero setup fees.',
      sourceUrl: 'https://www.authorize.net/pricing.html',
    },
  ],
};

export default authorizeNetStandardMerchantContent;

