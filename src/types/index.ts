export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export type UserRole = 'student' | 'instructor' | 'admin';

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail_url?: string;
  instructor_id: string;
  instructor?: User;
  category: CourseCategory;
  type: CourseType;
  difficulty_level: DifficultyLevel;
  duration_hours: number;
  price: number;
  is_published: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
  enrollment_count?: number;
  rating?: number;
  modules?: Module[];
}

export type CourseType = 'lecture' | 'ctf' | 'coding';
export type CourseCategory = 
  | 'programming' 
  | 'cybersecurity' 
  | 'data-science' 
  | 'web-development' 
  | 'mobile-development' 
  | 'devops' 
  | 'ai-ml' 
  | 'blockchain' 
  | 'other';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  description: string;
  content_type: LessonContentType;
  content_url?: string;
  content_text?: string;
  duration_minutes?: number;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  quiz_questions?: QuizQuestion[];
}

export type LessonContentType = 'text' | 'video' | 'quiz' | 'code_challenge';

export interface QuizQuestion {
  id: string;
  lesson_id: string;
  question: string;
  type: QuestionType;
  options?: string[];
  correct_answer: string;
  explanation?: string;
  order_index: number;
}

export type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer';

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at?: string;
  progress_percentage: number;
  last_accessed_lesson_id?: string;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at?: string;
  time_spent_minutes: number;
  quiz_score?: number;
}

export interface Discussion {
  id: string;
  lesson_id: string;
  user_id: string;
  user?: User;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  replies?: DiscussionReply[];
}

export interface DiscussionReply {
  id: string;
  discussion_id: string;
  user_id: string;
  user?: User;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface WeeklyChallenge {
  id: string;
  title: string;
  description: string;
  difficulty_level: DifficultyLevel;
  category: CourseCategory;
  start_date: string;
  end_date: string;
  prize_amount?: number;
  max_participants?: number;
  is_active: boolean;
  created_at: string;
}

export interface ChallengeSubmission {
  id: string;
  challenge_id: string;
  user_id: string;
  user?: User;
  submission_url: string;
  description: string;
  submitted_at: string;
  score?: number;
  feedback?: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  count: number;
  page: number;
  limit: number;
  total_pages: number;
}