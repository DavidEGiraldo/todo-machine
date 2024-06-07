import React, { useContext } from "react";

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

const AppUI = () => {
  const {
    totalTodos,
    filteredTodos,
    toggleComplete,
    deleteTodo,
    loading,
    showModal
  } = useContext(TodoContext);

  return (
    <>
      <TodoTitle />
      <TodoFilter />

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
