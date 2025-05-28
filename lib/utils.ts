import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currency = "USD", options = {}): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
    ...options
  }).format(value);
}

export function formatPercentage(value: number, options = {}): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    ...options
  }).format(value / 100)}`;
}

export function formatNumber(value: number, options = {}): string {
  const formatter = new Intl.NumberFormat('en-US', {
    notation: "compact",
    compactDisplay: "short",
    ...options
  });
  return formatter.format(value);
}

export function formatLargeNumber(value: number): string {
  if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(1)}B`;
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(1)}M`;
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(1)}K`;
  }
  return `$${value}`;
}

export function getRiskLevelClass(riskLevel: string): {
  bgClass: string;
  textClass: string;
} {
  switch (riskLevel.toLowerCase()) {
    case 'low':
      return {
        bgClass: 'bg-success bg-opacity-20',
        textClass: 'text-success-dark'
      };
    case 'medium':
      return {
        bgClass: 'bg-warning bg-opacity-20',
        textClass: 'text-warning-dark'
      };
    case 'high':
      return {
        bgClass: 'bg-danger bg-opacity-20',
        textClass: 'text-danger-dark'
      };
    default:
      return {
        bgClass: 'bg-neutral-light',
        textClass: 'text-neutral-dark'
      };
  }
}
