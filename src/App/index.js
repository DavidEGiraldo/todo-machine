import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Leer un libro", completed: true },
//   { text: "Comprar el mercado", completed: false },
//   { text: "Ordenar cuarto", completed: false },
//   { text: "Terminar un curso", completed: false },
//   { text: "Escuchar una canción", completed: true },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))
// localStorage.removeItem("TODOS_V1")

function App() {
  const [searchValue, setSearchValue] = useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleComplete = (todo) => {
    const updatedTodos = [...todos];
    const todoIndex = updatedTodos.indexOf(todo);
    updatedTodos[todoIndex].completed = !todo.completed;
    saveTodos(updatedTodos);
  };

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter((item) => item !== todo);
    saveTodos(updatedTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTodos={filteredTodos}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
