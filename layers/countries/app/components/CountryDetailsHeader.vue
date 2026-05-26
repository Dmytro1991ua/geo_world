<script setup lang="ts">
type CountryDetailsHeaderProps = {
  countryName: string | null;
};

defineProps<CountryDetailsHeaderProps>();

const router = useRouter();
</script>

<template>
  <header class="bg-dark-700 mb-8 p-2 flex items-center gap-4">
    <button
      class="flex items-start gap-2 rounded-xl border border-white bg-dark-800 px-4 py-2 text-sm font-medium transition hover:bg-dark-900"
      @click="router.back()"
    >
      <span class="text-lg leading-none">&lsaquo;</span>
      Back
    </button>
    <div class="w-px h-4 bg-white" />
    <h1 class="text-lg font-medium text-white">{{ countryName }}</h1>
  </header>
</template>
