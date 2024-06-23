import AddSVG from './square-plus-solid.svg?react';
import './AddTodoButton.css';

interface AddTodoButtonProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTodoButton: React.FC<AddTodoButtonProps> = ({ setShowModal }) => {
  return (
    <AddSVG className={'add-todo-button'} onClick={() => setShowModal(true)} />
  );
};

export { AddTodoButton };
