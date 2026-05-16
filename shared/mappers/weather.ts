import type {
  WeatherAlertDTO,
  WeatherAlertUI,
  WeatherCurrentDTO,
  WeatherCurrentUI,
  WeatherDailyDTO,
  WeatherDailyUI,
  WeatherDTO,
  WeatherHourlyDTO,
  WeatherHourlyUI,
  WeatherUI,
} from '#shared/types/weather'
import {
  buildWeatherIconUrl,
  formatUnixToDate,
  formatUnixToDateTime,
  formatUnixToTime,
} from '#shared/utils/formatters/weather'

const mapCondition = (weather: WeatherCurrentDTO['weather'][0] | undefined) => ({
  description: weather?.description ?? '',
  iconUrl: weather ? buildWeatherIconUrl(weather.icon) : '',
})

const mapCurrentToUI = (current: WeatherCurrentDTO, offset: number): WeatherCurrentUI => ({
  temperature: Math.round(current.temp),
  feelsLike: Math.round(current.feels_like),
  humidity: current.humidity,
  pressure: current.pressure,
  windSpeed: current.wind_speed,
  windDeg: current.wind_deg,
  windGust: current.wind_gust ?? null,
  cloudiness: current.clouds,
  visibility: current.visibility,
  uvIndex: current.uvi,
  dewPoint: Math.round(current.dew_point),
  sunrise: formatUnixToTime(current.sunrise, offset),
  sunset: formatUnixToTime(current.sunset, offset),
  updatedAt: formatUnixToDateTime(current.dt, offset),
  condition: mapCondition(current.weather[0]),
  rain: current.rain?.['1h'] ?? null,
  snow: current.snow?.['1h'] ?? null,
})

const mapHourlyToUI = (hourly: WeatherHourlyDTO, offset: number): WeatherHourlyUI => ({
  time: formatUnixToTime(hourly.dt, offset),
  temperature: Math.round(hourly.temp),
  feelsLike: Math.round(hourly.feels_like),
  windSpeed: hourly.wind_speed,
  precipitationChance: Math.round(hourly.pop * 100),
  condition: mapCondition(hourly.weather[0]),
})

const mapDailyToUI = (daily: WeatherDailyDTO, offset: number): WeatherDailyUI => ({
  date: formatUnixToDate(daily.dt, offset),
  summary: daily.summary,
  tempMin: Math.round(daily.temp.min),
  tempMax: Math.round(daily.temp.max),
  tempMorn: Math.round(daily.temp.morn),
  tempDay: Math.round(daily.temp.day),
  tempEve: Math.round(daily.temp.eve),
  tempNight: Math.round(daily.temp.night),
  humidity: daily.humidity,
  windSpeed: daily.wind_speed,
  precipitationChance: Math.round(daily.pop * 100),
  uvIndex: daily.uvi,
  condition: mapCondition(daily.weather[0]),
})

const mapAlertToUI = (alert: WeatherAlertDTO, offset: number): WeatherAlertUI => ({
  source: alert.sender_name,
  event: alert.event,
  from: formatUnixToDateTime(alert.start, offset),
  to: formatUnixToDateTime(alert.end, offset),
  description: alert.description,
})

export const mapWeatherDtoToUI = (weather: WeatherDTO): WeatherUI => {
  const offset = weather.timezone_offset

  return {
    timezone: weather.timezone,
    current: mapCurrentToUI(weather.current, offset),
    hourly: weather.hourly.map(hour => mapHourlyToUI(hour, offset)),
    daily: weather.daily.map(day => mapDailyToUI(day, offset)),
    alerts: weather.alerts?.map(alert => mapAlertToUI(alert, offset)) ?? [],
  }
}
