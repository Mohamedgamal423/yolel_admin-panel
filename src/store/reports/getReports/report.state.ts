export interface reportState {
  loading: boolean;
  reports: [];
  error: string | null;
  page: number;
  totalPages: number;
}

export const initialState: reportState = {
  loading: true,
  reports: [],
  error: null,
  page: 0,
  totalPages: 0,
};

export interface Report {
  _id: string;
  upload: {
    _id: string;
    imageUrl: string;
    // ageType: string;
    // gender: string;
    user: string;
  };
}
