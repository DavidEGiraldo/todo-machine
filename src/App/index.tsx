import { TodoTitle } from '../TodoTitle';
import { TodoFilter } from '../TodoFilter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AddTodoButton } from '../AddTodoButton';
import { TodoLoader } from '../TodoLoader';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoError } from '../TodoError';
import { ChangeAlert } from '../ChangeAlert';

import { useTodos } from './useTodos';
import mountains from './nord-mountains.png';

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
    synchronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader {...{ loading, error }}>
        <TodoTitle {...{ completedTodos, totalTodos }} />
        <TodoFilter {...{ searchValue, setSearchValue }} />
      </TodoHeader>

      <TodoList
        {...{ error, loading, totalTodos, filteredTodos, searchValue }}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoader />}
        onEmpty={() => <img src={mountains} alt="ice mountains" />}
        onNotFound={(value) => (
          <p id="not-found">No se encontraron To-Do&apos;s para: &quot;{value}&quot;</p>
        )}
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

      <AddTodoButton {...{ setShowModal }} />

      {showModal && (
        <Modal>
          <TodoForm {...{ setShowModal, addTodo }} />
        </Modal>
      )}

      <ChangeAlert {...{ synchronizeTodos }} />
    </>
  );
}

export default App;
