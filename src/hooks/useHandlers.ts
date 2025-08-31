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

  const handleClickStart = (text:string,setShow: (show: boolean) => void,t: (key: string) => string) => {
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

  return {
    handlePressEnter,
    handleClickStart
  };
}

export default useHandlers;
