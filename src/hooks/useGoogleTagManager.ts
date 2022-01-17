import { useEffect } from "react";
import Router from "next/router";
// utils
import { pushGtmPageViewToDataLayer } from "utils/gtm";

const useGoogleTagManager = (): void => {
  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      pushGtmPageViewToDataLayer(url);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
};

export default useGoogleTagManager;
