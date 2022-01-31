import { ResponsiveImageType } from "react-datocms";
// types
import { Project as ProjectType } from "models/datoCMS";
// components
import Button from "components/Buttons/Button";
import TechnologyLogo from "components/Icons/TechnologyLogo";
import CardWithTopImage from "components/Card/CardWithTopImage";

interface Props {
  /**
   * A single portfolio project
   */
  project: ProjectType;
}

const Project = ({
  project: {
    title,
    subTitle,
    description,
    liveLink,
    showcaseImage,
    projectLogo,
    repoLink,
    technologiesUsed,
  },
}: Props) => {
  return (
    <CardWithTopImage imageData={showcaseImage.responsiveImage as ResponsiveImageType}>
      <header className="flex">
        <div className="flex-shrink-0">
          <span className="sr-only">{title}</span>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            loading="lazy"
            className="h-12 w-12 rounded-lg"
            src={projectLogo.url}
            alt={title}
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{subTitle}</p>

          <h3 className="text-xl font-semibold text-primary">{title}</h3>
        </div>
      </header>
      <div className="flex-1">
        <p className="mt-3 text-base text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="my-4 flex flex-col justify-center items-center">
        <h4 className="text-md font-semibold text-primary mb-4">Technologies Used</h4>
        <ul className="grid gap-4 grid-flow-col">
          {technologiesUsed?.map(({ id, logo, name }) => (
            <li
              key={id}
              className="cursor-pointer bg-transparent drop-shadow-sm md:hover:scale-125"
            >
              <TechnologyLogo technologyName={name} imgSrc={logo.url} height={32} width={32} />
              <h5 className="sr-only" aria-hidden>
                {name}
              </h5>
            </li>
          ))}
        </ul>
      </div>
      {(liveLink || repoLink) && (
        <footer className="mt-4 flex items-center">
          <div className="flex justify-center items-center space-x-8 mx-auto">
            {liveLink && (
              <Button
                as="a"
                isExternalLink
                url={liveLink}
                ariaLabel={`${title} Live Link`}
                size="lg"
                text="Live Link"
                type="primary"
              />
            )}
            {repoLink && (
              <Button
                as="a"
                isExternalLink
                url={repoLink}
                ariaLabel={`${title} Code`}
                size="lg"
                text="Code"
                type="secondary"
              />
            )}
          </div>
        </footer>
      )}
    </CardWithTopImage>
  );
};

export default Project;
