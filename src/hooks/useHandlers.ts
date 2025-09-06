import { useRouter } from "next/navigation";
import Notiflix from "notiflix";
import React from "react";

function useHandlers() {
  const router = useRouter();
  const handlePressEnter = (
    e: React.KeyboardEvent,
    setShow: (show: boolean) => void
  ) => {
    if (e.key === "Enter") {
      setShow(false);
      setTimeout(() => {
        router.push("/portfolio");
      }, 500);
    }
  };

  const handleClickStart = (
    text: string,
    setShow: (show: boolean) => void,
    t: (key: string) => string
  ) => {
    if (text.length < 19) {
      Notiflix.Notify.failure(t("welcomeNotify"), {
        timeout: 560,
        position: "center-center",
        fontSize: "16px",
        width: "350px",
        borderRadius: "8px",
        cssAnimationStyle: "zoom",
        clickToClose: true,
      });

      return;
    }
    setShow(false);
    setTimeout(() => {
      router.push("/portfolio");
    }, 500);
  };

  const handleScroll = (section: string) => {
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

   const handleNavigate = (setIsOpen: (isOpen: boolean) => void, section: string) => {
   handleScroll(section)
    setTimeout(()=> setIsOpen(false), 300);
  };

  return {
    handlePressEnter,
    handleClickStart,
    handleScroll,
    handleNavigate
  };
}

export default useHandlers;
