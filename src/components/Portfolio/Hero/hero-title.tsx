import useMakeAnimation from "@/hooks/useMakeAnimation";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

import { useEffect } from "react";

const HeroTitle = () => {
  const content = "React.js, Next.js, TypeScript, Node.js, Docker, Git...";
  const { text, animateText, index } = useMakeAnimation();
  const { t } = useTranslation('common');

  useEffect(() => {
    animateText(content);
  }, [index, animateText]);



  return (
    <>
      <motion.h3
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        className="text-secondary font-bold text-2xl text-center md:text-start"
      >
         {t("developer")}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -400 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        className="text-secondary text-start mt-[25px] w-[330px] h-[48px]"
      >
        {text}
      </motion.p>
    </>
  );
};

export default HeroTitle;
