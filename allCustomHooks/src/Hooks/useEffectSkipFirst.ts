import { useEffect, useRef } from "react";

const useEffectSkipFirst = (
  callbackFunc: (...args: unknown[]) => unknown,
  dependency: unknown[]
) => {
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      return;
    } else {
      callbackFunc();
    }
  }, [...dependency]);
};

export default useEffectSkipFirst;
