export interface SharedUpload {
  _id: string;
  imageUrl: string;
  ageType: string;
  gender: string;
  isAllowForVote: true;
  bestVotes: [];
  votes: [];
  InteractedVotes: [];
}

export interface SharedUploadsState {
  loading: boolean;
  error: string | null;
  uploads: SharedUpload[];
  page: number;
  totalPages: number;
}

export const initialState: SharedUploadsState = {
  loading: false,
  error: null,
  uploads: [],
  page: 0,
  totalPages: 0,
};
