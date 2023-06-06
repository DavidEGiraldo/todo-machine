import React, { useState } from "react";
import { TodoTitle } from "./TodoTitle";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { AddTodoButton } from "./AddTodoButton";

import mountains from "./nord-mountains.png";

const defaultTodos = [
  { text: "Leer un libro", completed: true },
  { text: "Comprar el mercado", completed: false },
  { text: "Ordenar cuarto", completed: false },
  { text: "Terminar un curso", completed: false },
  { text: "Escuchar una canción", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleComplete = (todo) => {
    const updatedTodos = [...todos];
    const todoIndex = updatedTodos.indexOf(todo);
    updatedTodos[todoIndex].completed = !todo.completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter((item) => item !== todo);
    setTodos(updatedTodos);
  };

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
        <img src={mountains} alt="ice mountains" />
      )}

      <AddTodoButton />
    </>
  );
}

export default App;
