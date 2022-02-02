// types
import { NavigationLink, SocialMediaIcon } from "models/datoCMS";
// components
import SocialMediaIconLink from "components/Icons/SocialMediaIconLink";
import FooterNavItem from "components/Footer/FooterNavItem";
import NoSSR from "components/NoSSR/NoSSR";
// config
import config from "config";

export interface FooterProps {
  /**
   * Some copyright text, displayed at the bottom of the footer
   */
  copyrightText: string;
  /**
   * A collection of social media icons
   */
  socialMediaIcons: SocialMediaIcon[];
  /**
   * A collection of navigation links
   */
  navigationLinks: NavigationLink[];
}

const currentYear = new Date().getFullYear();

const Footer = ({ copyrightText, socialMediaIcons, navigationLinks }: FooterProps) => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav aria-label="Footer">
          <ul className="-mx-5 -my-2 flex flex-wrap justify-center">
            {navigationLinks.map(({ id, isExternalLink, title, url }) => (
              <FooterNavItem key={id} isExternalLink={isExternalLink} name={title} url={url} />
            ))}
          </ul>
        </nav>
        <ul className="mt-8 flex justify-center space-x-6">
          {socialMediaIcons.map(({ id, name, url, reactIconIdentifier }) => {
            const icon = (
              <SocialMediaIconLink
                key={id}
                name={name}
                url={reactIconIdentifier === "email" ? config.urls.email : url}
                size="xl"
                reactIconIdentifier={reactIconIdentifier}
              />
            );

            if (reactIconIdentifier === "email") return <NoSSR key={id}>{icon}</NoSSR>;

            return icon;
          })}
        </ul>
        <p className="mt-8 text-center text-base text-gray-400">
          ©{currentYear} {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
