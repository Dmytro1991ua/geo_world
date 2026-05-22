import { mapCountryDtoToUI } from '#shared/mappers';
import type { CountryDTO } from '#shared/types/country';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const baseUrl = config.public.countriesApiBase;

  console.log('[countries/index] countriesApiBase:', baseUrl);

  if (!baseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server misconfiguration: NUXT_PUBLIC_COUNTRIES_API_BASE is not set',
    });
  }

  const data = await fetchFromExternalApi<CountryDTO[]>(() =>
    $fetch<CountryDTO[]>(`${baseUrl}/all?fields=name,flags,population,region,cca2,capital,area`),
  );

  return data.map(mapCountryDtoToUI);
});
