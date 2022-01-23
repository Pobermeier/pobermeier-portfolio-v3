export const getFormattedLocaleString = (date: Date) =>
  date.toLocaleString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export const getDateTimeString = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
