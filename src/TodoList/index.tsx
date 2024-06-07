import "./TodoList.css"

interface TodoListProps {
  children: React.ReactNode;
}

const TodoList: React.FC<TodoListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

export { TodoList };
