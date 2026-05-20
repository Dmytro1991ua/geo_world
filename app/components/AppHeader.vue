<script setup lang="ts">
const { isHeaderScrolled } = useScrollPosition();
const { isMenuOpen, onToggleMenu } = useAppHeaderState();
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ease-in-out"
    :class="
      isHeaderScrolled || isMenuOpen
        ? 'border-dark-800 bg-dark-900/95 backdrop-blur-sm shadow-lg'
        : 'border-transparent bg-transparent backdrop-blur-none'
    "
  >
    <div class="mx-auto flex max-w-7xl 2xl:max-w-[100rem] items-center justify-between px-4 py-3">
      <AppHeaderLogo />
      <AppHeaderNavDesktop />
      <AppHeaderMenuButton :is-open="isMenuOpen" @toggle="onToggleMenu" />
    </div>
    <AppHeaderNavMobile :is-open="isMenuOpen" />
  </header>
</template>
