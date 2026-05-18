// Keep the wrapper aligned with Nuxt's useFetch overloads without re-declaring its generic option types.
export type ApiFetchUrl<T> = Parameters<typeof useFetch<T>>[0];
export type ApiFetchOptions<T> = Parameters<typeof useFetch<T>>[1];

export type ApiClientMessages = {
  successMessage?: string
  errorMessage?: string
};

export type ApiErrorBody = {
  statusMessage?: string
};
