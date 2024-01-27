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
