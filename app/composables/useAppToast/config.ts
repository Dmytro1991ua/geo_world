import type { ToastOptions, ToastSeverity } from './types';

export const APP_TOAST_DEFAULTS_CONFIG: Record<ToastSeverity, ToastOptions> = {
  success: { severity: 'success', title: 'Success', life: 3000 },
  error: { severity: 'error', title: 'Error', life: 4000 },
  warn: { severity: 'warn', title: 'Warning', life: 3000 },
  info: { severity: 'info', title: 'Info', life: 3000 },
};
