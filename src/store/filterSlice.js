import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all',
  text: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
      state.text = action.payload.text;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
