<script setup lang="ts">
const { isDarkTheme, toggleTheme } = useThemeToggle();
</script>

<template>
  <ColorScheme>
    <button
      :class="
        cn(
          'flex h-9 w-9 items-center justify-center rounded-lg border transition',
          isDarkTheme
            ? 'border-dark-700 bg-dark-800 text-gray-400 hover:text-white'
            : 'border-light-300 bg-light-100 text-gray-600 hover:text-gray-900',
        )
      "
      :aria-label="isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggleTheme"
    >
      <Icon :name="isDarkTheme ? 'lucide:sun' : 'lucide:moon'" class="h-4 w-4" />
    </button>
  </ColorScheme>
</template>
