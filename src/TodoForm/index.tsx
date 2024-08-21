import React, { type FormEvent, useState } from 'react';

import './TodoForm.css';

interface TodoFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ setShowModal, addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newTodo.trim()) addTodo(newTodo);
    setShowModal(false);
  };

  const isTodoValid = newTodo.trim() ? true : false;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="new-todo">Crea tu nuevo To-Do</label>
      <textarea
        id="new-todo"
        placeholder="Escribe aquí..."
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        required
      />
      <div className="button-container">
        <button type="button" className="cancel-button" onClick={() => setShowModal(false)}>
          Cancelar
        </button>
        <button type="submit" className="add-button" disabled={!isTodoValid}>
          Crear
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
