import React, { useState } from "react";
import { TodoTitle } from "./TodoTitle";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { AddTodoButton } from "./AddTodoButton";

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

  console.log(searchValue);
  return (
    <>
      <TodoTitle completed={completedTodos} total={totalTodos} />
      <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {filteredTodos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </TodoList>

      <AddTodoButton />
    </>
  );
}

export default App;
