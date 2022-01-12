import React from "react";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

type SizeMap = Record<IconSize, string>;

interface Props {
  name: string;
  url: string;
  iconSrc: string;
  size?: IconSize;
}

const sizeMap: SizeMap = {
  xs: "2",
  sm: "3",
  md: "4",
  lg: "5",
  xl: "6",
  xxl: "7",
  xxxl: "8",
};

const SocialMediaIcon = ({ iconSrc, name, url, size = "lg" }: Props) => {
  const computedSize = sizeMap[size];

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 hover:scale-110 transition-all"
      title={name}
    >
      <span className="sr-only">{name}</span>
      <img
        className={`h-${computedSize} w-${computedSize}`}
        aria-hidden="true"
        alt={name}
        src={iconSrc}
      />
    </a>
  );
};

export default SocialMediaIcon;
