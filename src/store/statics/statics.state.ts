export interface Statics {
  activeUsers?: number;
  males?:number;
  females?:number;
  users: number;
  votes: number;
  uploads: number;
  removedUsers: number;
  reports: number;
  sharedUploads: number;
  loading: boolean;
  error: string | null;
}

export const initialState: Statics = {
  activeUsers: 0,
  users: 0,
  votes: 0,
  uploads: 0,
  removedUsers: 0,
  reports: 0,
  sharedUploads: 0,
  loading: false,
  error: null,
};
