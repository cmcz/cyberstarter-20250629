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

export interface CodeChallenge {
  id: string;
  lesson_id: string;
  title: string;
  description: string;
  challenge_type: 'make_your_own' | 'algorithm' | 'debugging';
  starter_code?: string;
  test_cases: TestCase[];
  github_template_repo?: string;
  submission_requirements: string[];
  time_limit_minutes?: number;
  difficulty_level: DifficultyLevel;
  created_at: string;
  updated_at: string;
}

export interface TestCase {
  id: string;
  name: string;
  description: string;
  input?: string;
  expected_output?: string;
  test_command: string;
  points: number;
  is_hidden: boolean;
}

export interface CodeSubmission {
  id: string;
  user_id: string;
  challenge_id: string;
  github_repo_url: string;
  commit_hash: string;
  submitted_at: string;
  status: 'pending' | 'testing' | 'passed' | 'failed' | 'error';
  test_results?: TestResult[];
  total_score?: number;
  feedback?: string;
}

export interface TestResult {
  test_case_id: string;
  test_name: string;
  passed: boolean;
  points_earned: number;
  execution_time_ms?: number;
  output?: string;
  error_message?: string;
}

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
  thumbnail_url?: string;
  category: ChallengeCategory;
  type: ChallengeType;
  difficulty_level: DifficultyLevel;
  start_date: string;
  end_date: string;
  prize_amount?: number;
  max_participants?: number;
  is_active: boolean;
  tags: string[];
  enrollment_count?: number;
  rating?: number;
  created_at: string;
  updated_at: string;
}

export type ChallengeType = 'ctf' | 'make_your_own' | 'algorithm' | 'debugging';
export type ChallengeCategory = 
  | 'cybersecurity' 
  | 'systems-programming' 
  | 'web-security' 
  | 'cryptography' 
  | 'reverse-engineering' 
  | 'network-security' 
  | 'binary-exploitation'
  | 'other';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  thumbnail_url?: string;
  instructor_id: string;
  instructor?: User;
  category: ChallengeCategory;
  type: ChallengeType;
  difficulty_level: DifficultyLevel;
  duration_hours?: number;
  is_published: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
  enrollment_count?: number;
  rating?: number;
  modules?: Module[];
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