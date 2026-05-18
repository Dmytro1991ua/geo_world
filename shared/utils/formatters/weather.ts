import { addSeconds,format, fromUnixTime } from 'date-fns';

export const formatUnixToTime = (unix: number, offsetSeconds: number): string =>
  format(addSeconds(fromUnixTime(unix), offsetSeconds), 'HH:mm');

export const formatUnixToDate = (unix: number, offsetSeconds: number): string =>
  format(addSeconds(fromUnixTime(unix), offsetSeconds), 'dd MMM yyyy');

export const formatUnixToDateTime = (unix: number, offsetSeconds: number): string =>
  format(addSeconds(fromUnixTime(unix), offsetSeconds), 'dd MMM yyyy HH:mm');

export const buildWeatherIconUrl = (icon: string): string =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
