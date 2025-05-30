// 🧠 3. useEventListener
// Problem: Attach and clean up an event listener on any DOM element or window.

import { useEffect, useRef } from "react";

// // useEventListener("resize", () => { console.log("Window resized") });

export const useEventListener = <T extends HTMLElement>(
  event: string,
  callbackFunction: () => void
) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current!.addEventListener(event, callbackFunction);
    return () => {
      ref.current?.removeEventListener(event, callbackFunction);
    };
  }, [ref.current]);

  return ref;
};
