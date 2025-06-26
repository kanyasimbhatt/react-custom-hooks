// useOnClickOutside: Detects when a user clicks outside the given DOM node and runs a callback. This hook doesn't return anything;
// it just listens to outside clicks.

// const ref = useRef(null);
// useOnClickOutside(ref, () => setIsOpen(false));

import { useEffect } from "react";

const useClickOnOutside = <T extends HTMLElement | null>(
  node: React.RefObject<T>,
  callback: (...args: unknown[]) => unknown | void
) => {
  const handleClick = (event: MouseEvent) => {
    if (event.target === node.current) {
      return;
    }
    callback();
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useClickOnOutside;
