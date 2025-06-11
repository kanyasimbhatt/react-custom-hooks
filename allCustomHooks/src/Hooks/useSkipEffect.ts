import { useEffect, useRef } from "react";

const useSkipEffect = (
  functionToCall: (stop: () => void) => unknown,
  dependency: unknown[]
) => {
  const ref = useRef(false);

  const stop = () => {
    ref.current = true;
  };

  useEffect(() => {
    if (ref.current) return;
    functionToCall(stop);
  }, [...dependency]);
};

export default useSkipEffect;
