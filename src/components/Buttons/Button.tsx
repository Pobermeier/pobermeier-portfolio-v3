/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import classNames from "classnames";

import { noop } from "utils/utilFns";

interface Props {
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
}: Props) => {
  const Tag = as;

  const computedClassName = classNames(
    "inline-flex",
    "items-center",
    "border",
    "shadow-sm",
    "font-medium",
    "rounded-full",
    "transition-all",
    "hover:scale-105",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "focus:ring-green-800",
    "cursor-pointer",
    type === "primary" ? "border-transparent" : "border-primary",
    type === "primary" ? "text-white" : "text-black",
    type === "primary" ? "bg-primary" : "bg-white",
    type === "primary" ? "hover:bg-green-800" : "hover:bg-gray-100",
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
        <a className={computedClassName} onClick={onClick}>
          {buttonContent}
        </a>
      </Link>
    );
  }

  return (
    <Tag
      href={url}
      onClick={onClick}
      className={computedClassName}
      target="_blank"
      rel="noreferrer noopener"
    >
      {buttonContent}
    </Tag>
  );
};

export default Button;
