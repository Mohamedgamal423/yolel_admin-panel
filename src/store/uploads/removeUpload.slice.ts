import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../config/config';
import { showErrorToast, showSuccessToast } from '../toast/toast.slice';
import { deleteUploadInitialState } from './upload.state';

export const deleteImage = createAsyncThunk(
  'delete-image',
  async (data: { id: string }, { dispatch }) => {
    try {
      let response = await axios.delete(`${baseUrl}posts/remove/${data.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      dispatch(showSuccessToast({ message: 'image Deleted successfully' }));
      return response.data;
    } catch (error) {
      dispatch(showErrorToast({ message: 'Failed to delete image' }));
      throw error;
    }
  },
);

export const deleteImageSlice = createSlice({
  name: 'delete-images',
  initialState: deleteUploadInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteImage.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      });
  },
});
export default deleteImageSlice.reducer;
