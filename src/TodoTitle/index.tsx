import "./TodoTitle.css";

interface TodoTitleProps {
  totalTodos: number;
  completedTodos: number;
  error: boolean;
  loading: boolean;
}

const TodoTitle: React.FC<TodoTitleProps> = ({
  totalTodos,
  completedTodos,
  error,
  loading
}) => {
  let h2;

  if (error) {
    h2 = (
      <h2>
        <span id="error">¡Ha habido un error!</span>... Parece que tus To-Do's
        se quedaron congelados
      </h2>
    );
  } else if (loading) {
    h2 = (
      <h2>
        Estamos <span id="loading"> calentando</span> tus To-Do's...
      </h2>
    );
  } else if (totalTodos === 0) {
    h2 = (
      <h2>
        Hace mucho frío aquí <span>¡Crea un nuevo To-Do!</span>
      </h2>
    );
  } else if (totalTodos === completedTodos) {
    h2 = (
      <h2>
        <span>¡Felicidades!</span> Completaste todos tus To-Do's ... Ahora
        puedes descansar
      </h2>
    );
  } else {
    h2 = (
      <h2>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To-Do's
      </h2>
    );
  }

  return (
    <>
      <h1>To-Do Machine</h1>
      {h2}
    </>
  );
};

export { TodoTitle };
