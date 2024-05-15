interface ImageData {
  _id: string;
  imageUrl: string;
  voteNum: number;
  VotingBestNum: number;
  ageType: string;
  gender: string;
  isAllowForVote: boolean;
  user: string; // Assuming user is represented by their ID
  bestVotes: string[]; // Array of vote IDs
  votes: string[]; // Array of vote IDs
  InteractedVotes: string[]; // Array of vote IDs
  createdAt: string; // Date string
  updatedAt: string; // Date string
  __v: number;
}

interface Vote {
  _id: string;
  imageOne: ImageData;
  imageTwo: ImageData;
  imageOneVoteNumber: number;
  imageTwoVoteNumber: number;
  interactedUsers: string[]; // Array of user IDs
  createdAt: string; // Date string
  updatedAt: string; // Date string
  __v: number;
}

export interface VotesState {
  votes: Vote[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}

export const initialState: VotesState = {
  votes: [],
  loading: false,
  error: null,
  page: 0,
  totalPages: 0,
};
