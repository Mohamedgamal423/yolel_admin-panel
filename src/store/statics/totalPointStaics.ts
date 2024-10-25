import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialPointState } from './statics.state';

export const getPoint = createAsyncThunk('statics', async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    let response = await axios.get(
      'http://localhost:3000/user/user-points-statistics',
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

export const getTotalPointStaticSlice = createSlice({
  name: 'userPoints',
  initialState: initialPointState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPoint.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getPoint.fulfilled, (state, action) => {
      state.totalUsers = action.payload.totalUsers;
      state.totalPoints = action.payload.totalPoints;
      state.ratio = action.payload.ratio;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getPoint.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default getTotalPointStaticSlice.reducer;
