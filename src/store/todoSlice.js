import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import Todo from '../javascripts/Todo';

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // state equals todos
    add: (state, action) => {
      state.unshift(new Todo(action.payload.text));
    },
    remove: (state, action) => {
      state.splice(
        state.findIndex((todo) => todo.id === action.payload.id),
        1
      );
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.isCompleted = !todo.isCompleted;
    },
    reorder: (state, action) => {
      const { source, destination } = action.payload;
      const sourceTodo = state[source.index];
      state.splice(source.index, 1);
      state.splice(destination.index, 0, sourceTodo);
    },
  },
});

export const { add, remove, toggleComplete, reorder } = todoSlice.actions;

export default todoSlice.reducer;
