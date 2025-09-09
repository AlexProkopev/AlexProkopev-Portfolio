export const fileName = "src/components/Portfolio/AboutMe/about-me.tsx"
export const breadCrumb = [ "portfolio", "src", "components", "Portfolio", "AboutMe", "about-me.tsx" ]
export const code = `import MyQuotes from "./my-quotes";
import AboutMeContent from "./content-about-me";
import ActionsButton from "./actions-btn";
import TitleAboutMe from "./title";
import ImgDesc from "./img-profile/img-desc";
import ImgMobile from "./img-profile/img-mobile";
import { sectionStyles } from "./about-me-styles";
import { useTranslation } from "next-i18next";
import ShowCodeBtn from "@/components/ShowCodeBtn/show-code-btn";
import { useState } from "react";
import CodeBlockSection from "../Header/Header-desc/code-block-header";
import { breadCrumb, code, fileName } from "./utils";
import { codeBlockWrap } from "../Hero/hero-styles";

const AboutMe = () => {
  const [showCodeBlock, setShowCodeBlock] = useState(false);
  const { ready } = useTranslation("aboutme");
  if (!ready) return <div>Loading...</div>;
  return (
    <section id="aboutme" className={sectionStyles}>
      <div className="absolute top-[40px] left-[-100px] z-50">
        <ShowCodeBtn showCode={showCodeBlock} setShowCode={setShowCodeBlock} />
      </div>
      <CodeBlockSection
        styles={codeBlockWrap}
        showCode={showCodeBlock}
        code={code}
        fileName={fileName}
        breadCrumb={breadCrumb}
      />
      <TitleAboutMe />
      <ImgMobile />
      <MyQuotes />
      <AboutMeContent />
      <ActionsButton />
      <ImgDesc />
    </section>
  );
};

export default AboutMe;
`;