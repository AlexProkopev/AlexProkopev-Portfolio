"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { motion } from "framer-motion";

export const Loader = () => {
  return (
    
  <BackgroundPaths
  className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-slate-900 z-50"
  svgOptions={{ duration: 8 }}
>
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-cyan-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.span
        className="absolute mt-24 text-cyan-400 font-semibold tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Loading...
      </motion.span>
      </BackgroundPaths>
   
  );
};
