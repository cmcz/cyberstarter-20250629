import type { Course, Module, Lesson } from '@/types';

export const mockCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch. Master HTML, CSS, JavaScript, React, Node.js, and databases.',
    thumbnail_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor_id: 'instructor-1',
    category: 'web-development',
    type: 'lecture',
    difficulty_level: 'beginner',
    duration_hours: 40,
    price: 99.99,
    is_published: true,
    tags: ['html', 'css', 'javascript', 'react', 'nodejs', 'fullstack'],
    created_at: '2024-01-01T10:00:00Z',
    updated_at: '2024-01-01T10:00:00Z',
    enrollment_count: 1250,
    rating: 4.8,
  },
  {
    id: 'course-2',
    title: 'Advanced React Development',
    description: 'Master advanced React concepts including hooks, context, performance optimization, and testing.',
    thumbnail_url: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor_id: 'instructor-2',
    category: 'web-development',
    type: 'lecture',
    difficulty_level: 'advanced',
    duration_hours: 25,
    price: 79.99,
    is_published: true,
    tags: ['react', 'hooks', 'context', 'testing', 'performance'],
    created_at: '2024-01-05T14:30:00Z',
    updated_at: '2024-01-05T14:30:00Z',
    enrollment_count: 890,
    rating: 4.9,
  },
  {
    id: 'course-3',
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis, visualization, and machine learning.',
    thumbnail_url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor_id: 'instructor-3',
    category: 'data-science',
    type: 'lecture',
    difficulty_level: 'intermediate',
    duration_hours: 35,
    price: 89.99,
    is_published: true,
    tags: ['python', 'data-analysis', 'pandas', 'numpy', 'matplotlib'],
    created_at: '2024-01-08T09:15:00Z',
    updated_at: '2024-01-08T09:15:00Z',
    enrollment_count: 2100,
    rating: 4.7,
  },
  {
    id: 'course-4',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning algorithms, supervised and unsupervised learning.',
    thumbnail_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor_id: 'instructor-4',
    category: 'machine-learning',
    type: 'lecture',
    difficulty_level: 'intermediate',
    duration_hours: 30,
    price: 119.99,
    is_published: true,
    tags: ['machine-learning', 'algorithms', 'supervised', 'unsupervised'],
    created_at: '2024-01-12T16:45:00Z',
    updated_at: '2024-01-12T16:45:00Z',
    enrollment_count: 1680,
    rating: 4.6,
  },
  {
    id: 'course-5',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native and Expo.',
    thumbnail_url: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor_id: 'instructor-5',
    category: 'mobile-development',
    type: 'lecture',
    difficulty_level: 'intermediate',
    duration_hours: 28,
    price: 94.99,
    is_published: true,
    tags: ['react-native', 'mobile', 'ios', 'android', 'expo'],
    created_at: '2024-01-15T11:20:00Z',
    updated_at: '2024-01-15T11:20:00Z',
    enrollment_count: 945,
    rating: 4.5,
  },
  {
    id: 'course-6',
    title: 'DevOps and Cloud Computing',
    description: 'Learn DevOps practices, containerization with Docker, and cloud deployment.',
    thumbnail_url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor_id: 'instructor-6',
    category: 'devops',
    type: 'lecture',
    difficulty_level: 'advanced',
    duration_hours: 32,
    price: 129.99,
    is_published: true,
    tags: ['devops', 'docker', 'kubernetes', 'aws', 'ci-cd'],
    created_at: '2024-01-18T13:10:00Z',
    updated_at: '2024-01-18T13:10:00Z',
    enrollment_count: 756,
    rating: 4.8,
  },
];

// Course modules
export const courseModules: Module[] = [
  // Course 1 modules
  {
    id: 'module-1',
    course_id: 'course-1',
    title: 'HTML & CSS Fundamentals',
    description: 'Learn the building blocks of web development with HTML and CSS.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-01T10:00:00Z',
    updated_at: '2024-01-01T10:00:00Z',
  },
  {
    id: 'module-2',
    course_id: 'course-1',
    title: 'JavaScript Essentials',
    description: 'Master JavaScript fundamentals and DOM manipulation.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-01T10:00:00Z',
    updated_at: '2024-01-01T10:00:00Z',
  },
  {
    id: 'module-3',
    course_id: 'course-1',
    title: 'React Introduction',
    description: 'Get started with React components and state management.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-01T10:00:00Z',
    updated_at: '2024-01-01T10:00:00Z',
  },
  // Course 2 modules
  {
    id: 'module-4',
    course_id: 'course-2',
    title: 'Advanced React Hooks',
    description: 'Deep dive into React hooks and custom hook patterns.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-05T14:30:00Z',
    updated_at: '2024-01-05T14:30:00Z',
  },
  {
    id: 'module-5',
    course_id: 'course-2',
    title: 'Performance Optimization',
    description: 'Learn techniques to optimize React application performance.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-05T14:30:00Z',
    updated_at: '2024-01-05T14:30:00Z',
  },
  // Course 3 modules
  {
    id: 'module-6',
    course_id: 'course-3',
    title: 'Python Basics for Data Science',
    description: 'Python fundamentals with focus on data science applications.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-08T09:15:00Z',
    updated_at: '2024-01-08T09:15:00Z',
  },
  {
    id: 'module-7',
    course_id: 'course-3',
    title: 'Data Analysis with Pandas',
    description: 'Master data manipulation and analysis using Pandas.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-08T09:15:00Z',
    updated_at: '2024-01-08T09:15:00Z',
  },
];

