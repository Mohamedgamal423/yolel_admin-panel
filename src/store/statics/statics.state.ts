export interface Statics {
  activeUsers?: number;
  males?: number;
  females?: number;
  users: number;
  votes: number;
  uploads: number;
  removedUsers: number;
  reports: number;
  removedUploads: number;
  sharedUploads: number;
  enhancementUsers?: number;
  enhancementRequested?: number;
  loading: boolean;
  error: string | null;
}

export interface UserPointStatics {
  loading: boolean;
  error: string | null;
  totalUsers: number;
  totalPoints: number;
  ratio: number;
}

export const initialState: Statics = {
  activeUsers: 0,
  users: 0,
  votes: 0,
  uploads: 0,
  removedUsers: 0,
  reports: 0,
  sharedUploads: 0,
  removedUploads: 0,
  enhancementUsers: 0,
  enhancementRequested: 0,
  loading: false,
  error: null,
};

export const initialPointState: UserPointStatics = {
  loading: false,
  error: null,
  totalUsers: 0,
  totalPoints: 0,
  ratio: 0,
};
