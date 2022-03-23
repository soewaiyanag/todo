import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import Todo from "../javascripts/Todo";

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // state equals todos
    add: (state, action) => {
      state.unshift(new Todo(action.payload.text));
    },
    remove: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleComplete: (state, action) => {
      state = state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },
  },
});

export const { add, remove, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
