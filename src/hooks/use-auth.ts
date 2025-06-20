import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, handleSupabaseError } from '@/lib/supabase';
import { useAuthStore } from '@/store/auth-store';
import { useUIStore } from '@/store/ui-store';
import type { User as AppUser } from '@/types';

export const useAuth = () => {
  const { user, profile, isLoading, setUser, setProfile, setLoading, logout } = useAuthStore();
  const { addNotification } = useUIStore();
  const queryClient = useQueryClient();

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        
        if (event === 'SIGNED_OUT') {
          logout();
          queryClient.clear();
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [setUser, setLoading, logout, queryClient]);

  // Fetch user profile
  const { data: userProfile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async (): Promise<AppUser> => {
      if (!user) throw new Error('No user found');
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    enabled: !!user,
  });

  // Update profile in store when data changes
  useEffect(() => {
    if (userProfile) {
      setProfile(userProfile);
    }
  }, [userProfile, setProfile]);

  // Sign in mutation
  const signInMutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    onSuccess: () => {
      addNotification({
        type: 'success',
        title: 'Welcome back!',
        message: 'You have successfully signed in.',
      });
    },
    onError: (error: Error) => {
      addNotification({
        type: 'error',
        title: 'Sign in failed',
        message: error.message,
      });
    },
  });

  // Sign up mutation
  const signUpMutation = useMutation({
    mutationFn: async ({ 
      email, 
      password, 
      fullName 
    }: { 
      email: string; 
      password: string; 
      fullName: string;
    }) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    onSuccess: () => {
      addNotification({
        type: 'success',
        title: 'Account created!',
        message: 'Please check your email to verify your account.',
      });
    },
    onError: (error: Error) => {
      addNotification({
        type: 'error',
        title: 'Sign up failed',
        message: error.message,
      });
    },
  });

  // Sign out mutation
  const signOutMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error(handleSupabaseError(error));
    },
    onSuccess: () => {
      addNotification({
        type: 'success',
        title: 'Signed out',
        message: 'You have been successfully signed out.',
      });
    },
    onError: (error: Error) => {
      addNotification({
        type: 'error',
        title: 'Sign out failed',
        message: error.message,
      });
    },
  });

  return {
    user,
    profile,
    isLoading,
    isAuthenticated: !!user,
    signIn: signInMutation.mutate,
    signUp: signUpMutation.mutate,
    signOut: signOutMutation.mutate,
    isSigningIn: signInMutation.isPending,
    isSigningUp: signUpMutation.isPending,
    isSigningOut: signOutMutation.isPending,
  };
};