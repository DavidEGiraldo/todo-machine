import React from "react";

const TodoTitle = ({ total, completed }) => {
  return (
    <h1>
      Has completado {completed} de {total} TODOS
    </h1>
  );
};

export { TodoTitle };
