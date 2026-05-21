<script setup lang="ts">
const route = useRoute();

const countryCode = computed(() => String(route.params.code));

const { data: country, status: countryStatus, error: countryError, refresh: refreshCountry } = await useGetCountryDetails(countryCode);
const lat = computed(() => country.value?.latlng?.lat ?? null);
const lon = computed(() => country.value?.latlng?.lon ?? null);

const { data: weather, status: weatherStatus, error: weatherError, refresh: refreshWeather } = await useGetWeatherData(lat, lon);

const status = computed(() => {
  if (countryStatus.value === 'pending' || weatherStatus.value === 'pending') {
    return 'pending';
  }

  if (countryStatus.value === 'error' || weatherStatus.value === 'error') {
    return 'error';
  }

  return 'success';
});
const error = computed(() => countryError.value || weatherError.value);
const isEmpty = computed(() => !country.value);

const onHandleRetry = async () => {
  await Promise.all([refreshCountry(), refreshWeather()]);
};
</script>

<template>
  <AppDataState
    :status="status"
    :error="error"
    :is-empty="isEmpty"
    error-title="Failed to load country or weather data"
    @retry="onHandleRetry"
  >
    <pre>{{ country }}</pre>
    <pre>{{ weather }}</pre>
  </AppDataState>
</template>
