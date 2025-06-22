/*
  # Create enrollments table

  1. New Tables
    - `enrollments`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `course_id` (uuid, references courses)
      - `enrolled_at` (timestamp)
      - `completed_at` (timestamp, optional)
      - `progress_percentage` (integer, default 0)
      - `last_accessed_lesson_id` (uuid, optional)

  2. Security
    - Enable RLS on `enrollments` table
    - Add policy for users to read their own enrollments
    - Add policy for users to create their own enrollments
    - Add policy for instructors to view enrollments for their courses

  3. Functions
    - Function to update course enrollment count
    - Trigger to update enrollment count when enrollment is created/deleted
*/

-- Create enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  progress_percentage integer DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  last_accessed_lesson_id uuid REFERENCES lessons(id),
  UNIQUE(user_id, course_id)
);

-- Enable RLS
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read their own enrollments"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create their own enrollments"
  ON enrollments
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own enrollments"
  ON enrollments
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Instructors can view enrollments for their courses"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM courses 
      WHERE courses.id = enrollments.course_id 
      AND courses.instructor_id = auth.uid()
    )
  );

-- Function to update course enrollment count
CREATE OR REPLACE FUNCTION update_course_enrollment_count()
RETURNS trigger AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE courses 
    SET enrollment_count = enrollment_count + 1 
    WHERE id = NEW.course_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE courses 
    SET enrollment_count = enrollment_count - 1 
    WHERE id = OLD.course_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create triggers for enrollment count
CREATE TRIGGER update_enrollment_count_on_insert
  AFTER INSERT ON enrollments
  FOR EACH ROW EXECUTE FUNCTION update_course_enrollment_count();

CREATE TRIGGER update_enrollment_count_on_delete
  AFTER DELETE ON enrollments
  FOR EACH ROW EXECUTE FUNCTION update_course_enrollment_count();