// types
import { Project } from "models/datoCMS";
// components
import ProjectComponent from "components/Project/Project";
import Grid from "components/Layout/Grid";

export interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <Grid>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectComponent project={project} />
        </li>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
