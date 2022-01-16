import { Dispatch, SetStateAction, useEffect, useState } from "react";

const DEFAULT_VALUE = true;

const useDarkMode = (
  localStorageKey: string,
  rootElementId: string,
  darkmodeClassname: string,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [darkMode, setDarkMode] = useState(DEFAULT_VALUE);

  useEffect(() => {
    setDarkMode(Boolean(localStorage.getItem(localStorageKey)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem(localStorageKey, "true");
      document.getElementById(rootElementId)?.classList.add(darkmodeClassname);
    } else {
      localStorage.removeItem(localStorageKey);
      document.getElementById(rootElementId)?.classList.remove(darkmodeClassname);
    }
  }, [darkMode, darkmodeClassname, localStorageKey, rootElementId]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
