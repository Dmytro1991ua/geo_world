<script setup lang="ts">
import type { AppNavigationItem } from './types';

type AppNavigationVariant = 'desktop' | 'mobile';
type AppHeaverNavLinkProps = {
  item: AppNavigationItem;
  variant: AppNavigationVariant;
};

const props = defineProps<AppHeaverNavLinkProps>();

const baseStyles =
  'flex items-center text-sm text-gray-600 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-dark-800 hover:text-gray-900 dark:hover:text-white rounded-lg px-4';

const linkClass = computed(() => [
  baseStyles,
  props.variant === 'desktop' ? 'gap-2 py-2' : 'gap-3 py-2.5 block w-full',
]);
</script>

<template>
  <NuxtLink :to="item.to" :class="linkClass" active-class="bg-gray-200 dark:bg-dark-800 text-gray-900 dark:text-white">
    <Icon :name="item.icon" class="h-4 w-4 shrink-0" />
    <span class="font-header text-xs tracking-wider uppercase">{{ item.label }}</span>
  </NuxtLink>
</template>
