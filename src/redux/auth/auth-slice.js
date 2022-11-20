import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {},
    [register.pending](state, action) {},
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, action) {},
    [logIn.pending](state, action) {},
    [logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state) {},
    [logOut.pending](state) {},
  },
});

export const authReducer = authSlice.reducer;
