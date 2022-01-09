import React from "react";
import Link from "next/link";

interface Props {
  isExternalLink: boolean;
  name: string;
  url: string;
}

const NavItem = ({ isExternalLink, name, url }: Props) => {
  return (
    <>
      {isExternalLink ? (
        <a href={url} className="text-base font-medium text-gray-500 hover:text-green-600">
          {name}
        </a>
      ) : (
        <Link href={url}>
          <a className="text-base font-medium text-gray-500 hover:text-green-600">{name}</a>
        </Link>
      )}
    </>
  );
};

export default NavItem;
