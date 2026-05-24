<script setup lang="ts">
type CountryDetailsBorders = {
  borders: CountryBorderUI[];
};

defineProps<CountryDetailsBorders>();
</script>

<template>
  <div class="rounded-2xl border border-dark-800 bg-dark-700 p-6">
    <h2 class="mb-4 pb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-dark-800">Bordering countries</h2>
    <div class="flex flex-wrap gap-2">
      <NuxtLink
        v-for="border in borders"
        :key="border.code"
        :to="`/countries/${border.code.toLowerCase()}`"
        class="flex items-center gap-2 rounded-xl border border-dark-700 bg-dark-800 px-3 py-2 text-xs text-gray-300 transition hover:border-brand-500/50 hover:text-white"
      >
        <img v-if="border.flag" :src="border.flag" :alt="border.name" class="h-4 w-6 rounded-sm object-cover" >
        <span>{{ border.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
