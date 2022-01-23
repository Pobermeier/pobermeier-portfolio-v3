import Head from "next/head";
import { useRouter } from "next/dist/client/router";
// config
import config from "config";

const SEO: React.FC<Props> = ({ children, keywords }) => {
  const router = useRouter();

  return (
    <Head>
      {/* <!-- General Meta-Tags & SEO--> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {children}
      <meta name="author" content={config.meta.siteOwnerName} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content={config.meta.themeColor} />
      <link rel="canonical" href={`${config.meta.canonicalRootUrl}${router.asPath}`} />
      <meta name="msvalidate.01" content={config.meta.bingValidationId} />
      <link rel="manifest" href="/manifest.json" />

      {/* <!-- DNS Prefetch / Preconnect to GA & Google Fonts --> */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* <!-- Icons --> */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </Head>
  );
};

SEO.defaultProps = {
  keywords: config.meta.defaultKeywords,
};

interface Props {
  keywords?: string;
}

export default SEO;
