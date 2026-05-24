<script setup lang="ts">
import { formatListToString } from '#shared/utils/formatters/country';

type CardDetailsFactsProps = {
  country: CountryDetailUI
};

const props = defineProps<CardDetailsFactsProps>();

const countryFacts = computed(() => [
  { label: 'Capital', value: props.country.capital },
  { label: 'Region', value: formatListToString([props.country.region ?? '', props.country.subregion ?? ''])},
  { label: 'Population', value: props.country.populationFormatted },
  { label: 'Area', value: props.country.areaFormatted },
  { label: 'Density', value: props.country.density },
  { label: 'Currency', value: props.country.currencies },
  { label: 'Calling code', value: props.country.callingCode },
  { label: 'TLD', value: props.country.tld },
  { label: 'Gini index', value: props.country.gini },
]);

</script>

<template>
  <div class="rounded-2xl border border-dark-800 bg-dark-700 p-6">
    <h2 class="mb-4 pb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-dark-800">
      Country facts
    </h2>
    <div class="divide-y divide-dark-800">
      <div
        v-for="countryFact in countryFacts"
        :key="countryFact.label"
        class="flex items-center justify-between py-3"
      >
        <span class="text-sm text-gray-400">{{ countryFact.label }}</span>
        <span class="text-right text-sm font-medium text-white">
          {{ countryFact.value ?? 'N/A' }}
        </span>
      </div>
    </div>
  </div>
</template>
