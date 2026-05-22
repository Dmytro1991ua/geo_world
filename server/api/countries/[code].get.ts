import { mapCountryBordersDtoToUI, mapCountryDetailsDtoToUi } from '#shared/mappers';
import type { CountryDetailDTO } from '~~/shared/types/country';

export default defineEventHandler(async (event) => {
  const code = getRouterParam(event, 'code');
  const config = useRuntimeConfig(event);
  const baseUrl = config.public.countriesApiBase;

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

  return mapCountryDetailsDtoToUi(country,borderCountries.map(mapCountryBordersDtoToUI));
});
