import { motion } from "framer-motion";
import { quoteHighlightStyles, quoteWrapperStyles } from "./about-me-styles";
import { useTranslation } from "next-i18next";

const MyQuotes = () => {
  const { t } = useTranslation("aboutme");
  return (
    <motion.p
      className={quoteWrapperStyles}
      initial={{ x: -200, rotateY: -45, opacity: 0 }}
      whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
      }}
    >
      <span className="block">{t("quoteStart")}</span>
      <span className={quoteHighlightStyles}>{t("quoteEnd")}</span>
    </motion.p>
  );
};

export default MyQuotes;
