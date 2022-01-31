// types
import { Project } from "models/datoCMS";
// components
import ProjectComponent from "components/Project/Project";
import Grid from "components/Layout/Grid";

export interface ProjectGridProps {
  /**
   * A collection of portfolio projects
   */
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <Grid tag="ul">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectComponent project={project} />
        </li>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
