import ProjectCards from "./project-list";
import TitleProject from "./title";
import { projectSectionStyles } from "./project-section.styles";

const ProjectSection = () => {
  return (
    <section id="projects" className={projectSectionStyles}>
      <TitleProject />
      <ProjectCards />
    </section>
  );
};

export default ProjectSection;
