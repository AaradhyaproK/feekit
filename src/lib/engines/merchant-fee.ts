export type PaymentGatewayId = 'stripe' | 'paypal' | 'wise' | 'square' | 'authorize_net';

export type TransactionType = 'domestic' | 'international';
export type CalculationDirection = 'forward' | 'reverse';

export interface GatewayTier {
  id: PaymentGatewayId;
  name: string;
  tagline: string;
  badge?: string;
  percentageRate: number; // e.g. 0.029 for 2.9%
  fixedFee: number;       // e.g. 0.30 for $0.30
  intlExtraPercentage: number; // e.g. 0.015 for 1.5%
  currencyConversionRate: number; // e.g. 0.01 for 1%
  monthlyFee: number;
}

export const GATEWAYS: Record<PaymentGatewayId, GatewayTier> = {
  stripe: {
    id: 'stripe',
    name: 'Stripe',
    tagline: 'Standard online card processing',
    badge: 'Popular',
    percentageRate: 0.029,
    fixedFee: 0.30,
    intlExtraPercentage: 0.015,
    currencyConversionRate: 0.01,
    monthlyFee: 0,
  },
  paypal: {
    id: 'paypal',
    name: 'PayPal Commerce',
    tagline: 'Standard commercial transactions',
    percentageRate: 0.0349,
    fixedFee: 0.49,
    intlExtraPercentage: 0.015,
    currencyConversionRate: 0.03, // PayPal currency conversion markup is typically 3-4%
    monthlyFee: 0,
  },
  wise: {
    id: 'wise',
    name: 'Wise Business',
    tagline: 'Direct mid-market multi-currency bank payouts',
    badge: 'Lowest Fee',
    percentageRate: 0.0045, // ~0.45% mid-market
    fixedFee: 0.0,
    intlExtraPercentage: 0.0,
    currencyConversionRate: 0.0045,
    monthlyFee: 0,
  },
  square: {
    id: 'square',
    name: 'Square Online',
    tagline: 'Omnichannel & e-commerce payments',
    percentageRate: 0.029,
    fixedFee: 0.30,
    intlExtraPercentage: 0.01,
    currencyConversionRate: 0.015,
    monthlyFee: 0,
  },
  authorize_net: {
    id: 'authorize_net',
    name: 'Authorize.Net',
    tagline: 'Payment gateway + merchant account',
    percentageRate: 0.029,
    fixedFee: 0.30,
    intlExtraPercentage: 0.015,
    currencyConversionRate: 0.015,
    monthlyFee: 25.0, // $25/mo gateway fee
  },
};

export interface MerchantFeeInput {
  amount: number; // either Gross (forward) or Target Net (reverse)
  gatewayId: PaymentGatewayId;
  direction?: CalculationDirection;
  isInternational?: boolean;
  applyCurrencyConversion?: boolean;
  currency?: string;
  customPercentageRate?: number;
  customFixedFee?: number;
}

export interface MerchantFeeResult {
  direction: CalculationDirection;
  grossAmount: number;
  netAmount: number;
  totalFee: number;
  effectiveFeeRate: number; // percentage (e.g. 3.2%)
  breakdown: {
    basePercentageFee: number;
    fixedFee: number;
    internationalFee: number;
    currencyConversionFee: number;
  };
  competitorComparison: Array<{
    gatewayId: PaymentGatewayId;
    name: string;
    totalFee: number;
    netAmount: number;
    effectiveRate: number;
    differenceVsSelected: number; // positive = saves money, negative = costs more
  }>;
}

export function calculateMerchantFee(input: MerchantFeeInput): MerchantFeeResult {
  const {
    amount,
    gatewayId,
    direction = 'forward',
    isInternational = false,
    applyCurrencyConversion = false,
  } = input;

  const gateway = GATEWAYS[gatewayId] || GATEWAYS.stripe;
  const baseRate = input.customPercentageRate !== undefined ? input.customPercentageRate : gateway.percentageRate;
  const fixed = input.customFixedFee !== undefined ? input.customFixedFee : gateway.fixedFee;
  const intlRate = isInternational ? gateway.intlExtraPercentage : 0;
  const fxRate = applyCurrencyConversion ? gateway.currencyConversionRate : 0;
  const totalVariableRate = baseRate + intlRate + fxRate;

  let gross = 0;
  let net = 0;
  let totalFee = 0;

  if (direction === 'forward') {
    gross = Math.max(0, amount);
    if (gross === 0) {
      return emptyResult(direction);
    }
    const baseFee = gross * baseRate;
    const intlFee = gross * intlRate;
    const fxFee = gross * fxRate;
    totalFee = baseFee + fixed + intlFee + fxFee;
    net = Math.max(0, gross - totalFee);
  } else {
    // Reverse: amount is target net payout
    net = Math.max(0, amount);
    if (net === 0) {
      return emptyResult(direction);
    }
    // Gross = (Net + FixedFee) / (1 - totalVariableRate)
    const rateDenominator = 1 - totalVariableRate;
    gross = rateDenominator > 0 ? (net + fixed) / rateDenominator : net;
    totalFee = Math.max(0, gross - net);
  }

  const basePercentageFee = gross * baseRate;
  const internationalFee = gross * intlRate;
  const currencyConversionFee = gross * fxRate;
  const effectiveFeeRate = gross > 0 ? (totalFee / gross) * 100 : 0;

  // Comparison across other providers for the identical gross volume
  const competitorComparison = (Object.keys(GATEWAYS) as PaymentGatewayId[]).map((id) => {
    const comp = GATEWAYS[id];
    const compIntl = isInternational ? comp.intlExtraPercentage : 0;
    const compFx = applyCurrencyConversion ? comp.currencyConversionRate : 0;
    const compTotalRate = comp.percentageRate + compIntl + compFx;
    const compFee = gross * compTotalRate + comp.fixedFee;
    const compNet = Math.max(0, gross - compFee);
    const compEffective = gross > 0 ? (compFee / gross) * 100 : 0;
    const difference = totalFee - compFee; // positive means competitor is cheaper (you save)

    return {
      gatewayId: id,
      name: comp.name,
      totalFee: Number(compFee.toFixed(2)),
      netAmount: Number(compNet.toFixed(2)),
      effectiveRate: Number(compEffective.toFixed(2)),
      differenceVsSelected: Number(difference.toFixed(2)),
    };
  });

  return {
    direction,
    grossAmount: Number(gross.toFixed(2)),
    netAmount: Number(net.toFixed(2)),
    totalFee: Number(totalFee.toFixed(2)),
    effectiveFeeRate: Number(effectiveFeeRate.toFixed(2)),
    breakdown: {
      basePercentageFee: Number(basePercentageFee.toFixed(2)),
      fixedFee: Number(fixed.toFixed(2)),
      internationalFee: Number(internationalFee.toFixed(2)),
      currencyConversionFee: Number(currencyConversionFee.toFixed(2)),
    },
    competitorComparison,
  };
}

function emptyResult(direction: CalculationDirection): MerchantFeeResult {
  return {
    direction,
    grossAmount: 0,
    netAmount: 0,
    totalFee: 0,
    effectiveFeeRate: 0,
    breakdown: {
      basePercentageFee: 0,
      fixedFee: 0,
      internationalFee: 0,
      currencyConversionFee: 0,
    },
    competitorComparison: [],
  };
}
