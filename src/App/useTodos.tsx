import { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

import { type Todo } from '../Interfaces';

interface TodoContextProps {
  completedTodos: number;
  totalTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  filteredTodos: Todo[];
  toggleComplete: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  loading: boolean;
  error: boolean;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  addTodo: (todo: string) => void;
  sincronizeTodos: () => void;
}

const useTodos = (): TodoContextProps => {
  const [searchValue, setSearchValue] = useState<string>('');

  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItems: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage<Todo[]>('TODOS_V1', []);

  const completedTodos = todos.filter((todo) => todo.completed).length;

  const totalTodos = todos.length;

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const toggleComplete = (todo: Todo) => {
    const updatedTodos = [...todos];
    const todoIndex = updatedTodos.indexOf(todo);
    updatedTodos[todoIndex].completed = !todo.completed;
    saveTodos(updatedTodos);
  };

  const deleteTodo = (todo: Todo) => {
    const updatedTodos = todos.filter((item) => item !== todo);
    saveTodos(updatedTodos);
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  const addTodo = (todo: string) => {
    const updatedTodos = [...todos];
    updatedTodos.push({
      text: todo,
      completed: false,
    });
    saveTodos(updatedTodos);
  };

  return {
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    filteredTodos,
    toggleComplete,
    deleteTodo,
    loading,
    error,
    showModal,
    setShowModal,
    addTodo,
    sincronizeTodos,
  };
};

export { useTodos };
