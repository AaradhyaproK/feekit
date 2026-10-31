import type { PageContent } from '../types.ts';

export const shopifySupplementsContent: PageContent = {
  slug: 'shopify-supplements',
  family: 'ecommerce',
  title: 'Shopify Supplements Profit Margin & cGMP Unit Economics Calculator | FeeKit',
  metaDescription:
    'Calculate Shopify dietary supplements profit margins, cGMP manufacturing costs, lab testing fees, subscription churn, and 2.9% + $0.30 payment fees. Sourced from official Shopify schedules.',
  h1: 'Shopify Dietary Supplements Profit & Subscription LTV Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Shopify Payments Official Schedule',
    url: 'https://www.shopify.com/pricing',
    citation: 'Shopify Official Pricing Plans & Shopify Payments Credit Card Processing Schedule.',
  },
  overview:
    'Selling dietary supplements, nootropics, and wellness formulations on Shopify offers extraordinary gross product margins (75% to 85%) and predictable recurring subscription cash flow. However, nutritional e-commerce brands navigate complex regulatory compliance and capital hurdles: FDA 21 CFR Part 111 current Good Manufacturing Practice (cGMP) regulations, third-party laboratory Certificate of Analysis (COA) testing ($1,500 to $3,500 per batch), large manufacturing minimum order quantities (MOQs), specialized high-risk merchant processing rules, and paid ad acquisition costs across Google Search and Meta. Calculating true unit economics requires modeling subscriber retention curves and monthly churn rates.',
  sections: [
    {
      id: 'cgmp-manufacturing-and-lab-testing',
      title: 'cGMP Contract Manufacturing, Lab Testing, and Landed COGS',
      body: `Nutritional supplements require rigorous production standards that dictate upfront capital commitments:

1. **Contract Manufacturing MOQs**: Domestic FDA-registered cGMP contract manufacturers typically require minimum production runs of **2,500 to 5,000 bottles** per SKU. Unit manufacturing costs for a 60-capsule formula range from **$4.50 to $8.50**, covering raw botanical ingredients, veggie capsules, amber PET/glass bottles, desiccants, induction foil safety seals, and UV-coated labels.
2. **Third-Party Analytical Lab Testing (COA)**: Under FDA cGMP rules, every production batch must undergo finished product testing by an ISO 17025 accredited third-party laboratory. Tests verify active ingredient identity and potency while testing for heavy metals (lead, arsenic, cadmium, mercury) and microbiological contamination (E. coli, Salmonella, yeast, mold), costing **$1,500 to $3,500 per batch**.
3. **Lot Tracking & Expiration Dating**: Formulations must display clear batch lot numbers and 2-year expiration or Best-By dates supported by accelerated stability testing studies.`,
    },
    {
      id: 'fda-and-dshea-regulatory-compliance',
      title: 'FDA 21 CFR Part 111 Compliance and DSHEA Structure-Function Disclaimers',
      body: `Dietary supplements in the United States are governed by the Dietary Supplement Health and Education Act (DSHEA) of 1994:

- **Structure-Function vs. Disease Claims**: Supplement brands may lawfully state that an ingredient "supports healthy joint mobility" or "promotes calm mental focus" (structure-function claims). Brands are strictly prohibited from claiming that a product diagnoses, treats, cures, or prevents any disease (e.g., claiming to cure arthritis or insomnia). Disease claims trigger immediate FDA Warning Letters and FTC enforcement actions.
- **Mandatory DSHEA Disclaimer Verbiage**: Every product label, marketing page, and digital advertisement making structure-function claims must prominently display the exact statutory disclaimer:
  > *"These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."*
- **Ad Platform Restrictions**: Meta, TikTok, and Google Ads strictly regulate supplement advertising, prohibiting before-and-after imagery, unrealistic claims, or ingredients appearing on the FDA dietary supplement ingredient advisory list.`,
    },
    {
      id: 'subscription-ltv-and-churn-modeling',
      title: 'Subscription Economics: Churn Rates and Customer Lifetime Value (LTV)',
      body: `Because initial customer acquisition costs frequently match or exceed the first bottle's retail price, supplement profitability is built on recurring auto-delivery subscriptions:

- **Average Monthly Churn Rate**: High-quality supplement brands experience monthly subscriber churn rates between **8% and 14%**. The inverse represents average customer lifetime in months ($1 \div \text{Churn}$).
- **Customer Lifetime Value (LTV) Formula**:
  $$\text{Subscriber LTV} = \frac{\text{Monthly Recurring Gross Margin}}{\text{Monthly Churn Rate}}$$
- **Numerical Example**: On a $48.00 monthly subscription with $10.00 COGS and $4.50 fulfillment ($33.50 gross contribution) and a 10% monthly churn rate:
  $$\text{Subscriber LTV} = \frac{\$33.50}{0.10} = \$335.00$$
- **Allowable CAC**: With a $335.00 subscriber LTV, a brand can comfortably spend $60.00 to $80.00 to acquire a new subscriber on Meta or Google, achieving an exceptional 4:1 or 5:1 LTV-to-CAC ratio over a 10-month horizon.`,
    },
    {
      id: 'fulfillment-and-merchant-processing',
      title: 'Pick-and-Pack Logistics and Merchant Processing Rules',
      body: `Supplements enjoy highly favorable physical shipping characteristics:

- **Lightweight Shipping**: A standard 30-day capsule bottle weighs 4 to 8 ounces. Shipped via USPS Ground Advantage, domestic shipping costs just **$3.80 to $4.60**, while 3PL pick-and-pack fulfillment adds $2.50 to $3.50.
- **Shopify Payments Processing (2.9% + $0.30)**: Standard dietary supplements are accepted on Shopify Payments at the standard domestic rate of **2.9% + $0.30**. However, ingestible products containing CBD, hemp extracts, or male enhancement claims are prohibited on standard Shopify Payments and require specialized high-risk merchant merchant accounts (such as Authorize.Net or DigiPay) carrying 3.5% to 4.5% processing fees and rolling reserves.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $52.00 Nootropic Focus Formula (60 Capsules) on Shopify',
    scenario:
      'A wellness merchant sells a premium nootropic cognitive support supplement on Shopify for $52.00 (or $44.20 on a 15% off recurring monthly subscription). The unit weighs 6 oz in an amber bottle with tamper-evident induction seal.',
    inputs: {
      retailPrice: '$52.00',
      cGmpUnitManufacturingCogs: '$6.80 (Bottle, capsules, label, safety seal)',
      allocatedLabTestingCoa: '$0.60 per unit ($3,000 test spread over 5,000 units)',
      shopifyPaymentsFee: '2.9% + $0.30 ($1.81)',
      domestic3PlFulfillment: '$3.20 (Pick, pack, padded mailer)',
      outboundShippingPostage: '$4.10 (USPS Ground Advantage under 8 oz)',
      paidCustomerAcquisitionCac: '$26.00 per first-time customer',
    },
    steps: [
      {
        label: 'Gross Retail Revenue',
        formula: 'First-time customer purchase price',
        amount: '$52.00',
        note: 'Single bottle checkout revenue.',
      },
      {
        label: 'Deduct Shopify Payments Fee',
        formula: '$52.00 × 0.029 + $0.30',
        amount: '$1.81',
        note: 'Standard merchant processing.',
      },
      {
        label: 'Deduct Landed cGMP Manufacturing COGS',
        formula: 'Direct bottle production cost',
        amount: '$6.80',
        note: 'Factory invoice per finished unit.',
      },
      {
        label: 'Deduct Third-Party Lab Testing Allocation',
        formula: 'Batch heavy metal and potency testing',
        amount: '$0.60',
        note: 'ISO 17025 COA compliance cost.',
      },
      {
        label: 'Deduct 3PL Fulfillment & Packaging',
        formula: 'Warehouse handling and mailer',
        amount: '$3.20',
        note: 'Logistics pick and pack.',
      },
      {
        label: 'Deduct Outbound Shipping Postage',
        formula: 'USPS Ground Advantage 6 oz parcel',
        amount: '$4.10',
        note: 'Delivered domestic freight.',
      },
      {
        label: 'Pre-Ad Contribution Profit',
        formula: '$52.00 − ($1.81 + $6.80 + $0.60 + $3.20 + $4.10)',
        amount: '$35.49',
        note: 'Pre-ad margin: 68.25% (Break-even ROAS: 1.47).',
      },
      {
        label: 'Deduct Paid Customer Acquisition (CAC)',
        formula: 'Meta / Google Ads ad spend per order',
        amount: '$26.00',
        note: 'First-order advertising cost.',
      },
      {
        label: 'First-Order Net Profit',
        formula: '$35.49 − $26.00',
        amount: '$9.49',
        note: 'Net margin on initial transaction: 18.25%.',
      },
    ],
    takeaway:
      'The brand nets $9.49 (18.25%) on the first sale. When the customer converts to a recurring subscription, future monthly re-orders generate $27.69 in contribution profit each month without any additional ad spend.',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Maximum Allowable CAC from Subscriber LTV',
    scenario:
      'A supplement brand operates an auto-ship subscription model at $45.00/month with $14.50 total recurring COGS and fulfillment ($30.50 monthly gross profit). The monthly subscriber churn rate is 9.0%. The founder requires a 3.5:1 LTV-to-CAC ratio.',
    inputs: {
      monthlySubscriptionPrice: '$45.00',
      monthlyProductAndShippingCost: '$14.50',
      monthlySubscriberChurn: '9.00%',
      targetLtvToCacRatio: '3.50',
    },
    steps: [
      {
        label: 'Calculate Monthly Contribution Margin',
        formula: '$45.00 − $14.50',
        amount: '$30.50',
        note: 'Recurring cash flow per subscriber month.',
      },
      {
        label: 'Calculate Average Subscriber Retention',
        formula: '1 ÷ 0.09 churn',
        amount: '11.11 months',
        note: 'Average active subscription lifespan.',
      },
      {
        label: 'Calculate Total Subscriber Lifetime Value (LTV)',
        formula: '$30.50 × 11.11 months',
        amount: '$338.89',
        note: 'Total gross margin generated per subscriber.',
      },
      {
        label: 'Calculate Maximum Allowable CAC',
        formula: '$338.89 ÷ 3.50',
        amount: '$96.83',
        note: 'Upper ceiling on advertising acquisition spend.',
      },
    ],
    takeaway:
      'Because subscriber retention averages 11 months, the brand can spend up to $96.83 on advertising to acquire a single subscriber and still achieve its target 3.5:1 LTV-to-CAC return over the customer lifecycle.',
  },
  faqs: [
    {
      question: 'What FDA 21 CFR Part 111 cGMP regulations must Shopify dietary supplement brands adhere to?',
      answer:
        'FDA 21 CFR Part 111 establishes Current Good Manufacturing Practice (cGMP) regulations for manufacturing, packaging, labeling, and holding dietary supplements. Brand owners are legally responsible for ensuring products meet specifications for identity, purity, strength, and composition, verified through master manufacturing records and third-party lab testing.',
    },
    {
      question: 'How much does independent third-party lab Certificate of Analysis (COA) testing cost per production lot?',
      answer:
        'Comprehensive third-party laboratory testing by an ISO 17025 accredited facility typically costs between $1,500 and $3,500 per production batch. This testing includes chemical assays for active ingredient potency, heavy metal screening (lead, mercury, cadmium, arsenic), and microbiological pathogen panels.',
    },
    {
      question: 'What mandatory DSHEA disclaimer verbiage must accompany structure-function claims on supplement packaging?',
      answer:
        'Whenever a dietary supplement makes a structure-function claim (e.g., "supports healthy immune response"), the packaging and website must display the exact statutory disclaimer: "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."',
    },
    {
      question: 'How does monthly subscription churn dictate the customer lifetime value (LTV) for nutritional products?',
      answer:
        'Subscriber churn is the percentage of customers who cancel their recurring orders each month. Dividing 1 by the monthly churn rate yields the average subscription lifespan. A 10% churn rate means the average subscriber stays for 10 months, multiplying monthly contribution profit by 10 to determine true customer LTV.',
    },
    {
      question: 'What minimum order quantities (MOQs) do domestic contract supplement manufacturers typically require?',
      answer:
        'Most domestic FDA-registered contract manufacturers require minimum order quantities of 2,500 to 5,000 bottles for custom formulations. While stock white-label formulas can sometimes be purchased in smaller runs (500 to 1,000 units), custom formulations with unique ingredients require standard commercial batch sizes.',
    },
  ],
};

export default shopifySupplementsContent;
