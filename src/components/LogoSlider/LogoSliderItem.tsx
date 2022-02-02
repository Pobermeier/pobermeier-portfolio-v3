// components
import TechnologyLogo from "components/Icons/TechnologyLogo";

interface Props {
  /**
   * The name of the technology which will be displayed on hover (desktop) and below the component (mobile)
   */
  technologyName: string;
  /**
   * The image url
   */
  imgSrc: string;
  /**
   * The width of the logo icon
   */
  width: number;
  /**
   * The height of the logo icons
   */
  height: number;
}

const LogoSliderItem = (props: Props) => {
  return (
    <li className="logo-carousel__item">
      <TechnologyLogo {...props} />
      <h4 className="text-primary" aria-hidden>
        {props.technologyName}
      </h4>
    </li>
  );
};

export default LogoSliderItem;
