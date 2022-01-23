import dynamic from "next/dynamic";
// types
import { CmsComponent, CmsComponentName } from "models/datoCMS";
// components
const FullscreenPdfViewer = dynamic(
  () => import("components/FullscreenPdfViewer/FullscreenPdfViewer"),
);
const ContactSection = dynamic(() => import("components/Contact/ContactSection"));
const StaticContentBlock = dynamic(
  () => import("components/StaticContentBlock/StaticContentBlock"),
);
const HeroSection = dynamic(() => import("components/Hero/HeroSection"));
const ContentSection = dynamic(() => import("components/ContentSection/ContentSection"));
const LogoSlider = dynamic(() => import("components/LogoSlider/LogoSlider"));
const TextWithImage = dynamic(() => import("components/TextWithImage/TextWithImage"));
const CTAContainer = dynamic(() => import("components/Buttons/CTAContainer"));
const ProjectGrid = dynamic(() => import("components/Project/ProjectGrid"));
const BlogSection = dynamic(() => import("components/Blog/BlogSection"));

interface Props {
  typeName: CmsComponentName;
  componentProps: CmsComponent;
}

const componentMap = {
  StaticContentBlockRecord: StaticContentBlock,
  HeroRecord: HeroSection,
  FullscreenPdfViewerRecord: FullscreenPdfViewer,
  SectionRecord: ContentSection,
  LogoSliderRecord: LogoSlider,
  TextWithImageRecord: TextWithImage,
  CtaContainerRecord: CTAContainer,
  ProjectGridRecord: ProjectGrid,
  BlogSectionRecord: BlogSection,
  ContactFormRecord: ContactSection,
};

const CmsComponentMapper = ({ typeName, componentProps }: Props) => {
  if (typeName && componentMap[typeName]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = componentMap[typeName] as any;
    return <Component {...componentProps} />;
  }

  return null;
};

export default CmsComponentMapper;
