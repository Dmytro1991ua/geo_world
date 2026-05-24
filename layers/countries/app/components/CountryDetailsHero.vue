<script setup lang="ts">
type CountryDetailsHero = {
  country: CountryDetailUI;
};

const props = defineProps<CountryDetailsHero>();

const { onSharePage } = useWebShare();

const onHandleSharePage = () =>
  onSharePage({
    title: props.country.name ?? '',
    text: `Check out ${props.country.name}`,
    url: globalThis.location.href,
  });

const actions = computed(() => [
  {
    label: 'Saved',
    icon: 'lucide:heart',
    iconClass: 'text-red-500',
    href: null,
    show: true,
    onClick: () => {},
  },
  {
    label: 'Share',
    icon: 'lucide:share-2',
    iconClass: 'text-gray-400',
    href: null,
    show: true,
    onClick: onHandleSharePage,
  },
  {
    label: 'Maps',
    icon: 'lucide:map-pin',
    iconClass: 'text-gray-400',
    href: props.country.googleMaps,
    show: !!props.country.googleMaps,
    onClick: null,
  },
]);

</script>

<template>
  <div class="flex flex-col gap-6 rounded-2xl border border-dark-800 bg-dark-700 p-6">
    <div class="overflow-hidden rounded-2xl bg-dark-800">
      <div class="flex flex-col items-center justify-center gap-3 py-8 px-6 h-64">
        <img
          :src="country.flag ?? ''"
          :alt="country.altFlagText ?? `Flag of ${country.name}`"
          class="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
        >
        <span class="text-xs text-gray-400">National Flag</span>
      </div>
    </div>
    <div
      v-if="country.coatOfArms"
      class="flex items-center gap-4 rounded-2xl border border-dark-800 bg-dark-800 px-5 py-4"
    >
      <img
        :src="country.coatOfArms"
        :alt="`Coat of arms of ${country.name}`"
        class="h-auto w-24 flex-shrink-0 object-contain transition-transform duration-500 hover:scale-105"
      >
      <div>
        <p class="text-sm font-medium text-gray-200">Coat of Arms</p>
        <p class="text-xs text-gray-400">Official national symbol</p>
      </div>
    </div>
    <div class="text-center sm:text-left">
      <h1 class="text-xl font-bold text-gray-100">{{ country.name }}</h1>
      <p v-if="country.officialName" class="mt-1 text-sm text-gray-400">
        {{ country.officialName }}
      </p>
      <p v-if="country.nativeNames" class="text-sm text-gray-500">
        {{ country.nativeNames }}
      </p>
    </div>
    <div class="mt-auto flex flex-wrap items-center justify-center gap-2 sm:justify-end">
      <template v-for="action in actions" :key="action.label">
        <a
          v-if="action.show && action.href"
          :href="action.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 rounded-xl border border-dark-900 bg-dark-800 px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:border-gray-600 hover:text-white"
        >
          <Icon :name="action.icon" :class="cn('h-4 w-4', action.iconClass)" />
          <span>{{ action.label }}</span>
        </a>
        <button
          v-else-if="action.show"
          class="flex items-center gap-2 rounded-xl border border-dark-900 bg-dark-800 px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:border-gray-600 hover:text-white"
          @click="action.onClick?.()"
        >
          <Icon :name="action.icon" :class="cn('h-4 w-4', action.iconClass)" />
          <span>{{ action.label }}</span>
        </button>
      </template>
    </div>
  </div>
</template>
