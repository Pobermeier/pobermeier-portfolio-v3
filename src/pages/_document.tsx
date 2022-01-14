/* eslint-disable @next/next/next-script-for-ga */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

import config from "config";
import { isProd } from "Constants";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en" id="htmlRoot">
        <Head>
          {/* <!-- General Meta-Tags & SEO--> */}
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="manifest" href="manifest.json"></link>

          {/* <!-- DNS Prefetch / Preconnect to GA & Google Fonts --> */}
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

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
        <body className="bg-gray-50 dark:bg-gray-900 min-h-screen selection:bg-primary selection:text-white relative">
          {/* Google Tag Manager (noscript) */}
          {isProd && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${config.gtm.id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
          )}
          {/* End Google Tag Manager (noscript) */}

          <Main />
          <NextScript />

          {/* Google Tag Manager */}
          {isProd && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${config.gtm.id}');`,
              }}
            />
          )}
          {/* End Google Tag Manager */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
