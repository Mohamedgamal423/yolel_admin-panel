import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './deleteReportwithImage.state';
import { showErrorToast, showSuccessToast } from '../../toast/toast.slice';

export const deleteReportWithAssociatedData = createAsyncThunk(
  'delete-reports-with-associated-images',
  async (data: { id: string }, { dispatch }) => {
    try {
      let response = await axios.delete(
        `https://yolelapp.com/reports/admin/remove/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      dispatch(
        showSuccessToast({
          message: 'Report With Associated Data Deleted successfully',
        }),
      );
      return response.data;
    } catch (error) {
      dispatch(
        showErrorToast({
          message: 'Failed to delete report With its associated data',
        }),
      );
      throw error;
    }
  },
);

export const deleteReportsSlice = createSlice({
  name: 'delete-reports-with-associated-images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteReportWithAssociatedData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReportWithAssociatedData.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteReportWithAssociatedData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      });
  },
});
export default deleteReportsSlice.reducer;
