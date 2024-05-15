import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlockedUsersState } from '../authState';

// Define async thunk for fetching all users
export const fetchBlockedUsers = createAsyncThunk(
  'auth/blocked-list',
  async (data: { page: number; pageSize: number }) => {
    try {
      const response = await axios.get(
        `https://yolelapp.com/user/all-admin-blocked?page=${data.page}&pageSize=${data.pageSize}`,
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

const BlockedUsersSlice = createSlice({
  name: 'removedusers',
  initialState: BlockedUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlockedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlockedUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchBlockedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.users = [];
      });
  },
});

export default BlockedUsersSlice.reducer;
