// components
import DarkIcon from "components/Icons/DarkIcon";
import LightIcon from "components/Icons/LightIcon";
// hooks
import useDarkMode from "hooks/useDarkMode";

const LOCAL_STORAGE_DARKMODE_KEY = "darkMode";
const DARKMODE_CLASSNAME = "dark";
const ROOT_ELEMENT_ID = "htmlRoot";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode(
    LOCAL_STORAGE_DARKMODE_KEY,
    ROOT_ELEMENT_ID,
    DARKMODE_CLASSNAME,
  );

  return (
    <button
      className="flex justify-center text-gray-800 dark:text-gray-400 md:hover:text-primary dark:md:hover:text-primary md:hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
      title="Toggle dark mode"
      onClick={() => setDarkMode(!darkMode)}
    >
      <span className="sr-only">Toggle dark mode</span>

      {darkMode ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};

export default DarkModeToggle;
