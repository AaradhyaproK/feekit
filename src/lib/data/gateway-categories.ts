/**
 * ==============================================================================
 * FeeKit Payment Gateway Categories
 * ==============================================================================
 * The payment-processor suites. These are the categories whose calculators
 * model a gateway's pricing rather than a tax: Stripe, PayPal, Square,
 * Authorize.Net, Venmo, Gumroad, Lemon Squeezy, Shopify Payments, Wise and
 * the 3-way gateway comparator.
 *
 * This list is the single source of truth for the "Payment Gateways" count
 * that appears on the homepage quick-suite chips, the suite showcase cards
 * and the directory filter pills. It is consumed by both the build-time
 * statistics script and the client components, so the number shown can never
 * disagree with the number of calculators actually listed.
 * ==============================================================================
 */

export const GATEWAY_CATEGORIES = [
  'stripe-fee-calculator',
  'paypal-fee-calculator',
  'square-fee-calculator',
  'authorize-net-calculator',
  'venmo-fee-calculator',
  'gumroad-fee-calculator',
  'lemon-squeezy-calculator',
  'shopify-fee-calculator',
  'wise-vs-stripe',
  'gateway-comparator',
] as const;

export type GatewayCategory = (typeof GATEWAY_CATEGORIES)[number];

/**
 * True when a category slug belongs to the payment-gateway family.
 */
export function isGatewayCategory(category: string): boolean {
  return (GATEWAY_CATEGORIES as readonly string[]).includes(category);
}
