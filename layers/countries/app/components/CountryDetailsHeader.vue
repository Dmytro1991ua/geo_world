<script setup lang="ts">
type CountryDetailsHeaderProps = {
  countryName: string | null;
};

defineProps<CountryDetailsHeaderProps>();
</script>

<template>
  <header class="bg-dark-700 mb-8 p-2 flex items-center gap-4">
    <NuxtLink
      to="/countries"
      class="flex items-start gap-2 px-4 py-2 bg-dark-800 border rounded-xl hover:bg-dark-900 transition text-sm font-medium border-x-1 border-white"
    >
      <span class="text-lg leading-none">&lsaquo;</span>Back
    </NuxtLink>
    <div class="w-px h-4 bg-white" />
    <h1 class="text-lg font-medium text-white">{{ countryName }}</h1>
  </header>
</template>
