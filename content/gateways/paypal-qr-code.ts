import type { PageContent } from '../types.ts';

export const paypalQrCodeContent: PageContent = {
  slug: 'paypal-qr-code',
  family: 'gateways',
  title: 'PayPal QR Code Fee Calculator (1.90% + $0.10) | FeeKit',
  metaDescription:
    'Calculate in-person PayPal QR code merchant fees: 1.90% + $0.10 for transactions over $10.00 vs 2.40% + $0.05 for $10.00 and under. Compare against Square POS and Venmo in-person payments.',
  h1: 'PayPal In-Person QR Code Fee Calculator & Merchant Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'PayPal Official Merchant Fees (In-Person QR Schedule)',
    url: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    citation: 'PayPal US Merchant User Agreement (In-Person QR Code Transactions).',
  },
  overview:
    'PayPal In-Person QR Code payments provide a contact-free, hardware-free payment method for farmers markets, food trucks, pop-up shops, and local service providers. Customers scan the seller’s printed or mobile QR code using the PayPal or Venmo app. Transactions over $10.00 are charged at 1.90% + $0.10 per transaction, while micro-transactions of $10.00 and under are charged at 2.40% + $0.05. This tiered pricing makes PayPal QR significantly cheaper than standard online checkout (3.49% + $0.49).',
  sections: [
    {
      id: 'qr-code-tiered-pricing',
      title: 'PayPal QR Code Tiered Pricing Rules ($10.00 Threshold)',
      body: `PayPal splits in-person QR code pricing across two distinct transaction size tiers:

- **Transactions Over $10.00**: **1.90% + $0.10** per transaction. (For example, on a $25.00 purchase, the fee is $0.58, leaving $24.42 net).
- **Transactions $10.00 and Under**: **2.40% + $0.05** per transaction. (For example, on a $5.00 coffee, the fee is $0.17, leaving $4.83 net).

This pricing structure explicitly protects small vendors from fixed-fee drag on micro-purchases by reducing the fixed surcharge from $0.10 to $0.05 on sub-$10 items.`,
    },
    {
      id: 'qr-vs-square-pos',
      title: 'Competitive Analysis: PayPal QR vs Square POS (2.6% + 15¢)',
      body: `Comparing PayPal QR code processing to Square's standard tap/dip/swipe point-of-sale:

- On a **$10.00 sale**:
  - PayPal QR: $10.00 × 2.40% + $0.05 = **$0.29 fee** (net payout: $9.71; effective rate: 2.90%).
  - Square POS: $10.00 × 2.60% + $0.15 = **$0.41 fee** (net payout: $9.59; effective rate: 4.10%).
  - PayPal QR saves **12¢ (29% lower fee)** on a $10 purchase.
- On a **$50.00 retail sale**:
  - PayPal QR: $50.00 × 1.90% + $0.10 = **$1.05 fee** (net payout: $48.95; effective rate: 2.10%).
  - Square POS: $50.00 × 2.60% + $0.15 = **$1.45 fee** (net payout: $48.55; effective rate: 2.90%).
  - PayPal QR saves **40¢ per $50 transaction**.
- On a **$200.00 market stall sale**:
  - PayPal QR: $200.00 × 1.90% + $0.10 = **$3.90 fee** (net payout: $196.10; effective rate: 1.95%).
  - Square POS: $200.00 × 2.60% + $0.15 = **$5.35 fee** (net payout: $194.65; effective rate: 2.68%).
  - PayPal QR saves **$1.45 per $200 transaction**.

Across all transaction values, PayPal QR is substantially cheaper than Square POS, though it requires the customer to scan with a smartphone app rather than tapping a physical contactless card.`,
    },
    {
      id: 'hardware-and-settlement',
      title: 'Zero Hardware Overhead & Instant Settlement to PayPal Balance',
      body: `Traditional POS terminals require buying card readers ($59 to $299 for Square Terminal or Clover) and maintaining Bluetooth connections. PayPal QR requires **$0 in hardware investment**: merchants can generate and print a laminated QR code stand directly from the PayPal app.

When a customer pays, cleared funds deposit instantly into the merchant's PayPal business balance, ready for immediate debit card spend or transfer to a linked bank account via standard ACH (1–3 business days at $0 fee) or Instant Transfer (1.75% fee, minimum $0.25).`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Farmers Market Transaction Breakdown ($8.00 vs $25.00 vs $75.00)',
    scenario:
      'A local artisanal baker evaluates PayPal QR fees across three typical market ticket sizes, highlighting the $10.00 threshold shift.',
    inputs: {
      under10Rate: '2.40% + $0.05',
      over10Rate: '1.90% + $0.10',
    },
    steps: [
      {
        label: 'Sale 1: $8.00 Loaf of Sourdough (Under $10 Tier)',
        formula: '($8.00 × 0.024) + $0.05',
        amount: '$0.24 Fee | $7.76 Net',
        note: 'Effective fee rate is 3.00% under the 5¢ fixed fee rule.',
      },
      {
        label: 'Sale 2: $25.00 Pastry Box (Over $10 Tier)',
        formula: '($25.00 × 0.019) + $0.10',
        amount: '$0.58 Fee | $24.42 Net',
        note: 'Effective fee rate drops to 2.32%.',
      },
      {
        label: 'Sale 3: $75.00 Catering Order (Over $10 Tier)',
        formula: '($75.00 × 0.019) + $0.10',
        amount: '$1.53 Fee | $73.47 Net',
        note: 'Effective fee rate is 2.04%.',
      },
    ],
    takeaway:
      'PayPal QR provides one of the lowest in-person processing costs in the United States, keeping fees close to 2% without requiring expensive terminal hardware leases.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Pricing an In-Person Service to Net Exactly $100.00',
    scenario:
      'A mobile bicycle repair mechanic wants to net exactly $100.00 on a repair paid via PayPal QR code.',
    inputs: {
      targetNetPayout: '$100.00',
      qrPercentageRate: '1.90%',
      fixedFee: '$0.10',
    },
    steps: [
      {
        label: 'Add 10¢ Fixed Fee to Net Target',
        formula: '$100.00 + $0.10',
        amount: '$100.10',
        note: 'Numerator calculation.',
      },
      {
        label: 'Compute Net Divisor',
        formula: '1.0 − 0.019',
        amount: '0.981',
        note: '98.1% retained after 1.9% fee.',
      },
      {
        label: 'Calculate Required Charge',
        formula: '$100.10 ÷ 0.981',
        amount: '$102.04',
        note: '$100.10 ÷ 0.981 = $102.038, rounded to $102.04.',
      },
      {
        label: 'Verification Check (Forward Fee)',
        formula: '($102.04 × 0.019) + $0.10',
        amount: '$2.04 Fee',
        note: '$1.938 percentage fee + $0.10 fixed fee = $2.04.',
      },
      {
        label: 'Final Net Deposit',
        formula: '$102.04 − $2.04',
        amount: '$100.00',
        note: 'Deposits exactly $100.00 into PayPal balance.',
      },
    ],
    takeaway:
      'Charge the customer $102.04 to clear exactly $100.00. On Square POS (2.6% + 15¢), the equivalent charge would be $102.82, costing the customer 78¢ more.',
  },
  faqs: [
    {
      question: 'What is PayPal’s fee for QR code payments in person?',
      answer:
        'For transactions over $10.00, PayPal charges 1.90% + $0.10. For transactions $10.00 and under, PayPal charges 2.40% + $0.05. There are no monthly hardware or terminal fees.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Can buyers pay a PayPal QR code using Venmo?',
      answer:
        'Yes. PayPal QR codes can be scanned and paid using either the PayPal app or the Venmo app, giving customers flexibility to use their preferred mobile wallet balance.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Do I need special hardware to accept PayPal QR code payments?',
      answer:
        'No. You can print your unique QR code from the PayPal website on a tabletop display, business card, or display it digitally on your mobile phone screen.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'Is PayPal QR cheaper than Square for small merchants?',
      answer:
        'Yes. PayPal QR (1.90% + $0.10 or 2.40% + $0.05) is significantly cheaper than Square standard POS (2.60% + $0.15) across all transaction amounts, saving roughly $0.40 per $50 processed.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
    {
      question: 'How fast do funds from QR code sales appear in my account?',
      answer:
        'QR code payments appear immediately in your PayPal business balance and are available for instant debit card spending or transfer to a linked bank account.',
      sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    },
  ],
};

export default paypalQrCodeContent;

