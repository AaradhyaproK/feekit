import type { PageContent } from '../types.ts';

export const etsyCustomApparelContent: PageContent = {
  slug: 'etsy-custom-apparel',
  family: 'ecommerce',
  title: 'Etsy Custom Apparel & Personalized Gift Profit Margin Calculator | FeeKit',
  metaDescription:
    'Calculate Etsy custom apparel profit margins, blank garment wholesale costs, 6.5% transaction fees, $0.20 listing fees, and Etsy Payments. Sourced from official Etsy schedules.',
  h1: 'Etsy Custom Apparel & Personalized Gift Profit Calculator',
  lastVerified: '2026-10-24',
  primarySource: {
    name: 'Etsy Official Fees & Payments Policy',
    url: 'https://www.etsy.com/legal/fees/',
    citation: 'Etsy Official Fees & Payments Policy (Transaction, Listing, and Etsy Payments Schedules).',
  },
  overview:
    'Selling personalized apparel, custom embroidered sweatshirts, and monogrammed bridal party gifts on Etsy represents one of the marketplace’s highest-volume categories. Unlike automated print-on-demand drop shipping, artisan crafters printing or embroidering garments in-house enjoy superior quality control and higher gross margins, but must account for layered platform deductions: Etsy’s 6.5% transaction fee on item price and shipping, $0.20 per-listing auto-renewals, Etsy Payments payment processing (3.0% + $0.25), wholesale blank apparel blanks (Bella+Canvas, Comfort Colors), machine maintenance, and customized proof approval labor. Accurate margin modeling ensures personalization time is adequately compensated.',
  sections: [
    {
      id: 'etsy-fee-deductions-custom-apparel',
      title: 'Etsy Fee Deductions: Transaction, Listing, and Payment Processing',
      body: `Selling custom garments on Etsy incurs four direct platform fees governed by Etsy’s official policies:

1. **Transaction Fee (6.50%)**: Etsy charges **6.50%** on the total amount charged to the buyer, including the garment price, personalized customization add-ons, and shipping fees.
2. **Listing Fee ($0.20)**: Each listing costs **$0.20 USD** for a 4-month active period. When a listing sells from a multi-quantity inventory pool, Etsy automatically renews the listing and charges another $0.20 auto-renewal fee.
3. **Etsy Payments Processing (3.00% + $0.25)**: For US domestic sellers, Etsy Payments deducts **3.00% + $0.25** from the total order amount.
4. **Regulatory Operating Fee & Offsite Ads**: Sellers exceeding $10,000 in trailing 12-month sales are mandatory participants in Etsy Offsite Ads, incurring a **12.00% fee** on orders originating from external search engine or social media ads (or 15.00% for sellers under $10,000 who opt in).`,
    },
    {
      id: 'blank-garments-and-in-house-production',
      title: 'Wholesale Blank Apparel Blanks, Machinery, and Consumables',
      body: `In-house customized apparel makers incur direct manufacturing material expenses:

- **Wholesale Blank Garments**: Sourcing high-quality blanks through wholesale distributors (S&S Activewear, SanMar, AlphaBroder) significantly reduces COGS. Popular industry blanks include the Bella+Canvas 3001 t-shirt ($3.80 to $4.50), Comfort Colors 1717 garment-dyed tee ($6.50 to $7.80), and Gildan 18000 heavy blend fleece sweatshirt ($8.50 to $10.50).
- **Direct-to-Film (DTF) & Embroidery Consumables**: Commercial DTF ink, hot-melt adhesive powder, PET film, and embroidery backing/stabilizer add approximately **$1.20 to $2.50 per garment**.
- **Equipment Depreciation & Overhead**: Commercial embroidery machines (Ricoma, Brother) and industrial heat presses represent significant upfront investments that must be depreciated across garment production volume.`,
    },
    {
      id: 'personalization-labor-and-buyer-proofing',
      title: 'Customization Labor, Mockup Proofs, and Buyer Error Risks',
      body: `Personalized apparel carries distinct operational labor challenges:

- **Design & Proof Approval Time**: Customizing names, dates, or monogram designs takes 5 to 15 minutes per order. Sending digital proofs to buyers can introduce multi-day communication delays that threaten on-time shipping metrics.
- **Handling Customer Personalization Errors**: Buyers frequently make typographical errors in personalization input fields. While Etsy seller protection policies protect shops against buyer-submitted spelling errors if items were produced exactly as submitted, disputes risk negative shop reviews. Clear shop policies stating that personalized orders cannot be returned or refunded are essential.
- **Star Seller Dispatch SLA**: Maintaining Etsy Star Seller status requires shipping 95%+ of orders on time with valid tracking numbers. Custom order processing times must be realistically calibrated in listing shipping profiles.`,
    },
    {
      id: 'commercial-asset-licensing',
      title: 'Intellectual Property, Trademark Rules, and Font Licensing',
      body: `Creating custom designs on Etsy requires rigorous adherence to intellectual property laws:

- **Commercial Font Licensing**: Fonts utilized in personalized text templates (wedding scripts, collegiate lettering) must be backed by commercial desktop and server licenses. Using personal-use-only free fonts violates copyright law and exposes sellers to statutory damages.
- **Trademark Infringement Hazards**: Personalizing apparel with trademarked sports team names, Disney characters, collegiate logos, or celebrity names is strictly prohibited. Etsy routinely deactivates infringing listings upon receipt of DMCA notices from brand attorneys, leading to account suspension.`,
    },
  ],
  workedExample: {
    title: 'Worked Example: $36.00 Custom Embroidered Crewneck Sweatshirt on Etsy',
    scenario:
      'An artisan crafter sells a personalized monogrammed crewneck sweatshirt on Etsy for $36.00 with $5.00 flat-rate customer shipping ($41.00 total order value). The garment is stitched on an in-house commercial embroidery machine.',
    inputs: {
      itemPrice: '$36.00',
      shippingCharged: '$5.00',
      totalCustomerPayment: '$41.00',
      wholesaleBlankSweatshirt: '$9.50 (Gildan 18000)',
      embroideryThreadAndStabilizer: '$1.50 per unit',
      etsyListingRenewalFee: '$0.20',
      etsyTransactionFee: '6.50% on $41.00 ($2.67)',
      etsyPaymentsFee: '3.00% + $0.25 on $41.00 ($1.48)',
      actualUspsGroundPostage: '$5.80 (USPS Ground Advantage 14 oz)',
    },
    steps: [
      {
        label: 'Gross Customer Revenue',
        formula: '$36.00 item + $5.00 shipping',
        amount: '$41.00',
        note: 'Total customer order payment.',
      },
      {
        label: 'Deduct Etsy Listing Fee',
        formula: 'Auto-renewal upon item sale',
        amount: '$0.20',
        note: 'Etsy marketplace catalog fee.',
      },
      {
        label: 'Deduct Etsy Transaction Fee (6.5%)',
        formula: '$41.00 total × 0.065',
        amount: '$2.67',
        note: 'Transaction fee applies to total.',
      },
      {
        label: 'Deduct Etsy Payments Fee (3% + $0.25)',
        formula: '$41.00 × 0.03 + $0.25',
        amount: '$1.48',
        note: 'Payment processing deduction.',
      },
      {
        label: 'Deduct Blank Sweatshirt Cost',
        formula: 'Wholesale blank distributor invoice',
        amount: '$9.50',
        note: 'Garment manufacturing base cost.',
      },
      {
        label: 'Deduct Embroidery Thread & Consumables',
        formula: 'Madeira polyneon thread & tearaway stabilizer',
        amount: '$1.50',
        note: 'Direct production materials.',
      },
      {
        label: 'Deduct Actual USPS Postage',
        formula: 'USPS Ground Advantage commercial rate',
        amount: '$5.80',
        note: 'Net outbound delivery freight.',
      },
      {
        label: 'Total Operating Costs & Fees',
        formula: '$0.20 + $2.67 + $1.48 + $9.50 + $1.50 + $5.80',
        amount: '$21.15',
        note: 'All direct production and platform costs.',
      },
      {
        label: 'Net Profit Per Garment',
        formula: '$41.00 − $21.15',
        amount: '$19.85',
        note: 'Net artisan margin: 48.41% of order value.',
      },
    ],
    takeaway:
      'On a $41.00 personalized sweatshirt order, Etsy platform and payment fees total $4.35 (10.61%). After blank apparel, consumables, and shipping postage, the shop earns $19.85 in net profit (48.41% net margin).',
  },
  workedExampleReverse: {
    title: 'Worked Example: Reverse-Calculating Minimum Retail Price for 50% Profit Margin',
    scenario:
      'An Etsy apparel seller creates custom bridal party t-shirts using premium Comfort Colors blanks ($7.50) with $2.00 in direct printing consumables and $4.50 USPS shipping ($14.00 total production/shipping cost). The seller wants a 50% net profit margin on the total order value.',
    inputs: {
      totalProductionAndShippingCost: '$14.00',
      targetNetMargin: '50.00%',
      etsyTransactionFeeRate: '6.50%',
      etsyPaymentsFeeRate: '3.00% + $0.25',
      listingFee: '$0.20',
    },
    steps: [
      {
        label: 'Combine Fixed Non-Percentage Fees',
        formula: '$14.00 + $0.20 (listing) + $0.25 (payment fixed)',
        amount: '$14.45',
        note: 'Total fixed costs per unit.',
      },
      {
        label: 'Combine Percentage Deductions & Target Margin',
        formula: '1.0 − (0.50 target margin + 0.065 transaction + 0.03 payments)',
        amount: '0.405',
        note: 'Residual divisor multiplier.',
      },
      {
        label: 'Calculate Required Total Order Price',
        formula: '$14.45 ÷ 0.405',
        amount: '$35.68',
        note: 'Minimum total customer charge.',
      },
      {
        label: 'Set Retail Pricing Strategy',
        formula: '$31.68 item price + $4.00 shipping',
        amount: '$35.68',
        note: 'Achieves exact 50% target net margin.',
      },
    ],
    takeaway:
      'To secure a 50% net profit margin after all Etsy fees (6.5% transaction, 3% + $0.25 payment processing, and $0.20 listing), the seller must charge a total price of at least $35.68.',
  },
  faqs: [
    {
      question: 'What combined platform and payment processing percentage does Etsy take on customized apparel orders?',
      answer:
        'For US domestic sellers, Etsy takes a combined platform fee of approximately 9.5% plus $0.45 per order. This includes the 6.5% transaction fee (applied to both item price and shipping), the 3.0% + $0.25 Etsy Payments processing fee, and the $0.20 listing auto-renewal fee.',
    },
    {
      question: 'Which wholesale blank garments offer the highest durability and print clarity for Etsy sellers?',
      answer:
        'Industry-standard blank favorites for Etsy apparel shops include Bella+Canvas 3001 (100% ringspun cotton, ideal for DTG and DTF printing), Comfort Colors 1717 (vintage garment-dyed heavy cotton), and Gildan 18000 (durable 50/50 polyester-cotton fleece ideal for embroidery and heat transfer).',
    },
    {
      question: 'How should personalized gift shops handle buyer spelling mistakes and custom order returns on Etsy?',
      answer:
        'Etsy Seller Protection supports shops against return requests for personalized items if the merchant produced the order exactly according to the buyer’s submitted text. Clearly displaying a store policy stating that custom orders are final sale and sending a confirmation mockup prevents disputes.',
    },
    {
      question: 'What commercial font and graphic licensing is necessary to legally sell custom apparel on Etsy?',
      answer:
        'Sellers must purchase commercial use licenses for all fonts, embroidery digitized files, and vector clipart used in personalized products. Licenses must specifically permit physical commercial end-product sales. Free fonts downloaded for personal use only violate copyright law.',
    },
    {
      question: 'How does Etsy multi-quantity variation billing apply to the $0.20 listing fee when selling apparel in multiple sizes?',
      answer:
        'Creating an apparel listing with multiple size and color variations costs an initial $0.20 listing fee. When a customer purchases one shirt, Etsy automatically renews the listing for $0.20 from the remaining inventory. If a buyer purchases three shirts in a single order, Etsy charges three $0.20 fees ($0.60 total).',
    },
  ],
};

export default etsyCustomApparelContent;
