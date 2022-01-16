/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Image, ResponsiveImageType } from "react-datocms";

import Button from "components/Buttons/Button";
import TechnologyLogo from "components/Logos/TechnologyLogo";
import { Project } from "models/datoCMS";

export interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none">
      {projects.map((project) => {
        const {
          id,
          title,
          subTitle,
          description,
          liveLink,
          showcaseImage,
          projectLogo,
          repoLink,
          technologiesUsed,
        } = project;

        return (
          <div
            key={id}
            className="flex flex-col rounded-xl bg-primary drop-shadow-lg overflow-hidden md:hover:drop-shadow-2xl md:hover:scale-105 transition-all"
          >
            <div className="flex-shrink-0">
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer noopener"
                className="block mt-2"
                title={title}
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image
                  layout="responsive"
                  objectFit="cover"
                  pictureClassName="rounded-t-xl"
                  data={showcaseImage.responsiveImage as ResponsiveImageType}
                />
                <span className="sr-only">{title}</span>
              </a>
            </div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-6 flex flex-col justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="sr-only">{title}</span>
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
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-100">{subTitle}</p>

                  <h3 className="text-xl font-semibold text-primary">{title}</h3>
                </div>
              </div>
              <div className="flex-1">
                <p className="mt-3 text-base text-gray-600 dark:text-gray-300">{description}</p>
              </div>
              <div className="my-4 flex flex-col justify-center items-center">
                <h3 className="text-md font-semibold text-primary mb-4">Technologies Used</h3>
                <ul className="grid gap-4 grid-flow-col">
                  {technologiesUsed?.map(({ id, logo, name }) => (
                    <li
                      key={id}
                      className="cursor-pointer bg-transparent drop-shadow-sm md:hover:scale-125"
                    >
                      <TechnologyLogo
                        technologyName={name}
                        imgSrc={logo.url}
                        height={32}
                        width={32}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              {(liveLink || repoLink) && (
                <div className="mt-4 flex items-center">
                  <div className="flex justify-center items-center space-x-8 mx-auto">
                    {liveLink && (
                      <Button
                        as="a"
                        isExternalLink
                        size="lg"
                        text="Live Link"
                        type="primary"
                        url={liveLink}
                      />
                    )}
                    {repoLink && (
                      <Button
                        as="a"
                        isExternalLink
                        size="lg"
                        text="Code"
                        type="secondary"
                        url={repoLink}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGrid;
