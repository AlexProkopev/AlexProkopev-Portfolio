import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";

interface ButtonLngProps {
  language: string;
  id: string;
  styles: string;
  delay: number;
}

const ButtonLng = ({ language, id, styles, delay }: ButtonLngProps) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (id: string): void => {
    i18n.changeLanguage(id);
  };
  return (
    <li>
      <motion.button
        initial={{ opacity: 0, x: 600 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 600 }}
        transition={{ delay: delay, duration: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        id={id}
        onClick={() => handleChangeLanguage(id)}
        className={styles}
      >
        <Image
          src={`/svg-icons/${id}.svg`}
          alt={language}
          width={24}
          height={24}
        />
      </motion.button>
    </li>
  );
};

export default ButtonLng;
