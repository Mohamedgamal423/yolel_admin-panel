interface User {
  _id: string;
  name: string;
}

export interface Upload {
  _id: string;
  imageUrl: string;
  ageType: string;
  gender: string;
  user: User;
  InteractedVotesLength: number;
  bestVotesLength: number;
  votesLength: number;
}

export interface UploadsState {
  loading: boolean;
  error: string | null;
  uploads: Upload[];
  page: number;
  totalPages: number;
}

export const initialState: UploadsState = {
  loading: false,
  error: null,
  uploads: [],
  page: 0,
  totalPages: 0,
};
