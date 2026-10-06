import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/tools/1099-tax-calculator',
        destination: '/tools/freelance-rate-calculator/1099-tax-estimator',
        permanent: true,
      },
      {
        source: '/tools/1099-tax-calculator/:path*',
        destination: '/tools/freelance-rate-calculator/1099-tax-estimator',
        permanent: true,
      },
      {
        source: '/tools/freelance-hourly-calculator',
        destination: '/tools/freelance-rate-calculator',
        permanent: true,
      },
      {
        source: '/tools/freelance-hourly-calculator/:path*',
        destination: '/tools/freelance-rate-calculator',
        permanent: true,
      },
      {
        source: '/tools/freelance-rate-calculator/usa',
        destination: '/tools/freelance-rate-calculator/1099-tax-estimator',
        permanent: true,
      },
      {
        source: '/business-tools',
        destination: '/small-business',
        permanent: true,
      },
      {
        source: '/business-tools/:path*',
        destination: '/small-business',
        permanent: true,
      },
      {
        source: '/stripe',
        destination: '/tools/stripe-fee-calculator/usa',
        permanent: true,
      },
      {
        source: '/paypal',
        destination: '/tools/paypal-fee-calculator/usa',
        permanent: true,
      },
      {
        source: '/square',
        destination: '/tools/square-fee-calculator',
        permanent: true,
      },
      {
        source: '/wise',
        destination: '/tools/wise-vs-stripe',
        permanent: true,
      },
      {
        source: '/vat',
        destination: '/tools/vat-calculator/united-kingdom',
        permanent: true,
      },
      {
        source: '/sales-tax',
        destination: '/tools/sales-tax-calculator',
        permanent: true,
      },
      {
        source: '/salestax',
        destination: '/tools/sales-tax-calculator',
        permanent: true,
      },
      {
        source: '/calculator',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/calculators',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/invoice',
        destination: '/invoice-generator',
        permanent: true,
      },
      {
        source: '/invoices',
        destination: '/invoice-generator',
        permanent: true,
      },
      {
        source: '/freelance',
        destination: '/tools/freelance-rate-calculator',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/careers/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/company/careers',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/company/careers/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/announcements',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/announcements/:path*',
        destination: '/blog',
        permanent: true,
      },
      // Legal & Compliance Aliases
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/privacy-policy/:path*',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-of-service/:path*',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-and-conditions/:path*',
        destination: '/terms',
        permanent: true,
      },
      // Corporate, Career & Team Crawlers
      {
        source: '/hiring',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/hiring/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/jobs',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/jobs/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/join',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/join/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/work-with-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/work-with-us/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/team/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/customers',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/customers/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/pricing/:path*',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/press',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/press/:path*',
        destination: '/about',
        permanent: true,
      },
      // Media & News Crawlers
      {
        source: '/news',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/news/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/newsroom',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/newsroom/:path*',
        destination: '/blog',
        permanent: true,
      },
      // Integration & Tools Crawlers
      {
        source: '/integrations',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/integrations/:path*',
        destination: '/tools',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm', 'remark-frontmatter'],
    rehypePlugins: [
      'rehype-slug',
      [
        'rehype-pretty-code',
        {
          theme: 'github-light',
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
