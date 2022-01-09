/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  name: string;
  url: string;
  iconSrc: string;
  size?: number;
}

const SocialMediaIcon = ({ iconSrc, name, url, size = 6 }: Props) => {
  return (
    <a href={url} className="text-gray-400 hover:text-gray-500" title={name}>
      <span className="sr-only">{name}</span>
      <img className={`h-${size} w-${size}`} aria-hidden="true" alt={name} src={iconSrc} />
    </a>
  );
};

export default SocialMediaIcon;
