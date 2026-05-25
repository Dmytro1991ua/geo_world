<script setup lang="ts">
type CountryDetailsLanguagesProps = {
  languages: string | null;
};

defineProps<CountryDetailsLanguagesProps>();
</script>

<template>
  <div v-if="languages" class="rounded-2xl border border-dark-800 bg-dark-700 p-6">
    <h2 class="mb-4 pb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-dark-800">
      Languages
    </h2>
    <p class="text-sm text-white bg-dark-800 px-6 py-2 rounded-xl">
      {{ languages }}
    </p>
  </div>
</template>
