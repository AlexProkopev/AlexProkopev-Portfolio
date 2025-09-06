import MyQuotes from "./my-quotes";
import AboutMeContent from "./content-about-me";
import ActionsButton from "./actions-btn";

import TitleAboutMe from "./title";
import ImgDesc from "./img-profile/img-desc";
import ImgMobile from "./img-profile/img-mobile";
import { sectionStyles } from "./about-me-styles";
import { useTranslation } from "next-i18next";

const AboutMe = () => {

  const {ready} = useTranslation('aboutme');
  if(!ready) return <div>Loading...</div>
  return (
    <section id="aboutme" className={sectionStyles}>
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
