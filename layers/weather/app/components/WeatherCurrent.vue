<script setup lang="ts">
type WeatherCurrentProps = {
  weather: WeatherCurrentUI | null;
  capital: string | null;
};

const props = defineProps<WeatherCurrentProps>();

const weatherStats = computed(() => {
  if (!props.weather) return [];

  return [
    { label: 'Feels like', value: `${props.weather.feelsLike}°C` },
    { label: 'Humidity', value: `${props.weather.humidity}%` },
    { label: 'Wind', value: `${props.weather.windSpeed} km/h` },
    { label: 'UV Index', value: props.weather.uvIndex },
    { label: 'Cloudiness', value: `${props.weather.cloudiness}%` },
    { label: 'Dew point', value: `${props.weather.dewPoint}°C` },
  ];
});
</script>

<template>
  <div class="rounded-2xl border border-dark-800 bg-dark-700 p-6">
    <h2 class="mb-4 pb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-dark-800">
      Current weather · {{ capital ?? 'N/A' }}
    </h2>
    <template v-if="weather">
      <div class="flex items-center justify-center gap-4 pb-4 border-b border-dark-800 bg-dark-800 rounded-xl p-4">
        <img :src="weather.condition.iconUrl" :alt="weather.condition.description" class="h-14 w-14" >
        <div>
          <p class="text-4xl font-bold text-gray-100">{{ weather.temperature }}°C</p>
          <p class="mt-1 text-sm capitalize text-gray-400">
            {{ weather.condition.description }}
          </p>
        </div>
      </div>
      <div class="mt-4 grid grid-cols-2 gap-2">
        <div v-for="stat in weatherStats" :key="stat.label" class="rounded-xl bg-dark-800 p-3">
          <p class="text-xs text-gray-400">{{ stat.label }}</p>
          <p class="mt-1 text-sm font-medium text-gray-200">
            {{ stat.value ?? 'N/A' }}
          </p>
        </div>
      </div>
    </template>
  </div>
</template>
