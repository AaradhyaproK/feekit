import type { PageContent } from '../types.ts';

export const tiktokShopDropshippingContent: PageContent = {
  slug: 'tiktok-shop-dropshipping',
  family: 'ecommerce',
  title: 'TikTok Shop Dropshipping Fee & Profit Margin Calculator | FeeKit',
  metaDescription:
    'Calculate TikTok Shop referral fees (6.00%), creator affiliate commissions (10-20%), and net profit margins. Details US 3PL fast-shipping SLAs and LDR compliance.',
  h1: 'TikTok Shop Dropshipping Profit & Fee Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'TikTok Shop Seller Center Official Fee Policy',
    url: 'https://seller-us.tiktok.com/',
    citation: 'TikTok Shop Merchant Terms of Service, Referral Fee Schedule (6% Standard Tier), and Fulfillment SLA Guidelines.',
  },
  overview:
    'Selling on TikTok Shop introduces a powerful social commerce flywheel: native in-app checkout, viral video discoverability, and creator affiliate marketing. However, TikTok Shop enforces a distinct operational and fee structure: a 6.00% platform referral commission (with a $0.30 minimum), 10% to 20% creator affiliate commissions, payment processing charges, and strict 48-hour domestic shipping service level agreements (SLAs). Unlike traditional Shopify dropshipping where 15-day overseas shipping was common, TikTok Shop requires domestic US fulfillment to maintain seller health and avoid account suspension.',
  sections: [
    {
      id: 'tiktok-shop-fee-architecture',
      title: 'TikTok Shop Platform Commission (6.00%) and Payment Fees',
      body: `TikTok Shop charges sellers a direct marketplace referral fee governed by its official Seller Center schedule:

1. **Standard Marketplace Referral Fee (6.00%)**: Under the standard US seller fee schedule, TikTok Shop deducts a **6.00% referral fee** on the total order amount paid by the customer (with a minimum fee of $0.30 per order). This covers payment processing and in-app marketplace checkout hosting.
2. **Creator Affiliate Commissions (10.00% – 20.00%)**: To drive viral traffic on TikTok Shop, merchants offer open or targeted affiliate plans to TikTok content creators. When a creator tags your product in a shoppable video or livestream, TikTok automatically deducts the agreed affiliate commission (typically **15.00%**) upon customer order settlement.
3. **Subsidized Shipping & Promotional Coupons**: TikTok frequently subsidizes buyer shipping (e.g., free shipping on orders over $20) and provides platform-funded coupons to accelerate volume, paying the merchant the difference during bi-weekly settlement cycles.`,
    },
    {
      id: 'strict-fulfillment-slas-and-ldr-standards',
      title: 'Fulfillment SLAs: The 48-Hour Dispatch Rule and Late Dispatch Rates (LDR)',
      body: `TikTok Shop operates under strict fulfillment service level agreements (SLAs) designed to match Amazon Prime customer expectations:

- **The 2-Business-Day Carrier Scan Mandate**: Sellers must pack, ship, and receive an initial transit scan from a supported carrier (USPS, UPS, FedEx) within **2 business days (48 hours)** of order placement.
- **Prohibition on Slow Cross-Border Dropshipping**: Traditional 10-to-18 day dropshipping directly from overseas factories via ePacket is strictly penalized on TikTok Shop US. Merchants who fail the 48-hour scan requirement incur severe Late Dispatch Rate (LDR) penalties. If a shop's LDR exceeds **4.00%**, TikTok restricts daily order limits or deactivates the merchant's shop.
- **US 3PL Fast-Fulfillment Requirement**: Successful TikTok Shop dropshippers partner with domestic US fulfillment centers (3PLs) holding forward-deployed domestic inventory to guarantee same-day or next-day carrier handoffs.`,
    },
    {
      id: 'creator-affiliate-economics-vs-paid-ads',
      title: 'Creator Affiliate Commissions vs. TikTok Spark Ads Paid Media',
      body: `TikTok Shop allows two distinct traffic acquisition mechanisms:

- **Organic Creator Affiliate Marketing (No Upfront Ad Spend)**: By sending free samples to creators who produce UGC (User Generated Content), merchants generate sales without upfront ad spend. The 15% affiliate commission is deducted only when an order is completed, eliminating financial media risk.
- **TikTok Spark Ads (Paid Media Boosting)**: When an organic creator video achieves high engagement, merchants boost the post using TikTok Ads Manager via Spark Ads. Sponsoring high-converting organic creative typically yields ROAS between **2.50 and 4.50**, far outperforming cold studio ads.
- **Combined Platform Deduction**: An order driven by a creator affiliate with a 6% TikTok referral fee and a 15% creator commission results in a total platform take-rate of **21.00% + $0.30**.`,
    },
    {
      id: 'tiktok-shop-returns-and-policy-compliance',
      title: 'Return Policies, Category Gating, and Intellectual Property Protection',
      body: `Operating on TikTok Shop requires adherence to platform safety and authenticity policies:

- **30-Day Customer Return Policy**: TikTok Shop enforces a mandatory 30-day return policy for standard goods. In cases of shipping damage or delayed delivery, TikTok automated support frequently issues "Returnless Refunds" to buyers, requiring sellers to monitor dispute claims in Seller Center.
- **Gated Product Categories**: Dietary supplements, skincare, fine jewelry, and consumer electronics require category approval, verified commercial lab testing reports, and trademark ownership documentation before products can be showcased in creator showcases.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $38.00 Viral Beauty Accessory Sold via Creator Affiliate on TikTok Shop',
    scenario:
      'A TikTok Shop merchant sells an ultrasonic skincare cleansing device for $38.00 with free domestic shipping. The sale is generated by a TikTok creator earning a 15.00% affiliate commission.',
    inputs: {
      retailSellingPrice: '$38.00',
      shippingChargedToBuyer: '$0.00 (Free Shipping)',
      us3PlLandedProductCost: '$9.50 (US-warehoused inventory)',
      uspsGroundDomesticShipping: '$4.25',
      tiktokShopReferralFee: '6.00% + $0.30 ($2.58)',
      creatorAffiliateCommission: '15.00% ($5.70)',
      customerReturnReserve: '$1.50 (4% allocation)',
    },
    steps: [
      {
        label: 'Gross Order Revenue',
        formula: 'Customer checkout total',
        amount: '$38.00',
        note: 'Topline revenue deposited.',
      },
      {
        label: 'Deduct TikTok Shop Referral Fee (6% + $0.30)',
        formula: '($38.00 × 0.06) + $0.30',
        amount: '$2.58',
        note: 'Official platform commission.',
      },
      {
        label: 'Deduct Creator Affiliate Commission (15%)',
        formula: '$38.00 × 0.15',
        amount: '$5.70',
        note: 'Paid to UGC creator who generated the sale.',
      },
      {
        label: 'Deduct US Domestic 3PL COGS',
        formula: 'Unit inventory cost at US warehouse',
        amount: '$9.50',
        note: 'Direct product inventory cost.',
      },
      {
        label: 'Deduct Outbound USPS Shipping',
        formula: 'USPS Ground Advantage 48-hr scan',
        amount: '$4.25',
        note: 'Domestic fulfillment cost.',
      },
      {
        label: 'Deduct Return & Damage Reserve',
        formula: '4% customer return provision',
        amount: '$1.50',
        note: 'Return reserve allocation.',
      },
      {
        label: 'Total Platform & Fulfillment Costs',
        formula: '$2.58 + $5.70 + $9.50 + $4.25 + $1.50',
        amount: '$23.53',
        note: 'Total deductions (61.92% of retail).',
      },
      {
        label: 'Net Merchant Cash Profit',
        formula: '$38.00 − $23.53',
        amount: '$14.47',
        note: 'Net margin: 38.08% of retail price.',
      },
    ],
    takeaway:
      'On a $38.00 viral sale, TikTok Shop and the affiliate creator take $8.28 combined (21.79%), domestic US fulfillment and COGS take $13.75 (36.18%), leaving the merchant with $14.47 in clean net profit (38.08% net margin) with zero upfront advertising risk.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Minimum Retail Price for a $10.00 Net Margin',
    scenario:
      'A TikTok Shop merchant wants to clear exactly $10.00 net profit on an item with $8.00 US landed COGS and $4.00 shipping, offering a 15% creator commission and paying TikTok’s 6% + $0.30 fee.',
    inputs: {
      targetNetProfit: '$10.00',
      totalCogsAndShipping: '$12.00 ($8.00 COGS + $4.00 Shipping)',
      tiktokFixedFee: '$0.30',
      combinedVariableRate: '21.00% (6.0% TikTok + 15.0% Affiliate)',
    },
    steps: [
      {
        label: 'Calculate Fixed Cash Requirement',
        formula: '$10.00 (Profit) + $12.00 (COGS/Ship) + $0.30 (Fixed Fee)',
        amount: '$22.30',
        note: 'Total non-variable dollar requirement.',
      },
      {
        label: 'Account for 21% Combined Variable Deductions',
        formula: '$22.30 ÷ (1 − 0.21)',
        amount: '$28.23',
        note: 'Exact mathematically derived minimum retail price.',
      },
      {
        label: 'Recommended Commercial Retail Price',
        formula: 'Rounded to standard commercial tier',
        amount: '$29.99',
        note: 'Yields $11.39 net profit per unit.',
      },
    ],
    takeaway:
      'To earn $10.00 net profit after paying TikTok fees and creator commissions on a product costing $12.00 to source and ship, the merchant must price the item at a minimum of $28.23 (recommended $29.99).',
  },
  faqs: [
    {
      question: 'What is the official referral fee on TikTok Shop US?',
      answer:
        'The standard referral fee on TikTok Shop US is 6.00% of the total order value plus a $0.30 fixed fee per order. This covers in-app marketplace checkout and payment processing.',
    },
    {
      question: 'Can you dropship on TikTok Shop from China via AliExpress?',
      answer:
        'No. TikTok Shop strictly prohibits slow cross-border dropshipping with 10-to-20 day delivery times for US sellers. Sellers must provide a valid domestic carrier tracking scan (USPS, UPS, FedEx) within 2 business days (48 hours) of order placement. Sellers must hold inventory in US domestic warehouses or 3PL facilities.',
    },
    {
      question: 'What happens if your Late Dispatch Rate (LDR) exceeds 4% on TikTok Shop?',
      answer:
        'If your Late Dispatch Rate exceeds 4.00%, TikTok issues violation penalty points, restricts daily order volume (order throttling), disqualifies your shop from promotional campaigns, and can permanently suspend your seller account.',
    },
    {
      question: 'What is a typical affiliate commission rate for TikTok creators?',
      answer:
        'Merchants typically offer between 10% and 20% commission (with 15% being the standard benchmark) on TikTok Shop’s Open Plan. Higher commission rates incentivize top-tier creators to post dedicated shoppable videos and run live shopping streams.',
    },
    {
      question: 'How do TikTok Shop settlements work for merchants?',
      answer:
        'TikTok Shop settles payments to the merchant’s linked business bank account typically 8 to 14 days after the order is marked as delivered by the carrier, allowing for a standard customer return and dispute window.',
    },
  ],
};

export default tiktokShopDropshippingContent;

