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

interface GumroadGuideProps {
  sectionClass: string;
  inArticleSlot?: React.ReactNode;
}

export function GumroadGuide({ sectionClass, inArticleSlot }: GumroadGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Creator Economy & Merchant of Record Analysis</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Gumroad Creator Fees Explained: 10% Flat Rate & Payouts ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A transparent breakdown of Gumroad&apos;s 10% + $0.50 creator pricing model with bundled payment processing, Merchant of Record (MoR) EU VAT handling, and Friday payouts.
        </p>
      </div>

      {/* Immediate Answer */}
      <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-pink-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-pink-600 shrink-0" />
          <span>The Immediate Answer: What Gumroad Deducts Per Sale</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Gumroad charges a flat <strong>10% platform fee plus $0.50 per sale</strong>, with standard credit card and payment processing bundled directly into the transaction fee. On a $50 digital product sale, Gumroad deducts $5.50 ($5.00 platform fee + $0.50 fixed charge) and delivers $44.50 to your creator balance.
        </p>
      </div>

      {/* Why Gumroad Charges 10% vs Stripe */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Why 10% on Gumroad is Often Cheaper Than 2.9% on Raw Stripe
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          New creators often ask why they should pay 10% + $0.50 on Gumroad when raw Stripe charges 2.9% + $0.30. The difference is the <strong>Merchant of Record (MoR)</strong> model.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          When you sell via raw Stripe, your business is the legal merchant: you must register for sales tax in 45+ US states once economic nexus is reached, collect and file European Union VAT via the One-Stop Shop (OSS), handle chargeback representations, and host download infrastructure. Gumroad acts as the legal reseller, legally absorbing all international tax collection, VAT remittance, file delivery bandwidth, and fraud liability under their own corporate umbrella.
        </p>
      </div>

      {/* Data Table 1 */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-pink-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Gumroad Net Creator Payouts by Product Price (10% + $0.50)
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Product Price</th>
                <th className="py-3 px-4 text-pink-700">Gumroad 10% Fee</th>
                <th className="py-3 px-4 text-slate-700">Fixed MoR Fee</th>
                <th className="py-3 px-4 text-slate-900">Total Deductions</th>
                <th className="py-3 px-4 text-emerald-700">Net Creator Payout</th>
                <th className="py-3 px-4 text-slate-500">Effective Fee %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$5.00 (E-book)</td>
                <td className="py-2.5 px-4 text-pink-700 font-semibold">$0.50</td>
                <td className="py-2.5 px-4">$0.50</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$1.00</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$4.00</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">20.00%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$20.00 (Template)</td>
                <td className="py-2.5 px-4 text-pink-700 font-semibold">$2.00</td>
                <td className="py-2.5 px-4">$0.50</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$2.50</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$17.50</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">12.50%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$50.00 (Video Course)</td>
                <td className="py-2.5 px-4 text-pink-700 font-semibold">$5.00</td>
                <td className="py-2.5 px-4">$0.50</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$5.50</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$44.50</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">11.00%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$100.00 (Software Toolkit)</td>
                <td className="py-2.5 px-4 text-pink-700 font-semibold">$10.00</td>
                <td className="py-2.5 px-4">$0.50</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$10.50</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$89.50</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">10.50%</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-slate-900 font-sans">$500.00 (Masterclass)</td>
                <td className="py-2.5 px-4 text-pink-700 font-semibold">$50.00</td>
                <td className="py-2.5 px-4">$0.50</td>
                <td className="py-2.5 px-4 text-rose-600 font-semibold">$50.50</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">$449.50</td>
                <td className="py-2.5 px-4 font-sans text-slate-500">10.10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Payout & Discover Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
          <div className="font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>Friday Payout Schedule</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Gumroad pays out earnings every Friday for sales processed up to the previous Friday (subject to a standard 7-day rolling reserve for fraud protection). Payouts require a minimum $10 balance and can be routed to your bank account or PayPal.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
          <div className="font-bold text-slate-900 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <span>Gumroad Discover (Extra 10%)</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            If a customer finds your product through the public Gumroad Discover marketplace or recommendation algorithm, an additional 10% affiliate discovery fee is charged, bringing the total platform deduction to 20% on that specific referral.
          </p>
        </div>
      </div>

      {inArticleSlot}
    </section>
  );
}
