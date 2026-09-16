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

interface ShopifyGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function ShopifyGuide({ sectionClass, inArticleSlot }: ShopifyGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>E-Commerce & Shopify Payments Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Shopify Payments Fee Guide: Plans, POS & Gateway Penalties ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Complete credit card rate schedules for Shopify Basic (2.9% + 30¢), Shopify (2.6% + 30¢), Advanced (2.4% + 30¢), POS card reader rates, and 3rd-party gateway penalties.
        </p>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>The Immediate Answer: Shopify Processing Rates by Plan</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Online credit card transaction fees through Shopify Payments are tiered by your store subscription plan: <strong>Basic Shopify is 2.9% plus $0.30</strong>, the standard <strong>Shopify plan is 2.6% plus $0.30</strong>, and <strong>Advanced Shopify is 2.4% plus $0.30</strong>. In-person card-present retail payments via Shopify POS hardware are discounted to <strong>2.7%, 2.5%, and 2.4%</strong> with $0.00 fixed transaction fees.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          The 3rd-Party Payment Gateway Penalty Trap (0.5% – 2.0%)
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          If you choose not to activate Shopify Payments and instead connect an external third-party payment gateway—such as raw Stripe, PayPal, Authorize.Net, or Adyen—Shopify assesses an additional transaction penalty on every order:
        </p>
        <ul className="space-y-1.5 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
            <span><strong>Basic Shopify:</strong> +2.0% extra penalty fee on every 3rd-party gateway sale.</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Shopify Plan:</strong> +1.0% extra penalty fee.</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Advanced Shopify:</strong> +0.5% extra penalty fee.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-500">
          This penalty makes using external merchant accounts on Shopify financially unviable unless you are on Shopify Plus enterprise contracts with custom negotiated interchange rates.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-emerald-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Shopify Card Fees Across Order Amounts
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Order Value</th>
                <th className="py-3 px-4 text-slate-700">Basic (2.9% + 30¢)</th>
                <th className="py-3 px-4 text-blue-700">Shopify (2.6% + 30¢)</th>
                <th className="py-3 px-4 text-emerald-700">Advanced (2.4% + 30¢)</th>
                <th className="py-3 px-4 text-purple-700">POS In-Person (2.7%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$25.00</td>
                <td className="py-2.5 px-4 text-rose-600">$1.03</td>
                <td className="py-2.5 px-4 text-blue-600">$0.95</td>
                <td className="py-2.5 px-4 text-emerald-600">$0.90</td>
                <td className="py-2.5 px-4 text-purple-600">$0.68</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$50.00</td>
                <td className="py-2.5 px-4 text-rose-600">$1.75</td>
                <td className="py-2.5 px-4 text-blue-600">$1.60</td>
                <td className="py-2.5 px-4 text-emerald-600">$1.50</td>
                <td className="py-2.5 px-4 text-purple-600">$1.35</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$100.00</td>
                <td className="py-2.5 px-4 text-rose-600">$3.20</td>
                <td className="py-2.5 px-4 text-blue-600">$2.90</td>
                <td className="py-2.5 px-4 text-emerald-600">$2.70</td>
                <td className="py-2.5 px-4 text-purple-600">$2.70</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$250.00</td>
                <td className="py-2.5 px-4 text-rose-600">$7.55</td>
                <td className="py-2.5 px-4 text-blue-600">$6.80</td>
                <td className="py-2.5 px-4 text-emerald-600">$6.30</td>
                <td className="py-2.5 px-4 text-purple-600">$6.75</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            When Should You Upgrade From Basic to the Shopify Plan?
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Upgrading from Basic ($39/mo) to the regular Shopify plan ($105/mo) costs an extra $66/month in subscription costs. Because the regular plan cuts card processing from 2.9% to 2.6% (a 0.30% savings), the break-even volume threshold is:
        </p>
        <div className="rounded-lg bg-white border border-slate-200 p-2.5 font-mono text-xs text-slate-800 text-center">
          Break-Even Monthly Sales = $66 ÷ 0.003 = $22,000 / month
        </div>
        <p className="text-xs text-slate-600">
          Once your store reliably processes more than <strong>$22,000 per month</strong> in credit card orders, upgrading to the Shopify plan instantly puts money back in your pocket from lower transaction fees alone.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
