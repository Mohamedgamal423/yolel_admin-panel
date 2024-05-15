export interface SharedVotesState {
  sharedVotes: [];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}

export const initialState: SharedVotesState = {
  sharedVotes: [],
  loading: false,
  error: null,
  page: 0,
  totalPages: 0,
};
