<script setup lang="ts">
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

type WeatherLocalTimeProps = {
  weather: WeatherCurrentUI | null;
  countryTimezone: string | null;
};

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

const props = defineProps<WeatherLocalTimeProps>();

const { currentTime } = useCurrentTime();

const localTime = computed(() => {
  if (!props.countryTimezone) return null;
  return dayjs(currentTime.value).tz(props.countryTimezone);
});

const timeDisplay = computed(() => formatTimeDisplay(localTime.value));

const daylightConfig = computed(() => [
  {
    label: 'Sunrise',
    value: props.weather?.sunrise,
    icon: 'lucide:sunrise',
    iconClass: 'text-amber-400',
    isReversed: false,
  },
  {
    label: 'Sunset',
    value: props.weather?.sunset,
    icon: 'lucide:sunset',
    iconClass: 'text-orange-400',
    isReversed: true,
  },
]);
</script>

<template>
  <div
    class="rounded-2xl border border-gray-400 dark:border-dark-700 bg-white dark:bg-dark-700 p-6 flex flex-col gap-6"
  >
    <h2
      class="pb-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-dark-800"
    >
      Local time
    </h2>
    <div class="rounded-xl bg-gray-200 dark:bg-dark-800 p-4 text-center md:text-left">
      <p class="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {{ timeDisplay.timeString }}
      </p>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {{ timeDisplay.dateString }}
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ timeDisplay.tzString }}
      </p>
    </div>
    <div v-if="weather" class="rounded-xl bg-gray-200 dark:bg-dark-800 p-4">
      <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Daylight</p>
      <div class="flex items-center justify-between">
        <template v-for="(item, index) in daylightConfig" :key="item.label">
          <div :class="cn('flex items-center gap-2', item.isReversed && 'flex-row-reverse')">
            <Icon :name="item.icon" :class="cn('h-4 w-4', item.iconClass)" />
            <div :class="cn(item.isReversed && 'text-right')">
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ item.label }}
              </p>
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
                {{ item.value }}
              </p>
            </div>
          </div>
          <div v-if="index < daylightConfig.length - 1" class="mx-4 h-px flex-1 bg-gray-300 dark:bg-dark-700" />
        </template>
      </div>
    </div>
  </div>
</template>
