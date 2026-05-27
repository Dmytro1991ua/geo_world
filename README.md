# Geo World

Geo World is a country explorer built with Nuxt 4. It brings together country facts, saved favorites, and live weather data so each country page feels more useful than a static encyclopedia entry.

The project was also a way for me to properly step into the Vue and Nuxt ecosystem: file-based routing, Nuxt layers, composables, server routes, runtime config, Pinia, Tailwind, PrimeVue, and SSR-friendly UI behavior.

## Core Idea

Most country apps stop at flags, capitals, and population. Geo World goes a little further by connecting that country data with real weather context.

You can browse countries, filter by region, search by country or capital, save favorites, open a detailed country profile, and see current weather, hourly forecasts, daily forecasts, alerts, local time, languages, borders, maps, currencies, area, population, and density in one place.

## Screenshots

### `Countries` page
<img
  src="https://github.com/user-attachments/assets/6e0b7bab-3f2a-43b7-9db1-6a6728d0cd96"
  alt="GeoWorld countries page"
  width="100%"
/>

### `Country Details` page

<img width="1920" height="2314" alt="screencapture-localhost-3000-countries-mx-2026-05-27-14_32_33" src="https://github.com/user-attachments/assets/fa096ac4-8ea9-4be0-b20d-d962a327198a" />

### `Favorites` page

<img width="1920" height="1143" alt="screencapture-geoworld-production-up-railway-app-countries-2026-05-27-14_15_52" src="https://github.com/user-attachments/assets/5723a72a-4117-4c60-9962-1979ae33b57f" />

### `Theme` comparison

<img src="https://github.com/user-attachments/assets/662ea1d7-c1b1-4332-9b72-d97446a37447" alt="GeoWorld country details page" width="100%" />

<img width="1920" height="2323" alt="screencapture-localhost-3000-countries-gt-2026-05-27-14_28_18" src="https://github.com/user-attachments/assets/c161dd9c-d49e-4366-a5ab-70ab5b3473e8" />

## Quick Start

Create a `.env` file in the project root:

```bash
NUXT_PUBLIC_COUNTRIES_API_BASE=https://restcountries.com/v3.1
NUXT_PUBLIC_OPENWEATHER_API_URL_BASE=https://api.openweathermap.org/data/3.0
NUXT_PUBLIC_OPENWEATHER_API_ICON=https://openweathermap.org/img/wn
NUXT_OPENWEATHER_API_KEY_BASE=your_openweather_api_key
```

`NUXT_OPENWEATHER_API_KEY_BASE` is private server runtime config. It is used by the Nitro weather route and is not exposed to the client.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

Build and run production locally:

```bash
npm run build
npm run start
```

Useful checks:

```bash
npm run lint
npm run format:check
```

## Features

- Browse countries from REST Countries.
- Search by country name or capital.
- Filter countries by region.
- Load countries incrementally with client-side pagination.
- Open detailed country pages with flags, facts, maps, languages, currencies, borders, and formatted statistics.
- View current weather, hourly forecast, daily forecast, weather alerts, and local time from OpenWeather.
- Save favorite countries with persisted Pinia state.
- Switch between dark and light themes with `@nuxtjs/color-mode`.
- Use PrimeVue components with the Aura theme.
- Add small UI transitions with `@vueuse/motion`.
- Keep external API calls behind Nuxt server routes.
- Convert third-party API responses into stable UI models through shared mappers.

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Nuxt 4, Vue 3, Vue Router |
| Language | TypeScript |
| State | Pinia, pinia-plugin-persistedstate |
| Styling | Tailwind CSS, PrimeVue, Aura preset |
| Theme | `@nuxtjs/color-mode` |
| Icons | `@nuxt/icon`, Iconify Lucide set |
| Motion | `@vueuse/motion` |
| Dates | date-fns, date-fns-tz, dayjs |
| API Layer | Nuxt Nitro server routes, ofetch |
| Quality | ESLint 9, Nuxt ESLint, Prettier, simple-import-sort, unused-imports |

## Project Structure

Geo World uses Nuxt layers to keep the app split by domain. The root app owns the shell, layout, global state, shared utilities, and server routes. The country and weather features live in their own layers.

