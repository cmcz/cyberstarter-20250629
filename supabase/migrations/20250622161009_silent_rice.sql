/*
  # Fix handle_new_user function for signup

  1. Database Changes
    - Drop existing trigger first to avoid dependency issues
    - Recreate handle_new_user function with proper error handling
    - Recreate trigger to ensure proper user profile creation

  2. Security
    - Function runs with SECURITY DEFINER to ensure proper permissions
    - Includes error handling to prevent signup failures
*/

-- Drop the trigger first to remove dependency
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Now we can safely drop the function
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Create the improved handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    role,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    'student',
    NOW(),
    NOW()
  );
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log the error but don't fail the user creation
    RAISE LOG 'Error creating profile for user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();