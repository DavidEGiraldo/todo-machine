import { TodoTitle } from "./TodoTitle";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { AddTodoButton } from "./AddTodoButton";

const defaultTodos = [
  {text: "Leer un libro", completed: true},
  {text: "Comprar el mercado", completed: false},
  {text: "Ordenar cuarto", completed: false},
  {text: "Terminar un curso", completed: false},
]

function App() {
  return (
    <>
      <TodoTitle completed={16} total={25} />
      <TodoFilter />

      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo}/>
        ))}
      </TodoList>

      <AddTodoButton />
    </>
  );
}

export default App;
