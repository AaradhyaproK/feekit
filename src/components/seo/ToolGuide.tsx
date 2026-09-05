import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  Scale,
  DollarSign,
  HelpCircle,
  FileSpreadsheet,
  ArrowRight,
} from 'lucide-react';

interface ToolGuideProps {
  suiteType: 'merchant' | 'tax' | 'freelance' | 'ecommerce';
  title: string;
  currencySymbol?: string;
  geoRegion?: 'US' | 'UK' | 'GLOBAL';
  stateName?: string;
  baseRate?: number;
  localRate?: number;
  maxLocalRate?: number;
  threshold?: string;
}

const STATE_AGENCIES: Record<string, string> = {
  California: 'California Department of Tax and Fee Administration (CDTFA)',
  Texas: 'Texas Comptroller of Public Accounts',
  'New York': 'New York State Department of Taxation and Finance',
  Florida: 'Florida Department of Revenue',
  Illinois: 'Illinois Department of Revenue',
  Pennsylvania: 'Pennsylvania Department of Revenue',
  Ohio: 'Ohio Department of Taxation',
  Georgia: 'Georgia Department of Revenue',
  'North Carolina': 'North Carolina Department of Revenue',
  Michigan: 'Michigan Department of Treasury',
  'New Jersey': 'New Jersey Division of Taxation',
  Virginia: 'Virginia Department of Taxation',
  Washington: 'Washington State Department of Revenue',
  Arizona: 'Arizona Department of Revenue',
  Massachusetts: 'Massachusetts Department of Revenue',
  Tennessee: 'Tennessee Department of Revenue',
  Indiana: 'Indiana Department of Revenue',
  Missouri: 'Missouri Department of Revenue',
  Maryland: 'Comptroller of Maryland',
  Wisconsin: 'Wisconsin Department of Revenue',
  Colorado: 'Colorado Department of Revenue',
  Minnesota: 'Minnesota Department of Revenue',
  'South Carolina': 'South Carolina Department of Revenue',
  Alabama: 'Alabama Department of Revenue',
  Louisiana: 'Louisiana Department of Revenue',
  Kentucky: 'Kentucky Department of Revenue',
  Oklahoma: 'Oklahoma Tax Commission',
  Connecticut: 'Connecticut Department of Revenue Services',
  Utah: 'Utah State Tax Commission',
  Iowa: 'Iowa Department of Revenue',
  Nevada: 'Nevada Department of Taxation',
  Arkansas: 'Arkansas Department of Finance and Administration',
  Mississippi: 'Mississippi Department of Revenue',
  Kansas: 'Kansas Department of Revenue',
  'New Mexico': 'New Mexico Taxation and Revenue Department',
  Nebraska: 'Nebraska Department of Revenue',
  Idaho: 'Idaho State Tax Commission',
  'West Virginia': 'West Virginia State Tax Department',
  Hawaii: 'Hawaii Department of Taxation',
  Maine: 'Maine Revenue Services',
  'Rhode Island': 'Rhode Island Division of Taxation',
  'South Dakota': 'South Dakota Department of Revenue',
  'North Dakota': 'North Dakota Office of State Tax Commissioner',
  Alaska: 'Alaska Department of Revenue',
  Vermont: 'Vermont Department of Taxes',
  Wyoming: 'Wyoming Department of Revenue',
  'District of Columbia': 'District of Columbia Office of Tax and Revenue',
};

