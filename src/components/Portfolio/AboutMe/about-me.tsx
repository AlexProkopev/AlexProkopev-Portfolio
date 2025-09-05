import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import MyQuotes from "./my-quotes";
import AboutMeContent from "./content-about-me";
import ActionsButton from "./actions-btn";

const AboutMe = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section className="text-secondary px-4 py-8 max-w-[800px] mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6 tracking-wide">
        About Me
      </h3>

      
        {isMobile && (
          <Image
            src="/logo/profile.jpg"
            alt="About Me"
            width={180}
            height={180}
            className=" rounded-full mx-auto shadow-lg shadow-[#00e0ff]/20"
          />
        )}

        <MyQuotes />
        <AboutMeContent />
        <ActionsButton />

    </section>
  );
};

export default AboutMe;
