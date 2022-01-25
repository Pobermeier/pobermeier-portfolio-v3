import { useEffect } from "react";

const useReplaceHrefInAllMatchedLinks = (urlToMatch: string, replaceUrl: string) => {
  useEffect(() => {
    const allLinks = document.querySelectorAll("a");

    allLinks.forEach((link) => {
      if (link.href === urlToMatch) {
        link.href = replaceUrl;
      }
    });
  }, [replaceUrl, urlToMatch]);
};

export default useReplaceHrefInAllMatchedLinks;
