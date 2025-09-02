import { useScroll,motion } from "motion/react";

const ScrollProgress = () => {

    const {scrollYProgress} = useScroll()


  return (
    <motion.div
        style={{ scaleX: scrollYProgress }}
        className="none md:fixed md:block top-0 left-0 right-0 h-1 bg-blue-500 origin-top z-20 "
      />
  );
};

export default ScrollProgress;