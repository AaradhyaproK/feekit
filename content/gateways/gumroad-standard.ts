import type { PageContent } from '../types.ts';

export const gumroadStandardContent: PageContent = {
  slug: 'gumroad-standard',
  family: 'gateways',
  title: 'Gumroad Fee Calculator (10% Platform Fee & Payment Processing) | FeeKit',
  metaDescription:
    'Calculate exact Gumroad creator fees, net payouts, and profit margins. Detailed breakdown of Gumroad flat 10% platform fee, credit card processing fees (2.9% + $0.30), and Gumroad Discover 10% affiliate fee.',
  h1: 'Gumroad Fee Calculator & Creator Pricing Breakdown',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Gumroad Official Pricing & Creator Help Center',
    url: 'https://gumroad.com/pricing',
    citation: 'Gumroad Official Fee Schedule and Marketplace Facilitator Tax Documentation.',
  },
  overview:
    'Gumroad charges a flat 10% platform fee on every creator sale, regardless of sales volume or tenure. In addition to this 10% platform charge, credit card processing fees (typically 2.9% + $0.30 for standard cards, or higher for PayPal/international transactions) apply, resulting in an effective fee deduction of approximately 12.9% + $0.30 on domestic card transactions. Furthermore, if a sale originates through the Gumroad Discover recommendation engine, an additional 10% discovery commission applies. In exchange for these platform deductions, Gumroad acts as a Marketplace Facilitator, automatically calculating, collecting, and remitting worldwide sales tax, EU VAT, and Australian GST on digital deliverables.',
  sections: [
    {
      id: 'gumroad-official-fee-breakdown',
      title: 'Gumroad Comprehensive Fee Schedule & Rate Structure',
      body: `Gumroad's pricing structure combines platform, payment, and optional marketing fees:

- **Flat Platform Fee**: **10.0%** of gross sale value on every transaction. Gumroad previously used a tiered pricing model (scaling from 9% down to 2.9%), but unified all creator accounts to a flat 10% baseline in 2023.
- **Credit Card Processing Fee**: **2.9% + $0.30** per transaction for standard domestic cards. For PayPal sales or international cards, payment gateway processing can reach **3.49% + $0.49** or include cross-border surcharges.
- **Gumroad Discover Affiliate Fee**: **10.0%** additional fee. If a buyer purchases your product through Gumroad’s discovery search engine or algorithmic recommendations, Gumroad assesses an additional 10% marketing fee, bringing the total platform charge to 20% plus card processing.
- **Effective Blended Cost**: For standard credit card sales outside of Discover, creators experience an effective fee rate of **12.90% + $0.30**.`,
    },
    {
      id: 'marketplace-facilitator-tax-benefit',
      title: 'Marketplace Facilitator Status: Automated Worldwide Sales Tax & VAT',
      body: `The primary justification for Gumroad’s 10% platform fee is complete tax and compliance shielding:

1. **Marketplace Facilitator Law**: Gumroad is legally registered as a marketplace facilitator in the US, European Union, UK, Canada, Australia, and other jurisdictions.
2. **Automated Remittance**: Gumroad calculates and adds state sales tax, EU VAT, or UK VAT at checkout, collects the tax from the buyer, and remits it directly to the relevant tax authorities under Gumroad’s own tax registrations.
3. **Audit Protection for Digital Creators**: Because Gumroad assumes legal responsibility for sales tax, independent creators selling digital courses, eBooks, and software avoid the administrative burden of filing quarterly sales tax returns across 45+ US states and managing EU VAT One-Stop Shop (OSS) filings.`,
    },
    {
      id: 'ticket-size-impact-and-alternatives',
      title: 'Fixed Fee Drag and Platform Comparison (Gumroad vs Lemon Squeezy vs Stripe)',
      body: `How ticket size affects net take-home pay and platform choice:

- **The Micro-Transaction Penalty on Gumroad**: Because card processing adds a fixed $0.30 fee to the 10% platform cut:
  - On a **$5.00 product**: Total fees equal $0.95 ($0.50 platform + $0.45 processing). Effective fee rate is **18.90%**, leaving the creator with $4.05.
  - On a **$20.00 product**: Total fees equal $2.88 ($2.00 platform + $0.88 processing). Effective fee rate drops to **14.40%**, leaving the creator with $17.12.
  - On a **$100.00 product**: Total fees equal $13.20 ($10.00 platform + $3.20 processing). Effective fee rate is **13.20%**, leaving the creator with $86.80.
- **Gumroad vs Lemon Squeezy (5% + $0.50)**:
  - On a $100 sale: Gumroad costs $13.20; Lemon Squeezy costs $5.50. Lemon Squeezy saves **$7.70 per $100 sale** (a 58% fee reduction) while providing identical Merchant of Record tax handling.
- **Gumroad vs Direct Stripe (2.9% + $0.30)**:
  - On a $100 sale: Direct Stripe costs $3.20 versus Gumroad's $13.20. While Stripe saves $10.00 per sale, the creator must manage sales tax compliance manually or integrate a third-party tax engine like Stripe Tax (0.5% fee) or TaxJar.`,
    },
    {
      id: 'payout-rules-and-timing',
      title: 'Payout Cadence, Thresholds, and Global Banking Options',
      body: `Operational details for receiving earnings from Gumroad:

- **Weekly Payout Schedule**: Gumroad issues payouts **every Friday** for sales cleared up to the preceding Friday (a rolling 7-day hold).
- **Minimum Payout Threshold**: The default minimum payout threshold is **$10.00**.
- **Payout Methods**:
  - US Creators: Direct deposit via domestic ACH into any US bank account at zero transfer cost.
  - UK, Canada, Australia: Direct domestic bank transfer via Wise or local clearing partner.
  - International Creators: Payouts via PayPal (subject to PayPal international transfer and cross-border currency conversion fees).`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $50 Digital Product Sale on Gumroad',
    scenario:
      'A software developer sells an educational PDF guide for $50.00 USD on Gumroad to a domestic US customer paying with a credit card.',
    inputs: {
      productPrice: '$50.00',
      gumroadPlatformRate: '10.0%',
      creditCardProcessingRate: '2.9% + $0.30',
      gumroadDiscoverOrigin: 'No (Direct Link)',
    },
    steps: [
      {
        label: 'Gumroad 10% Platform Fee',
        formula: '$50.00 × 10.0%',
        amount: '$5.00',
        note: 'Flat platform deduction',
      },
      {
        label: 'Payment Processing Percentage Fee',
        formula: '$50.00 × 2.9%',
        amount: '$1.45',
        note: 'Card processing percentage',
      },
      {
        label: 'Payment Processing Fixed Fee',
        formula: 'Flat card fixed surcharge',
        amount: '$0.30',
        note: 'Standard fixed cent fee',
      },
      {
        label: 'Total Fees Deducted',
        formula: '$5.00 + $1.45 + $0.30',
        amount: '$6.75',
        note: 'Effective fee rate is 13.50%',
      },
      {
        label: 'Net Creator Payout',
        formula: '$50.00 - $6.75',
        amount: '$43.25',
        note: 'Deposited to creator on Friday',
      },
    ],
    takeaway:
      'On a $50.00 digital product sale, Gumroad deducts $6.75 in total platform and processing fees (13.50% effective fee), resulting in a net creator payout of $43.25.',
  },
  workedExampleReverse: {
    title: 'Reverse Calculation: Pricing a Course to Clear an Exact $100.00 Net on Gumroad',
    scenario:
      'A creator wants to take home exactly $100.00 net after Gumroad’s 10% platform fee and 2.9% + $0.30 card processing. What list price must they set?',
    inputs: {
      targetNetPayout: '$100.00',
      combinedPercentageFee: '12.90% (10% + 2.9%)',
      fixedFee: '$0.30',
    },
    steps: [
      {
        label: 'Gross Price Calculation (Reverse Math)',
        formula: '($100.00 + $0.30) ÷ (1 - 0.129)',
        amount: '$115.16',
        note: 'Gross price required to clear target net',
      },
      {
        label: 'Gumroad 10% Platform Fee',
        formula: '$115.16 × 10.0%',
        amount: '$11.52',
        note: 'Platform fee deduction',
      },
      {
        label: 'Payment Processing Fee (2.9% + $0.30)',
        formula: '($115.16 × 2.9%) + $0.30',
        amount: '$3.64',
        note: 'Card processing deduction',
      },
      {
        label: 'Total Fee Assessed',
        formula: '$11.52 + $3.64',
        amount: '$15.16',
        note: 'Exact total deduction',
      },
      {
        label: 'Net Creator Take-Home',
        formula: '$115.16 - $15.16',
        amount: '$100.00',
        note: 'Matches $100.00 target net revenue',
      },
    ],
    takeaway:
      'To pocket an exact $100.00 net from Gumroad, set your product price to $115.16. Simply adding 12.9% ($112.90) would leave you short at $98.04 due to compounding fee math.',
  },
  faqs: [
    {
      question: 'What is Gumroad’s official fee structure in 2026?',
      answer:
        'Gumroad charges a flat 10% platform fee on every sale, plus credit card processing fees (2.9% + $0.30 for standard US cards, or higher for PayPal and international cards). If a sale comes from Gumroad Discover, an additional 10% fee applies.',
      sourceUrl: 'https://gumroad.com/pricing',
    },
    {
      question: 'Does Gumroad handle sales tax and VAT for creators?',
      answer:
        'Yes. As a registered Marketplace Facilitator, Gumroad automatically calculates, collects, and remits sales tax in US states and VAT in the UK and European Union, relieving creators of individual tax registration requirements.',
      sourceUrl: 'https://gumroad.com/pricing',
    },
    {
      question: 'When does Gumroad pay out creator earnings?',
      answer:
        'Gumroad issues payouts weekly every Friday for sales processed up to the preceding Friday (a 7-day rolling reserve window). The minimum payout threshold is $10.00.',
      sourceUrl: 'https://help.gumroad.com/article/19-how-payouts-work',
    },
    {
      question: 'Can I reduce Gumroad’s 10% platform fee by processing higher volume?',
      answer:
        'No. In 2023, Gumroad eliminated its tiered pricing model and instituted a flat 10% fee for all creators regardless of transaction volume. Creators seeking lower percentage fees often migrate to Lemon Squeezy (5% + $0.50) or self-hosted Stripe setups.',
      sourceUrl: 'https://gumroad.com/pricing',
    },
    {
      question: 'What is the Gumroad Discover fee and can I opt out?',
      answer:
        'Gumroad Discover is a marketplace feature that recommends products to buyers across the platform. If a customer buys your product via Discover, Gumroad takes an extra 10% fee. You can opt out of Gumroad Discover in your product settings if you only want direct sales.',
      sourceUrl: 'https://help.gumroad.com/article/79-gumroad-discover',
    },
  ],
};

export default gumroadStandardContent;

