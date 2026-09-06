import React from 'react';
import { ShieldCheck, ExternalLink, FileText, CheckCircle2, Building2 } from 'lucide-react';
import { DataSource } from '@/lib/seo/sources';

interface DataSourceCitationProps {
  source: DataSource;
  toolTitle?: string;
  className?: string;
}

export function DataSourceCitation({
  source,
  toolTitle = 'this calculator',
  className = '',
}: DataSourceCitationProps) {
  return (
    <aside
      aria-label="Official Data Source & Regulatory Provenance"
      className={`rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs space-y-4 ${className}`.trim()}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3.5">
        <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm sm:text-base">
          <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
          <span>Official Data Source &amp; Regulatory Provenance</span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200 self-start sm:self-auto">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          <span>{source.lastVerified}</span>
        </div>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed">
        The mathematical formulas, fee percentages, and tax rates used in {toolTitle} are strictly benchmarked against official primary documentation published by governing statutory agencies and payment networks:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1 text-xs">
        <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <Building2 className="h-4 w-4 text-blue-600 shrink-0" />
            <span>Primary Issuing Authority</span>
          </div>
          <p className="text-slate-700 font-medium">{source.authorityName}</p>
          <a
            href={source.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800 hover:underline pt-0.5 transition-colors"
          >
            <span>Visit Official Regulatory Portal</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <FileText className="h-4 w-4 text-indigo-600 shrink-0" />
            <span>Document &amp; Legal Citation</span>
          </div>
          <p className="text-slate-700 font-medium leading-snug">{source.citationTitle}</p>
          {source.regulatoryCode && (
            <span className="inline-block font-mono text-[10px] text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 font-bold">
              {source.regulatoryCode}
            </span>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200/60 bg-slate-50/40 px-3.5 py-2.5 text-[11px] text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>
          <strong>Scope:</strong> {source.dataType}
        </span>
        <span className="text-slate-400 shrink-0">
          Independent audit verification via FeeKit Compliance Standards
        </span>
      </div>
    </aside>
  );
}

export default DataSourceCitation;
