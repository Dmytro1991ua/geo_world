import type { CountryBorderUI, CountryDetailUI } from '#shared/types/country';
import {
  calculatedDensity,
  formatArea,
  formatCallingCode,
  formatCurrencies,
  formatGini,
  formatLanguages,
  formatLatLng,
  formatListToString,
  formatNativeNames,
  formatPopulation,
} from '~~/shared/utils/formatters/country';

export const mapCountryDtoToUI = (country: CountryDTO): CountryUI => ({
  code: country.cca2 ?? null,
  name: country.name?.common ?? null,
  flag: country.flags?.png ?? country.flags?.svg ?? null,
  population: country.population ?? null,
  populationFormatted: formatPopulation(country.population),
  region: country.region ?? null,
  capital: formatListToString(country.capital),
  altFlagText: country.flags?.alt ?? null,
  area: country.area ?? null,
  areaFormatted: formatArea(country.area),
});

export const mapCountryBordersDtoToUI = (border: CountryDTO): CountryBorderUI => ({
  code: border.cca2 ?? '',
  name: border.name?.common ?? '',
  flag: border.flags?.png ?? border.flags?.svg ?? null,
});

export const mapCountryDetailsDtoToUi = (country: CountryDetailDTO, borders: CountryBorderUI[]): CountryDetailUI => ({
  ...mapCountryDtoToUI(country),
  officialName: country.name?.official ?? null,
  nativeNames: formatNativeNames(country.name?.nativeName),
  subregion: country.subregion ?? null,
  languages: formatLanguages(country.languages),
  currencies: formatCurrencies(country.currencies),
  borders,
  area: country.area ?? null,
  timezones: formatListToString(country.timezones),
  tld: formatListToString(country.tld),
  callingCode: formatCallingCode(country.idd),
  googleMaps: country.maps?.googleMaps ?? null,
  openStreetMaps: country.maps?.openStreetMaps ?? null,
  flagEmoji: country.flag ?? null,
  coatOfArms: country.coatOfArms?.png ?? null,
  gini: formatGini(country.gini),
  latlng: formatLatLng(country.latlng),
  density: calculatedDensity(country.population, country.area) ?? null,
});
