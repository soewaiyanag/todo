import { createSlice } from '@reduxjs/toolkit';
import Todo from '../javascripts/Todo';

const initialState = [
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
];

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
