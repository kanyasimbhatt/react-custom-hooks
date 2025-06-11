import { useEffect, useRef, useState } from "react";

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
