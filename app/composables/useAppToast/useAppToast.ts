import { APP_TOAST_DEFAULTS_CONFIG } from './config';
import type { ToastSeverity } from './types';

export const useAppToast = () => {
  const toast = useToast();

  const addToast = (severity: ToastSeverity, summary?: string, detail?: string) => {
    const toastConfig = APP_TOAST_DEFAULTS_CONFIG[severity];

    toast.add({
      severity: toastConfig.severity,
      summary: summary ?? toastConfig.title,
      detail,
      life: toastConfig.life,
    });
  };

  return {
    success: (message: string) => addToast('success', message),
    error: (message: string, detail?: string) => addToast('error', message, detail),
    warning: (message: string, detail?: string) => addToast('warn', message, detail),
    info: (message: string, detail?: string) => addToast('info', message, detail),
  };
};
