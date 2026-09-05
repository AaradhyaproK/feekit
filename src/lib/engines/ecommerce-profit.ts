export type EcommercePlatform = 'amazon_fba' | 'shopify' | 'etsy' | 'ebay' | 'custom';

export interface EcommercePlatformConfig {
  id: EcommercePlatform;
  name: string;
  referralPercentage: number;
  fixedFee: number;
  fulfillmentEstimate: number; // e.g. Amazon FBA standard pick & pack
  tagline: string;
}

export const ECOMMERCE_PLATFORMS: Record<EcommercePlatform, EcommercePlatformConfig> = {
  amazon_fba: {
    id: 'amazon_fba',
    name: 'Amazon FBA',
    referralPercentage: 0.15, // 15% referral fee across most categories
    fixedFee: 0.0,
    fulfillmentEstimate: 4.25, // FBA pick & pack standard size
    tagline: '15% Referral + Amazon Pick & Pack fulfillment',
  },
  shopify: {
    id: 'shopify',
    name: 'Shopify DTC',
    referralPercentage: 0.029, // 2.9% Shopify Payments
    fixedFee: 0.30,
    fulfillmentEstimate: 0.0,  // merchant or 3PL fulfills
    tagline: '2.9% + $0.30 Shopify Payments with own 3PL fulfillment',
  },
  etsy: {
    id: 'etsy',
    name: 'Etsy Marketplace',
    referralPercentage: 0.095, // 6.5% transaction + 3% payment processing
    fixedFee: 0.45,            // $0.20 listing + $0.25 payment fixed
    fulfillmentEstimate: 0.0,
    tagline: '6.5% Transaction + 3% Payment + $0.45 Listing/Order',
  },
  ebay: {
    id: 'ebay',
    name: 'eBay Store',
    referralPercentage: 0.1325, // 13.25% typical final value fee
    fixedFee: 0.30,
    fulfillmentEstimate: 0.0,
    tagline: '13.25% Final Value Fee + $0.30 per order',
  },
  custom: {
    id: 'custom',
    name: 'Custom / WooCommerce',
    referralPercentage: 0.029,
    fixedFee: 0.30,
    fulfillmentEstimate: 0.0,
    tagline: 'Custom gateway & self-hosted store',
  },
};

export interface EcommerceProfitInput {
  sellingPrice: number;
  productCost: number;          // COGS
  shippingToWarehouse?: number; // Landed freight per unit
  packagingPrepCost?: number;   // Box, polybag, inserts
  customerShippingCost?: number;// Paid by seller if free shipping offered
  adSpendPerUnit?: number;      // CAC (Customer Acquisition Cost per conversion)
  platform: EcommercePlatform;
  customFulfillmentFee?: number;
  currencySymbol?: string;
}

export interface EcommerceProfitResult {
  sellingPrice: number;
  landedCost: number;           // COGS + Freight + Packaging
  platformFees: number;
  fulfillmentFees: number;
  totalCostPerUnit: number;
  netProfitPerUnit: number;
  netMarginPercentage: number;  // Net Profit / Price
  markupPercentage: number;     // Net Profit / Cost
  breakEvenRoas: number;        // Target ROAS multiplier where profit is exactly 0
  isProfitable: boolean;
  volumeProjections: Array<{
    units: number;
    totalRevenue: number;
    totalProfit: number;
  }>;
}

export function calculateEcommerceProfit(input: EcommerceProfitInput): EcommerceProfitResult {
  const {
    sellingPrice = 49.99,
    productCost = 12.0,
    shippingToWarehouse = 2.5,
    packagingPrepCost = 1.0,
    customerShippingCost = 0.0,
    adSpendPerUnit = 10.0,
    platform = 'amazon_fba',
    customFulfillmentFee,
  } = input;

  const config = ECOMMERCE_PLATFORMS[platform] || ECOMMERCE_PLATFORMS.amazon_fba;
  const price = Math.max(0, sellingPrice);
  const landedCost = Math.max(0, productCost) + Math.max(0, shippingToWarehouse) + Math.max(0, packagingPrepCost);

  // Platform fees
  const platformFees = (price * config.referralPercentage) + config.fixedFee;
  const fulfillmentFees = customFulfillmentFee !== undefined
    ? customFulfillmentFee
    : config.fulfillmentEstimate;

  const totalCostPerUnit = landedCost + customerShippingCost + platformFees + fulfillmentFees + Math.max(0, adSpendPerUnit);
  const netProfitPerUnit = price - totalCostPerUnit;

  const netMarginPercentage = price > 0 ? (netProfitPerUnit / price) * 100 : 0;
  const markupPercentage = totalCostPerUnit > 0 ? (netProfitPerUnit / totalCostPerUnit) * 100 : 0;

  // Break-Even ROAS Calculation:
  // Non-ad costs = landedCost + customerShipping + platformFees + fulfillmentFees
  // Gross Contribution before ads = price - nonAdCosts
  // Break-even ad spend = Gross Contribution
  // Break-even ROAS = price / break-even ad spend
  const nonAdCosts = landedCost + customerShippingCost + platformFees + fulfillmentFees;
  const grossContribution = price - nonAdCosts;
  const breakEvenRoas = grossContribution > 0 ? price / grossContribution : 999;

  const volumes = [100, 500, 1000, 5000].map((units) => ({
    units,
    totalRevenue: Number((price * units).toFixed(2)),
    totalProfit: Number((netProfitPerUnit * units).toFixed(2)),
  }));

  return {
    sellingPrice: Number(price.toFixed(2)),
    landedCost: Number(landedCost.toFixed(2)),
    platformFees: Number(platformFees.toFixed(2)),
    fulfillmentFees: Number(fulfillmentFees.toFixed(2)),
    totalCostPerUnit: Number(totalCostPerUnit.toFixed(2)),
    netProfitPerUnit: Number(netProfitPerUnit.toFixed(2)),
    netMarginPercentage: Number(netMarginPercentage.toFixed(2)),
    markupPercentage: Number(markupPercentage.toFixed(2)),
    breakEvenRoas: Number(breakEvenRoas.toFixed(2)),
    isProfitable: netProfitPerUnit > 0,
    volumeProjections: volumes,
  };
}
