import { Code, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface ShowCodeBtnProps {
  showCode: boolean;
  setShowCode: (show: boolean) => void;
}

const ShowCodeBtn = ({ showCode, setShowCode }: ShowCodeBtnProps) => {
  return (
    <motion.button
      initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
      whileInView={{ scale: 0.5, rotate: -25, opacity: 1 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 15px rgba(34,211,238,0.6)",
      }}
      transition={{ type: "spring", stiffness: 80, damping: 10 }}
      title={showCode ? "Hide code" : "Show code"}
      onClick={() => setShowCode(!showCode)}
      className="hidden md:flex relative items-center justify-between w-[80px] h-[40px] bg-slate-800 rounded-full cursor-pointer px-4 "
    >
      <span
        className={`absolute top-1 left-2 w-[36px] h-[30px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 ${
          showCode ? "translate-x-[30px]" : ""
        }`}
      ></span>

      <div className="flex justify-between items-center gap-2 w-full z-10">
        <span
          className={`flex items-center justify-center w-[36px] transition-colors ${
            showCode ? "text-gray-400" : "text-white"
          }`}
        >
          <Eye size={18} />
        </span>
        <span
          className={`relative flex items-center justify-center w-[36px] transition-colors left-1 ${
            showCode ? "text-white" : "text-gray-400"
          }`}
        >
          <Code size={18} />
        </span>
      </div>
    </motion.button>
  );
};

export default ShowCodeBtn;
