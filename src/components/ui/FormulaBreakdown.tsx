import React from 'react';
import { Sigma, Info } from 'lucide-react';
import katex from 'katex';

interface FormulaBreakdownProps {
  formulaLatex: string;
  explanation: string;
  variables?: Array<{ name: string; description: string }>;
}

export function FormulaBreakdown({
  formulaLatex,
  explanation,
  variables = [],
}: FormulaBreakdownProps) {
  let mathHtml = '';
  try {
    mathHtml = katex.renderToString(formulaLatex, {
      throwOnError: false,
      displayMode: true,
    });
  } catch {
    mathHtml = '';
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2.5 text-blue-600 mb-3">
        <Sigma className="h-5 w-5" />
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
          Mathematical Formula & Calculation Logic
        </h4>
      </div>

      {/* Rendered Math Formula Display */}
      <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/40 via-white to-indigo-50/30 p-4 sm:p-6 overflow-x-auto shadow-xs">
        {mathHtml ? (
          <div
            className="text-base sm:text-lg flex justify-center items-center py-2 text-slate-900 font-medium"
            dangerouslySetInnerHTML={{ __html: mathHtml }}
          />
        ) : (
          <div className="font-mono text-sm font-semibold text-slate-800 text-center">
            {formulaLatex}
          </div>
        )}
      </div>

      {/* Narrative Explanation */}
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {explanation}
      </p>

      {variables.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
            <Info className="h-3.5 w-3.5" />
            <span>Formula Parameters</span>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {variables.map((v, i) => (
              <div key={i} className="rounded-md bg-slate-50 p-2.5 border border-slate-200">
                <dt className="font-mono font-bold text-blue-700">{v.name}</dt>
                <dd className="text-slate-600 mt-0.5">{v.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
