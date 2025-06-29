import type { CodeChallenge } from '@/types';

export const mockCodeChallenges: CodeChallenge[] = [
  {
    id: 'code-challenge-1',
    lesson_id: 'demo-challenge-lesson-1',
    title: 'Array Sum Function',
    description: 'Write a function that calculates the sum of all numbers in an array.',
    challenge_type: 'algorithm',
    starter_code: `function arraySum(numbers) {
  // Your code here
  // Return the sum of all numbers in the array
}

// Test cases:
// arraySum([1, 2, 3, 4, 5]) should return 15
// arraySum([]) should return 0
// arraySum([-1, 1, -2, 2]) should return 0`,
    submission_requirements: [
      'Function must handle empty arrays',
      'Function must work with negative numbers',
      'Function must return a number',
      'All test cases must pass'
    ],
    time_limit_minutes: 30,
    difficulty_level: 'beginner',
    test_cases: [
      {
        id: 'test-1-1',
        challenge_id: 'code-challenge-1',
        name: 'Basic sum test',
        description: 'Test with positive numbers',
        test_command: 'arraySum([1, 2, 3, 4, 5]) === 15',
        points: 25,
        is_hidden: false
      },
      {
        id: 'test-1-2',
        challenge_id: 'code-challenge-1',
        name: 'Empty array test',
        description: 'Test with empty array',
        test_command: 'arraySum([]) === 0',
        points: 25,
        is_hidden: false
      },
      {
        id: 'test-1-3',
        challenge_id: 'code-challenge-1',
        name: 'Mixed numbers test',
        description: 'Test with positive and negative numbers',
        test_command: 'arraySum([-1, 1, -2, 2]) === 0',
        points: 25,
        is_hidden: false
      },
      {
        id: 'test-1-4',
        challenge_id: 'code-challenge-1',
        name: 'Large numbers test',
        description: 'Test with larger numbers',
        test_command: 'arraySum([100, 200, 300]) === 600',
        points: 25,
        is_hidden: true
      }
    ],
    created_at: '2024-01-03T10:00:00Z',
    updated_at: '2024-01-03T10:00:00Z',
  },
  {
    id: 'code-challenge-2',
    lesson_id: 'demo-challenge-lesson-1',
    title: 'Find Maximum Value',
    description: 'Implement a function that finds the maximum value in an array without using Math.max().',
    challenge_type: 'algorithm',
    starter_code: `function findMax(numbers) {
  // Your code here
  // Find and return the maximum value in the array
  // Do not use Math.max() or similar built-in functions
}

// Test cases:
// findMax([1, 5, 3, 9, 2]) should return 9
// findMax([-1, -5, -3]) should return -1
// findMax([42]) should return 42`,
    submission_requirements: [
      'Cannot use Math.max() or similar built-in functions',
      'Must handle arrays with negative numbers',
      'Must handle single-element arrays',
      'Function must return the correct maximum value'
    ],
    time_limit_minutes: 25,
    difficulty_level: 'beginner',
    test_cases: [
      {
        id: 'test-2-1',
        challenge_id: 'code-challenge-2',
        name: 'Basic max test',
        description: 'Test with mixed positive numbers',
        test_command: 'findMax([1, 5, 3, 9, 2]) === 9',
        points: 30,
        is_hidden: false
      },
      {
        id: 'test-2-2',
        challenge_id: 'code-challenge-2',
        name: 'Negative numbers test',
        description: 'Test with negative numbers',
        test_command: 'findMax([-1, -5, -3]) === -1',
        points: 30,
        is_hidden: false
      },
      {
        id: 'test-2-3',
        challenge_id: 'code-challenge-2',
        name: 'Single element test',
        description: 'Test with single element array',
        test_command: 'findMax([42]) === 42',
        points: 20,
        is_hidden: false
      },
      {
        id: 'test-2-4',
        challenge_id: 'code-challenge-2',
        name: 'Edge case test',
        description: 'Test with zeros and negatives',
        test_command: 'findMax([0, -1, -2, 0]) === 0',
        points: 20,
        is_hidden: true
      }
    ],
    created_at: '2024-01-03T10:30:00Z',
    updated_at: '2024-01-03T10:30:00Z',
  },
  {
    id: 'code-challenge-3',
    lesson_id: 'demo-challenge-lesson-1',
    title: 'String Reversal',
    description: 'Create a function that reverses a string without using built-in reverse methods.',
    challenge_type: 'algorithm',
    starter_code: `function reverseString(str) {
  // Your code here
  // Reverse the string without using built-in reverse methods
}

// Test cases:
// reverseString("hello") should return "olleh"
// reverseString("") should return ""
// reverseString("a") should return "a"
// reverseString("JavaScript") should return "tpircSavaJ"`,
    submission_requirements: [
      'Cannot use built-in reverse methods',
      'Must handle empty strings',
      'Must handle single character strings',
      'Function must return a string'
    ],
    time_limit_minutes: 20,
    difficulty_level: 'beginner',
    test_cases: [
      {
        id: 'test-3-1',
        challenge_id: 'code-challenge-3',
        name: 'Basic reverse test',
        description: 'Test with simple string',
        test_command: 'reverseString("hello") === "olleh"',
        points: 25,
        is_hidden: false
      },
      {
        id: 'test-3-2',
        challenge_id: 'code-challenge-3',
        name: 'Empty string test',
        description: 'Test with empty string',
        test_command: 'reverseString("") === ""',
        points: 25,
        is_hidden: false
      },
      {
        id: 'test-3-3',
        challenge_id: 'code-challenge-3',
        name: 'Single character test',
        description: 'Test with single character',
        test_command: 'reverseString("a") === "a"',
        points: 25,
        is_hidden: false
      },
      {
        id: 'test-3-4',
        challenge_id: 'code-challenge-3',
        name: 'Complex string test',
        description: 'Test with longer string',
        test_command: 'reverseString("JavaScript") === "tpircSavaJ"',
        points: 25,
        is_hidden: true
      }
    ],
    created_at: '2024-01-03T11:00:00Z',
    updated_at: '2024-01-03T11:00:00Z',
  },
  {
    id: 'code-challenge-4',
    lesson_id: 'demo-challenge-lesson-1',
    title: 'Palindrome Checker',
    description: 'Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).',
    challenge_type: 'algorithm',
    starter_code: `function isPalindrome(str) {
  // Your code here
  // Return true if the string is a palindrome, false otherwise
  // Consider only alphanumeric characters and ignore case
}

// Test cases:
// isPalindrome("racecar") should return true
// isPalindrome("hello") should return false
// isPalindrome("A man a plan a canal Panama") should return true
// isPalindrome("") should return true`,
    submission_requirements: [
      'Must ignore spaces and punctuation',
      'Must be case-insensitive',
      'Must handle empty strings',
      'Function must return a boolean'
    ],
    time_limit_minutes: 35,
    difficulty_level: 'intermediate',
    test_cases: [
      {
        id: 'test-4-1',
        challenge_id: 'code-challenge-4',
        name: 'Simple palindrome test',
        description: 'Test with simple palindrome',
        test_command: 'isPalindrome("racecar") === true',
        points: 20,
        is_hidden: false
      },
      {
        id: 'test-4-2',
        challenge_id: 'code-challenge-4',
        name: 'Non-palindrome test',
        description: 'Test with non-palindrome',
        test_command: 'isPalindrome("hello") === false',
        points: 20,
        is_hidden: false
      },
      {
        id: 'test-4-3',
        challenge_id: 'code-challenge-4',
        name: 'Complex palindrome test',
        description: 'Test with spaces and punctuation',
        test_command: 'isPalindrome("A man a plan a canal Panama") === true',
        points: 30,
        is_hidden: false
      },
      {
        id: 'test-4-4',
        challenge_id: 'code-challenge-4',
        name: 'Empty string test',
        description: 'Test with empty string',
        test_command: 'isPalindrome("") === true',
        points: 15,
        is_hidden: false
      },
      {
        id: 'test-4-5',
        challenge_id: 'code-challenge-4',
        name: 'Case sensitivity test',
        description: 'Test case insensitivity',
        test_command: 'isPalindrome("RaceCar") === true',
        points: 15,
        is_hidden: true
      }
    ],
    created_at: '2024-01-03T11:30:00Z',
    updated_at: '2024-01-03T11:30:00Z',
  },
  {
    id: 'code-challenge-5',
    lesson_id: 'demo-challenge-lesson-1',
    title: 'FizzBuzz Implementation',
    description: 'Implement the classic FizzBuzz problem: print numbers 1 to n, but replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".',
    challenge_type: 'algorithm',
    starter_code: `function fizzBuzz(n) {
  // Your code here
  // Return an array with FizzBuzz sequence from 1 to n
}

// Test cases:
// fizzBuzz(15) should return:
// [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]`,
    submission_requirements: [
      'Must return an array',
      'Multiples of 3 should be "Fizz"',
      'Multiples of 5 should be "Buzz"',
      'Multiples of both 3 and 5 should be "FizzBuzz"',
      'All other numbers should remain as numbers'
    ],
    time_limit_minutes: 25,
    difficulty_level: 'beginner',
    test_cases: [
      {
        id: 'test-5-1',
        challenge_id: 'code-challenge-5',
        name: 'Basic FizzBuzz test',
        description: 'Test with n=15',
        test_command: 'JSON.stringify(fizzBuzz(15)) === JSON.stringify([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"])',
        points: 40,
        is_hidden: false
      },
      {
        id: 'test-5-2',
        challenge_id: 'code-challenge-5',
        name: 'Small range test',
        description: 'Test with n=5',
        test_command: 'JSON.stringify(fizzBuzz(5)) === JSON.stringify([1, 2, "Fizz", 4, "Buzz"])',
        points: 30,
        is_hidden: false
      },
      {
        id: 'test-5-3',
        challenge_id: 'code-challenge-5',
        name: 'Single element test',
        description: 'Test with n=1',
        test_command: 'JSON.stringify(fizzBuzz(1)) === JSON.stringify([1])',
        points: 15,
        is_hidden: false
      },
      {
        id: 'test-5-4',
        challenge_id: 'code-challenge-5',
        name: 'Extended range test',
        description: 'Test with n=30',
        test_command: 'fizzBuzz(30).length === 30 && fizzBuzz(30)[29] === "FizzBuzz"',
        points: 15,
        is_hidden: true
      }
    ],
    created_at: '2024-01-03T12:00:00Z',
    updated_at: '2024-01-03T12:00:00Z',
  },
];

// Helper function to get code challenges by lesson ID
export const getCodeChallengesByLessonId = (lessonId: string): CodeChallenge[] => {
  return mockCodeChallenges.filter(challenge => challenge.lesson_id === lessonId);
};

// Environment variable to control mock data usage
export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';