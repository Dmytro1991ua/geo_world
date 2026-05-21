export const useGetWeatherData = (
  lat: Ref<number | null>,
  lon: Ref<number | null>,
): ReturnType<typeof useApiClient<WeatherUI>> => {
  const weatherRequest = useApiClient<WeatherUI>(
    '/api/weather',
    {
      query: computed(() => ({
        lat: lat.value,
        lon: lon.value,
      })),
      immediate: false,
      watch: false,
    },
    {
      errorMessage: 'Failed to load weather',
    },
  );

  watch(
    // Weather data depends on country details (latitude/longitude), so wait until both coordinates are available before fetching.
    [lat, lon],
    ([newLatValue, newLonValue]) => {
      if (newLatValue === null || newLonValue === null) return;

      weatherRequest.execute();
    },
    { immediate: true },
  );

  return weatherRequest;
};
