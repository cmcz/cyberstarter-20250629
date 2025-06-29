/*
  # Add Demo Challenge with existing instructor

  1. New Data
    - JavaScript fundamentals challenge using existing instructor
    - Complete with modules and coding exercises
    - Algorithm-based challenge type

  2. Challenge Structure
    - Challenge: JavaScript Fundamentals Challenge
    - Module: JavaScript Algorithm Challenges
    - Lessons: Array manipulation and function exercises
*/

-- Insert demo challenge using existing instructor from sample data
INSERT INTO challenges (
  id,
  title,
  description,
  thumbnail_url,
  instructor_id,
  category,
  type,
  difficulty_level,
  duration_hours,
  is_published,
  tags,
  enrollment_count,
  rating,
  created_at,
  updated_at
) VALUES (
  '99999999-9999-9999-9999-999999999999',
  'JavaScript Fundamentals Challenge',
  'Test your JavaScript knowledge with practical coding exercises. Build functions, work with arrays, and solve real-world problems.',
  'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
  '22222222-2222-2222-2222-222222222222', -- Use existing instructor from sample data
  'web-development',
  'algorithm',
  'beginner',
  4,
  true,
  ARRAY['javascript', 'algorithms', 'functions', 'arrays', 'beginner'],
  1250,
  4.7,
  '2024-01-03T10:00:00Z',
  '2024-01-03T10:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail_url = EXCLUDED.thumbnail_url,
  instructor_id = EXCLUDED.instructor_id,
  category = EXCLUDED.category,
  type = EXCLUDED.type,
  difficulty_level = EXCLUDED.difficulty_level,
  duration_hours = EXCLUDED.duration_hours,
  is_published = EXCLUDED.is_published,
  tags = EXCLUDED.tags,
  enrollment_count = EXCLUDED.enrollment_count,
  rating = EXCLUDED.rating,
  updated_at = EXCLUDED.updated_at;

-- Insert challenge module
INSERT INTO modules (
  id,
  course_id,
  title,
  description,
  order_index,
  is_published,
  created_at,
  updated_at
) VALUES (
  '99999999-9999-9999-9999-999999999998',
  '99999999-9999-9999-9999-999999999999',
  'JavaScript Algorithm Challenges',
  'Practice JavaScript with algorithm and problem-solving challenges.',
  1,
  true,
  '2024-01-03T10:00:00Z',
  '2024-01-03T10:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  course_id = EXCLUDED.course_id,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  order_index = EXCLUDED.order_index,
  is_published = EXCLUDED.is_published,
  updated_at = EXCLUDED.updated_at;

-- Insert challenge lessons
INSERT INTO lessons (
  id,
  module_id,
  title,
  description,
  content_type,
  content_text,
  duration_minutes,
  order_index,
  is_published,
  created_at,
  updated_at
) VALUES 
(
  '99999999-9999-9999-9999-999999999997',
  '99999999-9999-9999-9999-999999999998',
  'Array Sum Challenge',
  'Write a function to calculate the sum of all numbers in an array.',
  'code_challenge',
  '# Array Sum Challenge

## Objective
Write a JavaScript function that calculates the sum of all numbers in an array.

## Challenge Description
Create a function called `arraySum` that takes an array of numbers as input and returns the sum of all elements.

## Requirements
- Function name: `arraySum`
- Input: Array of numbers
- Output: Sum of all numbers in the array
- Handle empty arrays (should return 0)

## Examples
```javascript
arraySum([1, 2, 3, 4, 5]) // Should return 15
arraySum([10, -5, 3]) // Should return 8
arraySum([]) // Should return 0
arraySum([42]) // Should return 42
```

## Starter Code
```javascript
function arraySum(numbers) {
    // Your code here
    
}

// Test your function
console.log(arraySum([1, 2, 3, 4, 5])); // Expected: 15
console.log(arraySum([10, -5, 3])); // Expected: 8
console.log(arraySum([])); // Expected: 0
```

## Hints
- You can use a for loop to iterate through the array
- Initialize a variable to store the sum
- Add each number to the sum
- Don''t forget to handle the empty array case!

Good luck!',
  30,
  1,
  true,
  '2024-01-03T10:00:00Z',
  '2024-01-03T10:00:00Z'
),
(
  '99999999-9999-9999-9999-999999999996',
  '99999999-9999-9999-9999-999999999998',
  'Find Maximum Number',
  'Create a function that finds the largest number in an array.',
  'code_challenge',
  '# Find Maximum Number Challenge

## Objective
Write a JavaScript function that finds the largest number in an array.

## Challenge Description
Create a function called `findMax` that takes an array of numbers as input and returns the largest number.

## Requirements
- Function name: `findMax`
- Input: Array of numbers (non-empty)
- Output: The largest number in the array
- Handle negative numbers correctly

## Examples
```javascript
findMax([1, 5, 3, 9, 2]) // Should return 9
findMax([-1, -5, -3]) // Should return -1
findMax([42]) // Should return 42
findMax([7, 7, 7, 7]) // Should return 7
```

## Starter Code
```javascript
function findMax(numbers) {
    // Your code here
    
}

// Test your function
console.log(findMax([1, 5, 3, 9, 2])); // Expected: 9
console.log(findMax([-1, -5, -3])); // Expected: -1
console.log(findMax([42])); // Expected: 42
```

## Hints
- Start by assuming the first element is the maximum
- Compare each subsequent element with your current maximum
- Update the maximum if you find a larger number
- Consider using Math.max() or a simple loop

Good luck!',
  25,
  2,
  true,
  '2024-01-03T10:00:00Z',
  '2024-01-03T10:00:00Z'
),
(
  '99999999-9999-9999-9999-999999999995',
  '99999999-9999-9999-9999-999999999998',
  'String Reversal',
  'Build a function that reverses a string without using built-in methods.',
  'code_challenge',
  '# String Reversal Challenge

## Objective
Write a JavaScript function that reverses a string without using the built-in `reverse()` method.

## Challenge Description
Create a function called `reverseString` that takes a string as input and returns the string reversed.

## Requirements
- Function name: `reverseString`
- Input: A string
- Output: The string reversed
- Do NOT use the built-in `reverse()` method
- Handle empty strings

## Examples
```javascript
reverseString("hello") // Should return "olleh"
reverseString("JavaScript") // Should return "tpircSavaJ"
reverseString("") // Should return ""
reverseString("a") // Should return "a"
```

## Starter Code
```javascript
function reverseString(str) {
    // Your code here
    
}

// Test your function
console.log(reverseString("hello")); // Expected: "olleh"
console.log(reverseString("JavaScript")); // Expected: "tpircSavaJ"
console.log(reverseString("")); // Expected: ""
```

## Hints
- You can iterate through the string from the end to the beginning
- Build a new string character by character
- Or you could convert to an array, reverse manually, then join
- Remember: strings are immutable in JavaScript

Good luck!',
  35,
  3,
  true,
  '2024-01-03T10:00:00Z',
  '2024-01-03T10:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  module_id = EXCLUDED.module_id,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  content_type = EXCLUDED.content_type,
  content_text = EXCLUDED.content_text,
  duration_minutes = EXCLUDED.duration_minutes,
  order_index = EXCLUDED.order_index,
  is_published = EXCLUDED.is_published,
  updated_at = EXCLUDED.updated_at;