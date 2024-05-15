import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './deleteReports.state';
import { showErrorToast, showSuccessToast } from '../../toast/toast.slice';

export const deleteReports = createAsyncThunk(
  'delete-reports',
  async (data: { id: string }, { dispatch }) => {
    try {
      let response = await axios.delete(
        `https://yolelapp.com/reports/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      dispatch(showSuccessToast({ message: 'Report Deleted successfully' }));
      return response.data;
    } catch (error) {
      dispatch(showErrorToast({ message: 'Failed to delete report' }));
      throw error;
    }
  },
);

export const deleteReportsSlice = createSlice({
  name: 'delete-reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteReports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReports.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      });
  },
});
export default deleteReportsSlice.reducer;
