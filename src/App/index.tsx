import { useTodos } from "./useTodos";
import { TodoTitle } from "../TodoTitle";
import { TodoFilter } from "../TodoFilter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import { TodoLoader } from "../TodoLoader";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";

import mountains from "./nord-mountains.png";

function App() {
  const {
    addTodo,
    completedTodos,
    deleteTodo,
    error,
    filteredTodos,
    loading,
    searchValue,
    setSearchValue,
    setShowModal,
    showModal,
    toggleComplete,
    totalTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoTitle {...{ completedTodos, error, loading, totalTodos }} />
        <TodoFilter {...{ searchValue, setSearchValue }} />
      </TodoHeader>

      {totalTodos ? (
        <TodoList>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              toggleComplete={() => toggleComplete(todo)}
              deleteTodo={() => deleteTodo(todo)}
            />
          ))}
        </TodoList>
      ) : (
        <>
          {loading ? (
            <TodoLoader />
          ) : (
            <img src={mountains} alt="ice mountains" />
          )}
        </>
      )}

      <AddTodoButton {...{setShowModal}}/>

      {showModal && (
        <Modal>
          <TodoForm {...{ setShowModal, addTodo }}/>
        </Modal>
      )}
    </>
  );
}

export default App;
