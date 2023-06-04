import React from "react";
import "./TodoTitle.css";

const TodoTitle = ({ total, completed }) => {
  return (
    <>
      <h1>To-Do Machine</h1>
      <h2>
        Has completado <span>{completed}</span> de <span>{total}</span> To-Do's
      </h2>
    </>
  );
};

export { TodoTitle };
