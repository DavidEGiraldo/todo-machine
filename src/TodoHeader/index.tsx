import { cloneElement, Children, isValidElement, type ReactNode } from 'react';
import './TodoHeader.css';

interface TodoHeaderProps {
  children: ReactNode;
  loading: boolean;
  error: boolean;
}

interface ChildProps {
  loading: boolean;
  error: boolean;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ children, loading, error }: TodoHeaderProps) => {
  return (
    <header>
      <h1>To-Do Machine</h1>
      {Children.toArray(children).map((child) =>
        isValidElement<ChildProps>(child) ? cloneElement(child, { loading, error }) : child,
      )}
    </header>
  );
};

export { TodoHeader };
