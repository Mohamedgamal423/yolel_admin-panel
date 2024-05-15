export interface LogIn {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const LogInState: LogIn = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export interface userData {
  loading: boolean;
  error: string | null;
  user: {};
}

export const UserState: userData = {
  loading: true,
  error: null,
  user: {},
};

export interface removedUsers {
  loading: boolean;
  error: string | null;
  users: [];
  page: number;
  totalPages: number;
}

export const RemovedUsersState: removedUsers = {
  loading: true,
  error: null,
  users: [],
  page: 0,
  totalPages: 0,
};

export interface allUsers {
  loading: boolean;
  error: string | null;
  users: [];
  page: number;
  totalPages: number;
}

export const AllUsersState: allUsers = {
  loading: true,
  error: null,
  users: [],
  page: 0,
  totalPages: 0,
};

export interface blockUser {
  loading: boolean;
  error: string | null;
  user: {};
}

export interface User {
  _id: string;
  name?: string;
  email?: string;
  gender?: string;
  ageType?: string;
  role?: string;
  IsBlocked?: boolean;
  isSocialRegister?: boolean;
  activeStatus?: boolean;
}

export const BlockUserState: blockUser = {
  loading: false,
  error: null,
  user: {},
};

export interface BlockedUsers {
  loading: boolean;
  error: string | null;
  users: [];
  page: number;
  totalPages: number;
}

export const BlockedUsersState: BlockedUsers = {
  loading: true,
  error: null,
  users: [],
  page: 0,
  totalPages: 0,
};
