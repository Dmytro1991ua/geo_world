<script setup lang="ts">
type CountryRegionTabsProps = {
  regions: string[];
  activeRegion: string;
};

type CountryRegionTabsEmit = {
  change: [region: string];
};

defineProps<CountryRegionTabsProps>();
defineEmits<CountryRegionTabsEmit>();
</script>

<template>
  <div class="mb-6 flex gap-2 overflow-x-auto pb-3 scrollbar-thin-x">
    <button
      v-for="region in regions"
      :key="region"
      :class="
        cn(
          'whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200',
          activeRegion === region
            ? 'border-brand-500 bg-brand-500/10 text-brand-500 dark:text-brand-400'
            : 'border-gray-200 dark:border-dark-700 bg-gray-200 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:border-brand-500/50 hover:text-gray-900 dark:hover:text-white',
        )
      "
      @click="$emit('change', region)"
    >
      {{ region }}
    </button>
  </div>
</template>
