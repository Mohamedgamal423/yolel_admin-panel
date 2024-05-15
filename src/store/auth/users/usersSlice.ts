import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AllUsersState } from '../authState';

// Define async thunk for fetching all users
export const fetchAllUsers = createAsyncThunk(
  'auth/users',
  async (data: { page: number; pageSize: number }) => {
    try {
      const response = await axios.get(
        `https://yolelapp.com/user/users?page=${data.page}&pageSize=${data.pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState: AllUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.users = [];
      });
  },
});

export default usersSlice.reducer;
