<script setup lang="ts">
type CountryCardProps = {
  country: CountryUI;
  targetUrl: string;
  index: number;
  isFavorite: boolean;
};
type CountryCardEmits = {
  toggleFavorite: [code: string | null];
};

const props = defineProps<CountryCardProps>();
const emit = defineEmits<CountryCardEmits>();

const stats = computed(() => [
  {
    label: 'Population',
    value: props.country.populationFormatted,
    align: 'left',
  },
  {
    label: 'Area',
    value: props.country.areaFormatted,
    align: 'right',
  },
]);
</script>

<template>
  <NuxtLink
    :to="targetUrl"
    :prefetch="false"
    class="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-700 transition-all duration-300 hover:border-gray-300 dark:hover:border-dark-800 hover:shadow-xl hover:shadow-black/20 cursor-pointer"
  >
    <div class="relative w-full overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-dark-700" style="aspect-ratio: 16/9">
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
          <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">
            {{ country.name }}
          </h3>
          <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{{ country.region }}</p>
        </div>
        <button
          class="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-400 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-500 transition hover:text-brand-500"
          @click.prevent="emit('toggleFavorite', country.code)"
        >
          <Icon
            name="lucide:heart"
            class="h-4 w-4 transition"
            :class="isFavorite ? 'text-brand-500 [&_path]:fill-current' : 'text-gray-500 [&_path]:fill-none'"
          />
        </button>
      </div>
      <div class="flex items-center justify-between border-t border-gray-300 dark:border-dark-800 pt-3">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col gap-0.5"
          :class="stat.align === 'right' ? 'text-right' : ''"
        >
          <span class="text-xs text-gray-500 dark:text-gray-400">
            {{ stat.label }}
          </span>
          <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
            {{ stat.value }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
