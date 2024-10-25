import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { uploadHistoryInitialState } from './uploadHistory.state';
import { baseUrl } from '../../config/config';

export const getUploadHistory = createAsyncThunk(
  'uploadHistory',
  async (data: { uploadId: string }) => {
    try {
      let response = await axios.get(
        `${baseUrl}upload-history/${data.uploadId}`,
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

const uploadHistorySlice = createSlice({
  name: 'uploadHistory',
  initialState: uploadHistoryInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUploadHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUploadHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.uploadHistory = action.payload;
      })
      .addCase(getUploadHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default uploadHistorySlice.reducer;
