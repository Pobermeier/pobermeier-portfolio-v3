import Link from "next/link";

interface Props {
  isExternalLink: boolean;
  name: string;
  url: string;
}

const linkClassName =
  "text-base text-gray-500 dark:text-gray-500 font-medium md:hover:text-primary dark:md:hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800";

const FooterNavItem = ({ isExternalLink, name, url }: Props) => {
  return (
    <div className="px-5 py-2">
      {isExternalLink ? (
        <a href={url} className={linkClassName} target="_blank" rel="noreferrer noopener">
          {name}
        </a>
      ) : (
        <Link href={url}>
          <a className={linkClassName}>{name}</a>
        </Link>
      )}
    </div>
  );
};

export default FooterNavItem;
