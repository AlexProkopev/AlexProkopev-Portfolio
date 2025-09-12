import Image from "next/image";
import { motion } from "framer-motion";

interface ActionButtonMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ActionButtonMenu = ({ isOpen, setIsOpen }: ActionButtonMenuProps) => {
  return (
    <div className="backdrop-blur-md rounded-lg shadow-lg fixed top-0 left-1 right-4 z-50 flex items-center justify-between h-[60px] w-full px-4">
      <Image
        src="/logo/logo.png"
        alt="Logo"
        width={40}
        height={40}
        style={{ width: "auto", height: "40px" }}
      />
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ rotate: 0, scale: 0.8 }}
        animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={isOpen ? "/svg-icons/burger-close.svg" : "/svg-icons/burger.svg"}
          alt={isOpen ? "Close menu" : "Open menu"}
          width={24}
          height={24}
          className="filter invert brightness-0 "
        />
      </motion.button>
    </div>
  );
};

export default ActionButtonMenu;
