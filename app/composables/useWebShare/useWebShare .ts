import type { SharePageOptions, UseWebShareReturn } from './types';

export const useWebShare = (): UseWebShareReturn => {
  const { success: toastSuccess } = useAppToast();

  const onSharePage = async ({ title, text, url }: SharePageOptions) => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });

        return;
      }

      await navigator.clipboard.writeText(url);

      toastSuccess('Link copied to clipboard');
    } catch (error) {
      // User cancelled the native share sheet — expected, ignore silently
      if (error instanceof DOMException && error.name === 'AbortError') return;

      // Anything else is unexpected
      console.error('[useWebShare]', error);
    }
  };

  return { onSharePage };
};
