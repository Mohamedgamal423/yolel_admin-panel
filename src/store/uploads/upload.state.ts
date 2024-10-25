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
  bestVotes: string[];
  InteractedVotes: string[];
  InteractedVotesLength: number;
  bestVotesLength: number;
  votesLength: number;
  deletedBy?: User;
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

export const filteredUploadState: UploadsState = {
  loading: false,
  error: null,
  uploads: [],
  page: 0,
  totalPages: 0,
};

export const removedUploadState: UploadsState = {
  loading: false,
  error: null,
  uploads: [],
  page: 0,
  totalPages: 0,
};

export const deleteUploadInitialState: {
  loading: boolean;
  error: string | null;
} = {
  loading: false,
  error: null,
};
