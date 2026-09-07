/**
 * Official Data Sources & Regulatory Provenance Directory
 *
 * Provides verified primary sources (government departments, legal statutory codes,
 * and official platform pricing schedules) for all FeeKit calculators to bolster
 * Google E-E-A-T and YMYL trustworthiness.
 */

import { getVatCountry } from '@/lib/data/vat-countries';

export interface DataSource {
  authorityName: string;
  sourceUrl: string;
  citationTitle: string;
  regulatoryCode?: string;
  dataType: string;
  lastVerified: string;
}

export const STATE_SOURCES: Record<string, DataSource> = {
  alabama: {
    authorityName: 'Alabama Department of Revenue',
    sourceUrl: 'https://revenue.alabama.gov/sales-use/',
    citationTitle: 'Alabama Sales and Use Tax Rules (Rule 810-6-1)',
    regulatoryCode: 'Ala. Code § 40-23-2',
    dataType: 'Statutory 4.00% Base Rate + County/City Surtaxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  alaska: {
    authorityName: 'Alaska Department of Revenue',
    sourceUrl: 'https://tax.alaska.gov/',
    citationTitle: 'Alaska Municipal Sales Tax Regulations',
    regulatoryCode: 'Alaska Stat. § 29.45.650',
    dataType: '0.00% State Rate + Borough Local Option Taxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  arizona: {
    authorityName: 'Arizona Department of Revenue',
    sourceUrl: 'https://azdor.gov/transaction-privilege-tax-tpt',
    citationTitle: 'Arizona Transaction Privilege Tax (TPT) Statutes',
    regulatoryCode: 'A.R.S. § 42-5010',
    dataType: 'Statutory 5.60% State TPT + City/County Rates',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  arkansas: {
    authorityName: 'Arkansas Department of Finance and Administration',
    sourceUrl: 'https://www.dfa.arkansas.gov/excise-tax/sales-and-use-tax/',
    citationTitle: 'Arkansas Gross Receipts Tax Rules',
    regulatoryCode: 'Ark. Code Ann. § 26-52-301',
    dataType: 'Statutory 6.50% Base Rate + City/County Taxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  california: {
    authorityName: 'California Department of Tax and Fee Administration (CDTFA)',
    sourceUrl: 'https://www.cdtfa.ca.gov/taxes-and-fees/sales-use-tax-rates.htm',
    citationTitle: 'California Sales and Use Tax Law & District Taxes',
    regulatoryCode: 'Cal. Rev. & Tax. Code § 6051',
    dataType: 'Statutory 7.25% Base Rate + Local District Surtaxes (up to 10.75%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  colorado: {
    authorityName: 'Colorado Department of Revenue',
    sourceUrl: 'https://tax.colorado.gov/sales-use-tax-rates',
    citationTitle: 'Colorado Sales and Use Tax Statutes & Home-Rule Cities',
    regulatoryCode: 'C.R.S. § 39-26-104',
    dataType: 'Statutory 2.90% State Rate + Local Home-Rule Jurisdictions',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  connecticut: {
    authorityName: 'Connecticut Department of Revenue Services (DRS)',
    sourceUrl: 'https://portal.ct.gov/drs/sales-tax/sales-and-use-tax-information',
    citationTitle: 'Connecticut Sales and Use Taxes Guide',
    regulatoryCode: 'Conn. Gen. Stat. § 12-408',
    dataType: 'Statutory 6.35% Statewide Flat Rate (No Local Taxes)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  delaware: {
    authorityName: 'Delaware Division of Revenue',
    sourceUrl: 'https://revenue.delaware.gov/',
    citationTitle: 'Delaware Gross Receipts Tax Guidelines',
    regulatoryCode: '30 Del. C. c. 21-29',
    dataType: '0.00% General Sales Tax (Gross Receipts Tax Applies)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  florida: {
    authorityName: 'Florida Department of Revenue',
    sourceUrl: 'https://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx',
    citationTitle: 'Florida Sales and Use Tax Guide (GT-800019)',
    regulatoryCode: 'Fla. Stat. § 212.05',
    dataType: 'Statutory 6.00% State Rate + County Discretionary Surtax',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  georgia: {
    authorityName: 'Georgia Department of Revenue',
    sourceUrl: 'https://dor.georgia.gov/taxes/sales-use-tax',
    citationTitle: 'Georgia Sales and Use Tax Regulations',
    regulatoryCode: 'O.C.G.A. § 48-8-30',
    dataType: 'Statutory 4.00% State Rate + County/Transit Options',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  hawaii: {
    authorityName: 'Hawaii Department of Taxation',
    sourceUrl: 'https://tax.hawaii.gov/geninfo/get/',
    citationTitle: 'Hawaii General Excise Tax (GET) Law',
    regulatoryCode: 'HRS Chapter 237',
    dataType: 'Statutory 4.00% GET + County Surcharges (up to 4.50%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  idaho: {
    authorityName: 'Idaho State Tax Commission',
    sourceUrl: 'https://tax.idaho.gov/taxes/sales-use/',
    citationTitle: 'Idaho Sales Tax Administrative Rules',
    regulatoryCode: 'Idaho Code § 63-3619',
    dataType: 'Statutory 6.00% State Rate',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  illinois: {
    authorityName: 'Illinois Department of Revenue',
    sourceUrl: 'https://tax.illinois.gov/research/taxrates/sales.html',
    citationTitle: 'Illinois Retailers’ Occupation Tax (ROT)',
    regulatoryCode: '35 ILCS 120/',
    dataType: 'Statutory 6.25% State ROT + Local Municipal/County Surtaxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  indiana: {
    authorityName: 'Indiana Department of Revenue',
    sourceUrl: 'https://www.in.gov/dor/business-tax/sales-tax/',
    citationTitle: 'Indiana Sales Tax Information Bulletin #28',
    regulatoryCode: 'Ind. Code § 6-2.5-2-2',
    dataType: 'Statutory 7.00% Statewide Flat Rate',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  iowa: {
    authorityName: 'Iowa Department of Revenue',
    sourceUrl: 'https://tax.iowa.gov/iowa-sales-and-use-tax-guide',
    citationTitle: 'Iowa Sales and Use Tax Guide',
    regulatoryCode: 'Iowa Code § 423.2',
    dataType: 'Statutory 6.00% State Rate + Local Option Sales Tax (LOST)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  kansas: {
    authorityName: 'Kansas Department of Revenue',
    sourceUrl: 'https://www.ksrevenue.gov/bustaxtypesales.html',
    citationTitle: 'Kansas Retailers’ Sales Tax Act',
    regulatoryCode: 'K.S.A. § 79-3603',
    dataType: 'Statutory 6.50% State Rate + City/County Options',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  kentucky: {
    authorityName: 'Kentucky Department of Revenue',
    sourceUrl: 'https://revenue.ky.gov/Business/Sales-Use-Tax/Pages/default.aspx',
    citationTitle: 'Kentucky Sales and Use Tax Guidelines',
    regulatoryCode: 'KRS § 139.200',
    dataType: 'Statutory 6.00% Statewide Flat Rate',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  louisiana: {
    authorityName: 'Louisiana Department of Revenue',
    sourceUrl: 'https://revenue.louisiana.gov/SalesTax',
    citationTitle: 'Louisiana General Sales and Use Tax Law',
    regulatoryCode: 'La. R.S. § 47:302',
    dataType: 'Statutory 4.45% State Rate + Parish Local Surtaxes (up to 11.45%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  maine: {
    authorityName: 'Maine Revenue Services',
    sourceUrl: 'https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax',
    citationTitle: 'Maine Sales, Use and Service Provider Tax',
    regulatoryCode: '36 M.R.S. § 1811',
    dataType: 'Statutory 5.50% Statewide Flat Rate',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  maryland: {
    authorityName: 'Comptroller of Maryland',
    sourceUrl: 'https://www.marylandtaxes.gov/business/sales-use/index.php',
    citationTitle: 'Maryland Sales and Use Tax Law',
    regulatoryCode: 'Md. Code, Tax-Gen. § 11-104',
    dataType: 'Statutory 6.00% Statewide Flat Rate',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  massachusetts: {
    authorityName: 'Massachusetts Department of Revenue',
    sourceUrl: 'https://www.mass.gov/info-details/massachusetts-sales-and-use-tax',
    citationTitle: 'Massachusetts Sales and Use Tax Guide (TIR 09-11)',
    regulatoryCode: 'M.G.L. c. 64H § 2',
    dataType: 'Statutory 6.25% Statewide Flat Rate',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  michigan: {
    authorityName: 'Michigan Department of Treasury',
    sourceUrl: 'https://www.michigan.gov/taxes/business-taxes/sales-use',
    citationTitle: 'Michigan General Sales Tax Act',
    regulatoryCode: 'MCL § 205.52',
    dataType: 'Statutory 6.00% Statewide Flat Rate',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  minnesota: {
    authorityName: 'Minnesota Department of Revenue',
    sourceUrl: 'https://www.revenue.state.mn.us/sales-and-use-tax',
    citationTitle: 'Minnesota Sales and Use Tax Statutes',
    regulatoryCode: 'Minn. Stat. § 297A.62',
    dataType: 'Statutory 6.875% State Rate + City/County Local Taxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  mississippi: {
    authorityName: 'Mississippi Department of Revenue',
    sourceUrl: 'https://www.dor.ms.gov/business/sales-and-use-tax',
    citationTitle: 'Mississippi Sales Tax Law',
    regulatoryCode: 'Miss. Code § 27-65-17',
    dataType: 'Statutory 7.00% State Rate + Local Tourism/City Taxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  missouri: {
    authorityName: 'Missouri Department of Revenue',
    sourceUrl: 'https://dor.mo.gov/taxation/business/tax-types/sales-use/',
    citationTitle: 'Missouri Sales Tax Law and Geographic Rates',
    regulatoryCode: 'Mo. Rev. Stat. § 144.020',
    dataType: 'Statutory 4.225% Base Rate + County/City Discretionary Taxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  montana: {
    authorityName: 'Montana Department of Revenue',
    sourceUrl: 'https://mtrevenue.gov/',
    citationTitle: 'Montana Resort Tax & Lodging Tax Statutes',
    regulatoryCode: 'MCA § 7-6-1501',
    dataType: '0.00% General Sales Tax (Local Resort Tax in select towns)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  nebraska: {
    authorityName: 'Nebraska Department of Revenue',
    sourceUrl: 'https://revenue.nebraska.gov/about/frequently-asked-questions/sales-and-use-tax-faqs',
    citationTitle: 'Nebraska Sales and Use Tax Regulations',
    regulatoryCode: 'Neb. Rev. Stat. § 77-2703',
    dataType: 'Statutory 5.50% Base Rate + City Local Option Taxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  nevada: {
    authorityName: 'Nevada Department of Taxation',
    sourceUrl: 'https://tax.nv.gov/',
    citationTitle: 'Nevada Sales and Use Tax Guide',
    regulatoryCode: 'NRS § 372.015',
    dataType: 'Statutory 6.85% State Rate + County Option Surtaxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'new-hampshire': {
    authorityName: 'New Hampshire Department of Revenue Administration',
    sourceUrl: 'https://www.revenue.nh.gov/',
    citationTitle: 'New Hampshire Business Profits & Meals and Rooms Tax',
    regulatoryCode: 'RSA 78-A',
    dataType: '0.00% General Sales Tax (Meals & Rentals taxed separately)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'new-jersey': {
    authorityName: 'New Jersey Division of Taxation',
    sourceUrl: 'https://www.nj.gov/treasury/taxation/businesses/salestax/index.shtml',
    citationTitle: 'New Jersey Sales and Use Tax Act',
    regulatoryCode: 'N.J.S.A. § 54:32B-3',
    dataType: 'Statutory 6.625% Statewide Flat Rate (Urban Zones 3.3125%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'new-mexico': {
    authorityName: 'New Mexico Taxation and Revenue Department',
    sourceUrl: 'https://www.tax.newmexico.gov/businesses/gross-receipts-overview/',
    citationTitle: 'New Mexico Gross Receipts Tax (GRT) Act',
    regulatoryCode: 'NMSA 1978 § 7-9-4',
    dataType: 'Statutory 5.00% State GRT + Municipal/County Rates',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'new-york': {
    authorityName: 'New York State Department of Taxation and Finance',
    sourceUrl: 'https://www.tax.ny.gov/bus/st/',
    citationTitle: 'New York Sales and Compensating Use Taxes',
    regulatoryCode: 'N.Y. Tax Law § 1105',
    dataType: 'Statutory 4.00% State Rate + County/MCTD Surtaxes (up to 8.875%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'north-carolina': {
    authorityName: 'North Carolina Department of Revenue',
    sourceUrl: 'https://www.ncdor.gov/taxes-forms/sales-and-use-tax',
    citationTitle: 'North Carolina Sales and Use Tax Technical Bulletins',
    regulatoryCode: 'N.C.G.S. § 105-164.4',
    dataType: 'Statutory 4.75% State Rate + County Surtaxes (typically 6.75% - 7.50%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'north-dakota': {
    authorityName: 'North Dakota Office of State Tax Commissioner',
    sourceUrl: 'https://www.tax.nd.gov/business/sales-and-use-tax',
    citationTitle: 'North Dakota Sales and Use Tax Guidelines',
    regulatoryCode: 'N.D.C.C. § 57-39.2-02.1',
    dataType: 'Statutory 5.00% State Rate + Local City Taxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  ohio: {
    authorityName: 'Ohio Department of Taxation',
    sourceUrl: 'https://tax.ohio.gov/business/sales-and-use',
    citationTitle: 'Ohio Sales and Use Tax Law',
    regulatoryCode: 'R.C. § 5739.02',
    dataType: 'Statutory 5.75% State Rate + County/Transit Authority Rates',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  oklahoma: {
    authorityName: 'Oklahoma Tax Commission',
    sourceUrl: 'https://oklahoma.gov/tax/businesses/sales-and-use-tax.html',
    citationTitle: 'Oklahoma Sales Tax Code',
    regulatoryCode: '68 O.S. § 1354',
    dataType: 'Statutory 4.50% State Rate + Municipal/County Rates (up to 11.50%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  oregon: {
    authorityName: 'Oregon Department of Revenue',
    sourceUrl: 'https://www.oregon.gov/dor/',
    citationTitle: 'Oregon Corporate Activity Tax (CAT) Guidelines',
    regulatoryCode: 'ORS Chapter 317A',
    dataType: '0.00% General Sales Tax (State Corporate Activity Tax applies)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  pennsylvania: {
    authorityName: 'Pennsylvania Department of Revenue',
    sourceUrl: 'https://www.revenue.pa.gov/Tax%20Types/SUT/Pages/default.aspx',
    citationTitle: 'Pennsylvania Sales, Use and Hotel Occupancy Tax',
    regulatoryCode: '72 P.S. § 7202',
    dataType: 'Statutory 6.00% State Rate + Local Surtaxes (Philly 8%, Allegheny 7%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'rhode-island': {
    authorityName: 'Rhode Island Division of Taxation',
    sourceUrl: 'https://tax.ri.gov/tax-sections/sales-excise-taxes',
    citationTitle: 'Rhode Island Sales and Use Tax Law',
    regulatoryCode: 'R.I. Gen. Laws § 44-18-18',
    dataType: 'Statutory 7.00% Statewide Flat Rate',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'south-carolina': {
    authorityName: 'South Carolina Department of Revenue',
    sourceUrl: 'https://dor.sc.gov/tax/sales',
    citationTitle: 'South Carolina Sales and Use Tax Manual',
    regulatoryCode: 'S.C. Code Ann. § 12-36-910',
    dataType: 'Statutory 6.00% State Rate + County Local Option Taxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'south-dakota': {
    authorityName: 'South Dakota Department of Revenue',
    sourceUrl: 'https://dor.sd.gov/businesses/taxes/sales-use-tax/',
    citationTitle: 'South Dakota Retail Sales and Service Tax Act (Wayfair Jurisdiction)',
    regulatoryCode: 'SDCL § 10-45-2',
    dataType: 'Statutory 4.20% State Rate + Municipal Local Taxes',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  tennessee: {
    authorityName: 'Tennessee Department of Revenue',
    sourceUrl: 'https://www.tn.gov/revenue/taxes/sales-and-use-tax.html',
    citationTitle: 'Tennessee Retailers’ Sales Tax Act',
    regulatoryCode: 'Tenn. Code Ann. § 67-6-202',
    dataType: 'Statutory 7.00% State Rate + Local County/City Rates (up to 9.75%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  texas: {
    authorityName: 'Texas Comptroller of Public Accounts',
    sourceUrl: 'https://comptroller.texas.gov/taxes/sales/',
    citationTitle: 'Texas Limited Sales, Excise, and Use Tax Act',
    regulatoryCode: 'Tex. Tax Code Ann. § 151.051',
    dataType: 'Statutory 6.25% State Rate + Local City/Transit/County Taxes (up to 8.25%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  utah: {
    authorityName: 'Utah State Tax Commission',
    sourceUrl: 'https://tax.utah.gov/sales',
    citationTitle: 'Utah Sales and Use Tax Act',
    regulatoryCode: 'Utah Code Ann. § 59-12-103',
    dataType: 'Statutory 4.85% State Rate + Local/County Taxes (effective ~6.10% - 9.05%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  vermont: {
    authorityName: 'Vermont Department of Taxes',
    sourceUrl: 'https://tax.vermont.gov/business/sales-and-use-tax',
    citationTitle: 'Vermont Sales and Use Tax Regulations',
    regulatoryCode: '32 V.S.A. § 9771',
    dataType: 'Statutory 6.00% State Rate + Local Option 1.00% Surtax',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  virginia: {
    authorityName: 'Virginia Department of Taxation',
    sourceUrl: 'https://www.tax.virginia.gov/retail-sales-and-use-tax',
    citationTitle: 'Virginia Retail Sales and Use Tax Guidelines',
    regulatoryCode: 'Va. Code Ann. § 58.1-603',
    dataType: 'Statutory 5.30% Standard Rate (up to 7.00% in Northern VA/Hampton Roads)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  washington: {
    authorityName: 'Washington State Department of Revenue',
    sourceUrl: 'https://dor.wa.gov/taxes-rates/retail-sales-tax',
    citationTitle: 'Washington State Retail Sales Tax Rules',
    regulatoryCode: 'RCW 82.08.020',
    dataType: 'Statutory 6.50% State Rate + Local Surtaxes (up to 10.60%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'west-virginia': {
    authorityName: 'West Virginia State Tax Department',
    sourceUrl: 'https://tax.wv.gov/Business/SalesAndUseTax/Pages/SalesAndUseTax.aspx',
    citationTitle: 'West Virginia Consumers Sales and Service Tax',
    regulatoryCode: 'W. Va. Code § 11-15-3',
    dataType: 'Statutory 6.00% State Rate + Municipal Local Taxes (up to 7.00%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  wisconsin: {
    authorityName: 'Wisconsin Department of Revenue',
    sourceUrl: 'https://www.revenue.wi.gov/Pages/FAQS/pcs-sales.aspx',
    citationTitle: 'Wisconsin Sales and Use Tax Common Questions',
    regulatoryCode: 'Wis. Stat. § 77.52',
    dataType: 'Statutory 5.00% State Rate + County Surtax 0.50% (typically 5.50%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  wyoming: {
    authorityName: 'Wyoming Department of Revenue',
    sourceUrl: 'https://revenue.wyo.gov/divisions/excise-tax',
    citationTitle: 'Wyoming Sales and Use Tax Statutes',
    regulatoryCode: 'Wyo. Stat. Ann. § 39-15-104',
    dataType: 'Statutory 4.00% State Rate + Local County Surtaxes (up to 6.00%)',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
  'district-of-columbia': {
    authorityName: 'District of Columbia Office of Tax and Revenue (OTR)',
    sourceUrl: 'https://otr.cfo.dc.gov/page/sales-and-use-tax-rates',
    citationTitle: 'District of Columbia Sales and Use Tax Rates',
    regulatoryCode: 'D.C. Official Code § 47-2002',
    dataType: 'Statutory 6.00% General Sales Tax',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  },
};

export const GATEWAY_SOURCES: Record<string, DataSource> = {
  stripe: {
    authorityName: 'Stripe, Inc.',
    sourceUrl: 'https://stripe.com/pricing',
    citationTitle: 'Official Stripe Pricing Schedule & Merchant Services Agreement',
    regulatoryCode: 'Stripe Services Agreement Schedule A (Section 3.2)',
    dataType: 'Standard US 2.9% + $0.30, UK 1.5% + 20p, +1.5% International Card Surcharge',
    lastVerified: '2026 Commercial Schedule (Updated January 2026)',
  },
  paypal: {
    authorityName: 'PayPal Holdings, Inc.',
    sourceUrl: 'https://www.paypal.com/us/webapps/mpp/merchant-fees',
    citationTitle: 'Official PayPal Merchant Fees Schedule & User Agreement',
    regulatoryCode: 'PayPal Commercial Entity Agreement Section 8',
    dataType: 'Standard 2.99% + $0.49, Invoicing 3.49% + $0.49, Micropayments 4.99% + $0.09',
    lastVerified: '2026 Commercial Schedule (Updated January 2026)',
  },
  square: {
    authorityName: 'Block, Inc. (Square)',
    sourceUrl: 'https://squareup.com/us/en/pricing',
    citationTitle: 'Official Square Merchant Fee & Processing Rates',
    regulatoryCode: 'Square Payment Terms Section 4',
    dataType: 'In-Person Tap 2.6% + $0.10, Online Checkout 2.9% + $0.30, Keyed 3.5% + $0.15',
    lastVerified: '2026 Commercial Schedule (Updated January 2026)',
  },
  'wise-vs-stripe': {
    authorityName: 'Wise Payments Limited',
    sourceUrl: 'https://wise.com/pricing',
    citationTitle: 'Wise Mid-Market Exchange Rate & Transparent Transfer Fee Schedule',
    regulatoryCode: 'Wise Customer Agreement Part C',
    dataType: 'Mid-Market Reuters Exchange Rate + 0.35% - 0.45% Transparent Network Fee',
    lastVerified: '2026 Commercial Schedule (Updated January 2026)',
  },
  'authorize-net': {
    authorityName: 'Authorize.Net (Visa Solution)',
    sourceUrl: 'https://www.authorize.net/pricing.html',
    citationTitle: 'Authorize.Net Gateway Merchant Agreement',
    regulatoryCode: 'Authorize.Net Merchant Services Agreement',
    dataType: '$25.00 Monthly Gateway Fee + $0.10 Per Transaction + $0.10 Daily Batch Fee',
    lastVerified: '2026 Commercial Schedule (Updated January 2026)',
  },
};

export const UK_VAT_SOURCE: DataSource = {
  authorityName: 'HM Revenue & Customs (HMRC)',
  sourceUrl: 'https://www.gov.uk/vat-rates',
  citationTitle: 'HMRC Guidance: VAT Rates on Goods and Services & VAT Notice 700',
  regulatoryCode: 'Value Added Tax Act 1994 (VATA 1994) & Section 55A (Reverse Charge)',
  dataType: 'Statutory 20% Standard, 5% Reduced, 0% Zero-Rated & £90,000 MTD Threshold',
  lastVerified: '2026 HMRC VAT Regulations (Updated April 2024–2026)',
};

export const FREELANCE_SOURCE: DataSource = {
  authorityName: 'Internal Revenue Service (IRS) & Bureau of Labor Statistics (BLS)',
  sourceUrl: 'https://www.irs.gov/forms-pubs/about-form-1040-es',
  citationTitle: 'IRS Form 1040-ES & Schedule SE (Self-Employment Tax Guidelines)',
  regulatoryCode: '26 U.S. Code § 1401 (Self-Employment Contributions Act / SECA)',
  dataType: 'Statutory 15.3% SECA (12.4% Social Security up to wage base + 2.9% Medicare)',
  lastVerified: '2026 IRS Tax Year Guidelines (January 2026)',
};

export const ECOMMERCE_SOURCE: DataSource = {
  authorityName: 'Amazon Services LLC & Shopify Inc.',
  sourceUrl: 'https://sellercentral.amazon.com/help/hub/reference/external/GABBX6GZPA8MSZGW',
  citationTitle: 'Amazon FBA Fulfillment & Referral Fee Schedule / Shopify Subscription Rates',
  regulatoryCode: 'Amazon Services Business Solutions Agreement',
  dataType: 'Standard 15% Category Referral Fee + Tiered Pick & Pack Size-Tier Rates',
  lastVerified: '2026 Seller Central Commercial Schedule (January 2026)',
};

/**
 * Resolves the primary authoritative citation for any calculator given its category and slug.
 */
export function getDataSource(category: string, slug: string): DataSource {
  if (category === 'sales-tax-calculator') {
    const cleanSlug = slug.toLowerCase();
    if (STATE_SOURCES[cleanSlug]) {
      return STATE_SOURCES[cleanSlug];
    }
    return {
      authorityName: 'State Departments of Revenue & Federation of Tax Administrators',
      sourceUrl: 'https://www.taxadmin.org/state-tax-agencies',
      citationTitle: 'US 50-State Statutory Sales Tax Schedules & Wayfair Economic Nexus Thresholds',
      dataType: 'Statutory Base Rates & Local Discretionary Surtax Caps',
      lastVerified: '2026 Fiscal Regulations (January 2026)',
    };
  }

  if (category === 'vat-calculator') {
    if (slug === 'united-kingdom' || slug === 'gb' || slug === 'uk') {
      return UK_VAT_SOURCE;
    }
    const country = getVatCountry(slug);
    return {
      authorityName: country.authorityName,
      sourceUrl: country.authorityUrl,
      citationTitle: `${country.name} Statutory ${country.localVatName} Guidelines & VAT Directives`,
      regulatoryCode: country.regulatoryCitation,
      dataType: `Statutory ${country.standardRate}% Standard${country.reducedRate ? `, ${country.reducedRate}% Reduced` : ''} & Threshold: ${country.registrationThreshold}`,
      lastVerified: '2026 Fiscal Regulations (January 2026)',
    };
  }

  if (category === 'stripe-fee-calculator') {
    return GATEWAY_SOURCES.stripe;
  }

  if (category === 'paypal-fee-calculator') {
    return GATEWAY_SOURCES.paypal;
  }

  if (category === 'square-fee-calculator') {
    return GATEWAY_SOURCES.square;
  }

  if (category === 'wise-vs-stripe') {
    return GATEWAY_SOURCES['wise-vs-stripe'];
  }

  if (category === 'authorize-net-calculator') {
    return GATEWAY_SOURCES['authorize-net'];
  }

  if (category === 'freelance-rate-calculator') {
    return FREELANCE_SOURCE;
  }

  if (category === 'ecommerce-profit-calculator') {
    return ECOMMERCE_SOURCE;
  }

  return {
    authorityName: 'FeeKit Financial Research & Statutory Matrix',
    sourceUrl: 'https://www.usefeekit.com/about',
    citationTitle: 'FeeKit B2B Compliance & Merchant Rate Verification Framework',
    dataType: 'Standard Domestic & Cross-Border Commercial Benchmark Rates',
    lastVerified: '2026 Fiscal Regulations (January 2026)',
  };
}
