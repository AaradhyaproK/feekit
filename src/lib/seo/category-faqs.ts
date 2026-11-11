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
};

export function getCategoryFaqs(category: string): CategoryFaq[] {
  return CATEGORY_FAQS[category] || [];
}
