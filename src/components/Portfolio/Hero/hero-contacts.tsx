import ContactBtnList from "@/components/Welcome/contact-btn-list";
import { listStylesHero } from "./hero-styles";
import { useTranslation } from "next-i18next";
const Contacts = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <p className="text-secondary text-center md:text-start md:mt-[10px]">
        {t("contactsInfo")}
      </p>
      <ContactBtnList listStyles={listStylesHero} />
    </>
  );
};

export default Contacts;
