'use client';

import React from 'react';
import { PaymentGatewayId } from '@/lib/engines/merchant-fee';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Official Stripe Brand Icon (Stripe Blurple #635BFF with crisp 'S' mark)
 */
export function StripeLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stripe"
    >
      <rect width="32" height="32" rx="8" fill="#635BFF" />
      <path
        d="M15.1 12.8c0-.9.7-1.3 1.9-1.3 1.8 0 3.7.6 5.1 1.4v-4.4c-1.6-.7-3.4-1-5.2-1-4.2 0-7 2.2-7 6 0 5.8 8 4.9 8 7.4 0 1.1-.9 1.5-2.2 1.5-2 0-4.3-.8-5.9-1.8v4.5c1.8.8 3.8 1.2 5.8 1.2 4.3 0 7.3-2.1 7.3-6.1-.1-6.1-7.8-5.2-7.8-7.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official PayPal Brand Icon (Dual-tone overlapping 'P' in PayPal Blue)
 */
export function PaypalLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PayPal"
    >
      <rect width="32" height="32" rx="8" fill="#F4F8FC" stroke="#E2E8F0" strokeWidth="1" />
      {/* Back P (Deep Blue #003087) */}
      <path
        d="M10.5 7h6.8c3.2 0 5.2 1.6 4.7 4.7-.6 3.5-2.8 5.3-5.9 5.3h-2.4l-1.4 8h-3.8l2-18z"
        fill="#003087"
      />
      {/* Front P (Cyan Blue #0079C1) */}
      <path
        d="M13.2 11h6.4c3 0 4.8 1.5 4.3 4.4-.5 3.3-2.6 4.9-5.5 4.9h-2.3l-1.3 7.7h-3.5l1.9-17z"
        fill="#0079C1"
      />
      {/* Intersecting Shadow */}
      <path
        d="M16.1 16.5c-.2 1.2-1.2 2-2.4 2h-1.8l-.9 5.5h2.8l1.1-6.7c.4-.2.8-.5 1.2-.8z"
        fill="#002060"
        opacity="0.25"
      />
    </svg>
  );
}

/**
 * Official Wise Brand Icon (Fast-flag mark in electric green #9FE870 / forest #163300)
 */
export function WiseLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wise"
    >
      <rect width="32" height="32" rx="8" fill="#9FE870" />
      {/* Wise Fast-Flag Arrow Icon */}
      <path
        d="M11.2 8h10.4l-4.2 6.5h4.8L13 25l2.6-7.8h-4.4L11.2 8z"
        fill="#163300"
      />
    </svg>
  );
}

/**
 * Official Square Brand Icon (Square inside rounded square in Onyx Black #111827)
 */
export function SquareLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Square"
    >
      <rect width="32" height="32" rx="8" fill="#0F172A" />
      {/* Outer Square Border */}
      <rect
        x="8"
        y="8"
        width="16"
        height="16"
        rx="3.5"
        stroke="#FFFFFF"
        strokeWidth="2.4"
      />
      {/* Inner Solid Square */}
      <rect
        x="13.2"
        y="13.2"
        width="5.6"
        height="5.6"
        rx="1.2"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official Authorize.Net Brand Icon (Signature navy shield & warm orange swoosh)
 */
export function AuthorizeNetLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Authorize.Net"
    >
      <rect width="32" height="32" rx="8" fill="#003366" />
      {/* Navy stylized A & warm orange chevron */}
      <path
        d="M16 6L7 22h5.5l2.1-4.2h5.8l-.9-2h-4.1l2.5-5.2L16 6z"
        fill="#FFFFFF"
      />
      <path
        d="M18.8 17.8L16.2 23h5.8l4-7h-5.2l-2 1.8z"
        fill="#F58220"
      />
      <circle cx="16" cy="11.5" r="1.5" fill="#F58220" />
    </svg>
  );
}

/**
 * Official Venmo Brand Icon (Vibrant Venmo Blue #008CFF with crisp italicized 'V')
 */
