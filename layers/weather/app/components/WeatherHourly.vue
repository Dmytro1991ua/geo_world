<script setup lang="ts">
type WeatherHourlyProps = { hourly: WeatherHourlyUI[] };

const props = defineProps<WeatherHourlyProps>();

const title = computed(() => `${props.hourly.length}-hour forecast`);
</script>

<template>
  <div class="rounded-2xl border border-gray-400 dark:border-dark-700 bg-white dark:bg-dark-700 p-6">
    <h2
      class="mb-4 pb-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-dark-800"
    >
      {{ title }}
    </h2>

    <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-thin-x">
      <div
        v-for="hour in hourly"
        :key="hour.time"
        class="flex flex-shrink-0 flex-col items-center gap-2 rounded-xl bg-gray-200 dark:bg-dark-800 px-6 py-3 text-center"
      >
        <span class="text-xs text-gray-500 dark:text-gray-400">
          {{ hour.time }}
        </span>
        <img :src="hour.condition.iconUrl" :alt="hour.condition.description" class="h-8 w-8" >
        <span class="text-sm font-medium text-gray-900 dark:text-gray-100"> {{ hour.temperature }}° </span>
        <span class="text-xs text-gray-500 dark:text-gray-400"> {{ hour.precipitationChance }}% </span>
      </div>
    </div>
  </div>
</template>
