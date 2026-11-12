import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  Scale,
  DollarSign,
  HelpCircle,
  FileSpreadsheet,
  ArrowRight,
} from 'lucide-react';

import { getVatCountry } from '@/lib/data/vat-countries';
import { VenmoGuide } from './guides/VenmoGuide';
import { GumroadGuide } from './guides/GumroadGuide';
import { LemonSqueezyGuide } from './guides/LemonSqueezyGuide';
import { ShopifyGuide } from './guides/ShopifyGuide';
import { PayPalGuide } from './guides/PayPalGuide';
import { SquareGuide } from './guides/SquareGuide';
import { AuthorizeNetGuide } from './guides/AuthorizeNetGuide';
import { WiseStripeGuide } from './guides/WiseStripeGuide';
import { CanadaTaxGuide } from './guides/CanadaTaxGuide';
import { GatewayComparatorGuide } from './guides/GatewayComparatorGuide';
import { ProfitMarginGuide } from './guides/ProfitMarginGuide';
import { BreakEvenGuide } from './guides/BreakEvenGuide';
import { RoiGuide } from './guides/RoiGuide';
import { QuarterlyTaxGuide } from './guides/QuarterlyTaxGuide';
import { UkIr35Guide } from './guides/UkIr35Guide';
import { getFreelanceRole } from './guides/freelance-role-data';
import { StripeGuide } from './guides/StripeGuide';
import { getSquareChannel, getAuthorizeNetChannel } from './guides/gateway-channel-data';

interface ToolGuideProps {
  suiteType: string;
  title: string;
  category?: string;
  countrySlug?: string;
  currencySymbol?: string;
  geoRegion?: 'US' | 'UK' | 'GLOBAL';
  stateName?: string;
  baseRate?: number;
  localRate?: number;
  maxLocalRate?: number;
  threshold?: string;
  inArticleSlot?: React.ReactNode;
  embedded?: boolean;
}

const STATE_AGENCIES: Record<string, string> = {
  California: 'California Department of Tax and Fee Administration (CDTFA)',
  Texas: 'Texas Comptroller of Public Accounts',
  'New York': 'New York State Department of Taxation and Finance',
  Florida: 'Florida Department of Revenue',
  Illinois: 'Illinois Department of Revenue',
  Pennsylvania: 'Pennsylvania Department of Revenue',
  Ohio: 'Ohio Department of Taxation',
  Georgia: 'Georgia Department of Revenue',
  'North Carolina': 'North Carolina Department of Revenue',
  Michigan: 'Michigan Department of Treasury',
  'New Jersey': 'New Jersey Division of Taxation',
  Virginia: 'Virginia Department of Taxation',
  Washington: 'Washington State Department of Revenue',
  Arizona: 'Arizona Department of Revenue',
  Massachusetts: 'Massachusetts Department of Revenue',
  Tennessee: 'Tennessee Department of Revenue',
  Indiana: 'Indiana Department of Revenue',
  Missouri: 'Missouri Department of Revenue',
  Maryland: 'Comptroller of Maryland',
  Wisconsin: 'Wisconsin Department of Revenue',
  Colorado: 'Colorado Department of Revenue',
  Minnesota: 'Minnesota Department of Revenue',
  'South Carolina': 'South Carolina Department of Revenue',
  Alabama: 'Alabama Department of Revenue',
  Louisiana: 'Louisiana Department of Revenue',
  Kentucky: 'Kentucky Department of Revenue',
  Oklahoma: 'Oklahoma Tax Commission',
  Connecticut: 'Connecticut Department of Revenue Services',
  Utah: 'Utah State Tax Commission',
  Iowa: 'Iowa Department of Revenue',
  Nevada: 'Nevada Department of Taxation',
  Arkansas: 'Arkansas Department of Finance and Administration',
  Mississippi: 'Mississippi Department of Revenue',
  Kansas: 'Kansas Department of Revenue',
  'New Mexico': 'New Mexico Taxation and Revenue Department',
  Nebraska: 'Nebraska Department of Revenue',
  Idaho: 'Idaho State Tax Commission',
  'West Virginia': 'West Virginia State Tax Department',
  Hawaii: 'Hawaii Department of Taxation',
  Maine: 'Maine Revenue Services',
  'Rhode Island': 'Rhode Island Division of Taxation',
  'South Dakota': 'South Dakota Department of Revenue',
  'North Dakota': 'North Dakota Office of State Tax Commissioner',
  Alaska: 'Alaska Department of Revenue',
  Vermont: 'Vermont Department of Taxes',
  Wyoming: 'Wyoming Department of Revenue',
  'District of Columbia': 'District of Columbia Office of Tax and Revenue',
};

