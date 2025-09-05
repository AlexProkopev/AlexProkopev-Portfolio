"use client";

import { Project } from "@/types/projectsData";
import ProjectItem from "./project-item";
import { projectData } from "@/utils/projectData";

const ProjectCards = () => {
  return (
    <div className="py-12 px-6">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projectData.map((project: Project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectCards;
