import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Image from "next/image";
import { imgMobileStyles, wrapperImgMobileStyles } from "../about-me-styles";


const ImgMobile = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  return (
    <>
      {isMobile && (
        <motion.div
          initial={{ x: 200, rotateY: -45, opacity: 0 }}
          whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
          className={wrapperImgMobileStyles}
        >
          <Image
            src="/logo/profile.jpg"
            alt="About Me"
            width={180}
            height={180}
            className={imgMobileStyles}
          />
        </motion.div>
      )}
    </>
  );
};

export default ImgMobile;
