/**
 * FeeKit Core Data Architecture & Single Source of Truth Types
 * 
 * Compliance Rules:
 * 1. Every fact, rate, threshold, and benchmark must trace to an official primary source.
 * 2. If a value cannot be verified against an official source, status must be "needs_verification".
 * 3. Never invent facts or numbers.
 */

export type VerificationStatus = 'verified' | 'needs_verification';

export interface BaseRecord<T = number> {
  id: string;
  value: T;
  unit: '%' | 'fixed_currency' | 'currency' | 'count' | 'ratio' | 'days' | 'string' | 'years';
  currency?: string;
  label: string;
  sourceUrl: string;
  sourceName: string;
  lastVerified: string; // ISO date YYYY-MM-DD
  notes?: string;
  jurisdiction?: string;
  status: VerificationStatus;
}

export interface GatewayFeeSchedule {
  domesticPercent: BaseRecord<number>;
  domesticFixed: BaseRecord<number>;
  keyedPercent?: BaseRecord<number>;
  keyedFixed?: BaseRecord<number>;
  inPersonPercent?: BaseRecord<number>;
  inPersonFixed?: BaseRecord<number>;
  internationalSurchargePercent?: BaseRecord<number>;
  currencyConversionPercent?: BaseRecord<number>;
  disputeFeeFixed?: BaseRecord<number>;
  instantPayoutPercent?: BaseRecord<number>;
  monthlyFeeFixed?: BaseRecord<number>;
  achPercent?: BaseRecord<number>;
  achCapFixed?: BaseRecord<number>;
  micropaymentPercent?: BaseRecord<number>;
  micropaymentFixed?: BaseRecord<number>;
}

export interface StateSalesTaxRecord {
  slug: string;
  name: string;
  code: string;
  baseRate: BaseRecord<number>;
  maxCombinedRate: BaseRecord<number>;
  averageLocalRate: BaseRecord<number>;
  combinedAverageRate: BaseRecord<number>;
  economicNexusThreshold: BaseRecord<number>;
  economicNexusTransactions?: BaseRecord<number>;
  filingAgency: BaseRecord<string>;
  agencyFullName: string;
  sourceUrl: string;
  sourceName: string;
  lastVerified: string;
  recordRetentionYears: BaseRecord<number>;
  penaltyCitation: BaseRecord<string>;
  isDestinationBased: boolean;
  hasLocalSurtaxes: boolean;
  status: VerificationStatus;
  // State-specific taxability
  groceriesTaxable: 'exempt' | 'reduced' | 'taxable';
  clothingTaxable: 'exempt' | 'reduced' | 'taxable';
  saasTaxable: 'exempt' | 'taxable' | 'conditional';
  digitalGoodsTaxable: 'exempt' | 'taxable' | 'conditional';
  shippingTaxable: 'exempt' | 'taxable' | 'conditional';
  servicesTaxable: 'generally_exempt' | 'broadly_taxable' | 'enumerated_only';
  hasSalesTaxHoliday: boolean;
  salesTaxHolidayNotes?: string;
  namedLocalExamples: Array<{
    jurisdiction: string;
    localRate: number;
    combinedRate: number;
    notes: string;
  }>;
}

export interface VatCountryRecord {
  slug: string;
  code: string; // ISO 2-letter
  name: string;
  currencyCode: string;
  currencySymbol: string;
  localVatName: string;
  standardRate: BaseRecord<number>;
  reducedRate?: BaseRecord<number>;
  superReducedRate?: BaseRecord<number>;
  zeroRate: BaseRecord<number>;
  registrationThreshold: BaseRecord<number>;
  registrationThresholdDescription: string;
  authorityName: string;
  authorityUrl: string;
  regulatoryCitation: string;
  filingFrequencies: string[];
  vatNumberFormat: string;
  reverseChargeRule: string;
  euMember: boolean;
  lastVerified: string;
  status: VerificationStatus;
}

export interface FreelanceRoleRecord {
  slug: string;
  roleTitle: string;
  socCode: string; // BLS Standard Occupational Classification code (e.g. 15-1252)
  socTitle: string;
  blsMeanHourlyWage?: BaseRecord<number>;
  blsAnnualMeanWage?: BaseRecord<number>;
  blsCitation: string;
  blsSourceUrl: string;
  defaultAnnualNetTarget: BaseRecord<number>;
  defaultAnnualOverhead: BaseRecord<number>;
  typicalBillableHoursPerWeek: number; // e.g. 25
  typicalWeeksPerYear: number; // e.g. 48
  typicalAnnualBillableHours: number; // e.g. 1200
  typicalOverheadItems: Array<{
    item: string;
    annualEst: number;
    category: 'software' | 'hardware' | 'insurance' | 'legal_accounting' | 'education';
  }>;
  commonContractingRisks: string[];
  proposalScopeWording: string;
  lastVerified: string;
  status: VerificationStatus;
}

export interface EcommerceNicheRecord {
  slug: string;
  nicheTitle: string;
  primaryPlatform: 'amazon' | 'shopify' | 'etsy' | 'ebay' | 'tiktok';
  categoryReferralRate: BaseRecord<number>;
  platformFixedFee: BaseRecord<number>;
  typicalReturnRatePercent: number;
  typicalCogsPercentOfRetail: number;
  nicheSpecificCostDrivers: string[];
  regulatoryComplianceNotes: string;
  sourceUrl: string;
  sourceName: string;
  lastVerified: string;
  status: VerificationStatus;
}

export interface WisePairRecord {
  slug: string;
  sourceCurrency: string;
  targetCurrency: string;
  routeTitle: string;
  wiseVariablePercent: BaseRecord<number>;
  wiseFixedFee: BaseRecord<number>;
  stripeCrossBorderPercent: BaseRecord<number>;
  stripeFxPercent: BaseRecord<number>;
  regulatoryNotes: string;
  settlementRail: string;
  sourceUrl: string;
  sourceName: string;
  lastVerified: string;
  status: VerificationStatus;
}

