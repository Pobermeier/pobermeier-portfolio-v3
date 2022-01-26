import { useEffect } from "react";
import Router from "next/router";

const useReplaceHrefInAllMatchedLinks = (urlToMatch: string, replaceUrl: string) => {
  useEffect(() => {
    const updateLinks = () => {
      setTimeout(() => {
        const allLinks = document.querySelectorAll("a");

        allLinks.forEach((link) => {
          if (link.href === urlToMatch) {
            link.href = replaceUrl;
          }
        });
      }, 1000);
    };

    updateLinks();

    Router.events.on("routeChangeComplete", updateLinks);

    return () => {
      Router.events.off("routeChangeComplete", updateLinks);
    };
  }, [replaceUrl, urlToMatch]);
};

export default useReplaceHrefInAllMatchedLinks;
