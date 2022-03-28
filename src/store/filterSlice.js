import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  key: 'all',
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
