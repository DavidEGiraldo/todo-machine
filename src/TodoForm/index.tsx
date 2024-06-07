import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

import "./TodoForm.css";

const TodoForm = () => {
  const { setShowModal, addTodo } = useContext(TodoContext);

  const [newTodo, setNewTodo] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newTodo.trim()) addTodo(newTodo);
    setShowModal(false);
  };

  const isTodoValid = newTodo.trim() ? true : false;

  return (
    <form onSubmit={onSubmit}>
      <label>Crea tu nuevo To-Do</label>
      <textarea
        placeholder="Escribe aquí..."
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        required
      />
      <div className="button-container">
        <button
          type="button"
          className="cancel-button"
          onClick={() => setShowModal(false)}
        >
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
