
import { motion } from "framer-motion";
import { listStylesHeader, styleButtonHeader } from "../header-styles";
import { useTranslation } from "next-i18next";
import LangBtnList from "../../../Welcome/lng-btn-list";
import useHandlers from "@/hooks/useHandlers";

interface NavigateMobileProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavigateMobile = ({ isOpen, setIsOpen }: NavigateMobileProps) => {
  const { t } = useTranslation("common");

  const {handleNavigate} = useHandlers()

  

  return (
    <motion.nav
      className="backdrop-blur-md bg-white/10 rounded-lg shadow-lg fixed top-0 left-0 w-full h-full text-white flex flex-col items-center justify-center gap-8 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <ul className="flex flex-col items-center justify-center gap-4">
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={() => handleNavigate(setIsOpen, "home")}
        >
          <p>{t("home")}</p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={() => handleNavigate(setIsOpen, "aboutme")}
        >
          <p>{t("about")}</p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={() => handleNavigate(setIsOpen, "projects")}
        >
          <p>{t("projects")}</p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={() => handleNavigate(setIsOpen, "contact")}
        >
          <p>{t("contact")}</p>
        </motion.li>
      </ul>

      <LangBtnList
        styleButton={styleButtonHeader}
        listStyles={listStylesHeader}
        delay={0}
      />
    </motion.nav>
  );
};

export default NavigateMobile;
