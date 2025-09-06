"use client";

import { useTranslation } from "next-i18next";
import PortfolioHeader from "./Header/portfolio-header";
import Hero from "./Hero/hero";
import ProjectSection from "./Project-Section/project-section";
import ScrollProgress from "./ui/scroll-progress";
import AboutMe from "./AboutMe/about-me";

const Portfolio = () => {
  const { ready } = useTranslation();

  if (!ready) return <div>Loading...</div>;

  return (
    <div className=" min-h-[100vh] bg-[radial-gradient(circle,rgba(7,26,145,1)_0%,rgba(0,0,0,1)_100%)] overflow-hidden">
      <ScrollProgress />

      <PortfolioHeader />

      <main className="container">
        <Hero />

        <AboutMe />
        <ProjectSection />

        <section></section>
        <section>Experience Portfolio Section</section>
      </main>
    </div>
  );
};

export default Portfolio;
