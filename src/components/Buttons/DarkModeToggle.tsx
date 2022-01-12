import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_DARKMODE_KEY = "darkMode";
const DARKMODE_CLASSNAME = "dark";
const ROOT_ELEMENT_ID = "htmlRoot";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setDarkMode(Boolean(localStorage.getItem(LOCAL_STORAGE_DARKMODE_KEY)) || false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem(LOCAL_STORAGE_DARKMODE_KEY, "true");
      document.getElementById(ROOT_ELEMENT_ID)?.classList.add(DARKMODE_CLASSNAME);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_DARKMODE_KEY);
      document.getElementById(ROOT_ELEMENT_ID)?.classList.remove(DARKMODE_CLASSNAME);
    }
  }, [darkMode]);

  return (
    <button
      className="flex justify-center text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:scale-110 transition-all"
      title="Toggle Darkmode"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
