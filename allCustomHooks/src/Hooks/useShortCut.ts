import { useEffect } from "react";

const useShortCut = ({
  ctrl,
  shift,
  key,
  callback,
}: {
  ctrl: boolean;
  shift: boolean;
  key: string;
  callback: () => void;
}) => {
  let ctrlPressed: boolean = false;
  let shiftPressed: boolean = false;

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Control") {
      ctrlPressed = true;
    } else if (event.key === "Shift") {
      shiftPressed = true;
    } else {
      if (ctrlPressed === ctrl && shiftPressed === shift && event.key === key) {
        callback();
      }
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Ctrl") {
      ctrlPressed = false;
    } else if (event.key === "Shift") {
      shiftPressed = false;
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
};

export default useShortCut;
