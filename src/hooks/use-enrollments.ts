import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, handleSupabaseError, getAuthenticatedUser } from '@/lib/supabase';
import { useUIStore } from '@/store/ui-store';
import { USE_MOCK_DATA } from '@/data/mock-courses';
import type { Enrollment } from '@/types';

export const useEnrollments = () => {
  return useQuery({
    queryKey: ['enrollments'],
    queryFn: async (): Promise<Enrollment[]> => {
      if (USE_MOCK_DATA) {
        // Return mock enrollment data
        await new Promise(resolve => setTimeout(resolve, 300));
        return [
          {
            id: 'enrollment-1',
            user_id: 'user-1',
            course_id: '1',
            enrolled_at: '2024-01-15T10:00:00Z',
            progress_percentage: 65,
            last_accessed_lesson_id: 'lesson-2',
          },
          {
            id: 'enrollment-2',
            user_id: 'user-1',
            course_id: '2',
            enrolled_at: '2024-01-10T14:30:00Z',
            progress_percentage: 30,
            last_accessed_lesson_id: 'lesson-1',
          },
        ];
      }

      const user = await getAuthenticatedUser();
      
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          course:courses(*)
        `)
        .eq('user_id', user.id)
        .order('enrolled_at', { ascending: false });

      if (error) throw new Error(handleSupabaseError(error));
      return data || [];
    },
  });
};

export const useEnrollment = (courseId: string) => {
  return useQuery({
    queryKey: ['enrollment', courseId],
    queryFn: async (): Promise<Enrollment | null> => {
      if (USE_MOCK_DATA) {
        // Return mock enrollment for the course
        await new Promise(resolve => setTimeout(resolve, 200));
        return {
          id: 'enrollment-1',
          user_id: 'user-1',
          course_id: courseId,
          enrolled_at: '2024-01-15T10:00:00Z',
          progress_percentage: 65,
          last_accessed_lesson_id: 'lesson-2',
        };
      }

      const user = await getAuthenticatedUser();
      
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', user.id)
        .eq('course_id', courseId)
        .maybeSingle();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    enabled: !!courseId,
  });
};

export const useEnrollInCourse = () => {
  const queryClient = useQueryClient();
  const { addNotification } = useUIStore();

  return useMutation({
    mutationFn: async (courseId: string) => {
      if (USE_MOCK_DATA) {
        // Simulate enrollment in mock mode
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
          id: 'new-enrollment',
          user_id: 'user-1',
          course_id: courseId,
          enrolled_at: new Date().toISOString(),
          progress_percentage: 0,
          last_accessed_lesson_id: null,
        };
      }

      const user = await getAuthenticatedUser();
      
      const { data, error } = await supabase
        .from('enrollments')
        .insert({
          user_id: user.id,
          course_id: courseId,
          progress_percentage: 0,
        })
        .select()
        .single();

      if (error) throw new Error(handleSupabaseError(error));
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enrollments'] });
      addNotification({
        type: 'success',
        title: 'Enrolled successfully!',
        message: 'You can now access the course content.',
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