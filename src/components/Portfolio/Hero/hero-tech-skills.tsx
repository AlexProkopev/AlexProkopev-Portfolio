import useMediaQuery from "@/hooks/useMediaQuery";
import LogoLoop from "./tech-skills-animate";
import { useTranslation } from "next-i18next";

const imageLogos = [
  { src: "/svg-icons/development.svg", alt: "Development", href: "#" },
  { src: "/svg-icons/github.svg", alt: "GitHub", href: "https://github.com" },
  {
    src: "/svg-icons/next-dot.svg",
    alt: "Next.js",
    href: "https://nextjs.org",
  },
  { src: "/svg-icons/node.svg", alt: "Node.js", href: "https://nodejs.org" },
  {
    src: "/svg-icons/reactts.svg",
    alt: "React TS",
    href: "https://reactjs.org",
  },
  {
    src: "/svg-icons/typescript.svg",
    alt: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { src: "/svg-icons/vitejs.svg", alt: "Vite", href: "https://vitejs.dev" },
  {
    src: "/svg-icons/tailwindcss.svg",
    alt: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    src: "/svg-icons/mongodb.svg",
    alt: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    src: "/svg-icons/html-5.svg",
    alt: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: "/svg-icons/css3.svg",
    alt: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    src: "/svg-icons/api.svg",
    alt: "API",
    href: "https://developer.mozilla.org/en-US/docs/Web/API",
  },
  {
    src: "/svg-icons/bootstrap.svg",
    alt: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  {
    src: "/svg-icons/material-ui.svg",
    alt: "Material UI",
    href: "https://mui.com",
  },
  {
    src: "/svg-icons/light-redux.svg",
    alt: "Light Redux",
    href: "https://redux-toolkit.js.org/",
  },
  { src: "/svg-icons/vercel.svg", alt: "Vercel", href: "https://vercel.com" },
  {
    src: "/svg-icons/telegram.svg",
    alt: "Telegram",
    href: "https://telegram.org",
  },
];

const TechSkills = () => {
  const { t } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="mt-[50px]">
      <h4 className="text-center text-sm  text-secondary mb-[20px] md:text-2xl">
        {t("technologies")}
      </h4>

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
