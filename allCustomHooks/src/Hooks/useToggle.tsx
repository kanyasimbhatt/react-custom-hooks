import { useState } from "react";

export type Array = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  () => void
];

export default function useToggle(initialState: boolean) {
  const [value, setValue] = useState(initialState);

  function toggle() {
    setValue((value) => !value);
  }

  const arr: Array = [value, setValue, toggle];

  return arr;
}
