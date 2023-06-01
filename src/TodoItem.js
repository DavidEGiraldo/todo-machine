import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <li>
      <span>{todo.completed ? "☑" : "☐"}</span>
      <p>{todo.text}</p>
      <span>X</span>
    </li>
  );
};

export { TodoItem };
