import type { PageContent } from '../types.ts';

export const venmoStandardContent: PageContent = {
  slug: 'venmo-standard',
  family: 'gateways',
  title: 'Venmo Business Fee Calculator (1.9% vs 2.29% + 10¢) | FeeKit',
  metaDescription:
    'Calculate exact Venmo Business profile fees: 1.9% + $0.10 for in-person QR payments vs 2.29% + $0.10 for in-app / checkout sales. Compare vs personal Venmo limits and tax rules.',
  h1: 'Venmo Business Profile Fee Calculator & Payment Guide',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Venmo Official Business Pricing & Fee Schedule',
    url: 'https://venmo.com/business/pricing/',
    citation: 'Venmo User Agreement (Business Profile Transaction Fees & Terms).',
  },
  overview:
    'Venmo Business Profiles enable sole proprietors, freelancers, and mobile vendors to accept commercial payments with direct exposure to Venmo’s social feed of 80+ million active users. Venmo applies a straightforward two-tier transaction fee structure: in-person sales settled via seller QR code incur 1.9% + $0.10, while electronic sales received via the Venmo app, website checkout, or buyer search incur 2.29% + $0.10. Business profiles provide formal separation of personal and commercial funds, automatic tax reporting, and customer tip handling.',
  sections: [
    {
      id: 'venmo-business-rates-breakdown',
      title: 'Venmo Business Profile Fee Rates',
      body: `Venmo divides commercial transaction fees based on customer payment initiation:

- **In-Person QR Code Payments**: **1.90% + $0.10** per transaction when customers scan your unique business QR code using the Venmo mobile app.
- **In-App & Online Checkout Payments**: **2.29% + $0.10** per transaction when clients search for your business username, pay through payment links, or purchase through an integrated Venmo web checkout button.
- **Monthly Subscription / Account Fees**: **$0.00**. There are no monthly maintenance charges or minimum volume quotas.
- **Standard Bank Transfers**: **$0.00** (Free). Transfers to a linked bank account settle via standard ACH within 1 to 3 business days.
- **Instant Bank Transfers**: **1.75%** of the transfer amount (minimum fee **$0.25**, maximum fee **$25.00**) to move funds to an eligible debit card within minutes.`,
    },
    {
      id: 'personal-vs-business-profile-tax',
      title: 'Personal Venmo vs Venmo Business Profile: IRS Reporting & Account Freezes',
      body: `Many sole proprietors mistakenly use personal Venmo accounts to avoid the 1.9% fee. However, operating a commercial enterprise through a personal account violates Venmo terms of service and triggers severe operational risks:

1. **Account Suspension & Fund Freezes**: Venmo's automated compliance algorithms monitor transaction velocity and payment memos (e.g., "haircut", "invoice #104", "deposit"). If commercial activity is detected on a personal profile, Venmo freezes the account and withholds funds for up to 180 days.
2. **IRS Form 1099-K Reporting Compliance**: Under federal statutory rules (26 U.S.C. § 6050W), payment settlement entities report gross payments. Personal peer-to-peer transfers (splitting dinner or rent) are exempt from 1099-K reporting. Mixing commercial revenue into personal profiles creates severe accounting reconciliation headaches during tax season.
3. **Buyer Tipping & Search Discovery**: Venmo Business profiles allow customers to add discretionary tips (15%, 20%, 25%) during checkout and surface your business in Venmo's local business discovery directory.`,
    },
    {
      id: 'venmo-vs-square-comparison',
      title: 'Cost Face-Off: Venmo Business (1.9% + 10¢) vs Square POS (2.6% + 15¢)',
      body: `Comparing Venmo in-person QR payments to standard Square POS:

- On a **$20.00 purchase**:
  - Venmo QR: $20 × 1.90% + $0.10 = **$0.48 fee** (net payout: $19.52; effective rate: 2.40%).
  - Square POS: $20 × 2.60% + $0.15 = **$0.67 fee** (net payout: $19.33; effective rate: 3.35%).
  - Venmo QR saves **19¢ (28% lower fee)**.
- On a **$100.00 service payment**:
  - Venmo QR: $100 × 1.90% + $0.10 = **$2.00 fee** (net payout: $98.00; effective rate: 2.00%).
  - Square POS: $100 × 2.60% + $0.15 = **$2.75 fee** (net payout: $97.25; effective rate: 2.75%).
  - Venmo QR saves **$0.75 per $100 transaction**.

Venmo QR provides a 70 basis point rate advantage over Square POS without requiring any physical terminal hardware, though it requires the customer to possess the Venmo mobile app.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: Salon Stylist Processing $120.00 Appointment',
    scenario:
      'A freelance hairstylist completes a $120.00 color service. The client pays in-person via Venmo Business QR code (1.90% + $0.10) and adds an optional $25.00 tip (total $145.00 payment).',
    inputs: {
      serviceSubtotal: '$120.00',
      clientTip: '$25.00',
      grossPayment: '$145.00',
      feeSchedule: '1.90% + $0.10',
    },
    steps: [
      {
        label: 'Calculate Percentage Fee on Gross Total',
        formula: '$145.00 × 0.019',
        amount: '$2.76',
        note: '1.9% assessed on combined service and tip volume.',
      },
      {
        label: 'Add Fixed Transaction Fee',
        formula: '$2.76 + $0.10',
        amount: '$2.86 Total Fee',
        note: 'Represents an effective fee rate of 1.97%.',
      },
      {
        label: 'Net Payout to Stylist Venmo Balance',
        formula: '$145.00 − $2.86',
        amount: '$142.14 Net Deposit',
        note: 'Available immediately for spending via Venmo debit card or free 1-3 day bank transfer.',
      },
    ],
    takeaway:
      'On a $145.00 total ticket, Venmo takes less than $3.00 in processing fees ($2.86), leaving the stylist with $142.14 in take-home pay.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Invoicing to Net an Exact $100.00 on In-App Venmo',
    scenario:
      'A private tutor wants to net exactly $100.00 after Venmo in-app payment fees (2.29% + $0.10).',
    inputs: {
      targetNetPayout: '$100.00',
      percentageRate: '2.29%',
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
        formula: '1.0 − 0.0229',
        amount: '0.9771',
        note: '97.71% retained after 2.29% fee.',
      },
      {
        label: 'Calculate Required Charge',
        formula: '$100.10 ÷ 0.9771',
        amount: '$102.45',
        note: '$100.10 ÷ 0.9771 = $102.446, rounded to $102.45.',
      },
      {
        label: 'Verification Check (Forward Fee)',
        formula: '($102.45 × 0.0229) + $0.10',
        amount: '$2.45 Fee',
        note: '$2.346 percentage fee + $0.10 fixed fee = $2.45.',
      },
      {
        label: 'Final Net Deposit',
        formula: '$102.45 − $2.45',
        amount: '$100.00',
        note: 'Deposits exactly $100.00 net.',
      },
    ],
    takeaway:
      'Charge the client $102.45 to clear $100.00 on in-app Venmo. If paid via in-person QR (1.9%), the required charge is only $102.04.',
  },
  faqs: [
    {
      question: 'What are the fees for a Venmo Business Profile?',
      answer:
        'Venmo charges 1.90% + $0.10 per transaction for in-person payments received via your seller QR code, and 2.29% + $0.10 per transaction for payments received through the Venmo app or website checkout. There are $0 monthly account fees.',
      sourceUrl: 'https://venmo.com/business/pricing/',
    },
    {
      question: 'Why shouldn’t I use a personal Venmo account for business payments?',
      answer:
        'Using a personal Venmo account for commercial transactions violates Venmo’s terms of service and can lead to immediate account suspension and a 180-day freeze on funds. Business profiles also provide formal 1099-K tax reporting, tipping capabilities, and customer purchase protection.',
      sourceUrl: 'https://venmo.com/business/pricing/',
    },
    {
      question: 'How much does it cost to transfer money from Venmo to a bank account?',
      answer:
        'Standard bank transfers are completely free ($0.00) and arrive in 1 to 3 business days via ACH. Instant transfers cost 1.75% of the transfer amount (minimum $0.25, maximum $25.00) and transfer funds to an eligible debit card or bank account within minutes.',
      sourceUrl: 'https://venmo.com/business/pricing/',
    },
    {
      question: 'Can customers add tips when paying a Venmo Business Profile?',
      answer:
        'Yes. Venmo Business profiles have a built-in tipping feature that prompts buyers to add a custom tip or select a percentage (15%, 20%, 25%) during checkout.',
      sourceUrl: 'https://venmo.com/business/pricing/',
    },
    {
      question: 'Does Venmo charge fees on customer refunds?',
      answer:
        'When you issue a refund to a buyer, Venmo retains the initial transaction fee (1.9% or 2.29% + $0.10). The merchant absorbs this processing fee as a non-refundable cost.',
      sourceUrl: 'https://venmo.com/business/pricing/',
    },
  ],
};

export default venmoStandardContent;

