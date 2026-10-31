import type { PageContent } from '../types.ts';

export const paypalInvoiceContent: PageContent = {
  slug: 'paypal-invoice',
  family: 'gateways',
  title: 'PayPal Invoicing Fee Calculator (3.49% + $0.49) | FeeKit',
  metaDescription:
    'Calculate exact fees for PayPal digital invoices (3.49% + $0.49). Covers payment terms, tip handling, international client surcharges, and reverse gross-up invoice pricing formulas.',
  h1: 'PayPal Invoicing Fee Calculator & B2B Commercial Billing Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'PayPal Official Merchant Fees (Invoicing Schedule)',
    url: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    citation: 'PayPal US Merchant User Agreement (Invoicing & Commercial Transactions).',
  },
  overview:
    'PayPal Invoicing enables freelancers, contractors, and agencies to send professional digital invoices payable by credit card, debit card, PayPal balance, or Pay in 4 financing. Transactions settled via PayPal Invoicing are billed under PayPal’s standard commercial rate of 3.49% + $0.49 per paid invoice. There are no monthly subscription fees to generate invoices, but the 3.49% rate means service businesses must budget deductions carefully on multi-thousand dollar invoices.',
  sections: [
    {
      id: 'invoicing-pricing-mechanics',
      title: 'PayPal Invoicing Pricing & Built-In Feature Costs',
      body: `PayPal Invoicing operates without monthly software fees or contract minimums:

- **Paid Domestic Invoices**: **3.49% + $0.49** per completed invoice. Applies whether the client pays via credit card, debit card, or PayPal balance.
- **Unpaid / Cancelled Invoices**: **$0.00**. You only pay fees when cash is successfully collected.
- **International Invoices**: **+1.50%** cross-border fee (totaling **4.99% + $0.49**) if your client pays using a non-US card or international PayPal account.
- **Currency Conversion (FX)**: **3.0% to 4.0%** spread if you invoice in foreign currencies (EUR, GBP, CAD) and settle in USD.
- **Built-In Features Included at No Extra Cost**: Automated payment reminder schedules, partial payment / milestone installments, tip collection line items, and downloadable PDF receipts.`,
    },
    {
      id: 'paypal-invoice-vs-ach-bank-transfer',
      title: 'Cost Analysis: PayPal Invoicing vs ACH Direct Bank Transfers',
      body: `On larger B2B service invoices, PayPal's 3.49% uncapped percentage creates massive margin erosion compared to electronic bank transfers:

- On a **$1,000.00 invoice**:
  - PayPal Invoicing fee: $1,000 × 3.49% + $0.49 = **$35.39** (net payout: $964.61).
  - Stripe ACH Direct Debit: $1,000 × 0.80% = **$5.00 capped** (net payout: $995.00).
  - ACH saves **$30.39** on a single $1,000 invoice.
- On a **$5,000.00 retainer**:
  - PayPal Invoicing fee: $5,000 × 3.49% + $0.49 = **$174.99** (net payout: $4,825.01).
  - ACH Direct Debit fee: **$5.00** flat.
  - ACH saves **$169.99 (97% fee reduction)**.

For service businesses sending invoices over $500, offering clients an ACH bank transfer option (or domestic wire) keeps thousands of dollars of annual profit inside your business.`,
    },
    {
      id: 'tips-and-tax-line-items',
      title: 'How PayPal Fees Apply to Tips and Sales Tax',
      body: `PayPal calculates its 3.49% + $0.49 fee against the **total gross settlement amount**, which includes client tips and state sales tax:

1. **Client Tips**: If a client adds a $50 tip to a $200 invoice (total $250), PayPal deducts 3.49% from the tip itself. The $50 tip yields $48.25 net.
2. **Sales Tax Collections**: If you add sales tax to an invoice, PayPal deducts fees on the tax collected. If you bill $100 + $8.25 Texas sales tax ($108.25), PayPal deducts $4.27 in processing fees, leaving you with $103.98. Because you must still remit the full $8.25 to the state Comptroller, your net retained merchandise revenue is $95.73.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Single vs Multi-Milestone Invoice ($1,500.00 Project)',
    scenario:
      'A digital marketing consultant invoices a client for a $1,500.00 project, comparing a single upfront invoice against three separate $500 milestone invoices.',
    inputs: {
      totalContract: '$1,500.00',
      rate: '3.49%',
      fixedFee: '$0.49 per transaction',
    },
    steps: [
      {
        label: 'Option A: Single $1,500.00 Invoice',
        formula: '($1,500.00 × 0.0349) + $0.49',
        amount: '$52.84 Fee | $1,447.16 Net',
        note: 'One fixed fee of 49¢ assessed.',
      },
      {
        label: 'Option B: Three $500.00 Milestone Invoices',
        formula: '3 × [($500.00 × 0.0349) + $0.49]',
        amount: '$53.82 Fee | $1,446.18 Net',
        note: 'Three fixed fees of 49¢ ($1.47 total) assessed.',
      },
      {
        label: 'Fixed-Fee Differential',
        formula: '$53.82 − $52.84',
        amount: '$0.98 Extra',
        note: 'Milestone invoicing adds negligible fee overhead while improving cash flow safety.',
      },
    ],
    takeaway:
      'Because PayPal’s fixed fee is just 49¢, breaking large projects into milestone installments costs less than $1 in extra fees while drastically reducing client non-payment risk.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Invoicing to Net an Exact $2,000.00 Agency Fee',
    scenario:
      'An agency needs to clear exactly $2,000.00 after PayPal Invoicing fees (3.49% + $0.49).',
    inputs: {
      targetNetPayout: '$2,000.00',
      percentageRate: '3.49%',
      fixedFee: '$0.49',
    },
    steps: [
      {
        label: 'Add Fixed Fee to Target Net',
        formula: '$2,000.00 + $0.49',
        amount: '$2,000.49',
        note: 'Numerator calculation.',
      },
      {
        label: 'Compute Net Divisor',
        formula: '1.0 − 0.0349',
        amount: '0.9651',
        note: 'Rate complement.',
      },
      {
        label: 'Calculate Required Gross Invoice',
        formula: '$2,000.49 ÷ 0.9651',
        amount: '$2,072.83',
        note: '$2,000.49 ÷ 0.9651 = $2,072.831, rounded to $2,072.83.',
      },
      {
        label: 'Verification Check (Forward Deduction)',
        formula: '($2,072.83 × 0.0349) + $0.49',
        amount: '$72.83 Fee',
        note: '$72.342 percentage fee + $0.49 fixed fee = $72.83.',
      },
      {
        label: 'Net Bank Deposit',
        formula: '$2,072.83 − $72.83',
        amount: '$2,000.00',
        note: 'Net cleared payout exactly matches $2,000.00.',
      },
    ],
    takeaway:
      'Invoice the client for $2,072.83 to net exactly $2,000.00. The $72.83 fee demonstrates why high-ticket B2B service firms often add credit card surcharge notices or offer 2% cash discounts for ACH payments.',
  },
  faqs: [
    {
      question: 'What is PayPal’s fee for sending and receiving invoice payments?',
      answer:
        'It is free to create and send PayPal invoices. When a client pays an invoice, PayPal deducts 3.49% + $0.49 for domestic US payments. International invoices incur an additional 1.50% cross-border fee (4.99% + $0.49).',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Can clients pay a PayPal invoice without having a PayPal account?',
      answer:
        'Yes. Clients can click the payment link on the invoice and pay directly using any major credit or debit card (Visa, Mastercard, Amex, Discover) as a guest, without creating a PayPal account.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Does PayPal charge fees on client tips added to invoices?',
      answer:
        'Yes. PayPal calculates its 3.49% + $0.49 fee against the total gross payment, which includes any optional tip or gratuity added by the client.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Can I set up recurring automatic invoices on PayPal?',
      answer:
        'Yes. PayPal Invoicing allows merchants to configure recurring invoice schedules (weekly, monthly, or custom intervals). Standard 3.49% + $0.49 processing rates apply to each paid cycle.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'How does PayPal handle partial payments on invoices?',
      answer:
        'Merchants can enable partial payments or minimum deposits on invoices. When a client makes a partial payment, PayPal deducts 3.49% + $0.49 on each individual installment.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
  ],
};

export default paypalInvoiceContent;

