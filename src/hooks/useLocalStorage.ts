import { useState, useEffect } from 'react';

type LocalStorageKey = string;

type LocalStorageValue = string | null;

const useLocalStorage = (
  key: LocalStorageKey,
  initialValue: LocalStorageValue
): [LocalStorageValue, (value: LocalStorageValue) => void] => {
  const [value, setValue] = useState<LocalStorageValue>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
