import Image from "next/image";
import { linkStyles } from "./welcome-styles";
import { motion } from "framer-motion";

interface ContactsButtonProps {
  id: string;
  path: string;
}

const ContactsButton = ({ id, path }: ContactsButtonProps) => {
  return (
    <li>
      <motion.a
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        whileHover={{ rotate: '360deg',scale: 1.2 }}
        transition={{ duration: 0.2, ease: "easeOut",  }}
        href={path}
        target='_blank'
        className={linkStyles}
      >
        <Image src={`/contact-png/${id}.png`} alt={id} width={24} height={24} style={{ objectFit: "contain" }} />
      </motion.a>
    </li>
  );
};

export default ContactsButton;
