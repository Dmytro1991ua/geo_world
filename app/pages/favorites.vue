<script setup lang="ts">
const FAVORITES_EMPTY_STATE = {
  icon: 'lucide:heart',
  title: 'No favorites yet!',
  description: 'Save countries while exploring and they\'ll appear here.',
  actionText: 'Start exploring',
};
</script>

<template>
  <AppEmptyState
    :icon="FAVORITES_EMPTY_STATE.icon"
    :title="FAVORITES_EMPTY_STATE.title"
    :description="FAVORITES_EMPTY_STATE.description"
    :action-text="FAVORITES_EMPTY_STATE.actionText"
    :wrapper-class-name="'min-h-[calc(100vh-64px)]'"
    action-to="/countries"

  />
</template>
