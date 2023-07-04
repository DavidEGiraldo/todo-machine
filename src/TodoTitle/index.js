import React from "react";
import "./TodoTitle.css";

const TodoTitle = ({ total, completed }) => {
  return (
    <>
      <h1>To-Do Machine</h1>
      {total === 0 ? (
        <h2>
          Hace mucho frío aquí <span>¡Crea un nuevo To-Do!</span>
        </h2>
      ) : total === completed ? (
        <h2>
          <span>¡Felicidades!</span> Completaste todos tus To-Do's ... Ahora
          puedes descansar
        </h2>
      ) : (
        <h2>
          Has completado <span>{completed}</span> de <span>{total}</span>{" "}
          To-Do's
        </h2>
      )}
    </>
  );
};

export { TodoTitle };
