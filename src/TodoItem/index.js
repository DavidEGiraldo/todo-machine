import React from "react";
import { ReactComponent as CheckboxSVG } from "./square-check-solid.svg";
import { ReactComponent as DeleteSVG } from "./square-xmark-solid.svg";
import "./TodoItem.css";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <CheckboxSVG
        className={todo.completed ? "checked-box" : "unchecked-box"}
        onClick={toggleComplete}
      />
      <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </p>
      <DeleteSVG onClick={deleteTodo} />
    </li>
  );
};

export { TodoItem };
