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
