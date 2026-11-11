import geoMatrix from '@/data/geo-matrix.json';
import { getAllPosts } from '@/lib/blog';
import { US_SITE_URL } from '@/lib/seo';
import { CATEGORY_NAMES } from '@/lib/seo/category-names';
import { CANONICAL_REDIRECTS } from '@/lib/seo/canonical-redirects';

/**
 * /llms.txt - a machine-readable map of the site for LLM crawlers and AI
 * search surfaces (ChatGPT, Perplexity, Google AI Overviews, Claude).
 *
 * Generated from the live tool matrix and blog manifest so every URL stays
 * valid. A static file drifted out of sync and started publishing 404 links,
 * which is worse than not publishing the file at all.
 */

export const dynamic = 'force-static';

export function GET() {
  const matrixList = Array.isArray(geoMatrix)
    ? (geoMatrix as Array<any>)
    : (((geoMatrix as any).items || (geoMatrix as any).tools || []) as Array<any>);

  const categories = Array.from(new Set(matrixList.map((x) => x.category)));

  const lines: string[] = [];

  lines.push('# FeeKit');
  lines.push('');
  lines.push(
    '> Precision client-side financial calculation utilities and research guides for US and UK business operators, freelancers, and ecommerce merchants.'
  );
  lines.push('');
  lines.push(
    'FeeKit provides 100% private, instant client-side calculators for sales tax, payment processing fees (Stripe, PayPal, Square, Venmo), UK and EU VAT, self-employment 1099 taxes, and ecommerce profit margins.'
  );
  lines.push('');
  lines.push(`Last updated: ${new Date().toISOString().slice(0, 10)}`);
  lines.push('');

  // 1. Category hubs
  lines.push('## Calculator Categories');
  lines.push('');
  for (const category of categories) {
    const meta = CATEGORY_NAMES[category];
    if (!meta) continue;
    lines.push(
      `- [${meta.title}](${US_SITE_URL}/tools/${category}): ${meta.desc}`
    );
  }
  lines.push('');

  // 2. Every state and country tax calculator
  const taxTools = matrixList.filter(
    (x) => x.category === 'sales-tax-calculator' || x.category === 'vat-calculator' || x.category === 'canada-sales-tax'
  );
  lines.push('## Tax Calculators by State & Country');
  lines.push('');
  for (const tool of taxTools) {
    const path = `/tools/${tool.category}/${tool.slug}`;
    if (CANONICAL_REDIRECTS[path]) continue;
    lines.push(
      `- [${tool.title}](${US_SITE_URL}${path}): ${tool.subtitle}`
    );
  }
  lines.push('');

  // 3. Payment processing fee calculators
  const gatewayCategories = [
    'stripe-fee-calculator',
    'paypal-fee-calculator',
    'square-fee-calculator',
    'authorize-net-calculator',
    'venmo-fee-calculator',
    'shopify-fee-calculator',
    'gumroad-fee-calculator',
    'lemon-squeezy-calculator',
    'gateway-comparator',
  ];
  lines.push('## Payment Processing Fee Calculators');
  lines.push('');
  for (const tool of matrixList.filter((x) => gatewayCategories.includes(x.category))) {
    const path = `/tools/${tool.category}/${tool.slug}`;
    if (CANONICAL_REDIRECTS[path]) continue;
    lines.push(`- [${tool.title}](${US_SITE_URL}${path}): ${tool.subtitle}`);
  }
  lines.push('');

  // 4. Freelance, ecommerce and general business calculators
  const otherCategories = [
    'freelance-rate-calculator',
    'ecommerce-profit-calculator',
    'wise-vs-stripe',
    'profit-margin-calculator',
    'break-even-calculator',
    'roi-calculator',
    'quarterly-tax-calculator',
    'uk-ir35-calculator',
  ];
  lines.push('## Freelance, Ecommerce & Business Calculators');
  lines.push('');
  for (const tool of matrixList.filter((x) => otherCategories.includes(x.category))) {
    const path = `/tools/${tool.category}/${tool.slug}`;
    if (CANONICAL_REDIRECTS[path]) continue;
    lines.push(`- [${tool.title}](${US_SITE_URL}${path}): ${tool.subtitle}`);
  }
  lines.push('');

  // 5. Guides and articles
  const posts = getAllPosts();
  lines.push(`## Research & Guides (${posts.length} published articles)`);
  lines.push('');
  for (const post of posts) {
    lines.push(
      `- [${post.title}](${US_SITE_URL}/blog/${post.slug}): ${post.description}`
    );
  }
  lines.push('');

  // 6. Trust pages
  lines.push('## Methodology & Trust Pages');
  lines.push('');
  lines.push(`- [Methodology](${US_SITE_URL}/methodology): How every FeeKit rate is sourced, verified and published.`);
  lines.push(`- [Editorial Policy](${US_SITE_URL}/editorial-policy): Review, correction and update standards.`);
  lines.push(`- [Affiliate Disclosure](${US_SITE_URL}/affiliate-disclosure): How FeeKit makes money and where that does and does not affect rankings.`);
  lines.push(`- [About FeeKit](${US_SITE_URL}/about): Who builds FeeKit and why.`);
  lines.push('');

  lines.push('## Usage');
  lines.push('');
  lines.push('- Every calculator runs entirely in the browser. No data is uploaded.');
  lines.push('- Rates are verified against primary sources (IRS, state revenue departments, HMRC, and official processor pricing pages) and current for 2026.');
  lines.push(`- Sitemap: ${US_SITE_URL}/sitemap.xml`);

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
