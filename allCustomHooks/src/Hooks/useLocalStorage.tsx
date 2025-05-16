import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, putValue] = useState(initialValue);

  const setValue = (value: T) => {
    putValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeItem = () => {
    localStorage.removeItem(key);
  };

  return [value, setValue, removeItem];
}

export default useLocalStorage;
