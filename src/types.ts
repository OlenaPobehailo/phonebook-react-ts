export interface RootState {
  contacts: ContactsState;
  filter: FilterState;
}
export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  user: User;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface Payload {
  name: string;
  email: string;
  user: User;
  token: string;
}

export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface ContactsState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

export interface FilterState {
  value: string;
}
