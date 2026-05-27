<script setup lang="ts">
type WeatherAlertsProps = {
  alerts: WeatherAlertUI[];
};

defineProps<WeatherAlertsProps>();
</script>

<template>
  <section class="rounded-2xl border border-gray-400 dark:border-dark-700 bg-white dark:bg-dark-700 p-6">
    <div class="mb-4 pb-4 border-b border-gray-300 dark:border-dark-800">
      <h2 class="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Weather alerts</h2>
    </div>

    <div class="space-y-3">
      <div
        v-for="alert in alerts"
        :key="alert.event + alert.from"
        class="rounded-2xl bg-gray-200 dark:bg-dark-800 p-4 border border-amber-900/30"
      >
        <div class="flex items-start justify-between gap-3 pb-2 border-b border-gray-200 dark:border-dark-700">
          <div>
            <p class="text-sm font-semibold text-amber-600 dark:text-amber-300">
              {{ alert.event }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ alert.from }} → {{ alert.to }}</p>
          </div>

          <span class="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {{ alert.source }}
          </span>
        </div>

        <p v-if="alert.description" class="text-xs text-gray-600 dark:text-gray-300 mt-3 leading-relaxed line-clamp-3">
          {{ alert.description }}
        </p>
      </div>
    </div>
  </section>
</template>
