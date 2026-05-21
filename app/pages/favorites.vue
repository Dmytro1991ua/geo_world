<script setup lang="ts">
const FAVORITES_EMPTY_STATE = {
  icon: 'lucide:heart',
  title: 'No favorites yet!',
  description: 'Save countries while exploring and they\'ll appear here.',
  actionText: 'Start exploring',
  actionTo: '/countries',
};
</script>

<template>
  <section class="flex h-full flex-1 items-center justify-center">    <AppEmptyState v-bind="FAVORITES_EMPTY_STATE" />
  </section>
</template>
