import { useEffect, useRef, useState } from "react";

// Reveal content in chunks progressively (e.g., for lazy FAQs or story cards).
// 🔧 Description:
// • Accepts an array of items and a delay interval.
// • Reveals n items every x milliseconds until all are shown.
// • Returns the currently visible items and a method to trigger reveal (like a useEffect or button).
// const { visibleItems, start } = useProgressiveReveal(items, {
//     step: 3,
//     interval: 500,
//    });

type PropsType = {
  step: number;
  delay: number;
};

const useProgressiveReveal = <T>(items: T[], { step, delay }: PropsType) => {
  const elementIndex = useRef(0);
  const timer = useRef<NodeJS.Timeout>(null);
  const [returnArray, setReturnArray] = useState<T[]>([]);
  const [trigger, setTrigger] = useState(false);

  const handleNewArrayCreate = () => {
    const newItems: T[] = [];
    let limit = elementIndex.current + step;
    limit = limit >= items.length ? items.length : limit;
    for (let i = elementIndex.current; i < limit; i++) {
      newItems.push(items[i]);
    }
    elementIndex.current = elementIndex.current + step;
    console.log(newItems);
    setReturnArray((items) => [...items, ...newItems]);
  };
  useEffect(() => {
    if (!trigger) return;
    timer.current = setInterval(() => {
      handleNewArrayCreate();
      if (elementIndex.current >= items.length) clearTimeout(timer.current!);
    }, delay);

    return () => {
      clearInterval(timer.current!);
    };
  }, [trigger, delay, step, items.length]);

  const triggerApp = () => {
    setTrigger(true);
  };

  return [returnArray, triggerApp] as const;
};

export default useProgressiveReveal;
