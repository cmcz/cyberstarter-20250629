/*
  # Create modules table

  1. New Tables
    - `modules`
      - `id` (uuid, primary key)
      - `course_id` (uuid, references courses)
      - `title` (text)
      - `description` (text)
      - `order_index` (integer)
      - `is_published` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `modules` table
    - Add policy for users to read modules of courses they have access to
    - Add policy for instructors to manage modules of their courses
*/

-- Create modules table
CREATE TABLE IF NOT EXISTS modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  order_index integer NOT NULL,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read modules of published courses"
  ON modules
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM courses 
      WHERE courses.id = modules.course_id 
      AND courses.is_published = true
    )
  );

CREATE POLICY "Instructors can manage modules of their courses"
  ON modules
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM courses 
      WHERE courses.id = modules.course_id 
      AND courses.instructor_id = auth.uid()
    )
  );

-- Create trigger for updated_at
CREATE TRIGGER update_modules_updated_at
  BEFORE UPDATE ON modules
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();