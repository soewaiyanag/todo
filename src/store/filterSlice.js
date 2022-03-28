import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterKey: 'all',
  showAll: true,
  isCompleted: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterKey } = action.payload;
      state.filterKey = filterKey;
      state.showAll = filterKey === 'all';
      state.isCompleted = filterKey === 'completed';
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
