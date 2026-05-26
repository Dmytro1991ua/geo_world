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
            ? 'border-brand-500 bg-brand-500/10 text-brand-400'
            : 'border-dark-800 bg-dark-700 text-gray-400 hover:border-dark-700 hover:text-gray-200',
        )
      "
      @click="$emit('change', region)"
    >
      {{ region }}
    </button>
  </div>
</template>
