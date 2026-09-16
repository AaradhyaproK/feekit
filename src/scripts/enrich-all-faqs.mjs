import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const matrixPath = path.resolve(__dirname, '../data/geo-matrix.json');
const matrix = JSON.parse(fs.readFileSync(matrixPath, 'utf8'));

// High-converting fallback FAQ banks by category
const FAQ_BANKS = {
  'canada-sales-tax': [
    {
      question: 'What is the CRA small supplier threshold in Canada?',
      answer: 'Under Canada Revenue Agency (CRA) rules, businesses with worldwide gross taxable revenues under $30,000 CAD over 4 consecutive calendar quarters are classified as small suppliers and are exempt from mandatory GST/HST registration.',
    },
    {
      question: 'How do Input Tax Credits (ITCs) work in Canada?',
      answer: 'GST/HST-registered businesses can claim Input Tax Credits (ITCs) on business purchases and operational expenses to fully recover the sales tax paid, offsetting it against tax collected from customers.',
    },
    {
      question: 'Do remote US or overseas sellers need to charge Canadian sales tax?',
      answer: 'Yes, non-resident vendors of digital products, streaming services, and SaaS selling to Canadian consumers must register under the simplified GST/HST regime once sales exceed $30,000 CAD annually.',
    },
    {
      question: 'What is the difference between GST, PST, and HST?',
      answer: 'GST is the 5% federal tax applied across all provinces. PST/QST is provincial sales tax levied separately in BC, SK, MB, and Quebec. HST combines federal and provincial taxes into a single blended rate in Ontario and Atlantic Canada.',
    },
    {
      question: 'How do I extract sales tax from a gross invoice in Canada?',
      answer: 'To remove sales tax from a gross total, divide the gross amount by 1 + (tax rate / 100). For example, in Ontario (13% HST), divide by 1.13 to find the pre-tax net amount.',
    },
  ],
  'venmo-fee-calculator': [
    {
      question: 'Does Venmo charge fees for personal peer-to-peer transfers?',
      answer: 'No. Sending and receiving money for personal peer-to-peer payments using a linked bank account or debit card is 100% free. Commercial payments made to business profiles carry standard merchant fees.',
    },
    {
      question: 'What is the transaction fee for Venmo QR code payments?',
      answer: 'Venmo charges a discounted rate of 1.9% + $0.10 for in-person contactless QR code transactions scanned by buyers.',
    },
    {
      question: 'What fee applies to online payments through the Venmo app?',
      answer: 'Transactions processed through "Pay with Venmo" on mobile websites or partner merchant apps incur a standard fee of 2.29% + $0.10 per transaction.',
    },
    {
      question: 'Who pays the Venmo business fee—the buyer or the seller?',
      answer: 'The seller automatically pays the transaction fee, which is deducted before the net payout reaches the seller’s Venmo Business balance.',
    },
    {
      question: 'Can I transfer Venmo Business funds to my bank for free?',
      answer: 'Standard 1–3 business day electronic bank transfers (ACH) from Venmo to your bank are free. Instant transfers to eligible debit cards or bank accounts incur a 1.75% fee (minimum $0.25, maximum $25).',
    },
  ],
  'gumroad-fee-calculator': [
    {
      question: 'How much does Gumroad take from each sale?',
      answer: 'Gumroad charges a flat 10% platform fee plus standard payment processor charges (typically 2.9% + $0.30 for credit cards), amounting to approximately 12.9% + $0.30 per sale.',
    },
    {
      question: 'Does Gumroad handle sales tax and VAT on digital products?',
      answer: 'Yes. Gumroad operates as a Merchant of Record (MoR) and automatically calculates, collects, and remits worldwide sales tax, EU VAT, and GST on your digital products and subscriptions.',
    },
    {
      question: 'What is Gumroad’s payout schedule and minimum payout threshold?',
      answer: 'Gumroad pays creators every Friday for sales made up to the previous Friday (with a 7-day hold for fraud prevention). Direct deposit to bank accounts or PayPal requires a minimum balance of $10.',
    },
    {
      question: 'How do Gumroad fees compare to setting up Shopify or raw Stripe?',
      answer: 'While raw Stripe charges only 2.9% + $0.30, you must register and file taxes in every state and country yourself. Gumroad’s 10% fee covers complete global tax compliance, hosting, file delivery, and affiliate management.',
    },
    {
      question: 'Can I pass Gumroad processing fees to the customer?',
      answer: 'Gumroad does not currently support adding surcharge fees directly to the buyer at checkout. Creators incorporate the fee into their base product retail pricing.',
    },
  ],
  'lemon-squeezy-calculator': [
    {
      question: 'Why use an MoR like Lemon Squeezy instead of raw Stripe?',
      answer: 'Raw Stripe charges 2.9% + $0.30 but requires you to register and file taxes in every US state and EU country. Lemon Squeezy acts as the legal seller, fully absorbing global tax compliance, chargebacks, and invoicing for a 5% fee.',
    },
    {
      question: 'Does Lemon Squeezy charge extra for PayPal or international cards?',
      answer: 'Yes. Lemon Squeezy adds a 1.5% fee for PayPal transactions and a 1.5% cross-border fee for cards issued outside your primary region.',
    },
    {
      question: 'How does Lemon Squeezy handle EU VAT and US economic nexus?',
      answer: 'As a Merchant of Record, Lemon Squeezy is legally responsible for EU VAT and US state sales tax compliance under its own corporate entity, shielding software founders from international audit risk.',
    },
    {
      question: 'What payout methods are supported by Lemon Squeezy?',
      answer: 'Lemon Squeezy supports direct bank account payouts via Wise, direct local bank transfers in 50+ countries, and PayPal payouts.',
    },
    {
      question: 'Is Lemon Squeezy suitable for recurring SaaS subscriptions?',
      answer: 'Yes. Lemon Squeezy has native support for recurring billing, prorated upgrades, trial periods, dunning management, and customer self-service billing portals.',
    },
  ],
  'shopify-fee-calculator': [
    {
      question: 'What is the third-party gateway penalty on Shopify?',
      answer: 'If you choose not to use Shopify Payments and connect an external gateway like raw Stripe, PayPal, or Authorize.Net, Shopify charges an additional penalty fee of 2.0% (Basic), 1.0% (Shopify plan), or 0.5% (Advanced) on all transactions.',
    },
    {
      question: 'What is the credit card processing fee on the Shopify Basic plan?',
      answer: 'On Shopify Basic, Shopify Payments charges 2.9% + $0.30 per online credit card transaction and 2.7% + $0.00 for in-person POS credit card payments.',
    },
    {
      question: 'When is it financially worth upgrading from Shopify Basic to the Shopify plan?',
      answer: 'The regular Shopify plan drops online card rates from 2.9% to 2.6% (a 0.3% savings). If your store processes more than $20,000/month in credit card sales, the rate reduction offsets the higher monthly subscription fee.',
    },
    {
      question: 'Does Shopify Payments charge extra for international credit cards?',
      answer: 'Yes. An additional 1.0% fee applies to international credit cards, and a 1.5% currency conversion fee applies if the transaction currency differs from your store payout currency.',
    },
    {
      question: 'How do in-person Shopify POS card reader fees work?',
      answer: 'In-person card-present transactions using Shopify POS card hardware are charged at 2.7% (Basic), 2.5% (Shopify), and 2.4% (Advanced) with $0.00 per-transaction fixed fees.',
    },
  ],
  'gateway-comparator': [
    {
      question: 'Which payment processor is cheaper: Stripe, PayPal, or Square?',
      answer: 'For standard online domestic transactions, Stripe and Square tie at 2.9% + $0.30, while PayPal Commerce is noticeably more expensive at 3.49% + $0.49. For in-person point-of-sale card processing, Square (2.6% + $0.10) is the most cost-effective.',
    },
    {
      question: 'What is the cheapest payment processor for micropayments under $10?',
      answer: 'For low-ticket transactions, PayPal offers a dedicated micropayments rate (5.0% + $0.05). On a $5 transaction, PayPal micropayments fee is $0.30, compared to $0.45 with Stripe’s standard $0.30 fixed fee.',
    },
    {
      question: 'How do international card surcharges compare across Stripe, PayPal, and Square?',
      answer: 'Stripe charges a 1.5% international fee (plus 1% for currency conversion). PayPal adds 1.5% plus a 3–4% currency exchange margin. Square charges 1.0% on international cards.',
    },
    {
      question: 'Which gateway provides the fastest payout to my bank account?',
      answer: 'Square offers free standard next-business-day deposits and optional 1.75% instant transfers. Stripe defaults to a 2-day rolling payout schedule in the US. PayPal offers free 1–3 day ACH or 1.75% instant transfers.',
    },
    {
      question: 'Can I negotiate custom enterprise rates with Stripe or PayPal?',
      answer: 'Yes. Both Stripe and PayPal offer negotiated interchange-plus rates and volume discounts once your annual credit card volume exceeds $1,000,000 ($80,000+/month).',
    },
  ],
  'profit-margin-calculator': [
    {
      question: 'What is the difference between profit margin and markup percentage?',
      answer: 'Profit margin is profit divided by revenue (the percentage of sales retained as profit). Markup is profit divided by cost of goods sold (how much cost is marked up to establish the selling price). A 50% markup produces a 33.3% gross margin.',
    },
    {
      question: 'What is considered a good gross profit margin for a business?',
      answer: 'Benchmark gross margins vary by industry: SaaS and digital products typically achieve 70% to 85%, wholesale e-commerce averages 35% to 50%, and retail or grocery stores typically operate between 20% and 30%.',
    },
    {
      question: 'How do I calculate net profit margin after overhead expenses?',
      answer: 'Net profit margin equals (Total Revenue - Cost of Goods Sold - All Operating Expenses) divided by Total Revenue, multiplied by 100. It measures true bottom-line profitability.',
    },
    {
      question: 'Why does discounting severely destroy profit margins?',
      answer: 'Because fixed costs and COGS stay constant, a 10% discount on a product with a 20% margin cuts your total net profit in half (50% reduction in earnings), requiring twice the sales volume to break even.',
    },
    {
      question: 'How do payment processing fees affect my profit margin?',
      answer: 'A standard 2.9% + $0.30 merchant fee comes directly out of your gross revenue. On thin-margin retail items (10% margin), merchant processing fees can consume up to 30% of your net profits.',
    },
  ],
  'break-even-calculator': [
    {
      question: 'Why is the contribution margin important in break-even analysis?',
      answer: 'Contribution margin (Sale Price minus Variable Cost per unit) measures the exact dollar amount from each sale that directly pays down fixed overhead expenses.',
    },
    {
      question: 'What is the difference between fixed costs and variable costs?',
      answer: 'Fixed costs (rent, full-time salaries, software subscriptions) remain constant regardless of sales volume. Variable costs (packaging, raw materials, per-unit merchant fees) increase directly with each unit sold.',
    },
    {
      question: 'How can a business lower its break-even threshold?',
      answer: 'You can lower your break-even point by increasing unit selling prices, negotiating lower supplier costs to improve unit contribution margin, or reducing monthly fixed overhead expenses.',
    },
    {
      question: 'What is the Margin of Safety in financial planning?',
      answer: 'Margin of safety measures how much sales can drop before the business begins operating at a loss: (Current Expected Sales - Break-Even Sales) / Current Expected Sales.',
    },
    {
      question: 'Does the break-even point guarantee profitability?',
      answer: 'No. Reaching the break-even point means your business is operating at zero profit and zero loss. Every unit sold past the break-even volume generates pure pre-tax net profit.',
    },
  ],
  'roi-calculator': [
    {
      question: 'What is considered a good return on investment (ROI)?',
      answer: 'In public equity markets, an annualized ROI of 7% to 10% (matching the historical S&P 500 benchmark) is considered solid. High-growth venture capital and digital businesses target 25%+ annualized returns.',
    },
    {
      question: 'What is the difference between total ROI and annualized ROI (CAGR)?',
      answer: 'Total ROI measures cumulative percentage gain across the entire holding period regardless of time. Annualized ROI (CAGR) calculates the geometric average return per year, allowing objective comparison between investments of different durations.',
    },
    {
      question: 'Can return on investment (ROI) be negative?',
      answer: 'Yes. If the final value or return is less than the initial capital invested, the ROI will be negative, indicating a capital loss.',
    },
    {
      question: 'How do you calculate ROI on software or marketing campaigns?',
      answer: 'Marketing ROI equals (Attributed Gross Revenue - Marketing Campaign Spend) / Marketing Campaign Spend. Software ROI is calculated from labor hours saved and new revenue unlocked versus subscription cost.',
    },
    {
      question: 'How does inflation impact real return on investment?',
      answer: 'Real ROI subtracts annual inflation from nominal return. An investment returning 8% nominal in a 3% inflation environment provides a 5% real purchasing power gain.',
    },
  ],
  'quarterly-tax-calculator': [
    {
      question: 'What are the 2026 IRS quarterly estimated tax due dates?',
      answer: 'For the 2026 tax year, the IRS statutory payment deadlines are: Q1 due April 15, 2026; Q2 due June 15, 2026; Q3 due September 15, 2026; and Q4 due January 15, 2027.',
    },
    {
      question: 'What is the safe harbor rule to avoid IRS underpayment penalties?',
      answer: 'To avoid underpayment penalties under IRC § 6654, you must prepay at least 90% of your current year tax liability or 100% of your prior year tax liability (110% if prior year adjusted gross income exceeded $150,000).',
    },
    {
      question: 'How is the 15.3% self-employment tax calculated on Schedule SE?',
      answer: 'Under IRS rules, 92.35% of your net business profit is subject to 15.3% SE tax (12.4% Social Security up to the wage base cap plus 2.9% Medicare with no upper income limit).',
    },
    {
      question: 'Do I need to pay quarterly estimated taxes if I also have a W-2 job?',
      answer: 'If your W-2 employer withholding covers at least 90% of your total tax liability (or 100%/110% of prior year tax), you do not need to make quarterly estimated payments for side freelance income.',
    },
    {
      question: 'How do I pay my quarterly taxes online to the IRS?',
      answer: 'You can pay instantly online through IRS Direct Pay (using your checking account with zero fees) or via the Electronic Federal Tax Payment System (EFTPS). Select Form 1040-ES and the appropriate tax year.',
    },
  ],
  'uk-ir35-calculator': [
    {
      question: 'What is the take-home pay difference between Inside and Outside IR35?',
      answer: 'Operating Outside IR35 typically provides 15% to 25% higher net take-home pay compared to an umbrella company inside IR35, because limited companies can pay tax-efficient dividends and avoid employer NI.',
    },
    {
      question: 'Who determines whether a contractor is Inside or Outside IR35?',
      answer: 'Under the Off-Payroll Working rules, medium and large private sector businesses and public sector organizations are legally required to assess contractor status and issue a Status Determination Statement (SDS).',
    },
    {
      question: 'What deductions are made when working Inside IR35 through an umbrella?',
      answer: 'Inside IR35 deductions include Employer National Insurance (13.8%), the 0.5% Apprenticeship Levy, the umbrella company weekly fee margin, Employee NI (8%), and PAYE income tax.',
    },
    {
      question: 'How are dividends taxed when working Outside IR35?',
      answer: 'Outside IR35 contractors pay Corporation Tax (19% to 25%) on limited company profits, and then pay personal dividend tax on withdrawals: £500 tax-free, 8.75% in the basic rate band, and 33.75% in the higher rate band.',
    },
    {
      question: 'What business expenses can I claim Outside IR35?',
      answer: 'Outside IR35 limited companies can deduct legitimate business expenses including accountant fees, business insurance, computer hardware, home office allowances, and professional training before Corporation Tax.',
    },
  ],
  'freelance-rate-calculator': [
    {
      question: 'How many billable hours should a freelancer budget per year?',
      answer: 'Experienced freelancers budget approximately 1,200 annual billable hours (25 billable hours per week for 48 weeks). The remaining 15–20 hours per week are required for business development, proposals, invoicing, and admin.',
    },
    {
      question: 'How much should a 1099 contractor set aside for taxes?',
      answer: 'In the US, self-employed 1099 contractors should set aside 25% to 30% of every client invoice to cover 15.3% SECA self-employment tax and federal/state income taxes.',
    },
    {
      question: 'Should I quote hourly rates, day rates, or fixed project retainers?',
      answer: 'While hourly benchmarking is useful for internal estimating, quoting daily sprint rates (8x hourly) or weekly value-based retainers eliminates billing disputes and protects project profit margins.',
    },
    {
      question: 'How do I factor business overhead and health insurance into my rate?',
      answer: 'Add your annual expenses (health insurance, software subscriptions, laptop depreciation, legal/accounting fees) directly to your target net salary before dividing by billable hours.',
    },
    {
      question: 'How do I raise my freelance rates with existing clients?',
      answer: 'Give clients at least 30 to 60 days advance notice, highlight specific outcomes and value delivered over the past year, and state that the rate adjustment applies to all new contracts and renewals.',
    },
  ],
};

