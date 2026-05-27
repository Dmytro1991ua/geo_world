<script setup lang="ts">
import { APP_NAVIGATION_ITEMS_CONFIG } from './config';

type AppHeaderNavMobileProps = {
  isOpen: boolean;
};

defineProps<AppHeaderNavMobileProps>();
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="-translate-y-2 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="-translate-y-2 opacity-0"
  >
    <nav
      v-if="isOpen"
      class="flex flex-col gap-1 border-t border-gray-200 dark:border-dark-800 bg-white dark:bg-dark-900 px-4 py-3 md:hidden"
    >
      <AppHeaderNavLink v-for="item in APP_NAVIGATION_ITEMS_CONFIG" :key="item.id" :item="item" variant="mobile" />
    </nav>
  </Transition>
</template>
