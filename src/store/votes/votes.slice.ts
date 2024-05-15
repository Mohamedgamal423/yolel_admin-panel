import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialState } from './votes.state';

export const getAllVotes = createAsyncThunk(
  'all-votes',
  async (data: { page: number; pageSize: number }) => {
    try {
      let response = await axios.get(
        `https://yolelapp.com/vote/admin/vote-list?page=${data.page}&pageSize=${data.pageSize}`,
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

export const getAllVotesSlice = createSlice({
  name: 'all-votes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllVotes.fulfilled, (state, action) => {
        state.loading = false;
        state.loading = false;
        state.votes = action.payload?.votes;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllVotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.votes = [];
      });
  },
});

export default getAllVotesSlice.reducer;
