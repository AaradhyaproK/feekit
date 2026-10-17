import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import geoMatrix from '@/data/geo-matrix.json';
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
import { LeaderboardAd, RectangleAd } from '@/components/ads/AdSlots';
import { ShieldCheck, ExternalLink } from 'lucide-react';

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

  if (category === 'square-fee-calculator') {
    if (slug === 'standard' || slug === 'pos') {
      return items.find((x) => x.category === category && (x.slug === 'standard' || x.slug === 'in-person' || x.slug === 'usa'));
    }
  }

  if (category === 'stripe-fee-calculator') {
    if (slug === 'keyed-entry' || slug === 'manual-entry' || slug === 'manual' || slug === 'virtual-terminal') {
      return items.find((x) => x.category === category && (x.slug === 'keyed-entry' || x.slug === 'manual-entry'));
    }
    if (slug === 'uk' || slug === 'united-kingdom') {
      return items.find((x) => x.category === category && (x.slug === 'uk' || x.slug === 'united-kingdom'));
    }
  }

  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const item = findMatrixItem(category, slug);

  if (!item) {
    return { title: 'Calculator Widget | FeeKit' };
  }

  const canonical = `https://www.usefeekit.com/tools/${category}/${slug}`;

  return {
    title: `${item.title} — Embed Widget | FeeKit`,
    description: item.subtitle,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EmbedToolPage({ params }: PageProps) {
  const { category, slug } = await params;
  const item = findMatrixItem(category, slug);

  if (!item) {
    notFound();
  }

  const toolUrl = `https://www.usefeekit.com/tools/${category}/${slug}`;

  return (
    <div className="min-h-screen bg-slate-50/50 p-2 sm:p-4 font-sans text-slate-900 antialiased flex flex-col justify-between">
      <div className="w-full max-w-4xl mx-auto rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-6 shadow-xs space-y-4">
        {/* Compact Widget Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-xs">
              ⚡
            </span>
            <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              {item.title}
            </h1>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
            <ShieldCheck className="h-3 w-3" /> 2026 Verified
          </span>
        </div>

        {/* The Live Interactive Calculator */}
        <div>
          {item.suiteType === 'merchant' && (
            <MerchantFeeCalculator
              initialGateway={item.gatewayId || 'stripe'}
              initialAmount={item.defaultAmount || 500}
              initialInternational={item.isInternational}
              initialStripeTier={
                item.slug === 'manual-entry' || item.slug === 'keyed-entry'
                  ? 'premium'
                  : 'standard'
              }
              initialPaypalTier={
                item.slug === 'standard-card'
                  ? 'standard_card'
                  : 'invoicing'
              }
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
        </div>

        {/* AdSense Unit (Active automatically once approved and slot env is set) */}
        <div className="flex justify-center my-2 overflow-hidden">
          <LeaderboardAd />
        </div>

        {/* Backlink Attributing Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <a
            href="https://www.usefeekit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-bold text-slate-700 hover:text-blue-600 transition-colors"
          >
            <span>Powered by</span>
            <span className="text-blue-600 group-hover:underline">FeeKit</span>
            <span className="text-[10px] text-slate-400 font-normal">Financial Calculators</span>
          </a>

          <a
            href={toolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <span>Open Full Suite</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
