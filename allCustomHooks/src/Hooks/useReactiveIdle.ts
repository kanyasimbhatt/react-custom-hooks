import { useEffect, useRef, useState } from "react";

const useReactiveIdle = (
  callbackFunction: (...args: unknown[]) => unknown,
  timings: number[]
) => {
  const [isIdle, setIsIdle] = useState(true);
  const timingIndex = useRef(0);
  const timer = useRef<NodeJS.Timeout>(null);
  const movementEvents = ["mousemove", "mousedown", "keydown", "touchstart"];

  const createTimer = () => {
    timer.current = setTimeout(() => {
      if (isIdle) callbackFunction();
      timingIndex.current++;
      if (timingIndex.current === timings.length) return;
      createTimer();
    }, timings[timingIndex.current]);
  };

  useEffect(() => {
    const handleEvents = () => {
      setIsIdle(false);
      if (timer.current) clearTimeout(timer.current);
      timingIndex.current = 0;
      createTimer();
    };

    movementEvents.forEach((event: string) =>
      document.addEventListener(event, handleEvents)
    );

    createTimer();

    return () => {
      clearTimeout(timer.current!);
      movementEvents.forEach((event: string) =>
        document.removeEventListener(event, handleEvents)
      );
    };
  }, []);
};

export default useReactiveIdle;
