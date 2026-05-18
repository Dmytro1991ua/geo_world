<script setup>
const { data: countries, status } = useGetCountries();

watch(countries, (val) => {
  console.log('[countries]', val);
}, { immediate: true });
</script>

<template>
  <div>
    <p v-if="status === 'pending'">Loading...</p>
    <pre v-else>{{ countries }}</pre>
  </div>
</template>
