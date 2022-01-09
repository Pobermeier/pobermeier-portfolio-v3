import { FooterProps } from "@/components/Navigation/Footer";
import { NavbarProps } from "@/components/Navigation/Navbar";

export type PageData = {
  navbar: NavbarProps | null;
  footer: FooterProps | null;
};

export type CmsData = {
  page: PageData;
};

export type Icon = {
  url: string;
};

export type SocialMediaIcon = {
  id: string;
  url: string;
  name: string;
  icon: Icon;
};

export type NavigationLink = {
  id: string;
  isExternalLink: boolean;
  title: string;
  url: string;
};

export type CallToAction = {
  id: string;
  icon: Icon;
  ctaType: "primary" | "secondary";
  isExternalLink: boolean;
  linkUrl: string;
  title: string;
};

export type CTAContainer = {
  callToActions: CallToAction[];
};
