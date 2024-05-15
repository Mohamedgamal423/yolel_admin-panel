import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LogInState } from '../authState';
import { showErrorToast, showSuccessToast } from '../../toast/toast.slice';

export const login = createAsyncThunk(
  'auth/login',
  async (userData: { email: string; password: string }, { dispatch }) => {
    try {
      const response = await axios.post(
        'https://yolelapp.com/user/admin/login',
        userData,
      );
      const data = response.data;
      // Save token to local storage
      localStorage.setItem('token', data.token);
      dispatch(showSuccessToast({ message: 'Login successful!' }));
      return data;
    } catch (error) {
      dispatch(showErrorToast({ message: 'Login failed!' }));
      throw error;
    }
  },
);

// Define logout action
export const logout = () => {
  // Remove token from local storage
  localStorage.removeItem('token');
};

const loginSlice = createSlice({
  name: 'login',
  initialState: LogInState,
  reducers: {
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuthenticated = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;
