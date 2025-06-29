import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Course } from '@/types';
import { mockCourses } from '@/data/mock-courses';

const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

export const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async (): Promise<Course[]> => {
      if (USE_MOCK_DATA) {
        return mockCourses;
      }

      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch courses: ${error.message}`);
      }

      return data || [];
    },
  });
};

export const useCourse = (courseId: string) => {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: async (): Promise<Course | null> => {
      if (USE_MOCK_DATA) {
        return mockCourses.find(course => course.id === courseId) || null;
      }

      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .eq('is_published', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // Course not found
        }
        throw new Error(`Failed to fetch course: ${error.message}`);
      }

      return data;
    },
    enabled: !!courseId,
  });
};