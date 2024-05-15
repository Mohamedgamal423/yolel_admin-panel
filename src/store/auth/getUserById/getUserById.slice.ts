import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserState } from '../authState';

// Define async thunk for fetching user profile
export const getUserDataById = createAsyncThunk(
  'auth/get-user',
  async (id: string) => {
    try {
      // Assuming you have the token stored in local storage
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token not found');

      const response = await axios.get(
        `https://yolelapp.com/user/${id}/admin`,
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
  },
);

const getuserSlice = createSlice({
  name: 'user',
  initialState: UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDataById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDataById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserDataById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.user = {};
      });
  },
});

export default getuserSlice.reducer;
