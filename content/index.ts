import type { PageContent } from './types.ts';
import californiaContent from './sales-tax/california.ts';
import softwareEngineerContent from './freelance/software-engineer.ts';
import stripeUsaContent from './gateways/stripe-usa.ts';

const CONTENT_REGISTRY: Record<string, Record<string, PageContent>> = {
  'sales-tax': {
    california: californiaContent,
  },
  'freelance': {
    'software-engineer': softwareEngineerContent,
  },
  'gateways': {
    'stripe-usa': stripeUsaContent,
  },
  'vat': {},
  'ecommerce': {},
  'wise': {},
  'tools': {},
};

export function getPageContent(family: string, slug: string): PageContent | null {
  // Normalize family aliases
  let fam = family;
  if (family === 'sales-tax-calculator') fam = 'sales-tax';
  if (family === 'freelance-rate-calculator') fam = 'freelance';
  if (family === 'stripe-fee-calculator' || family === 'paypal-fee-calculator' || family === 'square-fee-calculator' || family === 'merchant') fam = 'gateways';
  if (family === 'vat-calculator') fam = 'vat';
  if (family === 'ecommerce-profit-margin-calculator') fam = 'ecommerce';
  if (family === 'wise-vs-stripe') fam = 'wise';

  // Normalize slug aliases
  let s = slug.toLowerCase();
  if (fam === 'gateways' && (s === 'usa' || s === 'us' || s === 'standard')) {
    if (family === 'stripe-fee-calculator') s = 'stripe-usa';
  }

  const famRegistry = CONTENT_REGISTRY[fam];
  if (!famRegistry) return null;
  return famRegistry[s] || null;
}

export {
  californiaContent,
  softwareEngineerContent,
  stripeUsaContent,
};

