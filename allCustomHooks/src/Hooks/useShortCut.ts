import { useEffect } from "react";

export const useShortCut = ({
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
    event.preventDefault();
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
    console.log(event.key);
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

// export default useShortCut;

//variant

const useShortCutVariant = ({
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
  const handleKeyPress = (event: KeyboardEvent) => {
    event.preventDefault();
    console.log(event.key);
    if (
      event.ctrlKey === ctrl &&
      event.shiftKey === shift &&
      event.key === key
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
};

export default useShortCutVariant;
