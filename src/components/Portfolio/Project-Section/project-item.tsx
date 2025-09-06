"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/projectsData";
import ProjectItemBack from "./project-item-back";
import { useTranslation } from "next-i18next";
import {
  cardContentStyles,
  cardDescriptionStyles,
  cardTitleStyles,
  frontCardStyles,
  imageWrapperStyles,
  linkWrapperStyles,
  listItemStyles,
} from "./project-section.styles";

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const { t } = useTranslation("projects");
  return (
    <motion.li
      initial={{ x: -200, rotateY: -45, opacity: 0 }}
      whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
        duration: 0.6,
        delay: index * 0.1,
      }}
      className={listItemStyles}
    >
      <a href={project.link} target="_blank" className={linkWrapperStyles}>
        <div className={frontCardStyles}>
          <div className={imageWrapperStyles}>
            <Image
              src={project.image}
              alt={project.titleKey}
              fill
              className="object-cover"
            />
          </div>
          <div className={cardContentStyles}>
            <h3 className={cardTitleStyles}>{t(project.titleKey)}</h3>
            <p className={cardDescriptionStyles}>{t(project.descriptionKey)}</p>
          </div>
        </div>
        <ProjectItemBack dev={project.dev} />
      </a>
    </motion.li>
  );
};

export default ProjectItem;
