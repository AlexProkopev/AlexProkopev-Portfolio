import { useState } from "react";
import { AnimatePresence} from "framer-motion";
import ActionButtonMenu from "./action-btn-menu";
import NavigateMobile from "./navigate";
const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <ActionButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence>
        {isOpen && (<NavigateMobile />)}
      </AnimatePresence>
      
    </>
  );
};

export default NavBarMobile;
