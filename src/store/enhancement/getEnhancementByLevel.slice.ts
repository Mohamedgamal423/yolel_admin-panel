import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../config/config';
import axios from 'axios';
import { getEnhancementState } from './enhancement.state';

export const fetchOneEnhancement = createAsyncThunk(
  'OneEnhancementData',
  async (id: string) => {
    try {
      let response = await axios.get(`${baseUrl}enhancement/${id}`, {
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

const OneEnhancementSlice = createSlice({
  name: 'OneEnhancementData',
  initialState: getEnhancementState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneEnhancement.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.enhancement = null;
      })
      .addCase(fetchOneEnhancement.fulfilled, (state, action) => {
        state.loading = false;
        state.enhancement = action.payload;
        state.error = null;
      })
      .addCase(fetchOneEnhancement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
        state.enhancement = null;
      });
  },
});

export default OneEnhancementSlice.reducer;
