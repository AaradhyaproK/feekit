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
    default:
      return null;
  }
}
