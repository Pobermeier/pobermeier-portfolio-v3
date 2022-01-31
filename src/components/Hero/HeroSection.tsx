import { Image } from "react-datocms";
import ReactMarkdown from "react-markdown";
// types
import { ResponsiveImage } from "models/datoCMS";
import { CTAContainerProps } from "components/Buttons/CTAContainer";
// components
import Button from "components/Buttons/Button";
import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";
import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";

export interface HeroSectionProps {
  /**
   * The main heading
   */
  heading: string;
  /**
   * The sub-headline
   */
  subHeading: string;
  /**
   * A background image which is rendered on the right-hand side
   */
  backgroundImage: {
    url: string;
    responsiveImage: ResponsiveImage;
  };
  /**
   * A collection of CTA-buttons
   */
  callToActions: CTAContainerProps[];
}

const HeroSection = ({ heading, subHeading, backgroundImage, callToActions }: HeroSectionProps) => {
  const renderCallToActions = () =>
    callToActions?.[0]?.callToActions?.map(
      ({ ctaType, icon, id, isExternalLink, linkUrl, title }) => (
        <Button
          key={id}
          text={title}
          isFullWidth={true}
          type={ctaType}
          as="a"
          iconUrl={icon?.url}
          isExternalLink={isExternalLink}
          url={linkUrl}
          size="lg"
        />
      ),
    );

  return (
    <section className="lg:relative" aria-label={heading}>
      <div className="mx-auto max-w-7xl w-full pt-12 md:pt-16 pb-12 md:pb-20 text-center lg:py-48 lg:text-left">
        <div className="relative px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h2
            className="text-4xl tracking-tight font-extrabold text-gray-800 dark:text-gray-200 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl fade-in-left"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <div className="mt-8 max-w-md mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:max-w-3xl fade-in-left offset-1">
            <ReactMarkdown>{subHeading}</ReactMarkdown>
          </div>
          <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-x-6 sm:space-y-0 fade-in-left offset-2">
            {renderCallToActions()}
          </div>
          <BackgroundPatternWrapper>
            <BackgroundPattern positionClassName="-z-10 right-full transform -translate-x-12 -translate-y-4 scale-150" />
          </BackgroundPatternWrapper>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          layout="responsive"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover lg:rounded-l-full"
          data={backgroundImage.responsiveImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
