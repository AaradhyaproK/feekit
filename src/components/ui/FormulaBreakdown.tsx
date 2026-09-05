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
    // If formula has multi-part equations with '|', stack them gracefully on separate lines
    const formattedLatex = formulaLatex.includes('\\quad | \\quad')
      ? `\\begin{gathered} ${formulaLatex.split(/\\quad\s*\|\s*\\quad/).join(' \\\\[10pt] ')} \\end{gathered}`
      : formulaLatex;

    mathHtml = katex.renderToString(formattedLatex, {
      throwOnError: false,
      displayMode: true,
    });
  } catch {
    mathHtml = '';
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
        <div className="flex items-center gap-2.5 text-blue-600">
          <Sigma className="h-5 w-5" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Mathematical Formula & Calculation Logic
          </h4>
        </div>
        <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
          KaTeX Formatted
        </span>
      </div>

      {/* Rendered Math Formula Display with Generous Start & End Space */}
      <div className="relative w-full rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50/50 via-white to-indigo-50/40 p-4 sm:p-6 shadow-xs overflow-hidden">
        <div className="w-full overflow-x-auto smooth-scroll-x no-scrollbar py-3 px-6 sm:px-12 md:px-16 text-center">
          {mathHtml ? (
            <div
              className="inline-block min-w-fit mx-auto text-center text-sm sm:text-base md:text-lg text-slate-900 font-medium px-6 sm:px-10 py-2 select-all"
              dangerouslySetInnerHTML={{ __html: mathHtml }}
            />
          ) : (
            <div className="inline-block min-w-fit mx-auto font-mono text-sm font-semibold text-slate-800 text-center px-6 sm:px-10 py-2">
              {formulaLatex}
            </div>
          )}
        </div>
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
