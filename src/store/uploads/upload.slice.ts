import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './upload.state';

export const getUploads = createAsyncThunk(
  'uploads',
  async (data: { page: number; pageSize: number }) => {
    try {
      const token = localStorage.getItem('token');
      let response = await axios.get(
        `https://yolelapp.com/posts/list/admin?page=${data.page}&pageSize=${data.pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const uploadSlice = createSlice({
  name: 'uploads',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUploads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUploads.fulfilled, (state, action) => {
        state.loading = false;
        state.uploads = action.payload.items;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getUploads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default uploadSlice.reducer;
