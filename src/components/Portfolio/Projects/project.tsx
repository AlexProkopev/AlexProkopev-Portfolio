import ProjectCards from "./project-list";
import TitleProject from "./title";
import { projectSectionStyles } from "./projects.styles";
import ShowCodeBtn from "@/components/ShowCodeBtn/show-code-btn";
import { useState } from "react";
import CodeBlockSection from "../../CodeBlock/code-block-section";
import { breadCrumb, code, fileName } from "./utils";
import { codeBlockWrap } from "../Hero/hero-styles";

const ProjectSection = () => {
  const [showCodeBlock, setShowCodeBlock] = useState(false);

  return (
    <section id="projects" className={projectSectionStyles}>
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
      <TitleProject />
      <ProjectCards />
    </section>
  );
};

export default ProjectSection;
