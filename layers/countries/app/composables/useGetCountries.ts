export const useGetCountries = (): ReturnType<typeof useApiClient<CountryUI[]>> => {
  const nuxtApp = useNuxtApp();

  return useApiClient<CountryUI[]>(
    '/api/countries',
    {
      key: 'countries-list',
      getCachedData: (key) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key],
    },
    {
      errorMessage: 'Failed to load countries data',
    },
  );
};
