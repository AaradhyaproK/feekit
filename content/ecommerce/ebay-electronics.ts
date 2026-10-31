import type { PageContent } from '../types.ts';

export const ebayElectronicsContent: PageContent = {
  slug: 'ebay-electronics',
  family: 'ecommerce',
  title: 'eBay Electronics Final Value Fee & Profit Calculator | FeeKit',
  metaDescription:
    'Calculate eBay consumer electronics final value fees (9.35% Store rate vs 13.25%), Promoted Listings ad rates, and net profit margins. Grounded in official eBay fee schedules.',
  h1: 'eBay Electronics Profit & Final Value Fee Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'eBay Official Selling Fees Schedule (Store Subscribers)',
    url: 'https://www.ebay.com/help/selling/fees-credits-invoices/store-fees',
    citation: 'eBay Customer Service Selling Fees Schedule (Consumer Electronics Category Rates & Promoted Listings Standard).',
  },
  overview:
    'Selling consumer electronics on eBay—including refurbished smartphones, audio equipment, gaming consoles, and computer parts—is heavily influenced by eBay’s tiered fee structure: the standard 13.25% + $0.30 Final Value Fee (FVF) for non-store sellers versus the reduced 9.00% to 9.35% FVF for eBay Store subscribers, Promoted Listings Standard ad commissions, shipping insurance, and the eBay Money Back Guarantee return liability. Understanding fee thresholds and serial number fraud prevention is essential for maintaining sustainable margins.',
  sections: [
    {
      id: 'ebay-fee-architecture-electronics',
      title: 'eBay Final Value Fee Architecture: Store Subscribers vs. Non-Store Sellers',
      body: `eBay charges a Final Value Fee (FVF) calculated on the total amount of the sale (including the item price, shipping charged to the buyer, and applicable sales tax):

1. **Non-Store Final Value Fee (13.25% + $0.30)**: Sellers without an active eBay Store subscription incur a standard Final Value Fee of **13.25% plus $0.30** per order on consumer electronics items up to $7,500.
2. **eBay Store Subscriber Discount (9.00% – 9.35% + $0.30)**: Sellers with a Basic, Premium, or Anchor eBay Store subscription receive discounted category rates:
   - Consumer Electronics, Audio Equipment, and Video Games: **9.35%** on the portion of the total sale up to $2,500, dropping to **2.35%** on the portion of the sale over $2,500.
   - Computer Components & Desktops: **9.00%** on the portion up to $2,500, dropping to **2.35%** on the excess.
3. **Insertion Fees**: Store subscribers receive 1,000 to 10,000+ zero insertion fee listings per month, avoiding the standard $0.35 per-listing fee.`,
    },
    {
      id: 'promoted-listings-and-cost-per-sale-ads',
      title: 'Promoted Listings Standard: Cost-Per-Sale Advertising Mechanics',
      body: `eBay's advertising system operates under a performance-based model distinct from pay-per-click:

- **Cost-Per-Sale Model (Promoted Listings Standard)**: Unlike Amazon PPC where sellers pay for clicks regardless of conversion, eBay Promoted Listings Standard charges an ad fee **only when an item sells** within 30 days of a buyer clicking your promoted ad.
- **Dynamic Ad Rates (4% to 12%)**: Sellers designate an ad rate percentage (e.g., 6.50% or the category suggested trend rate). When an ad-attributed sale occurs, eBay deducts that percentage from the total sale price (including shipping) on top of the standard Final Value Fee.
- **Combined Platform Take Rate**: If an eBay Store seller pays a 9.35% FVF + $0.30 and runs an 7.00% Promoted Listings campaign, total eBay platform fees equal **16.35% + $0.30** of gross order value.`,
    },
    {
      id: 'ebay-money-back-guarantee-and-fraud-prevention',
      title: 'The eBay Money Back Guarantee and Return Fraud Prevention',
      body: `Selling electronics on eBay carries elevated return and fraud risks:

- **The eBay Money Back Guarantee (eMBG)**: Buyers are protected if an item does not arrive, is damaged, or is "Not as Described" (INAD). When a buyer files an INAD claim, the seller is legally obligated to provide a pre-paid return shipping label and issue a full refund upon receipt, regardless of stated "No Returns" store policies.
- **Serial Number & IMEI Documentation**: Electronics sellers face "switch-and-return" fraud where dishonest buyers return a broken device with a different serial number. Sellers must photograph and record serial numbers, IMEIs, and MAC addresses on packing slips and listing descriptions to submit valid appeals under eBay Seller Protection.
- **Insured Shipping & Signature Confirmation**: Under eBay policy, any order with a total value of **$750 or more requires signature confirmation upon delivery** to maintain protection against "Item Not Received" claims.`,
    },
    {
      id: 'break-even-roas-ebay-electronics',
      title: 'Unit Margin Modeling: Sourcing Costs, Insured Freight, and Net Profit',
      body: `Accurate electronics modeling requires accounting for insured freight and refurbishing:

- **Wholesale / Buyback Sourcing COGS**: Refurbished consumer tech (e.g., grading B+ smartphones, open-box audio monitors) is typically acquired from corporate liquidations at 50% to 60% of secondary market resale value.
- **Insured Outbound Shipping ($9.00 – $16.00/unit)**: High-value electronics require robust corrugated boxes, anti-static bubble wrap, USPS Priority Mail or UPS Ground tracked shipping, and declared value insurance.
- **Refurbishment and Testing Overhead ($5.00 – $15.00/unit)**: Diagnostic testing software licenses (Phonecheck), replacement batteries, clean power cords, and generic protective retail packaging.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $220.00 Refurbished Tablet Sold by an eBay Store Subscriber',
    scenario:
      'An electronics seller with an eBay Store subscription sells a refurbished 10-inch tablet for $220.00 with free insured shipping. The seller utilizes Promoted Listings Standard at an 7.00% ad rate.',
    inputs: {
      retailSellingPrice: '$220.00',
      shippingChargedToBuyer: '$0.00 (Free Shipping)',
      sourcingAndRefurbishingCogs: '$115.00',
      ebayStoreFinalValueFee: '9.35% + $0.30 ($20.87)',
      promotedListingsAdRate: '7.00% ($15.40)',
      insuredUpsGroundShipping: '$12.50',
      returnReserve: '$6.60 (3% allocation)',
    },
    steps: [
      {
        label: 'Gross Order Revenue',
        formula: 'Customer checkout total',
        amount: '$220.00',
        note: 'Topline revenue deposited.',
      },
      {
        label: 'Deduct eBay Final Value Fee (9.35% + $0.30)',
        formula: '($220.00 × 0.0935) + $0.30',
        amount: '$20.87',
        note: 'Store subscriber category FVF.',
      },
      {
        label: 'Deduct Promoted Listings Ad Fee (7%)',
        formula: '$220.00 × 0.07',
        amount: '$15.40',
        note: 'Pay-per-sale ad commission.',
      },
      {
        label: 'Deduct Sourcing COGS & Diagnostics',
        formula: 'Unit acquisition invoice + diagnostic test',
        amount: '$115.00',
        note: 'Direct product inventory cost.',
      },
      {
        label: 'Deduct Insured Shipping & Packaging',
        formula: 'UPS Ground tracked + signature insurance',
        amount: '$12.50',
        note: 'Fulfillment and transit protection.',
      },
      {
        label: 'Deduct Return Reserve',
        formula: '$220.00 × 0.03',
        amount: '$6.60',
        note: 'Provision for transit damage and returns.',
      },
      {
        label: 'Total Platform & Operational Deductions',
        formula: '$20.87 + $15.40 + $115.00 + $12.50 + $6.60',
        amount: '$170.37',
        note: 'Total expense allocation (77.44%).',
      },
      {
        label: 'Net Seller Cash Profit',
        formula: '$220.00 − $170.37',
        amount: '$49.63',
        note: 'Net margin: 22.56% of retail price.',
      },
    ],
    takeaway:
      'On a $220.00 electronics sale, eBay fees absorb $36.27 (16.49%), sourcing COGS absorbs $115.00 (52.27%), and fulfillment/reserves take $19.10 (8.68%), leaving $49.63 in net profit (22.56% net margin).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Comparing eBay Store FVF (9.35%) vs. Non-Store FVF (13.25%)',
    scenario:
      'A seller evaluates the annual fee savings of subscribing to an eBay Basic Store ($21.95/month, or $263.40/yr) based on selling $50,000 in consumer electronics annually.',
    inputs: {
      annualElectronicsVolume: '$50,000.00',
      nonStoreFvfRate: '13.25%',
      storeFvfRate: '9.35%',
      annualStoreSubscriptionCost: '$263.40',
    },
    steps: [
      {
        label: 'Non-Store Annual Final Value Fees',
        formula: '$50,000.00 × 0.1325',
        amount: '$6,625.00',
        note: 'Fees paid without store subscription.',
      },
      {
        label: 'Store Subscriber Annual Final Value Fees',
        formula: '$50,000.00 × 0.0935',
        amount: '$4,675.00',
        note: 'Discounted category fees.',
      },
      {
        label: 'Gross Fee Savings',
        formula: '$6,625.00 − $4,675.00',
        amount: '$1,950.00',
        note: '3.90% fee reduction across gross volume.',
      },
      {
        label: 'Net Annual Savings After Subscription',
        formula: '$1,950.00 − $263.40',
        amount: '$1,686.60',
        note: 'Net cash profit increase from store subscription.',
      },
    ],
    takeaway:
      'On $50,000 of electronics sales, having an eBay Store subscription saves $1,950.00 in Final Value Fees. After paying the $263.40 annual subscription cost, the seller pockets $1,686.60 in pure net profit savings.',
  },
  faqs: [
    {
      question: 'What is the Final Value Fee for electronics on eBay?',
      answer:
        'For non-store sellers, the Final Value Fee for consumer electronics is 13.25% + $0.30 per order. For sellers with an eBay Store subscription (Basic tier or above), the rate drops to 9.35% + $0.30 on the first $2,500 of the sale, and 2.35% on the portion over $2,500.',
    },
    {
      question: 'How does Promoted Listings Standard work on eBay?',
      answer:
        'Promoted Listings Standard operates on a cost-per-sale model. You choose an ad rate percentage (e.g., 5% to 10%), and eBay charges that fee only if a buyer clicks on your promoted ad and purchases the item within 30 days. You do not pay for impressions or non-converting clicks.',
    },
    {
      question: 'When is signature confirmation required for eBay shipments?',
      answer:
        'Under official eBay Seller Protection policy, signature confirmation upon delivery is mandatory for any order with a total value of $750 or more (including shipping and sales tax). If signature confirmation is not obtained, the seller loses protection against "Item Not Received" claims.',
    },
    {
      question: 'How do you protect against electronics return fraud on eBay?',
      answer:
        'Always record and photograph serial numbers, IMEIs, and MAC addresses on the packing slip and inside the listing photos. Use tamper-evident security warranty labels on device seams, and require signature confirmation on high-value orders.',
    },
    {
      question: 'Does an eBay Store subscription save money on electronics fees?',
      answer:
        'Yes. An eBay Store subscription lowers the electronics Final Value Fee from 13.25% to 9.35% (a 3.90% savings). If you sell more than $6,800 in electronics per year, the fee savings exceed the $21.95/month cost of a Basic Store subscription.',
    },
  ],
};

export default ebayElectronicsContent;

