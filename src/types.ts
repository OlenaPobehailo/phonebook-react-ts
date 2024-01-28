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

export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface ContactsState {
  contacts: Contact[];
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
