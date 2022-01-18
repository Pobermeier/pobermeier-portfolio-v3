import { useEffect, useState } from "react";
import AOS from "aos";

const useAOS = (options?: AOS.AosOptions): boolean => {
  const [isInitiated, setIsInitiated] = useState(false);

  useEffect(() => {
    async function initAOS() {
      setIsInitiated(true);
      const AOS = (await import("aos")).default;
      AOS.init(options);
    }

    if (!isInitiated && typeof window !== "undefined") {
      const orientation =
        (window?.screen?.orientation || {})?.type ||
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window?.screen?.mozOrientation ||
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window?.screen?.msOrientation;

      if (!orientation) {
        initAOS();
        return;
      }

      const isMobileDevice =
        (window.screen.width < 648 && orientation === "portrait-primary") ||
        (window.screen.height < 648 && orientation === "landscape-primary");

      if (isMobileDevice) return;

      initAOS();
    }
  }, [options, isInitiated]);

  return isInitiated;
};

export default useAOS;
