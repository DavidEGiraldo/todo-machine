import './TodoTitle.css';

interface TodoTitleProps {
  totalTodos: number;
  completedTodos: number;
  error?: boolean;
  loading?: boolean;
}

const renderError = () => (
  <h2>
    <span id="error">¡Ha habido un error!</span>... Parece que tus To-Do&lsquo;s se quedaron
    congelados
  </h2>
);

const renderLoading = () => (
  <h2>
    Estamos <span id="loading"> calentando</span> tus To-Do&lsquo;s...
  </h2>
);

const renderEmpty = () => (
  <h2>
    Hace mucho frío aquí <span>¡Crea un nuevo To-Do!</span>
  </h2>
);

const renderComplete = () => (
  <h2>
    <span>¡Felicidades!</span> Completaste todos tus To-Do&lsquo;s ... Ahora puedes descansar
  </h2>
);

const renderDefault = (totalTodos: number, completedTodos: number) => (
  <h2>
    Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To-Do&lsquo;s
  </h2>
);

const TodoTitle: React.FC<TodoTitleProps> = ({ totalTodos, completedTodos, error, loading }) => {
  if (error) return renderError();
  if (loading) return renderLoading();
  if (totalTodos === 0) return renderEmpty();
  if (totalTodos === completedTodos) return renderComplete();
  return renderDefault(totalTodos, completedTodos);
};

export { TodoTitle };
