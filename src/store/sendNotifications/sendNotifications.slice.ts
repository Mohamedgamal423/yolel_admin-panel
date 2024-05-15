import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './sendNotifications.state';
import { showErrorToast, showSuccessToast } from '../toast/toast.slice';

export const sendNotifications = createAsyncThunk(
  'send-notifications',
  async (
    data: {
      title: string;
      message: string;
      url?: string;
    },
    { dispatch },
  ) => {
    try {
      const res = await axios.post(
        'https://yolelapp.com/notifications/multiple',
        data,
      );
      if (res.status === 201) {
        dispatch(
          showSuccessToast({ message: 'Notification sent successfully' }),
        );
      }
    } catch (error) {
      dispatch(showErrorToast({ message: 'Failed to send notification' }));
      throw error;
    }
  },
);

export const sendNotificationsSlice = createSlice({
  name: 'send-notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendNotifications.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default sendNotificationsSlice.reducer;
