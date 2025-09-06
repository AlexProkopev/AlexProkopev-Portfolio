import { motion } from "framer-motion";
import { titleStyles } from "./about-me-styles";
import { useTranslation } from "next-i18next";
const TitleAboutMe = () => {
    const { t } = useTranslation('aboutme');
  return (
    <motion.h3
        className={titleStyles}
        initial={{ x: -200, rotateY: -45, opacity: 0 }}
        whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
      >
       {t("title")}
      </motion.h3>
  );
};

export default TitleAboutMe;