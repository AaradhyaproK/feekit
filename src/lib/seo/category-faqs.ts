/**
 * Category-level FAQ content.
 *
 * The category hub pages ("/tools/sales-tax-calculator", "/tools/stripe-fee-calculator",
 * ...) are the pages that compete for head terms like "sales tax calculator" and
 * "stripe fees calculator". Adding a real, visible FAQ block + FAQPage structured
 * data to each hub makes them eligible for Google FAQ rich results, which
 * measurably lifts CTR on informational queries.
 *
 * Every answer is written to be self-contained and to answer the query directly
 * (answer-first), which is what Google's FAQ guidelines require.
 */

export interface CategoryFaq {
  question: string;
  answer: string;
}

export const CATEGORY_FAQS: Record<string, CategoryFaq[]> = {
  'sales-tax-calculator': [
    {
      question: 'How do I calculate sales tax on a purchase?',
      answer:
        'Multiply the pre-tax subtotal by the combined state and local sales tax rate, then add the result to the subtotal. For example, a $100 item taxed at 8.25% adds $8.25 in tax for a $108.25 total. To work backwards from a tax-inclusive total, divide the total by 1 plus the rate.',
    },
    {
      question: 'What is the sales tax rate in my state?',
      answer:
        'Every US state sets a statewide base rate between 0% and 7.25%, and counties, cities and special districts add local surtaxes on top. Delaware, New Hampshire and Oregon have 0% combined sales tax, Alaska permits local taxes up to 7.5%, and combined rates reach 12.00% in parts of Louisiana. Use the state calculators below for exact rates.',
    },
    {
      question: 'Does sales tax apply to online purchases?',
      answer:
        'Yes. Under the South Dakota v. Wayfair ruling, remote sellers must collect destination-based sales tax in states with a sales tax once they cross economic nexus thresholds, even without a physical warehouse or store in that state. Alaska also collects local sales taxes through the Alaska Remote Seller Sales Tax Commission.',
    },
    {
      question: 'What is the economic nexus threshold for online sellers?',
      answer:
        'Most US states apply a $100,000 annual gross sales threshold (often paired with a 200-transaction rule, though many states have dropped the transaction count test). California and Texas set a $500,000 sales threshold with no transaction count test, while New York uses $500,000 and 100 transactions.',
    },
    {
      question: 'How do I extract sales tax from a gross total?',
      answer:
        'Divide the tax-inclusive total by 1 plus the sales tax rate. A $108.25 invoice taxed at 8.25% has a net subtotal of $100.00 and $8.25 of tax. This reverse calculation is what you use to verify vendor invoices and reconcile marketplace payouts.',
    },
    {
      question: 'Are digital products and SaaS taxable?',
      answer:
        'Taxability depends on the state. Many states tax SaaS subscriptions, software downloads and digital goods as electronically delivered property, while major states such as California exempt hosted SaaS when no tangible media is transferred. Each state calculator guide details current product rules and revenue department citations.',
    },
  ],
  'vat-calculator': [
    {
      question: 'How do I calculate VAT?',
      answer:
        'To add VAT, multiply the net amount by 1 plus the VAT rate. To extract VAT from a gross total, divide the gross amount by 1 plus the VAT rate and subtract the net. A £120 invoice at 20% UK VAT contains £100 of net value and £20 of VAT.',
    },
    {
      question: 'What is the standard VAT rate in the UK?',
      answer:
        'The standard UK VAT rate is 20%, the reduced rate is 5%, and there is a zero rate on qualifying essentials such as most unprepared food, books and children clothing. Most VAT-registered businesses submit quarterly returns through HMRC Making Tax Digital.',
    },
    {
      question: 'When is reverse charge VAT applied?',
      answer:
        'Reverse charge applies when a VAT-registered business buys B2B services from a VAT-registered supplier in another EU member state (Article 196 EU VAT Directive). The supplier issues a 0% VAT invoice with the customer VIES-verified VAT ID, and the buyer accounts for output and input VAT in their own return.',
    },
    {
      question: 'Do I need to register for VAT in other EU countries?',
      answer:
        'For B2C cross-border sales across the EU, a €10,000 EU-wide threshold applies before destination-country VAT must be charged. Businesses can simplify multi-country B2C reporting by registering once for the EU One-Stop Shop (OSS) rather than holding separate VAT registrations in every member state.',
    },
    {
      question: 'Is VAT charged on digital services sold to the EU?',
      answer:
        'Yes. Digital services sold to EU consumers are taxed in the customer country under place-of-supply rules, reported via OSS (or local registration). Standard EU VAT rates currently range from 17% in Luxembourg to 27% in Hungary.',
    },
    {
      question: 'What is the VAT registration threshold in the UK?',
      answer:
        'The UK VAT registration threshold is £90,000 of taxable turnover over any rolling 12-month period (and the deregistration threshold is £88,000). Once you exceed £90,000, you must register with HMRC and charge VAT on taxable supplies.',
    },
  ],
  'stripe-fee-calculator': [
    {
      question: 'How much does Stripe charge per transaction?',
      answer:
        'Stripe charges 2.9% + $0.30 for US domestic online cards, 1.5% + 20p for UK domestic cards, and 1.5% + €0.25 for standard European EEA consumer cards. In the US, international cards add 1.5%, currency conversion adds 1.0%, and manually keyed-in cards add 0.5% (total 3.4% + $0.30).',
    },
    {
      question: 'How much does Stripe charge on a $100 payment?',
      answer:
        'A $100 US domestic card payment costs $3.20 in Stripe fees (2.9% + $0.30), leaving $96.80 net. On UK domestic cards (1.5% + 20p), a £100 payment costs £1.70 leaving £98.30, and on European EEA cards (1.5% + €0.25), a €100 payment costs €1.75 leaving €98.25.',
    },
    {
      question: 'What is the effective Stripe fee percentage?',
      answer:
        'The effective fee rate is total fees divided by the transaction amount. On a $100 US payment the 2.9% + $0.30 schedule works out to 3.20% effective. On a $1,000 payment it drops to 2.93%, and on a $10 payment it rises to 5.90% because of the $0.30 fixed component.',
    },
    {
      question: 'How do I work out what to charge to receive a set amount?',
      answer:
        'Add the fixed fee to your desired net payout, then divide by 1 minus the percentage fee rate: Gross = (Net + Fixed) / (1 - Rate). To receive exactly $1,000.00 after a 2.9% + $0.30 US card fee, invoice $1,030.18.',
    },
    {
      question: 'Does Stripe charge a monthly fee or require a minimum volume?',
      answer:
        'No. Standard Stripe accounts have no monthly fee, no setup fee and no minimum processing volume. Businesses processing large volumes can also negotiate custom interchange-plus pricing directly with Stripe.',
    },
    {
      question: 'What are Stripe ACH direct debit fees?',
      answer:
        'Stripe ACH direct debit in the US charges 0.8% per transaction, capped at $5.00 per payment. ACH is significantly cheaper than credit card processing for large B2B invoices but takes 3 to 5 business days to clear.',
    },
  ],
  'paypal-fee-calculator': [
    {
      question: 'How much does PayPal charge for a transaction?',
      answer:
        'PayPal charges 3.49% + $0.49 for US commercial Checkout and Guest Checkout transactions, 2.99% + $0.49 for standard goods and services, and 2.29% + $0.09 for in-person QR code payments. PayPal UK charges 2.9% + 30p for standard domestic transactions.',
    },
    {
      question: 'How much does PayPal charge on a $100 transaction?',
      answer:
        'At the US commercial rate of 3.49% + $0.49, a $100 PayPal transaction costs $3.98 in fees and leaves $96.02. At the standard goods and services rate of 2.99% + $0.49, a $100 payment costs $3.48 and leaves $96.52.',
    },
    {
      question: 'Are PayPal micropayments cheaper?',
      answer:
        'PayPal micropayments are priced at 4.99% + $0.09, trading a higher percentage for a much smaller fixed fee than $0.49. That makes micropayments cheaper for small digital transactions under roughly $20.',
    },
    {
      question: 'How much does PayPal charge for international transactions?',
      answer:
        'International PayPal payments add a 1.50% cross-border surcharge on top of the domestic percentage rate, plus a 3% to 4% currency conversion spread when converting currencies. Combined international commercial processing often approaches 5% to 8% total.',
    },
    {
      question: 'Does PayPal charge a fee for invoicing and payment links?',
      answer:
        'Yes. PayPal Invoicing costs 3.49% + $0.49 when paid via PayPal or Venmo wallet, or 2.99% + $0.49 when settled directly with a credit or debit card in the US.',
    },
  ],
  'freelance-rate-calculator': [
    {
      question: 'How do I calculate my freelance hourly rate?',
      answer:
        'Add your target annual net income, annual business overhead and income tax reserve, then divide by realistic annual billable hours (typically 1,000 to 1,200 hours after admin and PTO). For a $90,000 net target, $12,000 in overhead and 1,200 billable hours, you must bill significantly above $85/hour once taxes are factored in.',
    },
    {
      question: 'How much do freelancers actually pay in self-employment tax?',
      answer:
        'Under the IRS Self-Employment Contributions Act (SECA), 92.35% of net freelance earnings is subject to the 15.3% SE tax rate: 12.4% for Social Security up to the 2026 statutory wage base cap of $184,500, plus 2.9% Medicare on all net earnings (with an extra 0.9% Additional Medicare surtax above threshold limits).',
    },
    {
      question: 'Should I charge a day rate or an hourly rate?',
      answer:
        'Day rates suit defined-scope projects with predictable deliverables, while hourly rates suit open-ended work and ongoing retainers. Many freelancers quote a day rate equal to 8 times their hourly rate.',
    },
    {
      question: 'How do I set aside money for quarterly estimated taxes?',
      answer:
        'Most US 1099 contractors set aside 25% to 30% of gross profits in a dedicated tax account and submit four IRS Form 1040-ES vouchers each year. Safe harbor penalties are generally avoided when you pay at least 90% of current-year tax or 100% of prior-year tax (110% for higher earners).',
    },
    {
      question: 'What is the average freelance rate by role?',
      answer:
        'Rates vary widely by specialty and seniority. Typical 2026 ranges run $75 to $150+ per hour for senior software engineers, $65 to $130 for UX designers, $50 to $100 for technical copywriters and $110 to $200 for AI and machine-learning engineers. Use the role calculators above for a defensible rate.',
    },
  ],
  'ecommerce-profit-calculator': [
    {
      question: 'How do I calculate ecommerce profit margin?',
      answer:
        'Subtract landed COGS, payment processing fees, fulfillment, shipping, advertising spend and expected returns from revenue, then divide the remainder by revenue. A $50.00 product with $14.00 COGS, $3.90 in fees and $18.00 in ads nets $14.10, or a 28.2% net margin.',
    },
    {
      question: 'What is a good break-even ROAS?',
      answer:
        'Break-even ROAS equals 1 divided by your pre-ad contribution margin. At a 40% contribution margin, break-even ROAS is 2.50x. Any ad campaign delivering a lower ROAS loses money on every incremental order.',
    },
    {
      question: 'What are Amazon FBA referral fees?',
      answer:
        'Amazon referral fees are typically 8% to 15% of total sales price depending on category (for example, 15% for most general categories, 8% for consumer electronics, and 17% for most apparel). Per-unit FBA pick, pack and weight fulfillment fees are charged separately.',
    },
    {
      question: 'How do I price a dropshipping product?',
      answer:
        'Total your supplier unit cost, shipping, processing percentage, target ad CPA and desired net profit margin. For a product costing $20.00 landed with $8.00 ad spend and 3.2% processing overhead, pricing at $49.99 protects roughly $20.09 before fixed overhead.',
    },
    {
      question: 'How much should I allow for returns and refunds?',
      answer:
        'Online retail return rates vary by vertical, often running 5% to 12% for apparel, 3% to 6% for general merchandise and under 3% for consumables. Modeling a return allowance prevents overestimating profitable ad spend.',
    },
  ],
  'square-fee-calculator': [
    {
      question: 'How much does Square charge per transaction?',
      answer:
        'Square Free charges 2.6% + 15¢ for in-person contactless, chip and swipe payments, 3.3% + 30¢ for online store checkout and invoices, and 3.5% + 15¢ for manually keyed-in cards. Square Plus ($29/month) lowers the online checkout rate to 2.9% + 30¢.',
    },
    {
      question: 'Is Square cheaper than Stripe?',
      answer:
        'For in-person payments on a $100 ticket, Square Free (2.6% + 15¢) and Stripe Terminal (2.7% + 5¢) both cost exactly $2.75. Stripe Terminal is cheaper on small tickets under $100 because of its 5¢ fixed fee, while Square is cheaper on tickets above $100. For online checkout, Stripe (2.9% + 30¢) beats Square Free (3.3% + 30¢).',
    },
    {
      question: 'Does Square have a monthly fee?',
      answer:
        'No. The Square Free plan has no monthly subscription fee, no setup cost and no long-term contract. Paid tiers such as Square Plus ($29/month per location) add advanced retail or dining features alongside lower online rates.',
    },
    {
      question: 'How does Square price restaurant and hospitality payments?',
      answer:
        'Square for Restaurants Free ($0/month) lowers in-person card processing to 2.6% + 10¢ per transaction. Square for Restaurants Plus ($69/month per location) drops the in-person rate further to 2.5% + 10¢.',
    },
  ],

  // ---------------------------------------------------------------------------
  // The categories below are the "head term" hubs. Each one previously had no
  // hub FAQ of its own and silently fell back to its flagship tool's FAQs,
  // which produced a byte-identical FAQPage schema on the hub and the leaf
  // page - a duplicate-content signal that Google resolves by ignoring one
  // of the two.
  // ---------------------------------------------------------------------------
  'authorize-net-calculator': [
    {
      question: 'How much does Authorize.Net cost per transaction?',
      answer:
        'Authorize.Net All-in-One charges 2.9% + $0.30 per transaction with no additional monthly gateway fee. That is the same headline rate as Stripe US online checkout, but the two products are not equivalent: Authorize.Net is built for merchants who want their own merchant account and a custom gateway, while Stripe bundles payment processing, fraud tooling and developer APIs into one platform.',
    },
    {
      question: 'What is the difference between Authorize.Net All-in-One and Payment Gateway Only?',
      answer:
        'All-in-One bundles Authorize.Net processing with the gateway for 2.9% + $0.30 per transaction. Payment Gateway Only lets you keep your own merchant account and pays a $25 monthly gateway fee plus $0.10 per transaction, with processing charged separately by your acquirer. Gateway Only costs more per transaction at low volume but gives you control over your acquiring relationship and statement descriptor.',
    },
    {
      question: 'Does Authorize.Net charge a setup or monthly fee?',
      answer:
        'All-in-One has no monthly gateway fee. Payment Gateway Only has a $25 monthly gateway fee. Authorize.Net also charges a $0.10 daily batch settlement fee if you settle transactions daily rather than using its standard settlement schedule.',
    },
    {
      question: 'Is Authorize.Net better than Stripe for a small business?',
      answer:
        'For a business that already has a merchant account, a fraud team, or a custom ERP or EDI integration, Authorize.Net often costs less because the gateway fee is capped and the network transaction fee is not marked up. For a developer building a new product, Stripe is usually faster to ship because the APIs, dashboard, and dispute handling are all in one place. Run both against your own monthly volume before deciding.',
    },
  ],
  'canada-sales-tax': [
    {
      question: 'How do I calculate GST, HST, PST and QST in Canada?',
      answer:
        'Canadian sales tax depends on the province of supply. Five provinces levy a single Harmonized Sales Tax (HST): 13% in Ontario, 14% in Nova Scotia (reduced from 15% on 1 April 2025), and 15% in New Brunswick, Prince Edward Island and Newfoundland and Labrador. Three stack 5% federal GST with a separate provincial sales tax: British Columbia (5% GST + 7% PST = 12%), Saskatchewan (5% GST + 6% PST = 11%), Manitoba (5% GST + 7% RST = 12%), while Quebec stacks 5% GST and 9.975% QST (14.975% combined). Alberta and the three territories charge only the 5% federal GST with 0% provincial tax. Multiply the net amount by the combined rate to add tax, or divide the gross total by 1 plus the rate to extract it.',
    },
    {
      question: 'What is the GST/HST registration threshold for small businesses in Canada?',
      answer:
        'The general CRA small-supplier threshold is $30,000 CAD in total taxable revenues over four consecutive calendar quarters or within a single calendar quarter ($50,000 for public service bodies). Once you cross the threshold, you must register for a GST/HST account and collect tax on taxable supplies. Taxi, limousine and commercial ride-share operators must register from their first dollar regardless of revenue.',
    },
    {
      question: 'Do I need to charge sales tax if I sell online from outside Canada?',
      answer:
        'Generally yes. Non-resident vendors supplying digital goods, SaaS or services to Canadian consumers without a physical presence must register under the simplified GST/HST regime once Canadian taxable sales exceed $30,000 CAD over 12 months. Marketplace facilitators such as Amazon, Shopify and Etsy collect and remit tax on marketplace-facilitated orders, while you remain responsible for direct website sales.',
    },
    {
      question: 'How do input tax credits work for a Canadian GST/HST registrant?',
      answer:
        'You charge GST/HST on your taxable sales and claim input tax credits (ITCs) on your Form GST34 return for GST/HST paid on eligible commercial purchases. The net amount remitted is output tax collected minus eligible ITCs paid; if your ITCs exceed output tax, you receive a refund.',
    },
    {
      question: 'What is the correct sales tax rate for a Canadian province?',
      answer:
        'Use the province calculators on this page for current combined rates: Ontario 13% HST, Nova Scotia 14% HST (effective 1 April 2025), New Brunswick 15% HST, Prince Edward Island 15% HST, Newfoundland and Labrador 15% HST, Quebec 14.975% GST + QST, British Columbia 12% GST + PST, Manitoba 12% GST + RST, Saskatchewan 11% GST + PST, and Alberta 5% GST only.',
    },
  ],
  'venmo-fee-calculator': [
    {
      question: 'How much does Venmo Business charge per transaction?',
      answer:
        'Venmo Business charges 1.90% + $0.10 for in-person QR code payments, 2.29% + $0.10 for Tap to Pay on a phone, and 3.49% + $0.49 for online checkout. The QR rate is the cheapest card acceptance in the US market because the customer scans a code from your device, so there is no physical card read.',
    },
    {
      question: 'Is Venmo Business free to set up?',
      answer:
        'Yes. There is no monthly fee for a Venmo Business account, no setup cost and no minimum processing volume. The only costs are the per-transaction rates above, which are charged on successful card or wallet transactions.',
    },
    {
      question: 'When should a business use Venmo Business rather than PayPal?',
      answer:
        'Venmo Business wins on in-person QR acceptance at 1.90% + $0.10, which is materially cheaper than PayPal in-person QR at 2.29% + $0.09 for small amounts and cheaper than every major processor on a flat-percentage basis. PayPal is stronger for international payments, buyer protection, dispute handling and consumer trust. Many small merchants run both and route each customer to the cheaper option.',
    },
    {
      question: 'Does Venmo Business support refunds and chargebacks?',
      answer:
        'Yes. You can issue full or partial refunds from the Venmo Business dashboard and funds are returned to the customer the same way they paid. Disputes and chargebacks follow standard card network rules, and Venmo applies its standard dispute fee when a customer claims a transaction was unauthorized or a service was not delivered.',
    },
  ],
  'gumroad-fee-calculator': [
    {
      question: 'How much does Gumroad charge?',
      answer:
        'Gumroad charges a flat 10% platform fee plus $0.50 on every direct sale, on top of card processing of approximately 2.9% + $0.30. Sales that originate from the Gumroad Discover marketplace carry a single 30% fee that already includes payment processing. On a $50 direct sale the total Gumroad cost is $5.00 + $0.50 + $1.45 + $0.30, which is $7.25 or 14.5%.',
    },
    {
      question: 'What is the difference between a Gumroad direct sale and a Discover sale?',
      answer:
        'A direct sale is one where the customer lands on your own checkout page, and Gumroad charges 10% + $0.50 plus card processing. A Discover sale is traffic that Gumroad itself sends from its marketplace, and Gumroad takes a single 30% fee that includes processing. Direct sales are far cheaper, so the economics of building your own audience versus relying on marketplace discovery is the single biggest driver of Gumroad profitability.',
    },
    {
      question: 'Does Gumroad handle sales tax and VAT for me?',
      answer:
        'Yes. Gumroad acts as a merchant of record for digital products, which means it calculates, collects and remits sales tax, VAT and GST on your behalf in every jurisdiction where it is required. This removes the single largest compliance burden for a creator selling digital goods internationally, though it also means you never handle the tax liability directly.',
    },
    {
      question: 'Is Gumroad worth it for a product priced under $10?',
      answer:
        'Usually not. The 10% + $0.50 platform fee plus $0.30 card processing means roughly $0.80 of fixed cost on every transaction. On a $5 product that is a 16% fixed drag before any percentage fee applies. Low-priced digital products generally need a lower-fee platform or a lower percentage rate to stay viable.',
    },
  ],
  'lemon-squeezy-calculator': [
    {
      question: 'How much does Lemon Squeezy charge?',
      answer:
        'Lemon Squeezy charges a 5% flat platform fee plus $0.50 per successful order. Because Lemon Squeezy is a merchant of record, that single fee includes global sales tax and VAT collection and remittance, which is why it is so much lower than a conventional payment processor that also leaves you to handle VAT yourself.',
    },
    {
      question: 'What is a merchant of record and why does it matter?',
      answer:
        'A merchant of record is the legal seller of the product. Lemon Squeezy contracts with your customer, collects the money, applies the correct sales tax or VAT for the customer country, remits it to the tax authority, and then pays you your share. That eliminates cross-border VAT registration, import VAT and sales tax nexus exposure for digital products.',
    },
    {
      question: 'How do Lemon Squeezy fees compare with Gumroad?',
      answer:
        'On a $50 direct sale, Lemon Squeezy costs $3.00 (5% + $0.50) with tax and VAT included. Gumroad costs $7.25 (10% + $0.50 plus roughly 2.9% + $0.30 in card processing). Gumroad adds a 30% marketplace rate for Discover traffic, while Lemon Squeezy applies the same 5% to every sale. Lemon Squeezy is generally cheaper for direct sales; Gumroad can be competitive if a meaningful share of your traffic comes from its marketplace.',
    },
    {
      question: 'Does Lemon Squeezy support subscriptions?',
      answer:
        'Yes. Lemon Squeezy supports recurring subscription billing, dunning for failed payments, free trials and one-time purchases from the same product. Because it is a merchant of record, subscription VAT is also calculated and remitted per customer jurisdiction rather than by you.',
    },
  ],
  'shopify-fee-calculator': [
    {
      question: 'How much does Shopify Payments charge?',
      answer:
        'Shopify Payments online card rates step down by plan tier: 2.9% + $0.30 on Basic, 2.7% + $0.30 on Grow, 2.5% + $0.30 on Advanced, and custom pricing (typically from around 2.25% + $0.30) on Shopify Plus, with in-person POS card rates starting around 2.4% to 2.6% + $0.10. Rates vary by country and card type, so use the calculator selector for your store region.',
    },
    {
      question: 'What happens if I use a third-party payment gateway with Shopify?',
      answer:
        'If you use an external gateway instead of Shopify Payments, Shopify applies an additional third-party transaction fee on top of your processor rate: 2% on Basic, 1% on Grow, 0.6% on Advanced and 0.2% on Shopify Plus. On a $50 order that extra fee is $1.00 on Basic, which is why most merchants who qualify use Shopify Payments directly.',
    },
    {
      question: 'Do I still pay the Shopify subscription if I use Shopify Payments?',
      answer:
        'Yes. The Shopify plan fee is separate from the payment processing rate. A merchant on the Basic plan pays the monthly subscription plus the transaction fee on every order. Shopify Payments does not have a separate additional monthly charge, which is why switching from a third-party gateway is worth calculating carefully against the penalty rate.',
    },
    {
      question: 'Which Shopify plan should a new merchant choose?',
      answer:
        'For a new merchant under roughly $2,000 a month in revenue, Basic is usually sufficient. Once online sales are consistently high enough that the reduced transaction rate on Grow pays for the higher subscription, upgrading is worth it. Add a third-party processor only if you need payment methods Shopify Payments does not support in your country.',
    },
  ],
  'gateway-comparator': [
    {
      question: 'Which payment processor has the lowest fees?',
      answer:
        'It depends entirely on the transaction profile. At low ticket sizes the fixed component dominates, so Stripe Terminal at 2.7% + $0.05 and Venmo Business QR at 1.90% + $0.10 beat every percentage-based processor. At higher ticket sizes the percentage dominates, so Stripe at 2.9% + $0.30 and Square online at 3.3% + $0.30 are close, and interchange-plus pricing wins outright above roughly $100 a transaction.',
    },
    {
      question: 'How do I compare two processors fairly?',
      answer:
        'Use the same transaction amount and the same customer mix for both. A fair comparison needs the percentage rate, the fixed fee, the currency conversion spread, the international card surcharge, and the per-transaction gateway or platform fee all applied to identical inputs. The comparator on this page does exactly that for Stripe, PayPal and Square side by side.',
    },
    {
      question: 'Is Square cheaper than Stripe for in-person payments?',
      answer:
        'It depends on the ticket size. Square Free charges 2.6% + 15¢ in person, while Stripe Terminal charges 2.7% + 5¢. On a $100 ticket both come to $2.75. On a $20 ticket Stripe Terminal costs $0.59 against Square at $0.67. On a $500 ticket Square costs $13.15 against Stripe Terminal at $13.50.',
    },
    {
      question: 'Should I negotiate custom pricing with a processor?',
      answer:
        'Yes, once you process enough volume to have leverage. Payment processors routinely offer lower rates for predictable monthly volume, and interchange-plus pricing is often available well below the published flat rates. Use this comparator to establish your baseline rate first, then ask what the volume-based rate would be.',
    },
  ],
  'profit-margin-calculator': [
    {
      question: 'How do I calculate profit margin?',
      answer:
        'Profit margin is profit divided by revenue, expressed as a percentage. Subtract every cost that scales with sales - cost of goods, payment processing, fulfilment, shipping, and variable ad spend - from revenue, then divide by revenue. The distinction that matters is gross margin, which stops before overhead, versus net margin, which includes overhead. A $50 product with $14 COGS and $18 in ads has a 36% gross margin but a much thinner net margin once overhead is allocated.',
    },
    {
      question: 'What is the difference between markup and margin?',
      answer:
        'Markup is calculated on cost, margin is calculated on revenue. A $20 cost sold for $40 is a 100% markup, but only a 50% margin. Because the two use different bases, a 50% margin is the same thing as a 100% markup. Pricing decisions that mix the two up are the most common cause of businesses that look profitable on a spreadsheet and lose money in the bank.',
    },
    {
      question: 'What is a good net profit margin for a small business?',
      answer:
        'Net margins vary enormously by model. Healthy benchmarks: 10% or more for most retail and ecommerce operations, 15% to 30% for professional services, 40% to 60% for software, and 5% to 15% for wholesale distribution. What matters is a margin that covers your overhead and the return you need on capital, sustained across a full year rather than a good month.',
    },
    {
      question: 'How do I improve profit margin without raising prices?',
      answer:
        'Attack the cost line in order of size. Renegotiate supplier cost and landed COGS first, then reduce payment processing fees, then cut return and refund rates, then improve ad efficiency. On a $50 product with $14 COGS, cutting COGS to $12 adds 4 percentage points of margin - more than shaving a discount off the sale price would, and it does not reduce conversion.',
    },
  ],
  'break-even-calculator': [
    {
      question: 'How do I calculate my break-even point?',
      answer:
        'Break-even units = fixed costs divided by contribution margin per unit, where contribution margin per unit is price minus all variable costs. With $15,000 of monthly fixed costs and a $40 contribution margin per unit, you need 375 units per month. In revenue terms, break-even revenue = fixed costs divided by the contribution margin percentage.',
    },
    {
      question: 'What counts as a fixed cost versus a variable cost?',
      answer:
        'Fixed costs are incurred whether you sell anything or not - rent, salaries, software subscriptions, insurance, and loan payments. Variable costs scale with volume - product cost, payment processing fees, shipping, packaging, and per-sale ad spend. Misclassifying a variable cost as fixed is the most common modelling error, and it makes break-even look far more reachable than it is.',
    },
    {
      question: 'What is break-even ROAS for paid advertising?',
      answer:
        'Break-even ROAS is 1 divided by your pre-ad contribution margin. At a 40% contribution margin, break-even ROAS is 2.50x. A campaign running below that threshold loses money on every incremental order, however good the revenue numbers look.',
    },
    {
      question: 'Should I include debt repayments in fixed costs?',
      answer:
        'Yes, if you want a cash break-even rather than an accounting one. A business that is profitable on an accrual basis but cannot service its debt is not sustainable. Many founders run both versions: an accounting break-even that proves the model works and a cash break-even that proves the business can survive its obligations.',
    },
  ],
  'roi-calculator': [
    {
      question: 'How do I calculate ROI?',
      answer:
        'ROI = (gain from investment - cost of investment) divided by cost of investment, expressed as a percentage. An investment of $25,000 that returns $45,000 produces a $20,000 net gain, which is an 80% ROI. The number is only meaningful alongside the timeframe, which is why the calculator also reports the annualized return (CAGR) so a one-year and a five-year investment can be compared directly.',
    },
    {
      question: 'What is the difference between ROI and NPV?',
      answer:
        'ROI is a simple ratio that ignores the time value of money and the timing of cash flows. Net present value discounts every future cash flow back to today at a required rate of return and expresses the result as a single dollar figure. For a single investment with cash flows arriving over several years, NPV is the more rigorous measure; for comparing similar short-term projects, ROI is easier to read.',
    },
    {
      question: 'How long should I run a marketing campaign before judging ROI?',
      answer:
        'Long enough to gather a statistically meaningful number of conversions. For a high-ticket product, a campaign may need 30 to 60 days and a meaningful spend before the return data is reliable, because early results are dominated by noise. Judging a campaign on the first week is the most common way to kill campaigns that would have been profitable.',
    },
    {
      question: 'What ROI should I target for a small business?',
      answer:
        'It depends on how long the payback takes. A 100% ROI that pays back in 90 days is a far better use of capital than a 300% ROI that takes four years, because the cash recycles faster. As a practical rule, aim for a payback period well inside your cash runway, then compare the resulting monthly ROI against the next best use of the same capital.',
    },
  ],
  'quarterly-tax-calculator': [
    {
      question: 'How do I calculate quarterly estimated taxes?',
      answer:
        'Divide your expected annual net profit by four and pay that amount with each IRS Form 1040-ES voucher, using the IRS safe-harbour rule to avoid a penalty. You owe at least 90% of your current-year tax, or 100% of your prior-year tax (110% if your prior-year AGI was more than $150,000). The deadlines are 15 April, 15 June, 15 September and 15 January.',
    },
    {
      question: 'Do I have to pay quarterly estimated taxes?',
      answer:
        'Only if you expect to owe $1,000 or more in tax for the year after withholding and credits. If you are a full-time employee with tax already withheld from a W-2 and no other income, you usually do not. Self-employed freelancers, contractors and anyone with rental income, investment income or a side business generally do.',
    },
    {
      question: 'How much should I set aside for self-employment tax?',
      answer:
        'Most 1099 contractors set aside 25% to 30% of gross profit. The figure reflects the 15.3% Self-Employment Contributions Act tax on 92.35% of net earnings, plus federal income tax, plus state income tax where it applies. If you set aside 30% and your actual liability is 24%, the difference is a bonus rather than a shortfall.',
    },
    {
      question: 'What happens if I underpay my quarterly estimated taxes?',
      answer:
        'You may owe a penalty. The IRS generally waives it if you paid at least 90% of the current-year tax or 100% of the prior-year tax, or if your income fell because of a casualty, illness or business loss. The penalty is computed per quarter on the shortfall, so it can accumulate quickly across four underpayments.',
    },
  ],
  'uk-ir35-calculator': [
    {
      question: 'What is IR35 and does it affect me?',
      answer:
        'IR35 is the UK tax legislation that determines whether a contractor is taxed as a self-employed person or as an employee. It applies when a worker is engaged through a limited company, or when the client, the worker and the work sit in a chain of subcontractors. A limited company contractor whose fees come from a public-sector or connected client is the classic case.',
    },
    {
      question: 'What is the difference between Inside IR35 and Outside IR35?',
      answer:
        'Outside IR35 means the contractor keeps their limited company status and pays corporation tax on profit, then extracts money via dividends taxed at dividend rates. Inside IR35 means the contractor is treated as an employee for tax purposes, so the limited company must deduct PAYE and National Insurance from every payment before paying the contractor. Outside IR35 is almost always worth more, but it carries the risk of a status reclassification.',
    },
    {
      question: 'How much is deducted under Inside IR35?',
      answer:
        'PAYE income tax is deducted across your UK tax bands alongside Employee Class 1 National Insurance at 8% on earnings between the £12,570 primary threshold and the £50,270 upper earnings limit, plus 2% on earnings above £50,270. When engaged via an umbrella company, Employer Class 1 National Insurance (15% above the secondary threshold) and the 0.5% Apprenticeship Levy are also accounted for from the gross assignment rate before computing taxable pay.',
    },
    {
      question: 'How can I tell if a contract is Inside or Outside IR35?',
      answer:
        'Look at who your client is and how the work is contracted. Work for a public sector body, a connected charity, or a client whose own contract requires IR35 status determination is Inside IR35. A genuinely independent contractor providing their own equipment, bearing financial risk, and working for multiple unrelated clients is usually Outside IR35. When it is unclear, a specialist IR35 determination report is worth the cost.',
    },
  ],
  'wise-vs-stripe': [
    {
      question: 'Is Wise cheaper than Stripe for international payments?',
      answer:
        'For cross-border payouts, usually yes. Wise charges a base international transfer fee of roughly 0.43% with no markup on the exchange rate, while Stripe adds 1.5% for international cards plus 1.0% for currency conversion on card payments. For domestic card payments in the same currency, Stripe at 2.9% + $0.30 is usually cheaper because Wise is designed for cross-border transfers rather than card acceptance.',
    },
    {
      question: 'What is the difference between Stripe and Wise for a business?',
      answer:
        'They solve different problems. Stripe is a payment processor: it accepts cards, handles fraud screening, and pays you out. Wise is a cross-border transfer service: it moves money between currencies at a mid-market rate with a low fixed fee. Most international ecommerce businesses use both - Stripe to take the customer payment and Wise to move the balance home.',
    },
    {
      question: 'How do I compare the true cost of an international payment?',
      answer:
        'Compare the amount that actually lands in your account. For a card processor that means the percentage fee plus the fixed fee plus the international card surcharge plus the currency conversion spread. For Wise that means the transfer fee plus any conversion spread on the quoted rate. The calculators on this page model both on the same transaction so the net payout is directly comparable.',
    },
    {
      question: 'Which is cheaper for paying international contractors?',
      answer:
        'Wise is generally cheaper for paying contractors abroad because it uses the real mid-market rate with a small transfer fee, while card-based payouts carry the 1.5% international surcharge and the 1.0% currency conversion fee. For a $3,000 monthly contractor payment sent from the US to Germany, the difference is typically $40 to $90 per payment.',
    },
  ],
};

export function getCategoryFaqs(category: string): CategoryFaq[] {
  return CATEGORY_FAQS[category] || [];
}
