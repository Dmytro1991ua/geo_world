<script setup lang="ts">
const { data: countries } = await useGetCountries();

const favoritesStore = useFavoritesStore();

const favoriteCountries = computed(() => {
  if (!countries.value) return [];

  return countries.value.filter((country) => favoritesStore.isFavorite(country.code));
});

const FAVORITES_EMPTY_STATE = {
  icon: 'lucide:heart',
  title: 'No favorites yet!',
  description: 'Save countries while exploring and they\'ll appear here.',
  actionText: 'Start exploring',
  actionTo: '/countries',
};
</script>

<template>
  <section v-if="favoriteCountries.length" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <CountryCard
      v-for="(country, index) in favoriteCountries"
      :key="country.code ?? ''"
      :country="country"
      :index="index"
      :target-url="`/countries/${country.code?.toLowerCase()}`"
      :is-favorite="favoritesStore.isFavorite(country.code)"
      @toggle-favorite="favoritesStore.toggleFavorite"
    />
  </section>
  <section v-else class="flex h-full flex-1 items-center justify-center">
    <AppEmptyState v-bind="FAVORITES_EMPTY_STATE" />
  </section>
</template>
