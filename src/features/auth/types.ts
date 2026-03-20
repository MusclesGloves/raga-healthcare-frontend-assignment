import type { User } from 'firebase/auth';

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isAuthReady: boolean;
  setUser: (user: User | null) => void;
  setAuthReady: (value: boolean) => void;
  resetAuth: () => void;
};