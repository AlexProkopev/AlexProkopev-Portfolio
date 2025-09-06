"use client";

import { Project } from "@/types/projectsData";
import ProjectItem from "./project-item";
import { projectData } from "@/utils/projectData";
import { projectListStyles } from "./project-section.styles";

const ProjectCards = () => {
  return (
    <ul className={projectListStyles}>
      {projectData.map((project: Project, index) => (
        <ProjectItem key={project.id} project={project} index={index} />
      ))}
    </ul>
  );
};

export default ProjectCards;
