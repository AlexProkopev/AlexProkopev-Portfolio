import HeroTitle from "./hero-title";
import Contacts from "./hero-contacts";
import useMediaQuery from "@/hooks/useMediaQuery";
import TechSkills from "./hero-tech-skills";
import ScrollDown from "./scroll-down";


const Hero = () => {

    const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className=" relative pt-[70px] overflow-hidden ">
      <HeroTitle />

      <img
        src="/gif/gif-dev.gif"
        width={isMobile ? 200 : 240}
        height={isMobile ? 200 : 200}
        alt="gif developer"
        className="mx-auto md:mx-0 md:absolute top-[45px] right-0 "
      />
      
      <Contacts />
      <TechSkills />
      <ScrollDown />
    </section>
  );
};

export default Hero;
