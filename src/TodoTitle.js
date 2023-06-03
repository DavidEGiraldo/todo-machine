import React from "react";
import "./TodoTitle.css"

const TodoTitle = ({ total, completed }) => {
  return (
    <>
      <h1>To-Do Machine</h1>
      <h2>
        Has completado {completed} de {total} TODOS
      </h2>
    </>
    
  );
};

export { TodoTitle };
