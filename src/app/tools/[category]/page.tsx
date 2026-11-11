import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import geoMatrix from '@/data/geo-matrix.json';
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Globe,
  Sparkles,
} from 'lucide-react';
import { LeaderboardAd, RectangleAd } from '@/components/ads/AdSlots';
import type { Metadata } from 'next';
import { getCustomSeoMetadata } from '@/lib/seo/meta-overrides';
import { CATEGORY_NAMES } from '@/lib/seo/category-names';
import { buildDescription, buildTitle, stripTitleNoise } from '@/lib/seo/meta-builder';
import { getCategoryFaqs } from '@/lib/seo/category-faqs';
import { StateSalesTaxRateTable } from '@/components/seo/StateSalesTaxRateTable';
import { VatRateTable } from '@/components/seo/VatRateTable';
import { GatewayFeeTable } from '@/components/seo/GatewayFeeTable';
import { CategoryJsonLd } from '@/components/seo/JsonLd';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

type Props = {
  params: Promise<{ category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const matrixList = Array.isArray(geoMatrix)
    ? (geoMatrix as Array<{ category: string }>)
    : ((((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<{ category: string }>));
  const categories = Array.from(new Set(matrixList.map((x) => x.category)));
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const customSeo = getCustomSeoMetadata(category);
  const meta = CATEGORY_NAMES[category];

  const rawTitle = customSeo
    ? customSeo.title
    : (meta ? meta.title : `${category.replace(/-/g, ' ')} Calculators`);
  const rawDescription = customSeo
    ? customSeo.description
    : (meta
        ? meta.desc
        : `Free, instant client-side calculators for ${category.replace(/-/g, ' ')}.`);

  const { core, modifier } = stripTitleNoise(rawTitle);
  const title = buildTitle(core, modifier);
  const description = buildDescription(rawDescription);
  const canonical = `https://www.usefeekit.com/tools/${category}`;

  return {
    title,
    description,
    keywords: [core, `${core} 2026`, 'free online calculator', 'instant rates'].filter(
      (k, i, arr) => k.length > 3 && arr.indexOf(k) === i
    ),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        'en-US': canonical,
        'x-default': canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'FeeKit',
      type: 'website',
      images: [
        {
          url: 'https://www.usefeekit.com/og-image.png',
          width: 1200,
          height: 630,
          alt: `${core} — FeeKit`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.usefeekit.com/og-image.png'],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const matrixList = Array.isArray(geoMatrix)
    ? (geoMatrix as Array<any>)
    : ((((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<any>));
  const tools = matrixList.filter((x) => x.category === category);

  if (tools.length === 0) {
    notFound();
  }

  const categoryMeta = CATEGORY_NAMES[category];
  const title = categoryMeta?.title || `${category.replace(/-/g, ' ').toUpperCase()} CALCULATORS`;
  const desc = categoryMeta?.desc || `Explore all ${tools.length} dedicated calculators and regional utilities in this suite.`;

  // Find flagship tool
  const defaultSlug = categoryMeta?.defaultSlug;
  const primaryTool = (defaultSlug && tools.find((t) => t.slug === defaultSlug)) || tools[0];

  // Hub-level FAQ block (written for the head term this hub targets) plus the
  // flagship tool's own FAQs. This is what makes the hub eligible for Google
  // FAQ rich results on queries like "sales tax calculator" or "stripe fees".
  const hubFaqs = getCategoryFaqs(category);
  const allFaqs =
    hubFaqs.length > 0
      ? hubFaqs
      : (primaryTool?.faqs || []).map((f: any) => ({ question: f.question, answer: f.answer }));

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Schema.org CollectionPage + ItemList + BreadcrumbList */}
      <CategoryJsonLd
        category={category}
        title={title}
        description={desc}
        tools={tools.map((t) => ({ title: t.shortTitle || t.title, slug: t.slug }))}
      />

      {/* Top Hub Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 sm:px-0">
        <BackButton fallbackHref="/" label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      {/* Unified Master Container: Edge-to-Edge on Mobile, Contained on Desktop */}
      <article className="w-full rounded-none sm:rounded-3xl border-y sm:border border-slate-200 bg-white px-3.5 py-6 sm:p-10 lg:p-12 shadow-xs space-y-10">
        {/* Header */}
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-slate-700 border border-slate-200">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
              <span>Documented Methodology</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-blue-700 border border-blue-200">
              <span>{tools.length} Regional Utilities</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-slate-700 border border-slate-200 font-mono">
              <span>Verified 2026</span>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {desc}
            </p>
          </div>
        </header>

        {/* AdSense Leaderboard Unit */}
        <LeaderboardAd />

        {/* Full 50-state rate table - the block that ranks the hub for
            "sales tax calculator" and "sales tax rate by state" queries. */}
        {category === 'sales-tax-calculator' && <StateSalesTaxRateTable />}

        {/* VAT rate table for the UK / EU / Canada hub. */}
        {category === 'vat-calculator' && <VatRateTable />}

        {/* Published fee schedule tables for the payment processor hubs. */}
        <GatewayFeeTable category={category} />

        {/* Primary Flagship Launcher Banner */}
        {primaryTool && (
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  <span>Recommended Flagship Tool</span>
                </div>
                <h2 className="text-xl font-black text-slate-900">
                  {primaryTool.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  {primaryTool.subtitle}
                </p>
              </div>
              <Link
                href={`/tools/${category}/${primaryTool.slug}`}
                prefetch={false}
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-xs hover:bg-blue-700 transition-colors"
              >
                <span>Launch Calculator</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Grid of All Tools in this Category */}
        <div className="pt-8 sm:pt-10 border-t border-slate-200/80 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">
              All Available Regional Tools & Benchmarks ({tools.length})
            </h3>
            <span className="text-xs text-slate-500 font-medium">Click any card to calculate</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${category}/${tool.slug}`}
                prefetch={false}
                className="group rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 shadow-2xs hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tool.shortTitle || tool.title}
                    </span>
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-slate-600 shrink-0">
                      {tool.currencySymbol || '$'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {tool.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-blue-600 font-semibold">
                  <span>Open Calculator</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Programmatic Category FAQs & Structured Data */}
        {allFaqs.length > 0 && (
          <div className="pt-8 sm:pt-10 border-t border-slate-200/80 space-y-4">
            <FaqSchema items={allFaqs} />
            <FaqAccordion
              items={allFaqs}
              title={`${title} — Frequently Asked Questions`}
              embedded={true}
            />
          </div>
        )}

        {/* AdSense Rectangle Unit */}
        <div className="flex justify-center my-6">
          <RectangleAd />
        </div>
      </article>
    </div>
  );
}
