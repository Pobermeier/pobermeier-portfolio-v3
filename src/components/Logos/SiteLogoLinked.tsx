import React from "react";
import Link from "next/link";
import SiteLogo from "components/Logos/SiteLogo";
import config from "config";

interface Props {
  url?: string;
}

const SiteLogoLinked = ({ url = "/" }: Props) => {
  return (
    <Link href={url}>
      <a className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800">
        <span className="sr-only">{config.meta.siteOwnerName}</span>
        <SiteLogo className="h-12 w-auto sm:h-14" />
      </a>
    </Link>
  );
};

export default SiteLogoLinked;
