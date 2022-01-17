import { NavigationLink, SocialMediaIcon } from "models/datoCMS";

import SocialMediaIconLink from "components/SocialMedia/SocialMediaIconLink";
import FooterNavItem from "components/Footer/FooterNavItem";

export interface FooterProps {
  copyrightText: string;
  socialMediaIcons: SocialMediaIcon[];
  navigationLinks: NavigationLink[];
}

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
          {socialMediaIcons.map(({ id, name, url, reactIconIdentifier }) => (
            <SocialMediaIconLink
              key={id}
              name={name}
              url={url}
              size="xl"
              reactIconIdentifier={reactIconIdentifier}
            />
          ))}
        </ul>
        <p className="mt-8 text-center text-base text-gray-400">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
