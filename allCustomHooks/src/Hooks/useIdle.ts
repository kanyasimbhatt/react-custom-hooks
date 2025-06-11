import { useEffect, useRef, useState } from "react";

//use ref for storing the reference to the setTimeout timer
//create a function for useEffect, use setInterval, in handleEvents restart the timer after clearing

const movementEvents = ["mousemove", "mousedown", "keydown", "touchstart"];

const useIdle = (delay: number) => {
  const [isIdle, setIsIdle] = useState(true);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const setTimer = () => {
      timer.current = setTimeout(() => {
        setIsIdle(true);
      }, delay);
    };

    const handleEvents = () => {
      setIsIdle(false);
      if (timer.current) clearTimeout(timer.current);
      setTimer();
    };

    movementEvents.forEach((event: string) =>
      document.addEventListener(event, handleEvents)
    );

    setTimer();

    return () => {
      clearTimeout(timer.current!);
      movementEvents.forEach((event: string) =>
        document.removeEventListener(event, handleEvents)
      );
    };
  }, [delay]);

  return isIdle;
};

export default useIdle;
