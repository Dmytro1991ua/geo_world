<script setup lang="ts">
import { enterWithDelay, fadeUp, getStaggerDelay } from '#shared/ui/index';

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
const hasBorders = computed(() => !!country.value?.borders?.length);
const hasAlerts = computed(() => !!weather.value?.alerts.length);

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
      <CountryDetailsHeader
        v-motion
        :initial="fadeUp.initial"
        :enter="enterWithDelay(getStaggerDelay(0))"
        :country-name="country?.name"
        class="shrink-0"
      />
      <div class="flex-1 overflow-y-auto">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-2">
          <CountryDetailsHero
            v-motion
            :initial="fadeUp.initial"
            :enter="enterWithDelay(getStaggerDelay(1))"
            :country="country"
            class="md:col-span-3"
          />
          <CountryDetailsFacts
            v-motion
            :initial="fadeUp.initial"
            :enter="enterWithDelay(getStaggerDelay(2))"
            :country="country"
            class="md:col-span-3"
          />
          <WeatherCurrent
            v-motion
            :initial="fadeUp.initial"
            :enter="enterWithDelay(getStaggerDelay(3))"
            :weather="weather?.current ?? null"
            :capital="country!.capital"
            :status="weatherStatus"
            class="md:col-span-3"
          />
          <WeatherLocalTime
            v-motion
            :initial="fadeUp.initial"
            :enter="enterWithDelay(getStaggerDelay(4))"
            :weather="weather?.current ?? null"
            :country-timezone="weather?.timezone ?? null"
            :status="weatherStatus"
            class="md:col-span-3"
          />
          <WeatherHourly
            v-motion
            :initial="fadeUp.initial"
            :enter="enterWithDelay(getStaggerDelay(5))"
            :hourly="weather?.hourly ?? []"
            :status="weatherStatus"
            class="md:col-span-6"
          />
          <WeatherDaily
            v-motion
            :initial="fadeUp.initial"
            :enter="enterWithDelay(getStaggerDelay(6))"
            :daily="weather?.daily ?? []"
            :status="weatherStatus"
            class="md:col-span-6"
          />
          <WeatherAlerts
            v-if="hasAlerts"
            v-motion
            :initial="fadeUp.initial"
            :enter="enterWithDelay(getStaggerDelay(6))"
            :alerts="weather?.alerts ?? []"
            class="md:col-span-6"
          />
          <CountryDetailsLanguages
            v-motion
            :initial="fadeUp.initial"
            :enter="enterWithDelay(getStaggerDelay(7))"
            :languages="country?.languages"
            :class="hasBorders ? 'md:col-span-3' : 'md:col-span-6'"
          />
          <CountryDetailBorders
            v-if="hasBorders"
            v-motion
            :initial="fadeUp.initial"
            :enter="enterWithDelay(getStaggerDelay(8))"
            :borders="country?.borders ?? []"
            class="md:col-span-3"
          />
        </div>
      </div>
    </div>
  </AppDataState>
</template>
