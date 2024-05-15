export interface deleteReportsWithimagesState {
  loading: boolean;
  error: string | null;
  message: string | null;
}

export const initialState: deleteReportsWithimagesState = {
  loading: false,
  error: null,
  message: null,
};
