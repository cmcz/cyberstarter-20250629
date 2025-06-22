/*
  # Create events and related tables

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `thumbnail_url` (text, optional)
      - `category` (text)
      - `type` (text)
      - `difficulty_level` (text)
      - `start_date` (timestamp)
      - `end_date` (timestamp)
      - `registration_deadline` (timestamp, optional)
      - `prize_pool` (decimal, optional)
      - `max_participants` (integer, optional)
      - `is_active` (boolean)
      - `is_featured` (boolean)
      - `tags` (text array)
      - `rules` (text array)
      - `requirements` (text array)
      - `participant_count` (integer, default 0)
      - `organizer_id` (uuid, references profiles)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `event_participants`
      - `id` (uuid, primary key)
      - `event_id` (uuid, references events)
      - `user_id` (uuid, references profiles)
      - `registered_at` (timestamp)
      - `status` (text)
      - `current_score` (integer, default 0)
      - `current_rank` (integer, default 0)
      - `last_submission_at` (timestamp, optional)
      - `completion_time` (integer, optional)

  2. Security
    - Enable RLS on both tables
    - Add appropriate policies for reading and managing events
*/

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  thumbnail_url text,
  category text NOT NULL,
  type text NOT NULL CHECK (type IN ('weekly_challenge', 'monthly_competition', 'hackathon', 'ctf_tournament', 'coding_contest')),
  difficulty_level text NOT NULL CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  registration_deadline timestamptz,
  prize_pool decimal(10,2),
  max_participants integer,
  is_active boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  tags text[] DEFAULT '{}',
  rules text[] DEFAULT '{}',
  requirements text[] DEFAULT '{}',
  participant_count integer DEFAULT 0,
  organizer_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CHECK (end_date > start_date),
  CHECK (registration_deadline IS NULL OR registration_deadline <= start_date)
);

-- Create event_participants table
CREATE TABLE IF NOT EXISTS event_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  registered_at timestamptz DEFAULT now(),
  status text DEFAULT 'registered' CHECK (status IN ('registered', 'active', 'completed', 'disqualified')),
  current_score integer DEFAULT 0,
  current_rank integer DEFAULT 0,
  last_submission_at timestamptz,
  completion_time integer, -- in minutes
  UNIQUE(event_id, user_id)
);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_participants ENABLE ROW LEVEL SECURITY;

-- Events policies
CREATE POLICY "Active events are viewable by everyone"
  ON events
  FOR SELECT
  TO authenticated
  USING (is_active = true);

CREATE POLICY "Organizers can manage their own events"
  ON events
  FOR ALL
  TO authenticated
  USING (organizer_id = auth.uid());

-- Event participants policies
CREATE POLICY "Users can read event participants"
  ON event_participants
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can register for events"
  ON event_participants
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own participation"
  ON event_participants
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Organizers can manage participants of their events"
  ON event_participants
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM events 
      WHERE events.id = event_participants.event_id 
      AND events.organizer_id = auth.uid()
    )
  );

-- Function to update event participant count
CREATE OR REPLACE FUNCTION update_event_participant_count()
RETURNS trigger AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE events 
    SET participant_count = participant_count + 1 
    WHERE id = NEW.event_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE events 
    SET participant_count = participant_count - 1 
    WHERE id = OLD.event_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create triggers for participant count
CREATE TRIGGER update_participant_count_on_insert
  AFTER INSERT ON event_participants
  FOR EACH ROW EXECUTE FUNCTION update_event_participant_count();

CREATE TRIGGER update_participant_count_on_delete
  AFTER DELETE ON event_participants
  FOR EACH ROW EXECUTE FUNCTION update_event_participant_count();

-- Create triggers for updated_at
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();