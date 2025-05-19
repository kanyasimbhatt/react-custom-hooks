// it can be any key from keybord.
// const isEscPressed = useKeyPress('Escape');

import { useState } from "react";

const useKeyPress = (key: string) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  document.addEventListener("keydown", (event) => {
    if (event.key === key) {
      setIsKeyPressed(true);
    }
  });
  return [isKeyPressed];
};

export default useKeyPress;
