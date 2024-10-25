interface UploadHistoryMeatData {
  _id: string;
  date: string;
  count: number;
}

interface UploadHistory {
  _id: string;
  uploadId: string;
  metaData: UploadHistoryMeatData[];
}

interface uploadHistoryState {
  loading: boolean;
  error: string | null;
  uploadHistory: UploadHistory | null;
}

export const uploadHistoryInitialState: uploadHistoryState = {
  loading: false,
  error: null,
  uploadHistory: null,
};
