import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const useScrollToHashOnPageLoad = (): void => {
  const router = useRouter();

  useEffect(() => {
    const currentHash = window.location.hash;

    if (currentHash) {
      const idWithoutHash = currentHash.replace("#", "");

      setTimeout(() => document.getElementById(idWithoutHash)?.scrollIntoView(), 1000);
    }
  }, [router.route]);
};

export default useScrollToHashOnPageLoad;
