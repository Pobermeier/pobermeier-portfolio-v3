import React from "react";
import { Image } from "react-datocms";

import Button from "components/Buttons/Button";
import BackgroundPatternWrapper from "components/BackgroundPattern/BackgroundPatternWrapper";
import BackgroundPattern from "components/BackgroundPattern/BackgroundPattern";
import { CTAContainer, ResponsiveImage } from "models/datoCMS";

export interface HeroSectionProps {
  heading: string;
  subHeading: string;
  backgroundImage: {
    url: string;
    responsiveImage: ResponsiveImage;
  };
  callToActions: CTAContainer[];
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
    <section className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-12 md:pt-16 pb-12 md:pb-20 text-center lg:py-48 lg:text-left">
        <div className="relative px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1
            className="text-4xl tracking-tight font-extrabold text-gray-800 dark:text-gray-200 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
            {subHeading}
          </p>
          <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-3 sm:space-x-3 sm:space-y-0">
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
