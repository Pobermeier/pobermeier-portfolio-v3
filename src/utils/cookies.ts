export const setCookie = (
  cookieName: string,
  cookieValue: string,
  expirationDays: number,
): void => {
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};expires=${date.toUTCString()};path=/`;
};

export const getCookie = (cookieName: string): string => {
  const allStoredCookies = document.cookie.split("; ");

  const [foundCookie] = allStoredCookies.filter((cookie) => cookie.split("=").includes(cookieName));

  return foundCookie;
};

export const checkCookie = (cookieName: string, callback: () => void): void => {
  !getCookie(cookieName) && setTimeout(callback, 0);
};
