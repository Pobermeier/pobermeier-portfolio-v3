// components
import Button from "components/Buttons/Button";
import SiteLogoLinked from "components/Icons/SiteLogoLinked";
import Navbar, { NavbarProps } from "components/Navigation/Navbar";
import SEO from "components/SEO/SEO";
// config
import config from "config";

const navbarProps: NavbarProps = {
  callToActions: [
    {
      callToActions: [
        {
          id: "0",
          linkUrl: "/",
          title: "Back to Homepage",
          ctaType: "primary",
          isExternalLink: false,
        },
      ],
    },
  ],
  navigationLinks: [],
  socialMediaIcons: [],
};

const content = {
  title: "404 Page Not Found",
  heading: "Oh noes! A big ol' 404!",
  subHeading: "This is not the page you're looking for...",
};

const NotFoundPage = () => {
  const { title, heading, subHeading } = content;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO>
        <title>{`404 Page Not Found | ${config.meta.siteOwnerName}`}</title>
      </SEO>
      <Navbar {...navbarProps} />
      <main
        id="main"
        className="flex flex-col flex-grow bg-gray-50 dark:bg-gray-900 justify-center h-full max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
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
            <Button text="Back to Homepage" as="a" size="lg" url="/" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
