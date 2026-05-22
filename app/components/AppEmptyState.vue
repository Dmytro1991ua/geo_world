<script setup lang="ts">

type AppEmptyStateProps = {
  icon?: string
  title: string
  description: string
  actionText?: string
  actionTo?: string
  iconClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  wrapperClassName?: string
};
type AppEmptyStateEmits = {
  (e: 'action'): void
};

defineProps<AppEmptyStateProps>();

const emit = defineEmits<AppEmptyStateEmits>();
</script>

<template>
  <div
    :class="cn(
      'flex h-full flex-col items-center justify-center w-full px-4 text-center',
      wrapperClassName
    )"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="cn('h-10 w-10 text-brand-500 mb-4', iconClassName)"
    />
    <h1
      :class="cn('text-xl font-semibold text-light-50', titleClassName)"
    >
      {{ title }}
    </h1>
    <p
      :class="cn('mt-2 text-light-300 max-w-sm text-sm', descriptionClassName)"
    >
      {{ description }}
    </p>
    <NuxtLink
      v-if="actionText && actionTo"
      :to="actionTo"
      class="btn-style"
    >
      {{ actionText }}
    </NuxtLink>
    <button
      v-else-if="actionText"
      class="btn-style"
      @click="emit('action')"
    >
      {{ actionText }}
    </button>
  </div>
</template>
