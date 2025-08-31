"use client";


import Image from "next/image";
import { listStylesHeader, styleLangButtonHeader } from "../header-styles";
import LangBtnList from "../../../Welcome/lng-btn-list";

const NavBar = () => {
  return (
    <>
      <nav className="backdrop-blur-md rounded-lg shadow-lg flex justify-between items-center py-[15px] px-[20px] text-[white]">
        <Image
          src="/logo/logo.png"
          alt="Close menu"
          width={60}
          height={60}
          className=""
        />
        <LangBtnList styleButton={styleLangButtonHeader} listStyles={listStylesHeader} delay={0} />
        <ul className="flex gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
