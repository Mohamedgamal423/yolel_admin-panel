import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './statics.state';

export const getLastMonth = createAsyncThunk('last-month/statics', async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    let response = await axios.get('https://yolelapp.com/statics/last-month', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getLastMonthSlice = createSlice({
  name: 'statics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLastMonth.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLastMonth.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.votes = action.payload.votes;
      state.uploads = action.payload.uploads;
      state.removedUsers = action.payload.removedUsers;
      state.reports = action.payload.reports;
      state.sharedUploads = action.payload.sharedUploads;
      state.loading = false;
    });
    builder.addCase(getLastMonth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default getLastMonthSlice.reducer;
