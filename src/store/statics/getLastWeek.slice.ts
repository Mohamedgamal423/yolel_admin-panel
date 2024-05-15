import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './statics.state';

export const getLastWeek = createAsyncThunk('last-week/statics', async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    let response = await axios.get('https://yolelapp.com/statics/last-week', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getLastWeekSlice = createSlice({
  name: 'statics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLastWeek.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLastWeek.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.votes = action.payload.votes;
      state.uploads = action.payload.uploads;
      state.removedUsers = action.payload.removedUsers;
      state.reports = action.payload.reports;
      state.sharedUploads = action.payload.sharedUploads;
      state.loading = false;
    });
    builder.addCase(getLastWeek.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default getLastWeekSlice.reducer;
