import ContactSection, { ContactSectionProps } from "components/Contact/ContactSection";
import FullscreenPdfViewer, {
  FullscreenPdfViewerProps,
} from "components/FullscreenPdfViewer/FullscreenPdfViewer";
import HeroSection, { HeroSectionProps } from "components/Hero/HeroSection";
import StaticContentBlock, {
  StaticContentBlockRecordProps,
} from "components/StaticContentBlock/StaticContentBlock";
import { CmsComponent, CmsComponentName } from "models/datoCMS";

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
