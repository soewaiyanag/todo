import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import Todo from "../javascripts/Todo";

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // state equals todos
    add: (state, action) => {
      state.push(new Todo(action.payload.text));
    },
    remove: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
