"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/projectsData";
import ProjectItemBack from "./project-item-back";

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group [perspective:1000px]"
    >
      <a
        href={project.link}
        target="_blank"
        className="relative block w-full h-64 [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
      >
        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg bg-[#0f0f1a] [backface-visibility:hidden]">
          <div className="relative w-full h-40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* BACK */}
        <ProjectItemBack dev={project.dev} />
      </a>
    </motion.li>
  );
};

export default ProjectItem;
