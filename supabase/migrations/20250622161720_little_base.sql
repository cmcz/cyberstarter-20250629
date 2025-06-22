/*
  # Add Demo Instructor Profile

  1. New Data
    - Demo instructor profile for creating sample content
    - Uses a fixed UUID that can be referenced in other migrations

  2. Security
    - Uses existing RLS policies
    - Profile will be created with instructor role
*/

-- Insert demo instructor profile
INSERT INTO profiles (
  id,
  email,
  full_name,
  role,
  created_at,
  updated_at
) VALUES (
  '77777777-7777-7777-7777-777777777777',
  'demo.instructor@learnhub.com',
  'Demo Instructor',
  'instructor',
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  full_name = EXCLUDED.full_name,
  role = EXCLUDED.role,
  updated_at = EXCLUDED.updated_at;