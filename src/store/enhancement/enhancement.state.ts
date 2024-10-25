interface enhancement {
  _id: string;
  count: number;
  voteEnhancementCount: number;
  enhancementLevel: string;
}

interface EnhancementState {
  loading: boolean;
  error: string | null;
  enhancement: enhancement[];
}
interface OneInhancementState {
  loading: boolean;
  error: string | null;
  enhancement: enhancement | null;
}

interface addAndUpdateEnhancement {
  loading: boolean;
  error: string | null;
}

export const initialEnhancementState: EnhancementState = {
  loading: true,
  error: null,
  enhancement: [],
};

export const addAndUpdateEnhancementState: addAndUpdateEnhancement = {
  loading: true,
  error: null,
};

export const getEnhancementState: OneInhancementState = {
  loading: true,
  error: null,
  enhancement: null,
};
