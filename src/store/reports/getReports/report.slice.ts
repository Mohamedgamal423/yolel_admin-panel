import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './report.state';

// Define async thunk for fetching reports
export const getReports = createAsyncThunk(
  'reports',
  async (data: { page: number; pageSize: number }) => {
    try {
      let response = await axios.get(
        `https://yolelapp.com/reports?page=${data.page}&size=${data.pageSize}`,
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

export const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReports.fulfilled, (state, action) => {
        state.loading = false;
        state.reports = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.reports = [];
      });
  },
});

export default reportSlice.reducer;
