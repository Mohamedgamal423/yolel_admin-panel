import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { removedUploadState } from './upload.state';
import { baseUrl } from '../../config/config';

export const getDeletedUploads = createAsyncThunk(
  'removed-uploads',
  async (data: { page: number; pageSize: number }) => {
    try {
      const token = localStorage.getItem('token');
      let response = await axios.get(
        `${baseUrl}posts/images/deleted?page=${data.page}&pageSize=${data.pageSize}`,
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

export const removedUploadSlice = createSlice({
  name: 'removed-uploads',
  initialState: removedUploadState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDeletedUploads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDeletedUploads.fulfilled, (state, action) => {
        state.loading = false;
        state.uploads = action.payload;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getDeletedUploads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default removedUploadSlice.reducer;
