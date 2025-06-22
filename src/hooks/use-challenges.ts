import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { mockChallenges, USE_MOCK_DATA } from '@/data/mock-challenges';
import { useUIStore } from '@/store/ui-store';
import type { Challenge, ChallengeCategory, ChallengeType, DifficultyLevel } from '@/types';

export const useChallenges = () => {
  return useQuery({
    queryKey: ['challenges'],
    queryFn: async (): Promise<Challenge[]> => {
      if (USE_MOCK_DATA) {
        // Simulate network delay for realistic development experience
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockChallenges;
      }

      const { data, error } = await supabase
        .from('challenges')
        .select(`
          *,
          instructor:profiles!instructor_id(*)
        `)
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) throw new Error(handleSupabaseError(error));
      return data || [];
    },
  });
};

export const useChallenge = (id: string) => {
  return useQuery({
    queryKey: ['challenge', id],
    queryFn: async (): Promise<Challenge | null> => {
      if (USE_MOCK_DATA) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));
        return mockChallenges.find(challenge => challenge.id === id) || null;
      }

      const { data, error } = await supabase
        .from('challenges')
        .select(`
          *,
          instructor:profiles!instructor_id(*),
          modules(
            *,
            lessons(*)
          )
        `)
        .eq('id', id)
        .eq('is_published', true)
        .single();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    enabled: !!id,
  });
};

export const useChallengeEnrollments = () => {
  return useQuery({
    queryKey: ['challenge-enrollments'],
    queryFn: async () => {
      if (USE_MOCK_DATA) {
        // Return mock enrollment data
        await new Promise(resolve => setTimeout(resolve, 300));
        return [
          {
            id: 'challenge-enrollment-1',
            user_id: 'user-1',
            challenge_id: 'challenge-1',
            enrolled_at: '2024-01-10T14:30:00Z',
            progress_percentage: 45,
            last_accessed_lesson_id: 'ctf-lesson-1',
          },
          {
            id: 'challenge-enrollment-2',
            user_id: 'user-1',
            challenge_id: 'challenge-2',
            enrolled_at: '2024-01-20T08:00:00Z',
            progress_percentage: 20,
            last_accessed_lesson_id: 'make-your-own-lesson-1',
          },
        ];
      }

      const { data, error } = await supabase
        .from('challenge_enrollments')
        .select(`
          *,
          challenge:challenges(*)
        `)
        .order('enrolled_at', { ascending: false });

      if (error) throw new Error(handleSupabaseError(error));
      return data || [];
    },
  });
};

export const useChallengeEnrollment = (challengeId: string) => {
  return useQuery({
    queryKey: ['challenge-enrollment', challengeId],
    queryFn: async () => {
      if (USE_MOCK_DATA) {
        // Return mock enrollment for the challenge
        await new Promise(resolve => setTimeout(resolve, 200));
        return {
          id: 'challenge-enrollment-1',
          user_id: 'user-1',
          challenge_id: challengeId,
          enrolled_at: '2024-01-10T14:30:00Z',
          progress_percentage: 45,
          last_accessed_lesson_id: 'ctf-lesson-1',
        };
      }

      const { data, error } = await supabase
        .from('challenge_enrollments')
        .select('*')
        .eq('challenge_id', challengeId)
        .maybeSingle();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    enabled: !!challengeId,
  });
};

export const useEnrollInChallenge = () => {
  const queryClient = useQueryClient();
  const { addNotification } = useUIStore();

  return useMutation({
    mutationFn: async (challengeId: string) => {
      if (USE_MOCK_DATA) {
        // Simulate enrollment in mock mode
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
          id: 'new-challenge-enrollment',
          user_id: 'user-1',
          challenge_id: challengeId,
          enrolled_at: new Date().toISOString(),
          progress_percentage: 0,
          last_accessed_lesson_id: null,
        };
      }

      const { data, error } = await supabase
        .from('challenge_enrollments')
        .insert({
          challenge_id: challengeId,
          progress_percentage: 0,
        })
        .select()
        .single();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['challenge-enrollments'] });
      addNotification({
        type: 'success',
        title: 'Enrolled successfully!',
        message: 'You can now access the challenge content.',
      });
    },
    onError: (error: Error) => {
      addNotification({
        type: 'error',
        title: 'Enrollment failed',
        message: error.message,
      });
    },
  });
};