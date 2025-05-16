import { useState } from "react";

export default function useSessionStorage<T>(key: string, initialValue: T) {
  const [value, putValue] = useState(initialValue);

  function setValue(value: T) {
    putValue(value);
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  function removeItem() {
    sessionStorage.removeItem(key);
  }

  return [value, setValue, removeItem];
}
