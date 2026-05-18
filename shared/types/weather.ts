export type WeatherConditionDTO = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherCurrentDTO = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  rain?: { '1h': number };
  snow?: { '1h': number };
  weather: WeatherConditionDTO[];
};

export type WeatherHourlyDTO = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  pop: number;
  rain?: { '1h': number };
  snow?: { '1h': number };
  weather: WeatherConditionDTO[];
};

export type WeatherDailyTempDTO = {
  morn: number;
  day: number;
  eve: number;
  night: number;
  min: number;
  max: number;
};

export type WeatherDailyDTO = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: WeatherDailyTempDTO;
  feels_like: Omit<WeatherDailyTempDTO, 'min' | 'max'>;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  clouds: number;
  uvi: number;
  pop: number;
  rain?: number;
  snow?: number;
  weather: WeatherConditionDTO[];
};

export type WeatherAlertDTO = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
};

export type WeatherDTO = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherCurrentDTO;
  hourly: WeatherHourlyDTO[];
  daily: WeatherDailyDTO[];
  alerts?: WeatherAlertDTO[];
};

export type WeatherConditionUI = {
  description: string;
  iconUrl: string;
};

export type WeatherCurrentUI = {
  temperature: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDeg: number;
  windGust: number | null;
  cloudiness: number;
  visibility: number;
  uvIndex: number;
  dewPoint: number;
  sunrise: string;
  sunset: string;
  updatedAt: string;
  condition: WeatherConditionUI;
  rain: number | null;
  snow: number | null;
};

export type WeatherHourlyUI = {
  time: string;
  temperature: number;
  feelsLike: number;
  windSpeed: number;
  precipitationChance: number;
  condition: WeatherConditionUI;
};

export type WeatherDailyUI = {
  date: string;
  summary: string;
  tempMin: number;
  tempMax: number;
  tempMorn: number;
  tempDay: number;
  tempEve: number;
  tempNight: number;
  humidity: number;
  windSpeed: number;
  precipitationChance: number;
  uvIndex: number;
  condition: WeatherConditionUI;
};

export type WeatherAlertUI = {
  source: string;
  event: string;
  from: string;
  to: string;
  description: string;
};

export type WeatherUI = {
  timezone: string;
  current: WeatherCurrentUI;
  hourly: WeatherHourlyUI[];
  daily: WeatherDailyUI[];
  alerts: WeatherAlertUI[];
};
