import { mapWeatherDtoToUI } from '#shared/mappers/weather';
import type { WeatherDTO } from '#shared/types/weather';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseWeatherUrl = config.public.openweatherApiUrlBase;
  const apiKey = config.openweatherApiKeyBase;

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
