export type TaxDirection = 'add_tax' | 'remove_tax'; // Net to Gross vs Gross to Net

export interface TaxJurisdiction {
  code: string;
  name: string;
  region: 'US' | 'EU' | 'UK' | 'GLOBAL';
  standardRate: number; // decimal e.g. 0.20 for 20%
  reducedRate?: number;
  localAverageRate?: number; // for US states
  currencySymbol: string;
  notes?: string;
  economicNexusThreshold?: string;
}

export const US_STATES_TAX: Record<string, TaxJurisdiction> = {
  AL: { code: 'AL', name: 'Alabama', region: 'US', standardRate: 0.04, localAverageRate: 0.0524, currencySymbol: '$', economicNexusThreshold: '$250,000' },
  AK: { code: 'AK', name: 'Alaska', region: 'US', standardRate: 0.00, localAverageRate: 0.0176, currencySymbol: '$', economicNexusThreshold: '$100,000 or 200 tx' },
  AZ: { code: 'AZ', name: 'Arizona', region: 'US', standardRate: 0.056, localAverageRate: 0.0277, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  AR: { code: 'AR', name: 'Arkansas', region: 'US', standardRate: 0.065, localAverageRate: 0.0294, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  CA: { code: 'CA', name: 'California', region: 'US', standardRate: 0.0725, localAverageRate: 0.0157, currencySymbol: '$', economicNexusThreshold: '$500,000' },
  CO: { code: 'CO', name: 'Colorado', region: 'US', standardRate: 0.029, localAverageRate: 0.0487, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  CT: { code: 'CT', name: 'Connecticut', region: 'US', standardRate: 0.0635, localAverageRate: 0.00, currencySymbol: '$', economicNexusThreshold: '$100,000 and 200 tx' },
  DE: { code: 'DE', name: 'Delaware', region: 'US', standardRate: 0.00, localAverageRate: 0.00, currencySymbol: '$', notes: 'No state or local sales tax' },
  FL: { code: 'FL', name: 'Florida', region: 'US', standardRate: 0.06, localAverageRate: 0.0102, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  GA: { code: 'GA', name: 'Georgia', region: 'US', standardRate: 0.04, localAverageRate: 0.0335, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  HI: { code: 'HI', name: 'Hawaii', region: 'US', standardRate: 0.04, localAverageRate: 0.0044, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  ID: { code: 'ID', name: 'Idaho', region: 'US', standardRate: 0.06, localAverageRate: 0.0003, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  IL: { code: 'IL', name: 'Illinois', region: 'US', standardRate: 0.0625, localAverageRate: 0.0255, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  IN: { code: 'IN', name: 'Indiana', region: 'US', standardRate: 0.07, localAverageRate: 0.00, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  IA: { code: 'IA', name: 'Iowa', region: 'US', standardRate: 0.06, localAverageRate: 0.0094, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  KS: { code: 'KS', name: 'Kansas', region: 'US', standardRate: 0.065, localAverageRate: 0.0217, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  KY: { code: 'KY', name: 'Kentucky', region: 'US', standardRate: 0.06, localAverageRate: 0.00, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  LA: { code: 'LA', name: 'Louisiana', region: 'US', standardRate: 0.0445, localAverageRate: 0.0510, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  ME: { code: 'ME', name: 'Maine', region: 'US', standardRate: 0.055, localAverageRate: 0.00, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  MD: { code: 'MD', name: 'Maryland', region: 'US', standardRate: 0.06, localAverageRate: 0.00, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  MA: { code: 'MA', name: 'Massachusetts', region: 'US', standardRate: 0.0625, localAverageRate: 0.00, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  MI: { code: 'MI', name: 'Michigan', region: 'US', standardRate: 0.06, localAverageRate: 0.00, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  MN: { code: 'MN', name: 'Minnesota', region: 'US', standardRate: 0.06875, localAverageRate: 0.0062, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  MS: { code: 'MS', name: 'Mississippi', region: 'US', standardRate: 0.07, localAverageRate: 0.0007, currencySymbol: '$', economicNexusThreshold: '$250,000' },
  MO: { code: 'MO', name: 'Missouri', region: 'US', standardRate: 0.04225, localAverageRate: 0.0416, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  MT: { code: 'MT', name: 'Montana', region: 'US', standardRate: 0.00, localAverageRate: 0.00, currencySymbol: '$', notes: 'No general sales tax' },
  NE: { code: 'NE', name: 'Nebraska', region: 'US', standardRate: 0.055, localAverageRate: 0.0144, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  NV: { code: 'NV', name: 'Nevada', region: 'US', standardRate: 0.0685, localAverageRate: 0.0138, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  NH: { code: 'NH', name: 'New Hampshire', region: 'US', standardRate: 0.00, localAverageRate: 0.00, currencySymbol: '$', notes: 'No state or local sales tax' },
  NJ: { code: 'NJ', name: 'New Jersey', region: 'US', standardRate: 0.06625, localAverageRate: -0.0003, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  NM: { code: 'NM', name: 'New Mexico', region: 'US', standardRate: 0.05, localAverageRate: 0.0272, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  NY: { code: 'NY', name: 'New York', region: 'US', standardRate: 0.04, localAverageRate: 0.0452, currencySymbol: '$', economicNexusThreshold: '$500,000 and 100 tx' },
  NC: { code: 'NC', name: 'North Carolina', region: 'US', standardRate: 0.0475, localAverageRate: 0.0225, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  ND: { code: 'ND', name: 'North Dakota', region: 'US', standardRate: 0.05, localAverageRate: 0.0196, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  OH: { code: 'OH', name: 'Ohio', region: 'US', standardRate: 0.0575, localAverageRate: 0.0149, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  OK: { code: 'OK', name: 'Oklahoma', region: 'US', standardRate: 0.045, localAverageRate: 0.0449, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  OR: { code: 'OR', name: 'Oregon', region: 'US', standardRate: 0.00, localAverageRate: 0.00, currencySymbol: '$', notes: 'No general sales tax' },
  PA: { code: 'PA', name: 'Pennsylvania', region: 'US', standardRate: 0.06, localAverageRate: 0.0034, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  RI: { code: 'RI', name: 'Rhode Island', region: 'US', standardRate: 0.07, localAverageRate: 0.00, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  SC: { code: 'SC', name: 'South Carolina', region: 'US', standardRate: 0.06, localAverageRate: 0.0144, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  SD: { code: 'SD', name: 'South Dakota', region: 'US', standardRate: 0.042, localAverageRate: 0.0191, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  TN: { code: 'TN', name: 'Tennessee', region: 'US', standardRate: 0.07, localAverageRate: 0.0255, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  TX: { code: 'TX', name: 'Texas', region: 'US', standardRate: 0.0625, localAverageRate: 0.0195, currencySymbol: '$', economicNexusThreshold: '$500,000' },
  UT: { code: 'UT', name: 'Utah', region: 'US', standardRate: 0.061, localAverageRate: 0.0109, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  VT: { code: 'VT', name: 'Vermont', region: 'US', standardRate: 0.06, localAverageRate: 0.0036, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  VA: { code: 'VA', name: 'Virginia', region: 'US', standardRate: 0.053, localAverageRate: 0.0045, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  WA: { code: 'WA', name: 'Washington', region: 'US', standardRate: 0.065, localAverageRate: 0.0279, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  WV: { code: 'WV', name: 'West Virginia', region: 'US', standardRate: 0.06, localAverageRate: 0.0057, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  WI: { code: 'WI', name: 'Wisconsin', region: 'US', standardRate: 0.05, localAverageRate: 0.0043, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  WY: { code: 'WY', name: 'Wyoming', region: 'US', standardRate: 0.04, localAverageRate: 0.0136, currencySymbol: '$', economicNexusThreshold: '$100,000' },
  DC: { code: 'DC', name: 'District of Columbia', region: 'US', standardRate: 0.06, localAverageRate: 0.00, currencySymbol: '$', economicNexusThreshold: '$100,000' },
};

export const EU_VAT_TAX: Record<string, TaxJurisdiction> = {
  AT: { code: 'AT', name: 'Austria', region: 'EU', standardRate: 0.20, reducedRate: 0.10, currencySymbol: '€' },
  BE: { code: 'BE', name: 'Belgium', region: 'EU', standardRate: 0.21, reducedRate: 0.12, currencySymbol: '€' },
  BG: { code: 'BG', name: 'Bulgaria', region: 'EU', standardRate: 0.20, reducedRate: 0.09, currencySymbol: '€' },
  HR: { code: 'HR', name: 'Croatia', region: 'EU', standardRate: 0.25, reducedRate: 0.13, currencySymbol: '€' },
  CY: { code: 'CY', name: 'Cyprus', region: 'EU', standardRate: 0.19, reducedRate: 0.09, currencySymbol: '€' },
  CZ: { code: 'CZ', name: 'Czech Republic', region: 'EU', standardRate: 0.21, reducedRate: 0.12, currencySymbol: '€' },
  DK: { code: 'DK', name: 'Denmark', region: 'EU', standardRate: 0.25, currencySymbol: '€' },
  EE: { code: 'EE', name: 'Estonia', region: 'EU', standardRate: 0.22, reducedRate: 0.09, currencySymbol: '€' },
  FI: { code: 'FI', name: 'Finland', region: 'EU', standardRate: 0.255, reducedRate: 0.14, currencySymbol: '€' },
  FR: { code: 'FR', name: 'France', region: 'EU', standardRate: 0.20, reducedRate: 0.10, currencySymbol: '€' },
  DE: { code: 'DE', name: 'Germany', region: 'EU', standardRate: 0.19, reducedRate: 0.07, currencySymbol: '€' },
  GR: { code: 'GR', name: 'Greece', region: 'EU', standardRate: 0.24, reducedRate: 0.13, currencySymbol: '€' },
  HU: { code: 'HU', name: 'Hungary', region: 'EU', standardRate: 0.27, reducedRate: 0.18, currencySymbol: '€' },
  IE: { code: 'IE', name: 'Ireland', region: 'EU', standardRate: 0.23, reducedRate: 0.135, currencySymbol: '€' },
  IT: { code: 'IT', name: 'Italy', region: 'EU', standardRate: 0.22, reducedRate: 0.10, currencySymbol: '€' },
  LV: { code: 'LV', name: 'Latvia', region: 'EU', standardRate: 0.21, reducedRate: 0.12, currencySymbol: '€' },
  LT: { code: 'LT', name: 'Lithuania', region: 'EU', standardRate: 0.21, reducedRate: 0.09, currencySymbol: '€' },
  LU: { code: 'LU', name: 'Luxembourg', region: 'EU', standardRate: 0.17, reducedRate: 0.14, currencySymbol: '€' },
  MT: { code: 'MT', name: 'Malta', region: 'EU', standardRate: 0.18, reducedRate: 0.07, currencySymbol: '€' },
  NL: { code: 'NL', name: 'Netherlands', region: 'EU', standardRate: 0.21, reducedRate: 0.09, currencySymbol: '€' },
  PL: { code: 'PL', name: 'Poland', region: 'EU', standardRate: 0.23, reducedRate: 0.08, currencySymbol: '€' },
  PT: { code: 'PT', name: 'Portugal', region: 'EU', standardRate: 0.23, reducedRate: 0.13, currencySymbol: '€' },
  RO: { code: 'RO', name: 'Romania', region: 'EU', standardRate: 0.19, reducedRate: 0.09, currencySymbol: '€' },
  SK: { code: 'SK', name: 'Slovakia', region: 'EU', standardRate: 0.20, reducedRate: 0.10, currencySymbol: '€' },
  SI: { code: 'SI', name: 'Slovenia', region: 'EU', standardRate: 0.22, reducedRate: 0.095, currencySymbol: '€' },
  ES: { code: 'ES', name: 'Spain', region: 'EU', standardRate: 0.21, reducedRate: 0.10, currencySymbol: '€' },
  SE: { code: 'SE', name: 'Sweden', region: 'EU', standardRate: 0.25, reducedRate: 0.12, currencySymbol: '€' },
};

export const OTHER_VAT_TAX: Record<string, TaxJurisdiction> = {
  GB: { code: 'GB', name: 'United Kingdom', region: 'UK', standardRate: 0.20, reducedRate: 0.05, currencySymbol: '£', notes: 'HMRC Standard VAT is 20%' },
  CAN: { code: 'CAN', name: 'Canada (GST)', region: 'GLOBAL', standardRate: 0.05, localAverageRate: 0.08, currencySymbol: 'CA$', notes: '5% federal GST + provincial PST/HST' },
  AU: { code: 'AU', name: 'Australia (GST)', region: 'GLOBAL', standardRate: 0.10, currencySymbol: 'A$', notes: '10% Goods and Services Tax' },
  JP: { code: 'JP', name: 'Japan (JCT)', region: 'GLOBAL', standardRate: 0.10, reducedRate: 0.08, currencySymbol: '¥', notes: '10% standard Japanese Consumption Tax' },
};

export const ALL_TAX_JURISDICTIONS: Record<string, TaxJurisdiction> = {
  ...US_STATES_TAX,
  ...EU_VAT_TAX,
  ...OTHER_VAT_TAX,
};

export interface TaxCalculationInput {
  amount: number;
  direction: TaxDirection; // 'add_tax' or 'remove_tax'
  jurisdictionCode: string;
  includeLocalTax?: boolean; // For US states
  rateType?: 'standard' | 'reduced' | 'custom';
  customRate?: number;
  isB2BReverseCharge?: boolean;
}

export interface TaxCalculationResult {
  direction: TaxDirection;
  netAmount: number;
  taxAmount: number;
  grossAmount: number;
  taxRatePercentage: number;
  appliedRate: number;
  stateOrStandardRate: number;
  localRate: number;
  jurisdictionName: string;
  currencySymbol: string;
  complianceNotice: string;
  tierBreakdown: Array<{
    sampleNet: number;
    sampleTax: number;
    sampleGross: number;
  }>;
}

export function calculateTax(input: TaxCalculationInput): TaxCalculationResult {
  const {
    amount,
    direction = 'add_tax',
    jurisdictionCode,
    includeLocalTax = true,
    rateType = 'standard',
    isB2BReverseCharge = false,
  } = input;

  const jurisdiction = ALL_TAX_JURISDICTIONS[jurisdictionCode] || US_STATES_TAX.CA;
  const currencySymbol = jurisdiction.currencySymbol || '$';

  let baseRate = jurisdiction.standardRate;
  if (rateType === 'reduced' && jurisdiction.reducedRate !== undefined) {
    baseRate = jurisdiction.reducedRate;
  } else if (rateType === 'custom' && input.customRate !== undefined) {
    baseRate = input.customRate;
  }

  const localRate = (jurisdiction.region === 'US' && includeLocalTax && jurisdiction.localAverageRate)
    ? Math.max(0, jurisdiction.localAverageRate)
    : 0;

  const effectiveTaxRate = isB2BReverseCharge ? 0 : baseRate + localRate;

  let net = 0;
  let tax = 0;
  let gross = 0;

  if (direction === 'add_tax') {
    net = Math.max(0, amount);
    tax = net * effectiveTaxRate;
    gross = net + tax;
  } else {
    gross = Math.max(0, amount);
    net = effectiveTaxRate > 0 ? gross / (1 + effectiveTaxRate) : gross;
    tax = gross - net;
  }

  let complianceNotice = '';
  if (isB2BReverseCharge) {
    complianceNotice = 'B2B Reverse Charge Applied: Article 194/196 EU VAT Directive. Customer accounts for tax in recipient jurisdiction.';
  } else if (jurisdiction.region === 'US') {
    complianceNotice = `Sales Tax nexus applies once annual sales reach ${jurisdiction.economicNexusThreshold || '$100,000'}. Local rates vary by municipality.`;
  } else if (jurisdiction.region === 'EU') {
    complianceNotice = `EU VAT rules: One-Stop Shop (OSS) applies for cross-border B2C digital services above €10,000 threshold.`;
  } else {
    complianceNotice = jurisdiction.notes || 'Standard domestic tax compliance obligations apply.';
  }

  const tiers = [50, 250, 1000, 5000].map((tierAmount) => {
    const tTax = tierAmount * effectiveTaxRate;
    return {
      sampleNet: tierAmount,
      sampleTax: Number(tTax.toFixed(2)),
      sampleGross: Number((tierAmount + tTax).toFixed(2)),
    };
  });

  return {
    direction,
    netAmount: Number(net.toFixed(2)),
    taxAmount: Number(tax.toFixed(2)),
    grossAmount: Number(gross.toFixed(2)),
    taxRatePercentage: Number((effectiveTaxRate * 100).toFixed(3)),
    appliedRate: effectiveTaxRate,
    stateOrStandardRate: baseRate,
    localRate,
    jurisdictionName: jurisdiction.name,
    currencySymbol,
    complianceNotice,
    tierBreakdown: tiers,
  };
}
