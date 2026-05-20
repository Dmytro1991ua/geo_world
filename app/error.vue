<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error?: NuxtError
}>();

const statusCode = computed(() => props.error?.status ?? 404);

const errorUrl = computed(() => {
  const errorData = props.error?.data;
  if (errorData && typeof errorData === 'object' && 'url' in errorData) {
    return String((errorData as Record<string, unknown>).url);
  }
  return 'unknown route';
});

const handleClearError = () => clearError({ redirect: '/countries' });
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-dark-950 px-4 text-center">
    <div class="w-full max-w-md rounded-2xl border border-dark-800 bg-dark-900 p-8 shadow-xl">
      <p class="text-7xl font-black text-brand-500">
        {{ statusCode }}
      </p>
      <h1 class="mt-4 text-xl font-semibold text-gray-100">
        {{ statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
      </h1>
      <p class="mt-3 text-sm text-gray-400">
        The path
        <code class="mx-1 rounded bg-dark-800 px-1.5 py-0.5 font-mono text-xs text-brand-400">
          {{ errorUrl }}
        </code>
        does not exist.
      </p>
      <button
        class="mt-8 w-full rounded-xl bg-brand-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-600 active:scale-95"
        @click="handleClearError"
      >
        Back to Explore
      </button>
    </div>
  </div>
</template>
