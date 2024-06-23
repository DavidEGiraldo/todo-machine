import { Modal } from '../Modal';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';

interface ChangeAlertProps {
  show: boolean;
  toggleShow: () => void;
}

const ChangeAlert: React.FC<ChangeAlertProps> = ({ show, toggleShow }) => {
  if (show) {
    return (
      <Modal>
        <div className="change-alert">
          <h3>¡Parece que tus To-Do's están desctualizados!</h3>
          <p>¿Quieres recargar tus To-Do's?</p>
          <button onClick={toggleShow}>Recargar información</button>
        </div>
      </Modal>
    );
  }
  return null;
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener, type ChangeAlertProps };
