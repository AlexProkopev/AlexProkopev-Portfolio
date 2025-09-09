export const fileName = "src/components/Portfolio/Hero/hero.tsx"
export const breadCrumb = ["portfolio", "src", "components", "Portfolio", "Hero", "hero.tsx"]
export const code = `import HeroTitle from "./hero-title";
import Contacts from "./hero-contacts";
import useMediaQuery from "@/hooks/useMediaQuery";
import TechSkills from "./hero-tech-skills";
import ScrollDown from "./scroll-down";
import ShowCodeBtn from "@/components/ShowCodeBtn/show-code-btn";
import { useState } from "react";
import Image from "next/image";
import {
  btnCodeWrapper,
  codeBlockWrap,
  heroGif,
  sectionHero,
} from "./hero-styles";
import CodeBlockSection from "../Header/Header-desc/code-block-header";
import { breadCrumb, code, fileName } from "./utils";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [showCodeBlock, setShowCodeBlock] = useState(false);

  return (
    <section id="home" className={sectionHero}>
      <div className={btnCodeWrapper}>
        <ShowCodeBtn showCode={showCodeBlock} setShowCode={setShowCodeBlock} />
      </div>
      <CodeBlockSection
        showCode={showCodeBlock}
        styles={codeBlockWrap}
        fileName={fileName}
        breadCrumb={breadCrumb}
        code={code}
      />
      <HeroTitle />

      <Image
        src="/gif/gif-dev.gif"
        width={isMobile ? 200 : 240}
        height={isMobile ? 200 : 200}
        alt="gif developer"
        className={heroGif}
      />

      <Contacts />
      <TechSkills />
      <ScrollDown />
    </section>
  );
};

export default Hero;

`;