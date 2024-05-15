import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './sharedUploads.state';

export const getSharedUploads = createAsyncThunk(
  'shared-uploads',
  async (data: { page: number; pageSize: number }) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      let response = await axios.get(
        `https://yolelapp.com/shared-uploads?page=${data.page}&size=${data.pageSize}`,
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

export const shareduploadSlice = createSlice({
  name: 'shared-uploads',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSharedUploads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSharedUploads.fulfilled, (state, action) => {
        state.loading = false;
        state.uploads = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getSharedUploads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default shareduploadSlice.reducer;