export function VenmoLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Venmo"
    >
      <rect width="32" height="32" rx="8" fill="#008CFF" />
      <path
        d="M22.5 7.2c.4 1.2.6 2.4.6 3.6 0 5.4-4.5 12.3-8.4 16.5H8.2L5.5 8.8h5.2l1.7 11.5c2.1-3.2 4.7-8.7 4.7-11.8 0-1.1-.2-2-.5-2.7l5.9 1.4z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official Gumroad Brand Icon (Signature Hot Pink #FF90E8 with bold geometric 'G')
 */
export function GumroadLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Gumroad"
    >
      <rect width="32" height="32" rx="8" fill="#FF90E8" />
      <path
        d="M16 6.8c-5.1 0-9.2 4.1-9.2 9.2s4.1 9.2 9.2 9.2c4.4 0 8.1-3.1 8.9-7.2H16v-4h13.2c.1.6.1 1.3.1 2 0 7.3-5.9 13.2-13.3 13.2C8.7 29.2 3 23.5 3 16S8.7 2.8 16 2.8c3.8 0 7.2 1.6 9.6 4.2L22.5 10C20.8 8 18.5 6.8 16 6.8z"
        fill="#000000"
      />
    </svg>
  );
}

/**
 * Official Lemon Squeezy Brand Icon (Royal Purple #7047EB with vibrant yellow lemon & green leaf)
 */
export function LemonSqueezyLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lemon Squeezy"
    >
      <rect width="32" height="32" rx="8" fill="#7047EB" />
      {/* Green leaf */}
      <path
        d="M17 6.5c3.2 0 5 2.2 4.5 4.8-2.6.5-4.8-.8-4.5-4.8z"
        fill="#10B981"
      />
      {/* Lemon body */}
      <path
        d="M24.8 12.2c-.8-.8-2-.8-3.2-.2-2.5-1.5-6-.8-8.2 1.4-2.5 2.5-2.8 6.5-1.2 9.2-.6 1.1-.5 2.2.3 3 .8.8 2 .8 3.2.2 2.5 1.5 6 .8 8.2-1.4 2.5-2.5 2.8-6.5 1.2-9.2.6-1.1.5-2.2-.3-3z"
        fill="#FFD200"
      />
    </svg>
  );
}

/**
 * Official Paddle Brand Icon (Deep Slate #0D1726 with signature dual coral/white chevrons)
 */
export function PaddleLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Paddle"
    >
      <rect width="32" height="32" rx="8" fill="#0D1726" />
      {/* Paddle Left Blade - Electric Coral */}
      <path
        d="M7 16l6-6.5h4.5L11.5 16l6 6.5H13L7 16z"
        fill="#FF5A36"
      />
      {/* Paddle Right Blade - Pure White */}
      <path
        d="M14.5 16l6-6.5H25L19 16l6 6.5h-4.5L14.5 16z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official Shopify Payments Brand Icon (Shopify Forest Green #008060 with bag & white 'S')
 */
export function ShopifyPaymentsLogo({ className = 'h-5 w-5', size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Shopify Payments"
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
}

/**
 * Universal Gateway Logo Renderer
 */
export function GatewayLogo({
  gatewayId,
  className = 'h-5 w-5',
  size = 20,
}: {
  gatewayId: PaymentGatewayId;
  className?: string;
  size?: number;
}) {
  switch (gatewayId) {
    case 'stripe':
      return <StripeLogo className={className} size={size} />;
    case 'paypal':
      return <PaypalLogo className={className} size={size} />;
    case 'wise':
      return <WiseLogo className={className} size={size} />;
    case 'square':
      return <SquareLogo className={className} size={size} />;
    case 'authorize_net':
      return <AuthorizeNetLogo className={className} size={size} />;
    case 'venmo':
      return <VenmoLogo className={className} size={size} />;
    case 'gumroad':
      return <GumroadLogo className={className} size={size} />;
    case 'lemon_squeezy':
      return <LemonSqueezyLogo className={className} size={size} />;
    case 'paddle':
      return <PaddleLogo className={className} size={size} />;
    case 'shopify_payments':
      return <ShopifyPaymentsLogo className={className} size={size} />;
    default:
      return null;
  }
}
