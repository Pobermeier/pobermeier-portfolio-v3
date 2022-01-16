import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useDarkMode = (
  localStorageKey: string,
  rootElementId: string,
  darkmodeClassname: string,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isDarkModeSetInStorage = localStorage.getItem(localStorageKey);

    if (!isDarkModeSetInStorage) {
      setDarkMode(true);
      return;
    }

    setDarkMode(isDarkModeSetInStorage === "true");
  }, [localStorageKey]);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem(localStorageKey, "true");
      document.getElementById(rootElementId)?.classList.add(darkmodeClassname);
    } else {
      localStorage.setItem(localStorageKey, "false");
      document.getElementById(rootElementId)?.classList.remove(darkmodeClassname);
    }
  }, [darkMode, darkmodeClassname, localStorageKey, rootElementId]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