export function ToolGuide({
  suiteType,
  title,
  category,
  countrySlug,
  currencySymbol = '$',
  geoRegion = 'US',
  stateName,
  baseRate,
  localRate,
  maxLocalRate,
  threshold,
  inArticleSlot,
  embedded = false,
}: ToolGuideProps) {
  const currentYear = new Date().getFullYear();
  const sectionClass = embedded
    ? 'pt-6 sm:pt-10 border-t border-slate-200/80 space-y-6 sm:space-y-8'
    : 'rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 shadow-xs';
  const sectionClassCompact = embedded
    ? 'pt-6 sm:pt-10 border-t border-slate-200/80 space-y-5 sm:space-y-6'
    : 'rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 shadow-xs';

  if (category === 'venmo-fee-calculator') {
    return <VenmoGuide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'gumroad-fee-calculator') {
    return <GumroadGuide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'lemon-squeezy-calculator') {
    return <LemonSqueezyGuide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'shopify-fee-calculator') {
    return <ShopifyGuide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'paypal-fee-calculator') {
    return <PayPalGuide sectionClass={sectionClass} countrySlug={countrySlug} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'square-fee-calculator') {
    return <SquareGuide sectionClass={sectionClass} countrySlug={countrySlug} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'authorize-net-calculator') {
    return <AuthorizeNetGuide sectionClass={sectionClass} countrySlug={countrySlug} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'wise-vs-stripe') {
    return <WiseStripeGuide sectionClass={sectionClass} countrySlug={countrySlug} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'canada-sales-tax') {
    return (
      <CanadaTaxGuide
        sectionClass={sectionClass}
        stateName={stateName}
        countrySlug={countrySlug}
        baseRate={baseRate}
        inArticleSlot={inArticleSlot}
      />
    );
  }

  if (category === 'gateway-comparator' || suiteType === 'comparator') {
    return <GatewayComparatorGuide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'profit-margin-calculator' || suiteType === 'profit_margin') {
    return <ProfitMarginGuide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'break-even-calculator' || suiteType === 'break_even') {
    return <BreakEvenGuide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'roi-calculator' || suiteType === 'roi') {
    return <RoiGuide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'quarterly-tax-calculator' || suiteType === 'quarterly_tax') {
    return <QuarterlyTaxGuide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (category === 'uk-ir35-calculator' || suiteType === 'uk_ir35') {
    return <UkIr35Guide sectionClass={sectionClass} inArticleSlot={inArticleSlot} />;
  }

  if (suiteType === 'merchant') {
    return (
      <StripeGuide
        sectionClass={sectionClass}
        countrySlug={countrySlug}
        inArticleSlot={inArticleSlot}
      />
    );
  }

  if (suiteType === 'freelance') {
    const role = getFreelanceRole(countrySlug || '');
    const annualBillableHours = 1200;
    const grossToNet = role.netTarget / 0.72; // 28% combined tax and overhead reserve
    const impliedHourly = grossToNet / annualBillableHours;

    return (
      <section className={sectionClassCompact}>
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">
              {role.name}: Rate Economics &amp; 1099 Tax Strategy
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              What clients are buying, realistic billable capacity, and the tax reserve that
              determines your real rate
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span>What the Client Is Actually Buying</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{role.buys}</p>
            <p className="text-xs text-slate-600 leading-relaxed">{role.utilization}</p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Annual Billable Hours:</strong> 48 working weeks x 25 billable hours ={' '}
                  <strong>{annualBillableHours.toLocaleString()} billable hours per year</strong> before
                  role-specific adjustments.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Day Rate Pricing:</strong> An 8-hour day rate protects against project scope
                  creep and eliminates microscopic time-tracking debates.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <DollarSign className="h-4 w-4 text-emerald-600" />
              <span>1099 SECA Tax &amp; Business Write-Offs</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              In the US, independent contractors pay Self-Employment Tax (SECA 15.3% covering Social
              Security and Medicare) on 92.35% of net profit, plus federal and state income taxes.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Quarterly Estimated Taxes:</strong> Submit Form 1040-ES in April, June,
                  September, and January to avoid IRS underpayment penalties.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Section 179 &amp; Business Deductions:</strong> First-year expensing under
                  IRC &sect; 179 covers eligible computer equipment, hardware, and software, while
                  qualifying dedicated home workspace is deducted separately under IRC &sect; 280A
                  (simplified $5/sq ft or actual expense allocation).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Role-Specific Overhead:</strong> {role.overhead}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Role-specific worked example. Each page solves for the rate that
            delivers the target net income for that discipline. */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <FileSpreadsheet className="h-4 w-4 text-blue-600" />
            <span>
              Worked Example: {role.name} Targeting a ${role.netTarget.toLocaleString()} Net Annual
              Income
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            A {role.name.toLowerCase()} freelancer targeting ${role.netTarget.toLocaleString()} of
            net income needs to gross roughly{' '}
            <strong>
              ${Math.round(grossToNet).toLocaleString()}
            </strong>{' '}
            once a 28% combined reserve for self-employment tax, federal income tax and overhead is
            set aside. Divided across {annualBillableHours.toLocaleString()} billable hours, that
            implies an hourly rate of{' '}
            <strong>${Math.round(impliedHourly).toLocaleString()}/hour</strong>, or a day rate of{' '}
            <strong>${(Math.round(impliedHourly) * 8).toLocaleString()}</strong> on a standard
            8-hour day. At the ${role.dayRate.toLocaleString()} anchor, the difference is either a
            higher net target or a lower working week - which is the trade this calculator exists to
            make explicit.
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">{role.contract}</p>
        </div>

        {/* In-Article Ad Unit */}
        {inArticleSlot}
      </section>
    );
  }

  // Ecommerce
  return (
    <section className={sectionClassCompact}>
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-slate-900">
            E-Commerce Unit Economics & Break-Even ROAS Algebra
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            How to accurately compute true landed costs, platform referral commissions, and maximum allowable CAC
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span>Break-Even ROAS Calculation Formula</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Break-Even ROAS represents the exact advertising return required for a product sale to generate zero net profit or loss:
          </p>
          <div className="rounded-lg bg-slate-100 p-3 font-mono text-xs text-slate-900 border border-slate-200">
            Break-Even ROAS = Retail Price / (Retail Price - Non-Ad Costs)
          </div>
          <p className="text-xs text-slate-600">
            If a product sells for $50 and landed COGS + marketplace fees total $25, your gross contribution is $25, meaning your target ROAS must exceed <strong>2.00x</strong> to achieve positive cash flow.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <DollarSign className="h-4 w-4 text-emerald-600" />
            <span>Margin % vs. Markup % Distinction</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Conflating margin and markup is the #1 reason e-commerce brands misprice products and run out of working capital:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Net Margin %:</strong> <code className="bg-white px-1 rounded border font-mono">(Net Profit / Selling Price) × 100</code>. Margin can never exceed 100%.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Markup %:</strong> <code className="bg-white px-1 rounded border font-mono">(Net Profit / Total Cost) × 100</code>. A product costing $20 and sold for $60 has a 200% markup and a 66.7% margin.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* In-Article Ad Unit */}
      {inArticleSlot}
    </section>
  );
}
