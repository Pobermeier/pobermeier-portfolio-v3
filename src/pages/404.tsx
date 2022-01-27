// components
import Button from "components/Buttons/Button";
import SiteLogoLinked from "components/Icons/SiteLogoLinked";
import Layout from "components/Layout/Layout";
// config
import config from "config";

const textContent = {
  title: "404 Page Not Found",
  heading: "Oh noes! A big ol' 404!",
  subHeading: "This is not the page you're looking for...",
};

const metaTags = <title>{`404 Page Not Found | ${config.meta.siteOwnerName}`}</title>;

const NotFoundPage = () => {
  const { title, heading, subHeading } = textContent;

  return (
    <Layout metaTags={metaTags}>
      <div className="flex-shrink-0 flex justify-center">
        <SiteLogoLinked />
      </div>
      <div className="py-16 text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">{title}</p>
        <h2 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-300 tracking-tight sm:text-5xl">
          {heading}
        </h2>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{subHeading}</p>
        <div className="mt-6">
          <Button text="Back to Homepage" as="a" size="lg" url="/home" />
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
