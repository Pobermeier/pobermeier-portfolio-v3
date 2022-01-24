import { ReactElement } from "react";
import { SocialMediaIconIdentifier } from "models/datoCMS";
// components
import TwitterIcon from "components/Icons/TwitterIcon";
import GitHubIcon from "components/Icons/GitHubIcon";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import EmailIcon from "components/Icons/EmailIcon";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

type SizeMap = Record<IconSize, string>;
type IconMap = Record<SocialMediaIconIdentifier, ReactElement>;

interface Props {
  name: string;
  url: string;
  reactIconIdentifier: SocialMediaIconIdentifier;
  size?: IconSize;
}

const sizeMap: SizeMap = {
  xs: "h-2 w-2",
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
  xl: "h-6 w-6",
  xxl: "h-7 w-7",
  xxxl: "h-8 w-8",
};

const SocialMediaIconLink = ({ name, url, size = "lg", reactIconIdentifier }: Props) => {
  const iconProps = {
    className: `${sizeMap[size]}`,
    "aria-hidden": true,
    alt: name,
  };

  const iconMap: IconMap = {
    twitter: <TwitterIcon {...iconProps} />,
    github: <GitHubIcon {...iconProps} />,
    linkedin: <LinkedinIcon {...iconProps} />,
    email: <EmailIcon {...iconProps} />,
  };

  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-800 dark:text-gray-400 md:hover:text-primary dark:md:hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 md:hover:scale-110 transition-all"
        title={name}
      >
        <span className="sr-only">{name}</span>
        {iconMap[reactIconIdentifier]}
      </a>
    </li>
  );
};

export default SocialMediaIconLink;
