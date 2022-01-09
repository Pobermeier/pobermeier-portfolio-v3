import Link from "next/link";

interface Props {
  isExternalLink: boolean;
  name: string;
  url: string;
}

const FooterNavItem = ({ isExternalLink, name, url }: Props) => {
  return (
    <div className="px-5 py-2">
      {isExternalLink ? (
        <a href={url} className="text-base text-gray-500 hover:text-green-600">
          {name}
        </a>
      ) : (
        <Link href={url}>
          <a className="text-base text-gray-500 hover:text-green-600">{name}</a>
        </Link>
      )}
    </div>
  );
};

export default FooterNavItem;
