import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { titleStyles } from "./project-section.styles";
const TitleProject = () => {
    const { t } = useTranslation("projects");
    
  return (
     <motion.h2
        className={titleStyles}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t("projects_section_title")}
      </motion.h2>
  );
};

export default TitleProject;