import Head from "next/head";
import { useRouter } from "next/dist/client/router";

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
