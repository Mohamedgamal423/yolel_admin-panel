export interface sendNotificationsState {
  loading: boolean;
  error: string | null;
}

export const initialState: sendNotificationsState = {
  loading: false,
  error: null,
};
