import { useEffect } from "react";
import AOS from "aos";

const useAOS = (options?: AOS.AosOptions) => {
  useEffect(() => {
    AOS.init(options ?? undefined);
  }, [options]);
};

export default useAOS;
