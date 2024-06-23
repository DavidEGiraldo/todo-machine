import { useEffect, useState } from 'react';

const useLocalStorage = <T,>(itemName: string, initialValue: T) => {
  const [item, setItem] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [synchronized, setSynchronized] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem: T;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
        if (!synchronized) {
          setSynchronized(true);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 3000);
  }, [synchronized]);

  const saveItem = (newItem: T) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const synchronizeItems = () => {
    setSynchronized(false);
    setLoading(true);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItems,
  };
};

export { useLocalStorage };
