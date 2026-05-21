<script setup lang="ts">
import type { FetchError } from 'ofetch';

import type { AsyncDataRequestStatus } from '#app';

type StateVariant = 'loading' | 'error' | 'empty' | 'success';
type AppDataStateProps = {
  status: AsyncDataRequestStatus;
  error?: FetchError | null | undefined;
  isEmpty?: boolean;
  errorTitle?: string;
  errorDescription?: string;
  emptyTitle?: string;
  emptyDescription?: string;
};
type AppDataStateEmits = {
  (e: 'retry'): void;
};

const props = defineProps<AppDataStateProps>();
const emit = defineEmits<AppDataStateEmits>();

const variant = computed<StateVariant>(() => {
  if (props.status === 'pending') return 'loading';
  if (props.status === 'error') return 'error';
  if (props.isEmpty) return 'empty';

  return 'success';
});
</script>

<template>
  <section class="flex flex-1 flex-col w-full">
    <div
      v-if="variant !== 'success'"
      class="flex flex-1 items-center justify-center"
    >
      <AppLoader v-if="variant === 'loading'" />

      <AppEmptyState
        v-else-if="variant === 'error'"
        icon="lucide:circle-alert"
        :title="errorTitle ?? 'Something went wrong'"
        :description="errorDescription ?? error?.message ?? 'An unexpected error occurred'"
        action-text="Try again"
        @action="emit('retry')"
      />

      <AppEmptyState
        v-else-if="variant === 'empty'"
        icon="lucide:inbox"
        :title="emptyTitle ?? 'Nothing here yet'"
        :description="emptyDescription ?? 'No data available'"
      />
    </div>
    <div v-else>
      <slot />
    </div>
  </section>
</template>
