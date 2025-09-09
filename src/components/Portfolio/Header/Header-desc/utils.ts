export const breadCrumb=[
          "portfolio",
          "src",
          "components",
          "Portfolio",
          "Header",
          "Header-desc",
          "portfolio-navbar-desc.tsx",
        ]

export const fileName = "src/components/Portfolio/Header/Header-desc/portfolio-navbar-desc.tsx"


export const code = `"use client";

import { listStylesHeader, styleLangButtonHeader } from "../header-styles";
import { useState } from "react";
import { codeBlockWrap, navStylesHeader } from "./nav-styles";
import Image from "next/image";
import NavBarListDesc from "./nav-bar-list";
import LangBtnList from "../../../Welcome/lng-btn-list";
import ShowCodeBtn from "@/components/ShowCodeBtn/show-code-btn";
import CodeBlockSection from "./code-block-header";
import { breadCrumb, code, fileName } from "./utils";

const NavBar = ({}) => {
  const [showCodeBlock, setShowCodeBlock] = useState(false);

  return (
    <header className={navStylesHeader}>
      <Image src="/logo/logo.png" alt="Close menu" width={60} height={60} />

      <LangBtnList
        styleButton={styleLangButtonHeader}
        listStyles={listStylesHeader}
        delay={0}
      />

      <ShowCodeBtn
       
        showCode={showCodeBlock}
        setShowCode={setShowCodeBlock}
      />

      <CodeBlockSection
        styles={codeBlockWrap}
        showCode={showCodeBlock}
        fileName={fileName}
        breadCrumb={breadCrumb}
        code={code}
      />

      <NavBarListDesc />
    </header>
  );
};

export default NavBar;

`