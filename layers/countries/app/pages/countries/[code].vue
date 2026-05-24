<script setup lang="ts">
const route = useRoute();

const countryCode = computed(() => String(route.params.code));

const {
  data: country,
  status: countryStatus,
  error: countryError,
  refresh: refreshCountry,
} = await useGetCountryDetails(countryCode);

const lat = computed(() => country.value?.latlng?.lat ?? null);
const lon = computed(() => country.value?.latlng?.lon ?? null);

const {
  data: weather,
  status: weatherStatus,
  error: weatherError,
  refresh: refreshWeather,
} = await useGetWeatherData(lat, lon);

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
    <div class="h-screen flex flex-col">
      <CountryDetailsHeader :country-name="country?.name" class="shrink-0" />
      <div class="flex-1 overflow-y-auto">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
          <CountryDetailsHero :country="country" class="md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-4" />
          <CountryDetailsFacts :country="country" class="md:row-start-1 md:row-end-2 md:col-start-4 md:col-end-7" />
          <WeatherCurrent
            :weather="weather?.current ?? null"
            :capital="country!.capital"
            :status="weatherStatus"
            class="md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-4"
          />
          <WeatherLocalTime
            :weather="weather?.current ?? null"
            :country-timezone="weather?.timezone ?? null"
            :status="weatherStatus"
            class="md:row-start-2 md:row-end-3 md:col-start-4 md:col-end-7"
          />
          <WeatherHourly
            :hourly="weather?.hourly ?? []"
            :status="weatherStatus"
            class="md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-7"
          />
          <WeatherDaily
            :daily="weather?.daily ?? []"
            :status="weatherStatus"
            class="md:row-start-4 md:row-end-5 md:col-start-1 md:col-end-7"
          />
          <CountryDetailsLanguages
            :languages="country?.languages"
            :class="
              cn(
                'md:row-start-5 md:row-end-6',
                country?.borders?.length ? 'md:col-start-1 md:col-end-4' : 'md:col-start-1 md:col-end-7',
              )
            "
          />
          <CountryDetailBorders
            v-if="country?.borders?.length"
            :borders="country!.borders"
            class="md:row-start-5 md:row-end-6 md:col-start-4 md:col-end-7"
          />
        </div>
      </div>
    </div>
  </AppDataState>
</template>
