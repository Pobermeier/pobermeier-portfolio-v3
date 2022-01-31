// types
import { BlogSectionProps } from "components/Blog/BlogSection";
import { CTAContainerProps } from "components/Buttons/CTAContainer";
import { ContactSectionProps } from "components/Contact/ContactSection";
import { ContentSectionProps } from "components/ContentSection/ContentSection";
import { FooterProps } from "components/Footer/Footer";
import { FullscreenPdfViewerProps } from "components/FullscreenPdfViewer/FullscreenPdfViewer";
import { HeroSectionProps } from "components/Hero/HeroSection";
import { LogoSliderProps } from "components/LogoSlider/LogoSlider";
import { NavbarProps } from "components/Navigation/Navbar";
import { ProjectGridProps } from "components/Project/ProjectGrid";
import StaticContentBlock, {
  StaticContentBlockRecordProps,
} from "components/StaticContentBlock/StaticContentBlock";
import { TextWithImageProps } from "components/TextWithImage/TextWithImage";

export type CmsComponentName =
  | "StaticContentBlockRecord"
  | "HeroRecord"
  | "FullscreenPdfViewerRecord"
  | "ContactFormRecord"
  | "SectionRecord"
  | "LogoSliderRecord"
  | "TextWithImageRecord"
  | "CtaContainerRecord"
  | "BlogSectionRecord"
  | "ProjectGridRecord";

type GeneralCmsComponentProps = {
  __typename: CmsComponentName;
  id: string;
};

type StaticContentBlock = StaticContentBlockRecordProps & GeneralCmsComponentProps;
type HeroSection = HeroSectionProps & GeneralCmsComponentProps;
type FullscreenPdfViewer = FullscreenPdfViewerProps & GeneralCmsComponentProps;
type ContactSection = ContactSectionProps & GeneralCmsComponentProps;
type ContentSection = ContentSectionProps & GeneralCmsComponentProps;
type LogoSlider = LogoSliderProps & GeneralCmsComponentProps;
type TextWithImage = TextWithImageProps & GeneralCmsComponentProps;
type CTAContainer = CTAContainerProps & GeneralCmsComponentProps;
type ProjectGrid = ProjectGridProps & GeneralCmsComponentProps;
type BlogSection = BlogSectionProps & GeneralCmsComponentProps;

export type ContentSectionAllowedComponent =
  | LogoSlider
  | TextWithImage
  | CTAContainer
  | ProjectGrid;

export type CmsComponent =
  | StaticContentBlock
  | HeroSection
  | FullscreenPdfViewer
  | ContactSection
  | ContentSection
  | LogoSlider
  | TextWithImage
  | CTAContainer
  | BlogSection
  | ProjectGrid;

export type PageData = {
  title: string;
  slug: string;
  seo: SeoMetaTag[];
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
  responsiveImage?: ResponsiveImage;
};

export type SocialMediaIconIdentifier = "github" | "linkedin" | "twitter" | "email";

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
  icon?: Icon;
  ctaType: "primary" | "secondary";
  isExternalLink: boolean;
  linkUrl: string;
  title: string;
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
  bgColor?: string;
};

type SeoMetaTag = {
  tag: string;
  content: string | null;
  attributes: { property?: string; content?: string; name?: string } | null;
};

type FaviconMetaTag = {
  tag: string;
  content: string | null;
  attributes: { sizes: string; type: string; rel: string; href: string } | null;
};

export type SiteData = {
  favicon: FaviconMetaTag[];
};

type Technology = {
  id: string;
  name: string;
  logo: Icon;
};

export type Project = {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  projectType: "personal" | "professional";
  liveLink: string;
  repoLink: string;
  showcaseImage: Icon;
  projectLogo: Icon;
  technologiesUsed: Technology[];
};

export type PdfFile = {
  url: string;
};

type Image = {
  responsiveImage: ResponsiveImage;
};

type Author = {
  name: string;
  photo: Image;
};

type Category = {
  title: string;
};

export type BlogPost = {
  seo: SeoMetaTag[];
  author: Author;
  category: Category;
  content: string;
  id: string;
  createdAt: string;
  isfeatured: boolean;
  shortDescription: string;
  slug: string;
  title: string;
  image: Image;
  headerImage: Image;
};
