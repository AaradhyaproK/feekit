import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  Scale,
  Calculator,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Clock,
} from 'lucide-react';
import type { PageContent } from '../../../content/types.ts';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { FaqAccordion } from '@/components/ui/FaqAccordion';

interface BespokeContentGuideProps {
  content: PageContent;
  inArticleSlot?: React.ReactNode;
}

export function BespokeContentGuide({ content, inArticleSlot }: BespokeContentGuideProps) {
  const { title, primarySource, lastVerified, overview, sections, workedExample, workedExampleReverse, faqs } = content;

  return (
    <section aria-label="Statutory Analysis & Strategic Guide" className="pt-8 sm:pt-10 border-t border-slate-200/80 space-y-8">
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
          <BookOpen className="h-4 w-4" />
          <span>Verified Statutory Analysis &amp; Technical Guide</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {content.h1 || title}
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
          {overview}
        </p>
      </div>

      {/* Sections Grid / Stack */}
      <div className="space-y-6">
        {sections.map((sec, idx) => (
          <div key={sec.id || idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-7 space-y-3.5 shadow-2xs">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-100/70 text-blue-700 text-xs font-mono font-bold">
                {idx + 1}
              </span>
              <span>{sec.title}</span>
            </h3>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2.5 whitespace-pre-line font-sans">
              {sec.body}
            </div>
          </div>
        ))}
      </div>

      {/* In-Article Ad Slot */}
      {inArticleSlot}

      {/* Worked Example 1 (Forward Math) */}
      {workedExample && (
        <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-5 sm:p-7 space-y-5 shadow-2xs">
          <div className="border-b border-blue-200/60 pb-3">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
              <Calculator className="h-4 w-4" />
              <span>Step-by-Step Mathematical Walkthrough</span>
            </div>
            <h3 className="text-base sm:text-xl font-extrabold text-slate-900 mt-1">
              {workedExample.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              {workedExample.scenario}
            </p>
          </div>

          {/* Steps Table */}
          <div className="overflow-x-auto rounded-xl border border-blue-200/80 bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                  <th className="py-2.5 px-3.5">Step / Component</th>
                  <th className="py-2.5 px-3.5 text-slate-700">Formula / Calculation</th>
                  <th className="py-2.5 px-3.5 text-blue-700">Result Amount</th>
                  <th className="py-2.5 px-3.5 text-slate-600">Statutory / Operational Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {workedExample.steps.map((st, i) => (
                  <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-2.5 px-3.5 font-semibold text-slate-900">{st.label}</td>
                    <td className="py-2.5 px-3.5 font-mono text-slate-600">{st.formula || '—'}</td>
                    <td className="py-2.5 px-3.5 font-mono font-bold text-blue-700">{st.amount}</td>
                    <td className="py-2.5 px-3.5 text-[11px] text-slate-500">{st.note || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl bg-white/80 border border-blue-200/70 p-3.5 text-xs text-slate-700 leading-relaxed">
            <strong className="text-blue-900 font-bold">Key Takeaway: </strong>
            {workedExample.takeaway}
          </div>
        </div>
      )}

      {/* Worked Example 2 (Reverse Math, if present) */}
      {workedExampleReverse && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5 sm:p-7 space-y-5 shadow-2xs">
          <div className="border-b border-emerald-200/60 pb-3">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
              <Scale className="h-4 w-4" />
              <span>Reverse Gross-Up Payout Walkthrough</span>
            </div>
            <h3 className="text-base sm:text-xl font-extrabold text-slate-900 mt-1">
              {workedExampleReverse.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              {workedExampleReverse.scenario}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-emerald-200/80 bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 font-bold text-slate-900">
                  <th className="py-2.5 px-3.5">Step / Component</th>
                  <th className="py-2.5 px-3.5 text-slate-700">Formula / Calculation</th>
                  <th className="py-2.5 px-3.5 text-emerald-700">Result Amount</th>
                  <th className="py-2.5 px-3.5 text-slate-600">Statutory / Operational Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {workedExampleReverse.steps.map((st, i) => (
                  <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-2.5 px-3.5 font-semibold text-slate-900">{st.label}</td>
                    <td className="py-2.5 px-3.5 font-mono text-slate-600">{st.formula || '—'}</td>
                    <td className="py-2.5 px-3.5 font-mono font-bold text-emerald-700">{st.amount}</td>
                    <td className="py-2.5 px-3.5 text-[11px] text-slate-500">{st.note || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl bg-white/80 border border-emerald-200/70 p-3.5 text-xs text-slate-700 leading-relaxed">
            <strong className="text-emerald-900 font-bold">Key Takeaway: </strong>
            {workedExampleReverse.takeaway}
          </div>
        </div>
      )}

      {/* Primary Source & Regulatory Verification Card */}
      {primarySource && (
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Primary Source: {primarySource.name}</span>
            </div>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              {primarySource.citation}
            </p>
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <Clock className="h-3 w-3" />
              <span>Last statutory rate check: <strong className="text-slate-700">{lastVerified}</strong></span>
            </div>
          </div>
          <a
            href={primarySource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-slate-400 transition-colors shadow-2xs shrink-0"
          >
            <span>Review Official Source</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}

      {/* Bespoke FAQs with Schema */}
      {faqs && faqs.length > 0 && (
        <div className="space-y-4 pt-2">
          <FaqSchema items={faqs} />
          <FaqAccordion
            items={faqs}
            title={`${content.title.split('|')[0].trim()} — Frequently Asked Questions`}
            embedded={true}
          />
        </div>
      )}
    </section>
  );
}

