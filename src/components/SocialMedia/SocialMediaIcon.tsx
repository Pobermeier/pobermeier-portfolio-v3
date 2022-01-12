import React from "react";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

type SizeMap = Record<IconSize, string>;

interface Props {
  name: string;
  url: string;
  iconSrc: string;
  size?: IconSize;
}

const sizeToClassnameMap: SizeMap = {
  xs: "h-2 w-2",
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
  xl: "h-6 w-6",
  xxl: "h-7 w-7",
  xxxl: "h-8 w-8",
};

const SocialMediaIcon = ({ iconSrc, name, url, size = "lg" }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 hover:scale-110 transition-all"
      title={name}
    >
      <span className="sr-only">{name}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={sizeToClassnameMap[size]} aria-hidden="true" alt={name} src={iconSrc} />
    </a>
  );
};

export default SocialMediaIcon;
