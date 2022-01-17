import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import Script from "next/script";
// constants
import { isProd } from "Constants";
// components
const AOSStyles = dynamic(() => import("components/AOS/AOSStyles"));
// hooks
import useCookieBanner from "hooks/useCookieBanner";
import useGoogleTagManager from "hooks/useGoogleTagManager";
import useQueryCheck from "hooks/useQueryCheck";
import useScrollToHashOnPageLoad from "hooks/useScrolltoHashOnPageLoad";
import usePreviewMode from "hooks/usePreviewMode";
import useAOS from "hooks/useAOS";
// styles
import "styles/globals.css";
import "styles/inter.css";
// config
import config from "config";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isPreview, setIsPreview] = usePreviewMode();
  useQueryCheck("isPreview", setIsPreview);
  useGoogleTagManager();
  useCookieBanner();
  useScrollToHashOnPageLoad();

  const isAosInitiated = useAOS({ once: true, delay: 300, disable: "mobile" });

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
      {/* Google Tag Manager */}
      {isProd && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${config.gtm.id}');`}
        </Script>
      )}
      {/* End Google Tag Manager */}
    </>
  );
};

export default MyApp;
