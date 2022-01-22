import dynamic from "next/dynamic";
// types
import { CmsComponent, CmsComponentName } from "models/datoCMS";
import { ContactSectionProps } from "components/Contact/ContactSection";
import { FullscreenPdfViewerProps } from "components/FullscreenPdfViewer/FullscreenPdfViewer";
import { HeroSectionProps } from "components/Hero/HeroSection";
import { StaticContentBlockRecordProps } from "components/StaticContentBlock/StaticContentBlock";
import { LogoSliderProps } from "components/LogoSlider/LogoSlider";
import { ContentSectionProps } from "components/ContentSection/ContentSection";
import { TextWithImageProps } from "components/TextWithImage/TextWithImage";
import { CTAContainerProps } from "components/Buttons/CTAContainer";
import { ProjectGridProps } from "components/Project/ProjectGrid";
import { BlogSectionProps } from "components/Blog/BlogSection";
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

const CmsComponentMapper = ({ typeName, componentProps }: Props) => {
  switch (true) {
    case typeName === "StaticContentBlockRecord":
      const { title, text } = componentProps as StaticContentBlockRecordProps;

      return <StaticContentBlock title={title} text={text} />;

    case typeName === "HeroRecord":
      const { backgroundImage, callToActions, heading, subHeading } =
        componentProps as HeroSectionProps;
      return (
        <HeroSection
          heading={heading}
          subHeading={subHeading}
          backgroundImage={backgroundImage}
          callToActions={callToActions}
        />
      );

    case typeName === "FullscreenPdfViewerRecord":
      const { pdfFile, pdfTitle } = componentProps as FullscreenPdfViewerProps;
      return <FullscreenPdfViewer pdfFile={pdfFile} pdfTitle={pdfTitle} />;

    case typeName === "SectionRecord":
      const {
        description: descriptionText,
        heading: headingText,
        dynamicContent,
        htmlId,
      } = componentProps as ContentSectionProps;
      return (
        <ContentSection
          heading={headingText}
          description={descriptionText}
          dynamicContent={dynamicContent}
          htmlId={htmlId}
        />
      );

    case typeName === "LogoSliderRecord":
      const { logos, title: logoSliderTitle } = componentProps as LogoSliderProps;
      return <LogoSlider logos={logos} title={logoSliderTitle} />;

    case typeName === "TextWithImageRecord":
      const { image, text: sideText } = componentProps as TextWithImageProps;
      return <TextWithImage image={image} text={sideText} />;

    case typeName === "CtaContainerRecord":
      const { callToActions: ctaCollection } = componentProps as CTAContainerProps;
      return <CTAContainer callToActions={ctaCollection} />;

    case typeName === "ProjectGridRecord":
      const { projects } = componentProps as ProjectGridProps;
      return <ProjectGrid projects={projects} />;

    case typeName === "BlogSectionRecord":
      const {
        posts,
        description: blogSectionDescription,
        heading: blogSectionHeading,
      } = componentProps as BlogSectionProps;
      return (
        <BlogSection
          posts={posts}
          description={blogSectionDescription}
          heading={blogSectionHeading}
        />
      );

    case typeName === "ContactFormRecord":
      const {
        ctaButtonText: callToAction,
        description,
        heading: contactFormheading,
        id,
      } = componentProps as ContactSectionProps;
      return (
        <ContactSection
          id={id}
          ctaButtonText={callToAction}
          description={description}
          heading={contactFormheading}
        />
      );

    default:
      return null;
  }
};

export default CmsComponentMapper;
