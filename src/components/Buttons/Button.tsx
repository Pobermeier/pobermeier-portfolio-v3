import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface Props {
  as?: "button" | "a";
  className?: string;
  iconUrl?: string;
  isExternalLink?: boolean;
  isFullWidth?: boolean;
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
  size = "md",
  text,
  type = "primary",
  url,
  onClick = () => {},
}: Props) => {
  const Tag = as;

  const computedClassName = classNames(
    "inline-flex",
    "items-center",
    "border",
    "border-transparent",
    "shadow-sm",
    "font-medium",
    "rounded-full",
    type === "primary" ? "text-white" : "text-black",
    type === "primary" ? "bg-green-600" : "bg-green-100",
    type === "primary" ? "hover:bg-green-800" : "hover:bg-green-400",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "focus:ring-green-800",
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
      {iconUrl && !isFullWidth && (
        <img src={iconUrl} alt={text} aria-hidden={true} className="-ml-1 mr-3 h-5 w-5" />
      )}
      {text}
    </>
  );

  if (as === "a" && isExternalLink) {
    return (
      <Link href={url as string}>
        <a className={computedClassName}>{buttonContent}</a>
      </Link>
    );
  }

  return (
    <Tag href={url} onClick={onClick} className={computedClassName}>
      {buttonContent}
    </Tag>
  );
};

export default Button;
