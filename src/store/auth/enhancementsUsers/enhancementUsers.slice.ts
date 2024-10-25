import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { enhancementUsersState } from '../authState';
import { baseUrl } from '../../../config/config';

export const fetchEnhancementUsers = createAsyncThunk(
  'auth/enhancement-users',
  async (data: { page: number; pageSize: number }) => {
    try {
      const response = await axios.get(
        `${baseUrl}user/all-users-used-enhancements?page=${data.page}&pageSize=${data.pageSize}`,
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

const enhancementUsersSlice = createSlice({
  name: 'enhancement-users',
  initialState: enhancementUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnhancementUsers.pending, (state) => {
        state.loading = true;
        4;
        state.error = null;
      })
      .addCase(fetchEnhancementUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.enhancementUsers = action.payload.users;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchEnhancementUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'some thing went wrong';
        state.enhancementUsers = [];
      });
  },
});

export default enhancementUsersSlice.reducer;
