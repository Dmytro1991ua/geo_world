<script setup lang="ts">
import { motionPresets, motionTokens, staggerDelay } from '#shared/ui/index';

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
        :initial="motionPresets.fadeUp.initial"
        :enter="{
          ...motionPresets.fadeUp.enter,
          transition: {
            ...motionPresets.fadeUp.enter.transition,
            delay: motionTokens.delay.page,
          },
        }"
        :country-name="country?.name"
        class="shrink-0"
      />
      <div class="flex-1 overflow-y-auto">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
          <CountryDetailsHero
            v-motion
            :initial="motionPresets.fadeUp.initial"
            :enter="{
              ...motionPresets.fadeUp.enter,
              transition: {
                ...motionPresets.fadeUp.enter.transition,
                delay: motionTokens.delay.page + staggerDelay(0, 0, motionTokens.stagger.lg),
              },
            }"
            :country="country"
            class="md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-4"
          />
          <CountryDetailsFacts
            v-motion
            :initial="motionPresets.fadeUp.initial"
            :enter="{
              ...motionPresets.fadeUp.enter,
              transition: {
                ...motionPresets.fadeUp.enter.transition,
                delay: motionTokens.delay.page + staggerDelay(1, 0, motionTokens.stagger.lg),
              },
            }"
            :country="country"
            class="md:row-start-1 md:row-end-2 md:col-start-4 md:col-end-7"
          />
          <WeatherCurrent
            v-motion
            :initial="motionPresets.fadeUp.initial"
            :enter="{
              ...motionPresets.fadeUp.enter,
              transition: {
                ...motionPresets.fadeUp.enter.transition,
                delay: motionTokens.delay.page + staggerDelay(2, 0, motionTokens.stagger.lg),
              },
            }"
            :weather="weather?.current ?? null"
            :capital="country!.capital"
            :status="weatherStatus"
            class="md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-4"
          />
          <WeatherLocalTime
            v-motion
            :initial="motionPresets.fadeUp.initial"
            :enter="{
              ...motionPresets.fadeUp.enter,
              transition: {
                ...motionPresets.fadeUp.enter.transition,
                delay: motionTokens.delay.page + staggerDelay(3, 0, motionTokens.stagger.lg),
              },
            }"
            :weather="weather?.current ?? null"
            :country-timezone="weather?.timezone ?? null"
            :status="weatherStatus"
            class="md:row-start-2 md:row-end-3 md:col-start-4 md:col-end-7"
          />
          <WeatherHourly
            v-motion
            :initial="motionPresets.fadeUp.initial"
            :enter="{
              ...motionPresets.fadeUp.enter,
              transition: {
                ...motionPresets.fadeUp.enter.transition,
                delay: motionTokens.delay.page + staggerDelay(4, 0, motionTokens.stagger.lg),
              },
            }"
            :hourly="weather?.hourly ?? []"
            :status="weatherStatus"
            class="md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-7"
          />
          <WeatherDaily
            v-motion
            :initial="motionPresets.fadeUp.initial"
            :enter="{
              ...motionPresets.fadeUp.enter,
              transition: {
                ...motionPresets.fadeUp.enter.transition,
                delay: motionTokens.delay.page + staggerDelay(5, 0, motionTokens.stagger.lg),
              },
            }"
            :daily="weather?.daily ?? []"
            :status="weatherStatus"
            class="md:row-start-4 md:row-end-5 md:col-start-1 md:col-end-7"
          />
          <CountryDetailsLanguages
            v-motion
            :initial="motionPresets.fadeUp.initial"
            :enter="{
              ...motionPresets.fadeUp.enter,
              transition: {
                ...motionPresets.fadeUp.enter.transition,
                delay: motionTokens.delay.page + staggerDelay(6, 0, motionTokens.stagger.lg),
              },
            }"
            :languages="country?.languages"
            :class="
              cn(
                'md:row-start-5 md:row-end-6',
                hasBorders ? 'md:col-start-1 md:col-end-4' : 'md:col-start-1 md:col-end-7',
              )
            "
          />
          <CountryDetailBorders
            v-if="hasBorders"
            v-motion
            :initial="motionPresets.fadeUp.initial"
            :enter="{
              ...motionPresets.fadeUp.enter,
              transition: {
                ...motionPresets.fadeUp.enter.transition,
                delay: motionTokens.delay.page + staggerDelay(7, 0, motionTokens.stagger.lg),
              },
            }"
            :borders="country!.borders ?? []"
            class="md:row-start-5 md:col-start-4 md:col-end-7"
          />
        </div>
      </div>
    </div>
  </AppDataState>
</template>
