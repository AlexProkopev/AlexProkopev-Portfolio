import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { titleStyles } from "./welcome-styles";

const WelcomeTitle = () => {
  const { t } = useTranslation("common");
  return (
    <div className="absolute top-[150px]">
      <motion.h1
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{ delay: 0.3, duration: 0.2, ease: "easeOut" }}
        className={titleStyles}
      >
        {t("welcomeStart")}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -400 }}
        transition={{ delay: 0.3, duration: 0.2, ease: "easeOut" }}
        className={titleStyles}
      >
        {t("welcomeEnd")}
      </motion.h1>
    </div>
  );
};

export default WelcomeTitle;
