import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const convertLongString = (str, limit) => {
  return str.length > limit ? str.substring(0, limit) + '...' : str;
};

export const formatTitle = str => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

export const formatTimeFromNow = postDate => {
  dayjs.extend(relativeTime);
  const now = dayjs();
  const postTime = dayjs(postDate);
  const diffInSeconds = now.diff(postTime, 'second');
  const diffInMinutes = now.diff(postTime, 'minute');
  const diffInHours = now.diff(postTime, 'hour');
  const diffInDays = now.diff(postTime, 'day');
  const diffInMonths = now.diff(postTime, 'month');
  const diffInYears = now.diff(postTime, 'year');

  if (diffInSeconds <= 60) return 'Vừa đăng';
  if (diffInMinutes <= 60) return `${diffInMinutes} phút trước`;
  if (diffInHours <= 24) return `${diffInHours} giờ trước`;
  if (diffInDays <= 30) return `${diffInDays} ngày trước`;
  if (diffInMonths <= 12) return `${diffInMonths} tháng trước`;
  return `${diffInYears} năm trước`;
};

export const getFirstImage = str => {
  const images = JSON.parse(str);
  return images[0];
};
