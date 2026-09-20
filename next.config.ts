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
