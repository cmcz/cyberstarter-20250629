export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: 'student' | 'instructor' | 'admin';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: 'student' | 'instructor' | 'admin';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: 'student' | 'instructor' | 'admin';
          updated_at?: string;
        };
      };
      courses: {
        Row: {
          id: string;
          title: string;
          description: string;
          thumbnail_url: string | null;
          instructor_id: string;
          category: string;
          type: 'lecture' | 'ctf' | 'coding';
          difficulty_level: 'beginner' | 'intermediate' | 'advanced';
          duration_hours: number;
          price: number;
          is_published: boolean;
          tags: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          thumbnail_url?: string | null;
          instructor_id: string;
          category: string;
          type: 'lecture' | 'ctf' | 'coding';
          difficulty_level: 'beginner' | 'intermediate' | 'advanced';
          duration_hours: number;
          price: number;
          is_published?: boolean;
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          thumbnail_url?: string | null;
          instructor_id?: string;
          category?: string;
          type?: 'lecture' | 'ctf' | 'coding';
          difficulty_level?: 'beginner' | 'intermediate' | 'advanced';
          duration_hours?: number;
          price?: number;
          is_published?: boolean;
          tags?: string[];
          updated_at?: string;
        };
      };
      enrollments: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          enrolled_at: string;
          completed_at: string | null;
          progress_percentage: number;
          last_accessed_lesson_id: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          enrolled_at?: string;
          completed_at?: string | null;
          progress_percentage?: number;
          last_accessed_lesson_id?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          course_id?: string;
          enrolled_at?: string;
          completed_at?: string | null;
          progress_percentage?: number;
          last_accessed_lesson_id?: string | null;
        };
      };
      modules: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          description: string;
          order_index: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: string;
          description: string;
          order_index: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          course_id?: string;
          title?: string;
          description?: string;
          order_index?: number;
          is_published?: boolean;
          updated_at?: string;
        };
      };
      lessons: {
        Row: {
          id: string;
          module_id: string;
          title: string;
          description: string;
          content_type: 'text' | 'video' | 'quiz' | 'code_challenge';
          content_url: string | null;
          content_text: string | null;
          duration_minutes: number | null;
          order_index: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          module_id: string;
          title: string;
          description: string;
          content_type: 'text' | 'video' | 'quiz' | 'code_challenge';
          content_url?: string | null;
          content_text?: string | null;
          duration_minutes?: number | null;
          order_index: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          module_id?: string;
          title?: string;
          description?: string;
          content_type?: 'text' | 'video' | 'quiz' | 'code_challenge';
          content_url?: string | null;
          content_text?: string | null;
          duration_minutes?: number | null;
          order_index?: number;
          is_published?: boolean;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}