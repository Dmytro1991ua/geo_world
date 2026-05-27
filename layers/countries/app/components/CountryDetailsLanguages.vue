<script setup lang="ts">
type CountryDetailsLanguagesProps = {
  languages: string | null;
};

defineProps<CountryDetailsLanguagesProps>();
</script>

<template>
  <div v-if="languages" class="rounded-2xl border border-gray-400 dark:border-dark-700 bg-white dark:bg-dark-700 p-6">
    <h2
      class="mb-4 pb-4 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 border-b border-gray-300 dark:border-dark-800"
    >
      Languages
    </h2>
    <p class="text-sm text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-dark-800 px-6 py-2 rounded-xl">
      {{ languages }}
    </p>
  </div>
</template>
