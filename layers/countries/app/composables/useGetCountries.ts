export const useGetCountries = (): ReturnType<typeof useApiClient<CountryUI[]>> => {
  const nuxtApp = useNuxtApp();

  return useApiClient<CountryUI[]>('/api/countries', {
    key: 'countries-list',
    lazy: true,
    getCachedData: (key) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key],
  });
};
