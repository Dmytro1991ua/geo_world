<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>();
</script>

<template>
  <div class="flex items-center justify-center py-10">
    <div
      class="animate-spin rounded-full border-2 border-gray-300 dark:border-gray-600 border-t-gray-900 dark:border-t-gray-100"
      :class="{
        'h-4 w-4': size === 'sm',
        'h-6 w-6': !size || size === 'md',
        'h-10 w-10': size === 'lg',
      }"
    />
  </div>
</template>
