import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { ReactComponent as AddSVG } from "./square-plus-solid.svg";
import "./AddTodoButton.css";

const AddTodoButton = () => {
  const { setShowModal } = useContext(TodoContext);

  return (
    <AddSVG className={"add-todo-button"} onClick={() => setShowModal(true)} />
  );
};

export { AddTodoButton };
