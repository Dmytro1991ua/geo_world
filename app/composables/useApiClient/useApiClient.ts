import type { ApiClientMessages, ApiErrorBody, ApiFetchOptions, ApiFetchUrl }
  from './types';

export const useApiClient = <T>(
  url: ApiFetchUrl<T>,
  options?: ApiFetchOptions<T>,
  messages: ApiClientMessages = {},
) => {
  const { error: toastError, success: toastSuccess } = useAppToast();
  const { successMessage, errorMessage } = messages;

  return useFetch<T>(url, {
    ...options,
    watch: false,
    onResponse: ({ response }) => {
      if (response.ok && successMessage) {
        toastSuccess(successMessage);
      }
    },
    onResponseError: ({ response }) => {
      toastError(
        errorMessage ?? 'Something went wrong',
        (response._data as ApiErrorBody)?.statusMessage,
      );
    },
    onRequestError: ({ error }) => {
      toastError('Network error', error.message);
    },
  });
};
