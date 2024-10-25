import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreateSubAdminState } from '../authState';
import { showErrorToast, showSuccessToast } from '../../toast/toast.slice';
import { baseUrl } from '../../../config/config';

interface SignUpDto {
  name: string;
  email: string;
  password: string;
}

// Create an async thunk for the SubAdmin registration
export const CreateSubAdmin = createAsyncThunk(
  'auth/createSubAdmin',
  async (signUpDto: SignUpDto, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        ` ${baseUrl}user/create-sub-admin`,
        signUpDto,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      const data = response.data;

      // Save token to local storage
      localStorage.setItem('token', data.token);

      // Dispatch success toast message
      dispatch(showSuccessToast({ message: 'SubAdmin created successfully' }));

      return data;
    } catch (error: any) {
      // Dispatch error toast message
      dispatch(
        showErrorToast({
          message: error.response?.data?.message || 'Failed to create SubAdmin',
        }),
      );
      return rejectWithValue(error.response?.data);
    }
  },
);

// Create the initial state and the slice

const createSubAdminSlice = createSlice({
  name: 'createSubAdmin',
  initialState: CreateSubAdminState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateSubAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateSubAdmin.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(CreateSubAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default createSubAdminSlice.reducer;
