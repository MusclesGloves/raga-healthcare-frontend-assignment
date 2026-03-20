import { create } from 'zustand';
import type { AuthState } from './types';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isAuthReady: false,
  setUser: (user) =>
    set({
      user,
      isAuthenticated: Boolean(user),
    }),
  setAuthReady: (value) =>
    set({
      isAuthReady: value,
    }),
  resetAuth: () =>
    set({
      user: null,
      isAuthenticated: false,
      isAuthReady: true,
    }),
}));