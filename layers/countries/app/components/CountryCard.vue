<script setup lang="ts">
type CountryCardProps = {
  country: CountryUI;
};

defineProps<CountryCardProps>();
</script>

<template>
  <div
    class="group relative flex flex-col overflow-hidden rounded-2xl border border-dark-800 bg-dark-900 transition-all duration-300 hover:border-dark-700 hover:shadow-xl hover:shadow-black/20 cursor-pointer"
  >
    <div class="relative w-full overflow-hidden rounded-t-2xl bg-dark-800" style="aspect-ratio: 16/9">
      <img
        :src="country.flag ?? ''"
        :alt="country.altFlagText ?? `Flag of ${country.name}`"
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      >
    </div>
    <div class="flex flex-1 flex-col gap-3 p-4">
      <div class="flex items-start justify-between gap-2">
        <div>
          <h3 class="text-sm font-semibold text-gray-100 leading-tight">
            {{ country.name }}
          </h3>
          <p class="mt-0.5 text-xs text-gray-500">{{ country.region }}</p>
        </div>
        <button
          class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-dark-700 bg-dark-800 text-gray-500 transition hover:border-brand-500/50 hover:text-brand-500"
          aria-label="Add to favourites"
        >
          <Icon name="lucide:heart" class="h-4 w-4" />
        </button>
      </div>
      <div class="flex items-center justify-between border-t border-dark-800 pt-3">
        <div class="flex flex-col gap-0.5">
          <span class="text-xs text-gray-500">Population</span>
          <span class="text-xs font-medium text-gray-300">
            {{ country.populationFormatted }}
          </span>
        </div>
        <div class="flex flex-col gap-0.5 text-right">
          <span class="text-xs text-gray-500">Area</span>
          <span class="text-xs font-medium text-gray-300">
            {{ country.areaFormatted }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
