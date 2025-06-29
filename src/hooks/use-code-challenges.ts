import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, handleSupabaseError } from '@/lib/supabase';
import { mockCodeChallenges, getCodeChallengesByLessonId } from '@/data/mock-code-challenges';
import { USE_MOCK_DATA } from '@/data/mock-challenges';
import { useUIStore } from '@/store/ui-store';
import type { CodeChallenge, CodeSubmission } from '@/types';

export const useCodeChallenge = (lessonId: string) => {
  return useQuery({
    queryKey: ['code-challenge', lessonId],
    queryFn: async (): Promise<CodeChallenge | null> => {
      if (USE_MOCK_DATA) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));
        const challenges = getCodeChallengesByLessonId(lessonId);
        return challenges.length > 0 ? challenges[0] : null;
      }

      const { data, error } = await supabase
        .from('code_challenges')
        .select(`
          *,
          test_cases(*)
        `)
        .eq('lesson_id', lessonId)
        .single();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    enabled: !!lessonId,
  });
};

export const useCodeSubmission = (challengeId: string, userId: string) => {
  return useQuery({
    queryKey: ['code-submission', challengeId, userId],
    queryFn: async (): Promise<CodeSubmission | null> => {
      if (USE_MOCK_DATA) {
        // Return mock submission data
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Simulate different submission states
        const mockSubmissions: Record<string, CodeSubmission> = {
          'challenge-shell-1': {
            id: 'submission-1',
            user_id: userId,
            challenge_id: challengeId,
            github_repo_url: 'https://github.com/user/my-shell',
            commit_hash: 'abc123def456',
            submitted_at: '2024-01-20T15:30:00Z',
            status: 'passed',
            total_score: 85,
            test_results: [
              {
                test_case_id: 'test-basic-commands',
                test_name: 'Basic Command Execution',
                passed: true,
                points_earned: 25,
                execution_time_ms: 150,
              },
              {
                test_case_id: 'test-pipes',
                test_name: 'Pipe Support',
                passed: true,
                points_earned: 30,
                execution_time_ms: 200,
              },
              {
                test_case_id: 'test-redirection',
                test_name: 'I/O Redirection',
                passed: false,
                points_earned: 0,
                execution_time_ms: 100,
                error_message: 'Redirection not properly implemented',
              },
              {
                test_case_id: 'test-background-processes',
                test_name: 'Background Processes',
                passed: true,
                points_earned: 20,
                execution_time_ms: 300,
              },
            ],
            feedback: 'Great work on the basic functionality! Consider improving I/O redirection handling.',
          },
        };

        return mockSubmissions[challengeId] || null;
      }

      const { data, error } = await supabase
        .from('code_submissions')
        .select(`
          *,
          test_results(*)
        `)
        .eq('challenge_id', challengeId)
        .eq('user_id', userId)
        .order('submitted_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    enabled: !!challengeId && !!userId,
  });
};

export const useSubmitCodeChallenge = () => {
  const queryClient = useQueryClient();
  const { addNotification } = useUIStore();

  return useMutation({
    mutationFn: async ({ 
      challengeId, 
      repoUrl 
    }: { 
      challengeId: string; 
      repoUrl: string; 
    }) => {
      if (USE_MOCK_DATA) {
        // Simulate submission processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        return {
          id: 'new-submission',
          challenge_id: challengeId,
          github_repo_url: repoUrl,
          commit_hash: 'new-commit-hash',
          submitted_at: new Date().toISOString(),
          status: 'testing' as const,
        };
      }

      const { data, error } = await supabase
        .from('code_submissions')
        .insert({
          challenge_id: challengeId,
          github_repo_url: repoUrl,
          status: 'pending',
        })
        .select()
        .single();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ 
        queryKey: ['code-submission', data.challenge_id] 
      });
      
      addNotification({
        type: 'success',
        title: 'Solution Submitted!',
        message: 'Your code is being tested. Results will be available shortly.',
      });
    },
    onError: (error: Error) => {
      addNotification({
        type: 'error',
        title: 'Submission Failed',
        message: error.message,
      });
    },
  });
};