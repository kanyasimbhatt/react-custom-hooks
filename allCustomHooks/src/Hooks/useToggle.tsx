import { useState } from "react";

export default function useToggle(initialState: boolean) {
  const [value, setValue] = useState(initialState);

  function toggle() {
    setValue((value) => !value);
  }

  return [value, setValue, toggle];
}
