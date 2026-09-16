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

interface CanadaTaxGuideProps {
  sectionClass: string;
  stateName?: string;
  baseRate?: number;
  inArticleSlot?: React.ReactNode;
}

export function CanadaTaxGuide({ sectionClass, stateName = 'Canada', baseRate, inArticleSlot }: CanadaTaxGuideProps) {
  const currentYear = new Date().getFullYear();

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>Canada Revenue Agency (CRA) Compliance Guide</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          {stateName} Sales Tax Guide: GST, PST & HST Rules ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A statutory tax compliance guide covering federal 5% GST, provincial sales tax rates, the CRA $30,000 small supplier threshold, and Input Tax Credits (ITCs).
        </p>
      </div>

      <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-red-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-red-600 shrink-0" />
          <span>The Immediate Answer: Sales Tax Structure in {stateName}</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          In Canada, sales taxes operate under three regimes: <strong>Harmonized Sales Tax (HST)</strong> which combines federal and provincial tax into a single rate (e.g. Ontario at 13%, Atlantic provinces at 15%); <strong>separate GST + PST/QST</strong> (e.g. British Columbia 5% GST + 7% PST, Quebec 5% GST + 9.975% QST); and <strong>federal GST only</strong> in Alberta and the northern territories at 5%. Registered businesses collect tax on taxable sales and recover tax paid on business inputs via Input Tax Credits (ITCs).
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          The CRA $30,000 CAD Small Supplier Threshold
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Under Canada Revenue Agency (CRA) regulations, sole proprietors and small corporations are classified as <strong>small suppliers</strong> if worldwide gross taxable revenues remain at or below <strong>$30,000 CAD</strong> over any single calendar quarter or four consecutive calendar quarters.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Small suppliers are exempt from mandatory GST/HST registration and are not permitted to charge sales tax to clients. However, registering voluntarily allows small businesses to claim ITCs and recover all GST/HST paid on operating equipment, software subscriptions, and commercial office lease rent.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <FileSpreadsheet className="h-4 w-4 text-red-600 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Data Table: Complete Provincial Sales Tax Rates Across Canada
          </h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                <th className="py-3 px-4">Province / Territory</th>
                <th className="py-3 px-4 text-slate-700">Type</th>
                <th className="py-3 px-4 text-blue-700">Federal GST</th>
                <th className="py-3 px-4 text-purple-700">Provincial (PST/QST)</th>
                <th className="py-3 px-4 text-red-700">Total Rate</th>
                <th className="py-3 px-4 text-slate-900">Tax on $100 CAD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
              <tr className={stateName === 'Ontario' ? 'bg-red-50 font-semibold' : ''}>
                <td className="py-2.5 px-4 font-sans font-semibold">Ontario</td>
                <td className="py-2.5 px-4 font-sans">HST</td>
                <td className="py-2.5 px-4">5%</td>
                <td className="py-2.5 px-4">8%</td>
                <td className="py-2.5 px-4 text-red-600 font-bold">13.00%</td>
                <td className="py-2.5 px-4">$13.00</td>
              </tr>
              <tr className={stateName === 'British Columbia' ? 'bg-red-50 font-semibold' : ''}>
                <td className="py-2.5 px-4 font-sans font-semibold">British Columbia</td>
                <td className="py-2.5 px-4 font-sans">GST + PST</td>
                <td className="py-2.5 px-4">5%</td>
                <td className="py-2.5 px-4">7%</td>
                <td className="py-2.5 px-4 text-red-600 font-bold">12.00%</td>
                <td className="py-2.5 px-4">$12.00</td>
              </tr>
              <tr className={stateName === 'Quebec' ? 'bg-red-50 font-semibold' : ''}>
                <td className="py-2.5 px-4 font-sans font-semibold">Quebec</td>
                <td className="py-2.5 px-4 font-sans">GST + QST</td>
                <td className="py-2.5 px-4">5%</td>
                <td className="py-2.5 px-4">9.975%</td>
                <td className="py-2.5 px-4 text-red-600 font-bold">14.975%</td>
                <td className="py-2.5 px-4">$14.98</td>
              </tr>
              <tr className={stateName === 'Alberta' ? 'bg-red-50 font-semibold' : ''}>
                <td className="py-2.5 px-4 font-sans font-semibold">Alberta</td>
                <td className="py-2.5 px-4 font-sans">GST Only</td>
                <td className="py-2.5 px-4">5%</td>
                <td className="py-2.5 px-4">0%</td>
                <td className="py-2.5 px-4 text-red-600 font-bold">5.00%</td>
                <td className="py-2.5 px-4">$5.00</td>
              </tr>
              <tr className={['Nova Scotia', 'New Brunswick', 'Prince Edward Island', 'Newfoundland and Labrador'].includes(stateName) ? 'bg-red-50 font-semibold' : ''}>
                <td className="py-2.5 px-4 font-sans font-semibold">Atlantic Canada (NS, NB, PE, NL)</td>
                <td className="py-2.5 px-4 font-sans">HST</td>
                <td className="py-2.5 px-4">5%</td>
                <td className="py-2.5 px-4">10%</td>
                <td className="py-2.5 px-4 text-red-600 font-bold">15.00%</td>
                <td className="py-2.5 px-4">$15.00</td>
              </tr>
              <tr className={['Saskatchewan', 'Manitoba'].includes(stateName) ? 'bg-red-50 font-semibold' : ''}>
                <td className="py-2.5 px-4 font-sans font-semibold">SK (11%) / MB (12%)</td>
                <td className="py-2.5 px-4 font-sans">GST + PST</td>
                <td className="py-2.5 px-4">5%</td>
                <td className="py-2.5 px-4">6% / 7%</td>
                <td className="py-2.5 px-4 text-red-600 font-bold">11% - 12%</td>
                <td className="py-2.5 px-4">$11.00 - $12.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <ShieldCheck className="h-4 w-4 text-red-600 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Rules for US & Non-Resident Digital Sellers
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Foreign non-resident businesses selling digital products, streaming media, mobile apps, or software-as-a-service (SaaS) to Canadian retail consumers are required under the CRA simplified GST/HST framework to register and collect 5% federal GST once Canadian taxable sales cross $30,000 CAD over a 12-month period.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
