import type { PageContent } from '../types.ts';

export const paypalUsaContent: PageContent = {
  slug: 'paypal-usa',
  family: 'gateways',
  title: 'PayPal Fee Calculator USA (3.49% + $0.49 vs 2.99%) | FeeKit',
  metaDescription:
    'Calculate exact PayPal commercial processing fees in the US: 3.49% + $0.49 for PayPal Checkout/Invoicing vs 2.99% + $0.49 for Standard Cards, cross-border surcharges (+1.5%), and dispute rules.',
  h1: 'PayPal Fee Calculator USA & Commercial Pricing Schedule',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'PayPal Official Merchant Fees (United States)',
    url: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    citation: 'PayPal US Merchant User Agreement & Commercial Transaction Fee Schedule.',
  },
  overview:
    'PayPal enforces a two-tier fee schedule for US commercial transactions. When customers pay via the PayPal button, PayPal Checkout, Venmo in checkout, or digital invoices, PayPal assesses 3.49% + $0.49 per transaction. Conversely, when customers pay via PayPal Standard Credit and Debit Card processing (unbranded checkout fields), the rate drops to 2.99% + $0.49. Merging these two transaction flows often causes confusion for merchants trying to budget effective processing deductions.',
  sections: [
    {
      id: 'paypal-commercial-fee-breakdown',
      title: 'PayPal US Commercial Processing Fee Rates',
      body: `PayPal categorizes transaction rates by payment initiation channel:

- **PayPal Checkout, Guest Checkout & Invoicing**: **3.49% + $0.49** per successful charge. Applies to PayPal wallet balances, linked bank debits, PayPal Credit, Pay in 4, and branded digital invoices.
- **Standard Credit & Debit Card Payments (Unbranded)**: **2.99% + $0.49** per transaction when using PayPal's advanced credit/debit card fields directly on your e-commerce website without customer wallet redirection.
- **In-Person QR Code Payments (Over $10.00)**: **1.90% + $0.10** per transaction when customers scan your seller QR code using their PayPal or Venmo app.
- **In-Person QR Code Payments ($10.00 and Under)**: **2.40% + $0.05** per transaction.
- **International / Cross-Border Surcharge**: **+1.50%** added to standard rates (totaling 4.99% + $0.49 on PayPal Checkout) for buyers paying with non-US accounts.
- **Currency Conversion Markup (FX)**: **3.00% to 4.00%** currency spread when funds are converted into US Dollars.
- **Dispute / Chargeback Assessment**: **$15.00** standard dispute fee (or $30.00 for merchants placed in high dispute monitoring volume).`,
    },
    {
      id: 'paypal-checkout-vs-stripe',
      title: 'Cost Face-Off: PayPal Checkout (3.49% + 49¢) vs Stripe (2.9% + 30¢)',
      body: `Comparing PayPal's branded checkout to Stripe reveals a significant fee premium:

- On a **$50.00 purchase**:
  - PayPal Checkout: $50 × 3.49% + $0.49 = **$2.24 fee** (net payout: $47.76; effective rate: 4.47%).
  - Stripe Standard Card: $50 × 2.9% + $0.30 = **$1.75 fee** (net payout: $48.25; effective rate: 3.50%).
  - Difference: PayPal costs **$0.49 more (28% higher fee)** on a $50 cart.
- On a **$100.00 purchase**:
  - PayPal Checkout: $100 × 3.49% + $0.49 = **$3.98 fee** (net payout: $96.02).
  - Stripe Standard Card: $100 × 2.9% + $0.30 = **$3.20 fee** (net payout: $96.80).
  - Difference: PayPal costs **$0.78 more per $100**, compounding to $7,800 in extra fees per $1,000,000 processed.

Despite higher transaction costs, offering PayPal Checkout is often justified by higher mobile conversion rates, as hundreds of millions of consumers prefer paying with stored PayPal credentials over typing credit card numbers.`,
    },
    {
      id: 'operational-policies-refunds',
      title: 'PayPal Operational Rules: Non-Refundable Fees and Dispute Thresholds',
      body: `Merchants processing on PayPal must navigate strict operational policies:

1. **Fee Retention on Customer Refunds**: In accordance with PayPal merchant terms, when a full or partial refund is granted to a customer, **PayPal does not return the fixed or variable processing fee**. If you issue a full $100 refund, PayPal deducts the entire $100 from your balance while retaining the initial $3.98 fee.
2. **Dispute Resolution & Seller Protection**: Qualifying transactions that ship physical goods with online delivery tracking are covered by PayPal Seller Protection against unauthorized payment claims. However, if a buyer files a dispute outside Seller Protection, PayPal charges a **$15.00 dispute fee** ($30.00 in high-volume dispute tiers).`,
    },
    {
      id: 'reverse-calculation-paypal',
      title: 'Reverse Calculation: How to Bill on PayPal to Pocket 100% Net',
      body: `Because PayPal levies 3.49% + $0.49 on the gross transaction total, use the statutory reverse formula:

$$\\text{Gross Charge} = \\frac{\\text{Target Net Payout} + \\text{Fixed Fee (0.49)}}{1 - \\text{Percentage Rate (0.0349)}}$$

To receive exactly **$1,000.00 net** on PayPal Checkout:
$$\\text{Gross Charge} = \\frac{1000 + 0.49}{1 - 0.0349} = \\frac{1000.49}{0.9651} = \\$1,036.67$$
When the customer pays $1,036.67, PayPal deducts $1,036.67 × 3.49% ($36.18) + $0.49 = $36.67. Your net deposit is exactly $1,000.00.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Multi-Ticket Fee Drag on PayPal Checkout ($10 vs $100 vs $500)',
    scenario:
      'Analysis of three e-commerce transactions processed via PayPal Checkout (3.49% + $0.49), showing fixed-fee scaling.',
    inputs: {
      standardRate: '3.49%',
      fixedFee: '$0.49',
      initiationType: 'PayPal Checkout / Invoicing',
    },
    steps: [
      {
        label: 'Ticket 1: $10.00 Digital Purchase',
        formula: '($10.00 × 0.0349) + $0.49',
        amount: '$0.84 Fee | $9.16 Net',
        note: 'Effective fee rate is 8.39% due to the 49¢ fixed surcharge.',
      },
      {
        label: 'Ticket 2: $100.00 Consumer Order',
        formula: '($100.00 × 0.0349) + $0.49',
        amount: '$3.98 Fee | $96.02 Net',
        note: 'Effective fee rate is 3.98%.',
      },
      {
        label: 'Ticket 3: $500.00 Professional Service Invoice',
        formula: '($500.00 × 0.0349) + $0.49',
        amount: '$17.94 Fee | $482.06 Net',
        note: 'Effective fee rate drops to 3.59%.',
      },
    ],
    takeaway:
      'The 49¢ fixed fee makes sub-$10 PayPal transactions costly (over 8.3% effective fee). For micro-transactions, merchants should enroll in PayPal Micropayments (4.99% + $0.09).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating a $250.00 Net Payout',
    scenario:
      'A freelancer wants to net exactly $250.00 after PayPal Invoicing deductions (3.49% + $0.49).',
    inputs: {
      targetNetPayout: '$250.00',
      percentageRate: '3.49%',
      fixedFee: '$0.49',
    },
    steps: [
      {
        label: 'Add Fixed Fee to Net Target',
        formula: '$250.00 + $0.49',
        amount: '$250.49',
        note: 'Numerator calculation.',
      },
      {
        label: 'Compute Net Complement Divisor',
        formula: '1.0 − 0.0349',
        amount: '0.9651',
        note: 'Percentage retained after 3.49% fee.',
      },
      {
        label: 'Calculate Required Gross Invoice',
        formula: '$250.49 ÷ 0.9651',
        amount: '$259.55',
        note: '$250.49 ÷ 0.9651 = $259.548, rounded up to $259.55.',
      },
      {
        label: 'Verification Check (Forward Deduction)',
        formula: '($259.55 × 0.0349) + $0.49',
        amount: '$9.55 Fee',
        note: '$9.058 percentage fee + $0.49 fixed fee = $9.55.',
      },
      {
        label: 'Final Net Account Deposit',
        formula: '$259.55 − $9.55',
        amount: '$250.00',
        note: 'Deposits exactly $250.00 into PayPal balance.',
      },
    ],
    takeaway:
      'Invoice the client for $259.55 to net exactly $250.00. Simply adding 3.49% ($250 × 1.0349 = $258.73) leaves an 82¢ deficit.',
  },
  faqs: [
    {
      question: 'What is PayPal’s standard commercial transaction fee in the US?',
      answer:
        'PayPal charges 3.49% + $0.49 per transaction for branded PayPal Checkout, guest checkout, and digital invoices. For unbranded standard credit and debit card payments on your website, the rate is 2.99% + $0.49.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Why are PayPal Checkout fees higher than standard card processing?',
      answer:
        'PayPal Checkout (3.49% + $0.49) includes buyer wallet authentication, access to PayPal Credit and Pay in 4 installment financing, and Seller Protection coverage, whereas standard unbranded card processing (2.99% + $0.49) operates as traditional gateway interchange.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Does PayPal refund transaction fees when issuing a customer refund?',
      answer:
        'No. PayPal permanently retains original processing fees when you issue a full or partial refund. The merchant absorbs the 3.49% + $0.49 fee as an out-of-pocket loss.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'How much does PayPal charge for in-person QR code payments?',
      answer:
        'In-person QR code transactions over $10.00 cost 1.90% + $0.10. QR code transactions $10.00 and under cost 2.40% + $0.05.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'What are the cross-border international fees on PayPal US?',
      answer:
        'PayPal adds a 1.50% cross-border surcharge to all payments originating from non-US accounts. If currency exchange is required, PayPal also applies a 3.0% to 4.0% foreign exchange spread.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
  ],
};

export default paypalUsaContent;

