import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RemovedUsersState } from '../authState';

// Define async thunk for fetching all users
export const fetchRemovedUsers = createAsyncThunk(
  'auth/removedusers',
  async (data: { page: number; pageSize: number }) => {
    try {
      const response = await axios.get(
        `https://yolelapp.com/user/removed-users?page=${data.page}&pageSize=${data.pageSize}`,
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

const RemovedusersSlice = createSlice({
  name: 'removedusers',
  initialState: RemovedUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRemovedUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRemovedUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.removedUsers;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchRemovedUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.users = [];
      });
  },
});

export default RemovedusersSlice.reducer;
