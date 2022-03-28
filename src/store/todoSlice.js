import { createSlice } from '@reduxjs/toolkit';
import Todo from '../javascripts/Todo';

const initialState = {
  todos: [
    {
      id: 'td-1',
      text: 'Complete online JavaScript course',
      isCompleted: true,
    },
    {
      id: 'td-2',
      text: 'Jog around the park 3x',
      isCompleted: false,
    },
    {
      id: 'td-3',
      text: '10 minutes meditation',
      isCompleted: false,
    },
    {
      id: 'td-4',
      text: 'Read for 1 hour',
      isCompleted: false,
    },
    {
      id: 'td-5',
      text: 'Pick up groceries',
      isCompleted: false,
    },
    {
      id: 'td-6',
      text: 'Complete Todo App on Frontend Mentor',
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // state equals todos
    add: (state, action) => {
      state.todos.unshift(new Todo(action.payload.text));
    },

    clear: (state, action) => {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === action.payload.id),
        1
      );
    },

    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },

    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.isCompleted = !todo.isCompleted;
    },

    reorder: (state, action) => {
      const { source, destination } = action.payload;
      // save the dragged todo
      const sourceTodo = state.todos[source.index];
      // remove the dragged todo from it's original place
      state.todos.splice(source.index, 1);
      // insert the saved todo to todos where it's dropped
      state.todos.splice(destination.index, 0, sourceTodo);
    },
  },
});

export const { add, clear, clearCompleted, toggleComplete, reorder } =
  todoSlice.actions;

export default todoSlice.reducer;
