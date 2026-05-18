export const useGetWeatherData = (
  lat: Ref<number | null>,
  lon: Ref<number | null>,
): ReturnType<typeof useApiClient<WeatherUI>> => {
  return useApiClient<WeatherUI>('/api/weather', {
    query: computed(() => ({ lat: lat.value, lon: lon.value })),
    immediate: false,
    watch: [lat, lon],
  });
};
