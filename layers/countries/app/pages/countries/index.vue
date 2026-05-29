<script setup lang="ts">
import { motionPresets } from '#shared/ui/index';

const { data: countries, error, status, refresh } = await useGetCountries();
const { regions, searchQuery, activeRegion, filteredCountries } = useCountriesFilter(countries);
const favoritesStore = useFavoritesStore();

const {
  visibleItems: visibleCountries,
  hasMoreItems: hasMoreCountries,
  loadMore,
} = useClientSidePagination(filteredCountries, {
  resetSources: [searchQuery, activeRegion],
});
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
    <div class="mb-4 flex flex-col gap-3">
      <CountrySearch v-model="searchQuery" v-motion="motionPresets.staggerItem" />
      <CountryRegionTabs
        v-motion="motionPresets.staggerItem"
        :regions="regions"
        :active-region="activeRegion"
        @change="activeRegion = $event"
      />
    </div>
    <p v-motion="motionPresets.staggerItem" class="mb-4 text-xs text-gray-500">
      Showing {{ filteredCountries.length }}
      {{ searchQuery || activeRegion !== 'All' ? 'results' : 'countries' }}
    </p>
    <div
      :key="activeRegion"
      v-motion="motionPresets.staggerContainer"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <CountryCard
        v-for="(country, index) in visibleCountries"
        :key="country.code ?? ''"
        v-motion="motionPresets.staggerItem"
        :country="country"
        :index="index"
        :target-url="`/countries/${country.code?.toLowerCase()}`"
        :is-favorite="favoritesStore.isFavorite(country.code)"
        @toggle-favorite="favoritesStore.toggleFavorite"
      />
    </div>
    <div v-if="hasMoreCountries" class="mt-4 flex justify-center">
      <button
        type="button"
        class='btn-style'
        @click="loadMore"
      >
        Load more
      </button>
    </div>
  </AppDataState>
</template>
