import React from 'react';

interface IconProps {
  className?: string;
  isActive?: boolean;
}

/**
 * Creative custom icon for Stripe & Merchant Fees (40+ Gateways)
 * Features dual-layer fintech credit card, EMV contactless radio wave, and interchange chip.
 */
export function MerchantFeeIcon({ className = 'h-6 w-6', isActive = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mf-card-grad" x1="2" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="mf-chip-grad" x1="6" y1="12" x2="11" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* Background soft shadow card layer */}
      <rect
        x="5"
        y="10"
        width="22"
        height="15"
        rx="3.5"
        fill="currentColor"
        fillOpacity={isActive ? "0.18" : "0.08"}
        className="transition-all duration-300"
      />

      {/* Main Front Credit Card */}
      <rect
        x="3"
        y="6"
        width="23"
        height="15"
        rx="3.5"
        fill="url(#mf-card-grad)"
        stroke="#818CF8"
        strokeWidth="1.2"
      />

      {/* Magnetic Stripe / Accent Line */}
      <path d="M3 10.5H26" stroke="#312E81" strokeWidth="2.2" strokeOpacity="0.8" />

      {/* Smart EMV Chip */}
      <rect x="6" y="13.5" width="4.5" height="3.5" rx="1" fill="url(#mf-chip-grad)" />
      <path d="M8.25 13.5V17M6 15.25H10.5" stroke="#B45309" strokeWidth="0.5" />

      {/* Contactless Radio Waves */}
      <path
        d="M21 13.5C21.6 14.1 22 14.9 22 15.8C22 16.7 21.6 17.5 21 18.1"
        stroke="#E0E7FF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M23 12C24 13 24.6 14.3 24.6 15.8C24.6 17.3 24 18.6 23 19.6"
        stroke="#C7D2FE"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Floating Settlement Coin / Processing Arrow */}
      <circle cx="23" cy="22" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
      <path
        d="M20.8 22L22.2 23.4L25.2 20.6"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Creative custom icon for US & UK Tax Compliance (50 States + UK)
 * Features regulatory scale of justice / governmental shield with certified compliance check.
 */
export function TaxComplianceIcon({ className = 'h-6 w-6', isActive = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tax-shield-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* Regulatory Shield Base */}
      <path
        d="M16 3L6 7.2V14.8C6 21.2 10.3 27.1 16 29C21.7 27.1 26 21.2 26 14.8V7.2L16 3Z"
        fill="url(#tax-shield-grad)"
        stroke="#34D399"
        strokeWidth="1.2"
      />

      {/* Internal Legal Scales Beam */}
      <path d="M16 9.5V20.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 12H21" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left Pan (US Sales Tax) */}
      <path d="M11 12L8.5 16H13.5L11 12Z" fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="0.8" />
      <path d="M8.5 16C8.5 17.4 9.6 18.5 11 18.5C12.4 18.5 13.5 17.4 13.5 16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

      {/* Right Pan (UK HMRC VAT) */}
      <path d="M21 12L18.5 16H23.5L21 12Z" fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="0.8" />
      <path d="M18.5 16C18.5 17.4 19.6 18.5 21 18.5C22.4 18.5 23.5 17.4 23.5 16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

      {/* Pedestal Base */}
      <path d="M13 22H19" stroke="#ECFDF5" strokeWidth="2" strokeLinecap="round" />

      {/* Floating Verification Badge */}
      <circle cx="23.5" cy="22.5" r="4.5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.4" />
      <path
        d="M21.7 22.5L22.9 23.7L25.3 21.3"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Creative custom icon for 1099 & Contractor Rates (25 Roles)
 * Features professional contractor ledger, precision dollar seal, and hourly rate calculator dial.
 */
export function FreelanceRateIcon({ className = 'h-6 w-6', isActive = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rate-ledger-grad" x1="4" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="60%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      {/* Background Document / Invoice Sheet */}
      <rect
        x="5"
        y="4"
        width="18"
        height="24"
        rx="3"
        fill="url(#rate-ledger-grad)"
        stroke="#FCD34D"
        strokeWidth="1.2"
      />

      {/* Invoice Lines */}
      <path d="M9 9H17" stroke="#FEF3C7" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 13H15" stroke="#FEF3C7" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.85" />
      <path d="M9 17H13" stroke="#FEF3C7" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />

      {/* Rate Precision Percentage Symbol */}
      <circle cx="10" cy="21.5" r="1.1" fill="#FFFFFF" />
      <path d="M9 24L13 20" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="22.5" r="1.1" fill="#FFFFFF" />

      {/* High-Impact Contractor Hourly Seal / Badge */}
      <circle cx="22" cy="21" r="6.5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.6" />
      {/* Dollar Symbol in Badge */}
      <path
        d="M22 17.5V24.5M23.5 19C23.5 18.2 22.8 17.6 22 17.6C21.2 17.6 20.5 18.2 20.5 19C20.5 20.4 23.5 19.8 23.5 21.2C23.5 22.1 22.8 22.6 22 22.6C21.1 22.6 20.5 22 20.5 21.2"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Creative custom icon for E-Commerce & ROAS Hub (20 Niches)
 * Features modern dynamic shopping cart, product inventory package, and exponential ROAS growth curve.
 */
export function EcommerceRoasIcon({ className = 'h-6 w-6', isActive = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ecom-cart-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      {/* Main Cart Body */}
      <path
        d="M5 6H8L10.8 18.2C10.9 18.8 11.5 19.2 12.1 19.2H23.2C23.8 19.2 24.3 18.8 24.5 18.2L27 9H9"
        fill="url(#ecom-cart-grad)"
        stroke="#38BDF8"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Product Box in Cart */}
      <rect x="12" y="9.5" width="8" height="6.5" rx="1.2" fill="#F8FAFC" fillOpacity="0.9" />
      <path d="M16 9.5V16M12 12.5H20" stroke="#0284C7" strokeWidth="0.8" />

      {/* Cart Wheels */}
      <circle cx="12.5" cy="23" r="2" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
      <circle cx="22.5" cy="23" r="2" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />

      {/* Exponential Growth / ROAS Arrow Burst */}
      <path
        d="M17 18L21 14L24 16.5L28 11.5"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 11.5H28V14.5"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sparkle Star */}
      <path
        d="M28 6L28.6 7.4L30 8L28.6 8.6L28 10L27.4 8.6L26 8L27.4 7.4L28 6Z"
        fill="#F59E0B"
      />
    </svg>
  );
}
