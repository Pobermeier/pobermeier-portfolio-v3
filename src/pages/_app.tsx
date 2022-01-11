import type { AppProps } from "next/app";

import useCookieBanner from "hooks/useCookieBanner";
import useGoogleTagManager from "hooks/useGoogleTagManager";
import useQueryCheck from "hooks/useQueryCheck";
import usePreviewMode from "hooks/usePreviewMode";

import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isPreview, setIsPreview] = usePreviewMode();
  useQueryCheck("isPreview", setIsPreview);
  useGoogleTagManager();
  useCookieBanner();

  const deactivatePreviewMode = () => {
    setIsPreview(false);
    window.location = (window.location.pathname + window.location.hash) as unknown as Location;
  };

  return (
    <Component {...pageProps} isPreview={isPreview} deactivatePreviewMode={deactivatePreviewMode} />
  );
};

export default MyApp;
