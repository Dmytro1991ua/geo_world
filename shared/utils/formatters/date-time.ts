import type { Dayjs } from 'dayjs';

type FormatTimeToDisplay = {
  timeString: string;
  dateString: string;
  tzString: string;
};

export const formatTime = (dateTime: Dayjs) => dateTime.format('HH:mm:ss');

export const formatDate = (dateTime: Dayjs) => dateTime.format('dddd, D MMM YYYY');

export const formatTimezone = (dateTime: Dayjs) => dateTime.format('z (zzz)');

export const formatTimeDisplay = (dateTime: Dayjs | null): FormatTimeToDisplay => {
  if (!dateTime) {
    return {
      timeString: '--:--',
      dateString: '',
      tzString: '',
    };
  }

  return {
    timeString: formatTime(dateTime),
    dateString: formatDate(dateTime),
    tzString: formatTimezone(dateTime),
  };
};
