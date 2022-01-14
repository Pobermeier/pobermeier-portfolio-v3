import { useEffect, useState } from "react";
import AOS from "aos";

const useAOS = (options?: AOS.AosOptions): boolean => {
  const [isInitiated, setIsInitiated] = useState(false);

  useEffect(() => {
    async function initAOS() {
      const AOS = (await import("aos")).default;
      AOS.init(options);
    }

    if (!isInitiated && typeof window !== "undefined") {
      const isMobileDevice =
        (window.screen.width < 648 && window.screen.orientation.type === "portrait-primary") ||
        (window.screen.height < 648 && window.screen.orientation.type === "landscape-primary");

      if (isMobileDevice) return;

      setIsInitiated(true);
      initAOS();
    }
  }, [options, isInitiated]);

  return isInitiated;
};

export default useAOS;
