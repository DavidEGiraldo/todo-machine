import { type Todo } from '../Interfaces';
import CheckboxSVG from './square-check-solid.svg?react';
import DeleteSVG from './square-xmark-solid.svg?react';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: () => void;
  deleteTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <li>
      <CheckboxSVG
        className={todo.completed ? 'checked-box' : 'unchecked-box'}
        onClick={toggleComplete}
      />
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </p>
      <DeleteSVG onClick={deleteTodo} />
    </li>
  );
};

export { TodoItem };
