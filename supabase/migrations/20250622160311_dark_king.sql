/*
  # Create courses table

  1. New Tables
    - `courses`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `thumbnail_url` (text, optional)
      - `instructor_id` (uuid, references profiles)
      - `category` (text)
      - `type` (text)
      - `difficulty_level` (text)
      - `duration_hours` (integer)
      - `price` (decimal)
      - `is_published` (boolean)
      - `tags` (text array)
      - `enrollment_count` (integer, default 0)
      - `rating` (decimal, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `courses` table
    - Add policy for public read access to published courses
    - Add policy for instructors to manage their own courses
*/

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  thumbnail_url text,
  instructor_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  category text NOT NULL,
  type text NOT NULL CHECK (type IN ('lecture', 'ctf', 'coding')),
  difficulty_level text NOT NULL CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  duration_hours integer NOT NULL DEFAULT 0,
  price decimal(10,2) NOT NULL DEFAULT 0,
  is_published boolean DEFAULT false,
  tags text[] DEFAULT '{}',
  enrollment_count integer DEFAULT 0,
  rating decimal(3,2),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Published courses are viewable by everyone"
  ON courses
  FOR SELECT
  TO authenticated
  USING (is_published = true);

CREATE POLICY "Instructors can view their own courses"
  ON courses
  FOR SELECT
  TO authenticated
  USING (instructor_id = auth.uid());

CREATE POLICY "Instructors can create courses"
  ON courses
  FOR INSERT
  TO authenticated
  WITH CHECK (instructor_id = auth.uid());

CREATE POLICY "Instructors can update their own courses"
  ON courses
  FOR UPDATE
  TO authenticated
  USING (instructor_id = auth.uid());

CREATE POLICY "Instructors can delete their own courses"
  ON courses
  FOR DELETE
  TO authenticated
  USING (instructor_id = auth.uid());

-- Create trigger for updated_at
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON courses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();