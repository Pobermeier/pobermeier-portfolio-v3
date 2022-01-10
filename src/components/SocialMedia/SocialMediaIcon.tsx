import React from "react";

interface Props {
  name: string;
  url: string;
  iconSrc: string;
  size?: number;
}

const SocialMediaIcon = ({ iconSrc, name, url, size = 5 }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 hover:scale-110 transition-all"
      title={name}
    >
      <span className="sr-only">{name}</span>
      <img className={`h-${size} w-${size}`} aria-hidden="true" alt={name} src={iconSrc} />
    </a>
  );
};

export default SocialMediaIcon;
