<script setup lang="ts">
import { useEarthRotation } from '~/composables/useEarthRotation';

type AppHeaderLogoProps = {
  wrapperClassName?: string;
  textClassName?: string;
};

const earthRef = ref<HTMLDivElement | null>(null);

useEarthRotation(earthRef);

defineProps<AppHeaderLogoProps>();
</script>

<template>
  <NuxtLink to="/countries" class="group flex items-center gap-3 text-light-50">
    <div
      ref="earthRef"
      :class="cn('h-14 w-14 rounded-full overflow-hidden shadow-lg ring-2 ring-brand-500/30', wrapperClassName)"
      style="
        background-image: url('/images/logo.jpeg');
        background-size: 200px 56px;
        background-repeat: repeat-x;
        background-position-y: center;
      "
    />
    <span :class="cn('font-header text-l font-semibold tracking-tight', textClassName)"> GeoWorld </span>
  </NuxtLink>
</template>
