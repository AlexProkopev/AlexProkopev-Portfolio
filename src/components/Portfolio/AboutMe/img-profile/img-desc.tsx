import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Image from "next/image";
import { imgMobileStyles, wrapperImgDescStyles } from "../about-me-styles";

const ImgDesc = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  return (
    <>
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className={wrapperImgDescStyles}
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

export default ImgDesc;
