<script setup lang="ts">
type CountrySearchProps = {
  modelValue: string;
};

type CountrySearchEmits = {
  'update:modelValue': [value: string];
};

defineProps<CountrySearchProps>();
defineEmits<CountrySearchEmits>();
</script>

<template>
  <div class="relative w-full">
    <Icon
      name="lucide:search"
      class="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"
    />

    <InputText
      :value="modelValue"
      placeholder="Search by country or capital..."
      class="w-full"
      :pt="{
        root: { style: 'padding-left: 2.25rem; padding-right: 2.25rem;' },
      }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <button
      v-if="modelValue"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white"
      @click="$emit('update:modelValue', '')"
    >
      <Icon name="lucide:x" class="h-4 w-4" />
    </button>
  </div>
</template>
