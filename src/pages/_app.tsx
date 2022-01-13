import type { AppProps } from "next/app";

import useCookieBanner from "hooks/useCookieBanner";
import useGoogleTagManager from "hooks/useGoogleTagManager";
import useQueryCheck from "hooks/useQueryCheck";
import usePreviewMode from "hooks/usePreviewMode";
import useAOS from "hooks/useAOS";

import "styles/globals.css";
import "aos/dist/aos.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isPreview, setIsPreview] = usePreviewMode();
  useQueryCheck("isPreview", setIsPreview);
  useGoogleTagManager();
  useCookieBanner();
  useAOS({ once: true, delay: 300 });

  const deactivatePreviewMode = () => {
    setIsPreview(false);
    window.location = (window.location.pathname + window.location.hash) as unknown as Location;
  };

  return (
    <>
      <a className="skip-to-content-link" href="#main">
        Skip to content
      </a>
      <Component
        {...pageProps}
        isPreview={isPreview}
        deactivatePreviewMode={deactivatePreviewMode}
      />
    </>
  );
};

export default MyApp;
