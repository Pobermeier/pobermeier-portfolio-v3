import Link from "next/link";

interface Props {
  /**
   * Determines whether this anchor links to external content
   */
  isExternalLink: boolean;
  /**
   * The visible link name
   */
  name: string;
  /**
   * The url the nav-link is pointing towards
   */
  url: string;
}

const linkClassName =
  "text-base font-medium text-gray-500 md:hover:text-primary dark:text-gray-400 dark:md:hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800";

const FooterNavItem = ({ isExternalLink, name, url }: Props) => {
  return (
    <li className="px-5 py-2">
      {isExternalLink ? (
        <a href={url} className={linkClassName} target="_blank" rel="noreferrer noopener">
          {name}
        </a>
      ) : (
        <Link href={url}>
          <a className={linkClassName}>{name}</a>
        </Link>
      )}
    </li>
  );
};

export default FooterNavItem;
