/*
  # Create lessons table

  1. New Tables
    - `lessons`
      - `id` (uuid, primary key)
      - `module_id` (uuid, references modules)
      - `title` (text)
      - `description` (text)
      - `content_type` (text)
      - `content_url` (text, optional)
      - `content_text` (text, optional)
      - `duration_minutes` (integer, optional)
      - `order_index` (integer)
      - `is_published` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `lessons` table
    - Add policy for users to read lessons of courses they have access to
    - Add policy for instructors to manage lessons of their courses
*/

-- Create lessons table
CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid REFERENCES modules(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  content_type text NOT NULL CHECK (content_type IN ('text', 'video', 'quiz', 'code_challenge')),
  content_url text,
  content_text text,
  duration_minutes integer,
  order_index integer NOT NULL,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read lessons of published courses"
  ON lessons
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM modules 
      JOIN courses ON courses.id = modules.course_id
      WHERE modules.id = lessons.module_id 
      AND courses.is_published = true
    )
  );

CREATE POLICY "Instructors can manage lessons of their courses"
  ON lessons
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM modules 
      JOIN courses ON courses.id = modules.course_id
      WHERE modules.id = lessons.module_id 
      AND courses.instructor_id = auth.uid()
    )
  );

-- Create trigger for updated_at
CREATE TRIGGER update_lessons_updated_at
  BEFORE UPDATE ON lessons
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();