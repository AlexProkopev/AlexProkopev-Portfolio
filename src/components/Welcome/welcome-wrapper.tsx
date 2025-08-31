import WelcomeForm from "./welcome-form";
import WelcomeTitle from "./welcome-header";
import useHandlers from "@/hooks/useHandlers";
import { listStyles, styleButton, wrapperWelcome } from "./welcome-styles";

import ContactBtnList from "./contact-btn-list";
import LangBtnList from "./lng-btn-list";

interface WelcomeWrapperProps {
  text: string;
  setShow: (show: boolean) => void;
}

const WelcomeWrapper = ({ text, setShow }: WelcomeWrapperProps) => {
  const { handlePressEnter } = useHandlers();

  return (
    <div onKeyDown={(e) => handlePressEnter(e, setShow)} className={wrapperWelcome}>
      <LangBtnList styleButton={styleButton} listStyles={listStyles} delay={0.4} />
      <WelcomeTitle />
      <WelcomeForm text={text} setShow={setShow} />
      <ContactBtnList listStyles={listStyles} />
    </div>
  );
};

export default WelcomeWrapper;
