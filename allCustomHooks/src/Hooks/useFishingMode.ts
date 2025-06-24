// useFishingMode
// 🧠 Idea:
// Simulates random action triggers after a random wait — like a “fishing” game or surprise element.
// 🔧 Description:
// • Waits a random interval between min–max.
// • Triggers a callback (e.g., “Fish caught!”) — resets if user cancels early.
// const { start, cancel } = useFishingMode({
//     minDelay: 1000,
//     maxDelay: 5000,
//     onCatch: () => alert("🎣 You caught a fish!"),
//    });

import { useRef } from "react";

type ChildrenType = {
  minDelay: number;
  maxDelay: number;
  onCatch: () => unknown;
};

const useFishingMode = ({ minDelay, maxDelay, onCatch }: ChildrenType) => {
  const delay = useRef(Math.random() * (maxDelay - minDelay) + minDelay);

  const timerRef = useRef<NodeJS.Timeout>(null);

  const start = () => {
    const setTimer = () => {
      timerRef.current = setTimeout(() => {
        onCatch();
        delay.current = Math.random() * (maxDelay - minDelay) + minDelay;
        setTimer();
      }, delay.current);
    };

    setTimer();
  };

  const cancel = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return [start, cancel] as const;
};

export default useFishingMode;
