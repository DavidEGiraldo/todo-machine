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
import { TodoError } from "../TodoError";

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

      <TodoList
        {...{ error, loading, totalTodos, filteredTodos, searchValue }}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoader />}
        onEmpty={() => <img src={mountains} alt="ice mountains" />}
        onNotFound={(searchValue) => <p id="not-found">No se encontraron To-Do's para: "{searchValue}"</p>}
      >
        {(todo, id) => (
          <TodoItem
            key={id}
            todo={todo}
            toggleComplete={() => toggleComplete(todo)}
            deleteTodo={() => deleteTodo(todo)}
          />
        )}
      </TodoList>

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
