// types
import { Project } from "models/datoCMS";
// components
import ProjectComponent from "./Project";

export interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <ul className="mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectComponent project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectGrid;
