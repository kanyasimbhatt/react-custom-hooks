// 6. 🔁 useLoopUntil
// 🧠 Idea:
// Keep executing a callback in a loop until a condition is met or a timeout occurs.
// 🔧 Description:
// • Accepts a function to evaluate after each loop.
// • Supports interval-based execution.
// • Stops if:
// a) the condition returns true, or
// b) a max time or max attempts is reached.

import { useEffect, useRef } from "react";

// useLoopUntil({
//     interval: 100,
//     maxTime: 3000,
//     condition: () => isReady(),
//     onComplete: () => console.log('Ready!'),
//    });

type InputType = {
  interval: number;
  maxTime: number;
  condition: () => boolean;
  onComplete: () => unknown;
};

const useLoopUntil = ({
  interval,
  maxTime,
  condition,
  onComplete,
}: InputType) => {
  //   const intervalTimer = useRef<NodeJS.Timeout>(undefined);
  const iteration = useRef(0);

  useEffect(() => {
    const intervalTimer: NodeJS.Timeout = setInterval(() => {
      const output = condition();
      console.log(output);
      if (output && iteration.current * interval < maxTime) onComplete();
      else clearInterval(intervalTimer);
      iteration.current++;
    }, interval);
  }, []);
};

export default useLoopUntil;
