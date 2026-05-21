import type { ApiClientMessages, ApiFetchOptions, ApiFetchUrl } from './types';

export const useApiClient = <T>(
  url: ApiFetchUrl<T>,
  options: ApiFetchOptions<T> = {},
  messages: ApiClientMessages = {},
) => {
  const { error: toastError, success: toastSuccess } = useAppToast();
  const { errorMessage, successMessage } = messages;

  const response = useFetch<T>(url, {
    ...options,
    watch: false,
  });

  watch(response.error, (err) => {
    if (err && import.meta.client) {
      toastError(errorMessage ?? 'Something went wrong', err.message);
    }
  });

  watch(response.data, (data) => {
    if (data && import.meta.client && successMessage) {
      toastSuccess(successMessage);
    }
  });

  return response;
};
