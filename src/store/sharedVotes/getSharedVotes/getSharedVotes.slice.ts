import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './getSharedVotes.state';

export const getSharedVotes = createAsyncThunk(
  'shared-votes',
  async (data: { page: number; pageSize: number }) => {
    try {
      let response = await axios.get(
        `https://yolelapp.com/shared-votes?page=${data.page}&size=${data.pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const getSharedVotesSlice = createSlice({
  name: 'shared-votes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSharedVotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSharedVotes.fulfilled, (state, action) => {
        state.loading = false;
        state.loading = false;
        state.sharedVotes = action.payload?.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getSharedVotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.sharedVotes = [];
      });
  },
});

export default getSharedVotesSlice.reducer;
