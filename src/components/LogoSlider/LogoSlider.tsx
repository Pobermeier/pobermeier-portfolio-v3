import LogoSliderItem from "components/LogoSlider/LogoSliderItem";

type TechnologyLogo = {
  id: string;
  name: string;
  logo: {
    url: string;
  };
};

export interface LogoSliderProps {
  title?: string;
  logos: TechnologyLogo[];
}

const LOGO_WIDTH = 6;

const LogoSlider = ({ logos, title }: LogoSliderProps) => {
  const renderLogoCarousel = (): JSX.Element => (
    <ul>
      {logos.map(({ id, logo: { url }, name }) => (
        <LogoSliderItem height={60} width={60} imgSrc={url} technologyName={name} key={id} />
      ))}
    </ul>
  );

  const calculatedWidth = logos.length * LOGO_WIDTH;

  return (
    <section className="technologies my-12">
      <h3 className="text-center text-xl font-medium tracking-tight text-primary sm:text-2xl mb-10">
        {title}
      </h3>
      <div className="logo-carousel" style={{ width: `${calculatedWidth}rem` }}>
        <div className="logo-carousel__inner">
          {renderLogoCarousel()}
          {renderLogoCarousel()}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
