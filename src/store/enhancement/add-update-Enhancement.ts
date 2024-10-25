import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addAndUpdateEnhancementState } from './enhancement.state';
import { baseUrl } from '../../config/config';

export const addAndUpdateEnhancement = createAsyncThunk(
  'add-and-update-enhancement',
  async (data: {
    count: number;
    level: string;
    voteEnhancementCount: number;
  }) => {
    try {
      let response = await axios.post(`${baseUrl}enhancement`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

const addAndUpdateEnhancementSlice = createSlice({
  name: 'add-enhancement',
  initialState: addAndUpdateEnhancementState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAndUpdateEnhancement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAndUpdateEnhancement.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addAndUpdateEnhancement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default addAndUpdateEnhancementSlice.reducer;
