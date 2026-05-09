import { create } from "zustand";

import type { User } from "../types";

type AuthState = {
  user: User | null;
  isAnonymous: boolean;
  isLoading: boolean;
  signInWithEmail: (email: string) => void;
  signUpWithEmail: (email: string) => void;
  continueAnonymously: () => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
};

const createDemoUser = (email: string, name: string): User => ({
  uid: `user-${Date.now()}`,
  name,
  email,
  isAnonymous: false,
  language: "English",
  groupsJoined: ["anxiety", "relationships"]
});

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAnonymous: false,
  isLoading: false,
  signInWithEmail: (email) =>
    set({
      user: createDemoUser(email, email.split("@")[0] || "Friend"),
      isAnonymous: false,
      isLoading: false
    }),
  signUpWithEmail: (email) =>
    set({
      user: createDemoUser(email, email.split("@")[0] || "Friend"),
      isAnonymous: false,
      isLoading: false
    }),
  continueAnonymously: () =>
    set({
      user: {
        uid: `anonymous-${Date.now()}`,
        name: "Friend",
        isAnonymous: true,
        language: "English",
        groupsJoined: ["anxiety"]
      },
      isAnonymous: true,
      isLoading: false
    }),
  logout: () => set({ user: null, isAnonymous: false, isLoading: false }),
  updateProfile: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : state.user,
      isAnonymous: data.isAnonymous ?? state.isAnonymous
    }))
}));
