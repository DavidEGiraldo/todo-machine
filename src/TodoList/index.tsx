import { type Todo } from '../Interfaces';
import './TodoList.css';

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
}: TodoListProps) => {
  return (
    <>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmpty()}
      {!loading && totalTodos > 0 && !filteredTodos.length && onNotFound(searchValue)}
      {!loading && !error && filteredTodos.length > 0 && (
        <ul>{filteredTodos.map((todo, index) => children(todo, index))}</ul>
      )}
    </>
  );
};

export { TodoList };
