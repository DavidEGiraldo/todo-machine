import { useEffect, useState } from 'react';

const useStorageListener = (synchronizeTodos: () => void) => {
  const [storageChange, setStorageChange] = useState<boolean>(false);

  useEffect(() => {
    const listener = (change: StorageEvent) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en el Local Storage');
        setStorageChange(true);
      }
    };

    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, []);

  const toggleShow = () => {
    setStorageChange(false);
    synchronizeTodos();
  };

  return {
    show: storageChange,
    toggleShow,
  };
};

export { useStorageListener };
