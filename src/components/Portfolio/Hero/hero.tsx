import HeroTitle from "./hero-title";
import Contacts from "./hero-contacts";
import useMediaQuery from "@/hooks/useMediaQuery";
import TechSkills from "./hero-tech-skills";
import ScrollDown from "./scroll-down";
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

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [showCodeBlock, setShowCodeBlock] = useState(false);

  return (
    <>
    
    <div className="absolute top-[150px] left-[150px]">
      <ShowCodeBtn
        code={'Hero Section'}
        showCode={showCodeBlock}
        setShowCode={setShowCodeBlock}
      />
    </div>
    <section id="home" className="relative pt-[140px] overflow-hidden">
     
        
     

      {showCodeBlock && (
        <div className="absolute top-[170px] left-0 w-full h-full bg-black/50 z-50">
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
      <HeroTitle />

      <img
        src="/gif/gif-dev.gif"
        width={isMobile ? 200 : 240}
        height={isMobile ? 200 : 200}
        alt="gif developer"
        className="mx-auto md:mx-0 md:absolute top-[100px] right-0 "
      />

      <Contacts />
      <TechSkills />
      <ScrollDown />
    </section>
    </>
  );
};

export default Hero;
