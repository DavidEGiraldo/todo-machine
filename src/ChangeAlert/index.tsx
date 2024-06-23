import { withStorageListener } from './withStorageListener';

interface ChangeAlertProps {
  show: boolean;
  toggleShow: () => void;
}

const ChangeAlert: React.FC<ChangeAlertProps> = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>Se ha modificado el local storage</p>
        <button onClick={toggleShow}>Recargar la información</button>
      </div>
    );
  }
  return null;
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener, type ChangeAlertProps };
