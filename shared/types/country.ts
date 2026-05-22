export type CountryFlagDTO = {
  png: string;
  svg: string;
  alt: string;
};

export type CountryNameDTO = {
  common: string;
  official: string;
  nativeName?: Record<
    string,
    {
      official: string;
      common: string;
    }
  >;
};

export type CountryCurrencyDTO = {
  name: string;
  symbol: string;
};

export type CountryIddDTO = {
  root: string;
  suffixes: string[];
};

export type CountryMapsDTO = {
  googleMaps: string;
  openStreetMaps: string;
};

export type CountryCoatOfArms = { png: string; svg: string };

export type CountryDTO = {
  flags?: CountryFlagDTO;
  name?: CountryNameDTO;
  cca2?: string;
  capital?: string[] | null;
  region?: string;
  population?: number;
  area?: number
};

export type CountryDetailDTO = CountryDTO & {
  subregion?: string;
  languages?: Record<string, string>;
  currencies?: Record<string, CountryCurrencyDTO>;
  borders?: string[];
  area?: number;
  timezones?: string[];
  continents?: string[];
  tld?: string[];
  maps?: CountryMapsDTO;
  idd?: CountryIddDTO;
  flag?: string;
  coatOfArms?: CountryCoatOfArms;
  startOfWeek?: string;
  gini?: Record<string, number>;
  latlng?: number[];
};

export type CountryBorderUI = {
  code: string;
  name: string;
  flag: string | null;
};

export type CountryLatLng = {
  lat: number;
  lon: number;
};

export type CountryUI = {
  code: string | null;
  name: string | null;
  flag: string | null;
  population: number | null;
  populationFormatted: string | null;
  region: string | null;
  capital: string | null;
  altFlagText: string | null;
  area: number | null
  areaFormatted: string | null
};

export type CountryDetailUI = CountryUI & {
  officialName: string | null;
  nativeNames: string | null;
  subregion: string | null;
  languages: string | null;
  currencies: string | null;
  borders: CountryBorderUI[] | null;
  area: number | null;
  timezones: string | null;
  tld: string | null;
  callingCode: string | null;
  googleMaps: string | null;
  openStreetMaps: string | null;
  flagEmoji: string | null;
  coatOfArms: string | null;
  gini: string | null;
  latlng?: CountryLatLng | null;
};
