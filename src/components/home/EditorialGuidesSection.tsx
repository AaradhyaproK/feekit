'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import blogManifest from '@/data/blog-manifest.json';

const CATEGORY_COLORS: Record<string, string> = {
  'Payment Fees': 'border-blue-200 bg-blue-50 text-blue-700',
  Ecommerce: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  Invoicing: 'border-violet-200 bg-violet-50 text-violet-700',
  'Small Business': 'border-emerald-200 bg-emerald-50 text-emerald-700',
  'Business Finance': 'border-teal-200 bg-teal-50 text-teal-700',
  'US Sales Tax': 'border-indigo-200 bg-indigo-50 text-indigo-700',
  'UK VAT': 'border-sky-200 bg-sky-50 text-sky-700',
  '1099 & Freelance': 'border-purple-200 bg-purple-50 text-purple-700',
  Freelancing: 'border-purple-200 bg-purple-50 text-purple-700',
  'Accounting Software': 'border-amber-200 bg-amber-50 text-amber-700',
};

const FILTER_TABS = [
  'All',
  'Payment Fees',
  'Ecommerce',
  'Invoicing',
  'Small Business',
  'Taxes & VAT',
] as const;

export function EditorialGuidesSection() {
  const [selectedTab, setSelectedTab] = useState<string>('All');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredArticles = useMemo(() => {
    if (selectedTab === 'All') return blogManifest;
    if (selectedTab === 'Taxes & VAT') {
      return blogManifest.filter(
        (a) =>
          a.category === 'US Sales Tax' ||
          a.category === 'UK VAT' ||
          a.category === '1099 & Freelance'
      );
    }
    return blogManifest.filter((a) => a.category === selectedTab);
  }, [selectedTab]);

  // Show 9 on initial load unless expanded, or if user filtered to a specific category
  const visibleArticles =
    isExpanded || selectedTab !== 'All'
      ? filteredArticles
      : filteredArticles.slice(0, 9);

  return (
    <section
      aria-label="Featured Financial & Tax Editorial Research"
      className="space-y-5 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xs"
    >
      {/* Header with Live Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-blue-600" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
              Deep-Dive Editorial Research
            </h2>
            <span className="rounded-full bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-0.5">
              {blogManifest.length} Articles
            </span>
          </div>
          <p className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            Independent Financial Guides &amp; Regulatory Benchmark Studies
          </p>
        </div>
        <Link
          href="/blog"
          className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 group shrink-0"
        >
          <span>View all {blogManifest.length} guides</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {FILTER_TABS.map((tab) => {
          const isActive = selectedTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setSelectedTab(tab);
                setIsExpanded(true);
              }}
              className={`tap-spring whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab === 'All' ? `All Guides (${blogManifest.length})` : tab}
            </button>
          );
        })}
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {visibleArticles.map((art) => {
          const badgeClass =
            CATEGORY_COLORS[art.category] ||
            'border-slate-200 bg-slate-50 text-slate-700';

          return (
            <Link
              key={art.slug}
              href={`/blog/${art.slug}`}
              className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200/90 bg-slate-50/40 p-4 sm:p-5 transition-all duration-200 shadow-2xs hover:border-blue-400 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold ${badgeClass}`}
                  >
                    <Tag className="h-3 w-3" />
                    <span>{art.category}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <Clock className="h-3 w-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {art.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span>Read complete breakdown</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Expand / Collapse Button if viewing "All" */}
      {selectedTab === 'All' && blogManifest.length > 9 && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="tap-spring inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-white hover:border-blue-300 hover:text-blue-700 shadow-2xs transition-all cursor-pointer"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                <span>Show Less (Collapse to 9 Guides)</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                <span>Show All {blogManifest.length} Guides (+{blogManifest.length - 9} More)</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Crawlable Semantic Index for AI Bots and Search Crawlers */}
      <div className="border-t border-slate-100 pt-4 mt-6">
        <details className="text-xs text-slate-500">
          <summary className="font-semibold text-slate-700 cursor-pointer hover:text-blue-600">
            Complete Index of all {blogManifest.length} FeeKit Guides (Click to browse all topics)
          </summary>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pl-4 list-disc text-[11px] text-slate-600">
            {blogManifest.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="hover:text-blue-600 hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
