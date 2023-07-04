import React from "react";

import { TodoTitle } from "../TodoTitle";
import { TodoFilter } from "../TodoFilter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";

import mountains from "./nord-mountains.png";

const AppUI = ({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  filteredTodos,
  toggleComplete,
  deleteTodo,
  loading,
  error,
}) => {
  return (
    <>
      <TodoTitle completed={completedTodos} total={totalTodos} />
      <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue} />

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
          {error && (
            <p>
              Ha habido un error... Parece que tus To-Do's se quedaron
              congelados
            </p>
          )}
          {loading && <p>Estamos calentando tus To-Do's...</p>}
          <img src={mountains} alt="ice mountains" />
        </>
      )}

      <AddTodoButton />
    </>
  );
};

export { AppUI };
