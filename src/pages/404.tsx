import Button from "components/Buttons/Button";
import SiteLogoLinked from "components/Logos/SiteLogoLinked";
import SEO from "components/SEO/SEO";
import config from "config";

const NotFoundPage = () => {
  return (
    <>
      <SEO>
        <title>{`Not Found | ${config.meta.siteOwnerName}`}</title>
      </SEO>
      <div className="min-h-screen pt-16 pb-12 flex flex-col bg-gray-50 dark:bg-gray-900">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <SiteLogoLinked />
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                404 Page Not Found
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Oh noes! A big ol&apos; 404!
              </h1>
              <p className="mt-2 text-base text-gray-500">
                This is not the page you&apos;re looking for...
              </p>
              <div className="mt-6">
                <Button text="Back to Homepage" as="a" size="lg" url="/" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFoundPage;