```txt
geo_world/
|-- app/
|   |-- assets/css/             Global Tailwind layers and reusable utility classes
|   |-- components/             App shell components
|   |-- composables/            App-level composables
|   |-- layouts/                Default layout
|   |-- pages/                  Root app pages, including favorites
|   |-- plugins/                Client plugins
|   `-- stores/                 Pinia stores
|-- layers/
|   |-- countries/              Country explorer layer
|   |   `-- app/
|   |       |-- components/     Country cards, search, tabs, detail sections
|   |       |-- composables/    Country fetching, filtering, pagination
|   |       `-- pages/          /countries and /countries/[code]
|   `-- weather/                Weather layer
|       `-- app/
|           |-- components/     Current, hourly, daily, alerts, local time
|           `-- composables/    Weather fetching and clock updates
|-- server/
|   `-- api/                    Nitro routes that proxy external APIs
|-- shared/
|   |-- mappers/                DTO-to-UI transformation layer
|   |-- types/                  External DTO and internal UI types
|   |-- ui/motion/              Motion tokens, presets, and config
|   `-- utils/                  Formatters, error wrapper, class merging
|-- public/                     Static assets
|-- nuxt.config.ts              Main Nuxt configuration
|-- tailwind.config.js          Tailwind theme configuration
`-- eslint.config.mjs           ESLint workspace rules
```

## How The Data Moves

### Country List

1. `/countries` calls `useGetCountries()`.
2. `useGetCountries()` calls the internal route `/api/countries`.
3. `server/api/countries/index.get.ts` requests a focused field set from REST Countries.
4. `mapCountryDtoToUI()` converts the raw response into `CountryUI`.
5. `useCountriesFilter()` handles search and region filtering.
6. `useClientSidePagination()` controls how many cards are visible.
7. `CountryCard` renders each item and sends favorite changes to Pinia.

### Country Details

1. `/countries/[code]` reads the country code from the route.
2. `useGetCountryDetails(code)` calls `/api/countries/[code]`.
3. The server route fetches full country details from REST Countries.
4. If the country has borders, the route fetches neighboring countries too.
5. `mapCountryDetailsDtoToUi()` formats the result for the UI.
6. The page extracts latitude and longitude from the country data.
7. Weather loading starts only after both coordinates are available.

### Weather

1. `useGetWeatherData(lat, lon)` creates a weather request with `immediate: false`.
2. A watcher waits until both coordinates are present.
3. The composable executes `/api/weather`.
4. `server/api/weather/index.get.ts` calls OpenWeather One Call.
5. `mapWeatherDtoToUI()` formats current, hourly, daily, and alert data.
6. Weather components receive display-ready values.

### Favorites

Favorites are stored as country codes in a Pinia setup store:

```ts
favorites: string[]
```

The store exposes:

- `isFavorite(code)`
- `toggleFavorite(code)`

Persistence is handled by `pinia-plugin-persistedstate`, so saved countries remain after reload.

## API Routes

### `GET /api/countries`

Returns a normalized list of countries.

External source:

```txt
{NUXT_PUBLIC_COUNTRIES_API_BASE}/all?fields=name,flags,population,region,cca2,capital,area
```

Returned shape:

```ts
CountryUI[]
```

### `GET /api/countries/:code`

Returns one normalized country details payload, including border countries when available.

External sources:

```txt
{NUXT_PUBLIC_COUNTRIES_API_BASE}/alpha/:code
{NUXT_PUBLIC_COUNTRIES_API_BASE}/alpha?codes=...&fields=name,flags,cca2
```

Returned shape:

```ts
CountryDetailUI
```

### `GET /api/weather?lat={lat}&lon={lon}`

Returns normalized weather data for a coordinate pair.

External source:

```txt
{NUXT_PUBLIC_OPENWEATHER_API_URL_BASE}/onecall
```

Query parameters sent to OpenWeather:

```txt
lat
lon
exclude=minutely
units=metric
appid={NUXT_OPENWEATHER_API_KEY_BASE}
```

Returned shape:

```ts
WeatherUI
```

## Type Model

The app separates external API DTOs from UI-facing models.

```txt
REST Countries DTO -> country mapper -> CountryUI / CountryDetailUI
OpenWeather DTO    -> weather mapper -> WeatherUI
```

That keeps Vue components away from third-party response details and gives the UI formatted values for population, area, dates, time, weather icons, and border links.

## UI Notes

The interface is built with Tailwind utility classes, PrimeVue components, the Aura preset, Lucide icons, and shared motion presets.

Dark mode uses Tailwind's `class` strategy and `@nuxtjs/color-mode`. PrimeVue follows the same `.dark` selector, so custom UI and PrimeVue components stay aligned.

## Error Handling

Server API calls are wrapped by `fetchFromExternalApi()`.

The wrapper converts external fetch failures and runtime errors into Nuxt `createError()` responses. Client requests go through `useApiClient()`, which wraps `useFetch()` and shows PrimeVue toast messages when requests fail.

## Notes For Future Improvements

- `nuxt.config.ts` points Tailwind to `tailwind.config.ts`, while the repository currently contains `tailwind.config.js`.
- Some labels contain mojibake characters where temperature and square-kilometer units should be displayed.
- The project has linting and formatting scripts, but no test runner is configured yet.
- A `.env.example` file would make setup clearer.
- Real screenshots would make the README much easier to scan.

## License

No license file is currently present.
