import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialEnhancementState } from './enhancement.state';
import { baseUrl } from '../../config/config';

export const fetchEnhancement = createAsyncThunk(
  'enhancementData',
  async () => {
    try {
      let response = await axios.get(`${baseUrl}enhancement`, {
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

const enhancementSlice = createSlice({
  name: 'enhancementData',
  initialState: initialEnhancementState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnhancement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEnhancement.fulfilled, (state, action) => {
        state.loading = false;
        state.enhancement = action.payload;
        state.error = null;
      })
      .addCase(fetchEnhancement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
        state.enhancement = [];
      });
  },
});

export default enhancementSlice.reducer;
