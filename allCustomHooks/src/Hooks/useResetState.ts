// hook that provide reset function, using which we can reset state to initial state.
// const [state,setState,reset]=useResetState(initialValue)

import { useState } from "react";

type ResetType<U> = [
  U,
  React.Dispatch<React.SetStateAction<U>>,
  reset: () => void
];
const useResetState = <T,>(initialValue: T) => {
  const [state, setState] = useState<T>(initialValue);

  const reset = () => {
    setState(initialValue);
  };

  const arr: ResetType<T> = [state, setState, reset];
  return arr;
};

export default useResetState;
