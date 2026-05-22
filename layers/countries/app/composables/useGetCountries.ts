export const useGetCountries = (): ReturnType<typeof useApiClient<CountryUI[]>> => {
  const nuxtApp = useNuxtApp();

  return useApiClient<CountryUI[]>(
    '/api/countries',
    {
      key: 'countries-list',
      getCachedData: (key) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key],
    },
    {
      errorMessage: 'Failed to load countries data',
    },
  );
};

// import type { FetchError } from 'ofetch';

// type CountriesResponse = {
//   countries: CountryUI[];
//   hasMore: boolean;
//   total: number;
// };

// export type UseGetCountries = {
//   allCountries: Ref<CountryUI[]>;
//   hasMore: Ref<boolean>;
//   total: Ref<number>;
//   status: Ref<'idle' | 'pending' | 'success' | 'error'>;
//   error: Ref<FetchError | null>;
//   loadMore: () => Promise<void>;
// };

// const PAGE_SIZE = 20;

// export const useGetCountries = (): UseGetCountries => {
//   const nuxtApp = useNuxtApp();

//   const page = ref(1);
//   const allCountries = ref<CountryUI[]>([]);
//   const hasMore = ref(true);
//   const total = ref(0);

//   const { data, status, error, execute } = useApiClient<CountriesResponse>(
//     '/api/countries',
//     {
//       key: 'countries-list',
//       getCachedData: (key) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key],
//     },
//     {
//       errorMessage: 'Failed to load countries data',
//     },
//   );

//   const loadMore = async () => {
//     if (!hasMore.value || status.value === 'pending') return;

//     await execute();

//     if (data.value) {
//       allCountries.value.push(...data.value.countries);
//       hasMore.value = data.value.hasMore;
//       total.value = data.value.total;
//       page.value++;
//     }
//   };

//   return {
//     allCountries,
//     hasMore,
//     total,
//     status: status as Ref<'idle' | 'pending' | 'success' | 'error'>,
//     error: error as Ref<FetchError | null>,
//     loadMore,
//   };
// };
