import { useContext } from "react";

import { TodoTitle } from "../TodoTitle";
import { TodoFilter } from "../TodoFilter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import { TodoLoader } from "../TodoLoader";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoContext } from "../TodoContext";

import mountains from "./nord-mountains.png";
import { TodoHeader } from "../TodoHeader";

const AppUI = () => {
  const {
    completedTodos,
    deleteTodo,
    error,
    filteredTodos,
    loading,
    searchValue,
    setSearchValue,
    showModal,
    toggleComplete,
    totalTodos,
  } = useContext(TodoContext);

  return (
    <>
      <TodoHeader>
        <TodoTitle {...{ completedTodos, error, loading, totalTodos }} />
        <TodoFilter {...{ searchValue, setSearchValue }} />
      </TodoHeader>

      {totalTodos ? (
        <TodoList>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              toggleComplete={() => toggleComplete(todo)}
              deleteTodo={() => deleteTodo(todo)}
            />
          ))}
        </TodoList>
      ) : (
        <>
          {loading ? (
            <TodoLoader />
          ) : (
            <img src={mountains} alt="ice mountains" />
          )}
        </>
      )}

      <AddTodoButton />

      {showModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};

export { AppUI };
