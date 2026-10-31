import type { PageContent } from '../types.ts';

export const shopifyStandardContent: PageContent = {
  slug: 'shopify-standard',
  family: 'gateways',
  title: 'Shopify Payments Fee Calculator (2026 Rates & Plan Tiers) | FeeKit',
  metaDescription:
    'Calculate exact Shopify Payments credit card fees, third-party gateway penalty fees (0.5% to 2.0%), online vs in-person POS rates across Basic, Shopify, and Advanced plan tiers.',
  h1: 'Shopify Payments Fee Calculator & Merchant Processing Schedule',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Shopify Official Pricing & Merchant Terms',
    url: 'https://www.shopify.com/pricing',
    citation: 'Shopify Subscription & Processing Terms of Service, Shopify Payments Schedule.',
  },
  overview:
    'Shopify operates an integrated merchant ecosystem with tiered transaction pricing dictated by the merchant’s monthly subscription plan. Online credit card processing rates range from 2.9% + $0.30 per transaction on the Basic plan down to 2.5% + $0.30 on Advanced plans, while in-person POS transactions range from 2.6% + $0.10 to 2.4% + $0.10. Crucially, Shopify assesses a mandatory third-party payment penalty fee—ranging from 0.5% to 2.0% of gross transaction volume—if a store uses an external payment gateway (such as standalone Stripe, Authorize.Net, or custom merchant processors) instead of Shopify Payments.',
  sections: [
    {
      id: 'shopify-tier-pricing-breakdown',
      title: 'Shopify Payments Official Tiered Processing Schedule',
      body: `Shopify ties card processing fees directly to the merchant's monthly plan subscription:

- **Shopify Basic ($39/month billed monthly)**:
  - Online Domestic Credit Cards: **2.90% + $0.30** per transaction.
  - In-Person POS Transactions: **2.60% + $0.10** per tap or chip insert.
  - External Third-Party Gateway Surcharge: **2.00%** on every sale not routed through Shopify Payments.
- **Shopify Regular ($105/month billed monthly)**:
  - Online Domestic Credit Cards: **2.60% + $0.30** (a 30 basis point reduction).
  - In-Person POS Transactions: **2.50% + $0.10**.
  - External Third-Party Gateway Surcharge: **1.00%**.
- **Shopify Advanced ($399/month billed monthly)**:
  - Online Domestic Credit Cards: **2.50% + $0.30** (a 40 basis point reduction from Basic).
  - In-Person POS Transactions: **2.40% + $0.10**.
  - External Third-Party Gateway Surcharge: **0.50%**.
- **Shopify Plus (Enterprise starting at $2,300/month)**:
  - Online Domestic Credit Cards: Custom negotiated rates (typically **2.15% + $0.30** or interchange-plus).
  - External Gateway Surcharge: **0.20%** or waived.`,
    },
    {
      id: 'external-gateway-penalty-rule',
      title: 'The Third-Party Payment Gateway Penalty Surcharge',
      body: `One of the most consequential financial aspects of the Shopify platform is the external payment gateway penalty:

1. **How the Penalty Works**: If you disable Shopify Payments and connect an external gateway (such as your own merchant processor via Authorize.Net or standalone Stripe), Shopify levies an additional percentage surcharge on gross order value:
   - Basic Plan: **+2.0%**
   - Shopify Plan: **+1.0%**
   - Advanced Plan: **+0.5%**
2. **Double-Dipping on Processing Costs**: If you use an external processor charging 2.9% + $0.30 while on Shopify Basic, your true processing cost is **4.9% + $0.30** (2.9% to your processor + 2.0% penalty to Shopify).
3. **Exemption for PayPal Express**: In countries where Shopify Payments is supported, enabling PayPal Express Checkout alongside Shopify Payments does not trigger the third-party fee on PayPal orders, provided Shopify Payments is active as the primary gateway.`,
    },
    {
      id: 'plan-upgrade-break-even-math',
      title: 'Subscription Upgrade Break-Even Analysis: When to Move Up',
      body: `Because higher Shopify plans offer lower payment processing rates, there are exact mathematical monthly gross volume thresholds where upgrading your plan saves money:

- **Upgrading from Basic ($39/mo) to Shopify ($105/mo)**:
  - Fixed cost difference: **$66.00/month**.
  - Rate reduction on online cards: 2.9% minus 2.6% = **0.30% savings** (30 basis points).
  - **Break-Even Monthly GMV**: $66.00 ÷ 0.0030 = **$22,000.00**.
  - If your store processes more than $22,000/month in online sales, upgrading to the $105/mo plan is mathematically self-funding and generates net savings on every dollar processed thereafter.
- **Upgrading from Shopify ($105/mo) to Advanced ($399/mo)**:
  - Fixed cost difference: **$294.00/month**.
  - Rate reduction on online cards: 2.6% minus 2.5% = **0.10% savings** (10 basis points).
  - **Break-Even Monthly GMV**: $294.00 ÷ 0.0010 = **$294,000.00**.
  - If your store processes more than $294,000/month in card volume, the Advanced plan pays for itself through fee reductions alone, before factoring in duty calculation and advanced reporting features.`,
    },
    {
      id: 'refund-dispute-policies',
      title: 'Refund Retention, Chargeback Fees, and Settlement Schedules',
      body: `Operational rules enforced on Shopify Payments:

- **Refund Fee Retention**: When you issue a refund to a customer, Shopify Payments does not return the original processing fee. On a $100 refund, the merchant absorbs the full $3.20 fee as an operational loss.
- **Dispute Administration Fee**: If a cardholder files a formal chargeback, Shopify deducts a **$15.00 dispute administration fee** ($20 in Canada). If the merchant wins the representment case, the $15 fee is refunded.
- **Payout Timing**: In the US, payouts typically transfer within **2 to 3 business days** on a rolling schedule. In the UK and Australia, payout settlement takes 3 business days.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $100 E-Commerce Sale on Shopify Basic vs Shopify Regular Plan',
    scenario:
      'An online apparel brand sells an $85.00 jacket plus $15.00 shipping ($100.00 gross total), comparing transaction net proceeds between the Basic plan (2.9% + $0.30) and the Regular plan (2.6% + $0.30).',
    inputs: {
      grossTransactionAmount: '$100.00',
      basicProcessingRate: '2.90% + $0.30',
      regularProcessingRate: '2.60% + $0.30',
    },
    steps: [
      {
        label: 'Basic Plan Variable Processing Fee',
        formula: '$100.00 × 2.90%',
        amount: '$2.90',
        note: 'Percentage fee on gross order',
      },
      {
        label: 'Basic Plan Fixed Fee',
        formula: 'Flat transaction surcharge',
        amount: '$0.30',
        note: 'Fixed per-transaction cost',
      },
      {
        label: 'Total Fee on Shopify Basic',
        formula: '$2.90 + $0.30',
        amount: '$3.20',
        note: 'Effective fee rate is 3.20%',
      },
      {
        label: 'Net Payout on Shopify Basic',
        formula: '$100.00 - $3.20',
        amount: '$96.80',
        note: 'Deposited to merchant account',
      },
      {
        label: 'Regular Plan Total Fee',
        formula: '($100.00 × 2.60%) + $0.30',
        amount: '$2.90',
        note: 'Saves $0.30 per $100 transaction',
      },
      {
        label: 'Net Payout on Shopify Regular Plan',
        formula: '$100.00 - $2.90',
        amount: '$97.10',
        note: 'Higher net margin on identical sale',
      },
    ],
    takeaway:
      'The Regular plan saves $0.30 per $100 order. At 220 orders per month ($22,000 GMV), the fee savings total $66.00/month, perfectly offsetting the higher plan subscription cost.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Pricing a Product to Clear an Exact $100.00 Net on Shopify Basic',
    scenario:
      'A merchant wants to ensure they receive an exact $100.00 net payout after Shopify Payments fees on the Basic plan (2.9% + $0.30). What price must they charge at checkout?',
    inputs: {
      targetNetPayout: '$100.00',
      shopifyBasicPercentage: '2.90%',
      shopifyFixedFee: '$0.30',
    },
    steps: [
      {
        label: 'Required Price (Statutory Gross-Up Formula)',
        formula: '($100.00 + $0.30) ÷ (1 - 0.029)',
        amount: '$103.30',
        note: 'Reverse calculation formula',
      },
      {
        label: 'Shopify Variable Fee on Gross Charge',
        formula: '$103.30 × 2.90%',
        amount: '$3.00',
        note: 'Calculated on gross price',
      },
      {
        label: 'Shopify Fixed Fee',
        formula: 'Flat fixed fee',
        amount: '$0.30',
        note: 'Standard fixed charge',
      },
      {
        label: 'Total Fee Assessed by Shopify',
        formula: '$3.00 + $0.30',
        amount: '$3.30',
        note: 'Total transaction deduction',
      },
      {
        label: 'Net Merchant Payout',
        formula: '$103.30 - $3.30',
        amount: '$100.00',
        note: 'Exactly clears target net revenue',
      },
    ],
    takeaway:
      'Charging $103.30 yields exactly $100.00 net. Simply adding 2.9% ($102.90) would leave the merchant short at $99.62.',
  },
  faqs: [
    {
      question: 'What are the current Shopify Payments processing fees in 2026?',
      answer:
        'In the US, Shopify Payments charges 2.9% + $0.30 on the Basic plan, 2.6% + $0.30 on the Shopify plan, and 2.5% + $0.30 on the Advanced plan for online credit card transactions.',
      sourceUrl: 'https://www.shopify.com/pricing',
    },
    {
      question: 'What is Shopify’s third-party transaction fee?',
      answer:
        'If you do not use Shopify Payments and instead process payments through an external provider (like Stripe or Authorize.Net), Shopify charges an additional 2.0% on Basic, 1.0% on Shopify, and 0.5% on Advanced on all sales.',
      sourceUrl: 'https://www.shopify.com/pricing',
    },
    {
      question: 'At what monthly sales volume should I upgrade from Shopify Basic to Shopify Regular?',
      answer:
        'The mathematical break-even point is exactly $22,000 per month in online sales. Because the rate drops by 0.30%, the fee savings on $22,000 equal $66.00, perfectly covering the $66/month plan price difference.',
      sourceUrl: 'https://www.shopify.com/pricing',
    },
    {
      question: 'Does Shopify return processing fees when I issue a refund?',
      answer:
        'No. When you refund a transaction, Shopify Payments does not return the credit card processing fee. The merchant absorbs the processing fee as a non-refundable loss.',
      sourceUrl: 'https://help.shopify.com/en/manual/payments/shopify-payments/faq',
    },
    {
      question: 'Are in-person POS transactions cheaper on Shopify than online sales?',
      answer:
        'Yes. In-person card-present transactions using Shopify POS card readers cost 2.6% + $0.10 on Basic, 2.5% + $0.10 on Regular, and 2.4% + $0.10 on Advanced, reflecting lower card-present fraud risks.',
      sourceUrl: 'https://www.shopify.com/pricing',
    },
  ],
};

export default shopifyStandardContent;

