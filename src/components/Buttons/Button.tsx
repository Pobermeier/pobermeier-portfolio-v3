/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import classNames from "classnames";
// utils
import { noop } from "utils/utilFns";

export interface ButtonProps {
  ariaLabel?: string;
  as?: "button" | "a";
  className?: string;
  iconUrl?: string;
  isExternalLink?: boolean;
  isFullWidth?: boolean;
  isIconVisible?: boolean;
  onClick?: () => void;
  size?: "xs" | "sm" | "md" | "lg";
  text: string;
  type?: "primary" | "secondary";
  url?: string;
}

const Button = ({
  ariaLabel,
  as = "button",
  className = "",
  iconUrl,
  isExternalLink = false,
  isFullWidth = false,
  isIconVisible = true,
  size = "md",
  text,
  type = "primary",
  url,
  onClick = noop,
}: ButtonProps) => {
  const Tag = as;

  const computedClassName = classNames(
    "inline-flex items-center border shadow-sm font-medium rounded-full transition-all drop-shadow-lg md:hover:drop-shadow-xl md:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 cursor-pointer",
    type === "primary" ? "border-transparent" : "border-primary",
    type === "primary" ? "text-white" : "text-black",
    type === "primary" ? "bg-primary" : "bg-white",
    type === "primary" ? "md:hover:bg-green-800" : "md:hover:bg-gray-100",
    {
      "px-3": size === "xs",
      "py-2": size === "xs" || size === "sm" || size === "md",
      "px-4": size === "sm" || size === "md",
      "px-6": size === "lg",
      "py-3": size === "lg",
      "w-full": isFullWidth,
      "justify-center": isFullWidth,
    },
    className,
  );

  const buttonContent = (
    <>
      {iconUrl && isIconVisible && (
        <img
          width={24}
          height={24}
          loading="lazy"
          src={iconUrl}
          alt={text}
          aria-hidden={true}
          className="-ml-1 mr-3 h-6 w-6"
        />
      )}
      {text}
    </>
  );

  if (as === "a" && !isExternalLink) {
    return (
      <Link href={url as string}>
        <a className={computedClassName} onClick={onClick} aria-label={ariaLabel}>
          {buttonContent}
        </a>
      </Link>
    );
  }

  const anchorProps = {
    href: url,
    target: "_blank",
    rel: "noreferrer noopener",
  };

  const propsToRender = as === "a" ? anchorProps : undefined;

  return (
    <Tag {...propsToRender} aria-label={ariaLabel} onClick={onClick} className={computedClassName}>
      {buttonContent}
    </Tag>
  );
};

export default Button;
