import { fromUnixTime } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export const formatUnixToTime = (unix: number, timezone: string): string =>
  formatInTimeZone(fromUnixTime(unix), timezone, 'HH:mm');

export const formatUnixToDate = (unix: number, timezone: string): string =>
  formatInTimeZone(fromUnixTime(unix), timezone, 'dd MMM yyyy');

export const formatUnixToDateTime = (unix: number, timezone: string): string =>
  formatInTimeZone(fromUnixTime(unix), timezone, 'dd MMM yyyy HH:mm');

export const buildWeatherIconUrl = (icon: string): string => `https://openweathermap.org/img/wn/${icon}@2x.png`;
