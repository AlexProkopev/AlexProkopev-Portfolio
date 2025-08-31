import { useEffect, useRef, useState } from "react";

const useMakeAnimation = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const timeOut = useRef<NodeJS.Timeout | undefined>(undefined);

  const animateText = (command: string) => {
    if (index < command.length) {
      const delay = 80 + Math.random() * 80;
      timeOut.current = setTimeout(() => {
        setText((prev) => prev + command[index]);
        setIndex((prev) => prev + 1);
      }, delay);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeOut.current);
  });

  return { text, animateText, index, setText };
};

export default useMakeAnimation;
