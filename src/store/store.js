import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
