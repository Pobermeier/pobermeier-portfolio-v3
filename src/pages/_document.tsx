import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
// constants
import { isProd } from "Constants";
// config
import config from "config";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en" id="htmlRoot" className="scroll-smooth dark">
        <Head />
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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
