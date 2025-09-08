import useHandlers from "@/hooks/useHandlers";
import { useTranslation } from "next-i18next";

const NavBarListDesc = () => {
  const { t } = useTranslation("common");
  const { handleScroll } = useHandlers();
  const navItems = [
    { id: "home", label: t("home") },
    { id: "aboutme", label: t("about") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];
  return (
    <nav>
      <ul className="flex gap-3">
        {navItems.map(({ id, label }) => (
          <li
            key={id}
            className="cursor-pointer hover:text-[#ff0000] transition-all duration-300 ease-out"
            onClick={() => handleScroll(id)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarListDesc;
