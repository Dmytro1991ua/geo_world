import { mapWeatherDtoToUI } from '#shared/mappers/weather';
import type { WeatherDTO } from '#shared/types/weather';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const baseWeatherUrl = config.public.openweatherApiUrlBase;
  const apiKey = config.openweatherApiKeyBase;

  console.log('[weather/index] openweatherApiUrlBase:', baseWeatherUrl, '| apiKey set:', !!apiKey);

  if (!baseWeatherUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server misconfiguration: NUXT_PUBLIC_OPENWEATHER_API_URL_BASE is not set',
    });
  }

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server misconfiguration: NUXT_OPENWEATHER_API_KEY_BASE is not set',
    });
  }

  const { lat, lon } = getQuery(event);

  const data = await fetchFromExternalApi<WeatherDTO>(() =>
    $fetch<WeatherDTO>(`${baseWeatherUrl}/onecall`, {
      params: {
        lat,
        lon,
        exclude: 'minutely',
        units: 'metric',
        appid: apiKey,
      },
    }),
  );

  return mapWeatherDtoToUI(data);
});
