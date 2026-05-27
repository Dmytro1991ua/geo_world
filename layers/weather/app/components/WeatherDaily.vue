<script setup lang="ts">
type WeatherDailyProps = {
  daily: WeatherDailyUI[];
};

const props = defineProps<WeatherDailyProps>();

const title = computed(() => `${props.daily.length}-day forecast`);
</script>

<template>
  <div class="rounded-2xl border border-gray-400 dark:border-dark-700 bg-white dark:bg-dark-700 p-6">
    <h2
      class="mb-4 pb-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-dark-800"
    >
      {{ title }}
    </h2>
    <div
      class="mb-1 pb-4 flex items-center justify-between py-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-dark-800"
    >
      <span class="w-28">Date</span>
      <span class="w-7 text-center">Condition</span>
      <span>Humidity</span>
      <span>Min / Max</span>
    </div>
    <div class="divide-y divide-gray-300 dark:divide-dark-800">
      <div v-for="day in daily" :key="day.date" class="flex items-center justify-between py-3">
        <span class="w-28 text-sm text-gray-500 dark:text-gray-400">
          {{ day.date }}
        </span>
        <img
          :src="day.condition.iconUrl"
          :alt="day.condition.description"
          class="h-10 w-10 rounded-full bg-gray-200 p-1 dark:bg-transparent"
        >
        <span class="text-xs text-gray-500 dark:text-gray-400"> {{ day.humidity }}% </span>
        <div class="flex items-center gap-2 text-sm">
          <span class="text-gray-500 dark:text-gray-400"> {{ day.tempMin }}° </span>
          <span class="font-medium text-gray-900 dark:text-gray-100"> {{ day.tempMax }}° </span>
        </div>
      </div>
    </div>
  </div>
</template>
