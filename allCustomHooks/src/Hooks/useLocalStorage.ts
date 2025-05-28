import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, putValue] = useState(initialValue);

  const setValue = (value: T) => {
    putValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeItem = () => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    setValue(value);
  }, []);

  return [value, setValue, removeItem];
}

export default useLocalStorage;
