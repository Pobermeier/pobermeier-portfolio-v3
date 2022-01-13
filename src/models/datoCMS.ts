import { ContactSectionProps } from "components/Contact/ContactSection";
import { FooterProps } from "components/Footer/Footer";
import { FullscreenPdfViewerProps } from "components/FullscreenPdfViewer/FullscreenPdfViewer";
import { HeroSectionProps } from "components/Hero/HeroSection";
import { NavbarProps } from "components/Navigation/Navbar";
import StaticContentBlock, {
  StaticContentBlockRecordProps,
} from "components/StaticContentBlock/StaticContentBlock";

export type CmsComponentName =
  | "StaticContentBlockRecord"
  | "HeroRecord"
  | "FullscreenPdfViewerRecord"
  | "ContactFormRecord"
  | "SectionRecord";

type GeneralCmsComponentProps = {
  __typename: CmsComponentName;
  id: string;
};

type StaticContentBlock = StaticContentBlockRecordProps & GeneralCmsComponentProps;
type HeroSection = HeroSectionProps & GeneralCmsComponentProps;
type FullscreenPdfViewer = FullscreenPdfViewerProps & GeneralCmsComponentProps;
type ContactSection = ContactSectionProps & GeneralCmsComponentProps;
type ContentSection = ContactSectionProps & GeneralCmsComponentProps;

export type CmsComponent =
  | StaticContentBlock
  | HeroSection
  | FullscreenPdfViewer
  | ContactSection
  | ContentSection;

export type PageData = {
  seo: SeoMetaTag[];
  title: string;
  slug: string;
  navbar: NavbarProps | null;
  sections: CmsComponent[];
  footer: FooterProps | null;
};

export type CmsData = {
  site: SiteData;
  page: PageData;
};

export type Icon = {
  url: string;
};

export type SocialMediaIconIdentifier = "github" | "linkedin" | "twitter";

export type SocialMediaIcon = {
  id: string;
  url: string;
  reactIconIdentifier: SocialMediaIconIdentifier;
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

type SeoMetaTag = {
  tag: string;
  content: string | null;
  attributes: { property?: string; content?: string } | null;
};

type FaviconMetaTag = {
  tag: string;
  content: string | null;
  attributes: { sizes: string; type: string; rel: string; href: string } | null;
};

type SiteData = {
  favicon: FaviconMetaTag[];
};
