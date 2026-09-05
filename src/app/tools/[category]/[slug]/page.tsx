import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import geoMatrix from '@/data/geo-matrix.json';
import { GeoJsonLd } from '@/components/seo/JsonLd';
import { ToolGuide } from '@/components/seo/ToolGuide';
import { AdBanner } from '@/components/monetization/AdBanner';
import { SponsoredAdGrid } from '@/components/monetization/SponsoredAdGrid';
import { AffiliateCard, AffiliateKey } from '@/components/monetization/AffiliateCard';
import { FormulaBreakdown } from '@/components/ui/FormulaBreakdown';
import { TierComparisonTable } from '@/components/ui/TierComparisonTable';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { MerchantFeeCalculator } from '@/components/calculators/MerchantFeeCalculator';
import { TaxCalculator } from '@/components/calculators/TaxCalculator';
import { FreelanceRateCalculator } from '@/components/calculators/FreelanceRateCalculator';
import { EcommerceProfitCalculator } from '@/components/calculators/EcommerceProfitCalculator';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { getCustomSeoMetadata } from '@/lib/seo/meta-overrides';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return (geoMatrix as Array<any>).map((item) => ({
    category: item.category,
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const item = (geoMatrix as Array<any>).find(
    (x) => x.category === category && x.slug === slug
  );

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
      canonical: `https://usefeekit.com/tools/${category}/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://usefeekit.com/tools/${category}/${slug}`,
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
      'geo.region': isUK ? 'GB' : 'US',
      'content-language': isUK ? 'en-GB' : 'en-US',
    },
  };
}

export default async function ProgrammaticToolPage({ params }: PageProps) {
  const { category, slug } = await params;
  const item = (geoMatrix as Array<any>).find(
    (x) => x.category === category && x.slug === slug
  );

  if (!item) {
    notFound();
  }

  const tierRows = (item.sampleTiers || []).map((t: any) => ({
    tierAmount: t.amount || t.units || 0,
    deductionOrTax: t.tax !== undefined ? t.tax : (t.fee !== undefined ? t.fee : (t.rate ? t.rate * 8 : 0)),
    netOrTotal: t.total !== undefined ? t.total : (t.net !== undefined ? t.net : (t.monthly || 0)),
    effectiveRateStr: t.rate ? `${item.currencySymbol || '$'}${t.rate}/hr` : undefined,
  }));

  const relatedTools = (geoMatrix as Array<any>)
    .filter((x) => x.category === category && x.slug !== slug)
    .slice(0, 6);

  let affiliateKey: AffiliateKey = 'wise';
  if (category.includes('freelance')) {
    affiliateKey = 'deel';
  } else if (category.includes('ecommerce') || category.includes('shopify')) {
    affiliateKey = 'shopify';
  } else if (category.includes('tax') || category.includes('vat')) {
    affiliateKey = 'taxjar';
  }

  const customSeo = getCustomSeoMetadata(category, slug);
  const seoTitle = customSeo ? customSeo.title : item.title;
  const seoDesc = customSeo ? customSeo.description : item.subtitle;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Schema.org SoftwareApplication + spatialCoverage + FAQPage */}
      <GeoJsonLd
        title={seoTitle}
        description={seoDesc}
        url={`https://usefeekit.com/tools/${category}/${slug}`}
        region={item.geoRegion || 'US'}
        stateName={item.stateName}
        faqs={item.faqs || []}
      />

      {/* Top Hub Navigation & Compact Monetization */}
      <div className="space-y-1.5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Utilities Hub</span>
        </Link>
        <AdBanner slot="leaderboard" context={item.suiteType} />
      </div>

      {/* Hero Header Area */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {item.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {item.subtitle}
        </p>
      </div>

      {/* Live Interactive Calculator (Full Width, Zero Horizontal Squeeze) */}
      <section aria-label="Interactive Calculator Tool">
        {item.suiteType === 'merchant' && (
          <MerchantFeeCalculator
            initialGateway={item.gatewayId || 'stripe'}
            initialAmount={item.defaultAmount || 500}
            initialInternational={item.isInternational}
            currencySymbol={item.currencySymbol || '$'}
          />
        )}

        {item.suiteType === 'tax' && (
          <TaxCalculator
            initialJurisdictionCode={item.jurisdictionCode || 'CA'}
            initialAmount={item.defaultAmount || 250}
            currencySymbol={item.currencySymbol || '$'}
          />
        )}

        {item.suiteType === 'freelance' && (
          <FreelanceRateCalculator
            initialRole={item.roleTitle || 'Consultant'}
            initialNet={item.defaultAmount || 95000}
            initialOverhead={item.annualOverhead || 10000}
            currencySymbol={item.currencySymbol || '$'}
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
          />
        )}
      </section>

      {/* Monetization: High-Intent Post-Calculation Action Box */}
      <AdBanner slot="post_calc" context={item.suiteType} />

      {/* Goldmine SEO Strategy & Compliance Guide */}
      <ToolGuide
        suiteType={item.suiteType}
        title={item.title}
        currencySymbol={item.currencySymbol}
        geoRegion={item.geoRegion}
        stateName={item.stateName}
        baseRate={item.rate}
        localRate={item.local}
        maxLocalRate={item.maxLocal}
        threshold={item.threshold}
      />

      {/* Monetization: Curated 3-Box Sponsored Solutions Section */}
      <SponsoredAdGrid context={item.suiteType} />

      {/* Technical Breakdown: The Google Juice */}
      <section className="space-y-6">
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
            amountHeader={item.suiteType === 'freelance' ? 'Annual Target Net' : 'Gross Transaction'}
            feeHeader={item.suiteType === 'freelance' ? 'Day Rate (8h)' : (item.suiteType === 'tax' ? 'Tax Amount' : 'Deductions')}
            payoutHeader={item.suiteType === 'freelance' ? 'Monthly Retainer' : (item.suiteType === 'tax' ? 'Gross Invoice' : 'Net Received')}
            rows={tierRows}
          />
        )}
      </section>

      {/* Programmatic FAQ Accordion (5 Authoritative Questions with Schema) */}
      {item.faqs && item.faqs.length > 0 && (
        <section aria-label="Frequently Asked Questions">
          <FaqAccordion
            faqs={item.faqs}
            title={`${item.shortTitle || item.title} — Frequently Asked Questions`}
          />
        </section>
      )}

      {/* Related Category Tools Cross-Linking */}
      {relatedTools.length > 0 && (
        <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">
            Related {item.category.replace(/-/g, ' ')} Calculators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedTools.map((rel: any) => (
              <Link
                key={rel.slug}
                href={`/tools/${rel.category}/${rel.slug}`}
                className="group rounded-lg border border-slate-200 bg-slate-50/70 p-3 transition-all hover:border-blue-400 hover:bg-white hover:shadow-xs"
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
    </div>
  );
}
