import { createPortal } from 'react-dom';
import './Modal.css';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal') as Element,
  );
};

export { Modal };
