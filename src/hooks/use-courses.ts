import { useQuery } from '@tanstack/react-query';
import { supabase, handleSupabaseError } from '@/lib/supabase';
import { mockCourses, USE_MOCK_DATA } from '@/data/mock-courses';
import type { Course } from '@/types';

export const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async (): Promise<Course[]> => {
      if (USE_MOCK_DATA) {
        // Simulate network delay for realistic development experience
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockCourses;
      }

      const { data, error } = await supabase
        .from('courses')
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

export const useCourse = (id: string) => {
  return useQuery({
    queryKey: ['course', id],
    queryFn: async (): Promise<Course | null> => {
      if (USE_MOCK_DATA) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));
        return mockCourses.find(course => course.id === id) || null;
      }

      const { data, error } = await supabase
        .from('courses')
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