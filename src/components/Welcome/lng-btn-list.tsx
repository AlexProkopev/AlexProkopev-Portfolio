import { LANGUAGE } from "@/utils/language";
import ButtonLng from "../ButtonLng/button-lng-i18";

interface LangBtnListProps {
 styleButton: string;
 listStyles: string;
 delay: number;
}

const LangBtnList = ({ styleButton, listStyles, delay }: LangBtnListProps) => {
  return (
    <ul className={listStyles}>
      {LANGUAGE.map((lang: { id: string; language: string }) => (
        <ButtonLng
          key={lang.id}
          language={lang.language}
          id={lang.id}
          styles={styleButton}
          delay={delay}
        />
      ))}
    </ul>
  );
};

export default LangBtnList;
