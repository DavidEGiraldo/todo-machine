import React from "react";
import { ReactComponent as AddSVG } from "./square-plus-solid.svg";
import "./AddTodoButton.css";

const AddTodoButton = () => {
  return (
    <AddSVG
      className={"add-todo-button"}
      onClick={() => console.log("Quieres crear un nuevo To-Do")}
    />
  );
};

export { AddTodoButton };
