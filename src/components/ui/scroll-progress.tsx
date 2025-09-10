import { useScroll,motion } from "motion/react";

const ScrollProgress = () => {
    const {scrollYProgress} = useScroll()
  return (
    <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed md:block top-0 left-0 right-0 h-1 bg-blue-600 origin-top z-50"
      />
  );
};

export default ScrollProgress;