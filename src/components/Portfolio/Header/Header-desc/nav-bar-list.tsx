import useHandlers from "@/hooks/useHandlers";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const NavBarListDesc = () => {
  const { t } = useTranslation("common");
  const navItems = [
    { id: "home", label: t("home") },
    { id: "aboutme", label: t("about") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];

  const [active, setActive] = useState(navItems[0].id);
  const { handleScroll } = useHandlers();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <ul className="flex gap-3">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`cursor-pointer hover:text-[#ff0000] transition-all duration-300 ease-out ${
                active === id ? "text-[#d3baba] underline" : ""
              }`}
              onClick={() => {
                handleScroll(id);
                setActive(id);
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
