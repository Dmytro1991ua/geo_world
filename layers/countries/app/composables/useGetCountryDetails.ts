export const useGetCountryDetails = (
  code: MaybeRefOrGetter<string>,
): ReturnType<typeof useApiClient<CountryDetailUI>> => {
  const nuxtApp = useNuxtApp();

  return useApiClient<CountryDetailUI>(
    () => `/api/countries/${toValue(code)}`,
    {
      key: () => `country-${toValue(code)}`,
      getCachedData: (key) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key],
    },
    {
      errorMessage: 'Failed to load country details data',
    },
  );
};
