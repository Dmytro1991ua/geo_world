import { refDebounced } from '@vueuse/core';

export type UseCountryFilters = {
  regions: ComputedRef<string[]>;
  activeRegion: Ref<string>;
  searchQuery: Ref<string>;
  filteredCountries: ComputedRef<CountryUI[]>;
};

export const DEFAULT_DEBOUNCE_MS = 150;

export const useCountriesFilter = (countries: Ref<CountryUI[] | null>): UseCountryFilters => {
  const activeRegion = ref<string>('All');
  const searchQuery = ref<string>('');

  const debouncedQuery = refDebounced(searchQuery, DEFAULT_DEBOUNCE_MS);

  const regions = computed(() => {
    if (!countries.value) return ['All'];

    const dynamicRegions = countries.value
      .map(({ region }) => region)
      .filter((region): region is string => !!region)
      .sort(compareAlphabetically);

    return ['All', ...new Set(dynamicRegions)];
  });

  const filteredCountries = computed(() => {
    if (!countries.value) return [];

    const query = debouncedQuery.value.toLowerCase().trim();
    const isAllRegions = activeRegion.value === 'All';

    return countries.value.filter((country) => {
      const matchesRegion = isAllRegions || country.region === activeRegion.value;

      if (!matchesRegion) return false;
      if (!query) return true;

      const name = country.name?.toLowerCase() ?? '';
      const capital = country.capital?.toLowerCase() ?? '';

      return name.includes(query) || capital.includes(query);
    });
  });

  return { regions, searchQuery, activeRegion, filteredCountries };
};
