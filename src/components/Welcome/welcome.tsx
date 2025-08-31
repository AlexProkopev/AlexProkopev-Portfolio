"use client";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import WelcomeWrapper from "./welcome-wrapper";
import useMakeAnimation from "@/hooks/useMakeAnimation";

export default function WelcomeInput() {
  const command = "> npm run portfolio";
  const { text, animateText, index } = useMakeAnimation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    animateText(command);
  }, [index, animateText]);

  useEffect(() => {
    setShow(true);
  }, [text]);

  return (
    <AnimatePresence>
      {show && <WelcomeWrapper text={text} setShow={setShow} />}
    </AnimatePresence>
  );
}
