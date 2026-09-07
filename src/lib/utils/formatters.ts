import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, symbol = '$', decimals = 2): string {
  if (isNaN(amount)) return `${symbol}0.00`;
  const parts = amount.toFixed(decimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${symbol}${parts.join('.')}`;
}

export function formatPercent(rate: number, decimals = 2): string {
  if (isNaN(rate)) return '0.00%';
  return `${rate.toFixed(decimals)}%`;
}

export function formatNumber(num: number): string {
  if (isNaN(num)) return '0';
  return num.toLocaleString();
}

/**
 * Sanitizes user input for numeric fields:
 * - Strips all characters except digits and '.'
 * - Ensures at most one decimal point
 * - Eliminates leading zeros when followed by a non-decimal digit (e.g., "05" -> "5", but keeps "0" and "0.")
 * - Preserves empty string "" so the input can be completely cleared
 */
export function cleanNumberInput(raw: string): string {
  const val = raw.replace(/,/g, '').replace(/[^0-9.]/g, '');
  const parts = val.split('.');
  const sanitized = parts[0] + (parts.length > 1 ? '.' + parts.slice(1).join('') : '');
  return sanitized.replace(/^0+(?=\d)/, '');
}

/**
 * Parses cleaned numeric string into a float value, falling back to 0 (or custom fallback)
 */
export function parseNumericValue(value: string | number | undefined, fallback = 0): number {
  if (typeof value === 'number') return isNaN(value) ? fallback : value;
  if (!value) return fallback;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? fallback : parsed;
}
