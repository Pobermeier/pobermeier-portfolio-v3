import { FooterProps } from "components/Footer/Footer";
import { HeroSectionProps } from "components/Hero/HeroSection";
import { NavbarProps } from "components/Navigation/Navbar";
import StaticContentBlock, {
  StaticContentBlockRecordProps,
} from "components/StaticContentBlock/StaticContentBlock";

export type CmsComponentName = "StaticContentBlockRecord" | "HeroRecord";

type GeneralCmsComponentProps = {
  __typename: CmsComponentName;
  id: string;
};

type StaticContentBlock = StaticContentBlockRecordProps & GeneralCmsComponentProps;
type HeroSection = HeroSectionProps & GeneralCmsComponentProps;

type CmsComponent = StaticContentBlock | HeroSection;

export type PageData = {
  title: string;
  slug: string;
  navbar: NavbarProps | null;
  sections: CmsComponent[];
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

export type ResponsiveImage = {
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  alt?: string;
  title?: string;
  base64: string;
};
