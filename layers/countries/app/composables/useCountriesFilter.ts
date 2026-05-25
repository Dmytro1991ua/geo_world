export type UseCountryFilters = {
  regions: ComputedRef<string[]>
  activeRegion: Ref<string>
  filteredCountries: ComputedRef<CountryUI[]>
};

export const useCountriesFilter = (countries: Ref<CountryUI[] | null>) => {
  const activeRegion = ref('All');

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
    if (activeRegion.value === 'All') return countries.value;

    return countries.value.filter((c) => c.region === activeRegion.value);
  });

  return { regions, activeRegion, filteredCountries };
};
