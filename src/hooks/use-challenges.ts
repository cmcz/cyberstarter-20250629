import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/auth-store';
import type { Challenge, Module, Lesson } from '@/types';
import { 
  mockChallenges, 
  getChallengeModulesByChallengeId, 
  getChallengeLessonsByModuleId, 
  USE_MOCK_DATA 
} from '@/data/mock-challenges';

// Get all challenges
export const useChallenges = () => {
  return useQuery({
    queryKey: ['challenges'],
    queryFn: async (): Promise<Challenge[]> => {
      if (USE_MOCK_DATA) {
        return mockChallenges;
      }

      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .in('type', ['ctf', 'algorithm', 'make_your_own'])
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    },
  });
};

// Get single challenge by ID
export const useChallenge = (challengeId: string) => {
  return useQuery({
    queryKey: ['challenge', challengeId],
    queryFn: async (): Promise<Challenge | null> => {
      if (USE_MOCK_DATA) {
        return mockChallenges.find(challenge => challenge.id === challengeId) || null;
      }

      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', challengeId)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!challengeId,
  });
};

// Get challenge modules
export const useChallengeModules = (challengeId: string) => {
  return useQuery({
    queryKey: ['challenge-modules', challengeId],
    queryFn: async (): Promise<Module[]> => {
      if (USE_MOCK_DATA) {
        return getChallengeModulesByChallengeId(challengeId);
      }

      const { data, error } = await supabase
        .from('modules')
        .select('*')
        .eq('course_id', challengeId)
        .eq('is_published', true)
        .order('order_index');

      if (error) throw error;
      return data || [];
    },
    enabled: !!challengeId,
  });
};

// Get challenge lessons by module
export const useChallengeLessons = (moduleId: string) => {
  return useQuery({
    queryKey: ['challenge-lessons', moduleId],
    queryFn: async (): Promise<Lesson[]> => {
      if (USE_MOCK_DATA) {
        return getChallengeLessonsByModuleId(moduleId);
      }

      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('module_id', moduleId)
        .eq('is_published', true)
        .order('order_index');

      if (error) throw error;
      return data || [];
    },
    enabled: !!moduleId,
  });
};

// Get challenge enrollment status
export const useChallengeEnrollment = (challengeId: string) => {
  const { user } = useAuthStore();

  return useQuery({
    queryKey: ['challenge-enrollment', challengeId, user?.id],
    queryFn: async () => {
      if (USE_MOCK_DATA) {
        // Mock enrollment - assume user is enrolled in demo challenge
        return challengeId === 'demo-challenge-1' ? { enrolled: true } : { enrolled: false };
      }

      if (!user) return { enrolled: false };

      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('course_id', challengeId)
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return { enrolled: !!data };
    },
    enabled: !!challengeId,
  });
};

// Enroll in challenge
export const useEnrollInChallenge = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  return useMutation({
    mutationFn: async (challengeId: string) => {
      if (USE_MOCK_DATA) {
        // Mock enrollment success
        return { success: true };
      }

      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('enrollments')
        .insert({
          course_id: challengeId,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: (_, challengeId) => {
      // Invalidate enrollment query to refetch
      queryClient.invalidateQueries({
        queryKey: ['challenge-enrollment', challengeId],
      });
    },
  });
};