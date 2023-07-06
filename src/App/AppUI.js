import React from "react";

import { TodoTitle } from "../TodoTitle";
import { TodoFilter } from "../TodoFilter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import { TodoLoader } from "../TodoLoader";

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
      <TodoTitle
        completed={completedTodos}
        total={totalTodos}
        error={error}
        loading={loading}
      />
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
          {loading ? <TodoLoader /> : <img src={mountains} alt="ice mountains" />}
        </>
      )}

      <AddTodoButton />
    </>
  );
};

export { AppUI };
