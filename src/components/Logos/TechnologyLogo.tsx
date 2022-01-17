/* eslint-disable @next/next/no-img-element */
interface Props {
  technologyName: string;
  imgSrc: string;
  width: number;
  height: number;
}

const TechnologyLogo: React.FC<Props> = ({ width, height, imgSrc, technologyName }) => {
  return (
    <img
      loading="lazy"
      width={width}
      height={height}
      src={imgSrc}
      alt={technologyName}
      title={technologyName}
    />
  );
};

export default TechnologyLogo;
