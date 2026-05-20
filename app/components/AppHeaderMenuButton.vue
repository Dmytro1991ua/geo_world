<script setup lang="ts">
type AppHeaderMenuButtonProps = {
  isOpen: boolean;
  wrapperClassName?: string;
};
type AppHeaderMenuButtonEmits = {
  (e: 'toggle'): void;
};

defineProps<AppHeaderMenuButtonProps>();

const emit = defineEmits<AppHeaderMenuButtonEmits>();
</script>

<template>
  <button
    :class="
      cn(
        'flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-dark-700 bg-dark-800 md:hidden',
        wrapperClassName,
      )
    "
    aria-label="Toggle menu"
    @click="emit('toggle')"
  >
    <span
      class="block h-0.5 w-5 rounded bg-gray-300 transition-all duration-300"
      :class="isOpen ? 'translate-y-2 rotate-45' : ''"
    />
    <span class="block h-0.5 w-5 rounded bg-gray-300 transition-all duration-300" :class="isOpen ? 'opacity-0' : ''" />
    <span
      class="block h-0.5 w-5 rounded bg-gray-300 transition-all duration-300"
      :class="isOpen ? '-translate-y-2 -rotate-45' : ''"
    />
  </button>
</template>
