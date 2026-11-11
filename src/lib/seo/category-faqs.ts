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
        'Every US state has a statewide base rate between 0% and 7.25%, and counties, cities and special districts add local surtaxes on top. Combined rates range from 0% in Delaware, Montana, New Hampshire, Oregon and Alaska to roughly 11.75% in the highest-tax areas of California and Illinois. Use the state calculators below for exact combined rates.',
    },
    {
      question: 'Does sales tax apply to online purchases?',
      answer:
        'Yes. Under the South Dakota v. Wayfair ruling, remote sellers must collect destination-based sales tax once they have economic nexus in a state, even when the buyer is physically elsewhere. Five states - Alabama, Louisiana, New Mexico, South Dakota and Tennessee - also tax remote sales without a sales tax.',
    },
    {
      question: 'What is the economic nexus threshold for online sellers?',
      answer:
        'Most states use either a $100,000 annual sales threshold or 200 transactions in the previous year. California and New York use a similar sales-volume test, while Texas allows a 250-transaction trigger. Once a threshold is crossed, marketplace facilitator rules and registration requirements kick in.',
    },
    {
      question: 'How do I extract sales tax from a gross total?',
      answer:
        'Divide the tax-inclusive total by 1 plus the sales tax rate. A $108.25 invoice taxed at 8.25% has a net subtotal of $100 and $8.25 of tax. This reverse calculation is what you use to verify vendor invoices and reconcile marketplace payouts.',
    },
    {
      question: 'Are digital products and SaaS taxable?',
      answer:
        'In most states, SaaS subscriptions, software downloads and digital goods are taxable as electronically delivered services. Several states have carved out certain SaaS subscriptions, so treatment varies. The state guides below link to each revenue department for the current position.',
    },
  ],
  'vat-calculator': [
    {
      question: 'How do I calculate VAT?',
      answer:
        'To add VAT, multiply the net amount by 1 plus the VAT rate. To extract VAT from a gross total, divide the gross amount by 1 plus the VAT rate and subtract the net. A $120 invoice at 20% UK VAT contains $100 of net value and $20 of VAT.',
    },
    {
      question: 'What is the standard VAT rate in the UK?',
      answer:
        'The standard UK VAT rate is 20%, the reduced rate is 5%, and there is a zero rate on certain goods and services such as most food, books and children clothing. Most businesses must file quarterly VAT returns through HMRC Making Tax Digital.',
    },
    {
      question: 'When is reverse charge VAT applied?',
      answer:
        'Reverse charge applies when a VAT-registered business buys services from another VAT-registered business in a different EU country. Both parties account for VAT in their own country, so no VAT is charged or paid on the invoice itself.',
    },
    {
      question: 'Do I need to register for VAT in other EU countries?',
      answer:
        'You generally need to register in each EU country where you exceed that country local VAT registration threshold through sales or purchases. OSS (One Stop Shop) lets you report cross-border consumer sales to your home country only, but it does not cover your home-country sales or B2B reverse charge transactions.',
    },
    {
      question: 'Is VAT charged on digital services sold to the EU?',
      answer:
        'Yes. Since 2015, digital services sold to consumers in the EU are taxed in the customer country under the place-of-supply rules, with OSS or IOSS reporting. The rates applied are the local standard rates, which range from 17% to 27% across EU member states.',
    },
    {
      question: 'What is the VAT registration threshold in the UK?',
      answer:
        'The UK VAT registration threshold is currently £90,000 of taxable turnover in a rolling 12-month period. VAT is charged on sales once you exceed the threshold, and you must notify HMRC within 21 days of becoming liable.',
    },
  ],
  'stripe-fee-calculator': [
    {
      question: 'How much does Stripe charge per transaction?',
      answer:
        'Stripe charges 2.9% + $0.30 per successful domestic card payment in the US, 1.5% + 20p for UK domestic cards, and 2.5% + 25p for EU domestic cards. International cards add 1.5%, currency conversion adds 1%, and manually entered cards add 0.5%.',
    },
    {
      question: 'How much does Stripe charge on a $100 payment?',
      answer:
        'A $100 US card payment costs $3.20 in Stripe fees (2.9% + $0.30), leaving you $96.80. The same payment costs £2.03 in the UK (1.5% + 20p) and $3.50 in the EU (2.5% + 25p).',
    },
    {
      question: 'What is the effective Stripe fee percentage?',
      answer:
        'The effective fee rate is total fees divided by the transaction amount. On a $100 payment the 2.9% + $0.30 schedule works out to 3.2% effective. On a $1,000 payment it drops to 2.93%, and on a $10 payment it rises to 5.9% because of the fixed component.',
    },
    {
      question: 'How do I work out what to charge to receive a set amount?',
      answer:
        'Divide the net amount you need by 1 minus the total fee rate, then add back the fixed fee component. To receive exactly $1,000.00 after a 2.9% + $0.30 fee, charge $1,030.30.',
    },
    {
      question: 'Does Stripe charge a monthly fee or require a minimum volume?',
      answer:
        'No. Stripe has no monthly fee, no setup fee and no minimum processing volume. You can also charge a custom pricing agreement rate if you negotiate volume pricing directly with Stripe.',
    },
    {
      question: 'What are Stripe ACH direct debit fees?',
      answer:
        'Stripe ACH direct debit charges 0.8% per transaction, capped at $5 per payment in the US. ACH is significantly cheaper than card processing for larger invoices but takes 3 to 5 business days to settle.',
    },
  ],
  'paypal-fee-calculator': [
    {
      question: 'How much does PayPal charge for a transaction?',
      answer:
        'PayPal charges 3.49% + $0.49 for US commercial transaction rates, 2.99% + $0.49 for standard goods and services, and 2.29% + $0.10 for QR code payments. PayPal UK charges 2.9% + 30p for standard commercial transactions.',
    },
    {
      question: 'How much does PayPal charge on a $100 transaction?',
      answer:
        'At the US commercial rate of 3.49% + $0.49, a $100 PayPal transaction costs $3.98 in fees and leaves you $96.02. Standard goods and services pricing of 2.99% + $0.49 costs $3.48.',
    },
    {
      question: 'Are PayPal micropayments cheaper?',
      answer:
        'PayPal micropayments are priced at 4.99% + $0.09, which has a lower fixed fee than the standard rate. That makes micropayments the cheaper option for very small transactions below roughly $10.',
    },
    {
      question: 'How much does PayPal charge for international transactions?',
      answer:
        'International card transactions add a cross-border fee of typically 1.31% to 4.46% on top of the standard rate, plus a 1.5% currency conversion spread when you convert the balance. International commercial transactions can therefore exceed 6% total.',
    },
    {
      question: 'Does PayPal charge a fee for invoicing and payment links?',
      answer:
        'Yes. PayPal Invoicing and Payment Links use the standard commercial transaction rate of 3.49% + $0.49 in the US. Payment Links can be shared directly by link, QR code or email, and the fee structure matches standard PayPal checkout.',
    },
  ],
  'freelance-rate-calculator': [
    {
      question: 'How do I calculate my freelance hourly rate?',
      answer:
        'Divide your target annual income plus business costs and taxes by the billable hours you realistically work in a year. For a $90,000 target, $12,000 of costs and 1,600 billable hours, your rate is $63.75 per hour before self-employment tax.',
    },
    {
      question: 'How much do freelancers actually pay in self-employment tax?',
      answer:
        'Self-employed people pay 15.3% of net earnings toward Social Security and Medicare: 12.4% up to the Social Security wage base of $176,100 in 2026, plus 2.9% Medicare on all earnings. Additional Medicare tax of 0.9% applies above $200,000.',
    },
    {
      question: 'Should I charge a day rate or an hourly rate?',
      answer:
        'Day rates suit defined-scope projects with predictable deliverables, while hourly rates suit open-ended work and ongoing retainers. Many freelancers quote a day rate of roughly 8 times their hourly rate to account for unbilled admin time.',
    },
    {
      question: 'How do I set aside money for quarterly estimated taxes?',
      answer:
        'Set aside 25% to 30% of every invoice for federal and state income tax plus self-employment tax, then pay IRS Form 1040-ES in four equal instalments. Safe harbor is reached when you pay 90% of this year tax or 100% of last year tax.',
    },
    {
      question: 'What is the average freelance rate by role?',
      answer:
        'Rates vary widely by specialty and seniority. Typical 2026 ranges run $55 to $95 per hour for software engineers, $75 to $140 for designers, $45 to $85 for writers and $95 to $175 for AI and machine-learning engineers. Use the role calculators above for a figure you can defend.',
    },
  ],
  'ecommerce-profit-calculator': [
    {
      question: 'How do I calculate ecommerce profit margin?',
      answer:
        'Subtract COGS, payment processing fees, fulfilment, shipping, advertising and returns from revenue, then divide the remainder by revenue. A $49.99 product with $14 COGS, $3.90 in fees and $18 advertising returns $14.09, or 28.2% margin.',
    },
    {
      question: 'What is a good break-even ROAS?',
      answer:
        'Break-even ROAS equals 1 divided by your pre-ad contribution margin. At a 40% contribution margin, break-even ROAS is 2.5. Anything below that figure means every ad sale loses money before overhead.',
    },
    {
      question: 'What are Amazon FBA referral fees?',
      answer:
        'Amazon referral fees are typically 8% to 15% of the total sales price, depending on category. Most apparel sells at 17%, electronics at 8%, and most other categories at 15%. FBA fulfilment fees are charged separately per unit.',
    },
    {
      question: 'How do I price a dropshipping product?',
      answer:
        'Add supplier cost, shipping, payment fees, ad cost and a target profit margin to get your price. A $12 product with $6 shipping, $2 in fees and $8 in ads at a 25% margin should be listed at $38.67.',
    },
    {
      question: 'How much should I allow for returns and refunds?',
      answer:
        'Ecommerce return rates typically run 5% to 12% for apparel, 3% to 8% for general merchandise and 1% to 3% for consumables. Model your margin using a blended return rate rather than assuming zero returns.',
    },
  ],
  'square-fee-calculator': [
    {
      question: 'How much does Square charge per transaction?',
      answer:
        'Square charges 2.6% + 15 cents for in-person contactless, chip and swipe payments, and 3.3% + 30 cents for online checkout on the Free plan. Square Plus reduces the online rate to 2.9% + 30 cents with no monthly fee.',
    },
    {
      question: 'Is Square cheaper than Stripe?',
      answer:
        'For in-person contactless payments, Square is cheaper at 2.6% + 15 cents versus Stripe in-person at 2.7% + 5 cents on a $100 payment, Square costs $2.75 and Stripe costs $2.75. For online checkout, Stripe at 2.9% + $0.30 is usually cheaper than Square at 3.3% + $0.30.',
    },
    {
      question: 'Does Square have a monthly fee?',
      answer:
        'No. The Square Free plan has no monthly fee, no setup cost and no contract. Square Plus costs $29 per month plus 2.9% + 30 cents online and includes team members, gift cards and inventory features.',
    },
    {
      question: 'How does Square handle restaurant and tipping payments?',
      answer:
        'Square restaurant pricing starts at 2.6% + 15 cents for in-person payments and adds 2% for staff tipping. Chip readers, mobile readers and standalone terminals all use the same rates.',
    },
  ],
};

export function getCategoryFaqs(category: string): CategoryFaq[] {
  return CATEGORY_FAQS[category] || [];
}
