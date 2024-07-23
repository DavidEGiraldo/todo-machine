import { useEffect, useReducer } from 'react';

type State<T> = {
  item: T;
  loading: boolean;
  error: boolean;
  synchronized: boolean;
};

type Action<T> = { type: ActionTypes; payload?: T };

const initialState = <T,>(initialValue: T): State<T> => ({
  item: initialValue,
  loading: true,
  error: false,
  synchronized: false,
});

enum ActionTypes {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  SAVE = 'SAVE',
  SYNCHRONIZE = 'SYNCHRONIZE',
}

const reducerObject = <T,>(state: State<T>, payload?: T) => ({
  [ActionTypes.ERROR]: { ...state, error: true, loading: false },
  [ActionTypes.SUCCESS]: {
    ...state,
    item: payload as T,
    loading: false,
    synchronized: !state.synchronized && true,
  },
  [ActionTypes.SAVE]: { ...state, item: payload as T },
  [ActionTypes.SYNCHRONIZE]: { ...state, synchronized: false, loading: true },
});

const reducer = <T,>(state: State<T>, action: Action<T>): State<T> => {
  return reducerObject(state, action.payload)[action.type] || state;
};

const useLocalStorage = <T,>(itemName: string, initialValue: T) => {
  const [state, dispatch] = useReducer(
    reducer<T>,
    initialState<T>(initialValue),
  );
  const { item, loading, error, synchronized } = state;

  const onError = () => dispatch({ type: ActionTypes.ERROR });
  const onSuccess = (parsedItem: T) =>
    dispatch({ type: ActionTypes.SUCCESS, payload: parsedItem });
  const onSave = (newItem: T) =>
    dispatch({ type: ActionTypes.SAVE, payload: newItem });
  const onSynchronize = () => dispatch({ type: ActionTypes.SYNCHRONIZE });

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem: T;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem) as T;
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError();
      }
    }, 3000);
  }, [synchronized]);

  const saveItem = (newItem: T) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSave(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItems: onSynchronize,
  };
};

export { useLocalStorage };
