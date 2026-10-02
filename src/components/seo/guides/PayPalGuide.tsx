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

interface PayPalGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function PayPalGuide({ sectionClass, inArticleSlot }: PayPalGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>PayPal Merchant Fee & Commerce Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          PayPal Merchant Fees Explained: Standard, QR & Micropayments ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A transparent analysis of PayPal Commerce (3.49% + $0.49), PayPal Checkout buttons (2.99% + $0.49), QR codes, micropayments (5% + 5¢), and cross-border currency conversion.
        </p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-blue-600 shrink-0" />
          <span>The Immediate Answer: Standard PayPal Commercial Rates</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          <strong>3.49% + $0.49 applies to PayPal Checkout, Guest Checkout, and invoices. Standard Goods &amp; Services rate: 2.99% + $0.49.</strong>
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Standard commercial invoicing and invoicing API charges on PayPal in the US cost <strong>3.49% plus $0.49</strong> per transaction. When buyers use PayPal Checkout buttons or guest checkout on your store, the discounted rate is <strong>2.99% plus $0.49</strong>. On a $100 customer payment, PayPal deducts $3.98 (invoicing/checkout) or $3.48 (standard card). For international cross-border transactions, PayPal adds an extra <strong>1.50% fee</strong> plus a 3% to 4% currency conversion margin.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          When to Use the PayPal Micropayments Program (5.0% + $0.05)
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Because standard PayPal transactions carry a hefty <strong>$0.49 fixed cents fee</strong>, selling low-ticket items under $10 results in punishing effective fee rates. To protect small merchants selling digital downloads, gaming assets, and song downloads, PayPal offers an opt-in <strong>Micropayments fee schedule: 5.0% plus $0.05</strong>.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          The mathematical tipping point is <strong>$11.00</strong>: for items priced under $11, the 5% + $0.05 micropayments rate is cheaper. For items priced over $11, standard 2.99% + $0.49 is more economical.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-blue-700 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: PayPal Checkout vs. Invoicing Deductions
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4 text-blue-700">Checkout (2.99% + 49¢)</th>
                <th className="py-3 px-4 text-slate-900">Checkout Net</th>
                <th className="py-3 px-4 text-purple-700">Invoicing (3.49% + 49¢)</th>
                <th className="py-3 px-4 text-slate-900">Invoicing Net</th>
                <th className="py-3 px-4 text-emerald-700">Micropayments (5% + 5¢)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$5.00</td>
                <td className="py-2.5 px-4 text-rose-600">$0.64 (12.8%)</td>
                <td className="py-2.5 px-4">$4.36</td>
                <td className="py-2.5 px-4 text-rose-600">$0.66</td>
                <td className="py-2.5 px-4">$4.34</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$0.30 (6.0%)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$10.00</td>
                <td className="py-2.5 px-4 text-rose-600">$0.79 (7.9%)</td>
                <td className="py-2.5 px-4">$9.21</td>
                <td className="py-2.5 px-4 text-rose-600">$0.84</td>
                <td className="py-2.5 px-4">$9.16</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$0.55 (5.5%)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$50.00</td>
                <td className="py-2.5 px-4 text-rose-600">$1.99 (3.98%)</td>
                <td className="py-2.5 px-4">$48.01</td>
                <td className="py-2.5 px-4 text-rose-600">$2.24</td>
                <td className="py-2.5 px-4">$47.76</td>
                <td className="py-2.5 px-4 text-slate-500">$2.55</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$100.00</td>
                <td className="py-2.5 px-4 text-rose-600">$3.48 (3.48%)</td>
                <td className="py-2.5 px-4">$96.52</td>
                <td className="py-2.5 px-4 text-rose-600">$3.98</td>
                <td className="py-2.5 px-4">$96.02</td>
                <td className="py-2.5 px-4 text-slate-500">$5.05</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <ShieldCheck className="h-4 w-4 text-blue-700 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Cross-Border Currency Conversion & International Surcharges
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Accepting international buyers on PayPal carries two distinct friction points: an added 1.50% cross-border fee, and PayPal&apos;s internal retail currency exchange spread of 3.0% to 4.0% above mid-market interbank rates. To protect margins when selling globally, consider routing foreign currency receivables into multi-currency balances or utilizing dedicated cross-border processors.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
