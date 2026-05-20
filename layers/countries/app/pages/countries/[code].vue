<script setup lang="ts">
const route = useRoute();

const countryCode = computed(() => String(route.params.code));

const {
  data: country,
  status: countryStatus,
  error: countryError,
} = useGetCountryDetails(countryCode);

const lat = computed(() => country.value?.latlng?.lat ?? null);
const lon = computed(() => country.value?.latlng?.lon ?? null);

const {
  data: weather,
  status: weatherStatus,
  error: weatherError,
} = useGetWeatherData(lat, lon);

</script>

<template>
  <div>
    <p v-if="countryStatus === 'pending'">Loading country...</p>
    <p v-else-if="countryError">Could not load country.</p>

    <template v-else-if="country">
      <pre>{{ country }}</pre>

      <p v-if="weatherStatus === 'pending'">Loading weather...</p>
      <p v-else-if="weatherError">Could not load weather.</p>
      <pre v-else>{{ weather }}</pre>
    </template>
  </div>
</template>
