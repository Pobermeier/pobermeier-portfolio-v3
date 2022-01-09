import { FooterProps } from "@/components/Navigation/Footer";

export type PageData = {
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
};

export type CTAContainer = {
  callToActions: CallToAction[];
};
