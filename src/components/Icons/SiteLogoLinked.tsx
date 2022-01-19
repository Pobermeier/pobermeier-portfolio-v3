import Link from "next/link";
// components
import SiteLogo from "components/Icons/SiteLogo";
// config
import config from "config";

interface Props {
  url?: string;
}

const SiteLogoLinked = ({ url = "/home" }: Props) => {
  return (
    <Link href={url}>
      <a
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 text-gray-100 dark:text-gray-800"
        title={config.meta.siteOwnerName}
        aria-label="To Homepage"
      >
        <SiteLogo className="h-12 w-auto sm:h-14" />
        <h1 className="sr-only">{config.meta.siteOwnerName}</h1>
      </a>
    </Link>
  );
};

export default SiteLogoLinked;
