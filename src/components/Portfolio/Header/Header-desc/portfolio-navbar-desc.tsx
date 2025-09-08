"use client";

import { listStylesHeader, styleLangButtonHeader } from "../header-styles";
import { useState } from "react";
import { navStylesHeader } from "./nav-styles";
import Image from "next/image";
import NavBarListDesc from "./nav-bar-list";
import CodeBlockHeader from "./code-block-header";
import LangBtnList from "../../../Welcome/lng-btn-list";
import ShowCodeBtn from "@/components/ShowCodeBtn/show-code-btn";


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
          code={""}
          showCode={showCodeBlock}
          setShowCode={setShowCodeBlock}
        />

        <CodeBlockHeader showCode={showCodeBlock} />

        <NavBarListDesc />
      </header>
  );
};

export default NavBar;
