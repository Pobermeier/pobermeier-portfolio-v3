import type { AppProps } from "next/app";

import useCookieBanner from "hooks/useCookieBanner";
import useGoogleTagManager from "hooks/useGoogleTagManager";

import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useCookieBanner();
  useGoogleTagManager();

  return <Component {...pageProps} />;
};

export default MyApp;
