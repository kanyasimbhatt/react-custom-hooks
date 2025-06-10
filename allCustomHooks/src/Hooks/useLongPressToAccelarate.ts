import { useEffect, useRef } from "react";

const useLongPressToAccelarate = (
  callbackFunction: (...args: unknown[]) => unknown
) => {
  const ref = useRef<HTMLElement>(null);
  const counter = useRef(1);
  const delay = useRef(1000);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const onPress = () => {
      interval = setInterval(() => {
        callbackFunction();
        counter.current++;
        if (counter.current === 5) {
          counter.current = 0;
          delay.current = delay.current / 2;
          console.log(delay.current);
          clearInterval(interval);
          onPress();
        }
      }, delay.current);
    };

    const onUnPress = () => {
      clearInterval(interval);
      counter.current = 0;
      delay.current = 1000;
    };

    ref.current!.addEventListener("mousedown", onPress);
    ref.current!.addEventListener("mouseup", onUnPress);

    return () => {
      clearInterval(interval);
      ref.current!.removeEventListener("mouseDown", onPress);
      ref.current!.removeEventListener("mouseup", onUnPress);
    };
  }, []);

  return ref as React.RefObject<HTMLButtonElement>;
};

export default useLongPressToAccelarate;
