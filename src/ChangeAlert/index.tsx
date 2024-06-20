import { Dispatch, SetStateAction } from "react";
import { withStorageListener } from "./withStorageListener";

interface ChangeAlertProps {
  show: boolean;
  toggleShow: Dispatch<SetStateAction<boolean>>; 
}

const ChangeAlert: React.FC<ChangeAlertProps> = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>Se ha modificado el local storage</p>
      </div>
    );
  }
  return null;
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };