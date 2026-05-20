<script setup lang="ts">
import { APP_NAVIGATION_ITEMS_CONFIG } from './config';

</script>

<template>
  <nav class="hidden items-center md:flex md:gap-1">
    <AppHeaderNavLink
      v-for="item in APP_NAVIGATION_ITEMS_CONFIG"
      :key="item.id"
      :item="item"
      variant="desktop"
    />
  </nav>
</template>
