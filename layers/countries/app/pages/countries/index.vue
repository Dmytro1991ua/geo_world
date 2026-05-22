<script setup lang="ts">
const { data: countries, error, status, refresh } = await useGetCountries();

const isEmpty = computed(() => !countries.value?.length);
</script>

<template>
  <AppDataState
    :status="status"
    :error="error"
    :is-empty="isEmpty"
    error-title="Failed to load countries"
    @retry="refresh"
  >
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <CountryCard
        v-for="country in countries"
        :key="country.code ?? ''"
        :country="country"
      />
    </div>  </AppDataState>
</template>
