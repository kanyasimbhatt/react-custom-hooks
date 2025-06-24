import { useEffect, useRef, useState } from "react";

//Goal: Avoid triggering hover effects immediately — only trigger if user lingers.

const useDelayedHoverIntent = <T extends HTMLButtonElement>(
  callback: () => unknown,
  delay: number
) => {
  const [isStillHover, setIsStillHover] = useState(true);
  const timer = useRef<NodeJS.Timeout>(null);
  const ref = useRef<T>(null);

  const handleMouseEnter = () => {
    console.log("enter");
    setIsStillHover(true);
    timer.current = setTimeout(() => {
      if (isStillHover) callback();
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timer.current) clearTimeout(timer.current);
    setIsStillHover(false);
  };

  useEffect(() => {
    ref.current!.addEventListener("mouseenter", handleMouseEnter);

    ref.current!.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timer.current) clearTimeout(timer.current);
      ref.current!.removeEventListener("mouseenter", handleMouseEnter);

      ref.current!.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return ref;
};

export default useDelayedHoverIntent;
