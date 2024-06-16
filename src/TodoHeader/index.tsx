import './TodoHeader.css'

interface TodoHeaderProps {
  children: React.ReactNode;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ children }) => {
  return (
    <header>
      <h1>To-Do Machine</h1>
      {children}
    </header>
  )
}

export { TodoHeader }