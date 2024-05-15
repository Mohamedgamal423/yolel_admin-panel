import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserState } from '../authState';

// Define async thunk for fetching user profile
export const getUserData = createAsyncThunk('auth/userData', async () => {
  try {
    // Assuming you have the token stored in local storage
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token not found');

    const response = await axios.get('https://yolelapp.com/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.user = {};
      });
  },
});

export default userSlice.reducer;
