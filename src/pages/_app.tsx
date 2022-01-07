import "styles/globals.css";
import type { AppProps } from "next/app";
import useCookieBanner from "hooks/useCookieBanner";
import useGoogleTagManager from "hooks/useGoogleTagManager";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useCookieBanner();
  useGoogleTagManager();

  return <Component {...pageProps} />;
};

export default MyApp;
