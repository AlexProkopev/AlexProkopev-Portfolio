"use client";

import Image from "next/image";
import { listStylesHeader, styleLangButtonHeader } from "../header-styles";
import LangBtnList from "../../../Welcome/lng-btn-list";
import useHandlers from "@/hooks/useHandlers";
import { useTranslation } from "next-i18next";

const NavBar = ({}) => {
  const { handleScroll } = useHandlers();
  const {t} = useTranslation('common')
  return (
    <>
      <nav className="fixed backdrop-blur-md bg-white/10  z-50 top-0 left-0 mb-[20px] w-full rounded-lg shadow-lg flex justify-between items-center py-[15px] px-[20px] text-[white]">
        <Image
          src="/logo/logo.png"
          alt="Close menu"
          width={60}
          height={60}
          className=""
        />
        <LangBtnList
          styleButton={styleLangButtonHeader}
          listStyles={listStylesHeader}
          delay={0}
        />
        <ul className="flex gap-3">
          <li
            className="cursor-pointer hover:text-[#ff0000] transition-all duration-300 ease-out"
            onClick={() => handleScroll("home")}
          >
            {t("home")}
          </li>
          <li
            className="cursor-pointer  hover:text-[#ff0000] transition-all duration-300 ease-out"
            onClick={() => handleScroll("aboutme")}
          >
            {t("about")}
          </li>
          <li
            className="cursor-pointer  hover:text-[#ff0000] transition-all duration-300 ease-out"
            onClick={() => handleScroll("projects")}
          >
            {t("projects")}
          </li>
          <li
            className="cursor-pointer  hover:text-[#ff0000] transition-all duration-300 ease-out"
            onClick={() => handleScroll("contact")}
          >
            {t("contact")}
            
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
