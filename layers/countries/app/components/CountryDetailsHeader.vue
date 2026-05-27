<script setup lang="ts">
type CountryDetailsHeaderProps = {
  countryName: string | null;
};

defineProps<CountryDetailsHeaderProps>();

const router = useRouter();
</script>

<template>
  <header
    class="bg-white dark:bg-dark-700 mb-8 p-2 flex items-center gap-4 border border-gray-400 dark:border-dark-700 rounded-xl"
  >
    <button
      class="flex items-start gap-2 rounded-xl border border-gray-400 dark:border-dark-700 bg-white dark:bg-dark-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 transition hover:bg-gray-100 dark:hover:bg-dark-900"
      @click="router.back()"
    >
      <span class="text-lg leading-none">&lsaquo;</span>
      Back
    </button>
    <div class="w-px h-4 bg-gray-300 dark:bg-dark-600" />
    <h1 class="text-lg font-medium text-gray-900 dark:text-gray-100">{{ countryName }}</h1>
  </header>
</template>
