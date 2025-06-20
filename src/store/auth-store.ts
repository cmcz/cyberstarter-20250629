import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@supabase/supabase-js';
import type { User as AppUser } from '@/types';

interface AuthState {
  user: User | null;
  profile: AppUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setProfile: (profile: AppUser | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      profile: null,
      isLoading: true,
      isAuthenticated: false,

      setUser: (user) => {
        set({ 
          user, 
          isAuthenticated: !!user,
          isLoading: false 
        });
      },

      setProfile: (profile) => {
        set({ profile });
      },

      setLoading: (isLoading) => {
        set({ isLoading });
      },

      logout: () => {
        set({
          user: null,
          profile: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        profile: state.profile,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);