import { FooterProps } from "components/Footer/Footer";
import { NavbarProps } from "components/Navigation/Navbar";
import StaticContentBlock, {
  StaticContentBlockRecordProps,
} from "components/StaticContentBlock/StaticContentBlock";

export type CmsComponentName = "StaticContentBlockRecord";

type GeneralCmsComponentProps = {
  __typename: CmsComponentName;
  id: string;
};

type StaticContentBlock = StaticContentBlockRecordProps & GeneralCmsComponentProps;

type CmsComponent = StaticContentBlock;

export type PageData = {
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
