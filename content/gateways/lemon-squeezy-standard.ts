import type { PageContent } from '../types.ts';

export const lemonSqueezyStandardContent: PageContent = {
  slug: 'lemon-squeezy-standard',
  family: 'gateways',
  title: 'Lemon Squeezy Fee Calculator (5% + $0.50 Merchant of Record) | FeeKit',
  metaDescription:
    'Calculate exact Lemon Squeezy Merchant of Record fees, net payouts, and international card surcharges. Comprehensive analysis of Lemon Squeezy 5% + $0.50 pricing, global tax compliance, and license management.',
  h1: 'Lemon Squeezy Fee Calculator & Merchant of Record Pricing',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Lemon Squeezy Official Pricing & Documentation',
    url: 'https://www.lemonsqueezy.com/pricing',
    citation: 'Lemon Squeezy Official Pricing Schedule, Merchant of Record Terms, and Tax Compliance Documentation.',
  },
  overview:
    'Lemon Squeezy operates as a specialized Merchant of Record (MoR) for software companies, digital creators, and SaaS founders. Rather than functioning solely as a payment gateway, Lemon Squeezy legally acts as the reseller of your digital products, assuming full legal liability for global tax calculation, sales tax collection, EU VAT remittance, chargeback management, and local regulatory compliance. In exchange for this end-to-end infrastructure, Lemon Squeezy charges a transparent baseline rate of 5.0% + $0.50 per transaction, with an additional 1.5% fee on international cards or PayPal transactions.',
  sections: [
    {
      id: 'mor-pricing-breakdown',
      title: 'Merchant of Record (MoR) Fee Structure Explained',
      body: `Understanding Lemon Squeezy's fee schedule requires distinguishing between pure payment gateways and Merchant of Record architectures:

- **Standard Domestic Card Transactions**: **5.0% + $0.50** per successful charge. This single all-inclusive fee covers both platform software and underlying credit card interchange processing.
- **International Card Surcharge**: **+1.50%** (totaling **6.5% + $0.50**) when processing credit cards issued outside of the United States.
- **PayPal Payment Processing**: **+1.50%** (totaling **6.5% + $0.50**) when customers choose to check out via PayPal.
- **Subscription & Recurring Billing**: Standard 5% + $0.50 rate applies to recurring billing cycles with automated dunning management and proration logic included.
- **Zero Monthly Platform Fees**: Unlike traditional enterprise MoRs (such as FastSpring or Digital River), Lemon Squeezy requires no monthly recurring subscription fee, no minimum commitment, and no setup charges.`,
    },
    {
      id: 'mor-tax-and-legal-advantages',
      title: 'Global Tax Shield: Sales Tax, VAT, and Regulatory Compliance',
      body: `The defining feature of a Merchant of Record is legal liability transfer:

1. **Who is the Legal Seller?**: In a standard Stripe checkout, your company is the seller of record. If you sell to a customer in Germany, your business is technically liable for registering for German VAT once thresholds are crossed. With Lemon Squeezy, Lemon Squeezy is the legal seller. The customer's receipt states "Lemon Squeezy, LLC".
2. **Automated Worldwide Tax Remittance**: Lemon Squeezy maintains local tax registrations across all 50 US states, Canada (GST/HST), the European Union (OSS), the United Kingdom (HMRC VAT), Australia, and Japan. They calculate, collect, and remit 100% of applicable sales tax and VAT directly to sovereign tax authorities.
3. **Audit Immunity for Software Founders**: Independent developers and boutique SaaS companies avoid hiring specialized international tax attorneys or maintaining costly sales tax automation subscriptions (such as Avalara or TaxJar).`,
    },
    {
      id: 'lemon-squeezy-vs-gumroad-vs-stripe',
      title: 'Competitive Benchmark: Lemon Squeezy vs Gumroad vs Direct Stripe',
      body: `Comparing the three primary digital monetization platforms:

- **Lemon Squeezy (5% + $0.50) vs Gumroad (10% + 2.9% + $0.30)**:
  - On a $50 software sale: Lemon Squeezy fee is **$3.00**; Gumroad fee is **$6.75**. Lemon Squeezy saves **$3.75 per sale** (a 55% cost reduction) while delivering identical MoR tax shielding.
  - On a $100 SaaS subscription: Lemon Squeezy fee is **$5.50**; Gumroad fee is **$13.20**. Lemon Squeezy saves **$7.70 per transaction**.
- **Lemon Squeezy (5% + $0.50) vs Direct Stripe (2.9% + $0.30 + Stripe Tax 0.5%)**:
  - Direct Stripe with Stripe Tax costs 3.4% + $0.30 ($2.00 on a $50 sale vs $3.00 on Lemon Squeezy).
  - The $1.00 premium on Lemon Squeezy pays for complete elimination of sales tax filings, multi-jurisdiction nexus tracking, and refund liability management. For solo developers and lean teams, avoiding tax compliance overhead easily justifies the 1.6% margin difference.`,
    },
    {
      id: 'payout-mechanics-and-reserves',
      title: 'Payout Cadence, Currencies, and Rolling Reserves',
      body: `Operational payout rules for Lemon Squeezy merchants:

- **Payout Schedule**: Payouts are generated **every Monday** or bi-weekly depending on account history, clearing directly into your connected bank account or PayPal.
- **Supported Payout Rails**: Direct bank deposit in the US via ACH, and global bank deposits in over 80 countries powered by Wise integration.
- **Rolling Security Reserve**: New software stores or digital products with elevated chargeback risk may be subject to a standard **5% rolling reserve** held for 90 days to protect against refund surges.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $50 SaaS License Sale on Lemon Squeezy',
    scenario:
      'A software developer sells an annual desktop software license for $50.00 USD to a US customer paying with a domestic credit card on Lemon Squeezy.',
    inputs: {
      licensePrice: '$50.00',
      lemonSqueezyPercentage: '5.0%',
      lemonSqueezyFixedFee: '$0.50',
      internationalCardSurcharge: 'None (Domestic)',
    },
    steps: [
      {
        label: 'Lemon Squeezy 5.0% Percentage Fee',
        formula: '$50.00 × 5.0%',
        amount: '$2.50',
        note: 'Covers MoR and processing',
      },
      {
        label: 'Lemon Squeezy Fixed Fee',
        formula: 'Flat transaction surcharge',
        amount: '$0.50',
        note: 'Fixed per-transaction fee',
      },
      {
        label: 'Total Fees Deducted',
        formula: '$2.50 + $0.50',
        amount: '$3.00',
        note: 'Effective fee rate is 6.00%',
      },
      {
        label: 'Net Payout Deposited',
        formula: '$50.00 - $3.00',
        amount: '$47.00',
        note: '100% tax liability handled by Lemon Squeezy',
      },
    ],
    takeaway:
      'On a $50.00 software license sale, Lemon Squeezy deducts exactly $3.00 in total fees (6.00% effective fee), delivering $47.00 in net profit with complete tax shielding.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Pricing Software to Clear an Exact $100.00 Net on Lemon Squeezy',
    scenario:
      'A founder wants to receive an exact $100.00 net payout per software subscription after Lemon Squeezy fees (5% + $0.50). What list price must they set?',
    inputs: {
      targetNetPayout: '$100.00',
      platformPercentageRate: '5.0%',
      fixedSurcharge: '$0.50',
    },
    steps: [
      {
        label: 'Required List Price (Reverse Formula)',
        formula: '($100.00 + $0.50) ÷ (1 - 0.05)',
        amount: '$105.79',
        note: 'Reverse calculation formula for 5% + $0.50',
      },
      {
        label: 'Lemon Squeezy 5% Variable Fee',
        formula: '$105.79 × 5.0%',
        amount: '$5.29',
        note: 'Calculated on gross price',
      },
      {
        label: 'Lemon Squeezy Fixed Fee',
        formula: 'Flat fixed fee',
        amount: '$0.50',
        note: 'Standard fixed charge',
      },
      {
        label: 'Total Deduction',
        formula: '$5.29 + $0.50',
        amount: '$5.79',
        note: 'Exact total transaction fee',
      },
      {
        label: 'Net Revenue Deposited',
        formula: '$105.79 - $5.79',
        amount: '$100.00',
        note: 'Exactly clears target net amount',
      },
    ],
    takeaway:
      'To receive an exact $100.00 net payout via Lemon Squeezy, set your software price at $105.79. Simply adding 5% ($105.00) would yield only $99.25 after fees.',
  },
  faqs: [
    {
      question: 'What are Lemon Squeezy’s official fees in 2026?',
      answer:
        'Lemon Squeezy charges 5% + $0.50 per successful transaction for domestic card sales. For international cards or PayPal transactions, an additional 1.5% fee applies (totaling 6.5% + $0.50). There are no monthly subscription fees.',
      sourceUrl: 'https://www.lemonsqueezy.com/pricing',
    },
    {
      question: 'What does Merchant of Record (MoR) mean on Lemon Squeezy?',
      answer:
        'As a Merchant of Record, Lemon Squeezy legally purchases and resells your digital goods to the end consumer. They assume full legal responsibility for collecting, reporting, and remitting sales taxes and VAT globally, protecting creators from international tax compliance liabilities.',
      sourceUrl: 'https://www.lemonsqueezy.com/pricing',
    },
    {
      question: 'Is Lemon Squeezy cheaper than Gumroad?',
      answer:
        'Yes, substantially. Gumroad charges a flat 10% platform fee plus 2.9% + $0.30 in processing fees (effective ~12.9% + $0.30). Lemon Squeezy charges 5% + $0.50, cutting platform and transaction costs by more than half while offering full MoR tax compliance.',
      sourceUrl: 'https://www.lemonsqueezy.com/pricing',
    },
    {
      question: 'How and when does Lemon Squeezy pay out earnings?',
      answer:
        'Payouts are distributed weekly every Monday via direct bank deposit (ACH in the US, or direct local bank transfers in 80+ countries powered by Wise) or PayPal.',
      sourceUrl: 'https://docs.lemonsqueezy.com/help/getting-paid/payouts',
    },
    {
      question: 'Can I sell SaaS recurring subscriptions on Lemon Squeezy?',
      answer:
        'Yes. Lemon Squeezy has built-in subscription billing infrastructure, supporting monthly/annual recurring billing, proration, pause/resume, automated dunning emails for failed payments, and customer self-serve billing portals.',
      sourceUrl: 'https://docs.lemonsqueezy.com/help/products/subscriptions',
    },
  ],
};

export default lemonSqueezyStandardContent;

