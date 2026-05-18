export type ToastSeverity = 'success' | 'error' | 'warn' | 'info';

export type ToastOptions = {
  severity: ToastSeverity
  title: string
  life: number
};
