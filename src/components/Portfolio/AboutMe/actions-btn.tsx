import useHandlers from "@/hooks/useHandlers";
import { motion } from "framer-motion";
import {
  actionsWrapperStyles,
  downloadCvBtnStyles,
  goToProjectBtnStyles,
} from "./about-me-styles";
import { useTranslation } from "next-i18next";

const ActionsButton = () => {
  const { handleScroll } = useHandlers();
  const {t} = useTranslation('aboutme');

  return (
    <motion.div
      initial={{ y: -200, rotateY: -45, opacity: 0 }}
      whileInView={{ y: 0, rotateY: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
      }}
      className={actionsWrapperStyles}
    >
      <button
        type="button"
        className={goToProjectBtnStyles}
        onClick={() => handleScroll("projects")}
      >
        {t("goToProjectBtn")}
      </button>
      <a
        href="/cv/cv-alex-prokopiev.pdf"
        download
        type="button"
        className={downloadCvBtnStyles}
      >
        {t("downloadCvBtn")}
      </a>
    </motion.div>
  );
};

export default ActionsButton;
