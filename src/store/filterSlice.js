import { createSlice } from '@reduxjs/toolkit';

const savedFilter = localStorage.getItem('filter');

const initialState = {
  key: savedFilter ?? 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.key = action.payload.filterKey;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
