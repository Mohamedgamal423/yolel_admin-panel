import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './statics.state';

export const getTotal = createAsyncThunk('statics', async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    let response = await axios.get(
      'https://yolelapp.com/statics/total-length',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getTotalSlice = createSlice({
  name: 'statics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotal.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTotal.fulfilled, (state, action) => {
      state.activeUsers = action.payload.activeUsers;
      state.users = action.payload.users;
      state.males = action.payload.males;
      state.females = action.payload.females;
      state.votes = action.payload.votes;
      state.uploads = action.payload.uploads;
      state.removedUsers = action.payload.removedUsers;
      state.reports = action.payload.reports;
      state.sharedUploads = action.payload.sharedUploads;
      state.loading = false;
    });
    builder.addCase(getTotal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default getTotalSlice.reducer;
