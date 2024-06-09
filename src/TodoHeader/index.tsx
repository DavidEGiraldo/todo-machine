import './TodoHeader.css'

interface TodoHeaderProps {
  children: React.ReactNode;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  )
}

export { TodoHeader }