import type { PageContent } from '../types.ts';

export const stripeUsaContent: PageContent = {
  slug: 'stripe-usa',
  family: 'gateways',
  title: 'Stripe Fee Calculator USA (2.9% + $0.30) | FeeKit',
  metaDescription:
    'Calculate exact Stripe processing fees, net payouts, and reverse charges for US domestic card payments (2.9% + $0.30), international surcharges (+1.5%), and ACH direct debit (0.8% capped at $5).',
  h1: 'Stripe Fee Calculator USA & Official Merchant Pricing Schedule',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Stripe Official Pricing (United States)',
    url: 'https://stripe.com/pricing',
    citation: 'Stripe Official US Pricing Schedule, Stripe Terminal Pricing, and Stripe Billing Terms of Service.',
  },
  overview:
    'Stripe assesses a standard published fee of 2.9% + $0.30 per successful domestic card transaction in the United States. While straightforward on standard mid-tier orders, auxiliary charges—such as the 1.5% international card surcharge, 1.0% currency conversion markup, $15.00 dispute assessments, and the non-refundable refund fee policy—can significantly alter effective margins. Furthermore, on sub-$10 transactions, the $0.30 fixed fee creates an aggressive effective fee penalty, eroding small-ticket e-commerce profit margins.',
  sections: [
    {
      id: 'official-fee-schedule-breakdown',
      title: 'Stripe US Comprehensive Official Fee Schedule',
      body: `Stripe processes transactions through multiple distinct rails, each with statutory rate schedules published in official Stripe documentation:

- **Standard Domestic Credit & Debit Cards**: **2.9% + $0.30** per successful charge. Applies to Visa, Mastercard, American Express, Discover, and digital wallets (Apple Pay, Google Pay).
- **In-Person POS (Stripe Terminal)**: **2.7% + $0.05** per card-present transaction using BBPOS or Stripe Reader hardware.
- **Manually Entered Cards (Virtual Terminal / Keyed-In)**: **3.4% + $0.30** (an additional 0.50% risk surcharge over standard card processing).
- **International Card Surcharge**: **+1.50%** added to standard domestic card rates (totaling 4.40% + $0.30) when processing cards issued outside the United States.
- **Currency Conversion Markup (FX)**: **+1.00%** added if foreign currency exchange is required prior to settlement. A cross-border card requiring currency conversion incurs a combined rate of **5.40% + $0.30**.
- **ACH Direct Debit**: **0.80%**, strictly capped at a maximum of **$5.00** per transaction, with no fixed cent fee.
- **Instant Payouts**: **1.00%** of the payout balance (minimum $0.50 fee) to push cleared funds to an eligible debit card within 30 minutes, bypassing standard ACH settlement windows.`,
    },
    {
      id: 'disputes-refunds-payout-timing',
      title: 'Operational Rules: Dispute Fees, Refund Policy, and Settlement Timing',
      body: `Merchants must account for three non-negotiable operational policies enforced across all US Stripe accounts:

1. **Non-Refundable Processing Fees on Customer Refunds**: When a merchant issues a full or partial refund to a customer, Stripe **does not return the original processing fees**. If you sell a $100.00 item (paying $3.20 in Stripe fees to receive $96.80) and subsequently issue a $100.00 refund, Stripe deducts the full $100.00 from your account balance. The $3.20 processing fee is permanently retained by Stripe, leaving the merchant with an out-of-pocket net loss of $3.20.
2. **Dispute / Chargeback Fee ($15.00 Flat)**: If a cardholder disputes a transaction with their issuing bank, Stripe automatically assesses a **$15.00 chargeback fee** and freezes the disputed transaction amount. Even if you submit comprehensive evidence and the card issuer rules in your favor, Stripe does not refund the $15.00 dispute handling fee unless you subscribe to optional Stripe Chargeback Protection (0.4% per transaction).
3. **Payout Timing & Rolling Settlement**: Standard payouts operate on a **rolling 2-business-day schedule** in the US (Monday transactions deposit on Wednesday). New merchant accounts or businesses operating in higher-risk merchant categories may be placed on an initial 7-to-14-day hold to establish fraud and dispute baseline metrics.`,
    },
    {
      id: 'small-transaction-fixed-fee-effect',
      title: 'The Small-Transaction Fixed-Fee Penalty',
      body: `Because Stripe levies a fixed $0.30 surcharge regardless of ticket size, the effective percentage deducted from your revenue scales inversely with transaction value:

- **$5.00 Transaction**: Fee is $0.45 ($5.00 × 2.9% + $0.30). Effective fee rate is **8.90%**, with net payout of $4.55.
- **$10.00 Transaction**: Fee is $0.59 ($10.00 × 2.9% + $0.30). Effective fee rate is **5.90%**, with net payout of $9.41.
- **$50.00 Transaction**: Fee is $1.75 ($50.00 × 2.9% + $0.30). Effective fee rate drops to **3.50%**, with net payout of $48.25.
- **$100.00 Transaction**: Fee is $3.20 ($100.00 × 2.9% + $0.30). Effective fee rate is **3.20%**, with net payout of $96.80.
- **$1,000.00 Transaction**: Fee is $29.30 ($1,000.00 × 2.9% + $0.30). Effective fee rate approaches the pure 2.9% baseline at **2.93%**.

For digital creators and micro-transaction vendors selling products priced under $10.00, Stripe standard processing is inefficient compared to specialized micropayment structures or bundling multiple items into single checkout carts.`,
    },
    {
      id: 'alternative-comparison-square-ach',
      title: 'Competitive Benchmark: Stripe Card vs Square Online vs ACH Direct Debit',
      body: `Choosing the correct payment rail directly protects merchant net margins:

- **Stripe Card (2.9% + $0.30) vs Square Free Online (3.3% + $0.30)**: On a $100.00 transaction, Stripe costs $3.20 versus Square Free Online's $3.60. Stripe saves merchants **$0.40 per $100 processed** (a 40 basis point advantage), compounding to $4,000 in fee savings on every $1,000,000 in online sales. Square only matches Stripe's 2.9% rate if the merchant pays an additional $29/month subscription for Square Plus.
- **Stripe Card vs Stripe ACH Direct Debit (0.8% Capped at $5.00)**: For B2B invoices and high-ticket service transactions, ACH direct debit is dramatically cheaper:
  - On a **$500.00 invoice**: Card fee is **$14.80** vs ACH fee of **$4.00** (ACH saves $10.80).
  - On a **$2,500.00 invoice**: Card fee is **$72.80** vs ACH fee of **$5.00** (ACH saves $67.80, or 93% of the processing cost).
  - The break-even threshold where ACH reaches its maximum $5.00 cap is **$625.00** ($625 × 0.008 = $5.00). Any transaction above $625.00 should actively incentivize ACH settlement over credit card payment.`,
    },
    {
      id: 'reverse-calculation-pass-through',
      title: 'Reverse Calculation: How to Bill Clients to Keep 100% of Your Invoice',
      body: `When invoicing clients for professional deliverables, simply adding 2.9% to your subtotal will leave you short. Because Stripe assesses its 2.9% fee against the gross final charge (which includes your added fee), you must use the statutory reverse gross-up formula:

$$\\text{Gross Charge} = \\frac{\\text{Target Net Payout} + \\text{Fixed Fee}}{1 - \\text{Percentage Rate}}$$

To receive exactly **$1,000.00 net** in your bank account:
$$\\text{Gross Charge} = \\frac{1000 + 0.30}{1 - 0.029} = \\frac{1000.30}{0.971} = \\$1,030.18$$
When the client pays $1,030.18, Stripe deducts $1,030.18 × 2.9% ($29.88) + $0.30 = $30.18. Your net payout is exactly $1,000.00.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Multi-Ticket Size Fee Analysis ($10 vs $100 vs $1,000)',
    scenario:
      'Comparison of three domestic online credit card transactions processed via Stripe USA at the standard 2.9% + $0.30 rate, demonstrating the scale of fixed-fee drag.',
    inputs: {
      standardRate: '2.9%',
      fixedFee: '$0.30',
      domesticRail: 'Standard US Online Card',
    },
    steps: [
      {
        label: 'Ticket 1: $10.00 Micro-Transaction',
        formula: '($10.00 × 0.029) + $0.30',
        amount: '$0.59 Fee | $9.41 Net',
        note: 'Effective fee rate is 5.90% due to the 30¢ fixed surcharge.',
      },
      {
        label: 'Ticket 2: $100.00 Standard E-commerce Cart',
        formula: '($100.00 × 0.029) + $0.30',
        amount: '$3.20 Fee | $96.80 Net',
        note: 'Effective fee rate is 3.20%.',
      },
      {
        label: 'Ticket 3: $1,000.00 Professional Consulting Invoice',
        formula: '($1,000.00 × 0.029) + $0.30',
        amount: '$29.30 Fee | $970.70 Net',
        note: 'Effective fee rate is 2.93%, closely converging with base percentage.',
      },
    ],
    takeaway:
      'The fixed 30-cent fee inflates small-order processing costs to nearly double the advertised rate. For sales under $10, merchants should encourage multi-item bundling or route payments through specialized rails.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating a $500.00 Target Net Payout',
    scenario:
      'A contractor wants to receive exactly $500.00 deposited into their checking account after Stripe standard domestic card fees (2.9% + $0.30).',
    inputs: {
      targetNetPayout: '$500.00',
      percentageRate: '2.9%',
      fixedFee: '$0.30',
    },
    steps: [
      {
        label: 'Add Fixed Fee to Target Net',
        formula: '$500.00 + $0.30',
        amount: '$500.30',
        note: 'The fixed fee numerator component.',
      },
      {
        label: 'Compute Percentage Divisor',
        formula: '1.0 − 0.029',
        amount: '0.971',
        note: 'Rate complement representing the net percentage retained.',
      },
      {
        label: 'Calculate Required Gross Invoice',
        formula: '$500.30 ÷ 0.971',
        amount: '$515.24',
        note: '$500.30 ÷ 0.971 = $515.242, rounded up to $515.24.',
      },
      {
        label: 'Verification Check (Forward Fee on $515.24)',
        formula: '($515.24 × 0.029) + $0.30',
        amount: '$15.24 Fee',
        note: '$14.94 percentage fee + $0.30 fixed fee = $15.24.',
      },
      {
        label: 'Final Net Bank Deposit',
        formula: '$515.24 − $15.24',
        amount: '$500.00',
        note: 'Exactly matches the target payout with zero penny leakage.',
      },
    ],
    takeaway:
      'To pocket exactly $500.00, invoice the client for $515.24. If you had incorrectly added 2.9% directly ($500 × 1.029 = $514.50), Stripe would have deducted $15.22, leaving you with $499.28.',
  },
  faqs: [
    {
      question: 'What is Stripe’s standard processing fee in the United States?',
      answer:
        'Stripe charges 2.9% + $0.30 per successful card transaction for standard domestic credit and debit cards. In-person card transactions processed via Stripe Terminal hardware cost 2.7% + $0.05, while manually keyed-in cards cost 3.4% + $0.30.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'Does Stripe refund processing fees when a merchant issues a refund?',
      answer:
        'No. Under Stripe’s standard policy, original transaction processing fees are not returned when you issue a full or partial refund to a customer. The merchant absorbs the 2.9% + $0.30 fee as a complete out-of-pocket loss on refunded transactions.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'What are the extra fees for international cards on Stripe US?',
      answer:
        'Stripe assesses an additional 1.5% fee on cards issued outside the United States (raising standard processing to 4.4% + $0.30). If foreign currency conversion is also required, an additional 1.0% FX fee is charged, bringing total potential deductions to 5.4% + $0.30.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'How much does Stripe charge for ACH Direct Debit payments?',
      answer:
        'Stripe charges 0.80% for ACH direct debit transactions, strictly capped at a maximum fee of $5.00 per transaction. There is no fixed cent fee. Transactions over $625.00 always pay the flat $5.00 ceiling, making ACH vastly cheaper than credit cards for large B2B payments.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'How much does Stripe charge for chargebacks and customer disputes?',
      answer:
        'Stripe charges a $15.00 fee per dispute. This fee is assessed immediately when a cardholder files a chargeback with their bank and is non-refundable, even if the merchant successfully contests the dispute and wins the case.',
      sourceUrl: 'https://stripe.com/pricing',
    },
    {
      question: 'How fast does Stripe deposit funds into a US bank account?',
      answer:
        'Standard US payouts operate on a rolling 2-business-day schedule at no additional cost. Eligible merchants can also utilize Instant Payouts for a 1.0% fee (minimum $0.50) to transfer cleared funds to a debit card within 30 minutes.',
      sourceUrl: 'https://stripe.com/pricing',
    },
  ],
};

export default stripeUsaContent;

