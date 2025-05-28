import { useState } from "react";
export type Array<T> = [T, (value1: T) => void, () => void, () => void];

export default function useUndoRedo<T>(initialState: T) {
  const [value, setValue] = useState<T>(initialState);
  const [dataArray, setDataArray] = useState([initialState]);
  const [index, setIndex] = useState(0);

  function setData(value1: T) {
    setValue(value1);
    if (index < dataArray.length - 1) {
      dataArray.length = index + 1;
    }

    setDataArray([...dataArray, value1]);
    setIndex((index) => index + 1);
  }

  function undo() {
    const val = index !== 0 ? index - 1 : index;
    setValue(dataArray[val]);
    setIndex(val);
  }

  function redo() {
    const val = index !== dataArray.length - 1 ? index + 1 : index;
    setValue(dataArray[val]);
    setIndex(val);
  }

  const arr: Array<T> = [value, setData, undo, redo];

  return arr;
}
