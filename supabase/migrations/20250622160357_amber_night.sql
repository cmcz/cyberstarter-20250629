/*
  # Create challenges and code challenge tables

  1. New Tables
    - `challenges` (similar to courses but for CTF/coding challenges)
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `thumbnail_url` (text, optional)
      - `instructor_id` (uuid, references profiles)
      - `category` (text)
      - `type` (text)
      - `difficulty_level` (text)
      - `duration_hours` (integer, optional)
      - `is_published` (boolean)
      - `tags` (text array)
      - `enrollment_count` (integer, default 0)
      - `rating` (decimal, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `challenge_enrollments`
      - Similar to enrollments but for challenges

    - `code_challenges`
      - `id` (uuid, primary key)
      - `lesson_id` (uuid, references lessons)
      - `title` (text)
      - `description` (text)
      - `challenge_type` (text)
      - `starter_code` (text, optional)
      - `github_template_repo` (text, optional)
      - `submission_requirements` (text array)
      - `time_limit_minutes` (integer, optional)
      - `difficulty_level` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `test_cases`
      - `id` (uuid, primary key)
      - `challenge_id` (uuid, references code_challenges)
      - `name` (text)
      - `description` (text)
      - `test_command` (text)
      - `points` (integer)
      - `is_hidden` (boolean)

    - `code_submissions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `challenge_id` (uuid, references code_challenges)
      - `github_repo_url` (text)
      - `commit_hash` (text)
      - `submitted_at` (timestamp)
      - `status` (text)
      - `total_score` (integer, optional)
      - `feedback` (text, optional)

  2. Security
    - Enable RLS on all tables
    - Add appropriate policies
*/

-- Create challenges table
CREATE TABLE IF NOT EXISTS challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  thumbnail_url text,
  instructor_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  category text NOT NULL,
  type text NOT NULL CHECK (type IN ('ctf', 'make_your_own', 'algorithm', 'debugging')),
  difficulty_level text NOT NULL CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  duration_hours integer,
  is_published boolean DEFAULT false,
  tags text[] DEFAULT '{}',
  enrollment_count integer DEFAULT 0,
  rating decimal(3,2),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create challenge_enrollments table
CREATE TABLE IF NOT EXISTS challenge_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  challenge_id uuid REFERENCES challenges(id) ON DELETE CASCADE,
  enrolled_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  progress_percentage integer DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  last_accessed_lesson_id uuid REFERENCES lessons(id),
  UNIQUE(user_id, challenge_id)
);

-- Create code_challenges table
CREATE TABLE IF NOT EXISTS code_challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid REFERENCES lessons(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  challenge_type text NOT NULL CHECK (challenge_type IN ('make_your_own', 'algorithm', 'debugging')),
  starter_code text,
  github_template_repo text,
  submission_requirements text[] DEFAULT '{}',
  time_limit_minutes integer,
  difficulty_level text NOT NULL CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create test_cases table
CREATE TABLE IF NOT EXISTS test_cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_id uuid REFERENCES code_challenges(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text NOT NULL,
  test_command text NOT NULL,
  points integer NOT NULL DEFAULT 0,
  is_hidden boolean DEFAULT false
);

-- Create code_submissions table
CREATE TABLE IF NOT EXISTS code_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  challenge_id uuid REFERENCES code_challenges(id) ON DELETE CASCADE,
  github_repo_url text NOT NULL,
  commit_hash text,
  submitted_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'testing', 'passed', 'failed', 'error')),
  total_score integer,
  feedback text
);

-- Enable RLS
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_submissions ENABLE ROW LEVEL SECURITY;

-- Challenges policies
CREATE POLICY "Published challenges are viewable by everyone"
  ON challenges
  FOR SELECT
  TO authenticated
  USING (is_published = true);

CREATE POLICY "Instructors can manage their own challenges"
  ON challenges
  FOR ALL
  TO authenticated
  USING (instructor_id = auth.uid());

-- Challenge enrollments policies
CREATE POLICY "Users can read their own challenge enrollments"
  ON challenge_enrollments
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create their own challenge enrollments"
  ON challenge_enrollments
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own challenge enrollments"
  ON challenge_enrollments
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- Code challenges policies
CREATE POLICY "Users can read code challenges of published challenges"
  ON code_challenges
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM lessons 
      JOIN modules ON modules.id = lessons.module_id
      JOIN challenges ON challenges.id = modules.course_id
      WHERE lessons.id = code_challenges.lesson_id 
      AND challenges.is_published = true
    )
  );

-- Test cases policies
CREATE POLICY "Users can read test cases of accessible code challenges"
  ON test_cases
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM code_challenges 
      JOIN lessons ON lessons.id = code_challenges.lesson_id
      JOIN modules ON modules.id = lessons.module_id
      JOIN challenges ON challenges.id = modules.course_id
      WHERE code_challenges.id = test_cases.challenge_id 
      AND challenges.is_published = true
    )
  );

-- Code submissions policies
CREATE POLICY "Users can read their own code submissions"
  ON code_submissions
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create their own code submissions"
  ON code_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Create triggers for updated_at
CREATE TRIGGER update_challenges_updated_at
  BEFORE UPDATE ON challenges
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_code_challenges_updated_at
  BEFORE UPDATE ON code_challenges
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();