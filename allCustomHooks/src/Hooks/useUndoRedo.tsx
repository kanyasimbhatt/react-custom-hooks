import { useState } from "react";
import { Array } from "../App";

export default function useUndoRedo<T>(initialState: T) {
  const [value, setValue] = useState<T>(initialState);
  const [previousValue, setPreviousValue] = useState<T>(value);
  const [nextValue, setNextValue] = useState<T>(value);

  function setData(value1: T) {
    setPreviousValue(value);
    setValue(value1);
  }

  function undo() {
    setNextValue(value);
    setValue(previousValue);
  }

  function redo() {
    setPreviousValue(value);
    setValue(nextValue);
  }

  const arr: Array<T> = [value, setData, undo, redo];

  return arr;
}
