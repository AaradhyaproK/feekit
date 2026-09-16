import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  DollarSign,
  FileSpreadsheet,
  Scale,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

interface VenmoGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function VenmoGuide({ sectionClass, inArticleSlot }: VenmoGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      {/* Article Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Fintech Strategy & Merchant Fee Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Venmo for Business Fee Breakdown: QR Code & In-App Rates ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A line-by-line fee analysis covering contactless QR payments (1.9% + $0.10), in-app checkout (2.29% + $0.10), bank transfers, and IRS 1099-K tax rules for commercial profiles.
        </p>
      </div>

      {/* Section 1: Immediate Direct Answer Hook */}
      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-blue-600 shrink-0" />
          <span>The Immediate Answer: Standard Venmo Business Fees</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Venmo charges business profiles two distinct transaction rates based on payment rail: in-person contactless <strong>QR code payments cost 1.9% plus $0.10</strong>, while online transactions processed through <strong>&quot;Pay with Venmo&quot; on mobile apps or websites cost 2.29% plus $0.10</strong>. On a $100 customer payment via QR code, Venmo deducts exactly $2.00, depositing $98.00 into your business balance. On a smaller $10 sale, the 10-cent fixed fee produces an effective rate of 2.90%. Commercial transaction fees are automatically paid by the seller—buyers pay zero added fees.
        </p>
      </div>

      {/* Section 2: Contactless QR vs In-App Checkout vs Personal P2P */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          QR Code (1.9% + $0.10) vs. In-App Checkout (2.29% + $0.10) vs. Personal P2P
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Venmo maintains strict separation between personal peer-to-peer transfers and commercial profiles. Sending and receiving personal money between family and friends via bank accounts or debit cards remains 100% free. However, accepting commercial payments on personal accounts violates Venmo terms of service and risks account suspension.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          For commercial profiles, Venmo incentivizes in-person commerce with a reduced <strong>1.9% + $0.10</strong> rate when buyers scan your printed or on-screen business QR code. When integrated into an e-commerce checkout flow via PayPal Braintree or WooCommerce, the standard rate is <strong>2.29% + $0.10</strong>. Notice that both rates undercut traditional Stripe or Square online fees (2.9% + $0.30), making Venmo Business one of the most cost-efficient payment gateways for US merchants with high Gen-Z and millennial customer bases.
        </p>
      </div>

      {/* Data Table 1: Real-World Transaction Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-blue-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table 1: Venmo Business Deductions & Net Payouts
          </h3>
        </div>
        <p className="text-xs text-slate-500">
          Comparing QR code in-person deductions versus online checkout fees across standard retail ticket values.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="py-3 px-4 font-bold text-slate-900">Customer Payment</th>
                <th className="py-3 px-4 font-bold text-blue-700">QR Fee (1.9% + $0.10)</th>
                <th className="py-3 px-4 font-bold text-slate-900">QR Net Payout</th>
                <th className="py-3 px-4 font-bold text-slate-600">QR Effective %</th>
                <th className="py-3 px-4 font-bold text-indigo-700">App Fee (2.29% + $0.10)</th>
                <th className="py-3 px-4 font-bold text-slate-900">App Net Payout</th>
                <th className="py-3 px-4 font-bold text-slate-600">App Effective %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$5.00</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.20</td>
                <td className="py-2.5 px-4 text-slate-900">$4.80</td>
                <td className="py-2.5 px-4 text-slate-500 font-bold font-sans">3.90%</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.21</td>
                <td className="py-2.5 px-4 text-slate-900">$4.79</td>
                <td className="py-2.5 px-4 text-slate-500 font-bold font-sans">4.29%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$10.00</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.29</td>
                <td className="py-2.5 px-4 text-slate-900">$9.71</td>
                <td className="py-2.5 px-4 text-slate-500 font-bold font-sans">2.90%</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.33</td>
                <td className="py-2.5 px-4 text-slate-900">$9.67</td>
                <td className="py-2.5 px-4 text-slate-500 font-bold font-sans">3.29%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$25.00</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.58</td>
                <td className="py-2.5 px-4 text-slate-900">$24.42</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">2.30%</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.67</td>
                <td className="py-2.5 px-4 text-slate-900">$24.33</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">2.69%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$50.00</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$1.05</td>
                <td className="py-2.5 px-4 text-slate-900">$48.95</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">2.10%</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$1.25</td>
                <td className="py-2.5 px-4 text-slate-900">$48.75</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">2.49%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$100.00</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$2.00</td>
                <td className="py-2.5 px-4 text-slate-900">$98.00</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">2.00%</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$2.39</td>
                <td className="py-2.5 px-4 text-slate-900">$97.61</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">2.39%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$500.00</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$9.60</td>
                <td className="py-2.5 px-4 text-slate-900">$490.40</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">1.92%</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$11.55</td>
                <td className="py-2.5 px-4 text-slate-900">$488.45</td>
                <td className="py-2.5 px-4 text-slate-500 font-sans">2.31%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Bank Transfers & Payout Rules */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Venmo Payout Options: Free ACH vs. 1.75% Instant Transfer
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Once funds clear into your Venmo Business balance, you have two options for transferring money into your business checking account:
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Standard Bank Transfer (Free):</strong> ACH direct deposit takes 1 to 3 business days and costs $0.00. For maximum margin protection, set up automated daily standard sweeps.</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Instant Transfer (1.75%):</strong> Deposited within 30 minutes to eligible debit cards or bank accounts. Carries a 1.75% fee (minimum $0.25, maximum $25.00). On a $1,000 withdrawal, the instant fee is $17.50.</span>
          </li>
        </ul>
      </div>

      {/* Section 4: IRS 1099-K Tax Reporting */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            IRS Form 1099-K Tax Reporting Rules for Venmo Business
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Venmo is legally required under Internal Revenue Code Section 6050W to file Form 1099-K with the IRS and send you a copy if your gross payments for goods and services meet statutory reporting thresholds. Because every business profile transaction is categorized as commercial, accurate bookkeeping and linking a dedicated Employer Identification Number (EIN) is critical to avoid commingling personal and business income.
        </p>
      </div>

      {/* Section 5: Reverse Calculation Formula */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          How to Price Products to Cover Venmo Fees (Reverse Formula)
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          To receive an exact net amount after Venmo deductions, use the mathematical reverse gross-up formula:
        </p>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 font-mono text-xs text-slate-800 text-center">
          Charge Amount = (Desired Net Payout + Fixed Fee) ÷ (1 − Rate Percentage)
        </div>
        <p className="text-xs text-slate-500">
          Example: To pocket exactly $100.00 from an in-person QR sale (1.9% + $0.10), charge: ($100 + $0.10) ÷ (1 − 0.019) = $100.10 ÷ 0.981 = <strong>$102.04</strong>.
        </p>
      </div>

      {/* In-Article Ad Unit */}
      {inArticleSlot}
    </section>
  );
}
