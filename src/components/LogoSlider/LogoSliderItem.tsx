// components
import TechnologyLogo from "components/Icons/TechnologyLogo";

interface Props {
  technologyName: string;
  imgSrc: string;
  width: number;
  height: number;
}

const LogoSliderItem: React.FC<Props> = (props) => {
  return (
    <li className="logo-carousel__item">
      <TechnologyLogo {...props} />
      <h4 className="sr-only" aria-hidden>
        {props.technologyName}
      </h4>
    </li>
  );
};

export default LogoSliderItem;
