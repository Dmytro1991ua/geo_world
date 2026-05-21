<script setup lang="ts">

const { data: countries, error, status, refresh } = await useGetCountries();

const isEmpty = computed(() => !countries.value?.length);

</script>

<template>
  <AppDataState
    :status="status"
    :error="error"
    :is-empty="isEmpty"
    error-title="Failed to load countries"
    @retry="refresh"
  >
    {{ countries }}

  </AppDataState>
</template>
