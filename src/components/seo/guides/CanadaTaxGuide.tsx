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
import { getCanadaProvince } from './canada-province-data';

interface CanadaTaxGuideProps {
  sectionClass: string;
  stateName?: string;
  /** The matrix slug for the province, used to resolve province-specific facts. */
  countrySlug?: string;
  baseRate?: number;
  inArticleSlot?: React.ReactNode;
}

export function CanadaTaxGuide({
  sectionClass,
  stateName = 'Canada',
  countrySlug,
  baseRate,
  inArticleSlot,
}: CanadaTaxGuideProps) {
  const currentYear = new Date().getFullYear();
  const facts = getCanadaProvince(countrySlug || '');

  return (
    <section className={sectionClass}>
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
          <BookOpen className="h-4 w-4" />
          <span>{facts.authority} Compliance Guide</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          {facts.name} Sales Tax Guide: GST, PST & HST Rules ({currentYear})
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A statutory tax compliance guide covering the federal 5% GST, the {facts.regime}{' '}
          structure in {facts.name}, the CRA $30,000 small supplier threshold, and Input Tax
          Credits (ITCs). {facts.citation}
        </p>
      </div>

      <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 space-y-3">
        <div className="flex items-center gap-2 text-red-950 font-bold text-sm">
          <DollarSign className="h-4 w-4 text-red-600 shrink-0" />
          <span>The Immediate Answer: Sales Tax Structure in {facts.name}</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">{facts.answer}</p>
        <p className="text-sm text-slate-700 leading-relaxed">
          On a $100.00 CAD net sale in {facts.name}, the tax collected is{' '}
          <strong>{facts.taxOn100}</strong> at a combined{' '}
          <strong>{facts.total.toFixed(3).replace(/\.?0+$/, '')}%</strong> rate.{' '}
          {facts.isHST
            ? 'Because this province applies a harmonized rate, the invoice carries a single tax line rather than a federal and provincial breakdown.'
            : 'Because the federal and provincial components are separate taxes, the invoice shows them as distinct lines and they are administered by two different authorities.'}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          The CRA $30,000 CAD Small Supplier Threshold in {facts.name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Under Canada Revenue Agency (CRA) regulations, sole proprietors and small corporations
          are classified as <strong>small suppliers</strong> if worldwide gross taxable revenues
          remain at or below <strong>$30,000 CAD</strong> over any single calendar quarter or
          four consecutive calendar quarters. This threshold applies identically in{' '}
          {facts.name} and across the rest of Canada, and it applies to a business in{' '}
          {facts.name} regardless of where its customers are located.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Small suppliers are exempt from mandatory GST/HST registration and are not permitted
          to charge sales tax to clients. However, registering voluntarily allows small
          businesses to claim ITCs and recover all GST/HST paid on operating equipment, software
          subscriptions, and commercial office lease rent. In {facts.name}, a business that
          voluntarily registers for the {facts.regime} regime can recover tax on those inputs at
          the full {facts.total}% rate.
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
              <tr className={stateName === 'Nova Scotia' ? 'bg-red-50 font-semibold' : ''}>
                <td className="py-2.5 px-4 font-sans font-semibold">Nova Scotia (from Apr 2025)</td>
                <td className="py-2.5 px-4 font-sans">HST</td>
                <td className="py-2.5 px-4">5%</td>
                <td className="py-2.5 px-4">9%</td>
                <td className="py-2.5 px-4 text-red-600 font-bold">14.00%</td>
                <td className="py-2.5 px-4">$14.00</td>
              </tr>
              <tr className={['New Brunswick', 'Prince Edward Island', 'Newfoundland and Labrador'].includes(stateName) ? 'bg-red-50 font-semibold' : ''}>
                <td className="py-2.5 px-4 font-sans font-semibold">Atlantic Canada (NB, PE, NL)</td>
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
            Filing, Registration & Non-Resident Sellers in {facts.name}
          </h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{facts.filing}</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Foreign non-resident businesses selling digital products, streaming media, mobile apps,
          or software-as-a-service (SaaS) to consumers in {facts.name} are required under the CRA
          simplified GST/HST framework to register and collect the 5% federal GST once Canadian
          taxable sales cross $30,000 CAD over a 12-month period. Physical presence is not
          required - economic nexus alone triggers the obligation. Marketplace facilitators such
          as Amazon, Shopify and Etsy are required to collect the tax themselves for sales they
          facilitate, but you remain responsible for sales made through your own website.
        </p>
      </div>

      {inArticleSlot}
    </section>
  );
}
