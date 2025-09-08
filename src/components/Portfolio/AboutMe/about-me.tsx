import MyQuotes from "./my-quotes";
import AboutMeContent from "./content-about-me";
import ActionsButton from "./actions-btn";

import TitleAboutMe from "./title";
import ImgDesc from "./img-profile/img-desc";
import ImgMobile from "./img-profile/img-mobile";
import { sectionStyles } from "./about-me-styles";
import { useTranslation } from "next-i18next";
import ShowCodeBtn from "@/components/ShowCodeBtn/show-code-btn";
import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock/codeblock";

  const sampleCode = `import React, { useState } from 'react';
import { NextPage } from 'next';
import Header from '../components/Header';

const Home: NextPage = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
            ScrollX UI 
          </h1>
        </section>
      </main>
    </div>
  );
};

export default Home;`;

const AboutMe = () => {

  const [showCodeBlock, setShowCodeBlock] = useState(false);
  const {ready} = useTranslation('aboutme');
  if(!ready) return <div>Loading...</div>
  return (
    <section id="aboutme" className={sectionStyles}>
      <div className="absolute top-[150px] left-[-150px] z-50">
      <ShowCodeBtn
        code={'About Me Section'}
        showCode={showCodeBlock}
        setShowCode={setShowCodeBlock}
      />
    </div>
     {showCodeBlock && (
            <div className="absolute top-[50px] left-0 w-full h-full bg-black/50 z-50">
              <CodeBlock
                language="tsx"
                filename="src/home.tsx"
                code={sampleCode}
                highlightLines={[5, 11, 12]}
                breadcrumb={["scrollx-ui", "src", "home.tsx"]}
                showStats={true}
                theme="dark"
              />
            </div>
          )}
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
