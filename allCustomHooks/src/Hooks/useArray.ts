import { useState } from "react";

type UseArrayActions<T> = {
  push: (item: T) => void;
  removeByIndex: (index: number) => void;
};

export function useArray<T>(
  initialValue: T[]
): { value: T[] } & UseArrayActions<T> {
  const [state, setState] = useState(initialValue);

  const push = (value: T) => {
    setState([...state, value]);
  };
  const removeByIndex = (index: number) => {
    const array = state.splice(index, 1);
    setState([...array]);
  };

  return { value: state, push: push, removeByIndex: removeByIndex };
}
