'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CreditCard,
  Building2,
  Globe2,
  Briefcase,
  ShoppingBag,
  DollarSign,
  Scale,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface UniversalGuideHubProps {
  inArticleSlot?: React.ReactNode;
}

type GuideDomain = 'merchant' | 'sales-tax' | 'vat' | 'freelance' | 'ecommerce';

export function UniversalGuideHub({ inArticleSlot }: UniversalGuideHubProps) {
  const [activeDomain, setActiveDomain] = useState<GuideDomain>('merchant');
  const currentYear = 2026;

  const domainTabs: { id: GuideDomain; label: string; icon: React.ElementType }[] = [
    { id: 'merchant', label: 'Payment Gateway Fees', icon: CreditCard },
    { id: 'sales-tax', label: 'US Sales Tax & Nexus', icon: Building2 },
    { id: 'vat', label: 'UK & Global VAT Compliance', icon: Globe2 },
    { id: 'freelance', label: '1099 Contractor Taxes', icon: Briefcase },
    { id: 'ecommerce', label: 'E-Commerce & ROAS', icon: ShoppingBag },
  ];

  return (
    <section
      aria-label="Universal Financial & Tax Compliance Guide"
      className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 space-y-6 shadow-xs"
    >
      {/* Header & Pillar Selector */}
      <div className="border-b border-slate-200 pb-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
          <BookOpen className="h-4 w-4" />
          <span>Executive Knowledge Hub & Legal Frameworks</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Universal Business Finance & Compliance Guide ({currentYear})
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select a financial domain below for official statutory guidelines, mathematical formulas, and margin-protection strategies.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {domainTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeDomain === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveDomain(tab.id)}
                className={`tap-spring shrink-0 inline-flex items-center gap-1.5 rounded-xl border px-3 sm:px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-2xs'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Domain 1: Payment Processing & Merchant Fees */}
      {activeDomain === 'merchant' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Direct Answer Hook */}
          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
              <DollarSign className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Standard Domestic & International Gateway Schedules ({currentYear})</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Standard domestic card processing in the US costs <strong>2.9% plus $0.30</strong> on Stripe and Square, and <strong>3.49% plus $0.49</strong> on PayPal Commerce. In the United Kingdom, standard consumer card rates are <strong>1.5% plus 20p</strong>. However, foreign-issued cards carry an additional <strong>1.50% cross-border surcharge</strong> plus a 1% to 3.5% currency conversion spread. On small transactions under $10, the static cents floor can inflate your effective fee to over 6% to 8%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Scale className="h-4 w-4 text-blue-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">Card Interchange vs Bank Rails</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Credit card networks levy interchange fees, assessment charges, and processor markups. For larger business-to-business transactions, alternative direct bank transfer rails provide dramatic cost reductions:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ACH Direct Debit (US):</strong> Capped at 0.8% with a $5.00 maximum fee. A $5,000 invoice costs $5.00 instead of $145.30 on credit cards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>BACS Direct Debit (UK):</strong> 1.00% + 20p capped at £2.00, saving substantial overhead on recurring commercial contracts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Wise Business:</strong> Mid-market FX rate with transparent ~0.45% fee and zero receiving fees for domestic ACH/wire payments.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">Bidirectional Reverse Payout Formula</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When invoicing clients, simply adding 2.9% leaves you with a cash shortfall because processors calculate fees against the final gross charge. The exact reverse formula is:
              </p>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-center text-xs text-slate-800">
                Gross Invoice = (Target Net + Fixed Fee) ÷ (1 − Percentage Rate)
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                To receive exactly <strong>$1,000.00 net</strong> in the US via Stripe (2.9% + $0.30), divide $1,000.30 by 0.971 = <strong>$1,030.18</strong>. Using FeeKit&apos;s reverse payout toggle guarantees exact zero-shortfall payouts.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Domain 2: US Sales Tax & Economic Nexus */}
      {activeDomain === 'sales-tax' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm">
              <Building2 className="h-4 w-4 text-indigo-600 shrink-0" />
              <span>US 50-State Sales Tax & Economic Nexus Rules ({currentYear})</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              There is no federal sales tax in the United States. Sales tax is governed at the state level by 45 states and Washington DC (excluding Alaska, Delaware, Montana, New Hampshire, and Oregon). Under the US Supreme Court ruling in <em>South Dakota v. Wayfair (2018)</em>, online sellers who cross statutory sales volume thresholds establish <strong>economic nexus</strong> and must collect and remit state and local sales tax regardless of physical presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <ShieldCheck className="h-4 w-4 text-indigo-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">Economic Nexus Thresholds</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Most states enforce an economic nexus threshold of <strong>$100,000 in gross annual sales</strong> or <strong>200 separate transactions</strong> into the state during the current or preceding calendar year:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>High Threshold States:</strong> California, Texas, and New York enforce a higher $500,000 threshold for remote online merchants.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Marketplace Facilitator Laws:</strong> Marketplaces like Amazon, eBay, and Etsy collect and remit sales tax on your behalf, but marketplace volume often counts toward your state nexus threshold.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Physical Nexus:</strong> Storing inventory in an Amazon FBA warehouse or hiring a single remote employee creates immediate physical nexus without any dollar threshold.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Scale className="h-4 w-4 text-blue-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">Destination vs Origin Sourcing</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The majority of US states follow <strong>destination-based sourcing</strong> for e-commerce deliveries, meaning the sales tax rate is based on the buyer’s delivery address (state base + county + city + special transit district):
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>District Surtaxes:</strong> In California, while the state base is 7.25%, municipal district taxes push the composite rate to 10.25% in cities like Alameda.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Origin Sourcing Exceptions:</strong> A minority of states (including Texas and Ohio for in-state sellers) use origin-based sourcing where tax is calculated at the seller’s facility.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Domain 3: UK & Global VAT Compliance */}
      {activeDomain === 'vat' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
              <Globe2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>UK HMRC VAT & European Compliance Framework ({currentYear})</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              In the United Kingdom, Value Added Tax is levied at a standard rate of <strong>20%</strong>, with a reduced rate of <strong>5%</strong> for domestic fuel, utilities, and child safety items. The statutory VAT registration threshold is <strong>£90,000</strong> of cumulative taxable turnover over any rolling 12-month period. All registered entities must maintain digital records and submit quarterly returns via HMRC&apos;s <strong>Making Tax Digital (MTD)</strong> protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">The 1/6 VAT Fraction Formula</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When accounting for VAT-inclusive invoices or expense receipts at the standard 20% rate:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Net to Gross (Add 20%):</strong> Gross = Net × 1.20 (e.g. £500.00 × 1.20 = £600.00 gross).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Gross to Net (Remove VAT):</strong> Net = Gross ÷ 1.20 (£600.00 ÷ 1.20 = £500.00).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>VAT Fraction:</strong> Multiply gross by 1/6 (£600.00 × 1/6 = £100.00 VAT element).</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <FileSpreadsheet className="h-4 w-4 text-purple-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">EU Reverse Charge & Cross-Border B2B</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under Article 196 of the EU VAT Directive, cross-border B2B supplies of services between VAT-registered businesses within the European Union are invoiced at <strong>0% VAT with Reverse Charge</strong> applied:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>VIES Validation:</strong> The buyer’s VAT ID must be verified against the European Commission VIES database.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Invoice Legend:</strong> The invoice must state &apos;Reverse charge: Customer to account for VAT to tax authority&apos;.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Domain 4: 1099 Freelance & Contractor Taxes */}
      {activeDomain === 'freelance' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-purple-950 font-bold text-sm">
              <Briefcase className="h-4 w-4 text-purple-600 shrink-0" />
              <span>1099 Independent Contractor vs W-2 Employee Economics ({currentYear})</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Moving from a W-2 salaried position to 1099 independent contracting requires a significant rate multiplier. W-2 employers pay 50% of your FICA payroll taxes, healthcare subsidies, 401(k) matches, and paid vacation. On a 1099 basis, you are responsible for the entire <strong>15.3% Self-Employment Contributions Act (SECA) tax</strong> (12.4% Social Security up to $176,100 wage cap + 2.9% Medicare), plus business tools and unpaid administrative time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <TrendingUp className="h-4 w-4 text-purple-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">The 1.35x to 1.50x Rate Multiplier</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                To match an equivalent W-2 salary, independent contractors should charge a minimum of <strong>35% to 50% higher</strong> per hour:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Employer Half of FICA (+7.65%):</strong> Incurred directly on IRS Schedule SE.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Health Insurance & Benefits (+12-18%):</strong> Solo health insurance and retirement planning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Billable Hours Reality:</strong> While a W-2 job pays 2,080 hours, a full-time freelancer realistically bills only 1,000 to 1,200 hours per year after accounting for business development and admin.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <DollarSign className="h-4 w-4 text-emerald-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">Hourly & Day Rate Pricing Formula</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calculate your required billing rate with FeeKit&apos;s contractor formula:
              </p>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-center text-xs text-slate-800">
                Hourly = (Desired Net + Overhead + 30% Taxes) ÷ (Billable Hours)
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                For a desired $100,000 take-home income with $10,000 overhead and 25 billable hours/week across 48 weeks, your minimum hourly rate is <strong>$120/hr</strong>, or an 8-hour day rate of <strong>$959/day</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Domain 5: E-Commerce & ROAS Hub */}
      {activeDomain === 'ecommerce' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <ShoppingBag className="h-4 w-4 text-amber-600 shrink-0" />
              <span>E-Commerce Unit Economics: Amazon FBA vs Shopify DTC ({currentYear})</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Operating a profitable e-commerce brand requires separating gross revenue from net contribution margin. On Amazon FBA, sellers face an 8% to 15% category referral fee, size-tier fulfillment fees ($3.50 to $7.00+), and peak monthly storage fees. On Shopify Direct-to-Consumer (DTC), sellers eliminate marketplace referral fees but must fund customer acquisition costs (Meta/Google Ad Spend) and app subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <TrendingUp className="h-4 w-4 text-amber-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">The Break-Even ROAS Target</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Return on Ad Spend (ROAS) dictates whether paid advertising campaigns are expanding cash reserves or burning capital:
              </p>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-center text-xs text-slate-800">
                Break-Even ROAS = 1 ÷ (Gross Margin % before Ads)
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your landed COGS, shipping, and merchant fees total $20 on a $50 product (a 60% gross margin), your break-even ROAS is <strong>1.67x</strong>. To maintain a healthy 20% net margin, your target ROAS must exceed <strong>2.50x</strong>.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">Landed COGS & Hidden Surcharges</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Never calculate unit economics using manufacturing unit costs alone:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Inbound Freight & Customs:</strong> Sea freight, port drayage, customs bond, and Section 301 tariffs typically add 15% to 30% to FOB unit prices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Return Allowances & Shrinkage:</strong> E-commerce return rates average 8% to 15% in apparel and consumer electronics; budgeting a 3% return provision protects cashflow.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* In-Article Ad Placement */}
      {inArticleSlot}

      {/* Footer Hub Links */}
      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-slate-500 font-medium">
          Need a dedicated calculator? Choose from 199+ tools above.
        </span>
        <div className="flex items-center gap-3">
          <Link
            href="/tools/sales-tax-calculator"
            className="text-blue-600 hover:underline font-semibold"
          >
            50 States Tax →
          </Link>
          <Link
            href="/tools/vat-calculator"
            className="text-blue-600 hover:underline font-semibold"
          >
            UK & EU VAT →
          </Link>
          <Link
            href="/tools/freelance-rate-calculator"
            className="text-blue-600 hover:underline font-semibold"
          >
            1099 Rates →
          </Link>
          <Link
            href="/tools/ecommerce-profit-calculator"
            className="text-blue-600 hover:underline font-semibold"
          >
            ROAS Hub →
          </Link>
        </div>
      </div>
    </section>
  );
}
