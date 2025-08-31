"use client";

import { motion } from "framer-motion";
import { inputBtnStyles, inputStyles } from "./welcome-styles";
import { useTranslation } from "react-i18next";
import useHandlers from "@/hooks/useHandlers";

interface WelcomeFormProps {
  text: string;
  setShow: (show: boolean) => void;
}

const WelcomeForm = ({ text, setShow }: WelcomeFormProps) => {
  const { t, ready } = useTranslation("common");
  const { handleClickStart } = useHandlers();

  if (!ready) return <div>Loading...</div>;

  return (
    <div>
      <motion.input
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        type="text"
        value={text}
        readOnly
        className={inputStyles}
      />
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        onClick={() => handleClickStart(text, setShow, t)}
        type="button"
        className={inputBtnStyles}
      >
        Start
      </motion.button>
    </div>
  );
};

export default WelcomeForm;
