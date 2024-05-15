import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlockUserState } from '../authState';
import { showErrorToast, showSuccessToast } from '../../toast/toast.slice';

export const blockUser = createAsyncThunk(
  'auth/blockUser',
  async (userId: string, { dispatch }) => {
    try {
      let response = await axios.put(
        `https://yolelapp.com/user/block/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      dispatch(showSuccessToast({ message: 'User blocked successfully' }));
      return response.data;
    } catch (error) {
      dispatch(showErrorToast({ message: 'Failed to block user' }));
      throw error;
    }
  },
);

const blockUserSlice = createSlice({
  name: 'blockUser',
  initialState: BlockUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(blockUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(blockUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(blockUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default blockUserSlice.reducer;
