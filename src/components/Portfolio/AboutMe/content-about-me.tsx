import useMakeAnimation from "@/hooks/useMakeAnimation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  contentHeaderStyles,
  contentHighlightStyles,
  contentWrapperStyles,
} from "./about-me-styles";
import { useTranslation } from "next-i18next";

const AboutMeContent = () => {
  const { t } = useTranslation("aboutme");
  const content = "Fullstack React Developer...";
  const { text, animateText, index } = useMakeAnimation();

  useEffect(() => {
    animateText(content);
  }, [index, animateText, content]);
  return (
    <div className={contentWrapperStyles}>
      <motion.p
        className={contentHeaderStyles}
        initial={{ x: 200, rotateY: -45, opacity: 0 }}
        whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
       >
        {text}
        {text.length < 30 && text.length < 25 &&  "|"}
      </motion.p>

      <motion.p
        initial={{ x: -200, rotateY: -45, opacity: 0 }}
        whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
      >
        {t("descriptionStart")}{" "}
        <span className={contentHighlightStyles}>{t("descriptionMiddle")}</span>
        {t("descriptionEnd")}
      </motion.p>
    </div>
  );
};

export default AboutMeContent;
