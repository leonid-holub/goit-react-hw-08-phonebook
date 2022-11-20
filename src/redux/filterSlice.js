import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    update(state, action) {
      return (state = action.payload);
    },
  },
});

export const { update } = filterSlice.actions;
