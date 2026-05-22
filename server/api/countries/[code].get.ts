import { mapCountryBordersDtoToUI, mapCountryDetailsDtoToUi } from '#shared/mappers';
import type { CountryDetailDTO } from '~~/shared/types/country';

export default defineEventHandler(async (event) => {
  const code = getRouterParam(event, 'code');
  const config = useRuntimeConfig(event);
  const baseUrl = config.public.countriesApiBase;

  console.log('[countries/[code]] countriesApiBase:', baseUrl, '| code:', code);

  if (!baseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server misconfiguration: NUXT_PUBLIC_COUNTRIES_API_BASE is not set',
    });
  }

  const countries = await fetchFromExternalApi<CountryDetailDTO[]>(() =>
    $fetch<CountryDetailDTO[]>(`${baseUrl}/alpha/${code}`),
  );

  const country = countries[0];
  const borderCodes = country?.borders;

  const borderCountries = borderCodes?.length
    ? await fetchFromExternalApi<CountryDTO[]>(() =>
      $fetch<CountryDTO[]>(
        `${baseUrl}/alpha?codes=${borderCodes.join(',')}&fields=name,flags,cca2`,
      ),
    )
    : [];

  return mapCountryDetailsDtoToUi(country, borderCountries.map(mapCountryBordersDtoToUI));
});
