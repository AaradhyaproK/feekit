import React from 'react';
import { EcommercePlatform } from '@/lib/engines/ecommerce-profit';

interface PlatformLogoProps {
  platform: EcommercePlatform | string;
  className?: string;
  size?: number;
}

export function PlatformLogo({ platform, className = '', size = 22 }: PlatformLogoProps) {
  switch (platform) {
    case 'shopify':
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          className={`shrink-0 ${className}`}
          aria-label="Shopify"
        >
          <rect width="32" height="32" rx="8" fill="#008060" />
          {/* Shopping Bag Silhouette */}
          <path
            d="M23.5 10.5C23.4 9.9 22.8 9.5 22.2 9.5H19.5C19.4 7.6 17.9 6 16 6C14.1 6 12.6 7.6 12.5 9.5H9.8C9.2 9.5 8.6 9.9 8.5 10.5L6.5 24C6.4 24.6 6.8 25.2 7.4 25.3C7.5 25.3 7.6 25.3 7.8 25.3H24.2C24.8 25.3 25.3 24.8 25.3 24.2C25.3 24.1 25.3 24 25.2 23.9L23.5 10.5Z"
            fill="#95BF47"
          />
          {/* Handle */}
          <path
            d="M13.8 9.5C13.9 8.3 14.8 7.3 16 7.3C17.2 7.3 18.1 8.3 18.2 9.5H13.8Z"
            fill="#004C3F"
          />
          {/* Stylized 'S' inside bag */}
          <path
            d="M17.8 15.2C17.2 14.8 16.4 14.7 15.7 14.9C15.1 15.1 14.7 15.6 14.8 16.2C14.9 16.9 15.6 17.2 16.5 17.5C17.8 17.9 18.8 18.6 18.6 20C18.4 21.4 17 22.2 15.5 22.1C14.2 22 13.3 21.4 12.8 20.8L13.7 19.6C14.2 20.1 14.9 20.6 15.7 20.6C16.4 20.6 16.9 20.2 17 19.6C17.1 19 16.5 18.6 15.5 18.2C14.2 17.8 13.3 17.2 13.5 15.8C13.7 14.5 14.9 13.6 16.4 13.5C17.4 13.4 18.4 13.8 19 14.4L17.8 15.2Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'amazon_fba':
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          className={`shrink-0 ${className}`}
          aria-label="Amazon FBA"
        >
          <rect width="32" height="32" rx="8" fill="#131921" />
          {/* Amazon 'a' */}
          <text
            x="8"
            y="19"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15"
            fontWeight="900"
          >
            a
          </text>
          {/* FBA Tag */}
          <rect x="18" y="9" width="10" height="6" rx="1.5" fill="#FF9900" />
          <text
            x="19"
            y="13.8"
            fill="#131921"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="4.2"
            fontWeight="900"
          >
            FBA
          </text>
          {/* Amazon Signature Smile Curve */}
          <path
            d="M8.5 22.5C13 25.2 20 24.8 24.5 21"
            stroke="#FF9900"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Smile Arrowhead */}
          <path
            d="M23 20.2L25 21.2L24.5 23"
            fill="#FF9900"
          />
        </svg>
      );

    case 'etsy':
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          className={`shrink-0 ${className}`}
          aria-label="Etsy Marketplace"
        >
          <rect width="32" height="32" rx="8" fill="#F1641E" />
          {/* Elegant Serif 'E' */}
          <text
            x="16"
            y="23"
            fill="#FFFFFF"
            fontFamily="Georgia, serif"
            fontSize="22"
            fontWeight="bold"
            textAnchor="middle"
          >
            E
          </text>
        </svg>
      );

    case 'ebay':
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          className={`shrink-0 ${className}`}
          aria-label="eBay Store"
        >
          <rect width="32" height="32" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
          {/* 4-Color eBay typography */}
          <g transform="translate(4, 8) scale(0.65)">
            {/* e (Red) */}
            <path
              d="M5.5 13C5.5 8 9 5 13.5 5C17.5 5 20.5 7.5 21 11.5H8.5C8.8 14.5 11 16 13.5 16C15.5 16 17 15 18 14L20.5 15.5C18.8 17.8 16.3 19 13.5 19C8.5 19 5.5 16 5.5 13ZM13.5 8C11 8 9 9.5 8.6 11.5H18C17.6 9.5 15.5 8 13.5 8Z"
              fill="#E53238"
            />
            {/* b (Blue) */}
            <path
              d="M21.5 2H24.5V9C25.5 7.5 27.5 6.5 29.5 6.5C33.5 6.5 36.5 9.5 36.5 14C36.5 18.5 33.5 21.5 29.5 21.5C27.5 21.5 25.5 20.5 24.5 19V21.5H21.5V2ZM29 9.5C26.5 9.5 24.5 11.5 24.5 14C24.5 16.5 26.5 18.5 29 18.5C31.5 18.5 33.5 16.5 33.5 14C33.5 11.5 31.5 9.5 29 9.5Z"
              fill="#0064D2"
            />
          </g>
        </svg>
      );

    case 'custom':
    case 'woocommerce':
    default:
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          className={`shrink-0 ${className}`}
          aria-label="WooCommerce / Custom"
        >
          <rect width="32" height="32" rx="8" fill="#7F54B3" />
          {/* WooCommerce Speech Bubble */}
          <path
            d="M7 10C7 8.3 8.3 7 10 7H22C23.7 7 25 8.3 25 10V18C25 19.7 23.7 21 22 21H13L8.5 24.5V21H10C9.4 21 7 20 7 18V10Z"
            fill="#FFFFFF"
            fillOpacity="0.2"
          />
          {/* Bold 'W' */}
          <path
            d="M9.5 11L11.8 19.5H13.8L15.5 14L17.2 19.5H19.2L21.5 11H19.5L18.2 16.8L16.5 11H14.5L12.8 16.8L11.5 11H9.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );
  }
}
