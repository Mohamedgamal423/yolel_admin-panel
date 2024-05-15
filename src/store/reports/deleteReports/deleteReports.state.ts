export interface deleteReportsState {
  loading: boolean;
  error: string | null;
  message: string | null;
}

export const initialState: deleteReportsState = {
  loading: false,
  error: null,
  message: null,
};
