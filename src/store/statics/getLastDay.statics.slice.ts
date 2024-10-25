import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './statics.state';

export const getLastDay = createAsyncThunk('last-day/statics', async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    let response = await axios.get('http://localhost:3000/statics/last-day', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getLastDaySlice = createSlice({
  name: 'statics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLastDay.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLastDay.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.votes = action.payload.votes;
      state.uploads = action.payload.uploads;
      state.removedUsers = action.payload.removedUsers;
      state.reports = action.payload.reports;
      state.sharedUploads = action.payload.sharedUploads;
      state.removedUploads = action.payload.removedUploads;
      state.loading = false;
    });
    builder.addCase(getLastDay.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default getLastDaySlice.reducer;
