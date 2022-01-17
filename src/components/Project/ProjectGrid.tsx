// types
import { Project } from "models/datoCMS";
// components
import ProjectComponent from "./Project";

export interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none">
      {projects.map((project) => (
        <ProjectComponent project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectGrid;
