import { Todo } from "../Interfaces";
import "./TodoList.css"

interface TodoListProps {
  error: boolean;
  loading: boolean;
  filteredTodos: Todo[];
  onError: () => JSX.Element;
  onLoading: () => JSX.Element;
  onEmpty: () => JSX.Element;
  render: (todo: Todo, id: number) => JSX.Element;
}

const TodoList: React.FC<TodoListProps> = ({ 
  error,
  loading,
  filteredTodos,
  onError,
  onLoading,
  onEmpty,
  render,
 }) => {
  return (
    <ul>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !filteredTodos.length && onEmpty()}
      {filteredTodos.map((todo, index) => render(todo, index))}
    </ul>
  );
};

export { TodoList };
