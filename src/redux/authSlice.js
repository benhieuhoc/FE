import { createSlice } from '@reduxjs/toolkit';

// Lấy dữ liệu từ localStorage (nếu có)
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
const access_token = localStorage.getItem('access_token') || null;

const initialState = {
  isAuthenticateduser: !!user,
  user: user, 
  access_token: access_token,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticateduser = true;
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;

      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('access_token', action.payload.access_token);
    },
    logout: (state) => {
      state.isAuthenticateduser = false;
      state.user = null;
      state.access_token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
