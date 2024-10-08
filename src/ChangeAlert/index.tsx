import { Modal } from '../Modal';

import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

interface ChangeAlertProps {
  synchronizeTodos: () => void;
}

const ChangeAlert: React.FC<ChangeAlertProps> = ({ synchronizeTodos }: ChangeAlertProps) => {
  const { show, toggleShow } = useStorageListener(synchronizeTodos);

  if (show) {
    return (
      <Modal>
        <div className="change-alert">
          <h3>¡Parece que tus To-Do&apos;s están desctualizados!</h3>
          <p>¿Quieres recargar tus To-Do&apos;s?</p>
          <button onClick={toggleShow}>Recargar información</button>
        </div>
      </Modal>
    );
  }
  return null;
};

export { ChangeAlert };