export const courseLessons: Lesson[] = [
  // Module 1 lessons
  {
    id: 'lesson-1',
    module_id: 'module-1',
    title: 'Introduction to HTML',
    description: 'Learn the basics of HTML structure and semantic elements.',
    content_type: 'video',
    content_text: `# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags.

## Basic HTML Structure

Every HTML document has a basic structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is my first paragraph.</p>
</body>
</html>
\`\`\`

## Common HTML Elements

- **Headings**: \`<h1>\` to \`<h6>\`
- **Paragraphs**: \`<p>\`
- **Links**: \`<a href="url">Link text</a>\`
- **Images**: \`<img src="image.jpg" alt="Description">\`
- **Lists**: \`<ul>\`, \`<ol>\`, \`<li>\`

## Semantic HTML

Use semantic elements to give meaning to your content:

- \`<header>\` - Page or section header
- \`<nav>\` - Navigation links
- \`<main>\` - Main content
- \`<article>\` - Independent content
- \`<section>\` - Thematic grouping
- \`<footer>\` - Page or section footer`,
    duration_minutes: 25,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-01T10:00:00Z',
    updated_at: '2024-01-01T10:00:00Z',
  },
  {
    id: 'lesson-2',
    module_id: 'module-1',
    title: 'CSS Styling Basics',
    description: 'Learn how to style HTML elements with CSS.',
    content_type: 'video',
    content_text: `# CSS Styling Basics

CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the visual presentation of HTML elements.

## CSS Syntax

CSS rules consist of a selector and declaration block:

\`\`\`css
selector {
    property: value;
    property: value;
}
\`\`\`

## Common CSS Properties

### Text Styling
\`\`\`css
h1 {
    color: blue;
    font-size: 24px;
    font-family: Arial, sans-serif;
    text-align: center;
}
\`\`\`

### Box Model
\`\`\`css
.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 10px;
    border: 2px solid black;
    background-color: lightgray;
}
\`\`\`

### Layout with Flexbox
\`\`\`css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
\`\`\`

## CSS Selectors

- **Element**: \`p { }\`
- **Class**: \`.classname { }\`
- **ID**: \`#idname { }\`
- **Descendant**: \`div p { }\`
- **Pseudo-classes**: \`a:hover { }\``,
    duration_minutes: 30,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-01T10:00:00Z',
    updated_at: '2024-01-01T10:00:00Z',
  },
  // Module 2 lessons
  {
    id: 'lesson-3',
    module_id: 'module-2',
    title: 'JavaScript Variables and Data Types',
    description: 'Understanding JavaScript variables, data types, and basic operations.',
    content_type: 'video',
    content_text: `# JavaScript Variables and Data Types

JavaScript is a dynamic programming language that powers interactive web pages.

## Variables

You can declare variables using \`let\`, \`const\`, or \`var\`:

\`\`\`javascript
let name = "John";
const age = 25;
var city = "New York";
\`\`\`

## Data Types

### Primitive Types
\`\`\`javascript
// String
let message = "Hello, World!";

// Number
let count = 42;
let price = 19.99;

// Boolean
let isActive = true;

// Undefined
let value;

// Null
let data = null;
\`\`\`

### Objects and Arrays
\`\`\`javascript
// Object
let person = {
    name: "Alice",
    age: 30,
    city: "Boston"
};

// Array
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
\`\`\`

## Basic Operations

### Arithmetic
\`\`\`javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
\`\`\`

### String Operations
\`\`\`javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// Template literals
let greeting = \`Hello, \${fullName}!\`;
\`\`\``,
    duration_minutes: 35,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-01T10:00:00Z',
    updated_at: '2024-01-01T10:00:00Z',
  },
];

// Helper functions
export const getCourseModulesByCourseId = (courseId: string): Module[] => {
  return courseModules.filter(module => module.course_id === courseId);
};

export const getCourseLessonsByModuleId = (moduleId: string): Lesson[] => {
  return courseLessons.filter(lesson => lesson.module_id === moduleId);
};