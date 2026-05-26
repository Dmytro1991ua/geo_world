<script setup lang="ts">
const { data: countries, error, status, refresh } = await useGetCountries();
const { regions, activeRegion, filteredCountries } = useCountriesFilter(countries);
const favoritesStore = useFavoritesStore();

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
    <CountryRegionTabs :regions="regions" :active-region="activeRegion" @change="activeRegion = $event" />
    <div :key="activeRegion" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <CountryCard
        v-for="(country, index) in filteredCountries"
        :key="country.code ?? ''"
        :country="country"
        :index="index"
        :target-url="`/countries/${country.code?.toLowerCase()}`"    :is-favorite="favoritesStore.isFavorite(country.code)"
        @toggle-favorite="favoritesStore.toggleFavorite"
      />
    </div>
  </AppDataState>
</template>
