import FullscreenPdfViewer, {
  FullscreenPdfViewerProps,
} from "components/FullscreenPdfViewer/FullscreenPdfViewer";
import HeroSection, { HeroSectionProps } from "components/Hero/HeroSection";
import StaticContentBlock, {
  StaticContentBlockRecordProps,
} from "components/StaticContentBlock/StaticContentBlock";
import { CmsComponentName } from "models/datoCMS";

interface Props {
  typeName: CmsComponentName;
  componentProps: StaticContentBlockRecordProps | HeroSectionProps | FullscreenPdfViewerProps;
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

    default:
      return null;
  }
};

export default CmsComponentMapper;
