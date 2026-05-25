<script setup lang="ts">
type WeatherHourlyProps = { hourly: WeatherHourlyUI[] };

const props = defineProps<WeatherHourlyProps>();

const title = computed(() => `${props.hourly.length}-hour forecast`);
</script>

<template>
  <div class="rounded-2xl border border-dark-800 bg-dark-700 p-6">
    <h2 class="mb-4 pb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-dark-800">
      {{ title }}
    </h2>
    <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-thin-x">
      <div
        v-for="hour in hourly"
        :key="hour.time"
        class="flex flex-shrink-0 flex-col items-center gap-2 rounded-xl bg-dark-800 px-6 py-3 text-center"
      >
        <span class="text-xs text-gray-500">{{ hour.time }}</span>
        <img :src="hour.condition.iconUrl" :alt="hour.condition.description" class="h-8 w-8" >
        <span class="text-sm font-medium text-gray-200">{{ hour.temperature }}°</span>
        <span class="text-xs text-gray-500">{{ hour.precipitationChance }}%</span>
      </div>
    </div>
  </div>
</template>
