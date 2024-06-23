import { useEffect, useState } from 'react';

interface StorageListenerProps {
  sincronizeTodos: () => void;
}

interface InjectedProps {
  show: boolean;
  toggleShow: () => void;
}

const withStorageListener = <P extends StorageListenerProps>(
  WrappedComponent: React.ComponentType<P & InjectedProps>,
): React.FC<Omit<P, keyof StorageListenerProps>> => {
  const WrappedComponentWithStorageListener: React.FC<
    Omit<P, keyof StorageListenerProps>
  > = (props) => {
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
      (props as P).sincronizeTodos();
    };

    return (
      <WrappedComponent
        {...(props as P)}
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  };

  return WrappedComponentWithStorageListener;
};

export { withStorageListener };
