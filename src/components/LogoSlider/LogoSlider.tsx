import { useState } from "react";
// components
import TechnologyLogo from "components/Icons/TechnologyLogo";
import LogoSliderItem from "components/LogoSlider/LogoSliderItem";
import Button from "components/Buttons/Button";

type TechnologyLogo = {
  id: string;
  name: string;
  logo: {
    url: string;
  };
};

export interface LogoSliderProps {
  /**
   * Optional heading text displayed above the slider
   */
  title?: string;
  /**
   * A collection of technology logos
   */
  logos: TechnologyLogo[];
}

const LOGO_WIDTH = 6;
const MIN_LOGOS_TO_SHOW = 12;

const LogoSlider = ({ logos, title }: LogoSliderProps) => {
  const [showMore, setShowMore] = useState(false);

  const renderLogoCarousel = (): JSX.Element => (
    <ul>
      {logos.map(({ id, logo: { url }, name }) => (
        <LogoSliderItem height={60} width={60} imgSrc={url} technologyName={name} key={id} />
      ))}
    </ul>
  );

  const lessLogos = logos.slice(0, MIN_LOGOS_TO_SHOW);

  const logosToRender = showMore ? logos : lessLogos;

  const calculatedWidth = logos.length * LOGO_WIDTH;

  return (
    <section className="technologies my-12">
      <h3 className="text-center text-xl font-medium tracking-tight text-primary sm:text-2xl mb-10">
        {title}
      </h3>
      <div className="hidden md:block logo-carousel" style={{ width: `${calculatedWidth}rem` }}>
        <div className="logo-carousel__inner">
          {renderLogoCarousel()}
          {renderLogoCarousel()}
        </div>
      </div>
      <ul className="grid gap-x-4 gap-y-8 grid-cols-3 sm:grid-cols-4 md:hidden px-8 py-4">
        {logosToRender?.map(({ id, logo, name }) => (
          <li
            key={id}
            className="cursor-pointer md:hover:scale-125 text-primary flex flex-col justify-center items-center space-y-3"
          >
            <TechnologyLogo technologyName={name} imgSrc={logo.url} height={48} width={48} />
            <h4 className="text-center" aria-hidden="true">
              {name}
            </h4>
          </li>
        ))}
      </ul>
      {!showMore && (
        <div className="mt-8 flex justify-center md:hidden">
          <Button as="button" text="Show More" onClick={() => setShowMore(true)} size="sm" />
        </div>
      )}
    </section>
  );
};

export default LogoSlider;
