import { useEffect, useState, Dispatch, SetStateAction } from "react";

interface StorageListenerProps {
  show: boolean;
  toggleShow: Dispatch<SetStateAction<boolean>>;
}

const withStorageListener = <P extends StorageListenerProps>(WrappedComponent: React.ComponentType<P>) => {
  const WrappedComponentWithStorageListener: React.FC<Omit<P, keyof StorageListenerProps>> = (props) => {
    const [storageChange, setStorageChange] = useState<boolean>(false);

    useEffect(() => {
      const listener = () => {
        console.log("Storage event");
        setStorageChange(true);
      };
      window.addEventListener("storage", listener);
      return () => {
        window.removeEventListener("storage", listener);
      };
    }, []);

    return <WrappedComponent {...(props as P)} show={storageChange} toggleShow={setStorageChange} />;
  };

  return WrappedComponentWithStorageListener;
};

export { withStorageListener };