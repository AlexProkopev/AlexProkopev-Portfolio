import { useTranslation } from "next-i18next";
import ProjectCards from "./project-list";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const { t } = useTranslation("common");
  return (
    <section className="mt-[30px] mb-[100px] text-secondary text-center text-3xl font-bold md:mt-[60px] xl:mt-[100px]">
      <motion.h2
        className="text-xl md:text-4xl font-bold text-center mb-10 text-white"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t("myProjects")}
      </motion.h2>
      <ProjectCards />
    </section>
  );
};

export default ProjectSection;
