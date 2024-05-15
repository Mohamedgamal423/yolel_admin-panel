import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface ToastState {
  message: string;
}

const initialState: ToastState = {
  message: '',
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showSuccessToast: (state, action: PayloadAction<ToastState>) => {
      state.message = action.payload.message;
      toast.success(action.payload.message);
    },
    showErrorToast: (state, action: PayloadAction<ToastState>) => {
      state.message = action.payload.message;
      toast.error(action.payload.message);
    },
  },
});

export const { showSuccessToast, showErrorToast } = toastSlice.actions;

export default toastSlice.reducer;