let enrichedCount = 0;

for (const item of matrix.items) {
  if (!item.faqs) {
    item.faqs = [];
  }

  // Get relevant bank
  let bank = FAQ_BANKS[item.category];
  if (!bank && item.suiteType === 'freelance') {
    bank = FAQ_BANKS['freelance-rate-calculator'];
  } else if (!bank && item.suiteType === 'merchant') {
    bank = FAQ_BANKS['gateway-comparator'];
  } else if (!bank) {
    bank = FAQ_BANKS['profit-margin-calculator'];
  }

  const existingQuestions = new Set(item.faqs.map((f) => f.question.toLowerCase().trim()));

  for (const candidate of bank) {
    if (item.faqs.length >= 5) break;

    const normalizedQ = candidate.question.toLowerCase().trim();
    if (!existingQuestions.has(normalizedQ)) {
      item.faqs.push({
        question: candidate.question.replace(/\[Province\]/g, item.stateName || 'your province'),
        answer: candidate.answer.replace(/\[Province\]/g, item.stateName || 'your province'),
      });
      existingQuestions.add(normalizedQ);
      enrichedCount++;
    }
  }
}

fs.writeFileSync(matrixPath, JSON.stringify(matrix, null, 2), 'utf8');
console.log(`Enriched matrix with ${enrichedCount} new FAQs!`);

const stillUnder5 = matrix.items.filter((i) => !i.faqs || i.faqs.length < 5);
console.log(`Items with fewer than 5 FAQs remaining: ${stillUnder5.length}`);
