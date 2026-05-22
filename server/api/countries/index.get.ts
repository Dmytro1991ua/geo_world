import { mapCountryDtoToUI } from '#shared/mappers';
import type { CountryDTO } from '#shared/types/country';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const data = await fetchFromExternalApi<CountryDTO[]>(() =>
    $fetch<CountryDTO[]>(
      `${config.public.countriesApiBase}/all?fields=name,flags,population,region,cca2,capital,area`,
    ),
  );

  return data.map(mapCountryDtoToUI);
});
