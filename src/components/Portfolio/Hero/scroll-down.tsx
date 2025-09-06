import useHandlers from "@/hooks/useHandlers";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Image from "next/image";

const ScrollDown = () => {

  const isMobile = useMediaQuery("(max-width: 768px)");
  const { handleScroll } = useHandlers();

  return (
    <motion.button
      onClick={() => handleScroll('aboutme')}
      type="button"
      className="block mx-auto mt-[50px]"
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <Image
        src="/svg-icons/down-sign.svg"
        alt="Scroll Down"
        width={isMobile ? 50 : 100}
        height={isMobile ? 50 : 100}
      />
    </motion.button>
  );
};

export default ScrollDown;
