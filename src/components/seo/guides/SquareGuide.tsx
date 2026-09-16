import React from 'react';
import {
  BookOpen,
  DollarSign,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface SquareGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function SquareGuide({ sectionClass, inArticleSlot }: SquareGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Point of Sale & Merchant Processing Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Square Processing Fees Explained: Tap, Online & Keyed-In ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A full line-by-line guide to Square&apos;s 2.6% + $0.10 in-person tap, 2.9% + $0.30 eCommerce checkout, 3.5% + $0.15 virtual terminal keyed-in rates, and free next-day payouts.
        </p>
      </div>

      <div className="rounded-xl border border-slate-300 bg-slate-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-slate-800 shrink-0" />
          <span>The Immediate Answer: Standard Square Fee Schedule</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Square charges three primary transaction rates depending on how the customer pays: in-person card-present tap, dip, or swipe payments cost <strong>2.6% plus $0.10</strong>; online eCommerce checkouts and invoices cost <strong>2.9% plus $0.30</strong>; and manually entered (keyed-in) virtual terminal card numbers cost <strong>3.5% plus $0.15</strong>. Standard bank transfers are free and deposit the next business day.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          In-Person Tap (2.6% + $0.10) vs. Keyed-In (3.5% + $0.15)
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Square heavily discounts in-person card-present transactions because the presence of EMV chips and contactless Apple Pay / Google Pay tokens virtually eliminates counterfeit fraud liability. Keyed-in transactions—such as taking a credit card number over the phone or typing it manually into Square Virtual Terminal—incur a steep <strong>3.5% + $0.15</strong> fee due to elevated chargeback risks.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-slate-800 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Square Fee Deductions Across Common Ticket Sizes
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Transaction Amount</th>
                <th className="py-3 px-4 text-blue-700">In-Person Tap (2.6% + 10¢)</th>
                <th className="py-3 px-4 text-slate-900">Tap Net Payout</th>
                <th className="py-3 px-4 text-purple-700">Online Store (2.9% + 30¢)</th>
                <th className="py-3 px-4 text-rose-700">Keyed-In (3.5% + 15¢)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$5.00 (Coffee)</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.23 (4.60%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$4.77</td>
                <td className="py-2.5 px-4 text-purple-600">$0.45 (9.00%)</td>
                <td className="py-2.5 px-4 text-rose-600">$0.33 (6.60%)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$25.00 (Lunch)</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$0.75 (3.00%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$24.25</td>
                <td className="py-2.5 px-4 text-purple-600">$1.03 (4.12%)</td>
                <td className="py-2.5 px-4 text-rose-600">$1.03 (4.12%)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$100.00 (Retail)</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$2.70 (2.70%)</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$97.30</td>
                <td className="py-2.5 px-4 text-purple-600">$3.20 (3.20%)</td>
                <td className="py-2.5 px-4 text-rose-600">$3.65 (3.65%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Square Payouts: Free Next-Day Deposits vs. 1.75% Instant Transfer
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Square automatically deposits funds into your linked bank account by the next business day for free. If cash flow requires immediate liquidity, Square offers an Instant Transfer option for a 1.75% fee.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
