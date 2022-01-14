import dynamic from "next/dynamic";
import type { AppProps } from "next/app";

import useCookieBanner from "hooks/useCookieBanner";
import useGoogleTagManager from "hooks/useGoogleTagManager";
import useQueryCheck from "hooks/useQueryCheck";
import usePreviewMode from "hooks/usePreviewMode";
import useAOS from "hooks/useAOS";

import "styles/globals.css";
import "styles/inter.css";
import useScrollToHashOnPageLoad from "hooks/useScrolltoHashOnPageLoad";

const AOSStyles = dynamic(() => import("components/AOS/AOSStyles"));

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isPreview, setIsPreview] = usePreviewMode();
  useQueryCheck("isPreview", setIsPreview);
  useGoogleTagManager();
  useCookieBanner();
  useScrollToHashOnPageLoad();

  const isAosInitiated = useAOS({ delay: 300, disable: "mobile" });

  const deactivatePreviewMode = () => {
    setIsPreview(false);
    window.location = (window.location.pathname + window.location.hash) as unknown as Location;
  };

  return (
    <>
      {isAosInitiated && <AOSStyles />}
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
