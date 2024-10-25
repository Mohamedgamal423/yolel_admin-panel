import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './upload.state';
import { baseUrl } from '../../config/config';

export const getSearchedUploads = createAsyncThunk(
  'search-uploads',
  async (data: { percentage: number; page: number; pageSize: number }) => {
    try {
      const token = localStorage.getItem('token');
      let response = await axios.get(
        `${baseUrl}posts/upload/search?percentage=${data.percentage}&page=${data.page}&pageSize=${data.pageSize}`,
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

export const searchUploadSlice = createSlice({
  name: 'search-uploads',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchedUploads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSearchedUploads.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.uploads = action.payload?.data || [];
        state.page = action.payload?.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getSearchedUploads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default searchUploadSlice.reducer;
