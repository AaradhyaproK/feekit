import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FeeKit — Financial Calculation Utilities for US & UK Operators',
    short_name: 'FeeKit',
    description:
      'Precision client-side sales tax, payment processing, freelance rate, and profit margin calculators for US & UK business operators.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#0284C7',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/feekit-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/feekit-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
