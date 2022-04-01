export const saveToLocalStorage = (store) => (next) => (action) => {
  next(action); //dispatch the action
  const { todos, filter } = store.getState();
  localStorage.setItem('filter', filter.key);
};
