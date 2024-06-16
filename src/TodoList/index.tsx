import { Todo } from "../Interfaces";
import "./TodoList.css"

interface TodoListProps {
  error: boolean;
  loading: boolean;
  filteredTodos: Todo[];
  totalTodos: number;
  searchValue: string;
  onError: () => JSX.Element;
  onLoading: () => JSX.Element;
  onEmpty: () => JSX.Element;
  onNotFound: (searchValue: string) => JSX.Element;
  children: (todo: Todo, id: number) => JSX.Element;
}

const TodoList: React.FC<TodoListProps> = ({ 
  error,
  loading,
  filteredTodos,
  totalTodos,
  searchValue,
  onError,
  onLoading,
  onEmpty,
  onNotFound,
  children,
 }) => {
  return (
    <ul>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmpty()}
      {!loading && totalTodos && !filteredTodos.length && onNotFound(searchValue)}
      {filteredTodos.map((todo, index) => children(todo, index))}
    </ul>
  );
};

export { TodoList };
