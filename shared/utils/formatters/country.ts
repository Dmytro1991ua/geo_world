import type { CountryLatLng } from '#shared/types/country';

export const formatListToString = (value?: string[] | null, fallback: string | null = null): string | null => {
  if (!value?.length) return fallback;

  return value.join(', ');
};

export const formatCallingCode = (idd?: { root: string; suffixes: string[] }): string | null => {
  if (!idd?.root || !idd?.suffixes?.[0]) return null;
  return `${idd.root}${idd.suffixes[0]}`;
};

export const formatGini = (gini?: Record<string, number>): string | null => {
  if (!gini) return null;

  const year = Object.keys(gini).at(-1);

  return year ? `${gini[year]} (${year})` : null;
};

export const formatNativeNames = (nativeName?: Record<string, { official: string; common: string }>): string | null => {
  if (!nativeName) return null;

  return Object.values(nativeName)
    .map((n) => n.common)
    .join(', ');
};

export const formatCurrencies = (currencies?: Record<string, { name: string; symbol: string }>): string | null => {
  if (!currencies) return null;

  return Object.values(currencies)
    .map((c) => `${c.name} (${c.symbol})`)
    .join(', ');
};

export const formatLanguages = (languages?: Record<string, string>): string | null => {
  if (!languages) return null;

  return Object.values(languages).join(', ');
};

export const formatLatLng = (latlng?: number[]): CountryLatLng | null => {
  if (!latlng || latlng.length !== 2) return null;

  return { lat: latlng[0], lon: latlng[1] };
};

export const formatPopulation = (population?: number | null): string => {
  if (!population) return 'N/A';

  if (population >= 1_000_000) return `${(population / 1_000_000).toFixed(1)}M`;
  if (population >= 1_000) return `${(population / 1_000).toFixed(1)}K`;

  return population.toString();
};

export const formatArea = (area?: number): string => {
  if (!area) return 'N/A';

  return `${new Intl.NumberFormat().format(area)} km²`;
};
