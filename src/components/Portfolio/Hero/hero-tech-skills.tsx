import useMediaQuery from "@/hooks/useMediaQuery";
import LogoLoop from "./tech-skills-animate";
import { useTranslation } from "next-i18next";

const imageLogos = [
  { src: "/svg-icons/development.svg", alt: "Development", href: "#" },
  { src: "/svg-icons/github.svg", alt: "GitHub", href: "https://github.com" },
  { src: "/svg-icons/next-dot.svg", alt: "Next.js", href: "https://nextjs.org" },
  { src: "/svg-icons/node.svg", alt: "Node.js", href: "https://nodejs.org" },
  { src: "/svg-icons/reactts.svg", alt: "React TS", href: "https://reactjs.org" },
  { src: "/svg-icons/typescript.svg", alt: "TypeScript", href: "https://www.typescriptlang.org" },
  { src: "/svg-icons/vitejs.svg", alt: "Vite", href: "https://vitejs.dev" },
];


const TechSkills = () => {
    const {t} = useTranslation("common");
    const isMobile = useMediaQuery("(max-width: 768px)");
  return (
     <div className="mt-[50px]">
           
            <p className="text-center text-sm text-secondary mb-[20px]">
              {t("technologies")}
            </p>
            
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={isMobile ? 34 : 48}
            gap={40}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
  );
};

export default TechSkills;