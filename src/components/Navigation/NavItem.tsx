import React from "react";
import Link from "next/link";

interface Props {
  isExternalLink: boolean;
  name: string;
  onClick?: () => void;
  url: string;
}

const linkClassName =
  "text-base font-medium text-gray-500 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800";

const NavItem = ({ isExternalLink, name, onClick = () => {}, url }: Props) => {
  return (
    <>
      {isExternalLink ? (
        <a
          href={url}
          className={linkClassName}
          target="_blank"
          rel="noreferrer noopener"
          onClick={onClick}
        >
          {name}
        </a>
      ) : (
        <Link href={url}>
          <a className={linkClassName} onClick={onClick}>
            {name}
          </a>
        </Link>
      )}
    </>
  );
};

export default NavItem;
