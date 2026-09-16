import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import geoMatrix from '@/data/geo-matrix.json';
import { GeoJsonLd } from '@/components/seo/JsonLd';
import { ToolGuide } from '@/components/seo/ToolGuide';
import { LeaderboardAd, RectangleAd, InArticleAd } from '@/components/ads/AdSlots';
import { FormulaBreakdown } from '@/components/ui/FormulaBreakdown';
import { TierComparisonTable } from '@/components/ui/TierComparisonTable';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { FaqSchema } from '@/components/seo/FaqSchema';
import { DataSourceCitation } from '@/components/seo/DataSourceCitation';
import { getDataSource } from '@/lib/seo/sources';
import { MerchantFeeCalculator } from '@/components/calculators/MerchantFeeCalculator';
import { TaxCalculator } from '@/components/calculators/TaxCalculator';
import { SalesTaxCalculator } from '@/components/calculators/SalesTaxCalculator';
import { VatCalculator } from '@/components/calculators/VatCalculator';
import { FreelanceRateCalculator } from '@/components/calculators/FreelanceRateCalculator';
import { EcommerceProfitCalculator } from '@/components/calculators/EcommerceProfitCalculator';
import { ProfitMarginCalculator } from '@/components/calculators/ProfitMarginCalculator';
import { BreakEvenCalculator } from '@/components/calculators/BreakEvenCalculator';
import { RoiCalculator } from '@/components/calculators/RoiCalculator';
import { QuarterlyTaxCalculator } from '@/components/calculators/QuarterlyTaxCalculator';
import { UkIr35Calculator } from '@/components/calculators/UkIr35Calculator';
import { GatewayComparator } from '@/components/calculators/GatewayComparator';
import { InvoiceGenerator } from '@/components/calculators/InvoiceGenerator';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { getCustomSeoMetadata } from '@/lib/seo/meta-overrides';
import { BackButton } from '@/components/ui/BackButton';
import { FastSearchBar } from '@/components/search/FastSearchBar';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const getMatrixItems = (): Array<any> => {
  return Array.isArray(geoMatrix)
    ? (geoMatrix as Array<any>)
    : ((((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<any>));
};

function findMatrixItem(category: string, slug: string) {
  const items = getMatrixItems();
  const direct = items.find((x) => x.category === category && x.slug === slug);
  if (direct) return direct;

  // Fallback aliases for Square POS
  if (category === 'square-fee-calculator') {
    if (slug === 'standard' || slug === 'pos') {
      return items.find((x) => x.category === category && (x.slug === 'standard' || x.slug === 'in-person' || x.slug === 'usa'));
    }
  }

  return undefined;
}

export async function generateStaticParams() {
  return getMatrixItems().map((item) => ({
    category: item.category,
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const item = findMatrixItem(category, slug);

  if (!item) {
    return {
      title: 'Tool Not Found — FeeKit',
    };
  }

  const isUK = item.geoRegion === 'UK';
  const customSeo = getCustomSeoMetadata(category, slug);
  const title = customSeo ? customSeo.title : `${item.title} — FeeKit`;
  const description = customSeo ? customSeo.description : item.subtitle;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.usefeekit.com/tools/${category}/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.usefeekit.com/tools/${category}/${slug}`,
      siteName: 'FeeKit',
      locale: isUK ? 'en_GB' : 'en_US',
      alternateLocale: isUK ? ['en_US'] : ['en_GB'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    other: {
      'geo.region': isUK ? 'GB' : (item.geoRegion === 'CA' ? 'CA' : 'US'),
      'content-language': isUK ? 'en-GB' : (item.geoRegion === 'CA' ? 'en-CA' : 'en-US'),
    },
  };
}

export default async function ProgrammaticToolPage({ params }: PageProps) {
  const { category, slug } = await params;
  const item = findMatrixItem(category, slug);

  if (!item) {
    notFound();
  }

  const tierRows = (item.sampleTiers || []).map((t: any) => {
    if (item.suiteType === 'ecommerce') {
      const units = t.units || 100;
      const price = item.defaultPrice || 49.99;
      const cogs = item.defaultCogs || 14;
      const freight = item.defaultFreight || 4;
      const prep = item.defaultPrep || 0;
      const adSpend = item.defaultAdSpend || 18;
      const landed = cogs + freight + prep;
      const estPlatformFee = price * 0.029 + 0.30;
      const netPerUnit = price - (landed + estPlatformFee + adSpend);
      const totalRevenue = units * price;
      const totalProfit = units * netPerUnit;
      const totalCosts = totalRevenue - totalProfit;
      const margin = (netPerUnit / price) * 100;
      return {
        tierAmount: units,
        tierLabel: `${units.toLocaleString()} Units / mo`,
        deductionOrTax: totalCosts,
        netOrTotal: totalProfit,
        effectiveRateStr: `${margin.toFixed(1)}% margin`,
      };
    }

    return {
      tierAmount: t.amount || t.units || 0,
      tierLabel: t.label,
      deductionOrTax: t.tax !== undefined ? t.tax : (t.fee !== undefined ? t.fee : (t.rate ? t.rate * 8 : 0)),
      netOrTotal: t.total !== undefined ? t.total : (t.net !== undefined ? t.net : (t.monthly || 0)),
      effectiveRateStr: t.rate ? `${item.currencySymbol || '$'}${t.rate}/hr` : undefined,
    };
  });

  const relatedTools = getMatrixItems()
    .filter((x) => x.category === category && x.slug !== slug)
    .slice(0, 6);

  const customSeo = getCustomSeoMetadata(category, slug);
  const seoTitle = customSeo ? customSeo.title : item.title;
  const seoDesc = customSeo ? customSeo.description : item.subtitle;
  const dataSource = getDataSource(category, slug);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Schema.org SoftwareApplication + spatialCoverage + isBasedOn citation + BreadcrumbList */}
      <GeoJsonLd
        title={seoTitle}
        description={seoDesc}
        url={`https://www.usefeekit.com/tools/${category}/${slug}`}
        region={item.geoRegion || 'US'}
        stateName={item.stateName}
        category={category}
        sourceUrl={dataSource.sourceUrl}
        sourceName={dataSource.authorityName}
      />

      {/* Top Navigation & Fast Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3.5 sm:px-0">
        <BackButton fallbackHref={`/tools/${category}`} label="Back to previous page" />
        <div className="w-full sm:w-72 md:w-80">
          <FastSearchBar placeholder="Search tools..." />
        </div>
      </div>

      {/* Unified Master Container: Edge-to-Edge on Mobile, Contained on Desktop */}
      <article className="w-full rounded-none sm:rounded-3xl border-y sm:border border-slate-200 bg-white px-3.5 py-6 sm:p-10 lg:p-12 shadow-xs space-y-8 sm:space-y-10">
        {/* Header with Title, Description, and Authoritative Badges */}
        <header className="space-y-5 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>E-E-A-T Certified</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-blue-700 border border-blue-200">
              <span>{item.geoRegion || 'US'} Statutory Rules</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-slate-700 border border-slate-200 font-mono">
              <span>Verified 2026</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-slate-600 border border-slate-200 capitalize">
              <span>{category.replace(/-/g, ' ')}</span>
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              {item.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {item.subtitle}
            </p>
          </div>
        </header>

        {/* AdSense Leaderboard Unit */}
        <LeaderboardAd />

        {/* Live Interactive Calculator (Full Width, Zero Horizontal Squeeze, Embedded) */}
        <section aria-label="Interactive Calculator Tool">
          {item.suiteType === 'merchant' && (
            <MerchantFeeCalculator
              initialGateway={item.gatewayId || 'stripe'}
              initialAmount={item.defaultAmount || 500}
              initialInternational={item.isInternational}
              currencySymbol={item.currencySymbol || '$'}
              embedded={true}
            />
          )}

          {item.suiteType === 'comparator' && (
            <GatewayComparator
              initialAmount={item.defaultAmount || 500}
              currencySymbol={item.currencySymbol || '$'}
              embedded={true}
            />
          )}

          {item.suiteType === 'profit_margin' && (
            <ProfitMarginCalculator
              initialRevenue={item.defaultAmount || 10000}
              currencySymbol={item.currencySymbol || '$'}
              embedded={true}
            />
          )}

          {item.suiteType === 'break_even' && (
            <BreakEvenCalculator
              initialFixedCosts={item.defaultAmount || 15000}
              currencySymbol={item.currencySymbol || '$'}
              embedded={true}
            />
          )}

          {item.suiteType === 'roi' && (
            <RoiCalculator
              initialInvestment={item.defaultAmount || 25000}
              currencySymbol={item.currencySymbol || '$'}
              embedded={true}
            />
          )}

          {item.suiteType === 'quarterly_tax' && (
            <QuarterlyTaxCalculator
              initialGross={item.defaultAmount || 120000}
              currencySymbol={item.currencySymbol || '$'}
              embedded={true}
            />
          )}

          {item.suiteType === 'uk_ir35' && (
            <UkIr35Calculator
              initialDayRate={item.defaultAmount || 550}
              embedded={true}
            />
          )}

          {item.suiteType === 'invoice' && (
            <InvoiceGenerator embedded={true} />
          )}

          {item.category === 'sales-tax-calculator' ? (
            <SalesTaxCalculator
              stateSlug={item.slug}
              initialAmount={item.defaultAmount || 250}
              embedded={true}
            />
          ) : item.category === 'vat-calculator' ? (
            <VatCalculator
              initialAmount={item.defaultAmount || 500}
              currencySymbol={item.currencySymbol}
              countryCode={item.jurisdictionCode}
              countrySlug={item.slug}
              embedded={true}
            />
          ) : item.suiteType === 'tax' ? (
            <TaxCalculator
              initialJurisdictionCode={item.jurisdictionCode || item.slug.toUpperCase()}
              initialAmount={item.defaultAmount || 250}
              currencySymbol={item.currencySymbol || '$'}
              embedded={true}
            />
          ) : null}

          {item.suiteType === 'freelance' && (
            <FreelanceRateCalculator
              initialRole={item.roleTitle || 'Consultant'}
              initialNet={item.defaultAmount || 95000}
              initialOverhead={item.annualOverhead || 10000}
              currencySymbol={item.currencySymbol || '$'}
              embedded={true}
            />
          )}

          {item.suiteType === 'ecommerce' && (
            <EcommerceProfitCalculator
              initialPlatform={item.platform || 'shopify'}
              initialPrice={item.defaultPrice || 49.99}
              initialCogs={item.defaultCogs || 12.0}
              initialFreight={item.defaultFreight || 2.5}
              initialPrep={item.defaultPrep || 1.0}
              initialAdSpend={item.defaultAdSpend || 10.0}
              currencySymbol={item.currencySymbol || '$'}
              embedded={true}
            />
          )}
        </section>

        {/* AdSense Rectangle Unit */}
        <div className="flex justify-center my-6">
          <RectangleAd />
        </div>

        {/* Goldmine SEO Strategy & Compliance Guide (Embedded) */}
        <ToolGuide
          suiteType={item.suiteType}
          title={item.title}
          category={item.category}
          countrySlug={item.slug}
          currencySymbol={item.currencySymbol}
          geoRegion={item.geoRegion}
          stateName={item.stateName}
          baseRate={item.rate}
          localRate={item.local}
          maxLocalRate={item.maxLocal}
          threshold={item.threshold}
          inArticleSlot={<InArticleAd />}
          embedded={true}
        />

        {/* Technical Breakdown: KaTeX Formula & Tier Comparison */}
        <section className="pt-8 sm:pt-10 border-t border-slate-200/80 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Technical Breakdown & Formula Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Transparent mathematical reference and standardized volume benchmarks
            </p>
          </div>

          {/* Mathematical Formula Block */}
          <FormulaBreakdown
            formulaLatex={item.formulaLatex}
            explanation={item.formulaExplanation}
          />

          {/* Standard Volume Tier Matrix */}
          {tierRows.length > 0 && (
            <TierComparisonTable
              currencySymbol={item.currencySymbol || '$'}
              title={item.suiteType === 'ecommerce' ? 'Monthly Scale Projections & Profit Matrix' : 'Standard Transaction Volume Tiers'}
              amountHeader={item.suiteType === 'ecommerce' ? 'Monthly Volume' : (item.suiteType === 'freelance' ? 'Annual Target Net' : 'Gross Transaction')}
              feeHeader={item.suiteType === 'ecommerce' ? 'Total Costs & Spend' : (item.suiteType === 'freelance' ? 'Day Rate (8h)' : (item.suiteType === 'tax' ? 'Tax Amount' : 'Deductions'))}
              payoutHeader={item.suiteType === 'ecommerce' ? 'Net Profit Earned' : (item.suiteType === 'freelance' ? 'Monthly Retainer' : (item.suiteType === 'tax' ? 'Gross Invoice' : 'Net Received'))}
              rows={tierRows}
            />
          )}
        </section>

        {/* Official Data Source & Regulatory Provenance Citation */}
        <DataSourceCitation
          source={dataSource}
          toolTitle={item.shortTitle || item.title}
          embedded={true}
        />

        {/* Programmatic FAQ Accordion (5 Authoritative Questions with Schema) */}
        {/* Test schema validity at: https://search.google.com/test/rich-results */}
        {item.faqs && item.faqs.length > 0 && item.category !== 'sales-tax-calculator' && (
          <>
            <FaqSchema items={item.faqs} />
            <FaqAccordion
              items={item.faqs}
              title={`${item.shortTitle || item.title} — Frequently Asked Questions`}
              embedded={true}
            />
          </>
        )}

        {/* Related Category Tools Cross-Linking */}
        {relatedTools.length > 0 && (
          <section className="pt-8 sm:pt-10 border-t border-slate-200/80 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              Related {item.category.replace(/-/g, ' ')} Calculators
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedTools.map((rel: any) => (
                <Link
                  key={rel.slug}
                  href={`/tools/${rel.category}/${rel.slug}`}
                  className="group rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 transition-all hover:border-blue-400 hover:bg-white hover:shadow-xs"
                >
                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {rel.shortTitle || rel.title}
                  </div>
                  <p className="text-[11px] text-slate-500 truncate mt-1">
                    {rel.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
