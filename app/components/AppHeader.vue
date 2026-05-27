<script setup lang="ts">
import { motionPresets } from '#shared/ui/index';

const { isHeaderScrolled } = useScrollPosition();
const { isMenuOpen, onToggleMenu } = useAppHeaderState();
</script>

<template>
  <header
    v-motion="motionPresets.staggerItem"
    class="fixed top-0 left-0 z-50 w-full border-b transition-all duration-500 ease-in-out"
    :class="
      isHeaderScrolled || isMenuOpen
        ? 'border-light-200 bg-white/95 shadow-lg backdrop-blur-sm dark:border-dark-800 dark:bg-dark-900/95'
        : 'border-transparent bg-transparent backdrop-blur-none'
    "
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 2xl:max-w-[100rem]">
      <AppHeaderLogo />
      <div class="flex items-center gap-4">
        <AppHeaderNavDesktop />
        <div class="flex items-center gap-2">
          <AppHeaderThemeModeToggle />
          <AppHeaderMenuButton :is-open="isMenuOpen" @toggle="onToggleMenu" />
        </div>
      </div>
    </div>
    <AppHeaderNavMobile :is-open="isMenuOpen" />
  </header>
</template>
