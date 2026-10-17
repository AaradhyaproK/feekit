'use client';

import React, { useState } from 'react';
import { Code, Check, Copy, X, ExternalLink, Sparkles, Monitor } from 'lucide-react';

interface EmbedCalculatorModalProps {
  category: string;
  slug: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function EmbedCalculatorModal({
  category,
  slug,
  title,
  isOpen,
  onClose,
}: EmbedCalculatorModalProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(560);
  const [includeBorder, setIncludeBorder] = useState<boolean>(true);

  if (!isOpen) return null;

  const embedUrl = `https://www.usefeekit.com/embed/${category}/${slug}`;
  const borderStyle = includeBorder
    ? 'border:1px solid #e2e8f0;border-radius:16px;'
    : 'border:none;';

  const embedSnippet = `<!-- FeeKit Calculator Widget: ${title} -->
<iframe
  src="${embedUrl}"
  width="100%"
  height="${height}"
  frameborder="0"
  scrolling="no"
  style="${borderStyle}max-width:100%;"
  title="${title} Widget by FeeKit"
></iframe>
<div style="font-size:11px;font-family:system-ui,-apple-system,sans-serif;margin-top:6px;color:#64748b;">
  Free Calculator by <a href="https://www.usefeekit.com" target="_blank" rel="noopener" style="color:#2563eb;text-decoration:none;font-weight:600;">FeeKit</a>
</div>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="embed-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-2xl space-y-5">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
              <Code className="h-5 w-5" />
            </div>
            <div>
              <h3 id="embed-modal-title" className="text-lg sm:text-xl font-bold text-slate-900">
                Embed This Calculator
              </h3>
              <p className="text-xs text-slate-500">
                Add this interactive calculator to your blog, Shopify store, or agency site
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700">Widget Height (px)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={400}
                max={900}
                step={20}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value) || 560)}
                className="w-24 rounded-lg border border-slate-300 px-3 py-1.5 font-mono text-slate-800"
              />
              <span className="text-slate-400">Default: 560px</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-slate-700">Container Styling</label>
            <label className="flex items-center gap-2 cursor-pointer mt-1.5">
              <input
                type="checkbox"
                checked={includeBorder}
                onChange={(e) => setIncludeBorder(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-slate-600">Rounded border &amp; shadow</span>
            </label>
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
              Copy &amp; Paste HTML Embed Code
            </span>
            <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold text-[11px] flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> 100% Free Embeddable Tool
            </span>
          </div>
          <div className="relative">
            <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-200 leading-relaxed border border-slate-800 max-h-40">
              <code>{embedSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
          <a
            href={`/embed/${category}/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Monitor className="h-4 w-4" />
            <span>Open Standalone Widget Preview</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-all active:scale-98"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-white" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Embed Code</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