export function ToolGuide({
  suiteType,
  title,
  currencySymbol = '$',
  geoRegion = 'US',
  stateName,
  baseRate,
  localRate,
  maxLocalRate,
  threshold,
}: ToolGuideProps) {
  const currentYear = new Date().getFullYear();

  if (suiteType === 'merchant') {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-8 shadow-xs">
        {/* Article Header */}
        <div className="border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <BookOpen className="h-4 w-4" />
            <span>Fintech Strategy & Merchant Fee Analysis</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            How Much Does Stripe Take Per Transaction? (2024 Real Numbers)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            A line-by-line fee breakdown covering domestic processing, international cards, ACH debits, and reverse payout calculations for US and UK businesses.
          </p>
        </div>

        {/* Section 1: Immediate Direct Answer Hook */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-3">
          <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
            <DollarSign className="h-4 w-4 text-blue-600 shrink-0" />
            <span>The Immediate Answer: Standard US and UK Fee Rates</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            For standard domestic card charges in the United States, Stripe takes <strong>2.9% plus $0.30</strong> per successful charge. In the United Kingdom, standard domestic card processing is <strong>1.5% plus 20p</strong>. On a $100 customer payment in the US, Stripe deducts $3.20 and deposits $96.80 into your merchant account. On a smaller $10 sale, however, the same fee structure consumes $0.59—an effective fee rate of 5.9%—because the fixed 30-cent surcharge disproportionately penalizes low-ticket checkouts. Understanding <strong>how much does Stripe take per transaction</strong> across various payment methods, international borders, and billing setups is essential for US and UK small businesses protecting their net margins.
          </p>
        </div>

        {/* Section 2: Breakdown of Standard Fees */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Breakdown of Standard Stripe Processing Fees (US vs. UK)
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Stripe utilizes a blended, flat-rate pricing model rather than interchange-plus billing. Every time a customer swipes, taps, or enters credit card numbers on your checkout page, Stripe splits its deduction into two mathematical components: a variable percentage and a fixed per-transaction fee. The variable percentage covers the underlying interchange rates levied by card networks (Visa, Mastercard, American Express) and issuing banks, while the fixed cents fee covers risk scoring, gateway routing, and fraud detection algorithms.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            For US business owners, the standard <strong>Stripe processing fee</strong> is 2.9% + $0.30 for online transactions. In-person payments via Stripe Terminal (card readers) cost 2.7% + $0.05 per successful transaction. Manually entered or keyed-in virtual terminal card numbers cost 3.4% + $0.30 due to higher fraud and chargeback liability.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            For UK business owners, standard pricing depends on card origin. Standard domestic consumer cards issued within the UK carry a fee of 1.5% + 20p. If your customer uses a European Economic Area (EEA) consumer card, the rate rises to 2.5% + 20p. International or non-EEA cards cost 3.25% + 20p. Because the fixed fee is static regardless of ticket size, your effective percentage changes dramatically based on transaction volume. Small businesses selling sub-$15 items pay significantly more as a percentage of revenue than businesses selling $500 B2B service invoices.
          </p>
        </div>

        {/* Data Table 1: Real-World Transaction Breakdown */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <FileSpreadsheet className="h-4 w-4 text-blue-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Data Table 1: Standard Domestic Card Fee Deductions
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Exact deductions, net payouts, and effective fee rates across benchmark order values for US and UK domestic transactions.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-3 px-4 font-bold text-slate-900">Transaction Amount</th>
                  <th className="py-3 px-4 font-bold text-blue-700">US Stripe Fee (2.9% + $0.30)</th>
                  <th className="py-3 px-4 font-bold text-slate-900">US Net Payout</th>
                  <th className="py-3 px-4 font-bold text-slate-600">US Effective Rate</th>
                  <th className="py-3 px-4 font-bold text-indigo-700">UK Stripe Fee (1.5% + 20p)</th>
                  <th className="py-3 px-4 font-bold text-slate-900">UK Net Payout</th>
                  <th className="py-3 px-4 font-bold text-slate-600">UK Effective Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$5.00 / £5.00</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.45</td>
                  <td className="py-2.5 px-4 text-slate-900">$4.55</td>
                  <td className="py-2.5 px-4 text-slate-500 font-bold font-sans">8.90%</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">£0.28</td>
                  <td className="py-2.5 px-4 text-slate-900">£4.72</td>
                  <td className="py-2.5 px-4 text-slate-500 font-bold font-sans">5.50%</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$10.00 / £10.00</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.59</td>
                  <td className="py-2.5 px-4 text-slate-900">$9.41</td>
                  <td className="py-2.5 px-4 text-slate-500 font-bold font-sans">5.90%</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">£0.35</td>
                  <td className="py-2.5 px-4 text-slate-900">£9.65</td>
                  <td className="py-2.5 px-4 text-slate-500 font-bold font-sans">3.50%</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$25.00 / £25.00</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">$1.03</td>
                  <td className="py-2.5 px-4 text-slate-900">$23.97</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">4.10%</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">£0.58</td>
                  <td className="py-2.5 px-4 text-slate-900">£24.42</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">2.30%</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$50.00 / £50.00</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">$1.75</td>
                  <td className="py-2.5 px-4 text-slate-900">$48.25</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">3.50%</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">£0.95</td>
                  <td className="py-2.5 px-4 text-slate-900">£49.05</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">1.90%</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$100.00 / £100.00</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">$3.20</td>
                  <td className="py-2.5 px-4 text-slate-900">$96.80</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">3.20%</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">£1.70</td>
                  <td className="py-2.5 px-4 text-slate-900">£98.30</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">1.70%</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$250.00 / £250.00</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">$7.55</td>
                  <td className="py-2.5 px-4 text-slate-900">$242.45</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">3.02%</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">£3.95</td>
                  <td className="py-2.5 px-4 text-slate-900">£246.05</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">1.58%</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$500.00 / £500.00</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">$14.80</td>
                  <td className="py-2.5 px-4 text-slate-900">$485.20</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">2.96%</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">£7.70</td>
                  <td className="py-2.5 px-4 text-slate-900">£492.30</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">1.54%</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$1,000.00 / £1,000.00</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">$29.30</td>
                  <td className="py-2.5 px-4 text-slate-900">$970.70</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">2.93%</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">£15.20</td>
                  <td className="py-2.5 px-4 text-slate-900">£984.80</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">1.52%</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$5,000.00 / £5,000.00</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">$145.30</td>
                  <td className="py-2.5 px-4 text-slate-900">$4,854.70</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">2.91%</td>
                  <td className="py-2.5 px-4 text-rose-600 font-semibold">£75.20</td>
                  <td className="py-2.5 px-4 text-slate-900">£4,924.80</td>
                  <td className="py-2.5 px-4 text-slate-500 font-sans">1.50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: International & FX Fees */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            International Cards, Cross-Border Fees, and Currency Conversion
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            When evaluating <strong>how much does Stripe take per transaction</strong> on cross-border business, domestic headline rates tell only part of the story. If you accept payments from international customers or settle payouts in alternative currencies, additional surcharges apply.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-1.5">
              <div className="font-bold text-slate-900">1. Cross-Border Surcharge (+1.5%)</div>
              <p className="text-slate-600 leading-relaxed">
                If a customer pays with a card issued outside your home merchant country, Stripe applies an additional 1.5% fee. For US merchants, an international charge costs 4.4% + $0.30. For UK merchants accepting US cards, it costs 3.25% + 20p.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-1.5">
              <div className="font-bold text-slate-900">2. Foreign Exchange Spread (1% - 2%)</div>
              <p className="text-slate-600 leading-relaxed">
                When currency conversion is required—such as charging in Euros and depositing to a USD bank account—Stripe tacks on a 1% to 2% currency conversion spread on top of the wholesale interbank rate.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-1.5">
              <div className="font-bold text-slate-900">3. Chargeback Dispute Fee ($15 / £15)</div>
              <p className="text-slate-600 leading-relaxed">
                If a customer files a chargeback, Stripe assesses a $15.00 fee in the US or £15.00 in the UK. Stripe will refund this dispute fee if you submit evidence and win the card network dispute.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Alternative Payment Rails */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Alternative Payment Rails: ACH Direct Debit vs. Credit Cards
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Credit cards are convenient for retail consumers, but they represent the most expensive payment rail for high-value transactions. Businesses that issue large client invoices or collect recurring B2B retainers can drastically reduce overhead by enabling direct bank debit transfers.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            In the United States, <strong>ACH Direct Debit</strong> charges <strong>0.8% capped at $5.00</strong>. On a $2,000 client retainer, processing via standard credit card costs $58.30 in gateway fees. Routing that same invoice through ACH costs exactly $5.00, saving $53.30 on a single invoice. In the UK and Europe, <strong>BACS Direct Debit</strong> costs <strong>1% + 20p capped at £2.00</strong>, while <strong>SEPA Direct Debit</strong> costs <strong>0.8% + 20p capped at €5.00</strong>.
          </p>
        </div>

        {/* Data Table 2: Payment Rail Comparison */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <Scale className="h-4 w-4 text-blue-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Data Table 2: Payment Rail Fee Comparison
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Comparing standard fee schedules, settlement timeframes, and fee caps across common merchant payment rails.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-3 px-4 font-bold text-slate-900">Payment Method</th>
                  <th className="py-3 px-4 font-bold text-blue-700">Standard US Pricing</th>
                  <th className="py-3 px-4 font-bold text-indigo-700">Standard UK Pricing</th>
                  <th className="py-3 px-4 font-bold text-slate-700">Settlement Time</th>
                  <th className="py-3 px-4 font-bold text-slate-700">Maximum Fee Cap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Online Credit & Debit Cards</td>
                  <td className="py-3 px-4 font-mono font-medium">2.9% + $0.30</td>
                  <td className="py-3 px-4 font-mono font-medium">1.5% + 20p</td>
                  <td className="py-3 px-4">2 Business Days</td>
                  <td className="py-3 px-4 text-slate-500">No Cap</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">In-Person POS (Terminal)</td>
                  <td className="py-3 px-4 font-mono font-medium">2.7% + $0.05</td>
                  <td className="py-3 px-4 font-mono font-medium">1.4% + 10p</td>
                  <td className="py-3 px-4">2 Business Days</td>
                  <td className="py-3 px-4 text-slate-500">No Cap</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">ACH Direct Debit</td>
                  <td className="py-3 px-4 font-mono font-medium text-emerald-700 font-bold">0.80%</td>
                  <td className="py-3 px-4 text-slate-400">N/A</td>
                  <td className="py-3 px-4">3–5 Business Days</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold font-mono">$5.00 Cap</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">BACS Direct Debit (UK)</td>
                  <td className="py-3 px-4 text-slate-400">N/A</td>
                  <td className="py-3 px-4 font-mono font-medium text-emerald-700 font-bold">1.00% + 20p</td>
                  <td className="py-3 px-4">3 Business Days</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold font-mono">£2.00 Cap</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Apple Pay / Google Pay</td>
                  <td className="py-3 px-4 font-mono font-medium">2.9% + $0.30</td>
                  <td className="py-3 px-4 font-mono font-medium">1.5% + 20p</td>
                  <td className="py-3 px-4">2 Business Days</td>
                  <td className="py-3 px-4 text-slate-500">No Cap</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Buy Now Pay Later (Klarna/Affirm)</td>
                  <td className="py-3 px-4 font-mono font-medium text-rose-600">5.99% + $0.30</td>
                  <td className="py-3 px-4 font-mono font-medium text-rose-600">4.99% + 20p</td>
                  <td className="py-3 px-4">Instant / 2 Days</td>
                  <td className="py-3 px-4 text-slate-500">No Cap</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">
            Notice that the actual <strong>Stripe fee per transaction</strong> is heavily dependent on the chosen rail. Moving high-value corporate clients from card payments to direct bank transfers provides immediate, compounding margin relief.
          </p>
        </div>

        {/* Section 5: Add-On Fees and Invoicing */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Stripe Invoicing, Recurring Billing, and Specialized Payment Methods
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Beyond baseline <strong>Stripe processing fee</strong> schedules, Stripe offers auxiliary platform tools that carry individual line-item costs. Invoicing software charges 0.4% per paid invoice after your first 25 free monthly invoices on the Starter plan, or 0.5% on the Plus plan. Stripe Billing for recurring subscriptions costs 0.5% on recurring volume. Stripe Tax adds an additional 0.5% per taxable transaction to automate state nexus and European VAT compliance.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            When evaluating your total <strong>Stripe fee per transaction</strong>, remember that software add-ons compound with standard payment processing. A SaaS business accepting an international card with automated tax collection and billing can easily pay over 4.5% in combined gateway deductions.
          </p>
        </div>

        {/* Section 6: Reverse Calculation Formula */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            How to Reverse-Calculate Fees to Keep 100% of Your Invoice Amount
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            When billing clients for professional services, freelancing, or project deliverables, you may want to pass gateway costs onto the client or price invoices so you pocket an exact dollar figure. Simply adding 2.9% to your invoice will leave you short because Stripe calculates its percentage against the gross final charge (which includes the surcharge itself).
          </p>
          <div className="rounded-lg bg-white border border-slate-200 p-3 font-mono text-xs text-slate-800 text-center">
            Gross Invoice = (Desired Net Payout + Fixed Fee) ÷ (1 − Percentage Rate)
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            To receive exactly $1,000.00 in your bank account via a US credit card, divide $1,000.30 by 0.971 to arrive at $1,030.18. You can calculate these forward and reverse deductions instantly using the <Link href="/tools/stripe-fee-calculator/usa" className="font-semibold text-blue-600 hover:text-blue-800 underline">Stripe Fee Calculator USA</Link>. Using a dedicated <strong>Stripe payout calculator</strong> eliminates rounding discrepancies and ensures your business never absorbs unintended gateway shortfalls.
          </p>
        </div>

        {/* Section 7: Bottom Line (High Scroll-Depth Section) */}
        <div className="rounded-xl border border-slate-300 bg-gradient-to-br from-slate-50 to-blue-50/30 p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <TrendingUp className="h-5 w-5 text-blue-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Bottom Line: Maximizing Your Net Revenue on Stripe
            </h3>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            When calculating <strong>how much does Stripe take per transaction</strong>, expect domestic credit card sales to cost <strong>2.9% + $0.30</strong> in the US and <strong>1.5% + 20p</strong> in the UK. However, international payments, currency conversions, and add-on services can push overall costs toward 4% to 6%.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1">
              <div className="font-bold text-blue-700">1. Incentivize Bank Debits</div>
              <p className="text-slate-600">Route large invoices through ACH (0.8% capped at $5) or BACS (1% capped at £2) to bypass uncapped card interchange.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1">
              <div className="font-bold text-indigo-700">2. Account for the 30¢ Floor</div>
              <p className="text-slate-600">Bundle micro-purchases or set minimum order values to prevent fixed fees from eroding sub-$10 margins.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1">
              <div className="font-bold text-emerald-700">3. Reverse-Bill Accurately</div>
              <p className="text-slate-600">Benchmark fees in advance with an interactive <strong>Stripe payout calculator</strong> to ensure client quotes reflect your true net take-home pay.</p>
            </div>
          </div>
        </div>

        {/* High-Converting CTA Box */}
        <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">
              Calculate Your Exact Gateway Fee Deductions in Seconds
            </h4>
            <p className="text-xs text-slate-600">
              Run real transaction amounts through FeeKit&apos;s verified calculators to compare exact net payouts.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Link
              href="/tools/stripe-fee-calculator/usa"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
            >
              <span>Stripe Fee Calculator</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/tools/paypal-fee-calculator/usa"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition-colors"
            >
              <span>PayPal Fee Calculator</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (suiteType === 'tax') {
    const isUK = geoRegion === 'UK';
    const state = stateName || 'US State';
    const agencyName = (stateName && STATE_AGENCIES[stateName]) || `${state} Department of Revenue`;
    const rateVal = baseRate ?? 6.0;
    const maxLocalVal = maxLocalRate ?? 2.5;
    const maxCombinedVal = (rateVal + maxLocalVal).toFixed(2);
    const nexusLimit = threshold || '$100,000';

    if (isUK) {
      return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-8 shadow-xs">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                UK VAT Rates & HMRC Small Business Compliance Guide ({currentYear})
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Official statutory VAT bands, the £90,000 registration threshold, reverse VAT calculation formulas, and Making Tax Digital rules
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {/* Section 1: UK VAT Rates */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Scale className="h-4 w-4 text-blue-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">UK VAT Rates in {currentYear} (HMRC)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                HM Revenue and Customs (HMRC) categorises commercial transactions under three primary rate bands:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Standard Rate (20%):</strong> Applies to the vast majority of commercial goods and professional services, including IT consultancy, accountancy, marketing, electronics, and adult clothing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Reduced Rate (5%):</strong> Levied on specific domestic essentials: residential gas and electricity, home insulation installations, and child car safety seats.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero-Rated (0%):</strong> Taxable goods charged at 0% VAT, including most grocery food, physical/digital books, and children’s clothing. Allows reclaiming input VAT on related costs.</span>
                </li>
              </ul>
            </div>

            {/* Section 2: VAT Registration Threshold */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <ShieldCheck className="h-4 w-4 text-indigo-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">VAT Registration Threshold (£90,000)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under regulations updated for {currentYear}, the mandatory <strong>VAT registration threshold UK</strong> is <strong>£90,000</strong>:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Rolling 12-Month Rule:</strong> You must register with HMRC if your cumulative taxable turnover exceeds £90,000 over any consecutive 12 months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>30-Day Forward Rule:</strong> Mandatory registration applies if you expect cumulative turnover to cross £90,000 within a single 30-day window.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Voluntary Registration:</strong> Sole traders below £90k can register voluntarily to reclaim input VAT on business laptops, tooling, and commercial software licences.</span>
                </li>
              </ul>
            </div>

            {/* Section 3: How to Calculate VAT */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">How to Calculate VAT (Standard Rate)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Computing standard 20% VAT on business quotes and invoices involves two mathematical operations:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Net to Gross (Adding VAT):</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-[11px]">Net × 1.20 = Gross</code>. Example: £500.00 fee + £100.00 VAT (20%) = <strong>£600.00 billed</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Gross to Net (Reverse VAT):</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-[11px]">Gross ÷ 1.20 = Net</code>. To extract VAT directly, multiply gross total by the <strong>1/6 VAT fraction</strong>. Example: £240.00 receipt contains <strong>£40.00 VAT</strong>.</span>
                </li>
              </ul>
            </div>

            {/* Section 4: Making Tax Digital for VAT */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <FileSpreadsheet className="h-4 w-4 text-amber-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">Making Tax Digital for VAT</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under HMRC’s Making Tax Digital (MTD) statutory framework, all VAT-registered entities must maintain electronic accounts:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Compatible Software:</strong> Must record invoices digitally and submit returns via MTD-compliant tools (Xero, QuickBooks, FreeAgent).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Filing Deadlines:</strong> Returns and cleared payments are due <strong>1 calendar month and 7 days</strong> following quarterly period end.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>HMRC Penalties:</strong> Late submission points system triggers an automatic <strong>£200 penalty fine</strong>, plus daily interest on overdue balances.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              {state} Sales Tax Rate & Online Seller Guide ({currentYear})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              CPA-verified guidance on destination sourcing, economic nexus thresholds, exemption certificates, and {agencyName} filing deadlines
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {/* Section 1: Sales Tax Rates */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Scale className="h-4 w-4 text-blue-600 shrink-0" />
              <h3 className="text-sm font-bold text-slate-900">{state} Sales Tax Rate ({currentYear})</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              The statutory base sales tax rate in {state} is <strong>{rateVal.toFixed(2)}%</strong>. However, local county, municipal, and special taxing districts (such as transit authorities and fire protection zones) levy supplementary local surtaxes.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Max Combined Rate:</strong> With local surtaxes added, the maximum combined {state.toLowerCase()} sales tax rate reaches up to <strong>{maxCombinedVal}%</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Destination Sourcing:</strong> Remote online orders delivered into {state} must be taxed at the purchaser’s delivery address composite rate, not your origin warehouse.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Precise Line-Item Calculation:</strong> Utilizing this {state.toLowerCase()} sales tax calculator ensures checkout systems compute exact street-level liability without out-of-pocket leakage.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Nexus in State */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <ShieldCheck className="h-4 w-4 text-indigo-600 shrink-0" />
              <h3 className="text-sm font-bold text-slate-900">Sales Tax Nexus in {state}</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Before collecting sales tax, you must establish either physical or economic nexus under *South Dakota v. Wayfair*:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Physical Nexus:</strong> Maintaining an office, warehouse, retail store, remote employees, or inventory stored in Amazon FBA / 3PL facilities in {state}.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Economic Nexus:</strong> For an online seller, sales tax obligations trigger once annual gross sales reach or exceed <strong>{nexusLimit}</strong> into {state}.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Permit Requirement:</strong> You must register for an official state sales tax permit before billing tax from {state} customers.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Exemption Certificates */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <FileSpreadsheet className="h-4 w-4 text-emerald-600 shrink-0" />
              <h3 className="text-sm font-bold text-slate-900">Exemption Certificates in {state}</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sales of goods intended for resale or qualified institutions are tax-exempt provided compliant documentation is retained:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Who Qualifies:</strong> Wholesale merchants, certified resellers, 501(c)(3) religious/charitable organizations, and government purchasing agencies.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Certificate Verification:</strong> Inspect each certificate for the buyer&apos;s state tax registration ID, company legal name, authorized signature, and stated business reason.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Mandatory Record-Keeping:</strong> Retain valid exemption certificates for a minimum of <strong>3 to 4 years</strong> to defend against state audit assessments.</span>
              </li>
            </ul>
          </div>

          {/* Section 4: How to File */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
              <h3 className="text-sm font-bold text-slate-900">How to File {state} Sales Tax</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              All registered sellers must file sales and use tax returns digitally through <strong>{agencyName}</strong>:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Filing Frequency:</strong> Assigned by the state as monthly, quarterly, or annual based on your projected remittance volume.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero-Liability Returns:</strong> If you had no taxable sales in {state} during a reporting window, you must still submit a &quot;Zero Return&quot; on time to avoid administrative revocation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Late Filing Penalties:</strong> Late filings incur an automatic statutory penalty (typically 5% to 10% of tax due) plus compounding monthly interest.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  if (suiteType === 'freelance') {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Freelance Rate Economics & 1099 / IR35 Tax Strategy
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              The mathematics of billable utilization, tax reserves, and setting profitable day rates
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span>The 25-Hour Billable Utilization Rule</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full-time freelancers cannot bill 40 hours per week. Professional service benchmarks indicate 30% to 40% of working time is required for business development, client proposals, accounting, and continuing education.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Annual Billable Hours:</strong> 48 working weeks × 25 billable hours = <strong>1,200 billable hours per year</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Day Rate Pricing:</strong> An 8-hour day rate protects against project scope creep and eliminates microscopic time-tracking debates.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <DollarSign className="h-4 w-4 text-emerald-600" />
              <span>1099 SECA Tax & Business Write-Offs</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              In the US, independent contractors pay Self-Employment Tax (SECA 15.3% covering Social Security and Medicare) on 92.35% of net profit, plus federal and state income taxes.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Quarterly Estimated Taxes:</strong> Submit Form 1040-ES in April, June, September, and January to avoid IRS underpayment penalties.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Section 179 Deductions:</strong> Write off 100% of computer equipment, professional software, and home office expenses against gross receipts.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  // Ecommerce
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-slate-900">
            E-Commerce Unit Economics & Break-Even ROAS Algebra
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            How to accurately compute true landed costs, platform referral commissions, and maximum allowable CAC
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span>Break-Even ROAS Calculation Formula</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Break-Even ROAS represents the exact advertising return required for a product sale to generate zero net profit or loss:
          </p>
          <div className="rounded-lg bg-slate-100 p-3 font-mono text-xs text-slate-900 border border-slate-200">
            Break-Even ROAS = Retail Price / (Retail Price - Non-Ad Costs)
          </div>
          <p className="text-xs text-slate-600">
            If a product sells for $50 and landed COGS + marketplace fees total $25, your gross contribution is $25, meaning your target ROAS must exceed <strong>2.00x</strong> to achieve positive cash flow.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <DollarSign className="h-4 w-4 text-emerald-600" />
            <span>Margin % vs. Markup % Distinction</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Conflating margin and markup is the #1 reason e-commerce brands misprice products and run out of working capital:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Net Margin %:</strong> <code className="bg-white px-1 rounded border font-mono">(Net Profit / Selling Price) × 100</code>. Margin can never exceed 100%.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Markup %:</strong> <code className="bg-white px-1 rounded border font-mono">(Net Profit / Total Cost) × 100</code>. A product costing $20 and sold for $60 has a 200% markup and a 66.7% margin.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
