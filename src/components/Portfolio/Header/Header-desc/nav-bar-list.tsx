import useHandlers from "@/hooks/useHandlers";
import { useTranslation } from "next-i18next";

const NavBarListDesc = () => {
  const { t } = useTranslation("common");
  const navItems = [
    { id: "home", label: t("home") },
    { id: "about-me", label: t("about") },
    { id: "projects", label: t("projects") },
  ];

  const { handleScroll } = useHandlers();

  return (
    <nav>
      <ul className="flex gap-3">
        {navItems.map(({ id, label }) => (
          <li
            key={id}
            className="hover:scale-90 hover:rotate-[-45deg] transition-all duration-300 ease-out "
          >
            <a
              href={`#${id}`}
              className={`cursor-pointer px-3 py-2 `}
              onClick={() => {
                handleScroll(id);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarListDesc;
